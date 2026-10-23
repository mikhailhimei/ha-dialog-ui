"""Websocket API for assistant command operations."""

from __future__ import annotations

from ..request_helpers import filter_by_title

import uuid
from copy import deepcopy
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....dialog.normalize import _normalize_value
from .assistant_commands_search import async_search_assistant_commands
from ....storage.assistant_commands_storage import (
    async_load_assistant_commands,
    async_save_assistant_commands,
)
from ..mutation_lock import serialize_collection_mutation
from .schemas import (
    DELETE_ASSISTANT_COMMAND_SCHEMA,
    GET_ASSISTANT_COMMAND_SCHEMA,
    GET_ASSISTANT_COMMANDS_SHORT_SCHEMA,
    SAVE_ASSISTANT_COMMAND_SCHEMA,
    SEARCH_ASSISTANT_COMMANDS_SCHEMA,
    UPDATE_ASSISTANT_COMMAND_STATUS_SCHEMA,
    UPDATE_ASSISTANT_COMMAND_SCHEMA,
)

_REQUIRED_FIELDS = ("status", "title", "uuid")
_REQUIRED_COMPONENT_DIALOG_FIELDS = ("endStatus", "answerType")


def async_register_assistant_commands_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_assistant_commands_short)
    websocket_api.async_register_command(hass, _ws_get_assistant_command)
    websocket_api.async_register_command(hass, _ws_save_assistant_command)
    websocket_api.async_register_command(hass, _ws_update_assistant_command)
    websocket_api.async_register_command(hass, _ws_update_assistant_command_status)
    websocket_api.async_register_command(hass, _ws_delete_assistant_command)
    websocket_api.async_register_command(hass, _ws_search_assistant_commands)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(assistant_commands: list[dict[str, Any]], page: int, page_size: int):
    total = len(assistant_commands)
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
            for item in assistant_commands[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(assistant_commands: list[dict[str, Any]], uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in assistant_commands:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _missing_required(payload: dict[str, Any], *, include_uuid: bool) -> list[str]:
    required_fields = _REQUIRED_FIELDS if include_uuid else ("status", "title")
    missing = [field for field in required_fields if field not in payload]
    if "title" in payload and (not isinstance(payload["title"], str) or not payload["title"].strip()):
        missing.append("title")

    component_dialog = payload.get("componentDialog")
    if not isinstance(component_dialog, dict):
        missing.append("componentDialog")
        return missing

    missing.extend(
        f"componentDialog.{field}"
        for field in _REQUIRED_COMPONENT_DIALOG_FIELDS
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


async def _save(hass, assistant_commands, connection, msg) -> bool:
    try:
        await async_save_assistant_commands(hass, assistant_commands)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save assistant commands")
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


@websocket_api.websocket_command(GET_ASSISTANT_COMMANDS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_commands_short(hass, connection, msg):
    assistant_commands = await async_load_assistant_commands(hass)
    assistant_commands = filter_by_title(assistant_commands, msg.get("query", ""))

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(msg["id"], _build_short(assistant_commands, page, page_size))


@websocket_api.websocket_command(GET_ASSISTANT_COMMAND_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_command(hass, connection, msg):
    assistant_commands = await async_load_assistant_commands(hass)
    item = _find(assistant_commands, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Assistant command not found")
        return

    connection.send_result(msg["id"], {"data": item})


@websocket_api.websocket_command(SAVE_ASSISTANT_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_commands")
async def _ws_save_assistant_command(hass, connection, msg):
    assistant_command = msg["data"]

    missing = _missing_required(assistant_command, include_uuid=False)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    assistant_commands = await async_load_assistant_commands(hass)
    assistant_command = deepcopy(assistant_command)
    assistant_command["uuid"] = str(uuid.uuid4())
    assistant_commands.append(assistant_command)

    if not await _save(hass, assistant_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"saved": True, "data": assistant_command})


@websocket_api.websocket_command(UPDATE_ASSISTANT_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_commands")
async def _ws_update_assistant_command(hass, connection, msg):
    assistant_command = msg["data"]

    assistant_commands = await async_load_assistant_commands(hass)
    existing = _find(assistant_commands, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant command not found")
        return

    if "uuid" in assistant_command and _normalize_value(assistant_command["uuid"]) != _normalize_value(msg["uuid"]):
        _ws_error(connection, msg, "invalid_payload", "Assistant command uuid mismatch")
        return

    updated = _deep_merge(existing, assistant_command)
    updated["uuid"] = _normalize_value(msg["uuid"])

    missing = _missing_required(updated, include_uuid=True)
    if missing:
        _ws_error(connection, msg, "invalid_payload", f"Missing required fields: {', '.join(missing)}")
        return

    uuid_norm = _normalize_value(msg["uuid"])
    assistant_commands = [
        updated if _normalize_value(item.get("uuid")) == uuid_norm else item
        for item in assistant_commands
    ]

    if not await _save(hass, assistant_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(UPDATE_ASSISTANT_COMMAND_STATUS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_commands")
async def _ws_update_assistant_command_status(hass, connection, msg):
    assistant_commands = await async_load_assistant_commands(hass)
    uuid_value = _normalize_value(msg["uuid"])
    existing = _find(assistant_commands, uuid_value)

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant command not found")
        return

    updated = deepcopy(existing)
    updated["status"] = msg["status"]
    assistant_commands = [
        updated if _normalize_value(item.get("uuid")) == uuid_value else item
        for item in assistant_commands
    ]

    if not await _save(hass, assistant_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(DELETE_ASSISTANT_COMMAND_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_commands")
async def _ws_delete_assistant_command(hass, connection, msg):
    assistant_commands = await async_load_assistant_commands(hass)
    uuid_value = _normalize_value(msg["uuid"])

    if not _find(assistant_commands, uuid_value):
        _ws_error(connection, msg, "not_found", "Assistant command not found")
        return

    assistant_commands = [
        item for item in assistant_commands
        if _normalize_value(item.get("uuid")) != uuid_value
    ]

    if not await _save(hass, assistant_commands, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command(SEARCH_ASSISTANT_COMMANDS_SCHEMA)
@websocket_api.async_response
async def _ws_search_assistant_commands(hass, connection, msg):
    data = await async_search_assistant_commands(hass, msg.get("query"), msg.get("type"))

    connection.send_result(msg["id"], {"data": data})
