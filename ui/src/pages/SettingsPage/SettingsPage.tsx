import { ApiError } from "../../components/ui/ApiError/ApiError";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import { t } from "../../i18n";
import { useEffect, useState } from "react";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useSettings } from "../../hooks/settings/useSettings";
import { RemoteSettings, Settings, TimerAlarmSettings } from "../../types/scripts";

import { Button } from "../../components/ui/Button/Button";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader"
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";

import {
  GeneralSettingsForm,
  ConnectionSettingsForm,
  RemoteSettingsForm,
  TimerAlarmSettingsForm,
} from "../../components/SettingsForm/SettingsForm";

import styles from "../GlobalsPage.module.scss";

const EMPTY_REMOUT: RemoteSettings = {
  base_url: "",
  token: "",
};

const EMPTY_TIMER_ALARM: TimerAlarmSettings = {
  global_music_timer: "",
  global_music_alarm: "",
};

const EMPTY_SETTINGS: Settings = {
  remout: EMPTY_REMOUT,
  timer_alarm: EMPTY_TIMER_ALARM,
  theme: "dark",
  is_admin: false,
  active_remout: false,
  client_id: "",
  api_commands_enabled: false,
  api_commands_token: "",
};

const normalizeRemout = (remout?: Partial<RemoteSettings>): RemoteSettings => ({
  base_url: remout?.base_url ?? "",
  token: remout?.token ?? "",
});

const normalizeTimerAlarm = (timerAlarm?: Partial<TimerAlarmSettings>): TimerAlarmSettings => ({
  global_music_timer: timerAlarm?.global_music_timer ?? "",
  global_music_alarm: timerAlarm?.global_music_alarm ?? "",
});

const normalizeSettings = (settings?: Partial<Settings> | null): Settings => ({
  call_music: settings?.call_music ?? "",
  remout: normalizeRemout(settings?.remout),
  timer_alarm: normalizeTimerAlarm(settings?.timer_alarm),
  theme: settings?.theme ?? "dark",
  is_admin: Boolean(settings?.is_admin),
  active_remout: Boolean(settings?.active_remout),
  client_id: settings?.client_id ?? "",
  api_commands_enabled: Boolean(settings?.api_commands_enabled),
  api_commands_token: settings?.api_commands_token ?? "",
});

const getObjectDiff = <T extends object>(current: T, initial: T) => {
  const diff: Partial<T> = {};

  Object.keys(current).forEach((key) => {
    const typedKey = key as keyof T;

    if (current[typedKey] !== initial[typedKey]) {
      diff[typedKey] = current[typedKey];
    }
  });

  return diff;
};

type SettingsSavePayload = Omit<Partial<Settings>, "remout" | "timer_alarm"> & {
  remout?: Partial<RemoteSettings>;
  timer_alarm?: Partial<TimerAlarmSettings>;
};

const getDiff = (current: Settings, initial: Settings): SettingsSavePayload => {
  const result: SettingsSavePayload = {};
  const timerAlarmDiff = getObjectDiff(current.timer_alarm, initial.timer_alarm);

  if (Object.keys(timerAlarmDiff).length > 0) result.timer_alarm = timerAlarmDiff;

  if (current.call_music !== initial.call_music) result.call_music = current.call_music;
  if (current.theme !== initial.theme) result.theme = current.theme;
  if (current.is_admin !== initial.is_admin) result.is_admin = current.is_admin;
  if (current.active_remout !== initial.active_remout) result.active_remout = current.active_remout;
  if (current.client_id !== initial.client_id) result.client_id = current.client_id;
  if (current.api_commands_enabled !== initial.api_commands_enabled) result.api_commands_enabled = current.api_commands_enabled;
  if (current.api_commands_token !== initial.api_commands_token) result.api_commands_token = current.api_commands_token;

  if (current.active_remout) {
    const remoutDiff = getObjectDiff(current.remout ?? EMPTY_REMOUT, initial.remout ?? EMPTY_REMOUT);

    if (Object.keys(remoutDiff).length > 0) result.remout = remoutDiff;
  }

  return result;
};

export const SettingsPage = () => {
  const isMobile = useIsMobile();
  const [settingsData, setSettingsData] = useState<Settings>(EMPTY_SETTINGS);
  const saveAction = useApiFeedback();
  const [initialData, setInitialData] = useState<Settings>(EMPTY_SETTINGS);

  const { settings, musicOptions, saveSettings, settingsFeedback, musicFeedback } = useSettings();

  useEffect(() => {
    if (!settings) return;

    const normalized = normalizeSettings(settings);

    setSettingsData(normalized);
    setInitialData(normalized);
    window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: normalized.theme }));
  }, [settings]);

  const handleGeneralChange = async (generalData: Partial<Settings>) => {
    setSettingsData(current => ({ ...current, ...generalData }));
    if (generalData.theme && generalData.theme !== settingsData.theme) {
      window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: generalData.theme }));
      await saveAction.run(async () => {
        await saveSettings({ theme: generalData.theme });
        setInitialData(current => ({ ...current, theme: generalData.theme! }));
      }, { exclusive: true });
    }
  };

  const handleSave = () => saveAction.run(async () => {
    await saveSettings(getDiff(settingsData, initialData));
    setInitialData(settingsData);
  }, { exclusive: true });

  const hasChanges = Boolean(settings) && Object.keys(getDiff(settingsData, initialData)).length > 0;

  return (
    <>
      <MobileHeader
        title={t("Настройки")}
      />

      <div className={styles.page}>
        <NavigationTabs />

        {!isMobile ? <h1>{t("Настройки")}</h1> : <></>}

        <div className={styles.settingsSections}>

          <ApiError {...settingsFeedback} />
          <ApiError {...musicFeedback} />
          <ApiError {...saveAction} />
          <section className={styles.settingsSection} aria-label={t("Общие")}><h2>{t("Общие")}</h2>
            <GeneralSettingsForm
              data={{
                is_admin: settingsData.is_admin,
                theme: settingsData.theme,
                client_id: settingsData.client_id,
              }}
              onChange={handleGeneralChange}
            />
          </section>

          <section className={styles.settingsSection} aria-label={t("Подключения")}><h2>{t("Подключения")}</h2>
            <div className={styles.connectionFields}><ConnectionSettingsForm data={settingsData} onChange={handleGeneralChange} />
            {settingsData.active_remout && <RemoteSettingsForm
              data={settingsData.remout ?? EMPTY_REMOUT}
              onChange={(remout) => setSettingsData(current => ({ ...current, remout }))}
            />}</div>
          </section>

          <section className={styles.settingsSection} aria-label={t("Timer / Alarm")}><h2>{t("Timer / Alarm")}</h2>
            <TimerAlarmSettingsForm
              data={settingsData.timer_alarm}
              callMusic={settingsData.call_music}
              onCallMusicChange={call_music => setSettingsData(current => ({ ...current, call_music }))}
              musicOptions={musicOptions}
              musicUnavailable={musicFeedback.busy || Boolean(musicFeedback.error)}
              onChange={(timer_alarm) => setSettingsData({ ...settingsData, timer_alarm })}
            />
          </section>

        </div>

        {hasChanges && (!isMobile ? <div className={styles.settingsActions}>
          <Button disabled={saveAction.busy || settingsFeedback.busy || !settings} onClick={handleSave}>{t("Сохранить")}</Button>
        </div> :
          <div className={styles.settingsMobileActions}>
            <Button
              variant="primary"
              disabled={saveAction.busy || settingsFeedback.busy || !settings}
              onClick={handleSave}
            >{t("Сохранить")}</Button>
          </div>
        )}
      </div >

    </>
  );
};
