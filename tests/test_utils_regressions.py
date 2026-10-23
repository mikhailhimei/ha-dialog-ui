from datetime import datetime

import pytest

from custom_components.ha_dialog_ui.src.utils.value_parser import _parse_date_value, _parse_time_value
from custom_components.ha_dialog_ui.src.utils.text_normalization import prepare_speech_text, number_with_noun, number_with_noun_in_genitive, year_to_text


@pytest.mark.parametrize('text', ['31.02.2026', '31.13.2026', '32.01.2026', '31 февраля 2026', '40 марта', '29.02.2025'])
def test_invalid_full_date_is_not_reinterpreted_as_day_of_month(text):
    assert _parse_date_value(text, now=datetime(2026, 1, 1)) is None


@pytest.mark.parametrize(('text','expected'), [
    ('31', '31.01.26'), ('31.01.2026', '31.01.26'),
    ('29 февраля', '29.02.28'), ('завтра', '02.01.26'),
])
def test_valid_date_formats_and_day_only_remain_supported(text, expected):
    assert _parse_date_value(text, now=datetime(2026, 1, 1)) == expected


@pytest.mark.parametrize('text', ['Дата 31.13.2026', 'Дата 31.02.2026', 'Дата 2026-13-31', 'Дата 31.13', '31.13.2026 и 31.02.2026'])
def test_invalid_date_in_speech_is_preserved_without_exception(text):
    assert prepare_speech_text(text) == text


def test_valid_date_in_speech_is_still_pronounced():
    result = prepare_speech_text('Дата 03.01.2003')
    assert result == 'Дата третье января две тысячи третьего года'


@pytest.mark.parametrize(('year','expected'), [
    (2003,'две тысячи третьего года'), (2023,'две тысячи двадцать третьего года'),
    (2021,'две тысячи двадцать первого года'), (2022,'две тысячи двадцать второго года'),
])
def test_year_uses_ordinal_genitive_form(year, expected):
    assert year_to_text(year) == expected


@pytest.mark.parametrize(('number','expected'), [
    (1,'одной минуты'), (2,'двух минут'), (5,'пяти минут'),
    (11,'одиннадцати минут'), (21,'двадцати одной минуты'), (25,'двадцати пяти минут'),
])
def test_genitive_ranges_agree_with_number(number, expected):
    assert number_with_noun_in_genitive(number, 'минута') == expected


@pytest.mark.parametrize(('number','word','expected'), [(1,'час','один час'), (2,'минута','две минуты'), (5,'секунда','пять секунд')])
def test_shared_gender_helper_preserves_regular_phrases(number, word, expected):
    assert number_with_noun(number, word) == expected


@pytest.mark.parametrize('flag', [False, 'false', '0', 'off', 'no', 0])
def test_false_time_flag_is_not_truthy_string(flag):
    result = _parse_time_value({'hour':1, 'times_of_day':flag})
    assert result['times_of_day'] is False


@pytest.mark.parametrize('flag', [True, 'true', '1', 'on', 'yes', 1])
def test_midnight_is_valid_clock_time(flag):
    assert _parse_time_value({'hour':0, 'times_of_day':flag}) == {
        'hour':0, 'minut':0, 'second':0, 'times_of_day':True,
    }


@pytest.mark.parametrize('data', [
    {'hour':-1}, {'minut':-1}, {'second':-1}, {'hour':True}, {'hour':1.5},
    {'hour':25,'times_of_day':True}, {'minut':60,'times_of_day':True},
    {'second':60,'times_of_day':True}, {'hour':1,'times_of_day':'maybe'},
    {'hour':1,'times_of_day':2}, {'hour':'1'},
])
def test_invalid_time_dictionary_is_rejected(data):
    assert _parse_time_value(data) is None


def test_duration_normalizes_overflow_and_allows_more_than_24_hours():
    assert _parse_time_value({'hour':25,'minut':90,'second':90}) == {
        'hour':26, 'minut':31, 'second':30, 'times_of_day':False,
    }
    assert _parse_time_value({'hour':0,'minut':0,'second':0}) is None


@pytest.mark.parametrize(('text','hour','minute','clock'), [
    ('7 часов 30 минут утра',7,30,True), ('7 30 минут вечера',19,30,True),
    ('7 30',7,30,False), ('07:30',7,30,False), ('1 минуту',0,1,False),
])
def test_clock_refactor_preserves_supported_text_formats(text,hour,minute,clock):
    result = _parse_time_value(text, now=datetime(2026, 1, 1, 17))
    assert result == {'hour':hour,'minut':minute,'second':0,'times_of_day':clock}


@pytest.mark.parametrize(('text', 'expected'), [
    ('до 21 <<минута>>', 'до двадцати одной минуты'),
    ('от 1 <<секунда>>', 'от одной секунды'),
])
def test_marked_ranges_are_correct_through_speech_pipeline(text, expected):
    assert prepare_speech_text(text) == expected
