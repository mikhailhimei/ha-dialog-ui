"""Convert persisted timer/alarm requests to runtime items and back."""

from __future__ import annotations

import uuid
from typing import Any

from ..dialog.normalize import _normalize_value
from .alarm_repeat import _normalize_repeat_type, _normalize_repeat_days
from .timer_alarm_utils import _TIMER_PREFIX, _ALARM_PREFIX


def _timer_request_to_runtime_item(timer_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    return {
        "id": _normalize_value(timer_request.get("uuid")),
        "type": "timer",
        "status": _normalize_value(timer_request.get("status")) or "on",
        "clientId": _normalize_value(timer_request.get("client_id")) or shared_client_id,
        "userId": _normalize_value(timer_request.get("client_id")) or shared_client_id,
        "deviceId": _normalize_value(timer_request.get("device_id")),
        "time": (
            timer_request.get("timer_time")
            if isinstance(timer_request.get("timer_time"), dict)
            else {"count_timer": _normalize_value(timer_request.get("timer_time"))}
        ),
    }


def _alarm_request_to_runtime_item(alarm_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    return {
        "id": _normalize_value(alarm_request.get("uuid")),
        "type": "alarm",
        "status": _normalize_value(alarm_request.get("status")) or "on",
        "clientId": _normalize_value(alarm_request.get("client_id")) or shared_client_id,
        "userId": _normalize_value(alarm_request.get("client_id")) or shared_client_id,
        "deviceId": _normalize_value(alarm_request.get("device_id")),
        "time": {"time": _normalize_value(alarm_request.get("time")) or "08:00"},
        "volume_start": alarm_request.get("volume_start", 0.3),
        "repeat_type": _normalize_repeat_type(alarm_request.get("repeat_type", alarm_request.get("repeat"))),
        "repeat_days": _normalize_repeat_days(alarm_request.get("repeat_days", alarm_request.get("week_days", alarm_request.get("days")))),
    }


def _timer_item_to_request(item: dict[str, Any]) -> dict[str, Any]:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    timer_time = dict(time_data) if time_data else _normalize_value(item.get("timer_time"))
    timer_id = _normalize_value(item.get("id")) or str(uuid.uuid4())
    return {
        "uuid": timer_id,
        "name": _normalize_value(item.get("name")) or "Таймер",
        "action_type": "create_timer",
        "status": _normalize_value(item.get("status")) or "on",
        "client_id": _normalize_value(item.get("clientId") or item.get("userId")),
        "device_id": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "timer_time": timer_time,
    }


def _alarm_item_to_request(item: dict[str, Any]) -> dict[str, Any]:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    alarm_time = _normalize_value(time_data.get("time") or item.get("time")) or "08:00"
    alarm_id = _normalize_value(item.get("id")) or str(uuid.uuid4())
    return {
        "uuid": alarm_id,
        "name": _normalize_value(item.get("name")) or f"Будильник {alarm_time}",
        "action_type": "create_alarm",
        "client_id": _normalize_value(item.get("clientId") or item.get("userId")),
        "device_id": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "status": _normalize_value(item.get("status")) or "on",
        "time": alarm_time,
        "volume_start": item.get("volume_start", 0.3),
        "repeat_type": _normalize_repeat_type(item.get("repeat_type", item.get("repeat"))),
        "repeat_days": _normalize_repeat_days(item.get("repeat_days", item.get("week_days", item.get("days")))),
    }


def normalize_ui_item(item: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    item_type = _normalize_value(item.get("type")).lower()
    item_id = _normalize_value(item.get("id"))
    if not item_id:
        prefix = _TIMER_PREFIX if item_type == "timer" else _ALARM_PREFIX
        item_id = f"{prefix}{uuid.uuid4().hex[:10]}"
    return {
        "id": item_id,
        "type": "timer" if item_type == "timer" else "alarm",
        "status": _normalize_value(item.get("status")) or "on",
        "clientId": _normalize_value(item.get("clientId") or item.get("userId") or shared_client_id),
        "userId": _normalize_value(item.get("userId") or item.get("clientId") or shared_client_id),
        "deviceId": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "time": item.get("time") if isinstance(item.get("time"), dict) else {},
        "volume_start": item.get("volume_start", 0.3),
        "repeat_type": _normalize_repeat_type(item.get("repeat_type", item.get("repeat"))),
        "repeat_days": _normalize_repeat_days(item.get("repeat_days", item.get("week_days", item.get("days")))),
    }
