import type { DialogApi } from "../../api/dialog-api";
import { MonitorAudio } from "../BabyMonitorPage/audio.ts";

export function microphoneAvailable(): boolean {
  return Boolean(globalThis.isSecureContext && navigator.mediaDevices?.getUserMedia);
}
export function microphoneError(error: unknown): string {
  const name = error && typeof error === "object" && "name" in error ? String(error.name) : "";
  if (name === "NotAllowedError" || name === "SecurityError") return "Разрешите доступ к микрофону в настройках браузера и откройте HA по HTTPS.";
  if (name === "NotSupportedError") return "Этот браузер не поддерживает звонки. Откройте HA в актуальном Chrome или Safari.";
  if (name === "NotFoundError") return "Микрофон на этом устройстве не найден.";
  if (name === "NotReadableError") return "Микрофон занят другим приложением или недоступен.";
  return "Не удалось подключить микрофон или звук звонка. Проверьте разрешения и подключение.";
}

export interface CallOutputDevice { id: string; label: string; }
type OutputContext = AudioContext & { setSinkId?: (deviceId: string) => Promise<void>; sinkId?: string | object };
type OutputDevices = MediaDevices & { selectAudioOutput?: () => Promise<MediaDeviceInfo> };

export class BrowserCallAudio {
  private output = new MonitorAudio();
  private context?: AudioContext;
  private stream?: MediaStream;
  private input?: MediaStreamAudioSourceNode;
  private worklet?: AudioWorkletNode;
  private closed = false;
  private sending = false;
  private inFlight = 0;
  private failed = false;
  private muted = false;
  private outputs: CallOutputDevice[] = [];
  private api: DialogApi;
  private viewId: string;
  private onFailure: (message: string) => void;
  constructor(api: DialogApi, viewId: string, onFailure: (message: string) => void) { this.api = api; this.viewId = viewId; this.onFailure = onFailure; }
  setSending(value: boolean) { this.sending = value; }
  setMicrophoneMuted(muted: boolean) {
    this.muted = muted;
    for (const track of this.stream?.getAudioTracks() ?? []) track.enabled = !muted;
  }
  getOutputDevices(): CallOutputDevice[] { return [...this.outputs]; }
  canSelectOutput(): boolean {
    return typeof (this.context as OutputContext | undefined)?.setSinkId === "function" &&
      (typeof (navigator.mediaDevices as OutputDevices)?.selectAudioOutput === "function" || this.outputs.some(device => device.id !== "default"));
  }
  canPromptOutput(): boolean { return this.canSelectOutput() && typeof (navigator.mediaDevices as OutputDevices).selectAudioOutput === "function"; }
  async selectOutput(deviceId: string) {
    if (this.closed || !this.context) throw new DOMException("Call closed", "AbortError");
    const context = this.context as OutputContext;
    if (!context.setSinkId) throw new DOMException("Output selection unavailable", "NotSupportedError");
    await context.setSinkId(deviceId);
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    await context.resume();
  }
  async promptOutput(): Promise<CallOutputDevice> {
    const devices = navigator.mediaDevices as OutputDevices;
    if (!this.canPromptOutput() || !devices.selectAudioOutput) throw new DOMException("Output chooser unavailable", "NotSupportedError");
    const device = await devices.selectAudioOutput();
    await this.selectOutput(device.deviceId);
    return {id: device.deviceId, label: device.label};
  }
  async prepare() {
    if (!microphoneAvailable()) throw new DOMException("Secure microphone unavailable", "SecurityError");
    // Resume the output synchronously in the user's click gesture before permission awaits.
    this.context = new AudioContext();
    if (!this.context.audioWorklet || !globalThis.AudioWorkletNode) throw new DOMException("AudioWorklet unavailable", "NotSupportedError");
    await this.output.prepare(this.context);
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    const stream = await navigator.mediaDevices.getUserMedia({audio: {channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true}, video: false});
    if (this.closed) { stream.getTracks().forEach(track => track.stop()); throw new DOMException("Call closed", "AbortError"); }
    this.stream = stream;
    this.setMicrophoneMuted(this.muted);
    if (navigator.mediaDevices.enumerateDevices) {
      const devices = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      this.outputs = devices.filter(device => device.kind === "audiooutput" && device.deviceId).map(device => ({id: device.deviceId, label: device.label || device.deviceId}));
    }
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    // Microphone permission can change the mobile audio route or suspend Web Audio.
    await this.context!.resume();
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    for (const track of stream.getAudioTracks()) track.onended = () => this.fail("Микрофон отключён. Звонок завершён.");
    await this.context!.audioWorklet.addModule("/ha_dialog_ui_static/call-capture-worklet.js");
    if (this.closed) throw new DOMException("Call closed", "AbortError");
    this.input = this.context!.createMediaStreamSource(stream);
    this.worklet = new AudioWorkletNode(this.context!, "ha-call-capture", {numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1]});
    this.worklet.port.onmessage = (event: MessageEvent<ArrayBuffer>) => {
      this.worklet?.port.postMessage("ack");
      if (this.closed || !this.sending || this.inFlight >= 3) return;
      const bytes = new Uint8Array(event.data);
      if (bytes.length !== 1280) return;
      // Keep 40 ms silence packets flowing while muted so the call does not time out.
      // Clear already captured samples too, rather than wait for track.enabled to take effect.
      if (this.muted) bytes.fill(0);
      this.inFlight++;
      let raw = "";
      for (const value of bytes) raw += String.fromCharCode(value);
      void this.api.browserCallAudio(this.viewId, btoa(raw)).catch(() => this.fail("Потеряно соединение звонка.")).finally(() => { this.inFlight--; });
    };
    this.input.connect(this.worklet);
    // Worklet outputs silence; capture must never feed the microphone into local speakers.
    this.worklet.connect(this.context!.destination);
  }
  async resumePlayback() {
    if (this.closed || !this.context) return;
    await this.context.resume();
  }
  async listen() {
    await this.output.listenWith(callback => this.api.browserCallReceive(this.viewId, callback), () => {});
  }
  private fail(message: string) {
    if (this.closed || this.failed) return;
    this.failed = true;
    this.close();
    this.onFailure(message);
  }
  close() {
    this.closed = true;
    this.sending = false;
    this.output.close();
    if (this.worklet) { this.worklet.port.onmessage = null; this.worklet.disconnect(); }
    this.input?.disconnect();
    for (const track of this.stream?.getTracks() ?? []) { track.onended = null; track.stop(); }
    this.stream = undefined;
    void this.context?.close().catch(() => {});
    this.context = undefined;
  }
}
