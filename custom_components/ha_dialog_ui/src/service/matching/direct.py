"""Сопоставление значений прямых команд."""

import re
from ...utils.text_normalization import sanitize_location_text
from ...utils.value_parser import parse_typed_value
from .text import (
    tokenize_command_text,
    voice_command_matches,
)


def normalize_direct_control_text(value):
    return sanitize_location_text(value).strip().lower()


def normalize_direct_control_commands(raw_value):
    values = raw_value if isinstance(raw_value, list) else [raw_value or ""]
    return [
        normalized
        for value in values
        for phrase in (value or "").split(";")
        if (normalized := normalize_direct_control_text(phrase))
    ]


def collect_all_type_template_vars(node):
    result = set()
    direct_items = (node or {}).get("direct") or []
    for direct_item in direct_items:
        if not isinstance(direct_item, dict):
            continue
        value_type = str(direct_item.get("valueType") or "").strip().lower()
        if value_type != "all":
            continue
        direct_type = str(direct_item.get("mappingType") or "").strip()
        if not direct_type:
            continue
        result.add(direct_type.lower())
        result.add(_direct_type_to_var_name(direct_type).lower())
    return result


def _direct_tokens_match(source_token, target_token):
    if source_token == target_token:
        return True

    min_len = min(len(source_token), len(target_token))
    if min_len >= 3 and (
        source_token.startswith(target_token)
        or target_token.startswith(source_token)
    ):
        return True

    if min_len >= 4 and source_token[:4] == target_token[:4]:
        return True

    return False


def matches_direct_command(value_text, command_text):
    value_text = normalize_direct_control_text(value_text)
    command_text = normalize_direct_control_text(command_text)
    if not value_text or not command_text:
        return False

    if voice_command_matches(command_text, value_text, partial=False):
        return True

    value_tokens = tokenize_command_text(value_text)
    command_tokens = tokenize_command_text(command_text)
    if not value_tokens or not command_tokens:
        return False

    for start_idx in range(len(value_tokens)):
        matched = True
        for offset, command_token in enumerate(command_tokens):
            source_idx = start_idx + offset
            if source_idx >= len(value_tokens):
                matched = False
                break
            if not _direct_tokens_match(value_tokens[source_idx], command_token):
                matched = False
                break
        if matched:
            return True

    return False


def find_direct_match(direct_list, value_text):
    if not value_text:
        return []

    value_text = normalize_direct_control_text(value_text)
    matched = []
    for matched_command in direct_list or []:
        commands = normalize_direct_control_commands(matched_command)
        if any(matches_direct_command(value_text, command_phrase) for command_phrase in commands):
            matched.append(matched_command)

    return matched


def find_sub_direct_match(sub_list, value_text, main_list=None):
    if not value_text:
        return []

    value_text = normalize_direct_control_text(value_text)
    matched = []
    main_commands = normalize_direct_control_commands(main_list)

    for matched_command in sub_list or []:
        commands = normalize_direct_control_commands(matched_command.get('subVoiceCommands'))

        # формируем полные фразы
        if main_commands:
            phrases = [f"{main_command_phrase} {subcommand_phrase}" for main_command_phrase in main_commands for subcommand_phrase in commands]
        else:
            phrases = commands

        if any(matches_direct_command(value_text, phrase) for phrase in phrases):
            matched.append(matched_command)

    return matched


def _direct_type_to_var_name(direct_type):
    value = str(direct_type or "").strip().lower()
    value = value.lstrip("_")
    value = re.sub(r"[^a-zа-я0-9]+", "_", value)
    return value.strip("_") or "value"


def resolve_direct_types(direct_items, direct_value, source_name=None):
    direct_children_types = []
    direct_entry = {}

    for direct_item in direct_items or []:
        direct_mapping_type = direct_item.get("mappingType")
        direct_value_type = direct_item.get("valueType")
        sub_mapping_type = None

        if(direct_mapping_type and source_name != direct_mapping_type):
            continue

        sanitized_direct_value = parse_typed_value(direct_value, direct_item.get("valueType"))
        if sanitized_direct_value is None:
                    continue 

        if direct_value_type == 'command':
            main_list = direct_item.get("voiceCommands")
            sub_list = direct_item.get("subDirectControl")

            if main_list and not sub_list:
                matched_command = find_direct_match(main_list, direct_value)
                if not matched_command:
                    continue

            if sub_list:
                #возвращает совпадение
                sub_items = find_sub_direct_match(sub_list, direct_value, main_list)
                if not sub_items:
                    continue
                sub_types = []
                for sub_item in sub_items:
                    sub_type = sub_item.get("subMappingType") or sub_item.get("mappingType")
                    if not sub_type:
                        continue
                    if isinstance(sub_type, list):
                        direct_children_types.extend(sub_type)
                        sub_types.extend(sub_type)
                    else:
                        direct_children_types.append(sub_type)
                        sub_types.append(sub_type)
                if sub_types:
                    sub_mapping_type = list(dict.fromkeys(sub_types))

        direct_entry = {
                **({"command_id": direct_item["uuid"]} if direct_item.get("uuid") else {}),
                "valueType": direct_value_type,
                "mapping_type": direct_mapping_type,
                "value": sanitized_direct_value,
                **({"sub_mapping_type": sub_mapping_type} if sub_mapping_type is not None else {})
            }
         
    return direct_entry


def attach_direct_controls(nodes, sub_direct_by_uuid):
    for node in nodes:
        next_direct = node.get("nextDirectControl") or []
        if not next_direct:
            continue

        direct_items = []
        for link in next_direct:
            link_uuid = link.get("uuid")
            if not link_uuid:
                continue
            direct_item = sub_direct_by_uuid.get(link_uuid)
            if direct_item:
                direct_items.append(direct_item)

        if direct_items:
            node["direct"] = direct_items


def resolve_matched_slot_entries(node, slot_match):
    result = []
    slot_names = slot_match.get("vars", [])
    remaining = " ".join(slot_match.get("remaining", []))
    node_direct_controls = node.get("direct", [])
    for slot_name in slot_names:
        direct_entries = resolve_direct_types(node_direct_controls, remaining, slot_name)
        if direct_entries:
            result.append(direct_entries)

    return result

