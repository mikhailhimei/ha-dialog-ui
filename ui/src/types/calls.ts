export interface CallDevice { id: string; name: string; node_id: string; online: boolean; }
export interface SpeakerCall { id: string; source_device_id: string; target_device_id: string; state: "ringing" | "connecting" | "active"; }
export interface CallsState { available: boolean; devices: CallDevice[]; calls: SpeakerCall[]; }
