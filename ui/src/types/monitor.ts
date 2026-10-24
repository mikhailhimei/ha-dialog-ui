export interface MonitorDevice {
  id: string;
  name: string;
  node_id: string;
  source: boolean;
  listener: boolean;
  online: boolean;
  transmitting: boolean;
  source_state?: string;
}
export interface MonitorState {
  available: boolean;
  devices: MonitorDevice[];
  sessions: { source_device_id: string; listener_device_id: string }[];
  owned_source_id?: string | null;
}
export interface MonitorAudioEvent {
  type: "audio" | "status";
  pcm?: string;
  rate?: number;
  connected?: boolean;
}
