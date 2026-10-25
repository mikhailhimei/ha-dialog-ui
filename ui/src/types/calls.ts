export interface CallDevice { id: string; name: string; node_id: string; online: boolean; }
export interface SpeakerCall { id: string; source_device_id: string | null; source_type?: "speaker" | "browser"; target_device_id: string; state: "ringing" | "connecting" | "active"; }
export interface CallsState { available: boolean; incoming?: {id: string; source_device_id: string}[]; owned_call_id?: string | null; devices: CallDevice[]; calls: SpeakerCall[]; }
