import { useEffect, useRef, useState } from "react";
import { Phone, PhoneCall, PhoneOff, Mic } from "lucide-react";
import { useDialogApi } from "../../context/DialogContext";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { FieldHelp } from "../../components/ui/FieldLabel/FieldLabel";
import { useIsMobile } from "../../hooks/useIsMobile";
import { t } from "../../i18n";
import { formatApiError } from "../../utils/apiErrors";
import { createMonitorViewId } from "../../utils/monitorViewId";
import type { CallsState } from "../../types/calls";
import { BrowserCallAudio, microphoneAvailable, microphoneError } from "./browserAudio";
import styles from "./CallsPage.module.scss";

export function CallsPage() {
  const api = useDialogApi();
  const mobile = useIsMobile();
  const [state, setState] = useState<CallsState>();
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const view = useRef("");
  const audio = useRef<BrowserCallAudio>();
  const alive = useRef(false);
  const secure = microphoneAvailable();
  useEffect(() => {
    let active = true;
    alive.current = true;
    setReady(false);
    const id = createMonitorViewId();
    view.current = id;
    let unsubscribe: (() => void | Promise<void>) | undefined;
    void api.callsWatch(id, event => { if (active) setState(event); }).then(stop => {
      if (active) { unsubscribe = stop; setReady(true); }
      else void Promise.resolve(stop()).catch(() => {});
    }).catch(reason => { if (active) setError(formatApiError(reason)); });
    return () => {
      active = false; alive.current = false;
      audio.current?.close(); audio.current = undefined;
      if (unsubscribe) void Promise.resolve(unsubscribe()).catch(() => {});
    };
  }, [api]);
  const own = state?.calls.find(call => call.id === state.owned_call_id);
  useEffect(() => {
    audio.current?.setSending(own?.state === "connecting" || own?.state === "active");
    if (state && !state.owned_call_id && !busy) { audio.current?.close(); audio.current = undefined; }
  }, [state, own?.state, busy]);
  const device = state?.devices.find(item => item.id === target);
  const occupied = (id: string) => state?.calls.some(call => call.source_device_id === id || call.target_device_id === id);
  const selectedCall = state?.calls.find(call => call.source_device_id === target || call.target_device_id === target);
  const selectedOwn = Boolean(own && own.target_device_id === target);
  const name = (id: string) => state?.devices.find(item => item.id === id)?.name ?? t("Колонка");
  const status = t(selectedCall?.state === "active" ? "Разговор" : selectedCall?.state === "connecting" ? "Соединяем…" : selectedCall ? "Ожидание ответа" : "Готово к звонку");
  const hangup = async () => {
    if (busy) return;
    setBusy(true); setError("");
    try { await api.browserCallEnd(view.current); audio.current?.close(); audio.current = undefined; }
    catch (reason) { if (alive.current) setError(formatApiError(reason)); }
    finally { if (alive.current) setBusy(false); }
  };
  const start = async () => {
    if (busy || !target) return;
    setBusy(true); setError("");
    const id = view.current;
    const player = new BrowserCallAudio(api, id, message => {
      if (alive.current) setError(t(message));
      void api.browserCallEnd(id).catch(() => {});
    });
    audio.current?.close(); audio.current = player;
    try {
      await player.prepare();
      if (!alive.current) { player.close(); return; }
      const result = await api.browserCallStart(id, target);
      if (!alive.current) { player.close(); return; }
      await player.listen();
      if (!alive.current) { player.close(); return; }
      setState(current => current ? {...current, owned_call_id: result.call_id, calls: current.calls.some(call => call.id === result.call_id) ? current.calls : [...current.calls, {id: result.call_id, source_device_id: null, source_type: "browser", target_device_id: target, state: "ringing"}]} : current);
    } catch (reason) {
      player.close();
      if (alive.current) setError(reason instanceof DOMException ? t(microphoneError(reason)) : formatApiError(reason));
      await api.browserCallEnd(id).catch(() => {});
    } finally { if (alive.current) setBusy(false); }
  };
  const help = "Вы звоните с микрофона этого телефона или компьютера. Закрытие окна сохраняет звонок; выход из раздела или закрытие страницы завершает звонок с этого устройства. Звонки между колонками запускаются сценариями HA.";
  return <>
    <div className={styles.navigation}><NavigationTabs /></div>
    {mobile && <MobileHeader title="Звонки" />}
    <section className={styles.page}>
      <h1 className={styles.title}>{t("Звонки")}</h1>
      <p className={styles.hint}>{t("Выберите колонку, на которую хотите позвонить с этого устройства.")}</p>
      {!secure && <p role="alert">{t("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.")}</p>}
      {error && !target && <p role="alert">{error}</p>}
      {!state && !error && <p role="status">{t("Загрузка…")}</p>}
      {state && !state.available && <p role="alert">{t("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.")}</p>}
      {state?.available && state.devices.length === 0 && <p>{t("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.")}</p>}
      <div className={styles.grid}>{state?.devices.map(item => <button key={item.id}
        className={`${styles.device} ${occupied(item.id) ? styles.active : ""}`}
        onClick={() => { setTarget(item.id); setError(""); }}>
        {occupied(item.id) ? <PhoneCall size={26} /> : <Phone size={26} />}
        <strong>{item.name}</strong><span>{t(!item.online ? "Нет подключения" : occupied(item.id) ? "Участвует в звонке" : "Готова к звонку")}</span>
      </button>)}</div>
      <Modal open={Boolean(target)} onClose={() => setTarget("")} title={name(target)} dialogLabel={name(target)} footer={<div className={styles.actions}>
        {selectedOwn ? <Button variant="secondary" disabled={busy} onClick={() => void hangup()}><PhoneOff size={18} />{t("Положить трубку")}</Button>
          : <Button disabled={busy || !ready || !secure || !state?.available || !device?.online || Boolean(own) || Boolean(selectedCall)} onClick={() => void start()}>{t(selectedCall ? "Занято" : "Позвонить")}</Button>}
      </div>}>
        <div className={styles.status}><span role="status" aria-live="polite">{busy ? t("Подключаем микрофон…") : status}</span><FieldHelp label="Звонки" description={help} /></div>
        {error && <p role="alert">{error}</p>}
        <p className={styles.origin}><Mic size={20} />{t("Этот телефон или компьютер")} → {name(target)}</p>
        {!secure && <p role="alert">{t("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.")}</p>}
        {selectedCall && !selectedOwn && <p className={styles.hint}>{t("Колонка уже участвует в другом звонке.")}</p>}
        {own && !selectedOwn && <p className={styles.hint}>{t("Сначала завершите текущий звонок.")}</p>}
      </Modal>
    </section>
  </>;
}
