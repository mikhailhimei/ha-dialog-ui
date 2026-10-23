import voluptuous as vol

from ....const import (
    WS_GET_SETTINGS,
    WS_SAVE_SETTINGS,
)

SAVE_SETTINGS_SCHEMA = {
    vol.Required("type"): WS_SAVE_SETTINGS,
    vol.Required("data"): dict
}


GET_SETTINGS_SCHEMA = {
    vol.Required("type"): WS_GET_SETTINGS
}
