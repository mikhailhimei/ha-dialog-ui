import { useEffect, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
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
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    let active = true;
    void feedback.run(async () => {
      const result = await api.getData<Configuration>("get_whisper_prompt");
      if (active) { setConfiguration(result); setSavedUrl(result.url); setLoaded(true); }
    }, {retryable: true});
    return () => { active = false; };
  }, [api, feedback.run]);
  const update = (patch: Partial<Configuration>) => { setConfiguration(current => ({...current, ...patch})); setApplied(false); };
  const send = (save: boolean) => feedback.run(async () => {
    const result = await api.saveData({url: configuration.url, token,
      ...(save ? {initial_prompt: configuration.initial_prompt} : {})}, save ? "save_whisper_prompt" : "read_whisper_prompt") as {initial_prompt: string};
    setConfiguration(current => ({...current, initial_prompt: result.initial_prompt, has_token: save ? true : current.has_token}));
    setApplied(save);
    if (save) { setSavedUrl(configuration.url); setToken(""); }
  }, {exclusive: true});
  return <section className={styles.form}>
    <ApiError {...feedback} />
    {!loaded && !feedback.error && <Loader />}
    {loaded && <>
      <Input label={t("Адрес API Whisper")} hint={t("Адрес контейнера Whisper с API промпта, например http://192.168.1.10:10301. Это отдельный HTTP-порт, не Wyoming-порт 10300.")}
        placeholder="http://192.168.1.10:10301" value={configuration.url} disabled={feedback.busy} onChange={event=>update({url:event.target.value})} />
      <Input label={t("Токен API Whisper")} hint={t("Значение WHISPER_PROMPT_TOKEN из .env контейнера, без префикса Bearer. Сохранённый токен не показывается. При смене адреса укажите токен заново.")}
        type="password" value={token} disabled={feedback.busy} autoComplete="new-password"
        placeholder={configuration.has_token && configuration.url === savedUrl ? t("Токен сохранён; оставьте пустым, чтобы сохранить его") : ""}
        onChange={event=>{setToken(event.target.value);setApplied(false);}} />
      <Textarea label={t("Промпт распознавания")} hint={t("Подсказка initial_prompt для Whisper: привычные слова, названия и примеры фраз. Например: «Насыпь еды. Запусти пылесос. Включи свет в коридоре». Это подсказка распознавания, а не инструкция для диалога. Пустой текст отключает подсказку. После сохранения применяется со следующего распознавания, без перезапуска модели.")}
        rows={10} maxLength={16000} value={configuration.initial_prompt} disabled={feedback.busy}
        onChange={event=>update({initial_prompt:event.target.value})} />
      <div className={styles.actions}>
        <Button variant="secondary" disabled={feedback.busy || !configuration.url.trim()} onClick={()=>void send(false)}>{t("Прочитать из Whisper")}</Button>
        <Button disabled={feedback.busy || !configuration.url.trim()} onClick={()=>void send(true)}>{t("Сохранить и применить")}</Button>
      </div>
      {applied && <p role="status">{t("Сохранено и применено в Whisper. Перезапуск контейнера не нужен.")}</p>}
    </>}
  </section>;
}
