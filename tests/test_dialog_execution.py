"""Strict subcommands must be validated before publishing command data."""
import json
from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_execution as execution


def direct_item(mapping_type='room', **changes):
    return {
        'mappingType': mapping_type,
        'valueType': 'command',
        'voiceCommands': [],
        'subDirectControl': [
            {'subMappingType': '_hall', 'subVoiceCommands': ['зал']},
        ],
        **changes,
    }


@pytest.mark.parametrize(('items', 'entries', 'expected'), [
    ([direct_item()], [], True),
    ([direct_item()], [{'mapping_type': 'room', 'valueType': 'command'}], False),
    ([direct_item()], [{'mapping_type': 'device', 'valueType': 'command'}], True),
    ([direct_item()], [{'mapping_type': 'room', 'valueType': 'all'}], True),
    ([direct_item(), direct_item('device')], [{'mapping_type': 'room', 'valueType': 'command'}], True),
    ([direct_item(valueType='all')], [], False),
    ([direct_item(valueType='int')], [], False),
    ([direct_item(voiceCommands=['комната'])], [], False),
    ([direct_item(subDirectControl=[])], [], False),
    ([direct_item(subDirectControl=[{'subVoiceCommands': [' ']}])], [], False),
    ([direct_item(subDirectControl=[], subDirectContol=[{'subVoiceCommands': 'зал;кухня'}])], [], True),
    ([], [], False),
])
def test_strict_subdirect_uses_configuration_and_resolved_mapping(items, entries, expected):
    assert execution._has_unmatched_strict_subdirect(items, entries) is expected


@pytest.mark.parametrize(('text', 'has_forward', 'expected_action'), [
    ('выбери зал', False, 'select'),
    ('выбери кладовую', False, None),
    ('выбери кладовую', True, 'fallback'),
])
async def test_active_dialog_routes_unmatched_subdirect_before_sending(text, has_forward, expected_action):
    active = {
        'uuid': 'active', 'actionType': 'choose',
        'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'select'}],
    }
    selected = {
        'uuid': 'select', 'actionType': 'select',
        'voiceCommands': ['выбери ${room}'], 'direct': [direct_item()],
        'answerType': 'default', 'endStatus': True,
    }
    nodes = [active, selected]
    if has_forward:
        active['nextAction'].append({'actionTypeComponent': 'children', 'uuid': 'fallback'})
        nodes.append({'uuid': 'fallback', 'actionType': 'fallback', 'forwardText': True,
                      'answerType': 'default', 'endStatus': True})
    state = json.dumps({'uuid': 'active', 'parent_type': 'choose'})
    with (
        patch.object(execution, 'get_dialog_state_value', side_effect=lambda key, *_: state if key == execution.CURRENT_NODE_KEY else None),
        patch.object(execution, 'get_voice_response', return_value='Ответ'),
        patch.object(execution, 'handle_unmatched_input', return_value={'text': 'Не найдено'}) as miss,
        patch.object(execution, 'publish_command_event') as send,
        patch.object(execution, 'delete_dialog_state_value'),
        patch.object(execution, 'build_text_response', return_value={'text': 'Готово'}),
    ):
        result = await execution.execute_active_node(object(), nodes, False, text, 'client', 'device', [])
    if expected_action is None:
        assert result == {'text': 'Не найдено'}
        miss.assert_called_once()
        send.assert_not_called()
    else:
        assert result == {'text': 'Готово'}
        miss.assert_not_called()
        send.assert_called_once()
        command = send.call_args.args[2][0]
        assert command['children_type'] == expected_action
        assert command['parent_type'] == 'choose'
        if expected_action == 'select':
            assert command['children_direct_type'][0]['sub_mapping_type'] == ['_hall']


@pytest.mark.parametrize('branch', ['children', 'custom'])
@pytest.mark.parametrize('fallback_on_active', [False, True])
@pytest.mark.parametrize('text', ['свободный ответ', 'выбери кладовую', 'выбери зал'])
async def test_forward_text_is_last_resort_and_has_no_direct_values(branch, fallback_on_active, text):
    active = {'uuid': 'active', 'actionType': 'choose', 'voiceCommands': ['выбери ${room}'],
              'forwardText': fallback_on_active, 'direct': [direct_item()], 'answerType': 'default',
              'nextAction': []}
    normal = {'uuid': 'normal', 'actionType': 'normal', 'voiceCommands': ['выбери ${room}'],
              'direct': [direct_item()], 'answerType': 'default'}
    fallback = {'uuid': 'fallback', 'actionType': 'fallback', 'forwardText': True,
                'voiceCommands': ['${room}'], 'direct': [direct_item()], 'answerType': 'default'}
    links = [normal] if fallback_on_active else [normal, fallback]
    active['nextAction'] = [{'actionTypeComponent': branch, 'actionType': 'confirm', 'uuid': child['uuid']} for child in links]
    state = json.dumps({'uuid': 'active', 'parent_type': 'choose', 'custom': 'confirm' if branch == 'custom' else ''})
    with (
        patch.object(execution, 'get_dialog_state_value', return_value=state),
        patch.object(execution, 'publish_command_event') as publish,
        patch.object(execution, 'delete_dialog_state_value'),
        patch.object(execution, 'set_current_node_state'),
        patch.object(execution, 'resolve_template_direct_entries', wraps=execution.resolve_template_direct_entries) as resolve,
    ):
        result = await execution.execute_active_node(object(), [active, normal, fallback], False, text, 'client', 'device', [])
    assert 'end_session' in result
    command = publish.call_args.args[2][0]
    assert command['data']['commands'] == text
    assert command['client_id'] == 'client'
    assert command['device_id'] == 'device'
    if text == 'выбери зал':
        assert command['children_type'] == 'normal'
        assert command['children_direct_type'][0]['sub_mapping_type'] == ['_hall']
    else:
        assert command['children_type'] == ('choose' if fallback_on_active else 'fallback')
        assert command['children_direct_type'] == []
        # Direct values are only attempted on normal nodes, never on the fallback.
        if text == 'свободный ответ':
            resolve.assert_not_called()
        else:
            resolve.assert_called_once()


async def test_active_direct_match_precedes_forward_child():
    active = {'uuid': 'active', 'actionType': 'choose', 'voiceCommands': ['выбери ${room}'],
              'direct': [direct_item()], 'answerType': 'default',
              'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'fallback'}]}
    fallback = {'uuid': 'fallback', 'actionType': 'fallback', 'forwardText': True, 'answerType': 'default'}
    with (
        patch.object(execution, 'get_dialog_state_value', return_value=json.dumps({'uuid': 'active'})),
        patch.object(execution, 'publish_command_event') as publish,
        patch.object(execution, 'set_current_node_state'),
    ):
        await execution.execute_active_node(object(), [active, fallback], False, 'выбери зал', 'client', 'device', [])
    command = publish.call_args.args[2][0]
    assert command['children_type'] == 'choose'
    assert command['children_direct_type'][0]['sub_mapping_type'] == ['_hall']
