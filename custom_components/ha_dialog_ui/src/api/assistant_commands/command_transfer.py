"""Admin-only import/export of every Commands collection, preserving UUID links."""
from __future__ import annotations

import asyncio
from contextlib import AsyncExitStack, asynccontextmanager
from copy import deepcopy
import logging

import voluptuous as vol
from homeassistant.components import websocket_api

from ....const import DOMAIN
from ....storage.assistant_settings_storage import ASSISTANT_SETTING_ACTION_TYPES
from . import assistant_commands_api as main
from . import assistant_sub_commands_api as sub
from . import assistant_sub_direct_controls_api as direct
from . import assistant_sub_direct_controls_sample_api as samples
from . import assistant_settings as settings

_LOGGER = logging.getLogger(__name__)
FORMAT = "ha-dialog-ui-commands"
COLLECTIONS = {
    "commands": (main, "assistant_commands"),
    "sub_commands": (sub, "assistant_sub_commands"),
    "direct_commands": (direct, "assistant_sub_direct_controls"),
    "templates": (samples, "assistant_sub_direct_control_samples"),
    "settings": (settings, "assistant_settings"),
}


def async_register_command_transfer_websockets(hass):
    websocket_api.async_register_command(hass, _ws_export_command_bundle)
    websocket_api.async_register_command(hass, _ws_import_command_bundle)


@asynccontextmanager
async def _collection_locks(hass):
    # Use the same locks as individual create/update/delete operations.
    async with AsyncExitStack() as stack:
        for _, collection in sorted(COLLECTIONS.values(), key=lambda pair: pair[1]):
            key = f"ha_dialog_ui_{collection}_mutation_lock"
            await stack.enter_async_context(hass.data.setdefault(key, asyncio.Lock()))
        yield


def validate_bundle(bundle):
    if (not isinstance(bundle, dict) or bundle.get("format") != FORMAT
            or type(bundle.get("version")) is not int or bundle["version"] != 1
            or set(bundle) != {"format", "version", *COLLECTIONS}):
        raise ValueError("Invalid command bundle format/version")
    for key, (module, _) in COLLECTIONS.items():
        items = bundle[key]
        if not isinstance(items, list):
            raise ValueError(f"Invalid collection: {key}")
        ids = set()
        setting_types = set()
        for item in items:
            if (not isinstance(item, dict) or not isinstance(item.get("uuid"), str)
                    or not item["uuid"].strip() or item["uuid"] in ids
                    or module._missing_required(item, include_uuid=True)
                    or not isinstance(item.get("title"), str)):
                raise ValueError(f"Invalid or duplicate record in {key}")
            ids.add(item["uuid"])
            if key == "settings":
                action_type = item["actionType"]
                if (not isinstance(action_type, str)
                        or action_type not in ASSISTANT_SETTING_ACTION_TYPES
                        or action_type in setting_types):
                    raise ValueError("Unknown or duplicate built-in command setting")
                setting_types.add(action_type)
            if key in {"commands", "sub_commands", "direct_commands"} and not isinstance(item["status"], bool):
                raise ValueError(f"Invalid status in {key}")
    return bundle


@websocket_api.websocket_command({vol.Required("type"): "ha_dialog_ui/export_command_bundle"})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_export_command_bundle(hass, connection, msg):
    async with _collection_locks(hass):
        bundle = {"format": FORMAT, "version": 1}
        for key, (module, collection) in COLLECTIONS.items():
            bundle[key] = await getattr(module, f"async_load_{collection}")(hass)
    connection.send_result(msg["id"], bundle)


@websocket_api.websocket_command({
    vol.Required("type"): "ha_dialog_ui/import_command_bundle",
    vol.Required("data"): dict,
})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_import_command_bundle(hass, connection, msg):
    try:
        bundle = validate_bundle(msg["data"])
    except ValueError as error:
        connection.send_error(msg["id"], "invalid_payload", str(error))
        return
    async with _collection_locks(hass):
        previous = {}
        merged = {}
        for key, (module, collection) in COLLECTIONS.items():
            previous[key] = await getattr(module, f"async_load_{collection}")(hass)
            if key == "settings":
                existing = {item.get("actionType"): item for item in previous[key]}
                if any(item["actionType"] not in existing for item in bundle[key]):
                    connection.send_error(msg["id"], "invalid_payload", "Built-in command setting is missing on this installation")
                    return
                updates = {item["actionType"]: item for item in bundle[key]}
                merged[key] = [
                    {**item, **deepcopy(updates[item["actionType"]]), "uuid": item["uuid"], "actionType": item["actionType"]}
                    if item.get("actionType") in updates else item
                    for item in previous[key]
                ]
                continue
            items = {item["uuid"]: item for item in previous[key]}
            items.update({item["uuid"]: deepcopy(item) for item in bundle[key]})
            merged[key] = list(items.values())
        attempted = []
        try:
            for key, (module, collection) in COLLECTIONS.items():
                attempted.append(key)
                await getattr(module, f"async_save_{collection}")(hass, merged[key])
        except Exception:
            _LOGGER.exception("Command bundle import failed; restoring previous collections")
            restored = True
            for key in reversed(attempted):
                module, collection = COLLECTIONS[key]
                try:
                    await getattr(module, f"async_save_{collection}")(hass, previous[key])
                except Exception:
                    restored = False
                    _LOGGER.exception("Unable to restore collection %s", key)
            connection.send_error(msg["id"], "import_failed", "Import failed; previous data restored" if restored else "Import failed; some collections could not be restored")
            return
        coordinator = hass.data.get(DOMAIN, {}).get("coordinator")
        if coordinator is not None:
            try:
                await coordinator.async_reload()
            except Exception:
                connection.send_error(msg["id"], "reload_failed", "Data saved but integration reload failed")
                return
    connection.send_result(msg["id"], {"imported": {key: len(bundle[key]) for key in COLLECTIONS}})
