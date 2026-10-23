"""Websocket API for assistant sub direct control operations."""

from __future__ import annotations

from ..request_helpers import filter_by_title

import uuid
from copy import deepcopy
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....dialog.normalize import _normalize_value
from ....storage.assistant_sub_direct_controls_storage import (
    async_load_assistant_sub_direct_controls,
    async_save_assistant_sub_direct_controls,
)
from ..mutation_lock import serialize_collection_mutation
from .schemas import (
    DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA,
    GET_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA,
    GET_ASSISTANT_SUB_DIRECT_CONTROLS_SHORT_SCHEMA,
    SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA,
    SEARCH_ASSISTANT_SUB_DIRECT_CONTROLS_SCHEMA,
    UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA,
    UPDATE_ASSISTANT_SUB_DIRECT_CONTROLS_STATUS_SCHEMA
)

_REQUIRED_FIELDS = ("status", "title", "uuid")
_REQUIRED_DIRECT_CONTROL_FIELDS = ("mappingType", "valueType", "manual")


def async_register_assistant_sub_direct_controls_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_assistant_sub_direct_controls_short)
    websocket_api.async_register_command(hass, _ws_get_assistant_sub_direct_control)
    websocket_api.async_register_command(hass, _ws_save_assistant_sub_direct_control)
    websocket_api.async_register_command(hass, _ws_update_assistant_sub_direct_control)
    websocket_api.async_register_command(hass, _ws_delete_assistant_sub_direct_control)
    websocket_api.async_register_command(hass, _ws_search_assistant_sub_direct_controls)
    websocket_api.async_register_command(hass, _ws_update_assistant_sub_direct_control_status)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(
    assistant_sub_direct_controls: list[dict[str, Any]],
    page: int,
    page_size: int,
):
    total = len(assistant_sub_direct_controls)
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
            for item in assistant_sub_direct_controls[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(assistant_sub_direct_controls: list[dict[str, Any]], uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in assistant_sub_direct_controls:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _missing_required(payload: dict[str, Any], *, include_uuid: bool) -> list[str]:
    required_fields = _REQUIRED_FIELDS if include_uuid else ("status", "title")
    missing = [field for field in required_fields if field not in payload]
    if "title" in payload and (not isinstance(payload["title"], str) or not payload["title"].strip()):
        missing.append("title")

    direct_control = payload.get("directControl")
    if not isinstance(direct_control, dict):
        missing.append("directControl")
        return missing

    missing.extend(
        f"directControl.{field}"
        for field in _REQUIRED_DIRECT_CONTROL_FIELDS
        if field not in direct_control
    )

    if "manual" not in direct_control:
        return missing

    manual = direct_control.get("manual")
    sub_direct_control = direct_control.get("subDirectControl")
    if manual is True and not isinstance(sub_direct_control, list):
        missing.append("directControl.subDirectControl(list)")
    if manual is False and not isinstance(sub_direct_control, str):
        missing.append("directControl.subDirectControl(str)")

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


def _matches_query(item: dict[str, Any], query: str) -> bool:
    direct_control = item.get("directControl") if isinstance(item, dict) else None
    mapping_type = direct_control.get("mappingType") if isinstance(direct_control, dict) else ""

    return (
        query in _normalize_value(item.get("title")).lower()
        or query in _normalize_value(item.get("uuid")).lower()
        or query in _normalize_value(mapping_type).lower()
    )


def _build_search_result(item: dict[str, Any]) -> dict[str, str]:
    direct_control = item.get("directControl") if isinstance(item, dict) else None
    mapping_type = direct_control.get("mappingType") if isinstance(direct_control, dict) else ""

    return {
        "uuid": _normalize_value(item.get("uuid")),
        "title": _normalize_value(item.get("title")),
        "mappingType": _normalize_value(mapping_type),
    }


async def _save(hass, assistant_sub_direct_controls, connection, msg) -> bool:
    try:
        await async_save_assistant_sub_direct_controls(
            hass,
            assistant_sub_direct_controls,
        )
    except Exception:
        _ws_error(
            connection,
            msg,
            "save_failed",
            "Failed to save assistant sub direct controls",
        )
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


@websocket_api.websocket_command(UPDATE_ASSISTANT_SUB_DIRECT_CONTROLS_STATUS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_controls")
async def _ws_update_assistant_sub_direct_control_status(hass, connection, msg):
    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    uuid_value = _normalize_value(msg["uuid"])
    existing = _find(assistant_sub_direct_controls, uuid_value)

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant sub command not found")
        return

    updated = deepcopy(existing)
    updated["status"] = msg["status"]
    assistant_sub_direct_controls = [
        updated if _normalize_value(item.get("uuid")) == uuid_value else item
        for item in assistant_sub_direct_controls
    ]

    if not await _save(hass, assistant_sub_direct_controls, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})

@websocket_api.websocket_command(GET_ASSISTANT_SUB_DIRECT_CONTROLS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_direct_controls_short(hass, connection, msg):
    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    assistant_sub_direct_controls = filter_by_title(assistant_sub_direct_controls, msg.get("query", ""))

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_short(assistant_sub_direct_controls, page, page_size),
    )


@websocket_api.websocket_command(GET_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_direct_control(hass, connection, msg):
    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    item = _find(assistant_sub_direct_controls, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Assistant sub direct control not found")
        return

    connection.send_result(msg["id"], {"data": item})


@websocket_api.websocket_command(SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_controls")
async def _ws_save_assistant_sub_direct_control(hass, connection, msg):
    assistant_sub_direct_control = {"status": True, **msg["data"]}

    missing = _missing_required(assistant_sub_direct_control, include_uuid=False)
    if missing:
        _ws_error(
            connection,
            msg,
            "invalid_payload",
            f"Missing required fields: {', '.join(missing)}",
        )
        return

    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    assistant_sub_direct_control = deepcopy(assistant_sub_direct_control)
    assistant_sub_direct_control["uuid"] = str(uuid.uuid4())
    assistant_sub_direct_controls.append(assistant_sub_direct_control)

    if not await _save(hass, assistant_sub_direct_controls, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": assistant_sub_direct_control},
    )


@websocket_api.websocket_command(UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_controls")
async def _ws_update_assistant_sub_direct_control(hass, connection, msg):
    assistant_sub_direct_control = msg["data"]

    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    existing = _find(assistant_sub_direct_controls, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Assistant sub direct control not found")
        return

    if (
        "uuid" in assistant_sub_direct_control
        and _normalize_value(assistant_sub_direct_control["uuid"])
        != _normalize_value(msg["uuid"])
    ):
        _ws_error(
            connection,
            msg,
            "invalid_payload",
            "Assistant sub direct control uuid mismatch",
        )
        return

    updated = _deep_merge(existing, assistant_sub_direct_control)
    updated["uuid"] = _normalize_value(msg["uuid"])
    # Older imported records may omit status; the list already treats them as disabled.
    updated.setdefault("status", False)

    missing = _missing_required(updated, include_uuid=True)
    if missing:
        _ws_error(
            connection,
            msg,
            "invalid_payload",
            f"Missing required fields: {', '.join(missing)}",
        )
        return

    uuid_norm = _normalize_value(msg["uuid"])
    assistant_sub_direct_controls = [
        updated if _normalize_value(item.get("uuid")) == uuid_norm else item
        for item in assistant_sub_direct_controls
    ]

    if not await _save(hass, assistant_sub_direct_controls, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_controls")
async def _ws_delete_assistant_sub_direct_control(hass, connection, msg):
    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    uuid_value = _normalize_value(msg["uuid"])

    if not _find(assistant_sub_direct_controls, uuid_value):
        _ws_error(connection, msg, "not_found", "Assistant sub direct control not found")
        return

    assistant_sub_direct_controls = [
        item for item in assistant_sub_direct_controls
        if _normalize_value(item.get("uuid")) != uuid_value
    ]

    if not await _save(hass, assistant_sub_direct_controls, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command(SEARCH_ASSISTANT_SUB_DIRECT_CONTROLS_SCHEMA)
@websocket_api.async_response
async def _ws_search_assistant_sub_direct_controls(hass, connection, msg):
    assistant_sub_direct_controls = await async_load_assistant_sub_direct_controls(hass)
    query = _normalize_value(msg.get("query")).lower()

    data = [
        _build_search_result(item)
        for item in assistant_sub_direct_controls
        if _matches_query(item, query)
    ]

    connection.send_result(msg["id"], {"data": data})
