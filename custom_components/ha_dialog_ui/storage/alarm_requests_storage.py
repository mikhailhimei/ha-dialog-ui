"""Storage helpers for dialog custom UI alarm requests and time widgets."""

from __future__ import annotations

import asyncio
import re
from uuid import uuid4
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .collection_helpers import normalize_collection_items

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_alarm_requests"
_ALARM_REQUESTS_KEY = "alarm_requests"
_ALARM_TIME_WIDGETS_KEY = "alarm_time_widgets"
_STORAGE_LOCK_KEY = f"{_STORAGE_KEY}_lock"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_storage(value: Any) -> dict[str, list[dict[str, Any]]]:
    if isinstance(value, list):
        return {
            _ALARM_REQUESTS_KEY: normalize_collection_items(value),
            _ALARM_TIME_WIDGETS_KEY: [],
        }

    if not isinstance(value, dict):
        return {_ALARM_REQUESTS_KEY: [], _ALARM_TIME_WIDGETS_KEY: []}

    return {
        _ALARM_REQUESTS_KEY: normalize_collection_items(value.get(_ALARM_REQUESTS_KEY)),
        _ALARM_TIME_WIDGETS_KEY: normalize_collection_items(value.get(_ALARM_TIME_WIDGETS_KEY)),
    }


async def _async_load_storage(hass: HomeAssistant) -> dict[str, list[dict[str, Any]]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_storage(loaded)


async def _async_save_storage(
    hass: HomeAssistant,
    data: dict[str, list[dict[str, Any]]],
) -> None:
    store = _get_store(hass)
    await store.async_save(_normalize_storage(data))


async def _async_update_collection(
    hass: HomeAssistant, collection: str, items: list[dict[str, Any]],
) -> None:
    lock = hass.data.setdefault(_STORAGE_LOCK_KEY, asyncio.Lock())
    async with lock:
        data = await _async_load_storage(hass)
        data[collection] = normalize_collection_items(items)
        _remember_alarm_times(data)
        await _async_save_storage(hass, data)


def _remember_alarm_times(data: dict[str, list[dict[str, Any]]]) -> None:
    """Keep used alarm times in the existing widget collection under its storage lock."""
    widgets = data[_ALARM_TIME_WIDGETS_KEY]
    known = set()
    for widget in widgets:
        times = widget.get("time", [])
        known.update(value for value in (times if isinstance(times, list) else [times]) if isinstance(value, str))
    for alarm in data[_ALARM_REQUESTS_KEY]:
        clock = str(alarm.get("time") or "").strip()
        if not re.fullmatch(r"(?:[01]\d|2[0-3]):[0-5]\d", clock) or clock in known:
            continue
        widgets.append({"uuid": str(uuid4()), "name": clock, "action_type": "create_time_widget", "time": [clock]})
        known.add(clock)


async def async_load_alarm_requests(hass: HomeAssistant) -> list[dict[str, Any]]:
    data = await _async_load_storage(hass)

    return data[_ALARM_REQUESTS_KEY]


async def async_save_alarm_requests(
    hass: HomeAssistant,
    alarm_requests: list[dict[str, Any]],
) -> None:
    await _async_update_collection(hass, _ALARM_REQUESTS_KEY, alarm_requests)


async def async_load_alarm_time_widgets(hass: HomeAssistant) -> list[dict[str, Any]]:
    data = await _async_load_storage(hass)

    return data[_ALARM_TIME_WIDGETS_KEY]


async def async_save_alarm_time_widgets(
    hass: HomeAssistant,
    alarm_time_widgets: list[dict[str, Any]],
) -> None:
    await _async_update_collection(hass, _ALARM_TIME_WIDGETS_KEY, alarm_time_widgets)
