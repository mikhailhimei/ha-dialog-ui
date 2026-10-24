/* Streaming box-filter resampler: arbitrary context rate -> 16 kHz mono S16LE.
 * Keeps one 40 ms packet and fractional sample state; never accumulates a backlog. */
class CallCapture extends AudioWorkletProcessor {
  constructor() {
    super();
    this.pending = 0;
    this.port.onmessage = (event) => { if (event.data === "ack") this.pending = Math.max(0, this.pending - 1); };
    this.ratio = sampleRate / 16000;
    this.sum = 0;
    this.weight = 0;
    this.index = 0;
    this.packet = new ArrayBuffer(1280);
    this.view = new DataView(this.packet);
  }
  process(inputs, outputs) {
    for (const channel of outputs[0] || []) channel.fill(0);
    const samples = inputs[0]?.[0];
    if (!samples) return true;
    for (const sample of samples) {
      let remaining = 1;
      while (remaining > 1e-9) {
        const take = Math.min(remaining, this.ratio - this.weight);
        this.sum += sample * take;
        this.weight += take;
        remaining -= take;
        if (this.weight >= this.ratio - 1e-9) {
          const value = Math.max(-1, Math.min(1, this.sum / this.ratio));
          this.view.setInt16(this.index * 2, Math.max(-32768, Math.min(32767, Math.round(value * 32768))), true);
          this.index++;
          this.sum = this.weight = 0;
          if (this.index === 640) {
            if (this.pending < 3) {
              this.pending++;
              this.port.postMessage(this.packet, [this.packet]);
            }
            this.packet = new ArrayBuffer(1280);
            this.view = new DataView(this.packet);
            this.index = 0;
          }
        }
      }
    }
    return true;
  }
}
registerProcessor("ha-call-capture", CallCapture);
