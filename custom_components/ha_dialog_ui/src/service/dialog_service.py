from ...const import CURRENT_NODE_KEY
from .dialog_commands import prepare_dialog_nodes, get_dialog_settings_list
from ..service.dialog_execution import execute_active_node, execute_top_level_command, execute_top_level_template, _build_missing_number_response
from ..service.matching.selection import (
    find_top_level_candidates,
)
from ..service.matching.text import (
    voice_command_matches,
)
from ..service.dialog_responses import (
    build_text_response,
    get_voice_response,
    apply_service_payload,
    has_next_action_branch,
)
from ..service.dialog_events import (
    build_command_data,
    publish_command_event,
    request_script_response,
)
from ..service.dialog_state import (
    delete_dialog_state_value,
    get_current_hass,
    set_current_node_state,
)
from ..utils.dialog_response import build_dialog_response
from ..utils.text_normalization import normalize_numbers


def _is_forward_command_to_server_enabled(setting):
    if not isinstance(setting, dict):
        return False

    value = setting.get("forwardCommandToServer")
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value != 0
    if isinstance(value, str):
        return value.strip().lower() in {"1", "true", "yes", "on", "enabled"}
    return bool(value)


def _setting_to_service_node(setting):
    setting = setting or {}
    responses = setting.get("voiceResponseArray")
    if responses is None:
        message = setting.get("message") or setting.get("voiceResponse") or ""
        responses = [{"actionType": "default", "voiceResponse": message}] if message else []
    return {
        "endStatus": setting.get("endStatus", True),
        "nextAction": [],
        "voiceResponseArray": responses,
    }


async def _build_default_main_response(hass, client_text, client_id, device_id, dialog_settings, command_data):
    dialog_response = build_dialog_response(dialog_settings, "default_main")

    if _is_forward_command_to_server_enabled(dialog_response):
        script_entity_id = dialog_response.get("script_entity_id")
        forward_command_data = (command_data if not script_entity_id else None) or [
            build_command_data(
                '',
                "default_main",
                {"commands": client_text} if client_text else {},
                client_id,
                device_id,
                [],
                None,
                command_node={"script_entity_id": script_entity_id, "answerType": "script_response"} if script_entity_id else None,
                command_id=dialog_response.get("uuid"),
            )
        ]
        script_response = await request_script_response(hass, "script_response", forward_command_data, client_id, device_id)
        if script_response is not None:
            response_text, _end_status, _response_type, use_declension = apply_service_payload(
                script_response,
                _setting_to_service_node(dialog_response),
                dialog_response.get("endStatus", True),
                "default",
                {"commands": client_text, "client_id": client_id},
            )
            if response_text not in (None, ""):
                return build_text_response(response_text, dialog_response.get("endStatus", True), use_declension)

    return build_text_response(
        dialog_response.get("message", "Диалоговые сценарии временно недоступны."),
        dialog_response.get("endStatus", True),
    )

def handle_stop_command(hass, top_level_nodes, client_text, client_id, device_id):
    stop_node = next((node for node in top_level_nodes if node.get("actionType") == "stop"), None)
    if not stop_node or not any(voice_command_matches(command, client_text) for command in stop_node.get("voiceCommands", [])):
        return None

    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    publish_command_event(hass, client_id, build_command_data(
        "", "stop", {"commands": client_text}, client_id, device_id, [], True,
        command_node=stop_node,
    ))
    return build_text_response(get_voice_response(stop_node, "default", {"commands": client_text, "client_id": client_id}), True)

def handle_new_session(top_level_nodes, client_new_dialog, client_text, client_id, device_id):
    if not client_new_dialog or client_text != "":
        return None

    default_node = next((node for node in top_level_nodes if node.get("actionType") == "default"), None)
    if not default_node:
        return None

    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    end_status = not has_next_action_branch(default_node.get("nextAction"))
    if not end_status:
        set_current_node_state(client_id, default_node.get("uuid"), device_id, parent_type=default_node.get("actionType"), command_id=default_node.get("uuid"))
    return build_text_response(
        get_voice_response(default_node, "default", {"commands": client_text, "client_id": client_id}),
        end_status,
    )


async def handle_top_level_command(hass, top_level_nodes, client_text, client_id, device_id, dialog_settings):
    command_candidates = find_top_level_candidates(
        top_level_nodes,
        client_text,
    )
    
    command_data = []
    
    for node in command_candidates:
        has_template_variables = node.get('template_var', False) or False
        direct_entries = node.get('direct_entries', []) or []
        
        is_main_command = node.get('is_main_command')

        if has_template_variables:
            if not direct_entries:
                if is_main_command:
                    return _build_missing_number_response(node, dialog_settings)
                continue

        command_data.append(build_command_data(
            '',
            node.get('actionType'),
            {"commands": client_text} if client_text else {},
            client_id,
            device_id,
            direct_entries,
            node.get('is_main_command'),
            command_node=node,
        ))


    main_node = next((candidate_node for candidate_node in command_candidates if candidate_node.get('is_main_command')), None)

    if main_node and main_node.get('template_var'):    
        return await execute_top_level_template(
                        hass,
                        main_node,
                        client_id,
                        device_id,
                        command_data,
                        client_text=client_text
                    )

    if main_node:
        return await execute_top_level_command(hass, main_node, client_id, device_id, client_text, command_data)

    return await _build_default_main_response(
        hass,
        client_text,
        client_id,
        device_id,
        dialog_settings,
        command_data,
    )


async def process_dialog_request(client_command):
    hass = get_current_hass()

    client_text = normalize_numbers(client_command['request']['command'].strip().lower())
    client_new_dialog = client_command['session']['new']
    client_id = client_command['session']['user']['user_id']
    device_id = client_command['session']['application']['application_id']
    
    top_level_nodes, sub_level_nodes = prepare_dialog_nodes()

    dialog_settings = get_dialog_settings_list()

    # The configurable stop command is global: check it before active continuations.
    stop_setting = next((setting for setting in dialog_settings if setting.get("actionType") == "stop"), None)
    if stop_setting is not None:
        top_level_nodes = [node for node in top_level_nodes if node.get("actionType") != "stop"]
        if stop_setting.get("status", True):
            phrases = stop_setting.get("voiceCommands") or []
            if isinstance(phrases, str):
                phrases = phrases.split(";")
            phrases = [phrase.strip() for entry in phrases for phrase in entry.split(";") if phrase.strip()]
            stop_node = {**_setting_to_service_node(stop_setting), **stop_setting,
                         "actionType": "stop", "answerType": "default", "endStatus": True,
                         "nextAction": [], "voiceCommands": phrases}
            top_level_nodes.insert(0, stop_node)

    # Explicit bindings also apply to the built-in stop and initial-session commands.
    bound_special_node = next((
        node for node in top_level_nodes
        if "script_entity_id" in node and (
            (node.get("actionType") == "stop" and any(
                voice_command_matches(phrase, client_text) for phrase in node.get("voiceCommands", [])
            ))
            or (node.get("actionType") == "default" and client_new_dialog and client_text == "")
        )
    ), None)
    if bound_special_node is not None:
        command_data = [build_command_data(
            '', bound_special_node.get("actionType"), {"commands": client_text},
            client_id, device_id, [], True, command_node=bound_special_node,
        )]
        return await execute_top_level_command(
            hass, bound_special_node, client_id, device_id, client_text, command_data,
        )

    stop_response = handle_stop_command(hass, top_level_nodes, client_text, client_id, device_id)
    if stop_response:
        return stop_response

    new_session_response = handle_new_session(top_level_nodes, client_new_dialog, client_text, client_id, device_id)
    if new_session_response:
        return new_session_response

    active_node_response = await execute_active_node(
        hass,
        sub_level_nodes,
        client_new_dialog,
        client_text,
        client_id,
        device_id,
        dialog_settings,
    )
    if active_node_response:
        return active_node_response

    return await handle_top_level_command(
        hass,
        top_level_nodes,
        client_text,
        client_id,
        device_id,
        dialog_settings
    )
