from datetime import datetime

import pytest

from custom_components.ha_dialog_ui.src.utils.value_parser import _parse_date_value, _parse_time_value
from custom_components.ha_dialog_ui.src.utils.text_normalization import prepare_speech_text, number_with_noun, number_with_noun_in_genitive, year_to_text


@pytest.mark.parametrize('text', ['31.02.2026', '31.13.2026', '32.01.2026', '31 февраля 2026', '40 марта', '29.02.2025'])
def test_invalid_full_date_is_not_reinterpreted_as_day_of_month(text):
    assert _parse_date_value(text, now=datetime(2026, 1, 1)) is None


@pytest.mark.parametrize(('text','expected'), [
    ('31 числа', '31.01.26'), ('31.01.2026', '31.01.26'),
    ('29 февраля', '29.02.28'), ('завтра', '02.01.26'),
])
def test_valid_date_formats_and_day_only_remain_supported(text, expected):
    assert _parse_date_value(text, now=datetime(2026, 1, 1)) == expected


@pytest.mark.parametrize('text', ['7', '7 утра', 'напомни насыпать еды в 7 утра',
                                 '14:00', 'в 14 часов', 'через 7 минут', '7 числатель', 'число 70', '0 числа'])
def test_day_number_requires_a_valid_adjacent_keyword(text):
    assert _parse_date_value(text, now=datetime(2026, 11, 2)) is None


@pytest.mark.parametrize(('text', 'expected'), [
    ('7 числа', '07.11.26'), ('число 7', '07.11.26'), ('7 ЧИСЛА в 7 утра', '07.11.26'),
    ('1 числа', '01.12.26'), ('31 числа', '31.12.26'),
    ('7 ноября', '07.11.26'), ('07.11.2026', '07.11.26'), ('завтра', '03.11.26'),
])
def test_explicit_day_keywords_and_other_date_forms(text, expected):
    assert _parse_date_value(text, now=datetime(2026, 11, 2)) == expected


def test_reminder_clock_does_not_produce_a_date_entry():
    from custom_components.ha_dialog_ui.src.service.matching.selection import find_top_level_candidates
    node = {'uuid': 'reminder', 'voiceCommands': ['Напомн(и|ю|им)? ${date} ${string2} ${cotimers}'],
            'direct': [{'mappingType': 'date', 'valueType': 'date'},
                       {'mappingType': 'string2', 'valueType': 'all'},
                       {'mappingType': 'cotimers', 'valueType': 'time'}]}
    entries = find_top_level_candidates([node], 'напомни насыпать еды в 7 утра')[0]['direct_entries']
    assert not any(entry['mapping_type'] == 'date' for entry in entries)
    assert next(entry['value'] for entry in entries if entry['mapping_type'] == 'cotimers')['hour'] == 7


@pytest.mark.parametrize(('word', 'expected'), [('сегодня', '02.11.26'), ('завтра', '03.11.26'),
                                              ('послезавтра', '04.11.26')])
def test_relative_date_inside_reminder_sentence(word, expected):
    assert _parse_date_value(f'насыпать еды {word} в 7 утра', now=datetime(2026, 11, 2)) == expected


@pytest.mark.parametrize('text', ['насыпать еды после завтрака', 'сегодняшний план',
                                 'послезавтрашний день', 'вчерашний', 'snow'])
def test_relative_date_requires_whole_words(text):
    assert _parse_date_value(text, now=datetime(2026, 11, 2)) is None


def test_reminder_sentence_includes_relative_date_in_direct_values():
    from custom_components.ha_dialog_ui.src.service.matching.selection import find_top_level_candidates
    from datetime import timedelta
    node = {'uuid': 'reminder', 'voiceCommands': ['Напомн(и|ю|им)? ${date} ${string2} ${cotimers}'],
            'direct': [{'mappingType': 'date', 'valueType': 'date'},
                       {'mappingType': 'string2', 'valueType': 'string'},
                       {'mappingType': 'cotimers', 'valueType': 'time'}]}
    entries = find_top_level_candidates([node], 'напомни насыпать еды завтра в 7 утра')[0]['direct_entries']
    value = next(entry['value'] for entry in entries if entry['mapping_type'] == 'date')
    assert value == (datetime.now() + timedelta(days=1)).strftime('%d.%m.%y')
    assert next(entry['value'] for entry in entries if entry['mapping_type'] == 'cotimers')['hour'] == 7


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
