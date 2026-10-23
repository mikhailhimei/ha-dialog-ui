"""Command-local scripts follow answer, direct-value and continuation rules."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.src.service.dialog_events import build_command_data, should_run_command_script
from custom_components.ha_dialog_ui.src.service.dialog_commands import normalize_command


@pytest.mark.parametrize('answer_type', ['default', 'script_response'])
@pytest.mark.parametrize('direct', [False, True])
@pytest.mark.parametrize('has_default', [False, True])
@pytest.mark.parametrize('has_custom', [False, True])
@pytest.mark.parametrize('script', ['', 'script.test'])
def test_command_script_rules(answer_type, direct, has_default, has_custom, script):
    links = []
    if has_default:
        links.append({'actionTypeComponent': 'children', 'uuid': 'child'})
    if has_custom:
        links.append({'actionTypeComponent': 'custom', 'actionType': 'confirm', 'uuid': 'other'})
    node = {'script_entity_id': script, 'answerType': answer_type, 'nextAction': links}
    values = [{'mapping_type': 'room', 'value': 'kitchen'}] if direct else []
    expected = bool(script) and (answer_type == 'script_response' or direct or not has_default)
    assert should_run_command_script(node, values) is expected
    before = deepcopy(node)
    payload = build_command_data('sub', 'main', {'commands': 'свет'}, 'client', 'device', values, True, command_node=node)
    assert payload['command_script'] == {'entity_id': script, 'run': expected}
    assert payload['client_id'] == 'client'
    assert payload['device_id'] == 'device'
    assert payload['children_direct_type'] == values
    assert node == before


@pytest.mark.parametrize('component', ['componentDialog', 'subComponentDialog'])
@pytest.mark.parametrize('script', ['', 'script.test'])
def test_script_binding_survives_command_preparation(component, script):
    node = normalize_command({'uuid': 'test', component: {'script_entity_id': script}}, component)
    assert node['script_entity_id'] == script


def test_old_commands_keep_legacy_scenario_routing():
    node = normalize_command({'uuid': 'test', 'componentDialog': {}}, 'componentDialog')
    payload = build_command_data('', 'main', {}, 'client', 'device', [], True, command_node=node)
    assert 'command_script' not in payload


@pytest.mark.parametrize(('action_type', 'text'), [('stop', 'стоп'), ('default', '')])
async def test_special_commands_use_the_same_binding_rules(action_type, text):
    from unittest.mock import AsyncMock, patch
    from custom_components.ha_dialog_ui.src.service import dialog_service
    node = {'uuid': 'special', 'actionType': action_type, 'voiceCommands': ['стоп'],
            'script_entity_id': 'script.test', 'answerType': 'default', 'nextAction': []}
    request = {'request': {'command': text}, 'session': {'new': True,
               'user': {'user_id': 'client'}, 'application': {'application_id': 'speaker'}}}
    with (
        patch.object(dialog_service, 'get_current_hass', return_value=object()),
        patch.object(dialog_service, 'prepare_dialog_nodes', return_value=([node], [])),
        patch.object(dialog_service, 'get_dialog_settings_list', return_value=[]),
        patch.object(dialog_service, 'execute_top_level_command', new_callable=AsyncMock,
                     return_value={'text': 'Готово', 'end_session': True}) as execute,
    ):
        assert (await dialog_service.process_dialog_request(request))['end_session'] is True
    execute.assert_awaited_once()
    payload = execute.await_args.args[-1][0]
    assert payload['command_script'] == {'entity_id': 'script.test', 'run': True}
    assert payload['device_id'] == 'speaker'


@pytest.mark.parametrize('end_status', [False, True])
async def test_default_settings_keep_their_explicit_session_switch(end_status):
    from unittest.mock import AsyncMock, patch
    from custom_components.ha_dialog_ui.src.service import dialog_service
    setting = {'message': 'Готово', 'endStatus': end_status, 'forwardCommandToServer': True}
    with (
        patch.object(dialog_service, 'build_dialog_response', return_value=setting),
        patch.object(dialog_service, 'request_script_response', new_callable=AsyncMock,
                     return_value={'typeVoice': 'default'}),
    ):
        response = await dialog_service._build_default_main_response(object(), 'текст', 'client', 'device', [], [])
    assert response['end_session'] is end_status


@pytest.mark.parametrize('script', [None, '', 'script.fallback'])
@pytest.mark.parametrize('existing_payload', [[], [{'parent_type': 'legacy'}]])
async def test_fallback_setting_routes_selected_script(script, existing_payload):
    from unittest.mock import AsyncMock, patch
    from custom_components.ha_dialog_ui.src.service import dialog_service
    setting = {'message': 'Запасной ответ', 'endStatus': True,
               'forwardCommandToServer': True, 'script_entity_id': script}
    with (
        patch.object(dialog_service, 'build_dialog_response', return_value=setting),
        patch.object(dialog_service, 'request_script_response', new_callable=AsyncMock,
                     return_value={'message': 'Ответ скрипта'}) as request,
    ):
        await dialog_service._build_default_main_response(object(), 'неизвестная фраза', 'client', 'device', [], existing_payload)
    payload = request.await_args.args[2][0]
    if script:
        assert payload['command_script'] == {'entity_id': script, 'run': True}
        assert payload['data'] == {'commands': 'неизвестная фраза'}
        assert payload['client_id'] == 'client'
        assert payload['device_id'] == 'device'
    elif existing_payload:
        assert payload == existing_payload[0]
    else:
        assert 'command_script' not in payload


def test_fallback_script_survives_settings_normalization():
    from unittest.mock import patch
    from custom_components.ha_dialog_ui.src.service import dialog_commands
    with patch.object(dialog_commands, 'get_all', return_value=[{
        'actionType': 'default_main', 'forwardCommandToServer': True,
        'script_entity_id': 'script.fallback',
    }]):
        settings = dialog_commands.get_dialog_settings()['body']['dialogSettings']
    assert settings[0]['script_entity_id'] == 'script.fallback'


async def test_disabled_fallback_does_not_run_selected_script():
    from unittest.mock import AsyncMock, patch
    from custom_components.ha_dialog_ui.src.service import dialog_service
    with (
        patch.object(dialog_service, 'build_dialog_response', return_value={
            'message': 'Локальный ответ', 'forwardCommandToServer': False,
            'script_entity_id': 'script.fallback',
        }),
        patch.object(dialog_service, 'request_script_response', new_callable=AsyncMock) as request,
    ):
        response = await dialog_service._build_default_main_response(object(), 'текст', 'client', 'device', [], [])
    request.assert_not_awaited()
    assert response['text'] == 'Локальный ответ'


@pytest.mark.parametrize(('script_response','expected'), [
    ({'actionType':'success','variables':{'reply':'Привет, Миша'},'useDeclension':False}, 'Привет, Миша'),
    ({'typeVoice':'success','variables':{'reply':'Другой ответ'},'useDeclension':False}, 'Другой ответ'),
    ({'actionType':'error','variables':{'reply':'Не озвучивать'}}, 'Запасной ответ'),
    ({'actionType':'success','variables':{}}, 'Запасной ответ'),
    (None, 'Запасной ответ'),
])
async def test_fallback_success_uses_standard_response_variables(script_response, expected):
    from copy import deepcopy
    from unittest.mock import AsyncMock, patch
    from custom_components.ha_dialog_ui.src.service import dialog_service
    setting = {'actionType':'default_main','voiceResponse':'Запасной ответ','endStatus':False,
               'forwardCommandToServer':True, 'script_entity_id':'script.fallback',
               'voiceResponseArray':[{'actionType':'success','voiceResponse':'${reply}'}]}
    before = deepcopy(setting)
    with patch.object(dialog_service, 'request_script_response', new_callable=AsyncMock, return_value=script_response):
        response = await dialog_service._build_default_main_response(object(), 'неизвестная фраза', 'client', 'device', [setting], [])
    assert response['text'] == expected
    assert response['end_session'] is False
    assert setting == before


def test_success_template_survives_settings_normalization_without_local_message():
    from unittest.mock import patch
    from custom_components.ha_dialog_ui.src.service import dialog_commands, dialog_service
    setting = {'actionType':'default_main','forwardCommandToServer':True,
               'voiceResponseArray':[{'actionType':'success','voiceResponse':'${reply}'}]}
    with patch.object(dialog_commands, 'get_all', return_value=[setting]):
        normalized = dialog_commands.get_dialog_settings()['body']['dialogSettings'][0]
    assert dialog_service._setting_to_service_node(normalized)['voiceResponseArray'] == setting['voiceResponseArray']
