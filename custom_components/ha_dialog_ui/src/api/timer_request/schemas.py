import voluptuous as vol

from ....const import (
    WS_DELETE_TIMER_REQUEST,
    WS_GET_TIMER_REQUEST,
    WS_GET_TIMER_REQUESTS_SHORT,
    WS_SAVE_TIMER_REQUEST,
    WS_UPDATE_TIMER_REQUEST,
)

_TIMER_ACTIONS = ("create_timer", "delete_timer")
_TIMER_TIME = vol.Any(str, dict)

SAVE_TIMER_REQUEST_SCHEMA = {
    vol.Required("type"): WS_SAVE_TIMER_REQUEST,
    vol.Required("data"): {
        vol.Optional("uuid", default=""): str,
        vol.Optional("name", default=""): str,
        vol.Required("action_type"): vol.In(_TIMER_ACTIONS),
        vol.Required("device_id"): str,
        vol.Optional("timer_time", default=""): _TIMER_TIME,
        vol.Optional("volume_start", default=0.3): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
    },
}

UPDATE_TIMER_REQUEST_SCHEMA = {
    vol.Required("type"): WS_UPDATE_TIMER_REQUEST,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_TIMER_REQUESTS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_TIMER_REQUESTS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_TIMER_REQUEST_SCHEMA = {
    vol.Required("type"): WS_GET_TIMER_REQUEST,
    vol.Required("uuid"): str,
}

DELETE_TIMER_REQUEST_SCHEMA = {
    vol.Required("type"): WS_DELETE_TIMER_REQUEST,
    vol.Required("uuid"): str,
}
