import re

from num2words import num2words

from .dates import (
    day_month_to_text,
    day_number_to_text,
    mark_time_match,
    build_time_prefix_pattern,
    format_date_match,
    expand_time_marker,
    year_to_text,
)
from .inflections import number_with_noun, number_with_noun_in_genitive
from .numbers import expand_marked_words


def prepare_speech_text(text: str) -> str:
    preserved_dates = {}

    def format_date(match):
        formatted_date = format_date_match(match)
        if formatted_date == match.group(0):
            token = f"__RAW_DATE_{len(preserved_dates)}__"
            preserved_dates[token] = formatted_date
            return token
        return formatted_date

    time_prefix_regex = build_time_prefix_pattern()
    text = re.sub(
        rf"(?<!\w)(?P<prefix>{time_prefix_regex})\s+(?P<prefixed_hour>\d{{1,2}}):(?P<prefixed_minute>\d{{2}})(?::(?P<prefixed_second>\d{{2}}))?\b"
        r"|"
        r"(?<!\w)(?P<hour>\d{1,2}):(?P<minute>\d{2})(?::(?P<second>\d{2}))?\b",
        mark_time_match,
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(?:(?<=^)|(?<=\s))([1-9]\d*)\.(?!\d)",
        lambda match: f"Номер {num2words(int(match.group(1)), lang='ru')}",
        text,
    )

    # Handle case-governing prepositions before generic number + unit expansion
    # turns the numbers into nominative words and loses their context.
    time_unit = r'час(?:а|ов)?|минут(?:а|ы)?|секунд(?:а|ы)?'

    def unit_noun(word):
        return 'час' if word.lower().startswith('час') else 'минута' if word.lower().startswith('минут') else 'секунда'

    def time_range(match):
        noun = unit_noun(match.group('unit'))
        first = number_with_noun_in_genitive(int(match.group('start')), noun).rsplit(' ', 1)[0]
        last = number_with_noun_in_genitive(int(match.group('end')), noun)
        return f"{match.group('prefix')} {first} до {last}"

    text = re.sub(
        rf'(?<!\w)(?P<prefix>с|от)\s+(?P<start>\d+)\s+до\s+(?P<end>\d+)\s+(?P<unit>{time_unit})\b',
        time_range, text, flags=re.IGNORECASE,
    )
    text = re.sub(
        rf'(?<!\w)(?P<prefix>с|от|до|около)\s+(?P<number>\d+)\s+(?P<unit>{time_unit})\b',
        lambda match: f"{match.group('prefix')} {number_with_noun_in_genitive(int(match.group('number')), unit_noun(match.group('unit')))}",
        text, flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(\d+)\s+минут[аы]?",
        lambda match: number_with_noun(int(match.group(1)), "минута"),
        text,
    )

    text = re.sub(
        r"(\d+)\s+секунд[аы]?",
        lambda match: number_with_noun(int(match.group(1)), "секунда"),
        text,
    )

    text = re.sub(
        r"(\d+)\s+час(а|ов)?",
        lambda match: number_with_noun(int(match.group(1)), "час"),
        text,
    )

    text = re.sub(
        r"\b(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\b",
        lambda match: day_month_to_text(int(match.group(1)), match.group(2)),
        text,
    )

    text = re.sub(
        r"(?P<y1>\d{4})-(?P<m1>\d{1,2})-(?P<d1>\d{1,2})"
        r"|"
        r"(?P<d2>\d{1,2})\.(?P<m2>\d{1,2})\.(?P<y2>\d{4})"
        r"|"
        r"(?P<d3>\d{1,2})\.(?P<m3>\d{1,2})(?!\.\d)",
        format_date,
        text,
    )

    text = re.sub(
        r"\b(20\d{2})\b",
        lambda match: year_to_text(int(match.group(1))),
        text,
    )

    text = re.sub(
        rf"__TIME__({time_prefix_regex})?\|(\d{{1,2}}:\d{{2}}:\d{{2}})__",
        expand_time_marker,
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\b(\d{1,2})\s+число\b",
        lambda match: day_number_to_text(int(match.group(1))),
        text,
    )

    text = expand_marked_words(text)

    text = re.sub(
        r"(?<![\w:./-])(-?\d+)(?![\w:./-])",
        lambda match: num2words(int(match.group(1)), lang="ru"),
        text,
    )

    for token, original_date_text in preserved_dates.items():
        text = text.replace(token, original_date_text)
    return text
