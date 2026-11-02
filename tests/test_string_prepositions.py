"""String direct values retain prepositions without changing digit removal."""
import pytest
from homeassistant.core import callback
from test_timer_runtime import runtime
from test_continuation_live_updates import request

from custom_components.ha_dialog_ui.const import EVENT_ACTIVE_COMMAND
from custom_components.ha_dialog_ui.src.service import dialog_service, dialog_state
from custom_components.ha_dialog_ui.src.service.matching.direct import collect_all_type_template_vars
from custom_components.ha_dialog_ui.src.service.matching.templates import extract_template_variables
from custom_components.ha_dialog_ui.src.utils.value_parser import parse_typed_value
from custom_components.ha_dialog_ui.storage.assistant_commands_storage import async_save_assistant_commands
from custom_components.ha_dialog_ui.storage.assistant_sub_commands_storage import async_save_assistant_sub_commands
from custom_components.ha_dialog_ui.storage.assistant_sub_direct_controls_storage import async_save_assistant_sub_direct_controls


@pytest.mark.parametrize('followup', [False, True])
async def test_reminder_string_preserves_prepositions_in_published_payload(runtime, monkeypatch, followup):
    hass, _ = runtime
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    await async_save_assistant_sub_direct_controls(hass, [{
        'uuid': 'text', 'directControl': {'mappingType': 'string2', 'valueType': 'string'},
    }])
    shared = {'answerType': 'default', 'script_entity_id': 'script.remind',
              'nextDirectControl': [{'uuid': 'text'}],
              'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Готово'},
                                     {'actionType': 'default_next_step', 'voiceResponse': 'Что напомнить?'}]}
    await async_save_assistant_commands(hass, [{'uuid': 'remind', 'status': True, 'componentDialog': {
        **shared, 'voiceCommands': ['напомни', 'напомни ${string2}'],
        'nextAction': [{'actionTypeComponent': 'children', 'uuid': 'reminder-text'}],
    }}])
    await async_save_assistant_sub_commands(hass, [{'uuid': 'reminder-text', 'status': True, 'subComponentDialog': {
        **shared, 'voiceCommands': ['${string2}'], 'nextAction': [],
    }}])
    events = []

    @callback
    def capture(event):
        events.extend(event.data['command_data'])

    unsubscribe = hass.bus.async_listen(EVENT_ACTIVE_COMMAND, capture)
    try:
        if followup:
            initial = await dialog_service.process_dialog_request(request('напомни', new=True))
            assert initial['end_session'] is False
            await hass.async_block_till_done()
            events.clear()
        value = 'мне вытащить пирог из духовки через 1 минуту'
        result = await dialog_service.process_dialog_request(request(value if followup else 'напомни ' + value, new=not followup))
        await hass.async_block_till_done()
        assert result['end_session'] is True
        assert len(events) == 1
        assert events[0]['direct_values'] == [{'command_id': 'text', 'value': 'мне вытащить пирог из духовки через  минуту',
                                              'value_type': 'string', 'name': 'string2'}]
    finally:
        unsubscribe()


@pytest.mark.parametrize('value', ['из духовки', 'в духовке и на столе', 'от мамы к папе', 'с полки под столом'])
def test_string_span_retains_leading_and_internal_prepositions(value):
    node = {'direct': [{'mappingType': '_string2', 'valueType': 'string'}]}
    keep = collect_all_type_template_vars(node)
    result = extract_template_variables('напомни ${string2}', 'напомни ' + value, keep_stopword_vars=keep)
    assert result == {'string2': value}
    assert parse_typed_value(result['string2'], 'string') == value


def test_adjacent_string_and_count_keep_prepositions():
    result = extract_template_variables('напомни ${string2} ${count}',
        'напомни достать из духовки 2 раза', keep_stopword_vars={'string2'})
    assert result == {'string2': 'достать из духовки', 'count': '2'}


def test_command_span_still_removes_location_stopwords():
    node = {'direct': [{'mappingType': 'room', 'valueType': 'command'}]}
    assert not collect_all_type_template_vars(node)
    assert extract_template_variables('свет ${room}', 'свет в кухне') == {'room': 'кухне'}
