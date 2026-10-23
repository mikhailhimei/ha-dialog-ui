"""Подготовка ответов, подстановка значений и выбор ветвей диалога."""

import json
import re
from ..utils.text_normalization import prepare_speech_text


RESPONSE_TEMPLATE_PATTERN = re.compile(r"\$\{([^{}]+)\}")


VOICE_RESPONSE_TYPE_ALIASES = {
    "default": "default",
    "direct": "default",
    "default_direct": "default",
    "default_next_step": "default_next_step",
    "miss": "miss",
    "error": "error",
    "next": "default",
}


VOICE_RESPONSE_TYPES = {"default", "default_next_step", "miss", "error"}


NEXT_ACTION_COMPONENT_ALIASES = {
    "default": {"children"},
    "default_next_step": {"children"},
    "error": set(),
    "miss": set(),
}


def find_nested_value(payload, target_key):
    if isinstance(payload, dict):
        if target_key in payload and payload[target_key] is not None:
            return payload[target_key]

        for value in payload.values():
            nested = find_nested_value(value, target_key)
            if nested is not None:
                return nested

    elif isinstance(payload, list):
        for item in payload:
            nested = find_nested_value(item, target_key)
            if nested is not None:
                return nested

    return None


def resolve_response_text(response_text, *sources):
    response_text = response_text or ''
    if "${" not in response_text:
        return response_text

    def replace_placeholder(match):
        key = match.group(1).strip()
        for source in sources:
            value = find_nested_value(source, key)
            if value is not None:
                if isinstance(value, (dict, list)):
                    return json.dumps(value, ensure_ascii=False)
                return str(value)
        return ''

    return RESPONSE_TEMPLATE_PATTERN.sub(replace_placeholder, response_text)


def has_custom_next_action(next_action, response_type):
    canonical_type = canonical_voice_response_type(response_type, fallback=None)
    if not canonical_type:
        return False

    for item in next_action or []:
        if item.get("actionTypeComponent") != "custom":
            continue

        action_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
        if action_type == canonical_type and item.get("uuid"):
            return True

    return False


def resolve_node_end_status(node, response_type=None):
    next_action = node.get("nextAction") or []
    return not (
        has_custom_next_action(next_action, response_type)
        or has_next_action_branch(next_action)
    )


def normalize_voice_response_type(response_type, fallback="default"):
    normalized = VOICE_RESPONSE_TYPE_ALIASES.get(str(response_type or "").strip().lower())
    if normalized in VOICE_RESPONSE_TYPES:
        return normalized
    return fallback


def canonical_voice_response_type(response_type, fallback="default"):
    raw_value = str(response_type or "").strip()
    if not raw_value:
        return fallback

    normalized = VOICE_RESPONSE_TYPE_ALIASES.get(raw_value.lower())
    if normalized in VOICE_RESPONSE_TYPES:
        return normalized

    return raw_value


def resolve_default_response_type(prefer_next_step=False):
    return "default_next_step" if prefer_next_step else "default"


def get_voice_response_payload(node, response_type="default", *sources):
    node = node or {}
    voice_responses = {}
    for item in node.get("voiceResponseArray") or []:
        if not isinstance(item, dict):
            continue

        canonical_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
        if not canonical_type:
            continue

        response_text = item.get("voiceResponse")
        if response_text in (None, ""):
            continue

        voice_responses[canonical_type] = dict(item)

    canonical_type = canonical_voice_response_type(response_type)
    candidate_types = [canonical_type]
    if canonical_type == "default_next_step":
        candidate_types.append("default")

    for candidate_type in candidate_types:
        voice_response_item = voice_responses.get(candidate_type)
        if not voice_response_item:
            continue

        response_text = resolve_response_text(voice_response_item.get("voiceResponse"), *sources)
        if response_text in (None, ""):
            continue

        return response_text, resolve_node_end_status(node, candidate_type)

    return "", None


def get_voice_response(node, response_type="default", *sources):
    response_text, _ = get_voice_response_payload(node, response_type, *sources)
    return response_text


def resolve_service_voice_type(script_response, fallback="default"):
    for key in ("typeVoice", "actionType"):
        raw_type = script_response.get(key)
        canonical_type = canonical_voice_response_type(raw_type, fallback=None)
        if canonical_type:
            return canonical_type

    return fallback


def has_next_action_branch(next_action, response_type="default"):
    component_types = NEXT_ACTION_COMPONENT_ALIASES.get(
        normalize_voice_response_type(response_type),
        set(),
    )
    if not component_types:
        return False

    return any(item.get("actionTypeComponent") in component_types and item.get("uuid") for item in (next_action or []))


def resolve_next_action_uuid(next_action, response_type, fallback_uuid=""):
    canonical_type = canonical_voice_response_type(response_type, fallback=None)

    for item in next_action or []:
        if item.get("actionTypeComponent") == "custom":
            action_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
            if action_type == canonical_type and item.get("uuid"):
                return item.get("uuid")
        
    if has_next_action_branch(next_action):
        return fallback_uuid
    return None


def resolve_service_response_text(node, script_response, default_response_type="default", *sources):
    use_declension = script_response.get('useDeclension', True)
    response_type = resolve_service_voice_type(script_response, fallback=default_response_type)
    response_text, response_end_status = get_voice_response_payload(
        node,
        response_type,
        *sources,
        script_response.get("data"),
        script_response,
    )
    if response_text not in (None, ""):
        return response_text, response_end_status, response_type, use_declension

    error_response_text, error_end_status = get_voice_response_payload(
        node,
        "error",
        *sources,
        script_response.get("data"),
        script_response,
    )
    if error_response_text not in (None, ""):
        return error_response_text, error_end_status, "error", use_declension

    return response_text, response_end_status, response_type, use_declension


def apply_service_payload(script_response, node, end_status, default_response_type="default", *sources):
    response_text, response_end_status, response_type, use_declension = resolve_service_response_text(
        node,
        script_response,
        default_response_type,
        *sources,
    )
    return response_text, response_end_status if response_end_status is not None else end_status, response_type, use_declension


def build_text_response(response_text, end_status, use_declension= True):
    if use_declension:
        response_text = prepare_speech_text(response_text) or ''
    
    return {"end_session": end_status, "text": re.sub(r'<.*?>', '', response_text), "tts": response_text}

