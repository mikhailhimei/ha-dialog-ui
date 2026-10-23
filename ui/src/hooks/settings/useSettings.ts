import { API_ENABLED_CHANGE_EVENT } from "../../context/ApiEnabledContext";
import { useCallback, useEffect, useState } from "react";
import { REMOTE_SERVER_CHANGE_EVENT } from "../../context/RemoteServerContext";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../useApiFeedback";
import type { MusicOption, RemoteSettings, Settings, TimerAlarmSettings } from "../../types/scripts";

export function useSettings() {
  const api = useDialogApi();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [musicOptions, setMusicOptions] = useState<MusicOption[]>([]);
  const settingsFeedback = useApiFeedback();
  const musicFeedback = useApiFeedback();
  const loadSettings = useCallback(() => settingsFeedback.run(async () => {
    setSettings(await api.getSettings());
  }, { retryable: true }), [api, settingsFeedback.run]);
  const loadMusicOptions = useCallback(() => musicFeedback.run(async () => {
    setMusicOptions(await api.getLocalMusicOptions());
  }, { retryable: true }), [api, musicFeedback.run]);
  useEffect(() => { void loadSettings(); }, [loadSettings]);
  useEffect(() => { void loadMusicOptions(); }, [loadMusicOptions]);
  const saveSettings = async (data: Omit<Partial<Settings>, "remout" | "timer_alarm"> & { remout?: Partial<RemoteSettings>; timer_alarm?: Partial<TimerAlarmSettings> }) => {
    await api.saveData(data, "save_settings");
    if (typeof data.api_commands_enabled === "boolean") {
      window.dispatchEvent(new CustomEvent(API_ENABLED_CHANGE_EVENT, { detail: data.api_commands_enabled }));
    }
    if (typeof data.active_remout === "boolean") {
      window.dispatchEvent(new CustomEvent(REMOTE_SERVER_CHANGE_EVENT, { detail: data.active_remout }));
    }
  };
  return { loading: settingsFeedback.busy, settings, musicOptions, saveSettings, settingsFeedback, musicFeedback };
}
