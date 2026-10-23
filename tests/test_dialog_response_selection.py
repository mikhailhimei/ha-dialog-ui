"""Default response text follows continuation state, not phrase placeholders."""
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_execution as execution, dialog_state


@pytest.mark.parametrize('scenario', ['command', 'template', 'active'])
@pytest.mark.parametrize('has_continuation', [False, True])
@pytest.mark.parametrize('script_response', [None, {}, {'typeVoice': ''}, {'typeVoice': 'confirm'}, {'typeVoice': 'default'}])
async def test_response_type_depends_on_continuation_unless_script_returns_type(
    monkeypatch, scenario, has_continuation, script_response
):
    hass = SimpleNamespace(data={})
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    monkeypatch.setattr(execution, 'publish_command_event', lambda *args: None)
    request = AsyncMock(return_value=script_response)
    monkeypatch.setattr(execution, 'request_script_response', request)
    node = {
        'uuid': 'selected', 'voiceCommands': ['готово'],
        'answerType': 'default' if script_response is None else 'script_response',
        'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'next'}] if has_continuation else [],
        'voiceResponseArray': [
            {'actionType': 'default', 'voiceResponse': 'Основной'},
            {'actionType': 'default_next_step', 'voiceResponse': 'Продолжение'},
            {'actionType': 'confirm', 'voiceResponse': 'Из скрипта'},
        ],
    }
    if scenario == 'command':
        result = await execution.execute_top_level_command(hass, node, 'client', 'speaker', 'готово', [])
    elif scenario == 'template':
        result = await execution.execute_top_level_template(hass, node, 'client', 'speaker', [], 'готово')
    else:
        parent = {'uuid': 'parent', 'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'selected'}]}
        dialog_state.set_current_node_state('client', 'parent', 'speaker', command_id='root')
        result = await execution.execute_active_node(hass, [parent, node], False, 'готово', 'client', 'speaker', [])
    expected = 'Продолжение' if has_continuation else 'Основной'
    if script_response and script_response.get('typeVoice') == 'confirm':
        expected = 'Из скрипта'
    elif script_response and script_response.get('typeVoice') == 'default':
        expected = 'Основной'
    assert result['text'] == expected
    assert result['end_session'] is (not has_continuation)
    if script_response is None:
        request.assert_not_awaited()
    else:
        request.assert_awaited_once()
