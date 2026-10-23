"""Websocket API for assistant sub command operations."""

from __future__ import annotations

from ..request_helpers import filter_by_title

import uuid

import voluptuous as vol
from copy import deepcopy
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....dialog.normalize import _normalize_value
from .assistant_commands_search import async_search_assistant_commands
from ....storage.assistant_sub_commands_storage import (
    async_load_assistant_sub_commands,
    async_save_assistant_sub_commands,
)
from ..mutation_lock import serialize_collection_mutation
from .schemas import (
    DELETE_ASSISTANT_SUB_COMMAND_SCHEMA,
    GET_ASSISTANT_SUB_COMMAND_SCHEMA,
    GET_ASSISTANT_SUB_COMMANDS_SHORT_SCHEMA,
    SAVE_ASSISTANT_SUB_COMMAND_SCHEMA,
    SEARCH_ASSISTANT_SUB_COMMANDS_SCHEMA,
    UPDATE_ASSISTANT_SUB_COMMAND_STATUS_SCHEMA,
    UPDATE_ASSISTANT_SUB_COMMAND_SCHEMA,
)

_REQUIRED_FIELDS = ("status", "title", "uuid")
_REQUIRED_SUB_COMPONENT_DIALOG_FIELDS = ("endStatus", "answerType")


def async_register_assistant_sub_commands_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_import_assistant_sub_commands)
    websocket_api.async_register_command(hass, _ws_get_assistant_sub_commands_short)
    websocket_api.async_register_command(hass, _ws_get_assistant_sub_command)
    websocket_api.async_register_command(hass, _ws_save_assistant_sub_command)
    websocket_api.async_register_command(hass, _ws_update_assistant_sub_command)
    websocket_api.async_register_command(hass, _ws_update_assistant_sub_command_status)
    websocket_api.async_register_command(hass, _ws_delete_assistant_sub_command)
    websocket_api.async_register_command(hass, _ws_search_assistant_sub_commands)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(assistant_sub_commands: list[dict[str, Any]], page: int, page_size: int):
    total = len(assistant_sub_commands)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": [
            {
                "uuid": item["uuid"],
                "title": item.get("title", ""),
                "status": item.get("status", False),
            }
            for item in assistant_sub_commands[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(assistant_sub_commands: list[dict[str, Any]], uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in assistant_sub_commands:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _missing_required(payload: dict[str, Any], *, include_uuid: bool) -> list[str]:
    required_fields = _REQUIRED_FIELDS if include_uuid else ("status", "title")
    missing = [field for field in required_fields if field not in payload]
    if "title" in payload and (not isinstance(payload["title"], str) or not payload["title"].strip()):
        missing.append("title")

    component_dialog = payload.get("subComponentDialog")
    if not isinstance(component_dialog, dict):
        missing.append("subComponentDialog")
        return missing

    missing.extend(
        f"subComponentDialog.{field}"
        for field in _REQUIRED_SUB_COMPONENT_DIALOG_FIELDS
        if field not in component_dialog
    )
    return missing


def _deep_merge(existing: dict[str, Any], patch: dict[str, Any]) -> dict[str, Any]:
    merged = deepcopy(existing)

    for key, value in patch.items():
        if key == "uuid":
            continue
        if isinstance(value, dict) and isinstance(merged.get(key), dict):
            merged[key] = _deep_merge(merged[key], value)
        else:
            merged[key] = value

    return merged


async def _save(hass, assistant_sub_commands, connection, msg) -> bool:
    try:
        await async_save_assistant_sub_commands(hass, assistant_sub_commands)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save assistant sub commands")
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


@websocket_api.websocket_command(GET_ASSISTANT_SUB_COMMANDS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_commands_short(hass, connection, msg):
    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    assistant_sub_commands = filter_by_title(assistant_sub_commands, msg.get("query", ""))

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(msg["id"], _build_short(assistant_sub_commands, page, page_size))


@websocket_api.websocket_command(GET_ASSISTANT_SUB_COMMAND_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_command(hass, connection, msg):
    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    item = _find(assistant_sub_commands, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Assistant sub command not found")
        return

    connection.send_result(msg["id"], {"data": item})


@websocket_api.websocket_command(SAVE_ASSISTANT_SUB_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_commands")
async def _ws_save_assistant_sub_command(hass, connection, msg):
    assistant_sub_command = msg["data"]

    missing = _missing_required(assistant_sub_command, include_uuid=False)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    assistant_sub_command = deepcopy(assistant_sub_command)
    assistant_sub_command["uuid"] = str(uuid.uuid4())
    assistant_sub_commands.append(assistant_sub_command)

    if not await _save(hass, assistant_sub_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"saved": True, "data": assistant_sub_command})


@websocket_api.websocket_command(UPDATE_ASSISTANT_SUB_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_commands")
async def _ws_update_assistant_sub_command(hass, connection, msg):
    assistant_sub_command = msg["data"]

    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    existing = _find(assistant_sub_commands, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant sub command not found")
        return

    if "uuid" in assistant_sub_command and _normalize_value(assistant_sub_command["uuid"]) != _normalize_value(msg["uuid"]):
        _ws_error(connection, msg, "invalid_payload", "Assistant sub command uuid mismatch")
        return

    updated = _deep_merge(existing, assistant_sub_command)
    updated["uuid"] = _normalize_value(msg["uuid"])

    missing = _missing_required(updated, include_uuid=True)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    uuid_norm = _normalize_value(msg["uuid"])
    assistant_sub_commands = [
        updated if _normalize_value(item.get("uuid")) == uuid_norm else item
        for item in assistant_sub_commands
    ]

    if not await _save(hass, assistant_sub_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(UPDATE_ASSISTANT_SUB_COMMAND_STATUS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_commands")
async def _ws_update_assistant_sub_command_status(hass, connection, msg):
    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    uuid_value = _normalize_value(msg["uuid"])
    existing = _find(assistant_sub_commands, uuid_value)

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant sub command not found")
        return

    updated = deepcopy(existing)
    updated["status"] = msg["status"]
    assistant_sub_commands = [
        updated if _normalize_value(item.get("uuid")) == uuid_value else item
        for item in assistant_sub_commands
    ]

    if not await _save(hass, assistant_sub_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(DELETE_ASSISTANT_SUB_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_commands")
async def _ws_delete_assistant_sub_command(hass, connection, msg):
    assistant_sub_commands = await async_load_assistant_sub_commands(hass)
    uuid_value = _normalize_value(msg["uuid"])

    if not _find(assistant_sub_commands, uuid_value):
        _ws_error(connection, msg, "not_found", "Assistant sub command not found")
        return

    assistant_sub_commands = [
        item for item in assistant_sub_commands
        if _normalize_value(item.get("uuid")) != uuid_value
    ]

    if not await _save(hass, assistant_sub_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command(SEARCH_ASSISTANT_SUB_COMMANDS_SCHEMA)
@websocket_api.async_response
async def _ws_search_assistant_sub_commands(hass, connection, msg):
    data = await async_search_assistant_commands(hass, msg.get("query"), msg.get("type"))

    connection.send_result(msg["id"], {"data": data})


@websocket_api.websocket_command({
    vol.Required("type"): "ha_dialog_ui/import_assistant_sub_commands",
    vol.Required("data"): [dict],
})
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_commands")
async def _ws_import_assistant_sub_commands(hass, connection, msg):
    """Validate the entire file, then merge by UUID in one storage write."""
    items = msg["data"]
    required = ['title', 'status', 'subComponentDialog']
    ids = [item.get("uuid") for item in items]
    if (any(not isinstance(value, str) or not value.strip() for value in ids)
            or len(set(ids)) != len(ids)
            or any(any(key not in item for key in required) for item in items)):
        _ws_error(connection, msg, "invalid_payload", "Invalid or duplicate records")
        return

    if any(_missing_required(item, include_uuid=True)
           or not isinstance(item["title"], str)
           or not isinstance(item["status"], bool)
           or not isinstance(item["subComponentDialog"]["endStatus"], bool)
           or not isinstance(item["subComponentDialog"]["answerType"], str)
           for item in items):
        _ws_error(connection, msg, "invalid_payload", "Invalid scenario")
        return

    existing = await async_load_assistant_sub_commands(hass)
    merged = {item["uuid"]: item for item in existing}
    merged.update({item["uuid"]: item for item in items})
    if not await _save(hass, list(merged.values()), connection, msg):
        return
    connection.send_result(msg["id"], {"imported": len(items)})
