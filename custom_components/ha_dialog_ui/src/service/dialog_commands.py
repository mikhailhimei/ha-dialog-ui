"""Prepare dialog commands, linked templates and response settings."""

import logging
from copy import deepcopy
from functools import partial
from .matching.direct import (
    attach_direct_controls,
)
from .dialog_repository import get_all, get_one_by_uuid
_LOGGER = logging.getLogger(__name__)

def normalize_command(item, attributes):
    command_attributes = item.get(attributes) or {}

    if(not item.get('uuid')):
        return None

    raw_voice_commands = command_attributes.get("voiceCommands")
    if isinstance(raw_voice_commands, list):
        voice_commands = raw_voice_commands
    elif isinstance(raw_voice_commands, str):
        voice_commands = raw_voice_commands.split(';')
    else:
        voice_commands = []

    raw_voice_responses = command_attributes.get("voiceResponseArray") or []
    voice_response_array = []
    for voice_item in raw_voice_responses:
        if not isinstance(voice_item, dict):
            continue

        normalized_voice_item = dict(voice_item)
        normalized_voice_item.pop("endStatus", None)
        voice_response_array.append(normalized_voice_item)

    normalized = {
        "id": item.get("_id"),
        "endStatus": command_attributes.get("endStatus"),
        "actionType": command_attributes.get("actionType") or item.get("uuid"),
        "voiceCommands": voice_commands,
        "nextDirectControl": command_attributes.get('nextDirectControl'),
        "answerType": command_attributes.get("answerType"),
        "forwardText": command_attributes.get("forwardText"),
        "nextAction": [
            {**link, "actionTypeComponent": link.get("actionTypeComponent") or "children"}
            for link in command_attributes.get("nextAction") or []
            if link.get("actionTypeComponent") in {"children", "custom"}
            or (not link.get("actionTypeComponent") and link.get("uuid"))
        ],
        "voiceResponseArray": voice_response_array,
        "uuid": item.get("uuid")
    }
    if "script_entity_id" in command_attributes:
        normalized["script_entity_id"] = command_attributes["script_entity_id"]
    return normalized


def _resolve_direct_template(reference, templates_by_uuid=None):
    """Resolve a template reference, keeping the first-list-item convention."""
    if isinstance(reference, list):
        if not reference:
            return reference, None
        reference = reference[0] or {}

    if isinstance(reference, str) and reference.strip():
        template_uuid = reference.strip()
        if templates_by_uuid is None:
            reference = get_one_by_uuid("sub-direct-controls-sample", template_uuid)
        else:
            reference = deepcopy(templates_by_uuid.get(template_uuid))

    if isinstance(reference, dict):
        return reference.get("subDirectControl"), reference.get("valueType")
    return reference, None


def normalize_direct_control(item, attributes, templates_by_uuid=None):
    command_attributes = item.get(attributes) or {}

    if(not item.get('uuid')):
        return None

    value_type = command_attributes.get("valueType")

    sub_direct_control = command_attributes.get('subDirectControl')

    if not command_attributes.get("manual"):
        sub_direct_control, template_value_type = _resolve_direct_template(sub_direct_control, templates_by_uuid)
        if value_type is None:
            value_type = template_value_type

    return {
        "_id": item.get("_id"),
        "mappingType": command_attributes.get("mappingType"),
        "valueType": value_type if value_type is not None else item.get("valueType"),
        "voiceCommands": command_attributes.get('voiceCommands'),
        "uuid": item.get("uuid"),
        "subDirectControl": sub_direct_control
    }

def _normalize_items(items, attributes, normalizer):
    return [
        normalized
        for item in items
        if (normalized := normalizer(item, attributes))
    ]


def get_commands():
    try:
        templates_by_uuid = {}
        for template in get_all("sub-direct-controls-sample"):
            templates_by_uuid.setdefault(str(template.get("uuid") or ""), template)

        component_dialog = _normalize_items(
            get_all("commands"), "componentDialog", normalize_command,
        )
        sub_component_dialog = _normalize_items(
            get_all("sub-commands"), "subComponentDialog", normalize_command,
        )
        sub_direct_control = _normalize_items(
            get_all("sub-direct-controls"), "directControl",
            partial(normalize_direct_control, templates_by_uuid=templates_by_uuid),
        )

        sub_direct_by_uuid = {item.get("uuid"): item for item in sub_direct_control if item.get("uuid")}

        attach_direct_controls(component_dialog, sub_direct_by_uuid)
        attach_direct_controls(sub_component_dialog, sub_direct_by_uuid)

        data = {
            "componentDialog": component_dialog,
            "subComponentDialog": sub_component_dialog,
            "subDirectControl": sub_direct_control,
        }

        return {"source": "ha_storage", "body": data}

    except Exception as error:
        _LOGGER.exception("Failed to load dialog commands")
        return {"source": "error", "body": {"componentDialog": [], "subComponentDialog": [], "subDirectControl": []}, "detail": str(error)}

def get_dialog_settings():
    allowed_keys = {"actionType", "title", "message", "voiceResponse", "endStatus", "forwardCommandToServer", "script_entity_id", "voiceResponseArray"}

    def normalize_dialog_setting(item):
        normalized = {}

        for key in allowed_keys:
            value = item.get(key)
            if value is None:
                continue
            if isinstance(value, str) and value == "":
                continue
            normalized[key] = value

        if "message" not in normalized and normalized.get("voiceResponse"):
            normalized["message"] = normalized["voiceResponse"]

        return normalized

    try:
        dialog_settings = [
            normalized
            for item in get_all("settings-dialog")
            if (normalized := normalize_dialog_setting(item))
        ]

        return {
            "source": "ha_storage",
            "body": {
                "dialogSettings": dialog_settings,
            }
        }
    except Exception as error:
        _LOGGER.exception("Failed to load dialog settings")
        return {"source": "error", "body": {"dialogSettings": []}, "detail": str(error)}


def _ensure_list(value):
    return value if isinstance(value, list) else []


def prepare_dialog_nodes():
    commands_result = get_commands() or {}
    command_collections = commands_result.get("body") if isinstance(commands_result, dict) else {}
    if not isinstance(command_collections, dict):
        command_collections = {}

    top_level_nodes = _ensure_list(command_collections.get("componentDialog"))
    sub_level_nodes = _ensure_list(command_collections.get("subComponentDialog")) + top_level_nodes

    return top_level_nodes, sub_level_nodes


def get_dialog_settings_list():
    settings_result = get_dialog_settings()
    return (settings_result.get("body") or {}).get("dialogSettings", [])
