"""Websocket API for alarm request storage operations."""

from __future__ import annotations

import uuid
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....timer_alarm.alarm_repeat import _normalize_repeat_type, _normalize_repeat_days
from ....dialog.normalize import _normalize_value
from ....timer_alarm.timer_alarm_utils import normalize_volume_start
from ....storage.settings_storage import get_cached_settings
from ....storage.alarm_requests_storage import (
    async_load_alarm_requests,
    async_save_alarm_requests,
)
from ..mutation_lock import serialize_collection_mutation
from ..request_helpers import build_request_summary_page, find_request_by_uuid
from .schemas import (
    DELETE_ALARM_REQUEST_SCHEMA,
    GET_ALARM_REQUEST_SCHEMA,
    GET_ALARM_REQUESTS_SHORT_SCHEMA,
    SAVE_ALARM_REQUEST_SCHEMA,
    UPDATE_ALARM_REQUEST_SCHEMA,
)


def async_register_alarm_requests_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_alarm_requests_short)
    websocket_api.async_register_command(hass, _ws_get_alarm_request)
    websocket_api.async_register_command(hass, _ws_save_alarm_request)
    websocket_api.async_register_command(hass, _ws_update_alarm_request)
    websocket_api.async_register_command(hass, _ws_delete_alarm_request)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _normalize_alarm_request_payload(data: dict[str, Any], uuid_value: str | None = None) -> dict[str, Any]:
    return {
        "uuid": _normalize_value(uuid_value or data.get("uuid")),
        "name": _normalize_value(data.get("name")),
        "action_type": _normalize_value(data.get("action_type")),
        "client_id": _normalize_value(data.get("client_id")),
        "device_id": _normalize_value(data.get("device_id")),
        "status": _normalize_value(data.get("status")),
        "time": _normalize_value(data.get("time")),
        "volume_start": normalize_volume_start(data.get("volume_start")),
        "repeat_type": _normalize_repeat_type(data.get("repeat_type", data.get("repeat"))),
        "repeat_days": _normalize_repeat_days(data.get("repeat_days", data.get("week_days", data.get("days")))),
    }


def _alarm_request_to_runtime_item(alarm_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    action_type = _normalize_value(alarm_request.get("action_type"))

    return {
        "id": _normalize_value(alarm_request.get("uuid")),
        "type": "alarm",
        "status": (
            "off"
            if action_type == "delete_alarm"
            else (_normalize_value(alarm_request.get("status")) or "on")
        ),
        "clientId": _normalize_value(alarm_request.get("client_id")) or shared_client_id,
        "userId": _normalize_value(alarm_request.get("client_id")) or shared_client_id,
        "deviceId": _normalize_value(alarm_request.get("device_id")),
        "time": {"time": _normalize_value(alarm_request.get("time")) or "08:00"},
        "volume_start": normalize_volume_start(alarm_request.get("volume_start")),
        "repeat_type": _normalize_repeat_type(alarm_request.get("repeat_type", alarm_request.get("repeat"))),
        "repeat_days": _normalize_repeat_days(alarm_request.get("repeat_days", alarm_request.get("week_days", alarm_request.get("days")))),
    }


async def _sync_alarm_requests_to_runtime(
    hass: HomeAssistant,
    alarm_requests: list[dict[str, Any]],
) -> None:
    settings = get_cached_settings(hass)
    shared_client_id = _normalize_value(settings.get("client_id"))
    incoming_alarms = {
        _normalize_value(item.get("id")): item
        for item in (_alarm_request_to_runtime_item(request, shared_client_id) for request in alarm_requests)
        if _normalize_value(item.get("id")) and _normalize_value(item.get("status")).lower() != "deleted"
    }

    seen = set()
    for value in hass.data.get(DOMAIN, {}).values():
        manager = getattr(value, "timer_alarm_manager", None)
        alarm_manager = getattr(manager, "alarm_manager", None)
        if alarm_manager is None or not hasattr(alarm_manager, "apply_ui_items"):
            continue
        if id(alarm_manager) in seen:
            continue
        seen.add(id(alarm_manager))
        await alarm_manager.apply_ui_items(incoming_alarms)


async def _save(hass, alarm_requests, connection, msg) -> bool:
    try:
        await async_save_alarm_requests(hass, alarm_requests)
        await _sync_alarm_requests_to_runtime(hass, alarm_requests)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save alarm requests")
        return False

    return True


# =========================
# GET LIST
# =========================

@websocket_api.websocket_command(GET_ALARM_REQUESTS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_alarm_requests_short(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    await _sync_alarm_requests_to_runtime(hass, alarm_requests)

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        build_request_summary_page(alarm_requests, page, page_size),
    )


# =========================
# GET SINGLE
# =========================

@websocket_api.websocket_command(GET_ALARM_REQUEST_SCHEMA)
@websocket_api.async_response
async def _ws_get_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    item = find_request_by_uuid(alarm_requests, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    connection.send_result(msg["id"], {"data": item})


# =========================
# CREATE
# =========================

@websocket_api.websocket_command(SAVE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("alarm_requests")
async def _ws_save_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    alarm_request = _normalize_alarm_request_payload(msg["data"], str(uuid.uuid4()))

    alarm_requests.append(alarm_request)

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": alarm_request},
    )


# =========================
# UPDATE
# =========================

@websocket_api.websocket_command(UPDATE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("alarm_requests")
async def _ws_update_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    existing = find_request_by_uuid(alarm_requests, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    merged = {**existing, **msg["data"]}
    updated = _normalize_alarm_request_payload(merged, msg["uuid"])
    uuid_norm = _normalize_value(msg["uuid"])

    alarm_requests = [
        updated if _normalize_value(i.get("uuid")) == uuid_norm else i
        for i in alarm_requests
    ]

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"updated": True, "data": updated},
    )


# =========================
# DELETE
# =========================

@websocket_api.websocket_command(DELETE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("alarm_requests")
async def _ws_delete_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    uuid_value = _normalize_value(msg["uuid"])

    if not find_request_by_uuid(alarm_requests, uuid_value):
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    alarm_requests = [
        i for i in alarm_requests
        if _normalize_value(i.get("uuid")) != uuid_value
    ]

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
