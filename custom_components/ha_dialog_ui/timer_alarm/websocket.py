"""WebSocket API for timer and alarm configuration."""

from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ..const import DOMAIN, WS_GET_TIMER_ALARM_CONFIG, WS_SAVE_TIMER_ALARM_CONFIG
from ..dialog.normalize import _normalize_value
from ..integration_helpers import get_integration_entry, get_timer_alarm_manager
from ..runtime_options import build_runtime_options
from ..storage.alarm_requests_storage import async_save_alarm_requests
from ..storage.timer_requests_storage import async_save_timer_requests
from ..storage.settings_storage import get_cached_settings
from .request_mapping import _timer_item_to_request, _alarm_item_to_request
from .timer_alarm_utils import (
    _normalize_alarm_presets,
    _collect_device_labels,
    _coerce_items_from_runtime_holder,
)

_LOGGER = logging.getLogger(__name__)


def async_register_timer_alarm_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_timer_alarm_config)
    websocket_api.async_register_command(hass, _ws_save_timer_alarm_config)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_TIMER_ALARM_CONFIG})
@websocket_api.async_response
async def _ws_get_timer_alarm_config(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    entry = get_integration_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return
    manager = get_timer_alarm_manager(hass, entry)
    managers = _iter_managers(hass)
    options = build_runtime_options(entry, get_cached_settings(hass))
    all_items: dict[str, dict[str, Any]] = {}
    all_active: dict[str, dict[str, Any]] = {}
    all_presets: set[str] = set()
    last_updated: str | None = None
    all_presets.update(_normalize_alarm_presets(options.get("timer_alarm_presets", [])))
    for current in managers:
        for item in current.get_items():
            item_id = _normalize_value(item.get("id"))
            if item_id:
                all_items[item_id] = item
        for item in current.get_active_items():
            item_id = _normalize_value(item.get("id"))
            if item_id:
                all_active[item_id] = item
        all_presets.update(current.get_alarm_presets())
        if current.last_updated and (last_updated is None or current.last_updated > last_updated):
            last_updated = current.last_updated

    runtime_snapshots = hass.data.get(DOMAIN, {}).get("timer_alarm_runtime", {})
    if isinstance(runtime_snapshots, dict):
        for snapshot in runtime_snapshots.values():
            if not isinstance(snapshot, dict):
                continue
            raw_items = snapshot.get("items")
            if isinstance(raw_items, list):
                for item in raw_items:
                    if not isinstance(item, dict):
                        continue
                    item_id = _normalize_value(item.get("id"))
                    if item_id and item_id not in all_items:
                        all_items[item_id] = item
            raw_active_items = snapshot.get("active_items")
            if isinstance(raw_active_items, list):
                for item in raw_active_items:
                    if not isinstance(item, dict):
                        continue
                    item_id = _normalize_value(item.get("id"))
                    if item_id and item_id not in all_active:
                        all_active[item_id] = item
            raw_presets = snapshot.get("alarm_presets")
            if isinstance(raw_presets, list):
                for preset in raw_presets:
                    normalized = _normalize_value(preset)
                    if normalized:
                        all_presets.add(normalized)
            snapshot_updated = _normalize_value(snapshot.get("last_updated"))
            if snapshot_updated and (last_updated is None or snapshot_updated > last_updated):
                last_updated = snapshot_updated

    for value in hass.data.get(DOMAIN, {}).values():
        for item in _coerce_items_from_runtime_holder(value):
            item_id = _normalize_value(item.get("id"))
            if not item_id:
                continue
            if item_id not in all_items:
                all_items[item_id] = item
            status = _normalize_value(item.get("status")).lower()
            if status in {"on", "paused"} and item_id not in all_active:
                all_active[item_id] = item

    items = list(all_items.values()) if all_items else (manager.get_items() if manager is not None else [])
    active_items = list(all_active.values()) if all_active else (manager.get_active_items() if manager is not None else [])
    alarm_presets = sorted(all_presets) if all_presets else (manager.get_alarm_presets() if manager is not None else [])
    if last_updated is None and manager is not None:
        last_updated = manager.last_updated

    connection.send_result(
        msg["id"],
        {
            "base_url": options["base_url"],
            "client_id": options["client_id"],
            "device_ids": options["timer_alarm_device_ids"],
            "default_media_content_id": options["timer_alarm_media_content_id"],
            "items": items,
            "active_items": active_items,
            "alarm_presets": alarm_presets,
            "device_labels": _collect_device_labels(hass, items, options.get("timer_alarm_device_ids", [])),
            "last_updated": last_updated,
            "debug_meta": {
                "managers_detected": len(managers),
                "runtime_snapshots_detected": len(runtime_snapshots) if isinstance(runtime_snapshots, dict) else 0,
                "all_items_count": len(items),
                "all_active_items_count": len(active_items),
            },
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_TIMER_ALARM_CONFIG,
        vol.Optional("timer_alarm_items", default=[]): [dict],
    }
)
@websocket_api.async_response
async def _ws_save_timer_alarm_config(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    entry = get_integration_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return
    manager = get_timer_alarm_manager(hass, entry)
    managers = _iter_managers(hass)
    if manager is None and not managers:
        connection.send_error(msg["id"], "not_ready", "Main coordinator not found")
        return

    options = build_runtime_options(entry, get_cached_settings(hass))
    shared_client_id = _normalize_value(options.get("client_id"))
    requested_items = [item for item in msg.get("timer_alarm_items", []) if isinstance(item, dict)]
    manager_targets = managers or ([manager] if manager is not None else [])
    target_manager = _select_manager(manager_targets, requested_items, shared_client_id) or manager
    if not manager_targets or target_manager is None:
        connection.send_error(msg["id"], "not_ready", "Timer/alarm manager not found")
        return

    applied = 0
    for runtime_manager in manager_targets:
        try:
            await runtime_manager.async_apply_ui_items(requested_items, shared_client_id)
            applied += 1
        except Exception as err:  # pragma: no cover - defensive path
            _LOGGER.warning("Failed to apply UI timer/alarm update to runtime manager: %s", err)

    await async_save_timer_requests(
        hass,
        [_timer_item_to_request(item) for item in target_manager.get_timer_items()],
    )
    await async_save_alarm_requests(
        hass,
        [_alarm_item_to_request(item) for item in target_manager.get_alarm_items()],
    )

    connection.send_result(msg["id"], {"saved": True})


def _iter_managers(hass: HomeAssistant) -> list[Any]:
    managers: list[Any] = []
    for value in hass.data.get(DOMAIN, {}).values():
        manager = getattr(value, "timer_alarm_manager", None)
        if manager is None:
            continue
        required_attrs = (
            "get_items",
            "get_active_items",
            "get_alarm_presets",
            "async_apply_ui_items",
            "serialize_persisted_items",
        )
        if all(hasattr(manager, attr) for attr in required_attrs):
            managers.append(manager)
    return managers


def _select_manager(
    managers: list[Any],
    requested_items: list[dict[str, Any]],
    shared_client_id: str,
) -> Any | None:
    if not managers:
        return None
    requested_ids = {_normalize_value(item.get("id")) for item in requested_items if _normalize_value(item.get("id"))}
    best_manager: Any | None = None
    best_score = -1
    for manager in managers:
        score = 0
        items = manager.get_items()
        item_ids = {_normalize_value(item.get("id")) for item in items}
        if requested_ids:
            score += len(item_ids.intersection(requested_ids))
        if shared_client_id:
            score += sum(1 for item in items if _normalize_value(item.get("clientId") or item.get("userId")) == shared_client_id)
        if score > best_score:
            best_score = score
            best_manager = manager
    return best_manager or managers[0]
