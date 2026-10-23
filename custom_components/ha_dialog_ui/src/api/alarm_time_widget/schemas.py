import voluptuous as vol

from ....const import (
    WS_DELETE_ALARM_TIME_WIDGET,
    WS_GET_ALARM_TIME_WIDGET,
    WS_GET_ALARM_TIME_WIDGETS_SHORT,
    WS_SAVE_ALARM_TIME_WIDGET,
    WS_UPDATE_ALARM_TIME_WIDGET,
)

_TIME_WIDGET_ACTIONS = ("create_time_widget", "edit_time_widget", "delete_time_widget")

SAVE_ALARM_TIME_WIDGET_SCHEMA = {
    vol.Required("type"): WS_SAVE_ALARM_TIME_WIDGET,
    vol.Required("data"): {
        vol.Optional("uuid", default=""): str,
        vol.Optional("name", default=""): str,
        vol.Required("action_type"): vol.In(_TIME_WIDGET_ACTIONS),
        vol.Required("time"): [str],
    },
}

UPDATE_ALARM_TIME_WIDGET_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ALARM_TIME_WIDGET,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_ALARM_TIME_WIDGETS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ALARM_TIME_WIDGETS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_ALARM_TIME_WIDGET_SCHEMA = {
    vol.Required("type"): WS_GET_ALARM_TIME_WIDGET,
    vol.Required("uuid"): str,
}

DELETE_ALARM_TIME_WIDGET_SCHEMA = {
    vol.Required("type"): WS_DELETE_ALARM_TIME_WIDGET,
    vol.Required("uuid"): str,
}
