import { ApiError } from "../../components/ui/ApiError/ApiError";
import { formatApiError } from "../../utils/apiErrors";
import { useRef, useState } from "react";
import { t } from "../../i18n";
import { useDialogApi } from "../../context/DialogContext";
import { useRemoteServerEnabled, REMOTE_SERVER_CHANGE_EVENT } from "../../context/RemoteServerContext";
import { useIsMobile } from "../../hooks/useIsMobile";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { Button } from "../../components/ui/Button/Button";
import { downloadJson } from "../../utils/downloadJson";
import { DataImportError, exportData, importData, type TransferKind } from "../../utils/dataTransfer";
import styles from "../GlobalsPage.module.scss";
import local from "./DownloadsPage.module.scss";

const sections: { kind: TransferKind; title: string; description: string; download: string; upload: string }[] = [
  { kind: "scripts", title: "Действия удалённых команд", description: "Привязки команд к скриптам Home Assistant и условия запуска. Самих скриптов HA в файле нет.", download: "Скачать скрипты", upload: "Загрузить скрипты" },
  { kind: "scenarios", title: "Сценарии", description: "Все разделы «Команды»: основные, второстепенные, прямые, шаблоны и ответы по умолчанию. ID и связи сохраняются.", download: "Скачать сценарии", upload: "Загрузить сценарии" },
  { kind: "settings", title: "Настройки интеграции", description: "Тема, параметры подключения, API и звуки таймеров и будильников. Язык интерфейса в файл не входит.", download: "Скачать настройки", upload: "Загрузить настройки" },
];

export const DownloadsPage = () => {
  const api = useDialogApi();
  const remoteEnabled = useRemoteServerEnabled();
  const isMobile = useIsMobile();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const retryAction = useRef<(() => Promise<void>) | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const kind = useRef<TransferKind>("scripts");
  const run = async (action: () => Promise<void>, retryable = false) => {
    retryAction.current = retryable ? action : null;
    setBusy(true); setMessage(""); setError(false);
    try { await action(); } catch (reason) {
      setError(true);
      setMessage(reason instanceof DataImportError ? reason.message : formatApiError(reason));
    } finally { setBusy(false); }
  };
  return <>
    <MobileHeader title={t("Импорт и экспорт")} />
    <div className={`${styles.page} ${local.page}`}>
      <NavigationTabs />
      {!isMobile && <h1>{t("Импорт и экспорт")}</h1>}
      <div className={local.grid}>
        {sections.filter(section => section.kind === "scripts" ? remoteEnabled === true : section.kind !== "scenarios" || remoteEnabled === false).map(section => <section className={local.card} key={section.kind}>
          <h2>{t(section.title)}</h2>
          <p className={local.description}>{t(section.description)}</p>
          <div className={local.actions}>
            <Button disabled={busy} onClick={() => run(async () => {
              downloadJson(`ha-dialog-ui-${section.kind}.json`, await exportData(api, section.kind));
            }, true)}>{t(section.download)}</Button>
            <Button variant="secondary" disabled={busy} onClick={() => {
              kind.current = section.kind; input.current?.click();
            }}>{t(section.upload)}</Button>
          </div>
        </section>)}
      </div>
      <input ref={input} type="file" accept=".json,application/json" hidden onChange={event => {
        const file = event.target.files?.[0];
        const selectedKind = kind.current;
        event.target.value = "";
        if (!file) return;
        void run(async () => {
          const data = await importData(api, selectedKind, await file.text());
          if (selectedKind === "settings" && data !== null && typeof data === "object" && !Array.isArray(data)) {
            if (typeof data.theme === "string") window.dispatchEvent(new CustomEvent("ha-dialog-ui-theme-change", { detail: data.theme }));
            if (typeof data.active_remout === "boolean") window.dispatchEvent(new CustomEvent(REMOTE_SERVER_CHANGE_EVENT, { detail: data.active_remout }));
          }
          setMessage("Данные загружены.");
        });
      }} />
      {busy && <p role="status">{t("Обработка файла...")}</p>}
      <ApiError error={error ? message : null} busy={busy} retry={retryAction.current ? () => { if (retryAction.current) void run(retryAction.current, true); } : undefined} />
      {!error && message && <p role="status">{t(message)}</p>}
    </div>

  </>;
};
