from datetime import datetime
from zoneinfo import ZoneInfo
from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.utils.value_parser import _parse_time_value
from custom_components.ha_dialog_ui.timer_alarm.timer_alarm_utils import _format_datetime, _parse_datetime


@pytest.mark.parametrize(('command', 'expected'), [
    ('Установи таймер на 1 минуту', (0, 1, 0)),
    ('1 минута', (0, 1, 0)), ('5 минут', (0, 5, 0)),
    ('1 секунду', (0, 0, 1)), ('10 секунд', (0, 0, 10)),
    ('1 час', (1, 0, 0)), ('1 час 5 минут 10 секунд', (1, 5, 10)),
    ('1м', (0, 1, 0)), ('1с', (0, 0, 1)),
])
def test_explicit_duration_units(command, expected):
    result = _parse_time_value(command)
    assert (result['hour'], result['minut'], result['second']) == expected
    assert not result['times_of_day']


@pytest.mark.parametrize('command', ['07:30', '7 часов 30 минут утра'])
def test_clock_and_day_period_remain_clock_times(command):
    result = _parse_time_value(command)
    assert (result['hour'], result['minut']) == (7, 30)


@pytest.mark.parametrize('zone', ['UTC', 'Europe/Moscow', 'Asia/Yekaterinburg'])
def test_deadline_serialization_keeps_offset_and_absolute_instant(zone):
    now = datetime(2026, 10, 12, 12, 0, 0, tzinfo=ZoneInfo(zone))
    end = now.timestamp() + 3600
    with patch('custom_components.ha_dialog_ui.timer_alarm.timer_alarm_utils.dt_util.now', return_value=now):
        serialized = _format_datetime(end, zone)
        assert datetime.fromisoformat(serialized).tzinfo is not None
        assert datetime.fromisoformat(serialized).timestamp() == end
        assert _parse_datetime(serialized, zone).timestamp() == end
