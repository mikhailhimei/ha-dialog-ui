from __future__ import annotations

import asyncio
import uuid
from datetime import datetime
from typing import Any, Callable
import logging

from homeassistant.core import HomeAssistant

from .alarm_repeat import _normalize_repeat_type, _normalize_repeat_days
from ..dialog.normalize import _normalize_value
from .timer_alarm_utils import (
    normalize_volume_start,
    _safe_int,
)
from ..audio.audio_notification import audio_notification

_LOGGER = logging.getLogger(__name__)


class DialogAlarmManager:
    def __init__(
        self,
        hass: HomeAssistant,
        mark_updated: Callable[[], None],
        default_media_content_id: Callable[[], str],
        on_alarm_worked: Callable[[dict[str, Any]], Any] | None = None,
    ) -> None:
        self.hass = hass
        self._mark_updated = mark_updated
        self._default_media_content_id = default_media_content_id
        self._on_alarm_worked = on_alarm_worked
        self._alarms: dict[str, dict[str, Any]] = {}
        self._alarm_presets: set[str] = set()
        self._triggered_alarm_keys: set[str] = set()
        self._triggered_alarm_date: str | None = None
        self._alarm_tick_task: asyncio.Task | None = None

    async def async_stop(self) -> None:
        tick_task = self._alarm_tick_task
        self._alarm_tick_task = None
        if tick_task is not None and tick_task is not asyncio.current_task():
            tick_task.cancel()
            try:
                await tick_task
            except asyncio.CancelledError:
                pass
        self._alarms.clear()
        self._triggered_alarm_keys.clear()
        self._triggered_alarm_date = None

    async def async_handle_alarm_start(
        self,
        alarm_time: str | None,
        client_id: str,
        device_id: str,
        is_main_command: bool,
        repeat_type: Any = None,
        repeat_days: Any = None,
    ) -> dict[str, Any] | None:
        if not client_id and is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить будильник: отсутствует client_id",
            }

        alarm_time = _normalize_value(alarm_time)
        if not alarm_time:
            if is_main_command:
                return {
                    "client_id": client_id,
                    "device_id": device_id,    
                    "actionType": "error",
                    "message": "Не удалось установить будильник: время не распознано",
                }
            return None

        normalized_repeat_type = _normalize_repeat_type(repeat_type)
        normalized_repeat_days = _normalize_repeat_days(repeat_days) if normalized_repeat_type == "custom" else []

        for existing in self._alarms.values():
            if _normalize_value(existing.get("client_id")) != client_id:
                continue
            existing_device_id = _normalize_value(existing.get("device_id"))
            if existing_device_id != device_id:
                continue
            if _normalize_value(existing.get("time")) != alarm_time:
                continue
            if _normalize_repeat_type(existing.get("repeat_type")) != normalized_repeat_type:
                continue
            if _normalize_repeat_days(existing.get("repeat_days")) != normalized_repeat_days:
                continue

            if _normalize_value(existing.get("status")).lower() == "off":
                existing["status"] = "on"
                existing["time"] = alarm_time
                existing["device_id"] = device_id
                self._remember_alarm_preset(alarm_time)
                self._ensure_alarm_tick_task()
                self._mark_updated()

            if is_main_command:
                return {
                    "actionType": "success",
                    "client_id": client_id,
                    "device_id": device_id,
                    "message": f"{alarm_time}",
                }

            return

        alarm_id = f"ha_alarm:{client_id}:{uuid.uuid4().hex[:8]}"
        self._alarms[alarm_id] = {
            "id": alarm_id,
            "client_id": client_id,
            "device_id": device_id,
            "status": "on",
            "time": alarm_time,
            "volume_start": 0.3,
            "repeat_type": normalized_repeat_type,
            "repeat_days": normalized_repeat_days,
            "created_at": datetime.now().timestamp(),
        }
        self._remember_alarm_preset(alarm_time)
        self._ensure_alarm_tick_task()
        self._mark_updated()
        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
                "message": f"{alarm_time}",
            }

    async def async_handle_alarm_stop(
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
                "message": "Не удалось установить будильник: отсутствует client_id",
            }

        alarms = self._alarms_for_client(client_id, device_id)
        if not alarms and not is_main_command:
            return None
        if not alarms:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "not_alarm",
            }

        if count is None and is_main_command and len(alarms) > 1:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "several",
                "message": "\n".join(
                    f"{i+1}. на {_normalize_value(item.get('time'))}" for i, item in enumerate(alarms)
                ),
            }

        index = len(alarms) - 1 if count is None else min(max(count - 1, 0), len(alarms) - 1)
        alarm_id = _normalize_value(alarms[index].get("id"))
        self._alarms.pop(alarm_id, None)
        self._mark_updated()

        return {
            "client_id": client_id,
            "device_id": device_id,
            "actionType": "success",
            "message": f"{alarms[index].get('time')}",
        }

    async def async_handle_alarm_info(
        self,
        client_id: str,
        device_id: str,
        is_main_command: bool,
    ) -> dict[str, Any] | None:
        alarms = self._alarms_for_client(client_id, device_id)
        if len(alarms) == 1:
            count_type = "one"
            text_alarms = f"{_normalize_value(alarms[0].get('time'))}"
        else:
            count_type = "several"
            text_alarms = "\n".join(
                f"{i+1}. на {_normalize_value(item.get('time'))}"
                for i, item in enumerate(alarms)
            )

        if is_main_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": count_type,
                "message": text_alarms,
            }

    def get_alarm_items(self) -> list[dict[str, Any]]:
        items: list[dict[str, Any]] = []
        for alarm_id, entry in self._alarms.items():
            items.append(
                {
                    "id": alarm_id,
                    "type": "alarm",
                    "status": "off" if _normalize_value(entry.get("status")).lower() == "off" else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {"time": _normalize_value(entry.get("time") or "08:00")},
                    "volume_start": normalize_volume_start(entry.get("volume_start")),
                    "repeat_type": _normalize_repeat_type(entry.get("repeat_type")),
                    "repeat_days": _normalize_repeat_days(entry.get("repeat_days")),
                }
            )
        items.sort(key=lambda item: _normalize_value(item.get("id")))
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        return [
            item
            for item in self.get_alarm_items()
            if _normalize_value(item.get("status")).lower() in {"on", "paused"}
        ]

    def get_alarm_presets(self) -> list[str]:
        normalized = {_normalize_value(preset) for preset in self._alarm_presets if _normalize_value(preset)}
        if len(normalized) != len(self._alarm_presets) or normalized != self._alarm_presets:
            self._alarm_presets.clear()
            self._alarm_presets.update(normalized)
        return sorted(normalized)

    def _remember_alarm_preset(self, alarm_time: Any) -> None:
        normalized = _normalize_value(alarm_time)
        if normalized:
            self._alarm_presets.add(normalized)

    def serialize_alarm_persisted_items(self) -> list[dict[str, Any]]:
        result: list[dict[str, Any]] = []
        for item in self.get_alarm_items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            result.append(
                {
                    "id": _normalize_value(item.get("id")),
                    "type": "alarm",
                    "clientId": _normalize_value(item.get("clientId") or item.get("userId")),
                    "deviceId": _normalize_value(item.get("deviceId")),
                    "status": _normalize_value(item.get("status")) or "on",
                    "time": {"time": _normalize_value(time_data.get("time")) or "08:00"},
                    "volume_start": normalize_volume_start(item.get("volume_start")),
                    "repeat_type": _normalize_repeat_type(item.get("repeat_type")),
                    "repeat_days": _normalize_repeat_days(item.get("repeat_days")),
                }
            )
        return result

    async def apply_ui_items(self, incoming_alarms: dict[str, dict[str, Any]]) -> None:
        existing_ids = set(self._alarms)
        requested_ids = set(incoming_alarms)
        for alarm_id in existing_ids - requested_ids:
            self._alarms.pop(alarm_id, None)

        changed = bool(existing_ids - requested_ids)
        for alarm_id, item in incoming_alarms.items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            alarm_time = _normalize_value(time_data.get("time")) or "08:00"
            client_id = _normalize_value(item.get("clientId") or item.get("userId"))
            device_id = _normalize_value(item.get("deviceId"))
            status = _normalize_value(item.get("status")).lower()
            status = "off" if status == "off" else "on"
            volume_start = normalize_volume_start(item.get("volume_start"))
            repeat_type = _normalize_repeat_type(item.get("repeat_type"))
            repeat_days = _normalize_repeat_days(item.get("repeat_days"))

            if alarm_id in self._alarms:
                alarm = self._alarms[alarm_id]
                alarm["client_id"] = client_id
                alarm["device_id"] = device_id
                alarm["status"] = status
                alarm["time"] = alarm_time
                alarm["volume_start"] = volume_start
                alarm["repeat_type"] = repeat_type
                alarm["repeat_days"] = repeat_days
                self._remember_alarm_preset(alarm_time)
                if status == "on":
                    self._ensure_alarm_tick_task()
                changed = True
                continue

            self._alarms[alarm_id] = {
                "id": alarm_id,
                "client_id": client_id,
                "device_id": device_id,
                "status": status,
                "time": alarm_time,
                "volume_start": volume_start,
                "repeat_type": repeat_type,
                "repeat_days": repeat_days,
                "created_at": datetime.now().timestamp(),
            }
            self._remember_alarm_preset(alarm_time)
            if status == "on":
                self._ensure_alarm_tick_task()
            changed = True

        if changed:
            self._mark_updated()

    def _ensure_alarm_tick_task(self) -> None:
        if self._alarm_tick_task is not None and not self._alarm_tick_task.done():
            return
        self._alarm_tick_task = self.hass.async_create_background_task(
            self._alarm_tick_loop(), "Dialog Custom UI alarm tick", eager_start=False,
        )

    async def _alarm_tick_loop(self) -> None:
        current_task = asyncio.current_task()
        while self._alarm_tick_task is current_task:
            try:
                await self._alarm_tick_once()
            except asyncio.CancelledError:
                raise
            except Exception:
                _LOGGER.exception("Failed to check alarms")
            if self._alarm_tick_task is not current_task:
                return
            await asyncio.sleep(1)

    async def _alarm_tick_once(self) -> None:
        now = datetime.now()
        date_key = now.date().isoformat()
        if self._triggered_alarm_date != date_key:
            self._triggered_alarm_keys.clear()
            self._triggered_alarm_date = date_key
        for alarm in list(self._alarms.values()):
            alarm_id = _normalize_value(alarm.get("id"))
            if self._alarms.get(alarm_id) is not alarm:
                continue
            if _normalize_value(alarm.get("status")).lower() == "off":
                continue
            alarm_time = _normalize_value(alarm.get("time"))
            try:
                hour, minute = [int(part) for part in alarm_time.split(":", 1)]
            except (TypeError, ValueError):
                continue
            if now.hour != hour or now.minute != minute:
                continue
            if not self._should_alarm_run_today(alarm, now):
                continue
            trigger_key = f"{alarm_id}:{date_key}:{alarm_time}"
            if trigger_key in self._triggered_alarm_keys:
                continue
            self._triggered_alarm_keys.add(trigger_key)
            try:
                await self._run_alarm_action(alarm)
            except Exception:
                _LOGGER.exception("Failed to run alarm %s", alarm_id)

    def _should_alarm_run_today(self, alarm: dict[str, Any], now: datetime) -> bool:
        repeat_type = _normalize_repeat_type(alarm.get("repeat_type"))
        weekday = now.weekday()
        if repeat_type == "daily":
            return True
        if repeat_type == "weekdays":
            return weekday < 5
        if repeat_type == "weekends":
            return weekday >= 5
        if repeat_type == "custom":
            day_key = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][weekday]
            return day_key in set(_normalize_repeat_days(alarm.get("repeat_days")))
        return True

    async def _run_alarm_action(self, alarm: dict[str, Any]) -> None:
        device_ref = _normalize_value(alarm.get("device_id"))
        await audio_notification(self.hass, device_ref, self._default_media_content_id(), "0.3-0.7")
        await self._async_dispatch_alarm_worked(alarm)
        if _normalize_repeat_type(alarm.get("repeat_type")) == "once":
            alarm["status"] = "off"
        self._mark_updated()

    async def _async_dispatch_alarm_worked(self, alarm: dict[str, Any]) -> None:
        if self._on_alarm_worked is None:
            return
        alarm_time = _normalize_value(alarm.get("time"))
        payload = {
            "parent_type": "alarm_worked",
            "client_id": _normalize_value(alarm.get("client_id")),
            "clientId": _normalize_value(alarm.get("client_id")),
            "device_id": _normalize_value(alarm.get("device_id")),
            "deviceId": _normalize_value(alarm.get("device_id")),
            "alarm_id": _normalize_value(alarm.get("id")),
            "id": _normalize_value(alarm.get("id")),
            "type": "alarm",
            "data": {
                "time": alarm_time,
            },
        }
        result = self._on_alarm_worked(payload)
        if asyncio.iscoroutine(result):
            await result

    def _alarms_for_client(self, client_id: str, device_id: str = "") -> list[dict[str, Any]]:
        items = [
            entry
            for entry in self._alarms.values()
            if (not client_id or _normalize_value(entry.get("client_id")) == client_id)
            and (not device_id or _normalize_value(entry.get("device_id")) == device_id)
            and _normalize_value(entry.get("status")).lower() != "off"
        ]
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items
