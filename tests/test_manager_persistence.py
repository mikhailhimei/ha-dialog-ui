"""Persistence ordering and shutdown on a real Home Assistant event loop."""

import asyncio
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.timer_alarm import manager as module
from test_timer_runtime import runtime


@pytest.fixture
async def persistence(runtime):
    hass, _ = runtime
    manager = module.DialogTimerAlarmManager(hass)
    with (
        patch.object(module, 'async_save_timer_requests', new_callable=AsyncMock) as timers,
        patch.object(module, 'async_save_alarm_requests', new_callable=AsyncMock) as alarms,
    ):
        yield SimpleNamespace(hass=hass, manager=manager, timers=timers, alarms=alarms)
        await manager.async_stop()


async def test_consecutive_changes_save_latest_state_and_keep_metadata(persistence):
    p = persistence
    p.manager.timer_manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
    p.manager.timer_manager._timers['timer']['remaining_seconds'] = 45
    p.manager._mark_updated()
    p.manager.timer_manager._timers['timer']['remaining_seconds'] = 30
    p.manager._mark_updated()
    await p.hass.async_block_till_done()

    assert p.timers.await_count >= 1
    assert p.alarms.await_count == p.timers.await_count
    saved = p.timers.call_args.args[1][0]
    assert saved['uuid'] == 'timer'
    assert saved['client_id'] == 'client'
    assert saved['device_id'] == 'speaker'
    assert saved['timer_time']['remaining_seconds'] == 30
    assert saved['timer_time']['total_seconds'] == 120
    assert saved['timer_time']['created_at'] == 10


async def test_change_during_write_is_saved_in_next_serial_pass(persistence):
    p = persistence
    entered, release = asyncio.Event(), asyncio.Event()
    snapshots = []

    async def save(_hass, items):
        snapshots.append(items)
        if len(snapshots) == 1:
            entered.set()
            await release.wait()

    p.timers.side_effect = save
    try:
        async with asyncio.timeout(3):
            p.manager.timer_manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
            await entered.wait()
            p.manager.timer_manager._timers['timer']['remaining_seconds'] = 45
            p.manager._mark_updated()
            p.manager.timer_manager._timers['timer']['remaining_seconds'] = 30
            p.manager._mark_updated()
            release.set()
            await p.hass.async_block_till_done()
    finally:
        release.set()

    assert [items[0]['timer_time']['remaining_seconds'] for items in snapshots] == [120, 30]
    assert p.alarms.await_count == 2


async def test_shutdown_waits_for_storage_before_clearing_runtime(persistence):
    p = persistence
    entered, release = asyncio.Event(), asyncio.Event()

    async def save(_hass, _items):
        entered.set()
        await release.wait()

    p.timers.side_effect = save
    stopped = None
    try:
        async with asyncio.timeout(3):
            p.manager.timer_manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
            await entered.wait()
            stopped = asyncio.create_task(p.manager.async_stop())
            await asyncio.sleep(0)
            assert not stopped.done()
            assert p.manager.get_timer_items()
            assert p.manager._runtime_state_key in p.hass.data[DOMAIN]['timer_alarm_runtime']
            release.set()
            await stopped
    finally:
        release.set()
        if stopped is not None:
            await stopped

    assert p.manager.get_items() == []
    assert p.manager._runtime_state_key not in p.hass.data[DOMAIN]['timer_alarm_runtime']
    assert p.alarms.await_count == 1


@pytest.mark.parametrize('failing_store', ['timers', 'alarms'])
async def test_storage_failure_logs_and_next_change_can_save(persistence, caplog, failing_store):
    p = persistence
    store = getattr(p, failing_store)
    store.side_effect = OSError('storage unavailable')
    p.manager.timer_manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
    await p.hass.async_block_till_done()
    assert 'Failed to save timer/alarm requests' in caplog.text
    assert p.manager.get_timer_items()[0]['id'] == 'timer'

    store.side_effect = None
    p.timers.reset_mock()
    p.alarms.reset_mock()
    p.manager.timer_manager._timers['timer']['remaining_seconds'] = 40
    p.manager._mark_updated()
    await p.hass.async_block_till_done()
    p.timers.assert_awaited_once()
    p.alarms.assert_awaited_once()
    assert p.timers.call_args.args[1][0]['timer_time']['remaining_seconds'] == 40


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
async def test_service_delete_by_uuid_removes_only_target_and_saves(persistence, kind):
    p = persistence
    if kind == 'timer':
        p.manager.timer_manager._create_timer('keep', 'client', 'speaker', 120, True, 10)
        p.manager.timer_manager._create_timer('target', 'client', 'speaker', 120, False, 20)
        task = p.manager.timer_manager._timers['target']['task']
    else:
        for name in ['keep', 'target']:
            p.manager.alarm_manager._alarms[name] = {'id': name, 'client_id': 'client', 'device_id': 'speaker',
                                                   'time': '07:00', 'status': 'off'}
        task = None
    await p.hass.async_block_till_done()
    result = await p.manager.async_handle_service_action(kind, {'action': 'delete', 'target_uuid': 'target'}, 'client', 'speaker')
    await p.hass.async_block_till_done()
    assert result['actionType'] == 'success'
    assert result['message'] == 'target'
    items = p.manager.get_timer_items() if kind == 'timer' else p.manager.get_alarm_items()
    assert [item['id'] for item in items] == ['keep']
    saved = p.timers if kind == 'timer' else p.alarms
    assert [item['uuid'] for item in saved.call_args.args[1]] == ['keep']
    if task is not None:
        assert task.done()


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
@pytest.mark.parametrize('target', ['', 'missing'])
async def test_service_delete_missing_uuid_has_no_storage_side_effect(persistence, kind, target):
    p = persistence
    result = await p.manager.async_handle_service_action(kind, {'action': 'delete', 'target_uuid': target}, 'client', 'speaker')
    assert result['actionType'] == 'error'
    p.timers.assert_not_awaited()
    p.alarms.assert_not_awaited()


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
async def test_service_info_formats_live_items_and_filters_client(persistence, kind):
    import json

    p = persistence
    for client in ['own', 'other']:
        if kind == 'timer':
            p.manager.timer_manager._create_timer(client, client, client + '-speaker', 120, True, 10)
        else:
            p.manager.alarm_manager._alarms[client] = {'id': client, 'client_id': client,
                                                      'device_id': client + '-speaker',
                                                      'time': '07:00', 'status': 'on'}
    result = await p.manager.async_handle_service_action(kind, {'action': 'info'}, 'own', '')
    assert result['actionType'] == ('timers' if kind == 'timer' else 'alarms')
    assert json.loads(result['message']) == result['items']
    assert len(result['items']) == 1
    item = result['items'][0]
    assert (item['uuid'], item['clientId'], item['deviceId']) == ('own', 'own', 'own-speaker')
    if kind == 'timer':
        assert (item['total_seconds'], item['remaining_seconds']) == (120, 120)
    else:
        assert item['time'] == '07:00'
