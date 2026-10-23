from __future__ import annotations

import logging
from collections.abc import Awaitable, Callable
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .alarm_manager import DialogAlarmManager
from .service_responses import (
    normalize_service_response,
    build_service_json_response,
    build_timer_info_items,
    build_alarm_info_items,
)
from .alarm_repeat import _normalize_repeat_type, _normalize_repeat_days
from ..dialog.normalize import _normalize_value
from .timer_manager import DialogTimerManager
from .request_mapping import (
    normalize_ui_item,
    _timer_request_to_runtime_item,
    _alarm_request_to_runtime_item,
    _timer_item_to_request,
    _alarm_item_to_request,
)
from ..integration_helpers import get_integration_entry
from ..runtime_options import build_runtime_options
from ..storage.alarm_requests_storage import async_load_alarm_requests, async_save_alarm_requests
from ..storage.settings_storage import get_cached_settings
from ..storage.timer_requests_storage import async_load_timer_requests, async_save_timer_requests
from ..const import DOMAIN, SIGNAL_TIMER_ALARM_UPDATED
from .timer_alarm_utils import (
    _FALLBACK_TIMER_MEDIA_CONTENT_ID,
    _sort_item_key,
)


_LOGGER = logging.getLogger(__name__)


class DialogTimerAlarmManager:
    """In-memory timer/alarm manager owned by command coordinator."""

    def __init__(
        self,
        hass: HomeAssistant,
        on_timer_alarm_worked: Callable[[dict[str, Any]], Awaitable[None]] | None = None,
    ) -> None:
        self.hass = hass
        self._on_timer_alarm_worked = on_timer_alarm_worked

        self.timer_manager = DialogTimerManager(
            hass,
            self._mark_updated,
            lambda: self._media_content_id_for("timer"),
            self._on_timer_alarm_worked,
        )
        self.alarm_manager = DialogAlarmManager(
            hass,
            self._mark_updated,
            lambda: self._media_content_id_for("alarm"),
            on_alarm_worked=self._on_timer_alarm_worked,
        )

        self._timers = self.timer_manager._timers
        self._alarms = self.alarm_manager._alarms
        self._alarm_presets = self.alarm_manager._alarm_presets
        self._last_updated: str | None = None
        self._restored = False
        self._save_task = None
        self._save_pending = False
        self._runtime_state_key = f"timer_alarm_runtime:{id(self)}"

    async def async_restore_from_storage(self, shared_client_id: str) -> None:
        if self._restored:
            return
        
        shared_client_id = _normalize_value(shared_client_id)

        timer_requests = await async_load_timer_requests(self.hass)
        alarm_requests = await async_load_alarm_requests(self.hass)
        normalized_items = [
            *[_timer_request_to_runtime_item(item, shared_client_id) for item in timer_requests],
            *[_alarm_request_to_runtime_item(item, shared_client_id) for item in alarm_requests],
        ]
        await self._async_apply_runtime_items(normalized_items)
        self._restored = True

    async def async_stop(self) -> None:
        if self._save_task is not None:
            await self._save_task
        await self.timer_manager.async_stop()
        await self.alarm_manager.async_stop()
        self._remove_runtime_state()
        self._restored = False

    async def async_handle_service_action(
        self,
        kind: str,
        config: dict[str, Any],
        client_id: str,
        device_id: str,
    ) -> dict[str, Any]:
        action = _normalize_value(config.get("action")).lower()
        if kind == "timer":
            if action == "create":
                timer = {
                    "hour": _safe_config_int(config.get("hh")),
                    "minut": _safe_config_int(config.get("mm")),
                    "second": _safe_config_int(config.get("ss")),
                }
                result = await self.timer_manager.async_handle_timer_start(timer, client_id, device_id, True)
                return normalize_service_response(result or {"actionType": "success"})
            if action == "info":
                return normalize_service_response(
                    build_service_json_response(
                        "timers",
                        build_timer_info_items(self.timer_manager.get_active_items(), client_id),
                    )
                )
            if action == "delete":
                result = await self._delete_service_timer_by_uuid(_normalize_value(config.get("target_uuid")), client_id, device_id)
                return normalize_service_response(result)

        if kind == "alarm":
            if action == "create":
                alarm_time = self._service_alarm_time_from_config(config)
                repeat_type = _normalize_repeat_type(config.get("repeat_type"))
                repeat_days = _normalize_repeat_days(config.get("repeat_days")) if repeat_type == "custom" else []
                result = await self.alarm_manager.async_handle_alarm_start(
                    alarm_time,
                    client_id,
                    device_id,
                    True,
                    repeat_type,
                    repeat_days,
                )
                return normalize_service_response(result or {"actionType": "success"})
            if action == "info":
                return normalize_service_response(
                    build_service_json_response(
                        "alarms",
                        build_alarm_info_items(self.alarm_manager.get_active_items(), client_id),
                    )
                )
            if action == "delete":
                result = await self._delete_service_alarm_by_uuid(_normalize_value(config.get("target_uuid")), client_id, device_id)
                return normalize_service_response(result)

        return normalize_service_response({"actionType": "error", "message": "Неизвестное действие"})

    async def _delete_service_timer_by_uuid(self, timer_id: str, client_id: str, device_id: str) -> dict[str, Any]:
        if not timer_id:
            return {"client_id": client_id, "device_id": device_id, "actionType": "error", "message": "UUID таймера не указан"}
        timer_entry = self.timer_manager._timers.pop(timer_id, None)
        if timer_entry is None:
            return {"client_id": client_id, "device_id": device_id, "actionType": "error", "message": "Таймер не найден"}
        self.timer_manager._cancel_timer_task(timer_entry)
        self._mark_updated()
        return {"client_id": client_id, "device_id": device_id, "actionType": "success", "message": timer_id}

    async def _delete_service_alarm_by_uuid(self, alarm_id: str, client_id: str, device_id: str) -> dict[str, Any]:
        if not alarm_id:
            return {"client_id": client_id, "device_id": device_id, "actionType": "error", "message": "UUID будильника не указан"}
        alarm_entry = self.alarm_manager._alarms.pop(alarm_id, None)
        if alarm_entry is None:
            return {"client_id": client_id, "device_id": device_id, "actionType": "error", "message": "Будильник не найден"}
        self._mark_updated()
        return {"client_id": client_id, "device_id": device_id, "actionType": "success", "message": alarm_id}

    def _service_alarm_time_from_config(self, config: dict[str, Any]) -> str:
        hour = max(0, min(_safe_config_int(config.get("hh")), 23))
        minute = max(0, min(_safe_config_int(config.get("mm")), 59))
        convert_day_period = _normalize_value(config.get("convert_day_period")).lower() in {"1", "true", "yes", "on"}
        if not convert_day_period and 1 <= hour <= 11:
            now = dt_util.now()
            morning_hour = hour
            evening_hour = hour + 12
            if (now.hour, now.minute) < (morning_hour, minute):
                hour = morning_hour
            elif (now.hour, now.minute) < (evening_hour, minute):
                hour = evening_hour
            else:
                hour = morning_hour
        return f"{hour:02d}:{minute:02d}"

    def get_timer_items(self) -> list[dict[str, Any]]:
        return self.timer_manager.get_timer_items()

    def get_alarm_items(self) -> list[dict[str, Any]]:
        return self.alarm_manager.get_alarm_items()

    def get_items(self) -> list[dict[str, Any]]:
        items = self.get_timer_items() + self.get_alarm_items()
        items.sort(key=_sort_item_key)
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        items = self.timer_manager.get_active_items() + self.alarm_manager.get_active_items()
        items.sort(key=_sort_item_key)
        return items

    def get_alarm_presets(self) -> list[str]:
        return self.alarm_manager.get_alarm_presets()

    def serialize_timer_persisted_items(self) -> list[dict[str, Any]]:
        return self.timer_manager.serialize_timer_persisted_items()

    def serialize_alarm_persisted_items(self) -> list[dict[str, Any]]:
        return self.alarm_manager.serialize_alarm_persisted_items()

    def serialize_persisted_items(self) -> list[dict[str, Any]]:
        return self.serialize_timer_persisted_items() + self.serialize_alarm_persisted_items()

    async def async_apply_ui_items(self, items: list[dict[str, Any]], shared_client_id: str) -> list[dict[str, Any]]:
        normalized_items = [normalize_ui_item(item, shared_client_id) for item in items if isinstance(item, dict)]

        await self._async_apply_runtime_items(normalized_items)
        return self.get_items()

    async def _async_apply_runtime_items(self, normalized_items: list[dict[str, Any]]) -> None:
        incoming_timers = {
            _normalize_value(item.get("id")): item
            for item in normalized_items
            if _normalize_value(item.get("type")) == "timer"
        }
        incoming_alarms = {
            _normalize_value(item.get("id")): item
            for item in normalized_items
            if _normalize_value(item.get("type")) == "alarm"
        }

        await self.timer_manager.apply_ui_items(incoming_timers)
        await self.alarm_manager.apply_ui_items(incoming_alarms)

    @property
    def last_updated(self) -> str | None:
        return self._last_updated

    def _mark_updated(self) -> None:
        self._last_updated = dt_util.now().isoformat()
        self._publish_runtime_state()
        async_dispatcher_send(self.hass, SIGNAL_TIMER_ALARM_UPDATED)
        self._save_pending = True
        if self._save_task is None or self._save_task.done():
            self._save_task = self.hass.async_create_task(self._async_flush_request_storages())

    async def _async_flush_request_storages(self) -> None:
        while self._save_pending:
            self._save_pending = False
            await self._async_save_to_request_storages()

    async def _async_save_to_request_storages(self) -> None:
        try:
            await async_save_timer_requests(
                self.hass,
                [_timer_item_to_request(item) for item in self.get_timer_items()],
            )
            await async_save_alarm_requests(
                self.hass,
                [_alarm_item_to_request(item) for item in self.get_alarm_items()],
            )
        except Exception as err:
            _LOGGER.warning("Failed to save timer/alarm requests to split storages: %s", err)

    def _media_content_id_for(self, item_type: str) -> str:
        entry = get_integration_entry(self.hass)
        if entry is None:
            return _FALLBACK_TIMER_MEDIA_CONTENT_ID
        options = build_runtime_options(entry, get_cached_settings(self.hass))
        key = "alarm_music" if item_type == "alarm" else "timer_music"
        configured = _normalize_value(options.get(key) or options.get("timer_alarm_media_content_id"))
        if configured.startswith("media-source://media_source/local/"):
            configured = configured.split("media-source://media_source/local/", 1)[1]
        return configured or _FALLBACK_TIMER_MEDIA_CONTENT_ID

    def _publish_runtime_state(self) -> None:
        domain_data = self.hass.data.setdefault(DOMAIN, {})
        runtime = domain_data.setdefault("timer_alarm_runtime", {})
        runtime[self._runtime_state_key] = {
            "items": self.get_items(),
            "active_items": self.get_active_items(),
            "alarm_presets": self.get_alarm_presets(),
            "last_updated": self._last_updated,
        }

    def _remove_runtime_state(self) -> None:
        domain_data = self.hass.data.get(DOMAIN, {})
        runtime = domain_data.get("timer_alarm_runtime")
        if isinstance(runtime, dict):
            runtime.pop(self._runtime_state_key, None)


def _safe_config_int(value: Any) -> int:
    try:
        return int(value or 0)
    except (TypeError, ValueError):
        return 0
