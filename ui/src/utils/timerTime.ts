import type { TimerRequest } from "../types/timerAlarm";

type TimerTime = TimerRequest["timer_time"];

const durationSeconds = (duration: string | number): number => {
  if (typeof duration === "number") return Math.max(0, duration);
  const parts = duration.split(":").map(Number);
  if (parts.some((part) => !Number.isFinite(part) || part < 0)) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts.length === 1 ? parts[0] : 0;
};

export const timerTotalSeconds = (time: TimerTime): number => {
  if (typeof time === "string" || typeof time === "number") return durationSeconds(time);
  if (!time) return 0;
  return typeof time.total_seconds === "number"
    ? Math.max(0, time.total_seconds)
    : durationSeconds(time.count_timer || "");
};

export const timerRemainingSeconds = (time: TimerTime, status = "on", now = Date.now()): number => {
  if (typeof time === "string" || typeof time === "number") return durationSeconds(time);
  if (!time) return 0;
  // Only parse absolute instants with an explicit offset. Legacy date_end
  // strings have no zone and must not acquire the browser's timezone.
  if (status !== "paused" && time.date_end && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(time.date_end)) {
    const end = Date.parse(time.date_end);
    if (Number.isFinite(end)) return Math.max(0, Math.ceil((end - now) / 1000));
  }
  return typeof time.remaining_seconds === "number"
    ? Math.max(0, time.remaining_seconds)
    : timerTotalSeconds(time);
};
