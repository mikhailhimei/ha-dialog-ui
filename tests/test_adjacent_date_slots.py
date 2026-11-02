"""Reminder text, dates and times must capture separate spans."""
from datetime import datetime
from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.service.matching.selection import find_top_level_candidates, find_matching_node_by_voice_command
from custom_components.ha_dialog_ui.src.service.dialog_execution import resolve_template_direct_entries

NOW = datetime(2026, 11, 2, 12)
DIRECT = [{'mappingType': 'string2', 'valueType': 'all'},
          {'mappingType': 'date', 'valueType': 'date'},
          {'mappingType': 'cotimers', 'valueType': 'time'}]


@pytest.fixture(autouse=True)
def fixed_date():
    class Clock(datetime):
        @classmethod
        def now(cls, tz=None):
            return NOW
    with patch('custom_components.ha_dialog_ui.src.utils.value_parser.datetime', Clock):
        yield


@pytest.mark.parametrize(('date_text', 'expected'), [
    ('завтра', '03.11.26'), ('сегодня', '02.11.26'), ('послезавтра', '04.11.26'),
    ('5 ноября', '05.11.26'), ('05.11.2026', '05.11.26'), ('5 ноября 2026', '05.11.26'),
    ('5', '05.11.26'),
])
@pytest.mark.parametrize('path', ['main', 'continuation'])
def test_reminder_captures_typed_spans(date_text, expected, path):
    pattern = ('Напомн(и|ю|им)?' if path == 'main' else 'напомни') + ' ${string2} ${date} ${cotimers}'
    node = {'uuid': 'reminder', 'voiceCommands': [pattern], 'direct': DIRECT}
    text = f'Напомни насыпать еды {date_text} в 14:00'
    if path == 'main':
        entries = find_top_level_candidates([node], text)[0]['direct_entries']
    else:
        matched, forwarded, values = find_matching_node_by_voice_command([node], text)
        assert matched is node and not forwarded
        entries = resolve_template_direct_entries(DIRECT, text, values)
    values = {entry['mapping_type']: entry['value'] for entry in entries}
    assert values == {'string2': 'насыпать еды', 'date': expected,
                      'cotimers': {'hour': 14, 'minut': 0, 'second': 0, 'times_of_day': False}}


def test_fixed_separators_and_text_prepositions_are_preserved():
    node = {'uuid': 'reminder', 'voiceCommands': ['напомни ${string2} на ${date} в ${cotimers}'], 'direct': DIRECT}
    entries = find_top_level_candidates([node], 'напомни положить еду в миску на завтра в 14:00')[0]['direct_entries']
    assert entries[0]['value'] == 'положить еду в миску'
    assert entries[1]['value'] == '03.11.26'


def test_invalid_full_date_is_not_swallowed_by_free_text():
    node = {'uuid': 'reminder', 'voiceCommands': ['напомни ${string2} ${date} ${cotimers}'], 'direct': DIRECT}
    assert not find_top_level_candidates([node], 'напомни насыпать еды 31 февраля 2026 в 14:00')


def test_reminder_does_not_capture_the_next_command():
    reminder = {'uuid': 'reminder', 'voiceCommands': ['напомни ${string2} ${date} ${cotimers}'], 'direct': DIRECT}
    light = {'uuid': 'light', 'voiceCommands': ['включи свет']}
    matches = find_top_level_candidates([reminder, light], 'напомни насыпать еды завтра в 14:00 включи свет')
    assert {node['uuid'] for node in matches} == {'reminder', 'light'}
    entries = next(node for node in matches if node['uuid'] == 'reminder')['direct_entries']
    assert entries[0]['value'] == 'насыпать еды'
    assert entries[1]['value'] == '03.11.26'
    assert entries[2]['value']['hour'] == 14
