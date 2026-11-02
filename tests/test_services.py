"""Public HA service contracts: validation, routing, responses and lifecycle."""
import asyncio
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
import voluptuous as vol
import pytest_asyncio
from homeassistant.core import HomeAssistant, SupportsResponse, callback
from homeassistant.exceptions import HomeAssistantError

from custom_components.ha_dialog_ui import services
from custom_components.ha_dialog_ui.const import DOMAIN, EVENT_DIALOG_MESSAGE


@pytest_asyncio.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    entry = SimpleNamespace(options={})
    manager = SimpleNamespace(async_handle_service_action=AsyncMock(return_value={'actionType': 'success'}))
    with (
        patch.object(services, 'get_integration_entry', return_value=entry) as get_entry,
        patch.object(services, 'get_timer_alarm_manager', return_value=manager) as get_manager,
        patch.object(services, 'get_cached_settings', return_value={'client_id': 'configured-client'}),
    ):
        services.async_register_services(hass)
        yield SimpleNamespace(hass=hass, manager=manager, get_entry=get_entry, get_manager=get_manager)
        services.async_unregister_services(hass)
        await hass.async_stop()


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
@pytest.mark.parametrize('action', ['create', 'info', 'delete'])
async def test_registered_services_route_action_and_return_manager_response(runtime, kind, action):
    payload = {'uuid': 'item-id'} if action == 'delete' else {}
    before = deepcopy(payload)
    response = await runtime.hass.services.async_call(DOMAIN, f'{kind}_{action}', payload, blocking=True, return_response=True)
    assert response == {'actionType': 'success'}
    runtime.manager.async_handle_service_action.assert_awaited_once()
    actual_kind, config, client, device = runtime.manager.async_handle_service_action.await_args.args
    assert (actual_kind, client, device) == (kind, 'configured-client', '')
    assert config['action'] == action
    assert config['target_uuid'] == ('item-id' if action == 'delete' else '')
    if action == 'create':
        assert config['hh'] == config['mm'] == 0
        if kind == 'timer':
            assert config['ss'] == 0
        else:
            assert config['repeat_type'] == 'once'
            assert config['repeat_days'] == ''
            assert config['convert_day_period'] is False
    assert payload == before


async def test_registration_is_idempotent_and_response_support_is_preserved(runtime):
    hass = runtime.hass
    before = dict(hass.services.async_services()[DOMAIN])
    services.async_register_services(hass)
    after = hass.services.async_services()[DOMAIN]
    assert set(after) == {'send_command', 'activity_stop', 'alarm_create', 'alarm_info', 'alarm_delete', 'timer_create', 'timer_info', 'timer_delete', 'reminder_create', 'reminder_info', 'reminder_delete'}
    assert all(after[name] is service for name, service in before.items())
    assert after['send_command'].supports_response is SupportsResponse.NONE
    assert after['activity_stop'].supports_response is SupportsResponse.NONE
    assert all(service.supports_response is SupportsResponse.OPTIONAL for name, service in after.items() if name not in {'send_command', 'activity_stop'})


async def test_unregister_removes_legacy_services_and_preserves_unrelated(runtime):
    hass = runtime.hass
    for name in ['timer_script', 'alarm_script', 'unrelated']:
        hass.services.async_register(DOMAIN, name, lambda call: None)
    services.async_unregister_services(hass)
    services.async_unregister_services(hass)
    assert set(hass.services.async_services()[DOMAIN]) == {'unrelated'}


@pytest.mark.parametrize('variables', [{'name': 'Миша'}, '{"name":"Миша"}'])
async def test_send_command_publishes_normalized_identifiers_and_variables(runtime, variables):
    received = []

    @callback
    def receive(event):
        received.append(event.data)

    unsubscribe = runtime.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, receive)
    try:
        await runtime.hass.services.async_call(DOMAIN, 'send_command', {
            'deviceId': ' device ', 'actionType': ' confirm ',
            'variables': variables, 'useDeclension': False,
        }, blocking=True)
        await runtime.hass.async_block_till_done()
        assert received == [{'client_id': 'configured-client', 'device_id': 'device',
                             'actionType': 'confirm', 'variables': {'name': 'Миша'}, 'useDeclension': False}]
    finally:
        unsubscribe()


@pytest.mark.parametrize('variables', ['[]', 'null', '1', '"text"', '{broken'])
async def test_invalid_json_variables_do_not_publish_response(runtime, variables):
    received = []

    @callback
    def receive(event):
        received.append(event.data)

    unsubscribe = runtime.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, receive)
    try:
        with pytest.raises(HomeAssistantError, match='variables must be'):
            await runtime.hass.services.async_call(DOMAIN, 'send_command', {
                'deviceId': 'device', 'actionType': 'default', 'variables': variables,
            }, blocking=True)
        await runtime.hass.async_block_till_done()
        assert received == []
    finally:
        unsubscribe()


@pytest.mark.parametrize(('service', 'payload'), [
    ('timer_delete', {}), ('alarm_delete', {}),
    ('timer_create', {'hh': []}), ('alarm_create', {'repeat_type': 'invalid'}),
    ('send_command', {'actionType': 'default'}),
])
async def test_service_schemas_reject_invalid_parameters(runtime, service, payload):
    with pytest.raises(vol.Invalid):
        await runtime.hass.services.async_call(DOMAIN, service, payload, blocking=True)
    runtime.manager.async_handle_service_action.assert_not_awaited()


@pytest.mark.parametrize('service', ['send_command', 'timer_info'])
async def test_missing_entry_returns_clear_error(runtime, service):
    runtime.get_entry.return_value = None
    payload = {'deviceId': 'device', 'actionType': 'default'} if service == 'send_command' else {}
    with pytest.raises(HomeAssistantError, match='integration entry not found'):
        await runtime.hass.services.async_call(DOMAIN, service, payload, blocking=True)
    runtime.manager.async_handle_service_action.assert_not_awaited()


async def test_missing_manager_returns_clear_error(runtime):
    runtime.get_manager.return_value = None
    with pytest.raises(HomeAssistantError, match='manager not found'):
        await runtime.hass.services.async_call(DOMAIN, 'timer_info', {}, blocking=True)


async def test_configured_client_and_agreeing_device_aliases_are_preserved(runtime):
    await runtime.hass.services.async_call(DOMAIN, 'timer_create', {
        'deviceId': ' device ', 'device_id': 'device', 'mm': '2',
    }, blocking=True)
    _, config, client, device = runtime.manager.async_handle_service_action.await_args.args
    assert (client, device) == ('configured-client', 'device')
    assert config['mm'] == '2'


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
@pytest.mark.parametrize('alias', ['deviceId', 'device_id'])
async def test_info_uses_configured_client_and_passes_device_filter(runtime, kind, alias):
    await runtime.hass.services.async_call(DOMAIN, f'{kind}_info', {
        alias: ' kitchen ',
    }, blocking=True, return_response=True)
    actual_kind, config, client, device = runtime.manager.async_handle_service_action.await_args.args
    assert (actual_kind, config['action'], client, device) == (kind, 'info', 'configured-client', 'kitchen')


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
async def test_info_rejects_conflicting_device_aliases(runtime, kind):
    with pytest.raises(HomeAssistantError, match='different devices'):
        await runtime.hass.services.async_call(DOMAIN, f'{kind}_info', {
            'deviceId': 'kitchen', 'device_id': 'bedroom',
        }, blocking=True)
    runtime.manager.async_handle_service_action.assert_not_awaited()


@pytest.mark.parametrize('service,payload', [
    ('send_command', {'deviceId': 'device', 'actionType': 'success'}),
    ('timer_create', {}), ('timer_info', {}), ('timer_delete', {'uuid': 'timer'}),
    ('alarm_create', {}), ('alarm_info', {}), ('alarm_delete', {'uuid': 'alarm'}),
    ('reminder_create', {'text': 'Текст', 'device_id': 'device', 'delay_minutes': 1}),
    ('reminder_info', {'device_id': 'device'}), ('reminder_delete', {'id': 'reminder'}),
])
@pytest.mark.parametrize('field', ['clientId', 'client_id'])
async def test_ha_services_have_no_client_override(runtime, service, payload, field):
    with pytest.raises(vol.Invalid):
        await runtime.hass.services.async_call(DOMAIN, service, {**payload, field: 'other-client'}, blocking=True)
    runtime.manager.async_handle_service_action.assert_not_awaited()


async def test_send_command_without_client_reaches_configured_dialog_waiter(runtime):
    from custom_components.ha_dialog_ui.src.service import dialog_events

    with patch.object(dialog_events, 'get_current_hass', return_value=runtime.hass):
        task = asyncio.create_task(dialog_events.wait_for_script_response(
            runtime.hass, 'configured-client', 'speaker', timeout=1))
        try:
            await asyncio.sleep(0)
            await runtime.hass.services.async_call(DOMAIN, 'send_command', {
                'deviceId': 'speaker', 'actionType': 'success', 'variables': {'reply': 'Готово'},
            }, blocking=True)
            response = await task
            assert response['client_id'] == 'configured-client'
            assert response['device_id'] == 'speaker'
            assert response['variables'] == {'reply': 'Готово'}
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)
