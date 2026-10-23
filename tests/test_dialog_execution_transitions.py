"""Verify children/custom transitions and ignore removed error branches."""
import json
from copy import deepcopy
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_execution as execution


# No default continuations in these cases: only matching custom types keep a session open.
CASES = [
    ('implicit', {'data': {}}, False, False,
     [(True, None, 'default')] * 3),
    ('empty', {}, False, False,
     [(True, None, 'default')] * 3),
    ('default', {'typeVoice': 'default'}, False, False,
     [(True, None, 'default')] * 3),
    ('next', {'typeVoice': 'default_next_step'}, False, False,
     [(True, None, 'next')] * 3),
    ('finished', {'typeVoice': 'default_next_step'}, False, True,
     [(True, None, 'next')] * 3),
    ('error', {'typeVoice': 'error'}, True, False,
     [(True, None, 'error')] * 3),
    ('miss', {'typeVoice': 'miss'}, False, False,
     [(True, None, 'miss')] * 3),
    ('custom', {'typeVoice': 'confirm'}, False, True,
     [(False, 'custom', 'confirm')] * 3),
    ('custom_error', {'typeVoice': 'error'}, False, True,
     [(False, 'custom', 'error')] * 3),
    ('timeout', None, False, False,
     [(True, None, 'error')] * 3),
    ('timeout_error', None, True, False,
     [(True, None, 'error')] * 3),
]


@pytest.mark.parametrize('scenario', ['command', 'template', 'active'])
@pytest.mark.parametrize(('name', 'service', 'error_branch', 'end_status', 'outcomes'), CASES, ids=[case[0] for case in CASES])
async def test_script_response_transitions(scenario, name, service, error_branch, end_status, outcomes):
    expected_end, saved_kind, expected_text = outcomes[['command', 'template', 'active'].index(scenario)]
    links = []
    if error_branch:
        links.append({'actionTypeComponent': 'children_error', 'uuid': 'error-child'})
    custom_type = 'error' if name == 'custom_error' else 'confirm'
    if name in {'custom', 'custom_error'}:
        links.append({'actionTypeComponent': 'custom', 'actionType': custom_type, 'uuid': 'confirm-child'})
    node = {
        'uuid': 'selected', 'actionType': 'selected-type', 'voiceCommands': ['готово'],
        'answerType': 'script_response', 'endStatus': end_status, 'nextAction': links,
        'voiceResponseArray': [
            {'actionType': kind, 'voiceResponse': text}
            for kind, text in [('default', 'default'), ('default_next_step', 'next'),
                               ('error', 'error'), ('miss', 'miss'), ('confirm', 'confirm')]
        ],
    }
    parent = {'uuid': 'parent', 'actionType': 'parent-type',
              'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'selected'}]}
    before = deepcopy(node)
    state = json.dumps({'uuid': 'parent', 'parent_type': 'original-parent', 'command_id': 'root-command'})
    hass = object()
    command_data = [{'original': True}]
    with (
        patch.object(execution, 'request_script_response', new_callable=AsyncMock, return_value=service) as request,
        patch.object(execution, 'get_dialog_state_value', side_effect=lambda key, *_: state if key == execution.CURRENT_NODE_KEY else None),
        patch.object(execution, 'clear_dialog_state') as clear,
        patch.object(execution, 'set_current_node_state') as save,
        patch.object(execution, 'delete_dialog_state_value') as delete,
        patch.object(execution, 'publish_command_event') as publish,
        patch.object(execution, 'handle_unmatched_input', return_value={'miss': True}) as miss,
        patch.object(execution, 'build_text_response', side_effect=lambda text, end, declension=True: (text, end, declension)),
    ):
        if scenario == 'command':
            result = await execution.execute_top_level_command(hass, node, 'client', 'device', 'готово', command_data)
        elif scenario == 'template':
            result = await execution.execute_top_level_template(hass, node, 'client', 'device', command_data, 'готово')
        else:
            result = await execution.execute_active_node(hass, [parent, node], False, 'готово', 'client', 'device', [])
    assert node == before
    request.assert_awaited_once()
    args = request.await_args.args
    assert (args[0], args[1], args[3], args[4]) == (hass, 'script_response', 'client', 'device')
    if scenario == 'active':
        assert args[2][0]['parent_type'] == 'original-parent'
        assert args[2][0]['children_type'] == 'selected-type'
        assert args[2][0]['client_id'] == 'client'
        assert args[2][0]['device_id'] == 'device'
        clear.assert_not_called()
    else:
        assert args[2] is command_data
        clear.assert_called_once_with('client', 'device')
    publish.assert_not_called()  # Publishing is owned by request_script_response.
    if saved_kind == 'miss':
        assert result == {'miss': True}
        miss.assert_called_once_with('client', 'device', 'miss', [])
    else:
        assert result == (expected_text, expected_end, True)
        miss.assert_not_called()
    if saved_kind in {'normal', 'custom'}:
        kwargs = {'parent_type': 'selected-type', 'command_id': 'root-command' if scenario == 'active' else 'selected'}
        if scenario == 'active':
            kwargs.update(custom=custom_type if saved_kind == 'custom' else '')
        else:
            kwargs['custom'] = custom_type if saved_kind == 'custom' else ''
        save.assert_called_once_with('client', 'selected', 'device', **kwargs)
    else:
        save.assert_not_called()
    if scenario == 'active' and saved_kind is None:
        cleared_keys = {call.args[0] for call in delete.call_args_list}
        assert execution.CURRENT_NODE_KEY in cleared_keys


@pytest.mark.parametrize('scenario', ['command', 'template', 'active'])
async def test_local_answer_does_not_wait_for_script(scenario):
    node = {'uuid': 'selected', 'actionType': 'selected-type', 'voiceCommands': ['готово'],
            'answerType': 'default', 'endStatus': False,
            'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'child'}]}
    parent = {'uuid': 'parent', 'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'selected'}]}
    state = json.dumps({'uuid': 'parent', 'command_id': 'root-command'})
    hass = object()
    with (
        patch.object(execution, 'request_script_response', new_callable=AsyncMock) as request,
        patch.object(execution, 'get_dialog_state_value', side_effect=lambda key, *_: state if key == execution.CURRENT_NODE_KEY else None),
        patch.object(execution, 'clear_dialog_state'),
        patch.object(execution, 'set_current_node_state') as save,
        patch.object(execution, 'delete_dialog_state_value'),
        patch.object(execution, 'publish_command_event') as publish,
        patch.object(execution, 'build_text_response', side_effect=lambda text, end, declension=True: end),
    ):
        if scenario == 'command':
            result = await execution.execute_top_level_command(hass, node, 'client', 'device', 'готово', [])
        elif scenario == 'template':
            result = await execution.execute_top_level_template(hass, node, 'client', 'device', [], 'готово')
        else:
            result = await execution.execute_active_node(hass, [parent, node], False, 'готово', 'client', 'device', [])
    request.assert_not_awaited()
    publish.assert_called_once()
    assert result is False
    save.assert_called_once_with('client', 'selected', 'device', parent_type='selected-type', command_id='root-command' if scenario == 'active' else 'selected')


@pytest.mark.parametrize('scenario', ['command', 'template', 'active'])
@pytest.mark.parametrize('old_end_status', [True, False])
@pytest.mark.parametrize(('default_link', 'custom_link', 'response', 'expected_custom', 'ends'), [
    (False, False, {'typeVoice': 'confirm'}, '', True),
    (True, False, {'typeVoice': 'unknown'}, '', False),
    (False, True, {'typeVoice': 'confirm'}, 'confirm', False),
    (False, True, {'typeVoice': 'other'}, '', True),
    (True, True, {'typeVoice': 'confirm'}, 'confirm', False),
    (True, True, {'typeVoice': 'other'}, '', False),
    (True, False, None, '', False),
    (False, True, None, '', True),
    (False, True, {}, '', True),
    (True, True, {}, '', False),
    (True, False, {'typeVoice': 'miss'}, '', False),
])
async def test_automatic_session_flag_and_transition_priority(
    scenario, old_end_status, default_link, custom_link, response, expected_custom, ends
):
    links = []
    if default_link:
        links.append({'actionTypeComponent': 'children', 'uuid': 'child'})
    if custom_link:
        links.append({'actionTypeComponent': 'custom', 'actionType': 'confirm', 'uuid': 'custom-child'})
    node = {'uuid': 'selected', 'actionType': 'selected-type', 'voiceCommands': ['готово'],
            'answerType': 'script_response', 'endStatus': old_end_status, 'nextAction': links,
            # Deliberately no matching custom text: text fallback must not change the transition.
            'voiceResponseArray': [{'actionType': 'error', 'voiceResponse': 'Ошибка'}]}
    parent = {'uuid': 'parent', 'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'selected'}]}
    with (
        patch.object(execution, 'request_script_response', new_callable=AsyncMock, return_value=response),
        patch.object(execution, 'get_dialog_state_value', return_value=json.dumps({'uuid': 'parent', 'command_id': 'root-command'})),
        patch.object(execution, 'clear_dialog_state'),
        patch.object(execution, 'set_current_node_state') as save,
        patch.object(execution, 'delete_dialog_state_value') as delete,
    ):
        if scenario == 'command':
            result = await execution.execute_top_level_command(object(), node, 'client', 'device', 'готово', [])
        elif scenario == 'template':
            result = await execution.execute_top_level_template(object(), node, 'client', 'device', [], 'готово')
        else:
            result = await execution.execute_active_node(object(), [parent, node], False, 'готово', 'client', 'device', [])
    assert result['end_session'] is ends
    if ends:
        save.assert_not_called()
        if scenario == 'active':
            delete.assert_called_with(execution.CURRENT_NODE_KEY, 'client', 'device')
    else:
        save.assert_called_once()
        assert save.call_args.args == ('client', 'selected', 'device')
        assert save.call_args.kwargs.get('custom', '') == expected_custom
