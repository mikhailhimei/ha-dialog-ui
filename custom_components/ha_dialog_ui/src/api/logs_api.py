"""Websocket API for logs."""

from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ...const import DOMAIN, WS_GET_LOGS


def async_register_logs_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_logs)
    websocket_api.async_register_command(hass, _ws_get_api_logs)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_LOGS})
@websocket_api.async_response
async def _ws_get_logs(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    logs = list(hass.data.get(DOMAIN, {}).get("logs", []))
    connection.send_result(msg["id"], {"logs": logs})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/get_api_logs"})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_get_api_logs(hass, connection, msg):
    from ...storage.settings_storage import get_cached_settings
    if not get_cached_settings(hass).get("api_commands_enabled"):
        connection.send_error(msg["id"], "api_disabled", "API is disabled")
        return
    logs = list(hass.data.get(DOMAIN, {}).get("api_logs", []))
    connection.send_result(msg["id"], {"logs": list(reversed(logs))})
