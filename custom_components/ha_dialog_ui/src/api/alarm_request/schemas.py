import voluptuous as vol

from ....const import (
    WS_DELETE_ALARM_REQUEST,
    WS_GET_ALARM_REQUEST,
    WS_GET_ALARM_REQUESTS_SHORT,
    WS_SAVE_ALARM_REQUEST,
    WS_UPDATE_ALARM_REQUEST,
)

_ALARM_ACTIONS = ("create_alarm", "delete_alarm", "edit_alarm")
_ALARM_REPEAT_TYPES = ("once", "daily", "weekdays", "weekends", "custom")

SAVE_ALARM_REQUEST_SCHEMA = {
    vol.Required("type"): WS_SAVE_ALARM_REQUEST,
    vol.Required("data"): {
        vol.Optional("uuid", default=""): str,
        vol.Optional("name", default=""): str,
        vol.Required("action_type"): vol.In(_ALARM_ACTIONS),
        vol.Required("device_id"): str,
        vol.Required("status"): str,
        vol.Required("time"): str,
        vol.Optional("volume_start", default=0.3): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
        vol.Optional("repeat_type", default="once"): str,
        vol.Optional("repeat_days", default=[]): [str],
    },
}

UPDATE_ALARM_REQUEST_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ALARM_REQUEST,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_ALARM_REQUESTS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ALARM_REQUESTS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_ALARM_REQUEST_SCHEMA = {
    vol.Required("type"): WS_GET_ALARM_REQUEST,
    vol.Required("uuid"): str,
}

DELETE_ALARM_REQUEST_SCHEMA = {
    vol.Required("type"): WS_DELETE_ALARM_REQUEST,
    vol.Required("uuid"): str,
}
