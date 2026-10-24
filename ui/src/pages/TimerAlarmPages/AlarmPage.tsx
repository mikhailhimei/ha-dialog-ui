import { ApiError } from "../../components/ui/ApiError/ApiError";
import { Dropdown } from "../../components/ui/Dropdown/Dropdown";
import { t } from "../../i18n";
import { useMemo, useState } from "react";
import { Speaker } from "lucide-react";

import type { AlarmRepeat, AlarmRequest } from "../../types/timerAlarm";
import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { AlarmActionsSheet } from "@/components/ModalEditAlarm/AlarmActionsSheet"

import pageStyles from "./TimerAlarmPages.module.scss";
import styles from "../GlobalsPage.module.scss"

const normalizeClock = (value: string): string | null => {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!match || Number(match[1]) > 23 || Number(match[2]) > 59) return null;
  return `${match[1].padStart(2, "0")}:${match[2]}`;
};

const WEEK_DAYS = [
  { key: "mon", label: "Пн" }, { key: "tue", label: "Вт" }, { key: "wed", label: "Ср" }, { key: "thu", label: "Чт" }, { key: "fri", label: "Пт" }, { key: "sat", label: "Сб" }, { key: "sun", label: "Вс" },
];
const REPEAT_OPTIONS: { value: AlarmRepeat; label: string }[] = [
  { value: "once", label: "Однократно" }, { value: "daily", label: "Ежедневно" }, { value: "weekdays", label: "По будням" }, { value: "weekends", label: "По выходным" }, { value: "custom", label: "Выбранные дни" },
];

const repeatText = (repeat: AlarmRepeat = "once", days: string[] = []) => {
  if (repeat === "daily") return t("ежедневно");
  if (repeat === "weekdays") return t("по будням");
  if (repeat === "weekends") return t("по выходным");
  if (repeat === "custom") return days.length ? days.map((day) => WEEK_DAYS.find((item) => item.key === day)?.label ? t(WEEK_DAYS.find((item) => item.key === day)!.label) : day).join(", ") : t("кастом");
  return t("однократно");
};

export const AlarmPage = () => {
  const isMobile = useIsMobile();

  const { feedback, alarmTimeWidgets, refreshAlarmTimes, alarms, createAlarm, deleteAlarm, devices, loading, updateAlarm } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsAlarmId, setDetailsAlarmId] = useState<string | null>(null);
  const [editingAlarmId, setEditingAlarmId] = useState<string | null>(null);
  const [deviceId, setDeviceId] = useState("");
  const [time, setTime] = useState("08:00");
  const [volumeStart, setVolumeStart] = useState(0.3);
  const [repeat, setRepeat] = useState<AlarmRepeat>("once");
  const [repeatDays, setRepeatDays] = useState<string[]>([]);

  const quickTimes = useMemo(() => Array.from(new Set([...alarmTimeWidgets.flatMap((widget) => widget.time || []), ...alarms.map(alarm => alarm.time)].map(normalizeClock).filter((value): value is string => value !== null))), [alarmTimeWidgets, alarms]);
  const deviceName = useMemo(() => new Map(devices.map((device) => [device.id, device.name])), [devices]);
  const selectedAlarm = alarms.find((alarm) => alarm.uuid === detailsAlarmId) || null;

  const submit = async () => {
    if (!deviceId || !time) return;

    const editingAlarm = alarms.find((alarm) => alarm.uuid === editingAlarmId);
    if (editingAlarm) {
      if (!await updateAlarm(editingAlarm, { device_id: deviceId, time, volume_start: volumeStart, repeat_type: repeat, repeat_days: repeatDays })) return;
    } else {
      if (!await createAlarm(deviceId, time, volumeStart, repeat, repeatDays)) return;
    }
    setEditingAlarmId(null);
    setModalOpen(false);
  };

  const openCreate = () => {
    setEditingAlarmId(null);
    setModalOpen(true);
    void refreshAlarmTimes();
  };

  const handleOpenEditModal = (command: AlarmRequest) => {
    setTime(command.time);
    setDeviceId(command.device_id);
    setVolumeStart(command.volume_start ?? 0.3);
    setRepeat(command.repeat_type ?? "once");
    setRepeatDays(command.repeat_days ?? []);
    void refreshAlarmTimes();
    setEditingAlarmId(command.uuid);
    setDetailsAlarmId(null);
    setModalOpen(true);
  }

  const toggleDay = (day: string) => setRepeatDays((current) => current.includes(day) ? current.filter((item) => item !== day) : [...current, day]);

  return (
    <>
      <MobileHeader title={t("Будильники")} />
      <div className={styles.page}>
        {!modalOpen && <ApiError {...feedback} />}
        <NavigationTabs />
        <div className={styles.header}>
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>{t("Будильники")}</h1> : <></>
            }


          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <Button
                variant="primary"
                onClick={openCreate}
              >{t("🞢 Создать")}</Button>
            ) : (
              <BottomSlideButton startVisible={true}>
                <Button
                  variant="primary"
                  onClick={openCreate}
                >{t("Добавить сценарий")}</Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        <ListSkeleton loading={loading} itemCount={alarms.length} placeholderCount={4}>

        <div className={pageStyles.grid}>
          {alarms.length ? alarms.map((alarm) => (
            <button className={`${pageStyles.card} ${pageStyles.cardButton}`} key={alarm.uuid} type="button" onClick={() => setDetailsAlarmId(alarm.uuid)}>
              <div className={pageStyles.cardHeader}>
                <div className={pageStyles.cardLead}><Speaker className={pageStyles.cardIcon} size={26} /><div><h2 className={pageStyles.cardTitle}>{alarm.time}</h2><div className={pageStyles.meta}>{repeatText(alarm.repeat_type, alarm.repeat_days)} • {deviceName.get(alarm.device_id) || alarm.device_id}</div></div></div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}>
                  <ToggleSwitch label={t("")} checked={alarm.status !== "off"} onClick={(event) => event.stopPropagation()} onChange={(event) => updateAlarm(alarm, { status: event.currentTarget.checked ? "on" : "off" })} />
                </div>
              </div>
            </button>
          )) : !loading && !feedback.error && <div className={pageStyles.empty}>{t("Нет будильников.")}</div>}
        </div>

        </ListSkeleton>

        <Modal feedback={feedback} open={modalOpen} onClose={() => { setModalOpen(false); setEditingAlarmId(null); }} title={editingAlarmId ? "Редактировать будильник" : "Создать будильник"} footer={<div className={pageStyles.footerActions}><Button className={pageStyles.saveButton} onClick={submit} disabled={!deviceId || !time}>{t("Сохранить")}</Button></div>}>
          <div className={pageStyles.form}>
            <div className={pageStyles.alarmTimeFields} role="group" aria-label={t("Время будильника")}>
              <Dropdown label={t("Часы")} value={time.split(":")[0]}
                options={Array.from({length: 24}, (_, hour) => ({value: String(hour).padStart(2, "0"), label: String(hour).padStart(2, "0")}))}
                onSelect={hour => setTime(`${hour}:${time.split(":")[1]}`)} />
              <Dropdown label={t("Минуты")} value={time.split(":")[1]}
                options={Array.from({length: 60}, (_, minute) => ({value: String(minute).padStart(2, "0"), label: String(minute).padStart(2, "0")}))}
                onSelect={minute => setTime(`${time.split(":")[0]}:${minute}`)} />
            </div>
            <div className={pageStyles.field}><span className={pageStyles.label}>{t("Ранее заданное время")}</span><div className={pageStyles.quickTabs}>{quickTimes.length ? quickTimes.map((value) => <button key={value} type="button" className={`${pageStyles.quickTab} ${time === value ? pageStyles.activeQuickTab : ""}`} onClick={() => setTime(value)}>{value}</button>) : <span className={pageStyles.meta}>{t("Нет быстрых значений.")}</span>}</div></div>
            <Dropdown label={t("Повторы")} value={repeat} options={REPEAT_OPTIONS.map(option => ({...option, label: t(option.label)}))}
              onSelect={value => setRepeat(value as AlarmRepeat)} />
            {repeat === "custom" && <div className={pageStyles.quickTabs} role="group" aria-label={t("Дни повтора")}>
              {WEEK_DAYS.map(day => <button key={day.key} type="button" aria-pressed={repeatDays.includes(day.key)}
                className={`${pageStyles.quickTab} ${repeatDays.includes(day.key) ? pageStyles.activeQuickTab : ""}`}
                onClick={() => toggleDay(day.key)}>{t(day.label)}</button>)}
            </div>}
            <Dropdown
              label={t("Устройство воспроизведения")}
              placeholder={t("Выберите устройство")}
              value={deviceId}
              options={devices.map(device => ({value: device.id, label: device.name}))}
              onSelect={setDeviceId}
            />
            <label className={pageStyles.field}><span className={`${pageStyles.label} ${pageStyles.volumeLabel}`}>{t("Стартовая громкость")} <span className={pageStyles.volumeValue}>{Math.round(volumeStart * 100)}%</span></span><input className={pageStyles.input} type="range" min="0" max="1" step="0.05" value={volumeStart} onChange={(event) => setVolumeStart(Number(event.target.value))} /></label>
          </div>
        </Modal>

        <AlarmActionsSheet
          open={Boolean(selectedAlarm)}
          onClose={() => setDetailsAlarmId(null)}
          command={selectedAlarm}
          onEdit={(command) => handleOpenEditModal(command)}
          onToggleStatus={(command, status) => updateAlarm(command, { status: status })}
          onDelete={(command) => { deleteAlarm(command); setDetailsAlarmId(null) }}
        />

      </div>
    </>
  );
};
