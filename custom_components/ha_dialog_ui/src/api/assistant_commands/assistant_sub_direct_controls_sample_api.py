"""Websocket API for assistant sub direct control sample operations."""

from __future__ import annotations

from ..request_helpers import filter_by_title

import uuid
from copy import deepcopy
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....const import DOMAIN
from ....dialog.normalize import _normalize_value
from ....storage.assistant_sub_direct_controls_sample_storage import (
    async_load_assistant_sub_direct_control_samples,
    async_save_assistant_sub_direct_control_samples,
)
from ..mutation_lock import serialize_collection_mutation
from .schemas import (
    DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA,
    GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA,
    GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SHORT_SCHEMA,
    SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA,
    SEARCH_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SCHEMA,
    UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA,
)

_REQUIRED_FIELDS = ("title", "uuid", "subDirectControl")
_REQUIRED_SUB_DIRECT_CONTROL_FIELDS = ("subMappingType", "subVoiceCommands")


def async_register_assistant_sub_direct_control_samples_websockets(
    hass: HomeAssistant,
) -> None:
    websocket_api.async_register_command(
        hass,
        _ws_get_assistant_sub_direct_control_samples_short,
    )
    websocket_api.async_register_command(hass, _ws_get_assistant_sub_direct_control_sample)
    websocket_api.async_register_command(hass, _ws_save_assistant_sub_direct_control_sample)
    websocket_api.async_register_command(hass, _ws_update_assistant_sub_direct_control_sample)
    websocket_api.async_register_command(hass, _ws_delete_assistant_sub_direct_control_sample)
    websocket_api.async_register_command(hass, _ws_search_assistant_sub_direct_control_samples)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(
    assistant_sub_direct_control_samples: list[dict[str, Any]],
    page: int,
    page_size: int,
):
    total = len(assistant_sub_direct_control_samples)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": [
            {
                "uuid": item["uuid"],
                "title": item.get("title", ""),
            }
            for item in assistant_sub_direct_control_samples[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(
    assistant_sub_direct_control_samples: list[dict[str, Any]],
    uuid_value: str,
):
    uuid_value = _normalize_value(uuid_value)

    for item in assistant_sub_direct_control_samples:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _missing_required(payload: dict[str, Any], *, include_uuid: bool) -> list[str]:
    required_fields = _REQUIRED_FIELDS if include_uuid else ("title", "subDirectControl")
    missing = [field for field in required_fields if field not in payload]
    if "title" in payload and (not isinstance(payload["title"], str) or not payload["title"].strip()):
        missing.append("title")

    sub_direct_controls = payload.get("subDirectControl")
    if "subDirectControl" in payload and not isinstance(sub_direct_controls, list):
        missing.append("subDirectControl(list)")
        return missing

    if isinstance(sub_direct_controls, list):
        for index, item in enumerate(sub_direct_controls):
            if not isinstance(item, dict):
                missing.append(f"subDirectControl[{index}]")
                continue
            missing.extend(
                f"subDirectControl[{index}].{field}"
                for field in _REQUIRED_SUB_DIRECT_CONTROL_FIELDS
                if field not in item
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


def _matches_query(item: dict[str, Any], query: str) -> bool:
    return (
        query in _normalize_value(item.get("title")).lower()
        or query in _normalize_value(item.get("uuid")).lower()
    )


def _build_search_result(item: dict[str, Any]) -> dict[str, str]:
    return {
        "title": _normalize_value(item.get("title")),
        "uuid": _normalize_value(item.get("uuid")),
    }


async def _save(hass, assistant_sub_direct_control_samples, connection, msg) -> bool:
    try:
        await async_save_assistant_sub_direct_control_samples(
            hass,
            assistant_sub_direct_control_samples,
        )
    except Exception:
        _ws_error(
            connection,
            msg,
            "save_failed",
            "Failed to save assistant sub direct control samples",
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


@websocket_api.websocket_command(GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_direct_control_samples_short(hass, connection, msg):
    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )

    assistant_sub_direct_control_samples = filter_by_title(assistant_sub_direct_control_samples, msg.get("query", ""))
    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_short(assistant_sub_direct_control_samples, page, page_size),
    )


@websocket_api.websocket_command(GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA)
@websocket_api.async_response
async def _ws_get_assistant_sub_direct_control_sample(hass, connection, msg):
    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )
    item = _find(assistant_sub_direct_control_samples, msg["uuid"])

    if item is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Assistant sub direct control sample not found",
        )
        return

    connection.send_result(msg["id"], {"data": item})


@websocket_api.websocket_command(SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_control_samples")
async def _ws_save_assistant_sub_direct_control_sample(hass, connection, msg):
    assistant_sub_direct_control_sample = {"status": True, **msg["data"]}

    missing = _missing_required(
        assistant_sub_direct_control_sample,
        include_uuid=False,
    )
    if missing:
        _ws_error(
            connection,
            msg,
            "invalid_payload",
            f"Missing required fields: {', '.join(missing)}",
        )
        return

    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )
    assistant_sub_direct_control_sample = deepcopy(assistant_sub_direct_control_sample)
    assistant_sub_direct_control_sample["uuid"] = str(uuid.uuid4())
    assistant_sub_direct_control_samples.append(assistant_sub_direct_control_sample)

    if not await _save(hass, assistant_sub_direct_control_samples, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": assistant_sub_direct_control_sample},
    )


@websocket_api.websocket_command(UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_control_samples")
async def _ws_update_assistant_sub_direct_control_sample(hass, connection, msg):
    assistant_sub_direct_control_sample = msg["data"]

    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )
    existing = _find(assistant_sub_direct_control_samples, msg["uuid"])

    if existing is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Assistant sub direct control sample not found",
        )
        return

    if (
        "uuid" in assistant_sub_direct_control_sample
        and _normalize_value(assistant_sub_direct_control_sample["uuid"])
        != _normalize_value(msg["uuid"])
    ):
        _ws_error(
            connection,
            msg,
            "invalid_payload",
            "Assistant sub direct control sample uuid mismatch",
        )
        return

    updated = _deep_merge(existing, assistant_sub_direct_control_sample)
    updated["uuid"] = _normalize_value(msg["uuid"])

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
    assistant_sub_direct_control_samples = [
        updated if _normalize_value(item.get("uuid")) == uuid_norm else item
        for item in assistant_sub_direct_control_samples
    ]

    if not await _save(hass, assistant_sub_direct_control_samples, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "data": updated})


@websocket_api.websocket_command(DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("assistant_sub_direct_control_samples")
async def _ws_delete_assistant_sub_direct_control_sample(hass, connection, msg):
    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )
    uuid_value = _normalize_value(msg["uuid"])

    if not _find(assistant_sub_direct_control_samples, uuid_value):
        _ws_error(
            connection,
            msg,
            "not_found",
            "Assistant sub direct control sample not found",
        )
        return

    assistant_sub_direct_control_samples = [
        item for item in assistant_sub_direct_control_samples
        if _normalize_value(item.get("uuid")) != uuid_value
    ]

    if not await _save(hass, assistant_sub_direct_control_samples, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command(SEARCH_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SCHEMA)
@websocket_api.async_response
async def _ws_search_assistant_sub_direct_control_samples(hass, connection, msg):
    assistant_sub_direct_control_samples = (
        await async_load_assistant_sub_direct_control_samples(hass)
    )
    query = _normalize_value(msg.get("query")).lower()

    data = [
        _build_search_result(item)
        for item in assistant_sub_direct_control_samples
        if _matches_query(item, query)
    ]

    connection.send_result(msg["id"], {"data": data})
