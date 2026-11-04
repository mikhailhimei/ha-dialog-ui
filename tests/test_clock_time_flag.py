"""Direct time values identify clocks versus timer durations."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.src.utils.value_parser import _parse_time_value
from custom_components.ha_dialog_ui.dialog.script_runner import build_script_payload
from custom_components.ha_dialog_ui.src.service.matching.selection import find_top_level_candidates


@pytest.mark.parametrize('text,hour,minute,second,clock', [
    ('в 14:00', 14, 0, 0, True), ('14:00', 14, 0, 0, True),
    ('00:00', 0, 0, 0, True), ('07:30:25', 7, 30, 25, True),
    ('7 утра', 7, 0, 0, True), ('7 вечера', 19, 0, 0, True),
    ('7 часов 30 минут вечера', 19, 30, 0, True), ('в 7 часов', 7, 0, 0, True),
    ('7 30', 7, 30, 0, True), ('1430', 14, 30, 0, True),
    ('через 7 минут', 0, 7, 0, False), ('через 7', 0, 7, 0, False),
    ('на 2 часа', 2, 0, 0, False), ('1 час 30 минут 10 секунд', 1, 30, 10, False),
    ('через 00:30', 0, 30, 0, False), ('3 дня', 72, 0, 0, False),
    ('через 3 дня', 72, 0, 0, False), ('через 3 дня в 7 утра', 7, 0, 0, True),
])
def test_clock_and_duration_classification(text, hour, minute, second, clock):
    assert _parse_time_value(text) == {'hour': hour, 'minut': minute, 'second': second, 'is_clock_time': clock}


@pytest.mark.parametrize('flag', ['is_clock_time', 'times_of_day', 'timesOfDay'])
def test_old_input_flags_are_accepted_but_new_name_is_returned(flag):
    assert _parse_time_value({'hour': 7, flag: True}) == {
        'hour': 7, 'minut': 0, 'second': 0, 'is_clock_time': True}


def test_new_flag_has_priority_and_public_values_round_trip():
    assert _parse_time_value({'hours': 26, 'minutes': 5, 'seconds': 0,
                              'is_clock_time': False, 'times_of_day': True}) == {
        'hour': 26, 'minut': 5, 'second': 0, 'is_clock_time': False}


def test_legacy_public_payload_uses_new_flag_without_mutation():
    source = {'direct_values': [{'value_type': 'time', 'name': 'cotimers', 'value': {
        'hours': 7, 'minutes': 0, 'seconds': 0, 'times_of_day': True}}]}
    before = deepcopy(source)
    value = build_script_payload(source)['direct_values'][0]['value']
    assert value == {'hours': 7, 'minutes': 0, 'seconds': 0, 'is_clock_time': True}
    assert source == before


@pytest.mark.parametrize('text,clock', [('напомни в 14:00', True), ('напомни через 7 минут', False)])
def test_new_flag_reaches_ha_script_payload(text, clock):
    node = {'uuid': 'command', 'voiceCommands': ['напомни ${cotimers}'],
            'direct': [{'mappingType': 'cotimers', 'valueType': 'time'}]}
    direct = find_top_level_candidates([node], text)[0]['direct_entries']
    source = {'children_direct_type': direct}
    before = deepcopy(source)
    value = build_script_payload(source)['direct_values'][0]['value']
    assert value['is_clock_time'] is clock
    assert 'times_of_day' not in value
    assert 'timesOfDay' not in value
    assert {'hours', 'minutes', 'seconds'} <= value.keys()
    assert source == before
