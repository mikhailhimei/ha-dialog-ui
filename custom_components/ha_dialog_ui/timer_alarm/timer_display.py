"""Select the newest remaining timer for each device, independently of UUID order."""

from __future__ import annotations

from typing import Any


def latest_device_timers(items: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    latest: dict[str, dict[str, Any]] = {}
    for item in items:
        device_id = str(item.get("deviceId") or "")
        time = item.get("time") or {}
        total = max(1, int(time.get("total_seconds") or 1))
        remaining = min(total, max(0, int(time.get("remaining_seconds") or 0)))
        if not device_id or remaining == 0:
            continue
        created_at = float(time.get("created_at") or 0)
        previous = latest.get(device_id)
        if previous is not None and previous["created_at"] > created_at:
            continue
        latest[device_id] = {
            "id": item["id"],
            "created_at": created_at,
            "total_seconds": total,
            "remaining_seconds": remaining,
            "paused": item.get("status") == "paused",
        }
    return latest
