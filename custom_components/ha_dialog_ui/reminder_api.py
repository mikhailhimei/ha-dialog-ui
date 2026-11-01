"""Shared reminder services and WebSocket operations."""
from __future__ import annotations

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import SupportsResponse
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import entity_registry as er

from .const import DOMAIN
from .integration_helpers import get_integration_entry, get_timer_alarm_manager

CREATE_FIELDS = {
    vol.Optional("clientId"): str,
    vol.Optional("client_id"): str,
    vol.Required("text"): vol.All(str, vol.Length(min=1, max=2000)),
    vol.Required("device_id"): str,
    vol.Optional("at"): str,
    vol.Optional("delay_seconds"): vol.All(vol.Coerce(float), vol.Range(min=1, max=315360000)),
}


def _manager(hass):
    entry = get_integration_entry(hass)
    runtime = get_timer_alarm_manager(hass, entry) if entry else None
    manager = getattr(runtime, "reminder_manager", None)
    if manager is None:
        raise HomeAssistantError("Менеджер напоминаний недоступен")
    return manager


def _devices(hass):
    registry = er.async_get(hass)
    result = []
    for state in hass.states.async_all():
        if state.domain not in {"assist_satellite", "media_player"}:
            continue
        if state.state in {"unavailable", "unknown"}:
            continue
        entity = registry.async_get(state.entity_id)
        if entity and entity.disabled:
            continue
        if state.domain == "assist_satellite" and not int(state.attributes.get("supported_features", 0)) & 1:
            continue
        result.append({"id": state.entity_id, "name": state.name})
    return sorted(result, key=lambda item: item["name"])


async def _action(hass, action, data):
    manager = _manager(hass)
    client_camel = str(data.get("clientId") or "").strip()
    client_snake = str(data.get("client_id") or "").strip()
    if client_camel and client_snake and client_camel != client_snake:
        raise HomeAssistantError("clientId and client_id refer to different clients")
    client_id = client_camel or client_snake or manager.client_id
    if action == "create":
        item = await manager.create(data["text"], data["device_id"],
                                    at=data.get("at"), delay_seconds=data.get("delay_seconds"),
                                    client_id=client_id)
        return {"reminder": item}
    if action == "delete":
        await manager.delete(data["id"])
        return {"deleted": data["id"]}
    items = manager.items()
    if action == "info":
        items = [item for item in items if item.get("clientId", manager.client_id) == client_id]
    if action == "info" and not data.get("include_history", False):
        items = [item for item in items if item["status"] in {"pending", "delivering"}]
    if data.get("id"):
        items = [item for item in items if item["id"] == data["id"]]
    if data.get("device_id"):
        items = [item for item in items if item["device_id"] == data["device_id"]]
    query = data.get("query", "").strip().casefold()
    if query:
        items = [item for item in items if query in item["text"].casefold()]
    return {"reminders": items}


def register_services(hass):
    for action, fields in (
        ("create", CREATE_FIELDS), ("delete", {vol.Required("id"): str}),
        ("info", {vol.Optional("id"): str,
                  vol.Optional("clientId"): str, vol.Optional("client_id"): str,
                  vol.Required("device_id"): vol.All(str, lambda value: value.strip(), vol.Length(min=1)),
                  vol.Optional("query", default=""): str,
                  vol.Optional("include_history", default=False): vol.Boolean()}),
    ):
        name = f"reminder_{action}"
        if hass.services.has_service(DOMAIN, name):
            continue

        async def handle(call, action=action):
            return await _action(hass, action, call.data)

        hass.services.async_register(DOMAIN, name, handle, schema=vol.Schema(fields),
                                     supports_response=SupportsResponse.OPTIONAL)


def register_websockets(hass):
    for handler in (_get, _create, _delete):
        websocket_api.async_register_command(hass, handler)


async def _respond(hass, connection, msg, action):
    try:
        data = {key: value for key, value in msg.items() if key not in {"id", "type"}}
        if "reminder_id" in data:
            data["id"] = data.pop("reminder_id")
        result = await _action(hass, action, data)
        if action == "list":
            result["devices"] = _devices(hass)
        connection.send_result(msg["id"], result)
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "reminder_error", str(err))


@websocket_api.websocket_command({vol.Required("type"): "ha_dialog_ui/reminders/get"})
@websocket_api.async_response
async def _get(hass, connection, msg):
    await _respond(hass, connection, msg, "list")


@websocket_api.websocket_command({vol.Required("type"): "ha_dialog_ui/reminders/create", **CREATE_FIELDS})
@websocket_api.async_response
async def _create(hass, connection, msg):
    await _respond(hass, connection, msg, "create")


@websocket_api.websocket_command({vol.Required("type"): "ha_dialog_ui/reminders/delete", vol.Required("reminder_id"): str})
@websocket_api.async_response
async def _delete(hass, connection, msg):
    # WebSocket id is the request sequence, never the reminder UUID.
    await _respond(hass, connection, msg, "delete")
