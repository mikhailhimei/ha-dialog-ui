"""Manager restoration keeps identity, timer ordering and retry semantics."""

from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.timer_alarm import manager as module
from custom_components.ha_dialog_ui.timer_alarm.timer_display import latest_device_timers
from test_timer_runtime import runtime


def timer(timer_id, created_at, device='speaker', client='original-client'):
    return {'uuid': timer_id, 'client_id': client, 'device_id': device, 'status': 'paused',
            'timer_time': {'count_timer': '00:02:00', 'total_seconds': 120,
                           'remaining_seconds': 30, 'created_at': created_at}}


@pytest.fixture
async def restoration(runtime):
    hass, _ = runtime
    manager = module.DialogTimerAlarmManager(hass)
    with (
        patch.object(module, 'async_load_timer_requests', new_callable=AsyncMock, return_value=[]) as timers,
        patch.object(module, 'async_load_alarm_requests', new_callable=AsyncMock, return_value=[]) as alarms,
        patch.object(module, 'async_save_timer_requests', new_callable=AsyncMock),
        patch.object(module, 'async_save_alarm_requests', new_callable=AsyncMock),
    ):
        yield SimpleNamespace(hass=hass, manager=manager, timers=timers, alarms=alarms)
        await manager.async_stop()


async def test_restore_keeps_creation_order_duration_and_device_identity(restoration):
    p = restoration
    p.timers.return_value = [timer('aaa-new', 20), timer('zzz-old', 10), timer('other', 5, 'second-speaker')]
    await p.manager.async_restore_from_storage('different-default')
    latest = latest_device_timers(p.manager.get_timer_items())
    assert latest['speaker']['id'] == 'aaa-new'
    assert latest['second-speaker']['id'] == 'other'
    for item in p.manager.get_timer_items():
        assert item['clientId'] == 'original-client'
        assert item['time']['total_seconds'] == 120
        assert item['time']['remaining_seconds'] == 30
        assert item['status'] == 'paused'
    assert p.manager.timer_manager._timers['aaa-new']['created_at'] == 20
    assert p.manager.timer_manager._timers['zzz-old']['created_at'] == 10


async def test_restore_uses_client_default_only_when_missing_and_keeps_alarm_repeat(restoration):
    p = restoration
    p.timers.return_value = [timer('timer', 10, client='')]
    p.alarms.return_value = [{'uuid': 'alarm', 'client_id': 'alarm-client', 'device_id': 'alarm-speaker',
                             'status': 'off', 'time': '07:50', 'volume_start': 0.6,
                             'repeat_type': 'custom', 'repeat_days': ['пн', 'Friday']}]
    await p.manager.async_restore_from_storage('fallback')
    assert p.manager.get_timer_items()[0]['clientId'] == 'fallback'
    alarm = p.manager.alarm_manager._alarms['alarm']
    assert (alarm['client_id'], alarm['device_id'], alarm['status']) == ('alarm-client', 'alarm-speaker', 'off')
    assert (alarm['time'], alarm['volume_start']) == ('07:50', 0.6)
    assert (alarm['repeat_type'], alarm['repeat_days']) == ('custom', ['mon', 'fri'])


async def test_second_restore_does_not_reload_or_recreate_timer(restoration):
    p = restoration
    p.timers.return_value = [timer('timer', 10)]
    await p.manager.async_restore_from_storage('client')
    original = p.manager.timer_manager._timers['timer']
    p.timers.return_value = []
    await p.manager.async_restore_from_storage('other-client')
    assert p.manager.timer_manager._timers['timer'] is original
    p.timers.assert_awaited_once()
    p.alarms.assert_awaited_once()


@pytest.mark.parametrize('failing_store', ['timers', 'alarms'])
async def test_read_failure_does_not_apply_partial_state_and_allows_retry(restoration, failing_store):
    p = restoration
    p.timers.return_value = [timer('timer', 10)]
    store = getattr(p, failing_store)
    store.side_effect = OSError('read failed')
    with pytest.raises(OSError, match='read failed'):
        await p.manager.async_restore_from_storage('client')
    assert not p.manager._restored
    assert p.manager.get_items() == []
    store.side_effect = None
    await p.manager.async_restore_from_storage('client')
    assert p.manager._restored
    assert p.manager.get_timer_items()[0]['id'] == 'timer'


async def test_retry_after_alarm_apply_failure_keeps_existing_timer_task(restoration):
    p = restoration
    request = timer('timer', 10)
    request['status'] = 'on'
    p.timers.return_value = [request]
    with patch.object(p.manager.alarm_manager, 'apply_ui_items', new_callable=AsyncMock,
                      side_effect=RuntimeError('alarm apply failed')):
        with pytest.raises(RuntimeError, match='alarm apply failed'):
            await p.manager.async_restore_from_storage('client')
    assert not p.manager._restored
    original = p.manager.timer_manager._timers['timer']
    task = original['task']
    await p.manager.async_restore_from_storage('client')
    assert p.manager._restored
    assert p.manager.timer_manager._timers['timer'] is original
    assert original['task'] is task
    assert original['created_at'] == 10
    assert original['total_seconds'] == 120


async def test_ui_update_of_alarm_does_not_restart_existing_paused_timer(restoration):
    p = restoration
    items = [
        {'id': 'timer', 'type': 'timer', 'clientId': 'timer-client', 'deviceId': 'speaker-a',
         'status': 'paused', 'time': {'count_timer': '00:02:00', 'total_seconds': 120,
                                      'remaining_seconds': 30, 'created_at': 10}},
        {'id': 'alarm', 'type': 'alarm', 'clientId': 'alarm-client', 'deviceId': 'speaker-b',
         'status': 'off', 'time': {'time': '07:00'}},
    ]
    await p.manager.async_apply_ui_items(items, 'fallback')
    original = p.manager.timer_manager._timers['timer']
    items[1]['time']['time'] = '08:00'
    await p.manager.async_apply_ui_items(items, 'different-fallback')
    assert p.manager.timer_manager._timers['timer'] is original
    assert (original['created_at'], original['total_seconds'], original['remaining_seconds']) == (10, 120, 30)
    assert (original['client_id'], original['device_id']) == ('timer-client', 'speaker-a')
    alarm = p.manager.alarm_manager._alarms['alarm']
    assert (alarm['time'], alarm['client_id'], alarm['device_id']) == ('08:00', 'alarm-client', 'speaker-b')
    assert len(p.manager.get_items()) == 2


async def test_empty_ui_update_removes_both_kinds_of_items(restoration):
    p = restoration
    p.timers.return_value = [timer('timer', 10)]
    p.alarms.return_value = [{'uuid': 'alarm', 'time': '07:00', 'status': 'off'}]
    await p.manager.async_restore_from_storage('client')
    assert len(p.manager.get_items()) == 2
    result = await p.manager.async_apply_ui_items([], 'client')
    assert result == []
    assert p.manager.get_items() == []
