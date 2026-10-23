"""Websocket API for timer request storage operations."""

from __future__ import annotations

import uuid
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....dialog.normalize import _normalize_value
from ....timer_alarm.timer_alarm_utils import normalize_volume_start
from ....storage.settings_storage import get_cached_settings
from ....storage.timer_requests_storage import (
    async_load_timer_requests,
    async_save_timer_requests,
)
from ..mutation_lock import serialize_collection_mutation
from ..request_helpers import build_request_summary_page, find_request_by_uuid
from .schemas import (
    DELETE_TIMER_REQUEST_SCHEMA,
    GET_TIMER_REQUEST_SCHEMA,
    GET_TIMER_REQUESTS_SHORT_SCHEMA,
    SAVE_TIMER_REQUEST_SCHEMA,
    UPDATE_TIMER_REQUEST_SCHEMA,
)


def async_register_timer_requests_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_timer_requests_short)
    websocket_api.async_register_command(hass, _ws_get_timer_request)
    websocket_api.async_register_command(hass, _ws_save_timer_request)
    websocket_api.async_register_command(hass, _ws_update_timer_request)
    websocket_api.async_register_command(hass, _ws_delete_timer_request)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _normalize_timer_request_payload(data: dict[str, Any], uuid_value: str | None = None) -> dict[str, Any]:
    action_type = _normalize_value(data.get("action_type"))
    timer_request = {
        "uuid": _normalize_value(uuid_value or data.get("uuid")),
        "name": _normalize_value(data.get("name")),
        "action_type": action_type,
        "status": _normalize_value(data.get("status")) or "on",
        "client_id": _normalize_value(data.get("client_id")),
        "device_id": _normalize_value(data.get("device_id")),
        "timer_time": data.get("timer_time") if action_type == "create_timer" else "",
        "volume_start": normalize_volume_start(data.get("volume_start")),
    }

    if action_type == "delete_timer":
        timer_request["timer_time"] = ""

    return timer_request


def _timer_request_to_runtime_item(timer_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    timer_time = timer_request.get("timer_time")
    return {
        "id": _normalize_value(timer_request.get("uuid")),
        "type": "timer",
        "status": _normalize_value(timer_request.get("status")) or "on",
        "clientId": _normalize_value(timer_request.get("client_id")) or shared_client_id,
        "userId": _normalize_value(timer_request.get("client_id")) or shared_client_id,
        "deviceId": _normalize_value(timer_request.get("device_id")),
        "time": (
            timer_time
            if isinstance(timer_time, dict)
            else {"count_timer": _normalize_value(timer_time)}
        ),
        "volume_start": normalize_volume_start(timer_request.get("volume_start")),
    }


async def _sync_timer_requests_to_runtime(
    hass: HomeAssistant,
    timer_requests: list[dict[str, Any]],
) -> None:
    settings = get_cached_settings(hass)
    shared_client_id = _normalize_value(settings.get("client_id"))
    incoming_timers = {
        _normalize_value(item.get("id")): item
        for item in (_timer_request_to_runtime_item(request, shared_client_id) for request in timer_requests)
        if _normalize_value(item.get("id"))
    }

    seen = set()
    for value in hass.data.get(DOMAIN, {}).values():
        manager = getattr(value, "timer_alarm_manager", None)
        timer_manager = getattr(manager, "timer_manager", None)
        if timer_manager is None or not hasattr(timer_manager, "apply_ui_items"):
            continue
        if id(timer_manager) in seen:
            continue
        seen.add(id(timer_manager))
        await timer_manager.apply_ui_items(incoming_timers)


async def _save(hass, timer_requests, connection, msg) -> bool:
    try:
        await async_save_timer_requests(hass, timer_requests)
        await _sync_timer_requests_to_runtime(hass, timer_requests)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save timer requests")
        return False

    return True


# =========================
# GET LIST
# =========================

@websocket_api.websocket_command(GET_TIMER_REQUESTS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_timer_requests_short(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        build_request_summary_page(timer_requests, page, page_size),
    )


# =========================
# GET SINGLE
# =========================

@websocket_api.websocket_command(GET_TIMER_REQUEST_SCHEMA)
@websocket_api.async_response
async def _ws_get_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    item = find_request_by_uuid(timer_requests, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    connection.send_result(msg["id"], {"data": item})


# =========================
# CREATE
# =========================

@websocket_api.websocket_command(SAVE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("timer_requests")
async def _ws_save_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    timer_request = _normalize_timer_request_payload(msg["data"], str(uuid.uuid4()))

    timer_requests.append(timer_request)

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": timer_request},
    )


# =========================
# UPDATE
# =========================

@websocket_api.websocket_command(UPDATE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("timer_requests")
async def _ws_update_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    existing = find_request_by_uuid(timer_requests, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    merged = {**existing, **msg["data"]}
    updated = _normalize_timer_request_payload(merged, msg["uuid"])
    uuid_norm = _normalize_value(msg["uuid"])

    timer_requests = [
        updated if _normalize_value(i.get("uuid")) == uuid_norm else i
        for i in timer_requests
    ]

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"updated": True, "data": updated},
    )


# =========================
# DELETE
# =========================

@websocket_api.websocket_command(DELETE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("timer_requests")
async def _ws_delete_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    uuid_value = _normalize_value(msg["uuid"])

    if not find_request_by_uuid(timer_requests, uuid_value):
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    timer_requests = [
        i for i in timer_requests
        if _normalize_value(i.get("uuid")) != uuid_value
    ]

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
