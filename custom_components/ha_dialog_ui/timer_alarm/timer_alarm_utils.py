from __future__ import annotations

import logging
from collections.abc import Iterable
from datetime import datetime, timedelta
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util

from ..const import DEFAULT_ALERT_MEDIA_ID
from ..dialog.normalize import _normalize_device_ids, _normalize_value

_LOGGER = logging.getLogger(__name__)
_FALLBACK_TIMER_MEDIA_CONTENT_ID = DEFAULT_ALERT_MEDIA_ID
_TIMER_PREFIX = "ha_timer:"
_ALARM_PREFIX = "ha_alarm:"


def normalize_volume_start(value: Any) -> float:
    try:
        return min(max(float(value), 0.0), 1.0)
    except (TypeError, ValueError):
        return 0.3


def _safe_int(value: Any) -> int:
    try:
        return max(0, int(value))
    except (TypeError, ValueError):
        return 0


def _seconds_to_duration(total_seconds: int) -> str:
    safe_total = max(0, _safe_int(total_seconds))
    hours = safe_total // 3600
    minutes = (safe_total % 3600) // 60
    seconds = safe_total % 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


def _seconds_to_minute_phrase(total_seconds: int) -> str:
    minutes = max(1, int(round(max(0, _safe_int(total_seconds)) / 60)))
    return f"{minutes} минут"


def _duration_to_seconds(duration: str) -> int:
    if not duration:
        return 0
    parts = [p.strip() for p in str(duration).split(":") if p.strip() != ""]
    if any(part == "" for part in parts):
        return 0
    try:
        numbers = [int(part) for part in parts]
    except ValueError:
        return 0
    if len(numbers) == 3:
        return numbers[0] * 3600 + numbers[1] * 60 + numbers[2]
    if len(numbers) == 2:
        return numbers[0] * 60 + numbers[1]
    if len(numbers) == 1:
        return numbers[0] * 60
    return 0


def _default_timezone_name() -> str:
    local_dt = datetime.now().astimezone()
    return getattr(local_dt.tzinfo, "key", None) or str(local_dt.tzinfo or "")


def _format_datetime(timestamp_value: float, timezone_name: str) -> str:
    tz = dt_util.now().tzinfo or datetime.now().astimezone().tzinfo
    dt_value = datetime.fromtimestamp(float(timestamp_value), tz=tz)
    return dt_value.isoformat(timespec="seconds")


def _parse_datetime(value: str, timezone_name: str) -> datetime | None:
    normalized = _normalize_value(value)
    if not normalized:
        return None
    parsed = dt_util.parse_datetime(normalized)
    if parsed is None:
        try:
            parsed = datetime.fromisoformat(normalized.replace(" ", "T"))
        except ValueError:
            return None
    if parsed.tzinfo is None:
        tz = dt_util.now().tzinfo or datetime.now().astimezone().tzinfo
        parsed = parsed.replace(tzinfo=tz)
    return dt_util.as_local(parsed)


def _collect_device_labels(hass: HomeAssistant, items: list[dict[str, Any]], configured_device_ids: Any) -> dict[str, str]:
    candidates: set[str] = set()
    for item in items:
        ref = _normalize_value(item.get("deviceId") or item.get("device_id"))
        if ref:
            candidates.add(ref)
    candidates.update(_normalize_device_ids(configured_device_ids))

    result: dict[str, str] = {}
    for ref in sorted(candidates):
        label = _resolve_device_label(hass, ref)
        if label:
            result[ref] = label
    return result


def _resolve_device_label(hass: HomeAssistant, device_ref: str) -> str:
    normalized = _normalize_value(device_ref)
    if not normalized:
        return ""
    state = hass.states.get(normalized)
    if state is not None:
        return _normalize_value(state.attributes.get("friendly_name")) or normalized

    registry = er.async_get(hass)
    entities = er.async_entries_for_device(registry, normalized)
    for entry in entities:
        if not entry.entity_id.startswith("media_player."):
            continue
        entity_state = hass.states.get(entry.entity_id)
        if entity_state is None:
            continue
        return _normalize_value(entity_state.attributes.get("friendly_name")) or entry.entity_id
    for entry in entities:
        if entry.entity_id:
            return entry.entity_id

    device_registry = dr.async_get(hass)
    device_entry = device_registry.async_get(normalized)
    if device_entry is not None:
        return _normalize_value(device_entry.name_by_user or device_entry.name) or normalized
    return normalized


def _coerce_items_from_runtime_holder(holder: Any) -> list[dict[str, Any]]:
    timer_map = getattr(holder, "_timers", None)
    alarm_map = getattr(holder, "_alarms", None)
    if not isinstance(timer_map, dict) and not isinstance(alarm_map, dict):
        manager = getattr(holder, "timer_alarm_manager", None)
        timer_map = getattr(manager, "_timers", None)
        alarm_map = getattr(manager, "_alarms", None)

    items: list[dict[str, Any]] = []
    now_ts = datetime.now().timestamp()
    timezone_name = _default_timezone_name()

    if isinstance(timer_map, dict):
        for timer_id, entry in timer_map.items():
            if not isinstance(entry, dict):
                continue
            total_seconds = _safe_int(entry.get("total_seconds"))
            remaining_seconds = _safe_int(entry.get("remaining_seconds"))
            paused = bool(entry.get("paused"))
            ends_at = float(entry.get("ends_at") or (now_ts + remaining_seconds))
            items.append(
                {
                    "id": _normalize_value(timer_id or entry.get("id")),
                    "type": "timer",
                    "status": "paused" if paused else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {
                        "count_timer": _seconds_to_duration(max(1, total_seconds)),
                        "remaining_timer": _seconds_to_duration(max(0, remaining_seconds)),
                        "total_seconds": max(1, total_seconds),
                        "remaining_seconds": max(0, remaining_seconds),
                        "date_end": _format_datetime(ends_at, timezone_name),
                    },
                }
            )

    if isinstance(alarm_map, dict):
        for alarm_id, entry in alarm_map.items():
            if not isinstance(entry, dict):
                continue
            items.append(
                {
                    "id": _normalize_value(alarm_id or entry.get("id")),
                    "type": "alarm",
                    "status": "off" if _normalize_value(entry.get("status")).lower() == "off" else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {"time": _normalize_value(entry.get("time") or "08:00")},
                }
            )

    return [item for item in items if _normalize_value(item.get("id"))]


def _sort_item_key(item: dict[str, Any]) -> tuple[int, str, str]:
    item_type = _normalize_value(item.get("type"))
    now = dt_util.now()
    if item_type == "timer":
        time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
        end_dt = _parse_datetime(_normalize_value(time_data.get("date_end")), "")
        ts = int(end_dt.timestamp()) if end_dt is not None else 10**18
    else:
        time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
        alarm_time = _normalize_value(time_data.get("time"))
        try:
            h, m = [int(part) for part in alarm_time.split(":", 1)]
            candidate = now.replace(hour=h, minute=m, second=0, microsecond=0)
            if candidate < now:
                candidate = candidate + timedelta(days=1)
            ts = int(candidate.timestamp())
        except Exception:
            ts = 10**18
    return (ts, item_type, _normalize_value(item.get("id")))


def _normalize_alarm_presets(values: Any) -> list[str]:
    if isinstance(values, str):
        values = [values]
    if not isinstance(values, Iterable):
        return []
    normalized = {_normalize_value(value) for value in values if _normalize_value(value)}
    return sorted(normalized)
