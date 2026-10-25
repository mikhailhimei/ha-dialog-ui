"""WebSocket API for integration settings."""
from __future__ import annotations


import voluptuous as vol

from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant


from ....const import (
    DOMAIN
)
from ....storage.settings_storage import async_load_settings, async_save_settings, get_cached_settings
from ..mutation_lock import serialize_collection_mutation
from .schemas import (
    GET_SETTINGS_SCHEMA,
    SAVE_SETTINGS_SCHEMA,
)
def async_register_settings_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_settings)
    websocket_api.async_register_command(hass, _ws_save_settings)
    websocket_api.async_register_command(hass, _ws_import_settings)
    

@websocket_api.websocket_command(GET_SETTINGS_SCHEMA)
@websocket_api.async_response
async def _ws_get_settings(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    data = await async_load_settings(hass)

    connection.send_result(
        msg["id"],
        data,
    )


@websocket_api.websocket_command(SAVE_SETTINGS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("settings")
async def _ws_save_settings(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:

    await _async_save_settings(hass, connection, msg)


async def _async_save_settings(hass, connection, msg):
    current_settings = await async_load_settings(hass)
    new_settings = msg["data"]

    updated_settings = current_settings.copy()

    # обновляем только пришедшие поля
    for key, value in new_settings.items():

        # если вложенный dict -> обновляем только его поля
        if (
            isinstance(value, dict)
            and isinstance(updated_settings.get(key), dict)
        ):
            updated_settings[key].update(value)

        else:
            updated_settings[key] = value

    await async_save_settings(
        hass,
        updated_settings,
    )

    updated_settings = get_cached_settings(hass)

    try:
        coordinator = hass.data[DOMAIN]["coordinator"]
        await coordinator.async_reload()
    except Exception as error:
        connection.send_error(msg["id"], "reload_failed", f"Saved but reload failed {error}")
        return

    connection.send_result(
        msg["id"],
        {
            "saved": True,
            "settings": updated_settings,
        },
    )


@websocket_api.websocket_command({
    vol.Required("type"): "ha_dialog_ui/import_settings",
    vol.Required("data"): {
        vol.Optional("call_music"): str,
        vol.Optional("theme"): vol.In(["dark", "light"]),
        vol.Optional("client_id"): str,
        vol.Optional("is_admin"): bool,
        vol.Optional("active_remout"): bool,
        vol.Optional("api_commands_enabled"): bool,
        vol.Optional("api_commands_token"): str,
        vol.Optional("remout"): {vol.Optional("base_url"): str, vol.Optional("token"): str, vol.Optional("client_id"): str},
        vol.Optional("timer_alarm"): {vol.Optional("global_music_timer"): str, vol.Optional("global_music_alarm"): str},
    },
})
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("settings")
async def _ws_import_settings(hass, connection, msg):
    """Import settings with the same save/reload path, restricted to admins."""
    await _async_save_settings(hass, connection, msg)
