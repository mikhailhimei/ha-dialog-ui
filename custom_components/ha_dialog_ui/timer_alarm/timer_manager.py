from __future__ import annotations

import asyncio
import math
import uuid
from datetime import datetime
from time import monotonic
from typing import Any, Callable

from homeassistant.core import HomeAssistant

from ..dialog.normalize import _normalize_value
from .timer_alarm_utils import (
    _default_timezone_name,
    _duration_to_seconds,
    _format_datetime,
    _parse_datetime,
    _safe_int,
    _seconds_to_duration,
    _seconds_to_minute_phrase,
    _TIMER_PREFIX,
)
from ..audio.audio_notification import audio_notification

class DialogTimerManager:
    def __init__(
        self,
        hass: HomeAssistant,
        mark_updated: Callable[[], None],
        default_media_content_id: Callable[[], str],
        on_timer_worked: Callable[[dict[str, Any]], Any] | None = None,
    ) -> None:
        self.hass = hass
        self._mark_updated = mark_updated
        self._default_media_content_id = default_media_content_id
        self._on_timer_worked = on_timer_worked
        self._timers: dict[str, dict[str, Any]] = {}
        self._notification_tasks: set[asyncio.Task] = set()

    async def async_stop(self) -> None:
        current_task = asyncio.current_task()
        tasks = {
            task for entry in self._timers.values()
            if isinstance(task := entry.get("task"), asyncio.Task)
            and task is not current_task
        }
        tasks.update(task for task in self._notification_tasks if task is not current_task)
        for task in tasks:
            task.cancel()
        self._timers.clear()
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)
        self._notification_tasks.difference_update(tasks)

    async def async_handle_timer_start(
        self,
        timer: dict[str, int] | None,
        client_id: str,
        device_id: str,
        is_main_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: отсутствует client_id",
            }

        if timer is None:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: некорректный формат времени",
            }

        total_seconds = max(1, timer["hour"] * 3600 + timer["minut"] * 60 + timer["second"])
        timer_id = f"{_TIMER_PREFIX}{client_id}:{uuid.uuid4().hex[:8]}"

        self._create_timer(
            timer_id=timer_id,
            client_id=client_id,
            device_id=device_id,
            total_seconds=total_seconds,
            paused=False,
        )

        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
                "message": f"на {_seconds_to_minute_phrase(total_seconds)}",
            }

    async def async_handle_timer_stop(
        self,
        client_id: str,
        device_id: str,
        count: int,
        is_main_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: отсутствует client_id",
            }

        timers = self._timers_for_client(client_id, device_id)
        if not timers and not is_main_command:
            return None
        if not timers:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "not_timers",
            }

        if count is None and len(timers) > 1 and is_main_command:
            _, text_timer = self._timer_count_message(timers)
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "several",
                "message": text_timer,
            }

        selected_index = len(timers) - 1 if count is None else max(0, count - 1)
        selected_index = min(selected_index, len(timers) - 1)

        timer_id = _normalize_value(timers[selected_index].get("id"))
        timer_entry = self._timers.pop(timer_id, None)
        if timer_entry is None:
            return

        self._cancel_timer_task(timer_entry)
        self._mark_updated()

        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
            }

    async def async_handle_timer_pause(
        self,
        client_id: str,
        device_id: str,
        count: int,
        is_main_command: bool,
    ) -> dict[str, Any] | None:
        timers = self._timers_for_client(client_id, device_id)
        if not timers and not is_main_command:
            return None
        if not timers:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "not_timers",
            }

        index = len(timers) - 1 if count is None else min(max(count - 1, 0), len(timers) - 1)
        await self._pause_timer(_normalize_value(timers[index].get("id")))

        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
            }

    async def async_handle_timer_resume(self, client_id: str, device_id: str, count: int) -> None:
        timers = self._timers_for_client(client_id, device_id)
        if not timers:
            return
        index = len(timers) - 1 if count is None else min(max(count - 1, 0), len(timers) - 1)
        await self._resume_timer(_normalize_value(timers[index].get("id")))

    async def async_handle_timer_info(
        self,
        client_id: str,
        device_id: str,
        is_main_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id:
            return
        timers = self._timers_for_client(client_id, device_id)
        count_timer, text_timer = self._timer_count_message(timers)
        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "several" if count_timer else "one",
                "message": text_timer,
            }

    def get_timer_items(self) -> list[dict[str, Any]]:
        now_ts = datetime.now().timestamp()
        timezone_name = _default_timezone_name()
        items: list[dict[str, Any]] = []
        for timer_id, entry in self._timers.items():
            total_seconds = _safe_int(entry.get("total_seconds"))
            remaining = self._remaining(entry)
            remaining_seconds = math.ceil(remaining)
            paused = bool(entry.get("paused"))
            # Persist a wall-clock projection, never use it for a live countdown.
            ends_at = now_ts + remaining
            items.append(
                {
                    "id": timer_id,
                    "type": "timer",
                    "status": "paused" if paused else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {
                        "created_at": float(entry.get("created_at") or 0),
                        "count_timer": _seconds_to_duration(max(1, total_seconds)),
                        "remaining_timer": _seconds_to_duration(max(0, remaining_seconds)),
                        "total_seconds": max(1, total_seconds),
                        "remaining_seconds": max(0, remaining_seconds),
                        "date_end": _format_datetime(ends_at, timezone_name),
                    },
                }
            )
        items.sort(key=lambda item: float(item["time"]["created_at"]))
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        return [
            item
            for item in self.get_timer_items()
            if _normalize_value(item.get("status")).lower() in {"on", "paused"}
        ]

    def serialize_timer_persisted_items(self) -> list[dict[str, Any]]:
        result: list[dict[str, Any]] = []
        for item in self.get_timer_items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            result.append(
                {
                    "id": _normalize_value(item.get("id")),
                    "type": "timer",
                    "clientId": _normalize_value(item.get("clientId") or item.get("userId")),
                    "deviceId": _normalize_value(item.get("deviceId")),
                    "status": _normalize_value(item.get("status")) or "on",
                    "time": {
                        "created_at": time_data.get("created_at", 0),
                        "total_seconds": time_data.get("total_seconds", 1),
                        "count_timer": time_data["count_timer"],
                        "remaining_seconds": time_data["remaining_seconds"],
                        "date_end": time_data["date_end"],
                    },
                }
            )
        return result

    async def apply_ui_items(self, incoming_timers: dict[str, dict[str, Any]]) -> None:
        for timer_id in set(self._timers) - set(incoming_timers):
            self._cancel_timer_task(self._timers.pop(timer_id))

        for timer_id, item in incoming_timers.items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            paused = _normalize_value(item.get("status")).lower() == "paused"
            duration = _duration_to_seconds(_normalize_value(time_data.get("count_timer")))
            total = _safe_int(time_data.get("total_seconds")) or duration
            remaining = _safe_int(time_data.get("remaining_seconds")) if "remaining_seconds" in time_data else duration
            date_end = _normalize_value(time_data.get("date_end"))
            if date_end and not paused:
                end_dt = _parse_datetime(date_end, "")
                if end_dt is not None:
                    remaining = max(0, math.ceil(end_dt.timestamp() - datetime.now().timestamp()))

            client_id = _normalize_value(item.get("clientId") or item.get("userId"))
            device_id = _normalize_value(item.get("deviceId"))
            entry = self._timers.get(timer_id)
            if entry is not None:
                # Synchronizing storage or editing another timer must not restart
                # this timer or change its creation order/original duration.
                for key, value in (("client_id", client_id), ("device_id", device_id)):
                    if entry[key] != value:
                        entry[key] = value
                # A duration-only UI edit can change the remaining interval,
                # while creation time and original duration stay immutable.
                if (
                    not date_end
                    and "remaining_seconds" not in time_data
                    and duration > 0
                    and duration != entry.get("ui_duration", entry["total_seconds"])
                ):
                    self._cancel_timer_task(entry)
                    entry["ui_duration"] = duration
                    entry["remaining_seconds"] = duration
                    entry["paused"] = paused
                    if not paused:
                        self._schedule_timer(entry)
                if paused != entry["paused"]:
                    if paused:
                        await self._pause_timer(timer_id)
                    else:
                        await self._resume_timer(timer_id)
                continue

            if remaining <= 0 or total <= 0:
                continue
            self._create_timer(
                timer_id=timer_id,
                client_id=client_id,
                device_id=device_id,
                total_seconds=total,
                remaining_seconds=min(total, remaining),
                paused=paused,
                created_at=time_data.get("created_at"),
            )

        # A UI save may have supplied a legacy duration-only record. Write
        # runtime metadata back even when the countdown itself did not change.
        self._mark_updated()

    def _create_timer(
        self,
        timer_id: str,
        client_id: str,
        device_id: str,
        total_seconds: int,
        paused: bool,
        created_at: float | None = None,
        remaining_seconds: int | None = None,
    ) -> None:
        remaining = min(total_seconds, total_seconds if remaining_seconds is None else remaining_seconds)
        entry: dict[str, Any] = {
            "id": timer_id,
            "client_id": client_id,
            "device_id": device_id,
            "created_at": float(created_at or datetime.now().timestamp()),
            "total_seconds": max(1, total_seconds),
            "remaining_seconds": max(1, remaining),
            "paused": bool(paused),
            "task": None,
            "ends_at": datetime.now().timestamp() + max(1, remaining),
        }
        self._timers[timer_id] = entry
        if not paused:
            self._schedule_timer(entry)
        self._mark_updated()

    def _remaining(self, entry: dict[str, Any]) -> float:
        """One countdown source for display, pause and the firing task."""
        total = max(1, _safe_int(entry.get("total_seconds")))
        if entry.get("paused"):
            value = float(entry.get("remaining_seconds") or 0)
        elif "deadline_monotonic" in entry:
            value = float(entry["deadline_monotonic"]) - monotonic()
        else:
            value = float(entry.get("ends_at") or 0) - datetime.now().timestamp()
        return max(0.0, min(float(total), value))

    def _schedule_timer(self, entry: dict[str, Any]) -> None:
        self._cancel_timer_task(entry)
        remaining = max(0.0, min(float(entry["total_seconds"]), float(entry.get("remaining_seconds") or 0)))
        entry["remaining_seconds"] = remaining
        entry["deadline_monotonic"] = monotonic() + remaining
        entry["ends_at"] = datetime.now().timestamp() + remaining
        entry["paused"] = False
        timer_id = _normalize_value(entry.get("id"))
        entry["task"] = self.hass.async_create_background_task(
            self._async_wait_and_fire_timer(timer_id),
            f"Dialog Custom UI timer {timer_id}", eager_start=False,
        )

    async def _pause_timer(self, timer_id: str) -> None:
        entry = self._timers.get(_normalize_value(timer_id))
        if entry is None or bool(entry.get("paused")):
            return
        entry["remaining_seconds"] = self._remaining(entry)
        entry["paused"] = True
        self._cancel_timer_task(entry)
        self._mark_updated()

    async def _resume_timer(self, timer_id: str) -> None:
        entry = self._timers.get(_normalize_value(timer_id))
        if entry is None or not bool(entry.get("paused")):
            return
        self._schedule_timer(entry)
        self._mark_updated()

    def _cancel_timer_task(self, entry: dict[str, Any]) -> None:
        task = entry.get("task")
        if isinstance(task, asyncio.Task):
            task.cancel()
        entry["task"] = None

    async def _async_wait_and_fire_timer(self, timer_id: str) -> None:
        timer_entry = self._timers.get(timer_id)
        if timer_entry is None:
            return
        current_task = asyncio.current_task()
        try:
            await asyncio.sleep(self._remaining(timer_entry))
            if self._timers.get(timer_id) is not timer_entry or timer_entry.get("task") is not current_task:
                return
            if current_task is not None:
                self._notification_tasks.add(current_task)
            # Publish the surviving timer before awaiting playback or user
            # scenarios. A slow notification must not delay state updates.
            self._timers.pop(timer_id)
            timer_entry["task"] = None
            self._mark_updated()
            device_ref = timer_entry.get("device_id")
            await audio_notification(self.hass, device_ref, self._default_media_content_id(), "0.3-0.7")
            await self._async_dispatch_timer_worked(timer_entry)
        except asyncio.CancelledError:
            return
        finally:
            if current_task is not None:
                self._notification_tasks.discard(current_task)
            if self._timers.get(timer_id) is timer_entry and timer_entry.get("task") is current_task:
                timer_entry["task"] = None

    async def _async_dispatch_timer_worked(self, timer_entry: dict[str, Any]) -> None:
        if self._on_timer_worked is None:
            return
        payload = {
            "parent_type": "timer_worked",
            "client_id": _normalize_value(timer_entry.get("client_id")),
            "clientId": _normalize_value(timer_entry.get("client_id")),
            "device_id": _normalize_value(timer_entry.get("device_id")),
            "deviceId": _normalize_value(timer_entry.get("device_id")),
            "timer_id": _normalize_value(timer_entry.get("id")),
            "id": _normalize_value(timer_entry.get("id")),
            "type": "timer",
            "data": {
                "total_seconds": max(1, _safe_int(timer_entry.get("total_seconds"))),
            },
        }
        result = self._on_timer_worked(payload)
        if asyncio.iscoroutine(result):
            await result

    def _timers_for_client(self, client_id: str, device_id: str = "") -> list[dict[str, Any]]:
        items = [
            entry for entry in self._timers.values()
            if (not client_id or _normalize_value(entry.get("client_id")) == client_id)
            and (not device_id or _normalize_value(entry.get("device_id")) == device_id)
        ]
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items

    def _timer_count_message(self, timers: list[dict[str, Any]]) -> tuple[bool, str]:
        if not timers:
            return False, "Активных таймеров нет."
        lines: list[str] = []
        count = len(timers) != 1
        for index, item in enumerate(timers, start=1):
            total_seconds = max(1, _safe_int(item.get("total_seconds")))
            remaining = math.ceil(self._remaining(item))
            number = f"{index}. на {_seconds_to_minute_phrase(total_seconds)} осталось"
            lines.append(f"{number if count else ''} {_seconds_to_minute_phrase(max(1, remaining))}")
        return count, "\n".join(lines)
