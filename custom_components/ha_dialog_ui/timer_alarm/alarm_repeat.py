"""Shared alarm repeat normalization for runtime and persistence."""

from __future__ import annotations

from typing import Any

from ..dialog.normalize import _normalize_value


def _normalize_repeat_type(value: Any) -> str:
    normalized = _normalize_value(value).lower() or "once"
    aliases = {
        "one_time": "once",
        "single": "once",
        "once": "once",
        "daily": "daily",
        "everyday": "daily",
        "weekdays": "weekdays",
        "workdays": "weekdays",
        "weekends": "weekends",
        "custom": "custom",
    }
    return aliases.get(normalized, "once")


def _normalize_repeat_days(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [part.strip() for part in value.split(",")]
    if not isinstance(value, list):
        return []
    aliases = {
        "monday": "mon", "mon": "mon", "пн": "mon",
        "tuesday": "tue", "tue": "tue", "вт": "tue",
        "wednesday": "wed", "wed": "wed", "ср": "wed",
        "thursday": "thu", "thu": "thu", "чт": "thu",
        "friday": "fri", "fri": "fri", "пт": "fri",
        "saturday": "sat", "sat": "sat", "сб": "sat",
        "sunday": "sun", "sun": "sun", "вс": "sun",
    }
    result: list[str] = []
    for item in value:
        day = aliases.get(_normalize_value(item).lower())
        if day and day not in result:
            result.append(day)
    return result
