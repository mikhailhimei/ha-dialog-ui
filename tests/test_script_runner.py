"""Script variables are a public automation contract."""
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock

import pytest

from custom_components.ha_dialog_ui.dialog import script_runner


def test_script_variables_preserve_payload_and_public_names():
    payload = {'parent_type': 'timer_start', 'children_type': 'time',
               'children_direct_type': [{'mapping_type': 'timer', 'value': {'minut': 1}}],
               'data': {'commands': 'таймер на минуту'}, 'client_id': 'client', 'device_id': 'device'}
    before = deepcopy(payload)
    result = script_runner.build_script_service_data('script.timer', payload)
    expected = {'client_id': 'client', 'device_id': 'device', 'command_id': None, 'continuation_id': None, 'text': 'таймер на минуту'}
    expected['direct_values'] = [{'name': 'timer', 'value': {'minut': 1}}]
    assert result == {'entity_id': 'script.timer', 'variables': {'dialog_payload': expected}}
    assert payload == before


@pytest.mark.parametrize('payload', [{}, {'clientId': 'legacy-client', 'deviceId': 'legacy-device'}, {'data': None}])
def test_only_payload_is_exposed_without_extra_variables(payload):
    variables = script_runner.build_script_service_data('script.test', payload)['variables']
    expected = {key: value for key, value in payload.items() if key != 'data'}
    expected.update(command_id=None, continuation_id=None, text='', direct_values=[])
    assert variables == {'dialog_payload': expected}


async def test_missing_script_does_not_make_a_service_call():
    hass = SimpleNamespace(states=SimpleNamespace(get=Mock(return_value=None)),
                           services=SimpleNamespace(async_call=AsyncMock()))
    await script_runner.run_script(hass, 'script.missing', {})
    hass.states.get.assert_called_once_with('script.missing')
    hass.services.async_call.assert_not_awaited()


async def test_script_is_started_without_waiting_for_completion():
    hass = SimpleNamespace(states=SimpleNamespace(get=Mock(return_value=object())),
                           services=SimpleNamespace(async_call=AsyncMock()))
    payload = {'device_id': 'device', 'client_id': 'client'}
    await script_runner.run_script(hass, 'script.test', payload)
    hass.services.async_call.assert_awaited_once_with('script', 'turn_on',
        script_runner.build_script_service_data('script.test', payload), blocking=False)


async def test_service_error_reaches_coordinator_for_logging():
    hass = SimpleNamespace(states=SimpleNamespace(get=Mock(return_value=object())),
                           services=SimpleNamespace(async_call=AsyncMock(side_effect=RuntimeError('failed'))))
    with pytest.raises(RuntimeError, match='failed'):
        await script_runner.run_script(hass, 'script.test', {})


@pytest.mark.parametrize('single', [False, True])
def test_direct_values_keep_nested_data_and_do_not_mutate_input(single):
    entries = [
        {'valueType': 'time', 'mapping_type': 'timer', 'value': {'hour': 0, 'minut': 5, 'second': 0, 'times_of_day': False}},
        {'valueType': 'command', 'mapping_type': 'room', 'value': 'зал', 'sub_mapping_type': ['_hall', '_kitchen']},
        {'valueType': 'int', 'mapping_type': 'brightness', 'value': 50},
        {'valueType': 'all', 'mapping_type': 'data', 'value': {'minut': 7, 'nested': [1, {'hour': 3}]}},
    ]
    payload = {'parent_type': 'test', 'children_direct_type': entries[0] if single else entries}
    before = deepcopy(payload)
    result = script_runner.build_script_payload(payload)
    expected = [
        {'value_type': 'time', 'name': 'timer', 'value': {'hours': 0, 'minutes': 5, 'seconds': 0, 'times_of_day': False}},
        {'value_type': 'command', 'name': 'room', 'value': 'зал', 'matched_codes': ['_hall', '_kitchen']},
        {'value_type': 'int', 'name': 'brightness', 'value': 50},
        {'value_type': 'all', 'name': 'data', 'value': {'minut': 7, 'nested': [1, {'hour': 3}]}},
    ]
    assert result == {'command_id': None, 'continuation_id': None, 'text': '', 'direct_values': expected[:1] if single else expected}
    assert payload == before
    result['direct_values'][0]['value']['minutes'] = 999
    assert payload == before


def test_empty_direct_values_are_an_empty_list():
    assert script_runner.build_script_payload({'children_direct_type': []}) == {'command_id': None, 'continuation_id': None, 'text': '', 'direct_values': []}
