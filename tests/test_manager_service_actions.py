"""Boundary behavior of the timer/alarm manager's remaining service actions."""

from datetime import datetime
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.timer_alarm import manager as module
from test_manager_restore import restoration
from test_timer_runtime import runtime


@pytest.mark.parametrize(('now', 'config', 'expected'), [
    ((6, 59), {'hh': 7, 'mm': 0}, '07:00'),
    ((7, 0), {'hh': 7, 'mm': 0}, '19:00'),
    ((18, 59), {'hh': 7, 'mm': 0}, '19:00'),
    ((19, 0), {'hh': 7, 'mm': 0}, '07:00'),
    ((23, 0), {'hh': 7, 'mm': 0}, '07:00'),
    ((8, 0), {'hh': 7, 'mm': 0, 'convert_day_period': True}, '07:00'),
    ((8, 0), {'hh': '7', 'mm': '5', 'convert_day_period': 'true'}, '07:05'),
    ((8, 0), {'hh': 0, 'mm': 0}, '00:00'),
    ((13, 0), {'hh': 12, 'mm': 0}, '12:00'),
    ((8, 0), {'hh': 23, 'mm': 59}, '23:59'),
    ((8, 0), {'hh': 99, 'mm': 99}, '23:59'),
    ((8, 0), {'hh': -1, 'mm': -1}, '00:00'),
    ((8, 0), {'hh': 'invalid', 'mm': 'invalid'}, '00:00'),
])
def test_service_alarm_time_boundaries(restoration, now, config, expected):
    with patch.object(module.dt_util, 'now', return_value=datetime(2026, 10, 20, *now)):
        assert restoration.manager._service_alarm_time_from_config(config) == expected


@pytest.mark.parametrize(('kind', 'action'), [('unknown', 'create'), ('timer', 'unknown'), ('alarm', '')])
async def test_unknown_service_action_does_not_change_state(restoration, kind, action):
    manager = restoration.manager
    result = await manager.async_handle_service_action(kind, {'action': action}, 'client', 'speaker')
    assert result == {'actionType': 'error', 'message': 'Неизвестное действие'}
    assert manager.get_items() == []
    assert manager._save_task is None


async def test_timer_service_create_keeps_hours_minutes_seconds_and_identity(restoration):
    manager = restoration.manager
    with patch.object(manager.timer_manager, 'async_handle_timer_start', new_callable=AsyncMock,
                      return_value={'actionType': 'error', 'message': 'example'}) as create:
        result = await manager.async_handle_service_action('timer', {'action': 'create', 'hh': '1', 'mm': '2', 'ss': '3'}, 'client', 'speaker')
    create.assert_awaited_once_with({'hour': 1, 'minut': 2, 'second': 3}, 'client', 'speaker', True)
    assert result == {'actionType': 'error', 'message': 'example'}


async def test_alarm_service_create_passes_repeat_and_identity(restoration):
    manager = restoration.manager
    with patch.object(manager.alarm_manager, 'async_handle_alarm_start', new_callable=AsyncMock,
                      return_value={'actionType': 'success', 'client_id': 'client', 'device_id': 'speaker'}) as create:
        result = await manager.async_handle_service_action('alarm', {
            'action': 'create', 'hh': 7, 'mm': 50, 'convert_day_period': True,
            'repeat_type': 'custom', 'repeat_days': ['пн', 'Friday', 'пн'],
        }, 'client', 'speaker')
    create.assert_awaited_once_with('07:50', 'client', 'speaker', True, 'custom', ['mon', 'fri'])
    assert (result['clientId'], result['deviceId']) == ('client', 'speaker')


@pytest.mark.parametrize(('kind', 'expected'), [('timer', 'timer.mp3'), ('alarm', 'alarm.mp3')])
def test_media_selection_uses_each_kinds_sound(restoration, kind, expected):
    options = {'timer_music': 'media-source://media_source/local/timer.mp3', 'alarm_music': 'alarm.mp3'}
    with (
        patch.object(module, 'get_integration_entry', return_value=SimpleNamespace()),
        patch.object(module, 'get_cached_settings', return_value={}),
        patch.object(module, 'build_runtime_options', return_value=options),
    ):
        assert restoration.manager._media_content_id_for(kind) == expected


def test_missing_entry_uses_default_sound(restoration):
    with patch.object(module, 'get_integration_entry', return_value=None):
        assert restoration.manager._media_content_id_for('timer') == 'timer-alarm.mp3'
