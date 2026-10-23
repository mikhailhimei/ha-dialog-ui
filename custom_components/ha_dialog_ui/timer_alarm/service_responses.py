"""Format Home Assistant timer and alarm service responses."""

from __future__ import annotations

import json
from typing import Any

from ..dialog.normalize import _normalize_value


def normalize_service_response(result: dict[str, Any]) -> dict[str, Any]:
    result = dict(result)
    client_id = _normalize_value(result.get("clientId") or result.get("client_id"))
    if client_id:
        result["clientId"] = client_id
    device_id = _normalize_value(result.get("deviceId") or result.get("device_id"))
    if device_id:
        result["deviceId"] = device_id
    return result


def build_service_json_response(action_type: str, items: list[dict[str, Any]]) -> dict[str, Any]:
    return {"actionType": action_type, "message": json.dumps(items, ensure_ascii=False), "items": items}


def build_timer_info_items(runtime_items: list[dict[str, Any]], client_id: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for item in runtime_items:
        if client_id and _normalize_value(item.get("clientId")) != client_id:
            continue

        time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
        remaining_timer = _normalize_value(time_data.get("remaining_timer"))
        count_timer = _normalize_value(time_data.get("count_timer"))
        entry = {
            "uuid": _normalize_value(item.get("id")),
            "time": remaining_timer,
            "remaining_timer": remaining_timer,
            "count_timer": count_timer,
            "remaining_seconds": time_data.get("remaining_seconds", 0),
            "total_seconds": time_data.get("total_seconds", 0),
            "clientId": _normalize_value(item.get("clientId")),
        }
        device_id = _normalize_value(item.get("deviceId") or item.get("device_id"))
        if device_id:
            entry["deviceId"] = device_id
        items.append(entry)
    return items


def build_alarm_info_items(runtime_items: list[dict[str, Any]], client_id: str) -> list[dict[str, str]]:
    items: list[dict[str, str]] = []
    for item in runtime_items:
        if client_id and _normalize_value(item.get("clientId")) != client_id:
            continue
        entry = {
            "uuid": _normalize_value(item.get("id")),
            "time": _normalize_value((item.get("time") or {}).get("time")),
            "clientId": _normalize_value(item.get("clientId")),
        }
        device_id = _normalize_value(item.get("deviceId") or item.get("device_id"))
        if device_id:
            entry["deviceId"] = device_id
        items.append(entry)
    return items
