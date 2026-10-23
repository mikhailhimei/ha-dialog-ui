import voluptuous as vol

from ....const import (
    WS_DELETE_SCRIPT_ACTION,
    WS_GET_SCRIPT_ACTION,
    WS_GET_SCRIPT_ACTIONS_SHORT,
    WS_SAVE_SCRIPT_ACTION,
    WS_UPDATE_SCRIPT_ACTION,
)

SAVE_SCRIPT_ACTION_SCHEMA = {
    vol.Required("type"): WS_SAVE_SCRIPT_ACTION,
    vol.Required("data"): {
        vol.Optional("uuid"): str,
        vol.Required("name"): str,
        vol.Required("script_entity_id"): str,
        vol.Optional("conditions", default=[]): [
            {
                vol.Optional("parent_type", default=""): str,
                vol.Optional("children_type", default=""): str,
                vol.Optional("children_direct_type", default=""): str,
            }
        ],
        vol.Optional("parent_type", default=""): str,
        vol.Optional("children_type", default=""): str,
        vol.Optional("children_direct_type", default=""): str,
    },
}

UPDATE_SCRIPT_ACTION_SCHEMA = {
    vol.Required("type"): WS_UPDATE_SCRIPT_ACTION,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_SCRIPT_ACTIONS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_SCRIPT_ACTIONS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_SCRIPT_ACTION_SCHEMA = {
    vol.Required("type"): WS_GET_SCRIPT_ACTION,
    vol.Required("uuid"): str,
}

DELETE_SCRIPT_ACTION_SCHEMA = {
    vol.Required("type"): WS_DELETE_SCRIPT_ACTION,
    vol.Required("uuid"): str,
}
