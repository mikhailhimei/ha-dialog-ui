export interface ScriptActionSummary {
  uuid: string;
  title: string;
}

export interface Condition {
  parent_type: string;
  children_type?: string;
  children_direct_type?: string;
}

export interface ScriptActionDetails {
  uuid: string;
  name: string;
  script_entity_id: string;
  conditions: Condition[];
}

export interface Settings {
  remout?: RemoteSettings;
  timer_alarm: TimerAlarmSettings;
  theme: string;
  is_admin: boolean;
  active_remout: boolean;
  client_id?: string;
  api_commands_enabled: boolean;
  api_commands_token?: string;
}

export interface RemoteSettings {
  base_url?: string;
  client_id?: string;
  token?: string;
}

export interface TimerAlarmSettings {
  global_music_timer?: string;
  global_music_alarm?: string;
}

export interface MusicOption {
  value: string;
  label: string;
}
