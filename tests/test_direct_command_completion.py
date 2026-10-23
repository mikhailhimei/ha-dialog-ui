"""Resolved direct values complete phrase responses instead of asking again."""
import json
from unittest.mock import AsyncMock, patch

import pytest
from homeassistant.core import callback
from test_timer_runtime import runtime
from custom_components.ha_dialog_ui.const import CURRENT_NODE_KEY, EVENT_ACTIVE_COMMAND
from custom_components.ha_dialog_ui.src.service import dialog_service, dialog_state, dialog_execution
from custom_components.ha_dialog_ui.storage.assistant_commands_storage import async_save_assistant_commands
from custom_components.ha_dialog_ui.storage.assistant_sub_commands_storage import async_save_assistant_sub_commands
from custom_components.ha_dialog_ui.storage.assistant_sub_direct_controls_storage import async_save_assistant_sub_direct_controls
from test_continuation_live_updates import request


@pytest.mark.parametrize('followup', [False, True])
async def test_food_amount_finishes_and_publishes_script_once(runtime, monkeypatch, followup):
    hass, _ = runtime
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    await async_save_assistant_sub_direct_controls(hass, [{'uuid': 'number', 'directControl': {'mappingType': 'count', 'valueType': 'int'}}])
    shared = {'answerType': 'default', 'script_entity_id': 'script.feed',
              'nextDirectControl': [{'uuid': 'number'}],
              'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Готово'},
                                     {'actionType': 'default_next_step', 'voiceResponse': 'Сколько насыпать?'}]}
    parent = {'uuid': 'feed', 'status': True, 'componentDialog': {**shared,
        'voiceCommands': ['насыпь еды', 'насып(ь|аешь)? ${count} гр(ам|амм|ов|амма|аммов)? ед(ы|а|у)?'],
        'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'amount'}]}}
    child = {'uuid': 'amount', 'status': True, 'subComponentDialog': {**shared,
        'voiceCommands': ['${count}'], 'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'other'}]}}
    await async_save_assistant_commands(hass, [parent])
    await async_save_assistant_sub_commands(hass, [child])
    events = []
    @callback
    def capture(event):
        events.append(event.data)
    remove = hass.bus.async_listen(EVENT_ACTIVE_COMMAND, capture)
    try:
        if followup:
            initial = await dialog_service.process_dialog_request(request('насыпь еды', new=True))
            assert initial['text'] == 'Сколько насыпать?' and initial['end_session'] is False
            await hass.async_block_till_done()
            assert events[0]['command_data'][0]['command_script']['run'] is False
            events.clear()
        result = await dialog_service.process_dialog_request(request('2' if followup else 'насыпь 2 грам еды', new=not followup))
        await hass.async_block_till_done()
        assert result['text'] == 'Готово' and result['end_session'] is True
        assert dialog_state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device') is None
        assert len(events) == 1
        payload = events[0]['command_data'][0]
        assert payload['command_script'] == {'entity_id': 'script.feed', 'run': True}
        assert payload['direct_values'] == [{'command_id': 'number', 'name': 'count', 'value_type': 'int', 'value': 2}]
        assert payload['command_id'] == 'feed'
        assert payload['continuation_id'] == ('amount' if followup else None)
    finally:
        remove()


async def test_script_result_can_still_choose_a_custom_continuation(runtime, monkeypatch):
    hass, _ = runtime
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    node = {'uuid': 'feed', 'answerType': 'script_response', 'direct_entries': [{'mapping_type': 'count', 'value': 2}],
            'nextAction': [{'actionTypeComponent': 'custom', 'actionType': 'confirm', 'uuid': 'confirmation'}],
            'voiceResponseArray': [{'actionType': 'confirm', 'voiceResponse': 'Подтвердите'}]}
    with patch.object(dialog_execution, 'request_script_response', AsyncMock(return_value={'typeVoice': 'confirm'})):
        result = await dialog_execution.execute_top_level_template(hass, node, 'client', 'device', [], 'насыпь 2 грам еды')
    assert result['text'] == 'Подтвердите' and result['end_session'] is False
    state = json.loads(dialog_state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device'))
    assert state['uuid'] == 'feed' and state['custom'] == 'confirm'
