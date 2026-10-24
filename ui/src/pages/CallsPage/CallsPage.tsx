import { useEffect, useState } from "react";
import { Phone, PhoneCall, PhoneOff } from "lucide-react";
import { useDialogApi } from "../../context/DialogContext";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { SelectInput } from "../../components/ui/Select/SelectInput";
import { FieldHelp } from "../../components/ui/FieldLabel/FieldLabel";
import { useIsMobile } from "../../hooks/useIsMobile";
import { t } from "../../i18n";
import { formatApiError } from "../../utils/apiErrors";
import type { CallsState } from "../../types/calls";
import styles from "./CallsPage.module.scss";

export function CallsPage() {
  const api = useDialogApi();
  const mobile = useIsMobile();
  const [state, setState] = useState<CallsState>();
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    let unsubscribe: (() => void | Promise<void>) | undefined;
    void api.callsWatch(event => { if (active) setState(event); }).then(stop => {
      if (active) unsubscribe = stop;
      else void Promise.resolve(stop()).catch(() => {});
    }).catch(reason => { if (active) setError(formatApiError(reason)); });
    return () => { active = false; if (unsubscribe) void Promise.resolve(unsubscribe()).catch(() => {}); };
  }, [api]);
  const run = async (action: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(true); setError("");
    try { await action(); } catch (reason) { setError(formatApiError(reason)); }
    finally { setBusy(false); }
  };
  const name = (id: string) => state?.devices.find(d => d.id === id)?.name ?? t("Колонка");
  const call = state?.calls.find(c => c.source_device_id === source || c.target_device_id === source);
  const occupied = (id: string) => state?.calls.some(c => c.source_device_id === id || c.target_device_id === id);
  const status = t(call?.state === "active" ? "Разговор" : call?.state === "connecting" ? "Соединяем колонки…" : call ? "Ожидание ответа" : "Готово к звонку");
  return <>
    <div className={styles.navigation}><NavigationTabs /></div>
    {mobile && <MobileHeader title="Звонки" />}
    <section className={styles.page}>
      <h1 className={styles.title}>{t("Звонки")}</h1>
      <p className={styles.hint}>{t("Выберите колонку, с которой хотите позвонить.")}</p>
      {error && !source && <p role="alert">{error}</p>}
      {!state && !error && <p role="status">{t("Загрузка…")}</p>}
      {state && !state.available && <p role="alert">{t("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.")}</p>}
      {state?.available && state.devices.length === 0 && <p>{t("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.")}</p>}
      <div className={styles.grid}>{state?.devices.map(device => <button key={device.id}
        className={`${styles.device} ${occupied(device.id) ? styles.active : ""}`}
        onClick={() => { setSource(device.id); setTarget(""); setError(""); }}>
        {occupied(device.id) ? <PhoneCall size={26} /> : <Phone size={26} />}
        <strong>{device.name}</strong><span>{t(!device.online ? "Нет подключения" : occupied(device.id) ? "Участвует в звонке" : "Готова к звонку")}</span>
      </button>)}</div>
      <Modal open={Boolean(source)} onClose={() => setSource("")} title={name(source)} dialogLabel={name(source)} footer={<div className={styles.actions}>
        {call ? <>
          {call.state === "ringing" && call.target_device_id === source && <Button disabled={busy} onClick={() => void run(() => api.callAnswer(source))}>{t("Ответить")}</Button>}
          <Button variant="secondary" disabled={busy} onClick={() => void run(() => api.callEnd(source))}><PhoneOff size={18} />{t("Положить трубку")}</Button>
        </> : <Button disabled={busy || !state?.available || !target || !state?.devices.some(d => d.id === source && d.online) || !state?.devices.some(d => d.id === target && d.online && !occupied(d.id))} onClick={() => void run(() => api.callStart(source, target))}>{t("Позвонить")}</Button>}
      </div>}>
        <div className={styles.status}><span role="status" aria-live="polite">{busy ? t("Выполняем…") : status}</span>
          <FieldHelp label="Звонки" description="Закрытие окна или вкладки не завершает звонок. Чтобы закончить разговор, нажмите «Положить трубку» или верхнюю кнопку любой колонки. Голосовой ассистент остаётся доступен." />
        </div>
        {error && <p role="alert">{error}</p>}
        {call ? <p>{name(call.source_device_id)} ↔ {name(call.target_device_id)}</p> : <SelectInput label="Кому позвонить" value={target} onChange={event => setTarget(event.target.value)} disabled={busy} options={[
          {value: "", label: t("Выберите колонку")},
          ...(state?.devices.filter(d => d.id !== source).map(d => ({value: d.id, label: `${d.name}${!d.online ? ` — ${t("Нет подключения")}` : occupied(d.id) ? ` — ${t("Занято")}` : ""}`, disabled: !d.online || occupied(d.id)})) ?? []),
        ]} />}
      </Modal>
    </section>
  </>;
}
