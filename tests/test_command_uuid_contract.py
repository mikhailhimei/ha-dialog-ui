"""Command IDs survive recognition, response branches and multiple dialog steps."""
from copy import deepcopy
from types import SimpleNamespace

import pytest

from custom_components.ha_dialog_ui.dialog.script_runner import build_script_service_data
from custom_components.ha_dialog_ui.src.service import dialog_execution, dialog_service, dialog_state
from custom_components.ha_dialog_ui.src.service.dialog_commands import normalize_command


def node(command_id, phrase, next_id=None, custom=False):
    return normalize_command({
        'uuid': command_id,
        'componentDialog': {
            'voiceCommands': [phrase],
            'script_entity_id': 'script.test',
            'answerType': 'script_response' if custom else 'default',
            'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Готово'}],
            'nextAction': ([{'actionTypeComponent': 'custom' if custom else 'children',
                             'actionType': 'confirm' if custom else '', 'uuid': next_id}] if next_id else []),
        },
    }, 'componentDialog')


@pytest.mark.parametrize('custom', [False, True])
async def test_uuid_survives_multiple_continuations_without_action_type(monkeypatch, custom):
    hass = SimpleNamespace(data={})
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    published = []
    monkeypatch.setattr(dialog_execution, 'publish_command_event', lambda hass, client, payload: published.extend(payload))
    async def script_response(hass, answer_type, payload, client, device):
        published.extend(payload)
        return {'typeVoice': 'confirm', 'message': 'Дальше'}
    monkeypatch.setattr(dialog_execution, 'request_script_response', script_response)
    root = node('root-uuid', 'начать', 'step-one-uuid', custom=custom)
    first = node('step-one-uuid', 'первый', 'step-two-uuid')
    second = node('step-two-uuid', 'второй')
    assert root['actionType'] == 'root-uuid'
    for phrase, continuation_id in [('начать', None), ('первый', 'step-one-uuid'), ('второй', 'step-two-uuid')]:
        if continuation_id is None:
            await dialog_service.handle_top_level_command(hass, [root], phrase, 'client', 'speaker', [])
        else:
            await dialog_execution.execute_active_node(hass, [root, first, second], False, phrase, 'client', 'speaker', [])
        internal = published[-1]
        before = deepcopy(internal)
        script_payload = build_script_service_data('script.test', internal)['variables']['dialog_payload']
        assert script_payload['command_id'] == 'root-uuid'
        assert script_payload['continuation_id'] == continuation_id
        assert script_payload['text'] == phrase
        assert script_payload['client_id'] == 'client'
        assert script_payload['device_id'] == 'speaker'
        assert 'parent_type' not in script_payload
        assert 'children_type' not in script_payload
        assert 'data' not in script_payload
        assert internal == before
    assert dialog_state.get_dialog_state_value(dialog_state.CURRENT_NODE_KEY, 'client', 'speaker') is None


def test_system_event_keeps_nontext_data():
    payload = {'parent_type': 'alarm_worked', 'type': 'alarm', 'alarm_id': 'alarm-uuid', 'data': {'time': '08:30'}}
    result = build_script_service_data('script.test', payload)['variables']['dialog_payload']
    assert result['data'] == {'time': '08:30'}
    assert result['alarm_id'] == 'alarm-uuid'
    assert result['command_id'] is None
    assert result['continuation_id'] is None
