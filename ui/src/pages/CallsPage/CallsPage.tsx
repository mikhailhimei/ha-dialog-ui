import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { useEffect, useRef, useState } from "react";
import { Phone, PhoneCall, PhoneOff, Mic, MicOff, Volume2, AudioLines } from "lucide-react";
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
import { createMonitorViewId } from "../../utils/monitorViewId";
import type { CallsState } from "../../types/calls";
import { BrowserCallAudio, microphoneAvailable, microphoneError, type CallOutputDevice } from "./browserAudio";
import styles from "./CallsPage.module.scss";

export function CallsPage() {
  const api = useDialogApi();
  const mobile = useIsMobile();
  const [state, setState] = useState<CallsState>();
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const [outputDevices, setOutputDevices] = useState<CallOutputDevice[]>([]);
  const [outputSupported, setOutputSupported] = useState(false);
  const [outputId, setOutputId] = useState("default");
  const [outputPicker, setOutputPicker] = useState(false);
  const [routing, setRouting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<{id: string; time: number}>();
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
  useEffect(() => {
    if (own?.state !== "active") { startedAt.current = undefined; setElapsed(0); return; }
    if (startedAt.current?.id !== own.id) startedAt.current = {id: own.id, time: Date.now()};
    const update = () => setElapsed(Math.max(0, Math.floor((Date.now() - startedAt.current!.time) / 1000)));
    update(); const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [own?.id, own?.state]);
  const toggleMicrophone = () => {
    if (!controlsEnabled) return;
    const next = !muted;
    audio.current?.setMicrophoneMuted(next); setMuted(next);
  };
  const applyOutput = async (deviceId: string) => {
    const player = audio.current;
    if (!player || routing || !controlsEnabled) return;
    setRouting(true); setError("");
    try {
      await player.selectOutput(deviceId);
      if (alive.current && audio.current === player) { setOutputId(deviceId); setOutputPicker(false); }
    } catch (reason) {
      if (alive.current && !(reason instanceof DOMException && reason.name === "AbortError")) setError(t("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
    } finally { if (alive.current) setRouting(false); }
  };
  const toggleSpeaker = async () => {
    const player = audio.current;
    if (!player || routing || !controlsEnabled) return;
    if (outputId !== "default") { await applyOutput("default"); return; }
    if (!player.canPromptOutput()) { setOutputPicker(value => !value); return; }
    setRouting(true); setError("");
    try {
      const device = await player.promptOutput();
      if (alive.current && audio.current === player) { setOutputId(device.id); setOutputDevices(current => current.some(item => item.id === device.id) ? current : [...current, device]); }
    } catch (reason) {
      if (alive.current && !(reason instanceof DOMException && ["AbortError", "NotAllowedError"].includes(reason.name))) setError(t("Не удалось переключить звук. Используйте системный выбор аудиоустройства."));
    } finally { if (alive.current) setRouting(false); }
  };
  const device = state?.devices.find(item => item.id === target);
  const occupied = (id: string) => state?.calls.some(call => call.source_device_id === id || call.target_device_id === id);
  const selectedCall = state?.calls.find(call => call.source_device_id === target || call.target_device_id === target);
  const selectedOwn = Boolean(own && own.target_device_id === target);
  const controlsEnabled = selectedOwn && own?.state === "active" && !busy;
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
    setMuted(false); setOutputId("default"); setOutputPicker(false); setOutputDevices([]); setOutputSupported(false);
    const id = view.current;
    const player = new BrowserCallAudio(api, id, message => {
      if (alive.current) setError(t(message));
      void api.browserCallEnd(id).catch(() => {});
    });
    audio.current?.close(); audio.current = player;
    try {
      await player.prepare();
      if (alive.current) { setOutputDevices(player.getOutputDevices()); setOutputSupported(player.canSelectOutput()); }
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
      {error && !target && <p role="alert">{error}</p>}
      {!state && !error && <ListSkeleton loading itemCount={0} placeholderCount={3} grid />}
      {state && !state.available && <p role="alert">{t("Сервер звонков недоступен. Проверьте журнал HA и TCP-порт 8125.")}</p>}
      {state?.available && state.devices.length === 0 && <p>{t("Нет колонок с поддержкой звонков. Подключите модуль calls.yaml и обновите прошивку.")}</p>}
      <div className={styles.grid}>{state?.devices.map(item => <button key={item.id}
        className={`${styles.device} ${occupied(item.id) ? styles.active : ""}`}
        onClick={() => { setTarget(item.id); setError(""); }}>
        {occupied(item.id) ? <PhoneCall size={26} /> : <Phone size={26} />}
        <strong>{item.name}</strong><span>{t(!item.online ? "Нет подключения" : occupied(item.id) ? "Участвует в звонке" : "Готова к звонку")}</span>
      </button>)}</div>
      <Modal open={Boolean(target)} onClose={() => setTarget("")} title={t("Звонки")} dialogLabel={name(target)} footer={<div className={styles.phoneFooter}>
        <div className={styles.callControls}>
          <div className={styles.control}>
            <Button variant="secondary" className={`${styles.roundControl} ${selectedOwn && muted ? styles.controlSelected : ""}`} aria-label={t(selectedOwn && muted ? "Включить микрофон" : "Выключить микрофон")} aria-pressed={selectedOwn && muted} disabled={!controlsEnabled} onClick={toggleMicrophone}>{selectedOwn && muted ? <MicOff size={25} /> : <Mic size={25} />}</Button>
            <span>{t(selectedOwn && muted ? "Микрофон выкл." : "Микрофон")}</span>
          </div>
          <div className={styles.control}>
            <Button variant="secondary" className={`${styles.roundControl} ${selectedOwn && outputId !== "default" ? styles.controlSelected : ""}`} aria-label={t("Динамик")} aria-pressed={selectedOwn && outputId !== "default"} disabled={!controlsEnabled || !outputSupported || routing} onClick={() => void toggleSpeaker()}><Volume2 size={25} /></Button>
            <span>{t("Динамик")}</span>
          </div>
          <div className={styles.control}>
            <Button variant="secondary" className={styles.roundControl} aria-label={t("Включить звук")} disabled={!controlsEnabled} onClick={() => void audio.current?.resumePlayback().catch(() => setError(t("Браузер заблокировал звук. Проверьте разрешение воспроизведения и громкость телефона.")))}><AudioLines size={25} /></Button>
            <span>{t("Звук")}</span>
          </div>
        </div>
        {controlsEnabled && !outputSupported && <div className={styles.routeHint}><span>{t("Выход звука — через настройки телефона")}</span><FieldHelp label="Динамик" description="Этот браузер не разрешает переключать разговорный динамик и громкую связь из сайта. Выберите динамик или наушники в системном меню телефона. Кнопка «Звук» повторно включает воспроизведение." /></div>}
        {controlsEnabled && outputPicker && <SelectInput label="Устройство вывода" value={outputId} disabled={routing} onChange={event => void applyOutput(event.target.value)} options={[{value:"default",label:t("По умолчанию")},...outputDevices.filter(item => item.id !== "default").map(item => ({value:item.id,label:item.label}))]} />}
        {controlsEnabled && outputId !== "default" && <small className={styles.routeName}>{outputDevices.find(item => item.id === outputId)?.label}</small>}
        <div className={styles.control}>
          {selectedOwn ? <Button className={styles.hangup} disabled={busy} aria-label={t("Положить трубку")} onClick={() => void hangup()}><PhoneOff size={30} /></Button>
            : <Button className={styles.dial} aria-label={t(selectedCall ? "Занято" : "Позвонить")} disabled={busy || !ready || !secure || !state?.available || !device?.online || Boolean(own) || Boolean(selectedCall)} onClick={() => void start()}><Phone size={30} /></Button>}
          <span>{t(selectedOwn ? "Завершить" : selectedCall ? "Занято" : "Позвонить")}</span>
        </div>
      </div>}>
        <div className={styles.phoneStage}>
          <div className={styles.avatar}><PhoneCall size={46} strokeWidth={1.4} /></div>
          <h2>{name(target)}</h2>
          <div className={styles.phoneStatus}><span role="status" aria-live="polite">{busy && !selectedOwn ? t("Подключаем микрофон…") : status}</span><FieldHelp label="Звонки" description={help} /></div>
          {selectedOwn && own?.state === "active" && <time className={styles.duration} aria-label={t("Длительность звонка")}>{String(Math.floor(elapsed / 60)).padStart(2,"0")}:{String(elapsed % 60).padStart(2,"0")}</time>}
          {selectedOwn && muted && <p className={styles.hint}>{t("Ваш микрофон выключен")}</p>}
          {!secure && <p role="alert">{t("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.")}</p>}
        </div>
        {error && <p role="alert">{error}</p>}
        {selectedCall && !selectedOwn && <p className={styles.hint}>{t("Колонка уже участвует в другом звонке.")}</p>}
        {own && !selectedOwn && <p className={styles.hint}>{t("Сначала завершите текущий звонок.")}</p>}
      </Modal>
    </section>
  </>;
}
