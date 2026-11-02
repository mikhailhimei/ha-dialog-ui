"""Configurable relative phrases, calendar boundaries and full sentences."""
from datetime import datetime
import pytest

from custom_components.ha_dialog_ui.src.utils.value_parser import _parse_date_value

NOW = datetime(2026, 11, 2, 12)  # Monday.


@pytest.mark.parametrize(('phrase', 'expected'), [
    ('вчера', '01.11.26'), ('позавчера', '31.10.26'), ('сегодня', '02.11.26'),
    ('завтра', '03.11.26'), ('послезавтра', '04.11.26'),
    ('через 3 дня', '05.11.26'), ('через два дня', '04.11.26'), ('спустя сутки', '03.11.26'),
    ('через неделю', '09.11.26'), ('через две недели', '16.11.26'), ('2 недели назад', '19.10.26'),
    ('три дня назад', '30.10.26'), ('день назад', '01.11.26'), ('через месяц', '02.12.26'),
    ('через 2 месяца', '02.01.27'), ('месяц назад', '02.10.26'), ('через год', '02.11.27'),
    ('2 года назад', '02.11.24'), ('через 0 дней', '02.11.26'),
    ('в понедельник', '02.11.26'), ('в пятницу', '06.11.26'), ('в воскресенье', '08.11.26'),
    ('в следующий понедельник', '09.11.26'), ('в следующую пятницу', '13.11.26'),
    ('в прошлую пятницу', '30.10.26'), ('в эту среду', '04.11.26'),
    ('в ближайшую пятницу', '06.11.26'), ('в понедельник на следующей неделе', '09.11.26'),
    ('на следующей неделе в пятницу', '13.11.26'), ('в пятницу следующей недели', '13.11.26'),
    ('на следующей неделе', '09.11.26'), ('на прошлой неделе', '26.10.26'), ('на этой неделе', '02.11.26'),
    ('в следующем месяце', '01.12.26'), ('в прошлом месяце', '01.10.26'),
    ('в этом месяце', '01.11.26'), ('в следующем году', '01.01.27'), ('в прошлом году', '01.01.25'),
])
@pytest.mark.parametrize('in_sentence', [False, True])
def test_relative_calendar_forms(phrase, expected, in_sentence):
    text = f'напомни насыпать еды {phrase} в 7 утра' if in_sentence else phrase
    assert _parse_date_value(text, now=NOW) == expected


@pytest.mark.parametrize(('now', 'text', 'expected'), [
    (datetime(2026, 1, 31), 'через месяц', '28.02.26'),
    (datetime(2024, 1, 31), 'через месяц', '29.02.24'),
    (datetime(2024, 2, 29), 'через год', '28.02.25'),
    (datetime(2026, 12, 31), 'завтра', '01.01.27'),
    (datetime(2026, 1, 1), 'позавчера', '30.12.25'),
    (datetime(2026, 12, 31), 'в следующий понедельник', '04.01.27'),
    (datetime(2026, 11, 2), 'через 999999999999999999999 дней', None),
])
def test_calendar_boundaries(now, text, expected):
    assert _parse_date_value(text, now=now) == expected


@pytest.mark.parametrize('text', ['7 утра', 'пятничный вечер', 'послезавтрашний',
                                 'понедельниками', 'месячный', 'прошлогодний'])
def test_whole_phrase_boundaries(text):
    assert _parse_date_value(text, now=NOW) is None


@pytest.mark.parametrize('text', ['через 1.5 дня', 'через 2,5 дня', '1.5 месяца назад', 'через -2 дня'])
def test_non_integer_or_negative_counts_are_not_calendar_dates(text):
    assert _parse_date_value(text, now=NOW) is None
