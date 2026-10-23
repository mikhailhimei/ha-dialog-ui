"""Saved continuations are visible immediately during an existing dialog."""
import pytest
from test_timer_runtime import runtime
from custom_components.ha_dialog_ui.src.service import dialog_service, dialog_state
from custom_components.ha_dialog_ui.storage.assistant_commands_storage import async_save_assistant_commands
from custom_components.ha_dialog_ui.storage.assistant_sub_commands_storage import async_save_assistant_sub_commands


def request(text, new=False):
    return {'request': {'command': text}, 'session': {'new': new,
        'user': {'user_id': 'client'}, 'application': {'application_id': 'device'}}}


@pytest.mark.parametrize('many_links', [False, True])
@pytest.mark.parametrize('component_type', ['children', ''])
@pytest.mark.parametrize(('phrases', 'utterance'), [
    ('123', '123'),
    ('коридор(е|и)? и спальн(е|ю|я)?;спальн(е|ю|я)? и коридор(е|и)?;спальне и коридоре', 'спальне и коридоре'),
])
async def test_newly_saved_child_matches_without_reload_or_restart(runtime, monkeypatch, phrases, utterance, many_links, component_type):
    hass, _ = runtime
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    parent = {'uuid': 'parent', 'title': 'Parent', 'status': True, 'componentDialog': {
        'answerType': 'default', 'voiceCommands': ['выбрать комнаты'],
        'nextAction': [{'actionTypeComponent': component_type, 'uuid': 'child'}],
        'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Уточните'}],
    }}
    if many_links:
        parent['componentDialog']['nextAction'] = [
            {'actionTypeComponent': 'children', 'uuid': 'other'},
            {'actionTypeComponent': 'children', 'uuid': 'other'},
            {'actionTypeComponent': component_type, 'uuid': 'child'},
        ]
    await async_save_assistant_commands(hass, [parent])
    first = await dialog_service.process_dialog_request(request('выбрать комнаты', new=True))
    assert first['end_session'] is False
    child = {'uuid': 'child', 'title': 'Child', 'status': True, 'subComponentDialog': {
        'answerType': 'default', 'voiceCommands': [phrases], 'nextAction': [],
        'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Готово'}],
    }}
    # Save while the parent dialog is already active: no cache preload or HA restart.
    await async_save_assistant_sub_commands(hass, [child])
    second = await dialog_service.process_dialog_request(request(utterance))
    assert second['text'] == 'Готово'
    assert second['end_session'] is True
