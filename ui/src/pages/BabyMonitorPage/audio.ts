import type { DialogApi } from "../../api/dialog-api";

export class MonitorAudio {
  private context?: AudioContext;
  private ownsContext = true;
  private unsubscribe?: () => void | Promise<void>;
  private closed = false;
  private nextTime = 0;
  private sources = new Set<AudioBufferSourceNode>();
  async prepare(context?: AudioContext) {
    this.ownsContext = !context;
    this.context = context ?? new AudioContext();
    await this.context.resume();
  }
  async listen(
    api: DialogApi,
    nodeId: string,
    connectionChanged: (connected: boolean) => void,
  ) {
    return this.listenWith((callback) => api.monitorAudio(nodeId, callback), connectionChanged);
  }
  async listenWith(
    subscribe: (callback: (event: import("../../types/monitor").MonitorAudioEvent) => void) => Promise<() => void | Promise<void>>,
    connectionChanged: (connected: boolean) => void,
  ) {
    const unsubscribe = await subscribe((event) => {
      const context = this.context;
      if (this.closed || !context) return;
      if (event.type === "status") {
        if (!event.connected) this.clear();
        connectionChanged(Boolean(event.connected));
        return;
      }
      if (event.type !== "audio" || event.rate !== 16000 || !event.pcm) return;
      const bytes = Uint8Array.from(atob(event.pcm), (c) => c.charCodeAt(0));
      const view = new DataView(bytes.buffer);
      const buffer = context.createBuffer(1, bytes.length / 2, event.rate);
      const channel = buffer.getChannelData(0);
      for (let i = 0; i < channel.length; i++)
        channel[i] = view.getInt16(i * 2, true) / 32768;
      if (this.nextTime > context.currentTime + 0.3) this.clear();
      this.nextTime = Math.max(this.nextTime, context.currentTime + 0.06);
      const source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      this.sources.add(source);
      source.onended = () => this.sources.delete(source);
      source.start(this.nextTime);
      this.nextTime += buffer.duration;
    });
    if (this.closed) void Promise.resolve(unsubscribe()).catch(() => {});
    else this.unsubscribe = unsubscribe;
  }
  private clear() {
    for (const source of this.sources) {
      try {
        source.stop();
      } catch {
        /* Already ended. */
      }
    }
    this.sources.clear();
    this.nextTime = 0;
  }
  close() {
    this.closed = true;
    this.clear();
    if (this.unsubscribe)
      void Promise.resolve(this.unsubscribe()).catch(() => {});
    this.unsubscribe = undefined;
    if (this.ownsContext) void this.context?.close().catch(() => {});
    this.context = undefined;
  }
}
