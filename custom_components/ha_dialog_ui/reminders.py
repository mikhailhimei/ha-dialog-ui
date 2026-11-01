"""Persistent, one-shot spoken reminders owned by the integration runtime."""
from __future__ import annotations

import asyncio
from copy import deepcopy
from datetime import timedelta
import logging
from uuid import uuid4

from homeassistant.exceptions import HomeAssistantError
from homeassistant.core import callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.event import async_track_point_in_utc_time
from homeassistant.helpers.storage import Store
from homeassistant.helpers.network import get_url
from homeassistant.util import dt as dt_util

from .audio.audio_notification import _resolve_media_player_entity_id

_LOGGER = logging.getLogger(__name__)


def _schema_has_field(schema, field):
    """Handle both plain service schemas and All-wrapped entity schemas."""
    fields = getattr(schema, "schema", schema)
    if isinstance(fields, dict):
        return any(str(key) == field for key in fields)
    return any(_schema_has_field(validator, field)
               for validator in getattr(schema, "validators", ()))


class ReminderManager:
    def __init__(self, hass):
        self.hass = hass
        self._store = Store(hass, 1, "ha_dialog_ui_reminders")
        self._items = {}
        self._cancel = {}
        self._deliveries = set()
        self._lock = asyncio.Lock()
        self._stopped = False
        self.client_id = ""

    def items(self):
        return deepcopy(sorted(self._items.values(), key=lambda item: item["at"]))

    async def restore(self, client_id=""):
        self.client_id = str(client_id or "").strip()
        self._stopped = False
        loaded = await self._store.async_load() or []
        self._items = {item["id"]: item for item in loaded if isinstance(item, dict) and item.get("id")}
        for item in self._items.values():
            item.setdefault("clientId", self.client_id)
            if item["status"] == "delivering":
                item.update(status="failed", error="Озвучивание прервано перезапуском Home Assistant")
            elif item["status"] == "pending":
                self._schedule(item)
        await self._save()

    async def stop(self):
        self._stopped = True
        async with self._lock:
            for cancel in self._cancel.values():
                cancel()
            self._cancel.clear()
        for task in self._deliveries:
            task.cancel()
        await asyncio.gather(*self._deliveries, return_exceptions=True)

    async def _save(self):
        await self._store.async_save(self.items())

    def _schedule(self, item):
        when = dt_util.parse_datetime(item["at"])
        if when is None:
            item.update(status="failed", error="Некорректная дата напоминания")
            return

        @callback
        def deliver(_now):
            self._cancel.pop(item["id"], None)
            if self._stopped:
                return
            task = self.hass.async_create_task(self._fire(item["id"]))
            self._deliveries.add(task)
            task.add_done_callback(self._deliveries.discard)

        self._cancel[item["id"]] = async_track_point_in_utc_time(
            self.hass, deliver, max(dt_util.as_utc(when), dt_util.utcnow())
        )

    async def create(self, text, device_id, *, at=None, delay_seconds=None, client_id=None):
        text, device_id = str(text).strip(), str(device_id).strip()
        if not text or len(text) > 2000 or not device_id:
            raise HomeAssistantError("Укажите текст (до 2000 символов) и колонку")
        if (at is None) == (delay_seconds is None):
            raise HomeAssistantError("Укажите либо дату и время, либо интервал")
        if delay_seconds is not None:
            try:
                seconds = float(delay_seconds)
                if not 0 < seconds <= 315360000:
                    raise ValueError
                when = dt_util.utcnow() + timedelta(seconds=seconds)
            except (TypeError, ValueError, OverflowError) as err:
                raise HomeAssistantError("Интервал должен быть положительным числом секунд") from err
        else:
            when = dt_util.parse_datetime(str(at))
            if when is None:
                raise HomeAssistantError("Некорректная дата напоминания")
            # Naive script dates use HA's configured timezone; UI sends an offset.
            when = dt_util.as_utc(when)
            if when <= dt_util.utcnow():
                raise HomeAssistantError("Дата напоминания должна быть в будущем")
        if not self._satellite(device_id) and not _resolve_media_player_entity_id(self.hass, device_id):
            raise HomeAssistantError("У выбранной колонки нет доступного устройства озвучивания")
        item = {"id": str(uuid4()), "text": text, "device_id": device_id,
                "clientId": self.client_id if client_id is None else str(client_id).strip(),
                "at": when.isoformat(), "status": "pending"}
        async with self._lock:
            if self._stopped:
                raise HomeAssistantError("Интеграция останавливается")
            self._items[item["id"]] = item
            try:
                await self._save()
            except Exception:
                self._items.pop(item["id"], None)
                raise
            self._schedule(item)
        return deepcopy(item)

    async def delete(self, reminder_id):
        async with self._lock:
            item = self._items.get(reminder_id)
            if item is None:
                raise HomeAssistantError("Напоминание не найдено")
            if item["status"] == "delivering":
                raise HomeAssistantError("Напоминание уже озвучивается")
            del self._items[reminder_id]
            try:
                await self._save()
            except Exception:
                self._items[reminder_id] = item
                raise
            cancel = self._cancel.pop(reminder_id, None)
            if cancel:
                cancel()

    def _satellite(self, device_ref):
        registry = er.async_get(self.hass)
        reference = registry.async_get(device_ref)
        device_id = reference.device_id if reference else device_ref
        candidates = ([device_ref] if device_ref.startswith("assist_satellite.") else
                      [entry.entity_id for entry in er.async_entries_for_device(registry, device_id)
                       if entry.domain == "assist_satellite" and not entry.disabled])
        available = [entity_id for entity_id in candidates
                     if (state := self.hass.states.get(entity_id)) is not None
                     and state.state not in {"unavailable", "unknown"}
                     and int(state.attributes.get("supported_features", 0)) & 1]
        return available[0] if len(available) == 1 else None

    async def _speak(self, item):
        satellite = self._satellite(item["device_id"])
        if satellite:
            service = self.hass.services.async_services().get("assist_satellite", {}).get("announce")
            if _schema_has_field(getattr(service, "schema", None), "preannounce"):
                await self.hass.services.async_call("assist_satellite", "announce",
                    {"message": item["text"], "preannounce": True},
                    target={"entity_id": satellite}, blocking=True)
                return
            # HA versions without preannounce: wait for the firmware's announcement
            # completion before sending the speech, rather than sleeping a fixed time.
            chime_url = get_url(self.hass, allow_external=False).rstrip("/") + "/ha_dialog_ui_static/sounds/reminder-chime.wav"
            await self.hass.services.async_call("assist_satellite", "announce",
                {"media_id": chime_url}, target={"entity_id": satellite}, blocking=True)
            await self.hass.services.async_call("assist_satellite", "announce",
                {"message": item["text"]}, target={"entity_id": satellite}, blocking=True)
            return
        player = _resolve_media_player_entity_id(self.hass, item["device_id"])
        if not player:
            raise HomeAssistantError("Колонка недоступна")
        from homeassistant.components.assist_pipeline import async_get_pipeline
        pipeline = async_get_pipeline(self.hass)
        if not pipeline.tts_engine:
            raise HomeAssistantError("Настройте TTS в основном Assist-пайплайне")
        await self.hass.services.async_call("tts", "speak",
            {"media_player_entity_id": player, "message": item["text"],
             "language": pipeline.tts_language,
             **({"options": {"voice": pipeline.tts_voice}} if pipeline.tts_voice else {})},
            target={"entity_id": pipeline.tts_engine}, blocking=True)

    async def _fire(self, reminder_id):
        async with self._lock:
            item = self._items.get(reminder_id)
            if not item or item["status"] != "pending" or self._stopped:
                return
            item["status"] = "delivering"
            await self._save()
        try:
            await self._speak(item)
        except asyncio.CancelledError:
            item.update(status="failed", error="Озвучивание прервано остановкой интеграции")
            raise
        except Exception as err:
            item.update(status="failed", error=str(err))
            _LOGGER.warning("Reminder %s could not be spoken: %s", reminder_id, err)
        else:
            item["status"] = "completed"
        finally:
            async with self._lock:
                await self._save()
