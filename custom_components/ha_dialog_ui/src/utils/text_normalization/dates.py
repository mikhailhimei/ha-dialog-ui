from datetime import date, datetime
import re

from num2words import num2words

from ..normalization_dictionary import get_section, get_subsection
from .inflections import inflect_number_text, inflect_word, number_with_noun

MONTH_NAMES_BY_NUMBER = {}
MONTH_MARKERS = {}

def refresh_normalization_dictionary():
    global _MONTH_NUMBERS_BY_NAME, _MONTH_NAME_ALIASES, MONTH_NAMES_BY_NUMBER, MONTH_MARKERS, _TIME_PREFIXES, GENITIVE_TIME_PREFIXES, DATIVE_TIME_PREFIXES, PLAIN_TIME_PREFIXES, TIME_PREFIXES
    _MONTH_NUMBERS_BY_NAME = get_subsection("genitive_day", "months_map")
    _MONTH_NAME_ALIASES = get_subsection("genitive_day", "month_markers")
    MONTH_NAMES_BY_NUMBER.clear()
    MONTH_NAMES_BY_NUMBER.update({month_number: month_name for month_name, month_number in _MONTH_NUMBERS_BY_NAME.items()})
    MONTH_MARKERS.clear()
    MONTH_MARKERS.update({**_MONTH_NAME_ALIASES, **_MONTH_NUMBERS_BY_NAME})
    _TIME_PREFIXES = get_section("time_prefixes")
    GENITIVE_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("genitive", ()))
    DATIVE_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("dative", ()))
    PLAIN_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("plain", ()))
    TIME_PREFIXES = tuple(dict.fromkeys((*GENITIVE_TIME_PREFIXES, *DATIVE_TIME_PREFIXES, *PLAIN_TIME_PREFIXES)))


refresh_normalization_dictionary()


def build_time_prefix_pattern() -> str:
    return "|".join(re.escape(prefix) for prefix in TIME_PREFIXES)


def year_to_text(year: int) -> str:
    words = num2words(year, lang="ru", to="ordinal").split()
    words[-1] = inflect_word(words[-1], {"gent", "masc", "sing"})
    return f"{' '.join(words)} года"


def day_month_to_text(day: int, month_word: str) -> str:
    month_word = MONTH_MARKERS.get(month_word, month_word)
    month = _MONTH_NUMBERS_BY_NAME[month_word]
    day_text = num2words(day, lang="ru", to="ordinal", gender="neuter")

    return f"{day_text} {MONTH_NAMES_BY_NUMBER[month]}"


def date_to_text(day: int, month: int, year: int, current_year: int | None = None) -> str:
    date(year or 2000, month, day)
    current_year = datetime.now().year if current_year is None else current_year
    result = f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} {MONTH_NAMES_BY_NUMBER[month]}"

    if year != current_year:
        result += f" {year_to_text(year)}"

    return result


def day_number_to_text(day: int) -> str:
    return f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} число"


def time_to_text(hour: int, minute: int, second: int = 0, prefix: str = "") -> str:
    prefix = prefix.lower()

    if prefix in GENITIVE_TIME_PREFIXES:
        grammatical_case = "gent"
        hour_word = "часов"
        minute_word = "минут"
        second_word = "секунд"
    elif prefix in DATIVE_TIME_PREFIXES:
        grammatical_case = "datv"
        hour_word = "часам"
        minute_word = "минутам"
        second_word = "секундам"
    else:
        grammatical_case = None
        hour_word = "час"
        minute_word = "минута"
        second_word = "секунда"

    parts = []

    if hour != 0:
        if grammatical_case:
            hour_text = inflect_number_text(num2words(hour, lang="ru"), grammatical_case)
            parts.append(f"{hour_text} {hour_word}")
        else:
            parts.append(number_with_noun(hour, hour_word))

    if minute != 0:
        if grammatical_case:
            minute_text = inflect_number_text(num2words(minute, lang="ru"), grammatical_case)
            parts.append(f"{minute_text} {minute_word}")
        else:
            parts.append(number_with_noun(minute, minute_word))

    if second != 0:
        if grammatical_case:
            second_text = inflect_number_text(num2words(second, lang="ru"), grammatical_case)
            parts.append(f"{second_text} {second_word}")
        else:
            parts.append(number_with_noun(second, second_word))

    if not parts:
        parts.append(number_with_noun(0, minute_word))

    return " ".join(parts)


def mark_time_match(match: re.Match) -> str:
    prefix = match.group("prefix") or ""
    hour = match.group("prefixed_hour") or match.group("hour")
    minute = match.group("prefixed_minute") or match.group("minute")
    seconds = match.group("prefixed_second") or match.group("second") or "00"

    return f"__TIME__{prefix}|{hour}:{minute}:{seconds}__"


def format_date_match(match: re.Match) -> str:
    try:
        if match.group("y1"):
            return date_to_text(
                int(match.group("d1")),
                int(match.group("m1")),
                int(match.group("y1")),
            )

        if match.group("d2"):
            return date_to_text(
                int(match.group("d2")),
                int(match.group("m2")),
                int(match.group("y2")),
            )

        if match.group("d3"):
            return date_to_text(
                int(match.group("d3")),
                int(match.group("m3")),
                0,
                current_year=0,
            )

        return match.group(0)
    except (ValueError, KeyError):
        return match.group(0)


def expand_time_marker(match: re.Match) -> str:
    prefix = match.group(1) or ""
    hour, minute, second = map(int, match.group(2).split(":"))
    result = time_to_text(hour, minute, second, prefix)

    if prefix:
        return f"{prefix} {result}"

    return result
