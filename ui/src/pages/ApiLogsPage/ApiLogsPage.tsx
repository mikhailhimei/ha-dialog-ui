import { useEffect, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { ApiError } from "../../components/ui/ApiError/ApiError";
import { t } from "../../i18n";
import styles from "./ApiLogsPage.module.scss";
import pageStyles from "../GlobalsPage.module.scss";

interface ApiLog {
  timestamp: string; method: string; path: string; phase: string;
  request_body?: unknown; response_body?: unknown;
  status: number | null; duration_ms: number | null; event: string | null;
}
export function ApiLogsPage() {
  const api = useDialogApi();
  const feedback = useApiFeedback();
  const [logs, setLogs] = useState<ApiLog[]>([]);
  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout>;
    const load = async () => {
      await feedback.run(async () => {
        const result = await api.getData<{logs: ApiLog[]}>("get_api_logs");
        if (active) {
          setLogs(result.logs);
          timer = setTimeout(() => { void load(); }, 3000);
        }
      }, {retryable: true});
    };
    void load();
    return () => { active = false; clearTimeout(timer); };
  }, [api, feedback.run]);
  return <>
    <MobileHeader title={t("Логи")} />
    <main className={pageStyles.page}>
      <NavigationTabs />
      <h1 className={styles.heading}>{t("Логи")}</h1>
      <p className={styles.note}>{t("Последние 200 записей API с телами запросов и ответов. Обновление каждые 3 секунды. После перезапуска журнал очищается. Секретные поля и настроенные токены скрыты.")}</p>
      <ApiError {...feedback} />
      {!logs.length && !feedback.busy && !feedback.error && <p>{t("Запросов к API пока нет.")}</p>}
      <div className={styles.entries}>
        {logs.map((log) => <article key={`${log.timestamp}-${log.phase}`} className={styles.entry}>
          <div className={styles.line}><time dateTime={log.timestamp}>{new Date(log.timestamp).toLocaleString()}</time><strong>{log.method} {log.path}</strong></div>
          <div className={styles.line}><span>{t(({connected: "SSE подключён", event: "Событие SSE", completed: "Запрос завершён"})[log.phase] ?? log.phase)}</span>
            {log.status !== null && <span className={log.status >= 400 ? styles.error : undefined}>HTTP {log.status}</span>}
            {log.duration_ms !== null && <span>{log.duration_ms} {t("мс")}</span>}
            {log.event && <code>{log.event}</code>}
          </div>
          {([ ["Тело запроса", log.request_body], ["Тело ответа", log.response_body] ] as const).map(([label, body]) => body != null &&
            <details key={label} className={styles.body}><summary>{t(label)}</summary><pre>{JSON.stringify(body, null, 2)}</pre></details>
          )}
        </article>)}
      </div>
    </main>
  </>;
}
