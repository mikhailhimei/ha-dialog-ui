import voluptuous as vol

from ....const import (
    WS_DELETE_ASSISTANT_COMMAND,
    WS_DELETE_ASSISTANT_SUB_COMMAND,
    WS_DELETE_ASSISTANT_SUB_DIRECT_CONTROL,
    WS_DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    WS_GET_ASSISTANT_COMMAND,
    WS_GET_ASSISTANT_COMMANDS_SHORT,
    WS_GET_ASSISTANT_SUB_COMMAND,
    WS_GET_ASSISTANT_SUB_DIRECT_CONTROL,
    WS_GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    WS_GET_ASSISTANT_SUB_COMMANDS_SHORT,
    WS_GET_ASSISTANT_SUB_DIRECT_CONTROLS_SHORT,
    WS_GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SHORT,
    WS_SAVE_ASSISTANT_COMMAND,
    WS_SAVE_ASSISTANT_SUB_COMMAND,
    WS_SAVE_ASSISTANT_SUB_DIRECT_CONTROL,
    WS_SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    WS_SEARCH_ASSISTANT_COMMANDS,
    WS_SEARCH_ASSISTANT_SUB_COMMANDS,
    WS_SEARCH_ASSISTANT_SUB_DIRECT_CONTROLS,
    WS_SEARCH_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES,
    WS_UPDATE_ASSISTANT_COMMAND,
    WS_UPDATE_ASSISTANT_COMMAND_STATUS,
    WS_UPDATE_ASSISTANT_SUB_COMMAND,
    WS_UPDATE_ASSISTANT_SUB_COMMAND_STATUS,
    WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROL,
    WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROLS_STATUS
)

SAVE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_COMMAND,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_COMMAND_STATUS_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_COMMAND_STATUS,
    vol.Required("uuid"): str,
    vol.Required("status"): bool,
}

GET_ASSISTANT_COMMANDS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMANDS_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}

SEARCH_ASSISTANT_COMMANDS_SCHEMA = {
    vol.Required("type"): WS_SEARCH_ASSISTANT_COMMANDS,
    vol.Required("query"): str,
}

SAVE_ASSISTANT_SUB_COMMAND_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_SUB_COMMAND,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_SUB_COMMAND_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SUB_COMMAND,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_SUB_COMMAND_STATUS_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SUB_COMMAND_STATUS,
    vol.Required("uuid"): str,
    vol.Required("status"): bool,
}

UPDATE_ASSISTANT_SUB_DIRECT_CONTROLS_STATUS_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROLS_STATUS,
    vol.Required("uuid"): str,
    vol.Required("status"): bool,
}

GET_ASSISTANT_SUB_COMMANDS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_COMMANDS_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_ASSISTANT_SUB_COMMAND_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_COMMAND,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_SUB_COMMAND_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_SUB_COMMAND,
    vol.Required("uuid"): str,
}

SEARCH_ASSISTANT_SUB_COMMANDS_SCHEMA = {
    vol.Required("type"): WS_SEARCH_ASSISTANT_SUB_COMMANDS,
    vol.Required("query"): str,
}

SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_SUB_DIRECT_CONTROL,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROL,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_ASSISTANT_SUB_DIRECT_CONTROLS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_DIRECT_CONTROLS_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_DIRECT_CONTROL,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_SUB_DIRECT_CONTROL,
    vol.Required("uuid"): str,
}

SEARCH_ASSISTANT_SUB_DIRECT_CONTROLS_SCHEMA = {
    vol.Required("type"): WS_SEARCH_ASSISTANT_SUB_DIRECT_CONTROLS,
    vol.Required("query"): str,
}

SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
    vol.Optional("query"): str,
}

GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLE,
    vol.Required("uuid"): str,
}

SEARCH_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES_SCHEMA = {
    vol.Required("type"): WS_SEARCH_ASSISTANT_SUB_DIRECT_CONTROL_SAMPLES,
    vol.Required("query"): str,
}
