"""Home Assistant services for Dialog Custom UI."""

from __future__ import annotations

import json
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError
from .storage.settings_storage import get_cached_settings

from .integration_helpers import get_integration_entry, get_timer_alarm_manager
from .runtime_options import build_runtime_options

from .dialog.normalize import _normalize_value

from .const import (
    DOMAIN,
    EVENT_DIALOG_MESSAGE,
)

SERVICE_SEND_COMMAND = "send_command"
SERVICE_ALARM_CREATE = "alarm_create"
SERVICE_ALARM_INFO = "alarm_info"
SERVICE_ALARM_DELETE = "alarm_delete"
SERVICE_LEGACY_ALARM_SCRIPT = "alarm_script"
SERVICE_TIMER_CREATE = "timer_create"
SERVICE_TIMER_INFO = "timer_info"
SERVICE_TIMER_DELETE = "timer_delete"
SERVICE_LEGACY_TIMER_SCRIPT = "timer_script"

ATTR_CLIENT_ID = "clientId"
ATTR_DEVICE_ID = "deviceId"
ATTR_ACTION_TYPE = "actionType"
ATTR_VARIABLES = "variables"
ATTR_USE_DECLENSION = "useDeclension"
ATTR_ACTION = "action"
ATTR_HH = "hh"
ATTR_MM = "mm"
ATTR_SS = "ss"
ATTR_REPEAT_TYPE = "repeat_type"
ATTR_REPEAT_DAYS = "repeat_days"
ATTR_CONVERT_DAY_PERIOD = "convert_day_period"
ATTR_UUID = "uuid"
ATTR_TIMER_UUID = "timer_uuid"
ATTR_ALARM_UUID = "alarm_uuid"

_SEND_COMMAND_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Required(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Required(ATTR_ACTION_TYPE): vol.Coerce(str),
        vol.Optional(ATTR_VARIABLES, default={}): vol.Any(str, dict),
        vol.Optional(ATTR_USE_DECLENSION, default=True): vol.Boolean(),
    }
)


def async_register_services(hass: HomeAssistant) -> None:
    """Register Dialog Custom UI services for scripts and automations."""
    async def async_handle_send_command(call: ServiceCall) -> None:
        await _async_handle_send_command(hass, call)

    async def async_handle_alarm_create(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "alarm", "create", call)

    async def async_handle_alarm_info(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "alarm", "info", call)

    async def async_handle_alarm_delete(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "alarm", "delete", call)

    async def async_handle_timer_create(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "timer", "create", call)

    async def async_handle_timer_info(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "timer", "info", call)

    async def async_handle_timer_delete(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_action(hass, "timer", "delete", call)

    async def stop_activity(call: ServiceCall) -> None:
        from .audio.audio_notification import _resolve_media_player_entity_id
        from .audio.firmware_alert import native_service

        target = _resolve_media_player_entity_id(hass, call.data["device_id"])
        service = native_service(hass, target, "activity_stop") if target else None
        if not service:
            raise HomeAssistantError("Для остановки сигнала и звонка обновите прошивку колонки")
        await hass.services.async_call("esphome", service, {}, blocking=True)

    hass.services.async_register(DOMAIN, "activity_stop", stop_activity, schema=vol.Schema({vol.Required("device_id"): str}))
    if not hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        hass.services.async_register(
            DOMAIN,
            SERVICE_SEND_COMMAND,
            async_handle_send_command,
            schema=_SEND_COMMAND_SCHEMA,
        )
    _register_optional_response_service(hass, SERVICE_ALARM_CREATE, async_handle_alarm_create, _ALARM_CREATE_SCHEMA)
    _register_optional_response_service(hass, SERVICE_ALARM_INFO, async_handle_alarm_info, _INFO_SCHEMA)
    _register_optional_response_service(hass, SERVICE_ALARM_DELETE, async_handle_alarm_delete, _DELETE_SCHEMA)
    _register_optional_response_service(hass, SERVICE_TIMER_CREATE, async_handle_timer_create, _TIMER_CREATE_SCHEMA)
    _register_optional_response_service(hass, SERVICE_TIMER_INFO, async_handle_timer_info, _INFO_SCHEMA)
    _register_optional_response_service(hass, SERVICE_TIMER_DELETE, async_handle_timer_delete, _DELETE_SCHEMA)


def async_unregister_services(hass: HomeAssistant) -> None:
    """Unregister Dialog Custom UI services."""
    if hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        hass.services.async_remove(DOMAIN, SERVICE_SEND_COMMAND)
    for service_name in (
        "activity_stop",
        SERVICE_ALARM_CREATE,
        SERVICE_ALARM_INFO,
        SERVICE_ALARM_DELETE,
        SERVICE_LEGACY_ALARM_SCRIPT,
        SERVICE_TIMER_CREATE,
        SERVICE_TIMER_INFO,
        SERVICE_TIMER_DELETE,
        SERVICE_LEGACY_TIMER_SCRIPT,
    ):
        if hass.services.has_service(DOMAIN, service_name):
            hass.services.async_remove(DOMAIN, service_name)


async def _async_handle_send_command(hass: HomeAssistant, call: ServiceCall) -> None:
    """Send a command payload through the Home Assistant event bus."""
    entry = get_integration_entry(hass)
    if entry is None:
        raise HomeAssistantError("Dialog Custom UI integration entry not found")

    options = build_runtime_options(entry, get_cached_settings(hass))
    variables = _parse_response_variables(call.data.get(ATTR_VARIABLES))
    payload = {
        ATTR_CLIENT_ID: _normalize_value(call.data.get(ATTR_CLIENT_ID)) or _normalize_value(options.get("client_id")),
        ATTR_DEVICE_ID: _normalize_value(call.data.get(ATTR_DEVICE_ID)),
        ATTR_ACTION_TYPE: _normalize_value(call.data.get(ATTR_ACTION_TYPE)),
        ATTR_VARIABLES: variables,
        ATTR_USE_DECLENSION: call.data.get(ATTR_USE_DECLENSION, True),
    }

    hass.bus.async_fire(
        EVENT_DIALOG_MESSAGE,
        {
            "client_id": payload[ATTR_CLIENT_ID],
            "device_id": payload[ATTR_DEVICE_ID],
            ATTR_ACTION_TYPE: payload[ATTR_ACTION_TYPE],
            ATTR_VARIABLES: payload[ATTR_VARIABLES],
            ATTR_USE_DECLENSION: payload[ATTR_USE_DECLENSION],
        },
    )


async def _async_handle_timer_alarm_action(hass: HomeAssistant, item_type: str, action: str, call: ServiceCall) -> dict[str, Any]:
    entry = get_integration_entry(hass)
    if entry is None:
        raise HomeAssistantError("Dialog Custom UI integration entry not found")

    manager = get_timer_alarm_manager(hass, entry)
    if manager is None:
        raise HomeAssistantError("Dialog timer/alarm manager not found")

    options = build_runtime_options(entry, get_cached_settings(hass))
    client_id = _normalize_value(call.data.get(ATTR_CLIENT_ID)) or _normalize_value(options.get("client_id"))
    device_id_camel = _normalize_value(call.data.get(ATTR_DEVICE_ID))
    device_id_snake = _normalize_value(call.data.get("device_id"))
    if device_id_camel and device_id_snake and device_id_camel != device_id_snake:
        raise HomeAssistantError("deviceId and device_id refer to different devices")
    device_id = device_id_camel or device_id_snake
    config = dict(call.data)
    config[ATTR_ACTION] = action
    if item_type == "alarm":
        config["target_uuid"] = _normalize_value(call.data.get(ATTR_UUID) or call.data.get(ATTR_ALARM_UUID))
    else:
        config["target_uuid"] = _normalize_value(call.data.get(ATTR_UUID) or call.data.get(ATTR_TIMER_UUID))
    return await manager.async_handle_service_action(item_type, config, client_id, device_id)


def _parse_response_variables(value: Any) -> dict[str, Any]:
    if value in (None, ""):
        return {}
    if isinstance(value, dict):
        return value
    if isinstance(value, str):
        try:
            parsed_variables = json.loads(value)
        except json.JSONDecodeError as err:
            raise HomeAssistantError(f"variables must be valid JSON: {err.msg}") from err
        if isinstance(parsed_variables, dict):
            return parsed_variables
    raise HomeAssistantError("variables must be a JSON object")


_REPEAT_TYPE_VALIDATOR = vol.In(["once", "daily", "weekdays", "weekends", "custom"])


def _register_optional_response_service(
    hass: HomeAssistant,
    service_name: str,
    handler: Any,
    schema: vol.Schema,
) -> None:
    if hass.services.has_service(DOMAIN, service_name):
        return
    hass.services.async_register(
        DOMAIN,
        service_name,
        handler,
        schema=schema,
        supports_response=SupportsResponse.OPTIONAL,
    )


_INFO_SCHEMA = vol.Schema(
    {
        vol.Optional(ATTR_CLIENT_ID): vol.Coerce(str),
    }
)

_ALARM_CREATE_SCHEMA = vol.Schema(
    {
        vol.Optional(ATTR_HH, default=0): vol.Any(str, int),
        vol.Optional(ATTR_MM, default=0): vol.Any(str, int),
        vol.Optional(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Optional(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Optional("device_id"): vol.Coerce(str),
        vol.Optional(ATTR_REPEAT_TYPE, default="once"): _REPEAT_TYPE_VALIDATOR,
        vol.Optional(ATTR_REPEAT_DAYS, default=""): vol.Any(str, [str]),
        vol.Optional(ATTR_CONVERT_DAY_PERIOD, default=False): vol.Boolean(),
    }
)

_DELETE_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_UUID): vol.Coerce(str),
    }
)

_TIMER_CREATE_SCHEMA = vol.Schema(
    {
        vol.Optional(ATTR_HH, default=0): vol.Any(str, int),
        vol.Optional(ATTR_MM, default=0): vol.Any(str, int),
        vol.Optional(ATTR_SS, default=0): vol.Any(str, int),
        vol.Optional(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Optional(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Optional("device_id"): vol.Coerce(str),
    }
)
