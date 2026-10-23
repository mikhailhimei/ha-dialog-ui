"""Coordinator routes events without changing client/device metadata."""
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
import pytest_asyncio
from homeassistant.core import Event, HomeAssistant

from custom_components.ha_dialog_ui.dialog import coordinator as module
from custom_components.ha_dialog_ui.const import DOMAIN, EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE


@pytest.mark.parametrize(('data', 'expected'), [
    (None, {}),
    ({'clientId': 'c', 'deviceId': 'd', 'commandData': []},
     {'clientId': 'c', 'deviceId': 'd', 'commandData': [], 'client_id': 'c', 'device_id': 'd', 'command_data': []}),
    ({'client_id': 'snake', 'clientId': 'camel', 'command_data': []},
     {'client_id': 'snake', 'clientId': 'camel', 'command_data': []}),
    ({'data': {'command_data': [], 'client_id': 'inner'}, 'client_id': 'outer', 'deviceId': 'd', 'event': 'ignored'},
     {'command_data': [], 'client_id': 'inner', 'deviceId': 'd', 'device_id': 'd'}),
])
def test_event_aliases_and_nested_metadata_precedence(data, expected):
    before = deepcopy(data)
    assert module._normalize_active_command_event_data(data) == expected
    assert data == before


def test_direct_command_is_wrapped_without_mutation():
    data = {'parent_type': 'timer', 'client_id': 'c', 'device_id': 'd'}
    assert module._normalize_active_command_event_data(data) == {**data, 'command_data': data}
    assert 'command_data' not in data


@pytest_asyncio.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    hass.data[DOMAIN] = {'logs': []}
    entry = SimpleNamespace(entry_id='entry', options={})
    manager = SimpleNamespace(async_restore_from_storage=AsyncMock(), async_stop=AsyncMock())
    bridge = SimpleNamespace(async_start=AsyncMock(), async_stop=AsyncMock())
    scenarios = []
    settings = {'client_id': 'client'}
    with (
        patch.object(module, 'DialogTimerAlarmManager', return_value=manager),
        patch.object(module, 'ExternalEventBridge', return_value=bridge),
        patch.object(module, 'get_cached_settings', side_effect=lambda _: settings),
        patch.object(module, 'async_get_cached_settings', new_callable=AsyncMock, side_effect=lambda _: settings),
        patch.object(module, 'async_load_script_actions', new_callable=AsyncMock, side_effect=lambda _: scenarios),
        patch.object(module, 'run_script', new_callable=AsyncMock) as run,
    ):
        instance = module.DialogCommandCoordinator(hass, entry)
        yield SimpleNamespace(hass=hass, coordinator=instance, manager=manager, bridge=bridge,
                              scenarios=scenarios, settings=settings, run=run)
        await instance.async_stop()
        await hass.async_stop()


def scenario(script='script.test', parent='test'):
    return {'name': parent, 'script_entity_id': script, 'conditions': [{'parent_type': parent}]}


@pytest.mark.parametrize(('configured', 'incoming', 'accepted'), [
    ('client', 'client', True), ('client', 'other', False), ('client', None, False), ('', 'other', True),
])
async def test_event_filters_client_and_preserves_device(runtime, configured, incoming, accepted):
    runtime.settings['client_id'] = configured
    runtime.scenarios.append(scenario())
    payload = {'parent_type': 'test', 'client_id': incoming, 'device_id': 'device'}
    runtime.coordinator._handle_active_command_event(Event(EVENT_ACTIVE_COMMAND, {
        'clientId': incoming, 'commandData': [payload]}))
    await runtime.hass.async_block_till_done()
    if accepted:
        runtime.run.assert_awaited_once_with(runtime.hass, 'script.test', payload)
    else:
        runtime.run.assert_not_awaited()


async def test_script_failure_does_not_prevent_next_payload(runtime, caplog):
    runtime.scenarios.append(scenario())
    runtime.run.side_effect = [RuntimeError('failed'), None]
    payloads = [{'parent_type': 'test', 'device_id': 'first'}, {'parent_type': 'test', 'device_id': 'second'}]
    await runtime.coordinator._process_command_payload(payloads)
    assert [call.args[2] for call in runtime.run.await_args_list] == payloads
    assert any(record.levelname == 'ERROR' and record.exc_info for record in caplog.records)


@pytest.mark.parametrize('payload', [None, {'status': False}, {'parent_type': 'unknown'}])
async def test_empty_failed_and_unmatched_commands_do_not_execute(runtime, payload):
    await runtime.coordinator._process_command_payload(payload)
    runtime.run.assert_not_awaited()


async def test_start_is_idempotent_stop_unsubscribes_and_restart_works(runtime):
    runtime.scenarios.append(scenario())
    for _ in range(2):
        await runtime.coordinator.async_start()
    runtime.manager.async_restore_from_storage.assert_awaited_once_with("client")
    runtime.bridge.async_start.assert_awaited_once_with(listen_external_active_commands=False, forward_dialog_messages=False)
    data = {'client_id': 'client', 'command_data': {'parent_type': 'test'}}
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, data)
    await runtime.hass.async_block_till_done()
    assert runtime.run.await_count == 1
    await runtime.coordinator.async_stop()
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, data)
    await runtime.hass.async_block_till_done()
    assert runtime.run.await_count == 1
    await runtime.coordinator.async_start()
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, data)
    await runtime.hass.async_block_till_done()
    assert runtime.run.await_count == 2


async def test_completion_payload_uses_same_scenario_routing(runtime):
    runtime.scenarios.append(scenario(parent='timer_worked'))
    payload = {'parent_type': 'timer_worked', 'client_id': 'client', 'device_id': 'device'}
    await runtime.coordinator._handle_timer_alarm_completion(payload)
    runtime.run.assert_awaited_once_with(runtime.hass, 'script.test', payload)


async def test_reload_applies_remote_settings_without_duplicate_subscription(runtime):
    runtime.scenarios.append(scenario())
    await runtime.coordinator.async_start()
    runtime.settings['active_remout'] = True
    await runtime.coordinator.async_reload()
    assert runtime.manager.async_restore_from_storage.await_count == 2
    runtime.bridge.async_stop.assert_awaited_once()
    assert runtime.bridge.async_start.await_args.kwargs == {
        'listen_external_active_commands': True, 'forward_dialog_messages': True}
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, {
        'client_id': 'client', 'command_data': {'parent_type': 'test'}})
    await runtime.hass.async_block_till_done()
    runtime.run.assert_awaited_once()


async def test_normal_commands_and_no_match_are_not_logged_as_errors(runtime, caplog):
    runtime.scenarios.append(scenario())
    await runtime.coordinator._process_command_payload({'parent_type': 'unknown'})
    runtime.coordinator._handle_active_command_event(Event(EVENT_ACTIVE_COMMAND, {
        'client_id': 'client', 'command_data': {'parent_type': 'test'}}))
    await runtime.hass.async_block_till_done()
    assert not any(record.levelno >= 40 for record in caplog.records)


@pytest.mark.parametrize('should_run', [True, False])
@pytest.mark.parametrize('entity_id', ['', 'script.bound'])
async def test_bound_command_never_runs_legacy_scenario_twice(runtime, should_run, entity_id):
    runtime.scenarios.append(scenario('script.legacy'))
    payload = {'parent_type': 'test', 'client_id': 'client', 'device_id': 'speaker',
               'children_direct_type': [{'mapping_type': 'room'}],
               'command_script': {'entity_id': entity_id, 'run': should_run}}
    original = deepcopy(payload)
    await runtime.coordinator._process_command_payload([payload])
    assert payload == original
    if entity_id and should_run:
        forwarded = {key: value for key, value in payload.items() if key != 'command_script'}
        runtime.run.assert_awaited_once_with(runtime.hass, entity_id, forwarded)
    else:
        runtime.run.assert_not_awaited()


async def test_bound_script_failure_does_not_run_legacy_fallback(runtime):
    runtime.scenarios.append(scenario('script.legacy'))
    runtime.run.side_effect = RuntimeError('test failure')
    await runtime.coordinator._process_command_payload([{
        'parent_type': 'test', 'command_script': {'entity_id': 'script.bound', 'run': True},
    }])
    runtime.run.assert_awaited_once()
    assert any('command script run failed' in entry['message'] for entry in runtime.hass.data[DOMAIN]['logs'])


async def test_local_command_script_can_respond_immediately_without_legacy_dispatch(runtime):
    from custom_components.ha_dialog_ui.src.service import dialog_service
    node = {'uuid': 'command', 'actionType': 'test', 'is_main_command': True,
            'script_entity_id': 'script.bound', 'answerType': 'script_response',
            'nextAction': [], 'voiceResponseArray': [{'actionType': 'ok', 'voiceResponse': 'Готово'}]}
    runtime.scenarios.append(scenario('script.legacy'))
    async def respond(hass, entity_id, payload):
        hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {
            'client_id': payload['client_id'], 'device_id': payload['device_id'], 'typeVoice': 'ok',
        })
    runtime.run.side_effect = respond
    await runtime.coordinator.async_start()
    with patch.object(dialog_service, 'find_top_level_candidates', return_value=[node]):
        result = await dialog_service.handle_top_level_command(
            runtime.hass, [node], 'включи', 'client', 'speaker', [],
        )
    assert result['text'] == 'Готово'
    assert result['end_session'] is True
    runtime.run.assert_awaited_once()
    assert runtime.run.await_args.args[1] == 'script.bound'
    assert runtime.run.await_args.args[2]['device_id'] == 'speaker'


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
async def test_uuid_command_runs_bound_timer_alarm_script_without_builtin_dispatch(runtime, kind):
    """Service-based scripts are selected by entity ID, not timer_start/alarm_start."""
    command_uuid = 'bc8e7d8c-7922-4b38-b8c3-f99e812f7647'
    payload = {
        'parent_type': command_uuid,
        'client_id': 'client',
        'device_id': 'speaker',
        'children_direct_type': [{'mapping_type': 'timer', 'value': {'hour': 0, 'minut': 1, 'second': 0}}],
        'command_script': {'entity_id': f'script.{kind}', 'run': True},
    }
    await runtime.coordinator._process_command_payload(payload)
    forwarded = {key: value for key, value in payload.items() if key != 'command_script'}
    runtime.run.assert_awaited_once_with(runtime.hass, f'script.{kind}', forwarded)


@pytest.mark.parametrize('include_legacy_fields', [False, True])
async def test_remote_sse_matches_command_uuid_not_action_type(runtime, include_legacy_fields):
    runtime.scenarios.append(scenario(parent='5j78-5fs3-x8so-0e3e'))
    payload = {'command_id': '5j78-5fs3-x8so-0e3e', 'continuation_id': None,
               'text': 'привет', 'client_id': 'client', 'device_id': 'device',
               'direct_values': [], 'is_main_command': True}
    if include_legacy_fields:
        payload.update(parent_type='hi', children_type='')
    runtime.coordinator._handle_active_command_event(Event(EVENT_ACTIVE_COMMAND, {
        'client_id': 'client', 'command_data': [payload],
    }))
    await runtime.hass.async_block_till_done()
    runtime.run.assert_awaited_once_with(runtime.hass, 'script.test', payload)
