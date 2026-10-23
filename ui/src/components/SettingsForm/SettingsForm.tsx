import { t, useLanguage, setLanguage } from "../../i18n";

import { MusicOption, RemoteSettings, Settings, TimerAlarmSettings } from "../../types/scripts";
import { Input } from "../ui/Input/Input";
import { FieldHelp } from "../ui/FieldLabel/FieldLabel";
import { ToggleSwitch } from "../ui/ToggleSwitch";

import styles from "./SettingsForm.module.scss";

interface RemoteProps {
  data: RemoteSettings;
  onChange: (data: RemoteSettings) => void;
}

interface TimerAlarmProps {
  data: TimerAlarmSettings;
  musicOptions: MusicOption[];
  musicUnavailable: boolean;
  onChange: (data: TimerAlarmSettings) => void;
}

interface GeneralProps {
  data: Pick<Settings, "is_admin" | "theme" | "client_id">;
  onChange: (data: Pick<Settings, "is_admin" | "theme" | "client_id">) => void;
}

interface ConnectionProps {
  data: Pick<Settings, "active_remout" | "api_commands_enabled" | "api_commands_token">;
  onChange: (data: ConnectionProps["data"]) => void;
}

export const RemoteSettingsForm = ({ data, onChange }: RemoteProps) => {
  const updateField = (key: keyof RemoteSettings, value: string) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className={styles.form}>
      <Input label={t("Base URL")} value={data.base_url ?? ""} placeholder={t("http://192.168.31.83:9379")} onChange={(e) => updateField("base_url", e.target.value)} />
      <Input label={t("Token")} value={data.token ?? ""} placeholder={t("Bearer ...")} onChange={(e) => updateField("token", e.target.value)} />
    </div>
  );
};

export const TimerAlarmSettingsForm = ({ data, musicOptions, musicUnavailable, onChange }: TimerAlarmProps) => {
  const updateField = (key: keyof TimerAlarmSettings, value: string) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const renderMusicSelect = (
    label: string,
    key: keyof TimerAlarmSettings,
    value = "",
  ) => {
    const hasCurrentOption = musicOptions.some((option) => option.value === value);

    return (
      <label className={styles.field}>
        <span className={styles.label}>{t(label)}</span>
        <select
          className={styles.input}
          value={value}
          onChange={(event) => updateField(key, event.target.value)}
        >
          <option value="">{t("Не выбрано")}</option>
          {value && !hasCurrentOption && (
            <option value={value}>{value}</option>
          )}
          {musicOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <div className={styles.form}>
      {renderMusicSelect(
        "Global music timer",
        "global_music_timer",
        data.global_music_timer,
      )}
      {renderMusicSelect(
        "Global music alarm",
        "global_music_alarm",
        data.global_music_alarm,
      )}
      {musicOptions.length === 0 && !musicUnavailable && (
        <span className={styles.help}>{t("Музыка на сервере не найдена.")}</span>
      )}
    </div>
  );
};

export const GeneralSettingsForm = ({ data, onChange }: GeneralProps) => {
  const language = useLanguage();
  const updateField = <K extends keyof GeneralProps["data"]>(key: K, value: GeneralProps["data"][K]) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className={styles.form}>
      <label className={styles.field}>
        <span className={styles.label}>{t("Язык интерфейса")}</span>
        <select className={styles.input} value={language}
          onChange={event => setLanguage(event.target.value === 'en' ? 'en' : 'ru')}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </label>
      <Input
        label={t("Client ID")}
        value={data.client_id ?? ""}
        onChange={(e) => updateField("client_id", e.target.value)}
        placeholder={t("Уникальный идентификатор клиента")}
      />

      <label className={styles.field}>
        <span className={styles.label}>{t("Theme")}</span>
        <select className={styles.input} value={data.theme ?? "dark"} onChange={(e) => updateField("theme", e.target.value)}>
          <option value="dark">{t("dark")}</option>
          <option value="light">{t("light")}</option>
        </select>
      </label>

      <ToggleSwitch label={t("Is admin")} checked={Boolean(data.is_admin)} onChange={(e) => updateField("is_admin", e.target.checked)} />
    </div>
  );
};

export const ConnectionSettingsForm = ({ data, onChange }: ConnectionProps) => {
  const updateField = <K extends keyof ConnectionProps["data"]>(key: K, value: ConnectionProps["data"][K]) => onChange({ ...data, [key]: value });
  return <div className={styles.form}>
      <div className={styles.toggleHelp}>
        <ToggleSwitch label={t("Подключаться к удалённому серверу")} checked={Boolean(data.active_remout)} onChange={(e) => updateField("active_remout", e.target.checked)} />
        <FieldHelp label="Подключаться к удалённому серверу" description="Интеграция подключается к существующему удалённому серверу и получает от него команды по SSE. Для их выполнения используются «Действия удалённых команд», а локальные разделы команд скрываются. Этот переключатель не запускает новый сервер." />
      </div>

      <div className={styles.toggleHelp}>
        <ToggleSwitch label={t("Включить API")} checked={Boolean(data.api_commands_enabled)} onChange={(e) => updateField("api_commands_enabled", e.target.checked)} />
        <FieldHelp label="Включить API" description="Позволяет внешним приложениям отправлять команды в интеграцию и обмениваться с ней событиями по HTTP API. Адреса: /api/dialog/commands, /api/dialog/events, /api/dialog/event. Для доступа нужен токен API команд из поля ниже." />
      </div>

      {data.api_commands_enabled && (
        <Input
          label={t("API Commands Token")}
          value={data.api_commands_token ?? ""}
          onChange={(e) => updateField("api_commands_token", e.target.value)}
          placeholder={t("Ключ доступа для API endpoints")}
          type="password"
        />
      )}
  </div>;
};
