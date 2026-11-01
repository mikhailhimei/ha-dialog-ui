import { useCallback, useEffect, useState } from "react";
import { StickyNote } from "lucide-react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import { useIsMobile } from "../../hooks/useIsMobile";
import { t, useLanguage } from "../../i18n";
import type { ReminderState } from "../../types/reminders";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { Button } from "../../components/ui/Button/Button";
import { Modal } from "../../components/ui/Modal/Modal";
import { Input } from "../../components/ui/Input/Input";
import { Dropdown } from "../../components/ui/Dropdown/Dropdown";
import { ApiError } from "../../components/ui/ApiError/ApiError";
import { ListSkeleton } from "../../components/ui/ListSkeleton/ListSkeleton";
import styles from "../GlobalsPage.module.scss";
import cards from "./TimerAlarmPages.module.scss";
import local from "./ReminderPage.module.scss";

const statusLabels = {pending: "Ожидает", delivering: "Озвучивается", completed: "Передано на колонку", failed: "Не удалось озвучить"};

export function ReminderPage() {
  const api = useDialogApi();
  const feedback = useApiFeedback();
  const mobile = useIsMobile();
  const language = useLanguage();
  const [state, setState] = useState<ReminderState>({reminders: [], devices: []});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [device, setDevice] = useState("");
  const [mode, setMode] = useState("delay");
  const [minutes, setMinutes] = useState("30");
  const [at, setAt] = useState("");
  const refresh = useCallback(async () => { setState(await api.getReminders()); }, [api]);
  useEffect(() => {
    let active = true;
    void feedback.run(async () => { const next = await api.getReminders(); if (active) setState(next); }, {retryable: true})
      .finally(() => { if (active) setLoading(false); });
    const timer = window.setInterval(() => {
      if (!document.hidden) void api.getReminders().then(next => { if (active) setState(next); }).catch(() => {});
    }, 10000);
    return () => { active = false; window.clearInterval(timer); };
  }, [api, feedback.run]);

  const submit = async () => {
    await feedback.run(async () => {
      await api.createReminder({text: text.trim(), device_id: device,
        ...(mode === "delay" ? {delay_seconds: Number(minutes) * 60} : {at: new Date(at).toISOString()})});
      setOpen(false); setText("");
      await refresh();
    }, {exclusive: true});
  };
  const validTime = mode === "delay" ? Number(minutes) > 0 && Number(minutes) <= 5256000 :
    Boolean(at) && new Date(at).getTime() > Date.now();

  return <div className={styles.page}>
    <MobileHeader title="Напоминания" />
    <NavigationTabs />
    <div className={styles.headerTop}>
      {!mobile && <h1 className={styles.title}>{t("Напоминания")}</h1>}
      <Button onClick={() => { feedback.clearError(); setOpen(true); }}>{t("Добавить напоминание")}</Button>
    </div>
    {!open && <ApiError {...feedback} />}
    <ListSkeleton loading={loading} itemCount={state.reminders.length} placeholderCount={3}>
      <div className={local.grid}>
        {state.reminders.map(item => <article className={`${cards.card} ${local.card}`} key={item.id}>
          <div className={cards.cardHeader}>
            <div className={`${cards.cardLead} ${local.lead}`}><StickyNote size={22} className={local.icon} />
              <div><h2 className={`${cards.cardTitle} ${local.text}`}>{item.text}</h2>
                <p className={local.meta}>{new Date(item.at).toLocaleString(language === "ru" ? "ru-RU" : "en-US")}</p>
                <p className={local.meta}>{state.devices.find(d => d.id === item.device_id)?.name || item.device_id} · {t(statusLabels[item.status])}</p>
                {item.error && <p role="alert" className={local.meta}>{item.error}</p>}
              </div>
            </div>
            <Button variant="remove" disabled={feedback.busy || item.status === "delivering"}
              aria-label={`${t("Удалить напоминание")}: ${item.text}`}
              onClick={() => void feedback.run(async () => { await api.deleteReminder(item.id); await refresh(); }, {exclusive: true})}>{t("Удалить")}</Button>
          </div>
        </article>)}
        {!state.reminders.length && !loading && !feedback.error && <div className={cards.empty}>{t("Нет напоминаний.")}</div>}
      </div>
    </ListSkeleton>
    <Modal open={open} onClose={() => { if (!feedback.busy) setOpen(false); }} title={t("Добавить напоминание")} feedback={feedback}
      footer={<Button onClick={() => void submit()} disabled={feedback.busy || !text.trim() || !device || !validTime}>{t("Создать")}</Button>}>
      <div className={local.form}>
        <Input label={t("Что напомнить")} value={text} maxLength={2000} onChange={event => setText(event.target.value)}
          placeholder={t("Напомнить насыпать еды через 30 минут")} />
        <Dropdown label="Где напомнить" value={device} options={state.devices.map(d => ({label: d.name, value: d.id}))} onSelect={setDevice} />
        {!state.devices.length && <p>{t("Нет доступных колонок. Добавьте колонку в Home Assistant.")}</p>}
        <Dropdown label="Когда напомнить" value={mode} options={[{value: "delay", label: t("Через интервал")}, {value: "at", label: t("Дата и время")}]} onSelect={setMode} />
        {mode === "delay" ? <Input label={t("Через сколько минут")} type="number" min="1" max="5256000" value={minutes} onChange={event => setMinutes(event.target.value)} /> :
          <Input label={t("Дата и время")} type="datetime-local" value={at} onChange={event => setAt(event.target.value)} />}
        <p className={cards.meta}>{t("Дата и время — в часовом поясе вашего устройства.")}</p>
      </div>
    </Modal>
  </div>;
}
