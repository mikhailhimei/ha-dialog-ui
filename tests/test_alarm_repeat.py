"""Repeat rules shared by alarm runtime and persistence."""

import pytest

from custom_components.ha_dialog_ui.timer_alarm.alarm_repeat import (
    _normalize_repeat_days,
    _normalize_repeat_type,
)


@pytest.mark.parametrize(('value', 'expected'), [
    (None, 'once'), ('', 'once'), ('unknown', 'once'),
    ('one_time', 'once'), ('single', 'once'), ('once', 'once'),
    (' DAILY ', 'daily'), ('everyday', 'daily'),
    ('workdays', 'weekdays'), ('weekdays', 'weekdays'),
    ('weekends', 'weekends'), ('custom', 'custom'),
])
def test_repeat_type_aliases_and_defaults(value, expected):
    assert _normalize_repeat_type(value) == expected


@pytest.mark.parametrize(('value', 'expected'), [
    (None, []), ('', []), (42, []), (('mon',), []),
    ('пн, Tuesday, ср, Thursday, пт, Saturday, вс',
     ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']),
    (['sun', 'mon', 'Sunday', 'пн', 'invalid', ' TUE '], ['sun', 'mon', 'tue']),
    (['monday', 'wednesday', 'friday'], ['mon', 'wed', 'fri']),
    (['mon', None, 42, '', 'weekdays'], ['mon']),
])
def test_repeat_days_preserve_first_occurrence_order(value, expected):
    assert _normalize_repeat_days(value) == expected
