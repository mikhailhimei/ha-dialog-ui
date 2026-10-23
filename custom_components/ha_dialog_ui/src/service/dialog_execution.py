import re
import json

from ..utils.dialog_response import build_dialog_response

from ...const import CURRENT_NODE_KEY
from ..service.matching.selection import (
    build_child_candidates,
    build_custom_next_action_candidates,
    find_matching_custom_next_action,
    find_matching_subcommand,
    find_node_by_uuid,
)
from ..service.matching.direct import (
    collect_all_type_template_vars,
    resolve_direct_types,
)
from ..service.matching.templates import (
    match_template_command,
)
from ..service.dialog_responses import (
    apply_service_payload,
    build_text_response,
    get_voice_response,
    has_custom_next_action,
    has_next_action_branch,
    resolve_next_action_uuid,
    resolve_default_response_type,
    resolve_service_voice_type,
)
from ..service.dialog_events import (
    build_command_data,
    request_script_response,
    publish_command_event,
    is_external_service_answer,
)
from ..service.dialog_state import (
    clear_dialog_state,
    delete_dialog_state_value,
    get_dialog_state_value,
    handle_unmatched_input,
    set_current_node_state,
)


def _collect_direct_values(client_text, template_vars=None):
    values = []

    if isinstance(template_vars, dict):
        for key, value in template_vars.items():
            if isinstance(value, (list, tuple, set)):
                for item in value:
                    if item is not None and str(item).strip():
                        values.append({
                            "source_name": str(key),
                            "source_kind": "template_var",
                            "value": item,
                        })
            elif value is not None and str(value).strip():
                values.append({
                    "source_name": str(key),
                    "source_kind": "template_var",
                    "value": value,
                })

    if client_text and not template_vars:
        values.append({
            "source_name": "commands",
            "source_kind": "client_text",
            "value": client_text,
        })

    unique_values = []
    seen = set()
    for item in values:
        raw_value = item.get("value")
        normalized = str(raw_value if raw_value is not None else "").strip()
        signature = (
            item.get("source_kind"),
            item.get("source_name"),
            type(raw_value).__name__,
            normalized,
        )
        if not normalized or signature in seen:
            continue
        seen.add(signature)
        unique_values.append({
            "source_name": item.get("source_name"),
            "source_kind": item.get("source_kind"),
            "value": raw_value,
        })

    return unique_values


def _normalize_control_commands(raw_value):
    if isinstance(raw_value, list):
        values = raw_value
    else:
        values = str(raw_value or "").split(";")
    return [str(value or "").strip() for value in values if str(value or "").strip()]

def _has_unmatched_strict_subdirect(direct_items, resolved_entries):
    """Require a match for command dictionaries containing only subcommands."""
    matched_types = {
        str(entry.get("mapping_type"))
        for entry in (resolved_entries or [])
        if isinstance(entry, dict)
        and entry.get("valueType") == "command"
        and entry.get("mapping_type")
    }

    for direct_item in direct_items or []:
        if direct_item.get("valueType") != "command":
            continue

        direct_type = str(direct_item.get("mappingType") or "").strip()
        if not direct_type:
            continue

        if _normalize_control_commands(direct_item.get("voiceCommands")):
            continue

        sub_list = direct_item.get("subDirectContol") or direct_item.get("subDirectControl")
        has_sub_commands = any(
            _normalize_control_commands(sub_item.get("subVoiceCommands"))
            for sub_item in sub_list or []
        )
        if has_sub_commands and direct_type not in matched_types:
            return True

    return False


def _direct_items_require_int(direct_items):
    for direct_item in direct_items or []:
        if str(direct_item.get("valueType") or "").strip().lower() == "int":
            return True
    return False


def _client_text_has_digits(client_text):
    return bool(re.search(r"\d", str(client_text or "")))


def _build_missing_number_response(node, dialog_settings):
    default_main_response = build_dialog_response(dialog_settings, "default_main")
    response_text = (
        get_voice_response(node, "error")
        or get_voice_response(node, "miss")
        or default_main_response.get("message", "Не хватает данных для выполнения команды.")
    )
    return build_text_response(response_text, False)


def _get_node_direct_controls(primary_node):
    if isinstance(primary_node, dict) and primary_node.get("direct"):
        direct_items = primary_node.get("direct") or []
        return direct_items

    return []


def resolve_template_direct_entries(direct_items, client_text, template_vars=None):

    if not direct_items:
        return []

    aggregated_entries = []
    direct_sources = _collect_direct_values(client_text, template_vars)
    template_value_sources = [source for source in direct_sources if source.get("source_kind") == "template_var"]

    direct_entries = []

    for source in template_value_sources:

        direct_entries = resolve_direct_types(
            direct_items,
            source.get("value"),
            source.get("source_name")
        )

        if not direct_entries:
            continue

        aggregated_entries.append(direct_entries)

    return aggregated_entries

def _resolve_response_transition(node, response_type, fallback_uuid=""):
    """Select the branch without changing dialog state or end status."""
    next_action = node.get("nextAction", [])
    has_custom_branch = has_custom_next_action(next_action, response_type)
    next_node_uuid = (
        node.get("uuid")
        if has_custom_branch
        else resolve_next_action_uuid(next_action, response_type, fallback_uuid=fallback_uuid)
    )
    return next_node_uuid, has_custom_branch


def _needs_continuation_response(node, direct_entries):
    """A resolved direct command finishes a local phrase response."""
    return has_next_action_branch(node.get("nextAction")) and (
        node.get("answerType", "default") != "default" or not direct_entries
    )


async def execute_top_level_command(hass, node, client_id, device_id, client_text, command_data):
    clear_dialog_state(client_id, device_id)

    next_node_uuid = node.get("uuid")
    has_children = _needs_continuation_response(node, node.get("direct_entries"))
    default_response_type = resolve_default_response_type(prefer_next_step=has_children)
    response_text = get_voice_response(node, default_response_type, {"commands": client_text, "client_id": client_id})
    end_status = not has_children
    answer_type = node.get("answerType", 'default')
    use_declension = True

    if answer_type != 'default':
        script_response = await request_script_response(hass, answer_type, command_data, client_id, device_id)

        if script_response is not None:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                script_response,
                node,
                end_status,
                default_response_type,
            )
            response_type = resolve_service_voice_type(script_response, fallback=None)
            next_node_uuid, has_custom_branch = _resolve_response_transition(node, response_type, fallback_uuid=next_node_uuid)
            end_status = not bool(next_node_uuid)
            if next_node_uuid and not end_status:
                set_current_node_state(client_id, next_node_uuid, device_id, custom=response_type if has_custom_branch else "", parent_type=node.get('actionType'), command_id=node.get('uuid'))
        else:
            if is_external_service_answer(answer_type):
                response_text = get_voice_response(node, 'error', {"commands": client_text, "client_id": client_id}) or response_text
                end_status = not has_children
            else:
                response_text = get_voice_response(node, 'miss', {"commands": client_text, "client_id": client_id})
                end_status = not has_children
            if not end_status:
                set_current_node_state(client_id, node.get('uuid'), device_id, parent_type=node.get('actionType'), command_id=node.get('uuid'))
    else:
        publish_command_event(hass, client_id, command_data)

        if has_children and not end_status and next_node_uuid:
            set_current_node_state(client_id, next_node_uuid, device_id, parent_type=node.get('actionType'), command_id=node.get('uuid'))

    return build_text_response(response_text, end_status, use_declension)


async def execute_top_level_template(
    hass,
    node,
    client_id,
    device_id,
    command_data,
    client_text=None
):
    clear_dialog_state(client_id, device_id)

    next_node_uuid = node.get("uuid")
    end_status = not _needs_continuation_response(node, node.get("direct_entries"))
    answer_type = node.get("answerType", 'default')
    
    default_response_type = resolve_default_response_type(prefer_next_step=not end_status)
    response_text = get_voice_response(node, default_response_type, {"commands": client_text, "client_id": client_id, "device_id": device_id})
    use_declension = True

    if answer_type != 'default':
        script_response = await request_script_response(hass, answer_type, command_data, client_id, device_id)
        if script_response is not None:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                script_response,
                node,
                end_status,
                default_response_type
            )
            response_type = resolve_service_voice_type(script_response, fallback=None)
            next_node_uuid, has_custom_branch = _resolve_response_transition(node, response_type, fallback_uuid=next_node_uuid)
            end_status = not bool(next_node_uuid)
            if next_node_uuid and not end_status:
                set_current_node_state(client_id, next_node_uuid, device_id, custom=response_type if has_custom_branch else "", parent_type=node.get('actionType'), command_id=node.get('uuid'))
        elif is_external_service_answer(answer_type):
            response_text = get_voice_response(node, 'error', {"commands": client_text, "client_id": client_id}) or response_text
            end_status = not has_next_action_branch(node.get("nextAction"))
            if not end_status:
                set_current_node_state(client_id, node.get("uuid"), device_id, parent_type=node.get("actionType"), command_id=node.get("uuid"))
    else:
        publish_command_event(hass, client_id, command_data)
        if not end_status:
            set_current_node_state(client_id, node.get("uuid"), device_id, parent_type=node.get("actionType"), command_id=node.get("uuid"))

    return build_text_response(response_text, end_status, use_declension)


async def execute_active_node(hass, sub_level_nodes, client_new_dialog, client_text, client_id, device_id, dialog_settings):
    current_node_state = get_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)

    if not current_node_state or client_new_dialog:
        return None

    current_node_state = json.loads(current_node_state)

    current_node_uuid = current_node_state.get("uuid")
    
    command_id = current_node_state.get("command_id")
    stored_parent_type = current_node_state.get("parent_type")
    stored_custom_action_type = current_node_state.get("custom")
    
    active_node = find_node_by_uuid(sub_level_nodes, current_node_uuid)

    if not active_node:
        return None

    template_vars = None
    if stored_custom_action_type:
        candidates = build_custom_next_action_candidates(active_node, sub_level_nodes, stored_custom_action_type)
        matched_node, forwarding_text, template_vars = find_matching_custom_next_action(
            active_node, client_text, sub_level_nodes, action_type=stored_custom_action_type,
        )
    else:
        candidates = build_child_candidates(active_node, sub_level_nodes)
        matched_node, forwarding_text, template_vars = find_matching_subcommand(
            active_node, client_text, sub_level_nodes,
        )

    fallback_node = next((child for child in candidates if child.get("forwardText")), None)
    if fallback_node is None and active_node.get("forwardText"):
        fallback_node = active_node

    # A catch-all child must not hide a valid match against the active node.
    if forwarding_text:
        matched_node = None
        template_vars = None
    if matched_node is None and not active_node.get("forwardText"):
        active_template_vars = match_template_command(
            active_node.get("voiceCommands", []), client_text,
            keep_stopword_vars=collect_all_type_template_vars(active_node),
        )
        if active_template_vars is not None:
            matched_node = active_node
            template_vars = active_template_vars
            forwarding_text = False

    if matched_node is None:
        matched_node = fallback_node
        forwarding_text = matched_node is not None
    if matched_node is None:
        return handle_unmatched_input(client_id, device_id, get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id}), dialog_settings)

    resolved_direct_entries = []
    if not forwarding_text:
        if not template_vars:
            template_vars = match_template_command(
                matched_node.get("voiceCommands", []), client_text,
                keep_stopword_vars=collect_all_type_template_vars(matched_node),
            )
        direct_items = _get_node_direct_controls(matched_node)
        resolved_direct_entries = resolve_template_direct_entries(
            direct_items, client_text, template_vars=template_vars,
        )
        missing_number = (
            not resolved_direct_entries and template_vars
            and _direct_items_require_int(direct_items) and not _client_text_has_digits(client_text)
        )
        if missing_number or _has_unmatched_strict_subdirect(direct_items, resolved_direct_entries):
            if fallback_node is None:
                return handle_unmatched_input(client_id, device_id, get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id}), dialog_settings)
            matched_node = fallback_node
            forwarding_text = True
            template_vars = None
            resolved_direct_entries = []

    next_node_uuid = matched_node.get("uuid")

    has_children = _needs_continuation_response(matched_node, resolved_direct_entries)
    end_status = not has_children

    default_response_type = resolve_default_response_type(prefer_next_step=has_children)
    response_text = get_voice_response(matched_node, default_response_type, {"commands": client_text, "client_id": client_id})

    answer_type = matched_node.get("answerType", 'default')

    child_action_type = matched_node.get('actionType') or active_node.get('actionType')
    parent_type = stored_parent_type or active_node.get('actionType')

    if matched_node is active_node and active_node.get("forwardText"):
        child_action_type = active_node.get('actionType')

    command_data = [build_command_data(
        child_action_type,
        parent_type,
        {"commands": client_text},
        client_id,
        device_id,
        resolved_direct_entries,
        True,
        command_node=matched_node,
        command_id=command_id,
        continuation_id=matched_node.get("uuid") if matched_node.get("uuid") != command_id else None,
    )]

    answer_type = matched_node.get("answerType", 'default')
    use_declension = True
    if answer_type != 'default':
        script_response = await request_script_response(hass, answer_type, command_data, client_id, device_id)
        if script_response is not None:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                script_response,
                matched_node,
                end_status,
                default_response_type,
            )
            response_type = resolve_service_voice_type(script_response, fallback=None)
            next_node_uuid, has_custom_branch = _resolve_response_transition(matched_node, response_type, fallback_uuid=next_node_uuid)
            end_status = not bool(next_node_uuid)
            if not end_status:
                next_parent_type = matched_node.get('actionType') if matched_node is not active_node else parent_type
                set_current_node_state(
                    client_id,
                    next_node_uuid,
                    device_id,
                    custom=response_type if has_custom_branch else "",
                    parent_type=next_parent_type,
                    command_id=command_id,
                )
            else:
                delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
        else:
            if is_external_service_answer(answer_type):
                response_text = (
                    get_voice_response(matched_node, 'error', {"commands": client_text, "client_id": client_id})
                    or get_voice_response(active_node, 'error', {"commands": client_text, "client_id": client_id})
                    or response_text
                )
            else:
                response_text = get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id})
            end_status = not has_children
            if not end_status:
                set_current_node_state(client_id, matched_node.get('uuid'), device_id, parent_type=matched_node.get('actionType'), command_id=command_id)
            else:
                delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    else:
        publish_command_event(hass, client_id, command_data)
        if not end_status:
            set_current_node_state(client_id, next_node_uuid, device_id, parent_type=matched_node.get('actionType'), command_id=command_id)
        else:
            delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)

    return build_text_response(response_text, end_status, use_declension)
