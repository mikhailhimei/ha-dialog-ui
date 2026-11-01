"""Reminder persistence, scheduling, target isolation and public API contracts."""
import asyncio
from datetime import timedelta
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
import pytest_asyncio
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.util import dt as dt_util
from homeassistant.helpers import entity_registry as er

from custom_components.ha_dialog_ui import reminder_api, reminders
from custom_components.ha_dialog_ui.const import DOMAIN


@pytest_asyncio.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    await er.async_get(hass).async_load()
    hass.states.async_set('media_player.kitchen', 'idle', {'friendly_name': 'Кухня'})
    hass.states.async_set('media_player.bedroom', 'idle')
    manager = reminders.ReminderManager(hass)
    await manager.restore()
    yield hass, manager
    await manager.stop()
    await hass.async_stop()


async def test_persist_restore_schedule_delivery_and_no_replay(runtime):
    hass, manager = runtime
    text = 'Напомнить насыпать еды через 30 минут'
    item = await manager.create(text, 'media_player.kitchen', delay_seconds=1800)
    await manager.stop()
    fresh = reminders.ReminderManager(hass)
    await fresh.restore()
    try:
        assert fresh.items() == [item]
        assert item['id'] in fresh._cancel
        with patch.object(fresh, '_speak', new_callable=AsyncMock) as speak:
            await fresh._fire(item['id'])
            speak.assert_awaited_once_with({**item, 'status': 'completed'})
            await fresh._fire(item['id'])
            assert speak.await_count == 1
        await fresh.stop()
        restored = reminders.ReminderManager(hass)
        await restored.restore()
        assert restored.items()[0]['status'] == 'completed'
        assert not restored._cancel
        await restored.stop()
    finally:
        await fresh.stop()


async def test_actual_scheduled_callback_and_delete_cancellation(runtime):
    hass, manager = runtime
    callbacks = []
    cancel = Mock()
    def track(_hass, callback, when):
        callbacks.append((callback, when))
        return cancel
    with patch.object(reminders, 'async_track_point_in_utc_time', side_effect=track):
        item = await manager.create('Текст', 'media_player.kitchen', delay_seconds=1800)
        assert 1790 < (callbacks[0][1] - dt_util.utcnow()).total_seconds() <= 1800
        await manager.delete(item['id'])
        cancel.assert_called_once()
        with patch.object(manager, '_speak', new_callable=AsyncMock) as speak:
            callbacks[0][0](dt_util.utcnow())  # A queued callback cannot deliver a deleted item.
            await hass.async_block_till_done()
            speak.assert_not_awaited()
        item = await manager.create('Дословно', 'media_player.kitchen', delay_seconds=10)
        with patch.object(manager, '_speak', new_callable=AsyncMock) as speak:
            callbacks[1][0](dt_util.utcnow())
            await hass.async_block_till_done()
            speak.assert_awaited_once()
            assert manager.items()[0]['status'] == 'completed'


@pytest.mark.parametrize('kwargs', [
    {}, {'at': 'invalid'}, {'at': '2000-01-01T00:00:00Z'},
    {'delay_seconds': -1}, {'delay_seconds': float('nan')},
    {'delay_seconds': float('inf')}, {'delay_seconds': 1, 'at': '2099-01-01'},
])
async def test_invalid_schedule_rejected_without_persisting(runtime, kwargs):
    _, manager = runtime
    with pytest.raises(HomeAssistantError):
        await manager.create('Текст', 'media_player.kitchen', **kwargs)
    assert not manager.items()


async def test_save_failure_does_not_arm_or_delete(runtime):
    _, manager = runtime
    with patch.object(manager._store, 'async_save', side_effect=OSError('disk full')):
        with pytest.raises(OSError):
            await manager.create('Текст', 'media_player.kitchen', delay_seconds=10)
    assert not manager.items() and not manager._cancel
    item = await manager.create('Текст', 'media_player.kitchen', delay_seconds=10)
    with patch.object(manager._store, 'async_save', side_effect=OSError('disk full')):
        with pytest.raises(OSError):
            await manager.delete(item['id'])
    assert manager.items() == [item]
    assert item['id'] in manager._cancel


async def test_exact_text_speaker_and_pipeline_voice(runtime):
    hass, manager = runtime
    item = await manager.create('Напомнить насыпать еды через 30 минут', 'media_player.kitchen', delay_seconds=1800)
    pipeline = SimpleNamespace(tts_engine='tts.piper', tts_language='ru', tts_voice='irina')
    with patch('homeassistant.components.assist_pipeline.async_get_pipeline', return_value=pipeline), patch.object(type(hass.services), 'async_call', new_callable=AsyncMock) as call:
        await manager._fire(item['id'])
    call.assert_awaited_once_with('tts', 'speak', {
        'media_player_entity_id': 'media_player.kitchen', 'message': item['text'],
        'language': 'ru', 'options': {'voice': 'irina'},
    }, target={'entity_id': 'tts.piper'}, blocking=True)
    assert manager.items()[0]['status'] == 'completed'


async def test_satellite_announcement_and_offline_failure(runtime):
    hass, manager = runtime
    hass.states.async_set('assist_satellite.voice', 'idle', {'supported_features': 1})
    item = await manager.create('Весь текст', 'assist_satellite.voice', delay_seconds=10)
    with patch.object(type(hass.services), 'async_call', new_callable=AsyncMock) as call:
        await manager._fire(item['id'])
    call.assert_awaited_once_with('assist_satellite', 'announce', {'message': 'Весь текст'},
                                 target={'entity_id': 'assist_satellite.voice'}, blocking=True)
    item = await manager.create('Не другая колонка', 'media_player.kitchen', delay_seconds=10)
    hass.states.async_set('media_player.kitchen', 'unavailable')
    with patch.object(type(hass.services), 'async_call', new_callable=AsyncMock) as call:
        await manager._fire(item['id'])
    call.assert_not_awaited()
    failed = next(i for i in manager.items() if i['id'] == item['id'])
    assert failed['status'] == 'failed' and failed['error']


async def test_overdue_restore_and_interrupted_not_replayed(runtime):
    hass, manager = runtime
    await manager.stop()
    overdue = {'id': 'overdue', 'text': 'Опоздало', 'at': (dt_util.utcnow() - timedelta(hours=1)).isoformat(), 'device_id': 'media_player.kitchen', 'status': 'pending'}
    interrupted = {**overdue, 'id': 'interrupted', 'status': 'delivering'}
    with patch.object(manager._store, 'async_load', return_value=[overdue, interrupted]), patch.object(reminders, 'async_track_point_in_utc_time') as track:
        await manager.restore()
        assert track.call_count == 1
        assert track.call_args.args[2] >= dt_util.utcnow() - timedelta(seconds=1)
        assert next(i for i in manager.items() if i['id'] == 'interrupted')['status'] == 'failed'


async def test_service_create_info_delete_response_and_ws_ids(runtime):
    hass, manager = runtime
    reminder_api.register_services(hass)
    with patch.object(reminder_api, '_manager', return_value=manager):
        created = await hass.services.async_call(DOMAIN, 'reminder_create', {
            'text': 'Скрипт', 'device_id': 'media_player.kitchen', 'delay_seconds': 1800,
        }, blocking=True, return_response=True)
        item = created['reminder']
        info = await hass.services.async_call(DOMAIN, 'reminder_info', {}, blocking=True, return_response=True)
        assert info['reminders'] == [item]
        connection = Mock()
        await reminder_api._get.__wrapped__(hass, connection, {'id': 42, 'type': 'ha_dialog_ui/reminders/get'})
        assert connection.send_result.call_args.args[0] == 42
        assert connection.send_result.call_args.args[1]['reminders'] == [item]
        assert {'id': 'media_player.kitchen', 'name': 'Кухня'} in connection.send_result.call_args.args[1]['devices']
        await reminder_api._delete.__wrapped__(hass, connection, {'id': 43, 'type': 'ha_dialog_ui/reminders/delete', 'reminder_id': item['id']})
        connection.send_result.assert_called_with(43, {'deleted': item['id']})
        assert not manager.items()
        await reminder_api._delete.__wrapped__(hass, connection, {'id': 44, 'reminder_id': item['id']})
        assert connection.send_error.call_args.args[0:2] == (44, 'reminder_error')


async def test_info_only_active_unless_history_requested(runtime):
    hass, manager = runtime
    reminder_api.register_services(hass)
    for status in ('pending', 'delivering', 'completed', 'failed'):
        manager._items[status] = {'id': status, 'status': status, 'at': '2099-01-01T00:00:00Z',
                                  'device_id': 'media_player.kitchen', 'text': status}
    with patch.object(reminder_api, '_manager', return_value=manager):
        async def info(data):
            return (await hass.services.async_call(DOMAIN, 'reminder_info', data,
                    blocking=True, return_response=True))['reminders']
        assert {item['id'] for item in await info({})} == {'pending', 'delivering'}
        assert {item['id'] for item in await info({'include_history': True})} == {'pending', 'delivering', 'completed', 'failed'}
        assert await info({'id': 'completed'}) == []
        assert [item['id'] for item in await info({'id': 'completed', 'include_history': True})] == ['completed']
        assert await info({'device_id': 'media_player.other'}) == []
        connection = Mock()
        await reminder_api._get.__wrapped__(hass, connection, {'id': 1})
        assert len(connection.send_result.call_args.args[1]['reminders']) == 4
