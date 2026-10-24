import { useEffect, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import { Toast } from "../ui/Toast/Toast";
import { Input } from "../ui/Input/Input";
import { Textarea } from "../ui/Textarea/Textarea";
import { Button } from "../ui/Button/Button";
import { Loader } from "../ui/Loader";
import { ApiError } from "../ui/ApiError/ApiError";
import { t } from "../../i18n";
import styles from "./WhisperPromptForm.module.scss";

interface Configuration { url: string; initial_prompt: string; has_token: boolean; }
export function WhisperPromptForm() {
  const api = useDialogApi();
  const feedback = useApiFeedback();
  const [configuration, setConfiguration] = useState<Configuration>({url: "", initial_prompt: "", has_token: false});
  const [token, setToken] = useState("");
  const [savedUrl, setSavedUrl] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [notification, setNotification] = useState<{message: string; warning: boolean} | null>(null);
  useEffect(() => {
    let active = true;
    void feedback.run(async () => {
      const result = await api.getData<Configuration>("get_whisper_prompt");
      if (active) { setConfiguration({...result, initial_prompt: Array.isArray(result.initial_prompt) ? result.initial_prompt.join("; ") : result.initial_prompt}); setSavedUrl(result.url); setLoaded(true); }
    }, {retryable: true});
    return () => { active = false; };
  }, [api, feedback.run]);
  const update = (patch: Partial<Configuration>) => { setConfiguration(current => ({...current, ...patch})); setNotification(null); };
  const send = (apply: boolean) => feedback.run(async () => {
    const result = await api.saveData({url: configuration.url, token, apply,
      initial_prompt: configuration.initial_prompt}, "save_whisper_prompt") as {initial_prompt: string | string[]; applied?: boolean};
    setConfiguration(current => ({...current, initial_prompt: Array.isArray(result.initial_prompt) ? result.initial_prompt.join("; ") : result.initial_prompt, has_token: Boolean(token.trim() || (current.has_token && configuration.url === savedUrl))}));
    setNotification({message: !apply ? "Сохранено в Home Assistant." : result.applied
      ? "Сохранено и применено в Whisper. Перезапуск контейнера не нужен."
      : "Сохранено в Home Assistant. Не удалось применить в Whisper. После восстановления подключения нажмите «Отправить в Whisper» повторно.", warning: apply && !result.applied});
    setSavedUrl(configuration.url); setToken("");
  }, {exclusive: true});
  return <section className={styles.form}>
    <ApiError {...feedback} />
    {!loaded && !feedback.error && <Loader />}
    {loaded && <>
      <Input label={t("Адрес API Whisper")} hint={t("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300. Для сохранения промпта в Home Assistant адрес не нужен.")}
        placeholder="http://192.168.1.10:10301" value={configuration.url} disabled={feedback.busy} onChange={event=>update({url:event.target.value})} />
      <Input label={t("Токен API Whisper")} hint={t("Необязательно. Если WHISPER_PROMPT_TOKEN в контейнере не задан, оставьте поле пустым. Иначе укажите его без префикса Bearer. Сохранённый токен не показывается и используется повторно для того же адреса.")}
        type="password" value={token} disabled={feedback.busy} autoComplete="new-password"
        placeholder={configuration.has_token && configuration.url === savedUrl ? t("Токен сохранён; оставьте пустым, чтобы сохранить его") : ""}
        onChange={event=>{setToken(event.target.value);setNotification(null);}} />
      <Textarea label={t("Промпт распознавания")} hint={t("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Укажите фразы через ; — они сохраняются массивом. Например: «Насыпь еды; Запусти пылесос; Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После отправки в Whisper применяется со следующего распознавания, без перезапуска модели.")}
        rows={10} maxLength={16000} value={configuration.initial_prompt} disabled={feedback.busy}
        onChange={event=>update({initial_prompt:event.target.value})} />
      <div className={styles.actions}>
        <Button variant="secondary" disabled={feedback.busy} onClick={()=>void send(false)}>{t("Сохранить")}</Button>
        <Button disabled={feedback.busy || !configuration.url.trim()} onClick={()=>void send(true)}>{t("Отправить в Whisper")}</Button>
      </div>
      {notification && <Toast message={t(notification.message)} warning={notification.warning} onClose={()=>setNotification(null)} />}
    </>}
  </section>;
}
