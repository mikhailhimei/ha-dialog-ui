import { ApiError } from "../../components/ui/ApiError/ApiError";
import { Dropdown } from "../../components/ui/Dropdown/Dropdown";
import { t } from "../../i18n";
import { useEffect, useMemo, useState } from "react";
import { Speaker } from "lucide-react";

import { timerTotalSeconds } from "../../utils/timerTime";
import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "@/components/ui/Modal/Modal";
import { Button } from "@/components/ui/Button/Button";
import { NavigationTabs } from "@/components/NavigationTabs/NavigationTabs";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton";

import pageStyles from "./TimerAlarmPages.module.scss";
import styles from "../GlobalsPage.module.scss"

const QUICK_MINUTES = [5, 10, 15, 30, 45, 60];

const formatLeft = (seconds: number) => {
  const safe = Math.max(0, seconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;

  return [hours, minutes, secs].map((part) => String(part).padStart(2, "0")).join(":");
};

const parseTotalSeconds = (hours: number, minutes: number, seconds: number) => Math.max(1, hours * 3600 + minutes * 60 + seconds);

const toParts = (totalSeconds: number) => ({
  hours: Math.floor(totalSeconds / 3600),
  minutes: Math.floor((totalSeconds % 3600) / 60),
  seconds: totalSeconds % 60,
});

export const TimerPage = () => {
  const isMobile = useIsMobile();
  const { feedback, createTimer, devices, loading, stopTimer, timers, toTimerSeconds } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [duration, setDuration] = useState({ hours: 0, minutes: 5, seconds: 0 });
  const [remainingById, setRemainingById] = useState<Record<string, number>>({});

  useEffect(() => {
    setRemainingById(Object.fromEntries(timers.map((timer) => [timer.uuid, toTimerSeconds(timer.timer_time, timer.status)])));
  }, [timers, toTimerSeconds]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingById((current) => Object.fromEntries(Object.entries(current).map(([uuid, seconds]) => [uuid, timers.find((timer) => timer.uuid === uuid)?.status === "paused" ? seconds : Math.max(0, seconds - 1)])));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [timers]);

  const deviceName = useMemo(() => new Map(devices.map((device) => [device.id, device.name])), [devices]);
  const totalSeconds = parseTotalSeconds(duration.hours, duration.minutes, duration.seconds);

  const submit = async () => {
    if (!deviceId) return;

    if (!await createTimer(deviceId, totalSeconds, 0.3)) return;
    setModalOpen(false);
  };

  const setQuickMinutes = (minutes: number) => setDuration(toParts(minutes * 60));

  return (
    <>
      <MobileHeader title={t("Таймеры")} />
      <div className={styles.page}>
        {!modalOpen && <ApiError {...feedback} />}
        <NavigationTabs />

        <div className={styles.header}>
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>{t("Таймеры")}</h1> : <></>
            }


          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <Button
                variant="primary"
                onClick={() => setModalOpen(true)}
              >{t("🞢 Создать")}</Button>
            ) : (
              <BottomSlideButton startVisible={true}>
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                >{t("Добавить сценарий")}</Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        <ListSkeleton loading={loading} itemCount={timers.length} placeholderCount={4}>

        <div className={pageStyles.grid}>
          {timers.length ? timers.map((timer) => {
            const initialSeconds = toTimerSeconds(timer.timer_time, timer.status);
            const originalSeconds = timerTotalSeconds(timer.timer_time);
            return (
              <div className={pageStyles.card} key={timer.uuid}>
                <div className={pageStyles.cardHeader}>
                  <div className={pageStyles.cardLead}>
                    <Speaker className={pageStyles.cardIcon} size={26} />
                    <div>
                      <h2 className={pageStyles.cardTitle}>{formatLeft(remainingById[timer.uuid] ?? initialSeconds)}</h2>
                      <div className={pageStyles.meta}>{t("Заведен на")} {formatLeft(originalSeconds)} • {deviceName.get(timer.device_id) || timer.device_id}</div>
                    </div>
                  </div>
                  <Button variant="remove" onClick={() => stopTimer(timer)}>{t("Удалить")}</Button>
                </div>
              </div>
            );
          }) : !loading && !feedback.error && <div className={pageStyles.empty}>{t("Нет запущенных таймеров.")}</div>}
        </div>

        </ListSkeleton>

        <Modal feedback={feedback} open={modalOpen} onClose={() => setModalOpen(false)} title={t("Создать таймер")} footer={<div className={pageStyles.footerActions}><Button className={pageStyles.saveButton} onClick={submit} disabled={!deviceId}>{t("Создать")}</Button></div>}>
          <div className={pageStyles.form}>
            <div className={pageStyles.wheelPicker} aria-label={t("Длительность таймера")}>
              {(["hours", "minutes", "seconds"] as const).map((unit) => (
                <label className={pageStyles.wheelColumn} key={unit}>
                  <span className={pageStyles.label}>{t(unit === "hours" ? "Часы" : unit === "minutes" ? "Минуты" : "Секунды")}</span>
                  <input className={pageStyles.wheelSelect} type="number" min={0} max={unit === "hours" ? 23 : 59}
                    inputMode="numeric" value={duration[unit]} onChange={(event) => {
                      const value = Math.max(0, Math.min(unit === "hours" ? 23 : 59, Math.trunc(Number(event.target.value) || 0)));
                      setDuration(current => ({ ...current, [unit]: value }));
                    }} />
                </label>
              ))}
            </div>

            <div className={pageStyles.field}>
              <span className={pageStyles.label}>{t("Быстрое создание")}</span>
              <div className={pageStyles.quickTabs}>
                {QUICK_MINUTES.map((value) => <button key={value} type="button" className={`${pageStyles.quickTab} ${totalSeconds === value * 60 ? pageStyles.activeQuickTab : ""}`} onClick={() => setQuickMinutes(value)}>{value} {t("мин")}</button>)}
              </div>
            </div>

            <Dropdown
              label={t("Устройство воспроизведения")}
              placeholder={t("Выберите устройство")}
              value={deviceId}
              options={devices.map(device => ({value: device.id, label: device.name}))}
              onSelect={setDeviceId}
            />
          </div>
        </Modal>

      </div>
    </>
  );
};
