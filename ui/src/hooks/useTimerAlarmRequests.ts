import { useApiFeedback } from "./useApiFeedback";
import { useCallback, useEffect, useMemo, useState } from "react";

import { timerRemainingSeconds as toTimerSeconds } from "../utils/timerTime";

import { useDialogApi } from "../context/DialogContext";
import { AlarmRepeat, AlarmRequest, AlarmTimeWidget, TimerAlarmDevice, TimerAlarmShortItem, TimerRequest } from "../types/timerAlarm";

const isObject = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === "object";
const unwrapData = <T,>(response: unknown): T => {
  const result = isObject(response) && "result" in response ? response.result : response;
  return (isObject(result) && "data" in result ? result.data : result) as T;
};

const formatTimerTime = (seconds: number) => {
  const safeSeconds = Math.max(1, Number(seconds) || 1);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const getResponseItems = (response: unknown): TimerAlarmShortItem[] => {
  const data = unwrapData<unknown>(response);

  return Array.isArray(data) ? data : isObject(data) && Array.isArray(data.data) ? data.data as TimerAlarmShortItem[] : [];
};

export function useTimerAlarmRequests() {
  const api = useDialogApi();
  const feedback = useApiFeedback();

  const [timers, setTimers] = useState<TimerRequest[]>([]);
  const [alarms, setAlarms] = useState<AlarmRequest[]>([]);
  const [alarmTimeWidgets, setAlarmTimeWidgets] = useState<AlarmTimeWidget[]>([]);
  const [loading, setLoading] = useState(true);

  const devices = useMemo<TimerAlarmDevice[]>(() => api.getDevices(), [api]);

  const loadTimers = useCallback(async () => {
    const shortResponse = await api.getPage("get_timer_requests_short", 1, 100);
    const details = await Promise.all(
      getResponseItems(shortResponse).map(async (item) => {
        const response = await api.getRecord(item.uuid, "get_timer_request");
        return unwrapData<{ data: TimerRequest }>(response)?.data ?? unwrapData<TimerRequest>(response);
      })
    );

    setTimers(details.filter((timer): timer is TimerRequest => Boolean(timer) && timer.action_type === "create_timer"));
  }, [api]);

  const loadAlarms = useCallback(async () => {
    const shortResponse = await api.getPage("get_alarm_requests_short", 1, 100);
    const details = await Promise.all(
      getResponseItems(shortResponse).map(async (item) => {
        const response = await api.getRecord(item.uuid, "get_alarm_request");
        return unwrapData<{ data: AlarmRequest }>(response)?.data ?? unwrapData<AlarmRequest>(response);
      })
    );

    setAlarms(details.filter((alarm): alarm is AlarmRequest => Boolean(alarm) && alarm.action_type !== "delete_alarm"));
  }, [api]);

  const loadAlarmTimeWidgets = useCallback(async () => {
    const widgets = await api.getAllRecords<TimerAlarmShortItem>("get_alarm_time_widgets_short");
    const details = await Promise.all(
      widgets.map(async (item) => {
        const response = await api.getRecord(item.uuid, "get_alarm_time_widget");
        return unwrapData<{ data: AlarmTimeWidget }>(response)?.data ?? unwrapData<AlarmTimeWidget>(response);
      })
    );

    setAlarmTimeWidgets(details.filter(Boolean));
  }, [api]);

  const loadAll = useCallback(async () => {
    setLoading(true);

    try {
      await feedback.run(async () => { await Promise.all([loadTimers(), loadAlarms(), loadAlarmTimeWidgets()]); }, { retryable: true });
    } finally {
      setLoading(false);
    }
  }, [loadAlarms, loadAlarmTimeWidgets, loadTimers, feedback.run]);

  useEffect(() => {
    // Load timers/alarms once on mount to avoid continuous polling
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mutate = async (action: () => Promise<unknown>, refresh: () => Promise<void>) => {
    const saved = await feedback.run(async () => { await action(); }, { exclusive: true });
    if (!saved) return false;
    await feedback.run(refresh, { retryable: true });
    return true;
  };

  const createTimer = async (deviceId: string, seconds: number, volumeStart = 0.3) => {
    const timerTime = {
      count_timer: formatTimerTime(seconds),
    };

    return mutate(() => api.saveData({ name: `Таймер ${formatTimerTime(seconds)}`, action_type: "create_timer", device_id: deviceId, timer_time: timerTime, volume_start: volumeStart }, "save_timer_request"), loadTimers);
  };

  const stopTimer = async (timer: TimerRequest) => {
    return mutate(() => api.deleteRecord(timer.uuid, "delete_timer_request"), loadTimers);
  };

  const createAlarm = async (deviceId: string, time: string, volumeStart = 0.3, repeatType: AlarmRepeat = "once", repeatDays: string[] = []) => {
    return mutate(() => api.saveData({ name: `Будильник ${time}`, action_type: "create_alarm", device_id: deviceId, status: "on", time, volume_start: volumeStart, repeat_type: repeatType, repeat_days: repeatDays }, "save_alarm_request"), async () => { await Promise.all([loadAlarms(), loadAlarmTimeWidgets()]); });
  };

  const updateAlarm = async (alarm: AlarmRequest, data: Partial<AlarmRequest>) => {
    return mutate(() => api.updateRecord(alarm.uuid, "update_alarm_request", { ...alarm, action_type: "edit_alarm", ...data }), async () => { await Promise.all([loadAlarms(), loadAlarmTimeWidgets()]); });
  };

  const deleteAlarm = async (alarm: AlarmRequest) => {
    return mutate(() => api.deleteRecord(alarm.uuid, "delete_alarm_request"), loadAlarms);
  };

  return {
    feedback: { ...feedback, retry: feedback.error ? feedback.retry ?? (() => { void loadAll(); }) : undefined },
    alarmTimeWidgets,
    refreshAlarmTimes: () => feedback.run(loadAlarmTimeWidgets, { retryable: true }),
    alarms,
    createAlarm,
    createTimer,
    deleteAlarm,
    devices,
    loading,
    stopTimer,
    timers,
    toTimerSeconds,
    updateAlarm,
  };
}
