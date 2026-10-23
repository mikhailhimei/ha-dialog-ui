"""Alarm triggering must respect live records and avoid duplicate notifications."""

from datetime import datetime
from unittest.mock import AsyncMock, Mock, patch

import pytest

from custom_components.ha_dialog_ui.timer_alarm import alarm_manager as module
from test_timer_runtime import runtime


@pytest.fixture
async def alarms(runtime):
    hass, _ = runtime
    updated = Mock()
    worked = AsyncMock()
    manager = module.DialogAlarmManager(hass, updated, lambda: 'alarm.mp3', on_alarm_worked=worked)
    with patch.object(module, 'datetime') as clock, patch.object(module, 'audio_notification', new_callable=AsyncMock) as sound:
        clock.now.return_value = datetime(2026, 10, 20, 7, 50)
        yield manager, updated, worked, sound
        await manager.async_stop()


def alarm(name, repeat='once'):
    return {'id': name, 'client_id': 'client', 'device_id': name + '-speaker',
            'time': '07:50', 'status': 'on', 'repeat_type': repeat, 'volume_start': 0.3}


@pytest.mark.parametrize('repeat', ['once', 'daily'])
async def test_same_minute_notifies_once_and_preserves_repeat_status(alarms, repeat):
    manager, updated, worked, sound = alarms
    manager._alarms['alarm'] = alarm('alarm', repeat)
    await manager._alarm_tick_once()
    await manager._alarm_tick_once()
    sound.assert_awaited_once()
    worked.assert_awaited_once()
    updated.assert_called_once()
    assert manager._alarms['alarm']['status'] == ('off' if repeat == 'once' else 'on')
    payload = worked.call_args.args[0]
    assert (payload['alarm_id'], payload['device_id'], payload['client_id']) == ('alarm', 'alarm-speaker', 'client')


@pytest.mark.parametrize('mutation', ['delete', 'replace', 'disable'])
async def test_pending_alarm_changed_during_first_notification_is_not_triggered(alarms, mutation):
    manager, _, worked, sound = alarms
    first, second = alarm('first'), alarm('second')
    manager._alarms.update(first=first, second=second)

    async def on_worked(payload):
        if payload['alarm_id'] != 'first':
            return
        if mutation == 'delete':
            manager._alarms.pop('second')
        elif mutation == 'replace':
            replacement = alarm('second')
            replacement['time'] = '08:00'
            manager._alarms['second'] = replacement
        else:
            second['status'] = 'off'

    worked.side_effect = on_worked
    await manager._alarm_tick_once()
    sound.assert_awaited_once()
    worked.assert_awaited_once()
    assert worked.call_args.args[0]['alarm_id'] == 'first'


async def test_daily_alarm_can_trigger_again_next_day(alarms):
    manager, _, worked, sound = alarms
    manager._alarms['alarm'] = alarm('alarm', 'daily')
    await manager._alarm_tick_once()
    with patch.object(module, 'datetime') as clock:
        clock.now.return_value = datetime(2026, 10, 21, 7, 50)
        await manager._alarm_tick_once()
    assert sound.await_count == 2
    assert worked.await_count == 2


@pytest.mark.parametrize('stage', ['sound', 'scenario'])
async def test_failure_is_logged_and_does_not_block_next_alarm(alarms, caplog, stage):
    manager, _, worked, sound = alarms
    manager._alarms.update(first=alarm('first'), second=alarm('second'))
    failing = sound if stage == 'sound' else worked
    failing.side_effect = [RuntimeError('notification failed'), None]
    await manager._alarm_tick_once()
    assert 'notification failed' in caplog.text
    assert 'first' in caplog.text
    assert manager._alarms['second']['status'] == 'off'
    assert worked.call_args.args[0]['alarm_id'] == 'second'
    await manager._alarm_tick_once()
    assert failing.await_count == 2


@pytest.mark.parametrize('stage', ['sound', 'scenario'])
async def test_notification_cancellation_propagates_and_stops_processing(alarms, stage):
    import asyncio

    manager, _, worked, sound = alarms
    manager._alarms.update(first=alarm('first'), second=alarm('second'))
    failing = sound if stage == 'sound' else worked
    failing.side_effect = asyncio.CancelledError()
    with pytest.raises(asyncio.CancelledError):
        await manager._alarm_tick_once()
    assert failing.await_count == 1
    assert manager._alarms['second']['status'] == 'on'


async def test_trigger_history_is_bounded_to_current_day(alarms):
    manager, _, _, sound = alarms
    manager._alarms['alarm'] = alarm('alarm', 'daily')
    with patch.object(module, 'datetime') as clock:
        for day in range(1, 11):
            clock.now.return_value = datetime(2026, 10, day, 7, 50)
            await manager._alarm_tick_once()
            assert len(manager._triggered_alarm_keys) == 1
    assert sound.await_count == 10


async def test_changing_time_can_trigger_again_but_returning_to_same_minute_does_not(alarms):
    manager, _, _, sound = alarms
    entry = alarm('alarm', 'daily')
    manager._alarms['alarm'] = entry
    await manager._alarm_tick_once()
    entry['time'] = '08:00'
    with patch.object(module, 'datetime') as clock:
        clock.now.return_value = datetime(2026, 10, 20, 8, 0)
        await manager._alarm_tick_once()
    entry['time'] = '07:50'
    await manager._alarm_tick_once()
    assert sound.await_count == 2


async def test_stop_clears_trigger_history(alarms):
    manager, _, _, _ = alarms
    manager._alarms['alarm'] = alarm('alarm', 'daily')
    await manager._alarm_tick_once()
    assert manager._triggered_alarm_keys
    await manager.async_stop()
    assert not manager._triggered_alarm_keys
