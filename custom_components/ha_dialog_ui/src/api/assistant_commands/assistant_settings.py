"""Websocket API for assistant settings operations."""

from __future__ import annotations

from ..request_helpers import filter_by_title

import uuid
from copy import deepcopy
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import (
    DOMAIN,
    WS_DELETE_ASSISTANT_SETTING,
    WS_GET_ASSISTANT_SETTING,
    WS_GET_ASSISTANT_SETTINGS_SHORT,
    WS_SAVE_ASSISTANT_SETTING,
    WS_UPDATE_ASSISTANT_SETTING,
)
from ....dialog.normalize import _normalize_value
from ..mutation_lock import serialize_collection_mutation
from ....storage.assistant_settings_storage import (
    async_load_assistant_settings,
    async_save_assistant_settings,
)

_REQUIRED_FIELDS = ("title", "actionType", "endStatus")

GET_ASSISTANT_SETTINGS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SETTINGS_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_ASSISTANT_SETTING_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SETTING,
    vol.Required("uuid"): str,
}

SAVE_ASSISTANT_SETTING_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_SETTING,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_SETTING_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SETTING,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

DELETE_ASSISTANT_SETTING_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_SETTING,
    vol.Required("uuid"): str,
}


def async_register_assistant_settings_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_assistant_settings_short)
    websocket_api.async_register_command(hass, _ws_get_assistant_setting)
    websocket_api.async_register_command(hass, _ws_save_assistant_setting)
    websocket_api.async_register_command(hass, _ws_update_assistant_setting)
    websocket_api.async_register_command(hass, _ws_delete_assistant_setting)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(assistant_settings: list[dict[str, Any]], page: int, page_size: int):
    total = len(assistant_settings)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": [
            {
                "uuid": item["uuid"],
                "title": item.get("title", ""),
                "actionType": item.get("actionType", ""),
                "endStatus": item.get("endStatus", False),
            }
            for item in assistant_settings[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(assistant_settings: list[dict[str, Any]], uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in assistant_settings:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _missing_required(payload: dict[str, Any], *, include_uuid: bool) -> list[str]:
    required_fields = ("uuid", *_REQUIRED_FIELDS) if include_uuid else _REQUIRED_FIELDS
    return [field for field in required_fields if field not in payload]


def _merge_setting_patch(existing: dict[str, Any], patch: dict[str, Any]) -> dict[str, Any]:
    merged = deepcopy(existing)

    for key, value in patch.items():
        if key == "uuid":
            continue
        merged[key] = value

    return merged


async def _save(hass, assistant_settings, connection, msg) -> bool:
    try:
        await async_save_assistant_settings(hass, assistant_settings)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save assistant settings")
        return False

    coordinator = hass.data.get(DOMAIN, {}).get("coordinator")
    if coordinator is None:
        return True

    try:
        await coordinator.async_reload()
    except Exception as e:
        _ws_error(connection, msg, "reload_failed", f"Saved but reload failed {e}")
        return False

    return True


@websocket_api.websocket_command(GET_ASSISTANT_SETTINGS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_settings_short(hass, connection, msg):
    assistant_settings = await async_load_assistant_settings(hass)

    assistant_settings = filter_by_title(assistant_settings, msg.get("query", ""))
    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(msg["id"], _build_short(assistant_settings, page, page_size))


@websocket_api.websocket_command(GET_ASSISTANT_SETTING_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_setting(hass, connection, msg):
    assistant_settings = await async_load_assistant_settings(hass)
    item = _find(assistant_settings, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Assistant setting not found")
        return

    connection.send_result(msg["id"], {"data": item})


@websocket_api.websocket_command(SAVE_ASSISTANT_SETTING_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_settings")
async def _ws_save_assistant_setting(hass, connection, msg):
    assistant_setting = msg["data"]

    missing = _missing_required(assistant_setting, include_uuid=False)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    assistant_settings = await async_load_assistant_settings(hass)
    assistant_setting = deepcopy(assistant_setting)
    assistant_setting["uuid"] = str(uuid.uuid4())
    assistant_settings.append(assistant_setting)

    if not await _save(hass, assistant_settings, connection, msg):
        return

    connection.send_result(msg["id"], {"saved": True, "data": assistant_setting})


@websocket_api.websocket_command(UPDATE_ASSISTANT_SETTING_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_settings")
async def _ws_update_assistant_setting(hass, connection, msg):
    assistant_setting = msg["data"]

    assistant_settings = await async_load_assistant_settings(hass)
    existing = _find(assistant_settings, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant setting not found")
        return

    if "uuid" in assistant_setting and _normalize_value(assistant_setting["uuid"]) != _normalize_value(msg["uuid"]):
        _ws_error(connection, msg, "invalid_payload", "Assistant setting uuid mismatch")
        return

    updated = _merge_setting_patch(existing, assistant_setting)
    updated["uuid"] = _normalize_value(msg["uuid"])

    missing = _missing_required(updated, include_uuid=True)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    uuid_norm = _normalize_value(msg["uuid"])
    assistant_settings = [
        updated if _normalize_value(item.get("uuid")) == uuid_norm else item
        for item in assistant_settings
    ]

    if not await _save(hass, assistant_settings, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(DELETE_ASSISTANT_SETTING_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_settings")
async def _ws_delete_assistant_setting(hass, connection, msg):
    assistant_settings = await async_load_assistant_settings(hass)
    uuid_value = _normalize_value(msg["uuid"])

    if not _find(assistant_settings, uuid_value):
        _ws_error(connection, msg, "not_found", "Assistant setting not found")
        return

    assistant_settings = [
        item for item in assistant_settings
        if _normalize_value(item.get("uuid")) != uuid_value
    ]

    if not await _save(hass, assistant_settings, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
