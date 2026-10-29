import calendar
import re
from datetime import date, datetime, timedelta
from .normalization_dictionary import get_section, get_subsection
from .text_normalization import sanitize_location_text


def refresh_normalization_dictionary():
    global _MONTH_PATTERN, _MONTH_DATA, _MONTH_NAME_TO_NUMBER, _MORNING_MARKERS, _EVENING_MARKERS, _DAY_MARKERS, _NIGHT_MARKERS, _TIME_MINUTES, _TIME_HOURS, _TIME_SECONDS, _NON_CLOCK_DURATION_MARKERS
    _MONTH_DATA = get_section("months")
    _MONTH_NAME_TO_NUMBER = {
        name: int(month_number)
        for month_number, names in _MONTH_DATA.items()
        for name in names
    }
    _MORNING_MARKERS = set(get_subsection("time_markers", "morning"))
    _EVENING_MARKERS = set(get_subsection("time_markers", "evening"))
    _DAY_MARKERS = set(get_subsection("time_markers", "day"))
    _NIGHT_MARKERS = set(get_subsection("time_markers", "night"))
    _TIME_MINUTES = get_subsection("time_units", "minutes")
    _TIME_HOURS = get_subsection("time_units", "hours")
    _TIME_SECONDS = get_subsection("time_units", "seconds")

    _NON_CLOCK_DURATION_MARKERS = (
        set(_TIME_MINUTES)
        | set(_TIME_HOURS)
        | set(_TIME_SECONDS)
    )

    _MONTH_PATTERN = "|".join(sorted((re.escape(name) for name in _MONTH_NAME_TO_NUMBER), key=len, reverse=True))


refresh_normalization_dictionary()

_NUMERIC_DATE_PATTERN = re.compile(
    r"\b(?P<day>\d{1,2})[.\-/ ]+(?P<month>\d{1,2})(?:[.\-/ ]+(?P<year>\d{2,4}))?\b"
)
_CLOCK_TIME_PATTERN = re.compile(
    r"\b(?P<hour>[01]?\d|2[0-3])[:\.](?P<minut>[0-5]\d)(?::(?P<second>[0-5]\d))?\b"
)
_DIGIT_CLOCK_TIME_PATTERN = re.compile(
    r"\b(?P<hour>[01]?\d|2[0-3])(?P<minut>[0-5]\d)\b"
)
_SPACED_CLOCK_TIME_PATTERN = re.compile(
    r"\b(?P<hour>[01]?\d|2[0-3])\s+(?P<minut>[0-5]?\d)(?:\s+(?P<second>[0-5]?\d))?\b"
)
_HOUR_MINUTE_UNITS_PATTERN = re.compile(
    r"\b(?P<hour>[01]?\d|2[0-3])\s*(?:час(?:а|ов)?|ч)\s*(?P<minut>[0-5]?\d)\s*(?:мин(?:ут(?:а|ы|у)?)?|м)\b"
)
_HOUR_ONLY_PATTERN = re.compile(r"\b(?P<hour>[01]?\d|2[0-3])\s*(?:час(?:а|ов)?|ч)\b")


def _build_valid_date(day: int, month: int, year: int) -> date | None:
    try:
        return date(year, month, day)
    except ValueError:
        return None


def _nearest_date_by_day(day: int, base_date: date) -> date | None:
    if day < 1 or day > 31:
        return None

    year = base_date.year
    month = base_date.month

    for _ in range(24):
        days_in_month = calendar.monthrange(year, month)[1]
        if day <= days_in_month:
            candidate = date(year, month, day)
            if candidate >= base_date:
                return candidate
        month += 1
        if month > 12:
            month = 1
            year += 1

    return None


def _parse_day_month_date(text: str, now: datetime) -> date | None:
    numeric_match = _NUMERIC_DATE_PATTERN.search(text)
    if numeric_match:
        day = int(numeric_match.group("day"))
        month = int(numeric_match.group("month"))
        year_text = numeric_match.group("year")
        if year_text:
            year = int(year_text)
            if year < 100:
                year += 2000
            return _build_valid_date(day, month, year)

        today = now.date()
        year = today.year
        for _ in range(10):
            candidate = _build_valid_date(day, month, year)
            if candidate and candidate >= today:
                return candidate
            year += 1
        return None

    tokens = re.findall(r"[0-9]+|[a-zа-яё]+", text.lower())
    for token_index in range(len(tokens) - 1):
        day_token = tokens[token_index]
        if not day_token.isdigit():
            continue

        day = int(day_token)
        if day < 1 or day > 31:
            continue

        month_token = tokens[token_index + 1]
        if month_token not in _MONTH_NAME_TO_NUMBER:
            continue

        month = _MONTH_NAME_TO_NUMBER[month_token]
        year = None

        if token_index + 2 < len(tokens):
            next_token = tokens[token_index + 2]
            if next_token.isdigit() and 2 <= len(next_token) <= 4:
                year = int(next_token)
                if year < 100:
                    year += 2000
                return _build_valid_date(day, month, year)

        today = now.date()
        year = today.year
        for _ in range(10):
            candidate = _build_valid_date(day, month, year)
            if candidate and candidate >= today:
                return candidate
            year += 1

    return None


def _parse_date_value(value, now=None):
    now = now or datetime.now()
    if isinstance(value, datetime):
        return value.strftime("%d.%m.%y")
    if isinstance(value, date):
        return value.strftime("%d.%m.%y")

    text = str(value or "").strip().lower()
    if not text:
        return None

    if text in {"сегодня", "today", "now", "сейчас"}:
        return now.strftime("%d.%m.%y")
    if text in {"завтра", "tomorrow"}:
        return (now + timedelta(days=1)).strftime("%d.%m.%y")
    if text in {"послезавтра"}:
        return (now + timedelta(days=2)).strftime("%d.%m.%y")

    parsed_day_month = _parse_day_month_date(text, now)
    if parsed_day_month is not None:
        return parsed_day_month.strftime("%d.%m.%y")

    if _NUMERIC_DATE_PATTERN.search(text) or re.search(rf"\b\d+\s+(?:{_MONTH_PATTERN})\b", text):
        return None

    day_match = re.search(r"\b([0-2]?\d|3[01])\b", text)
    if not day_match:
        return None

    nearest_date = _nearest_date_by_day(int(day_match.group(1)), now.date())
    if nearest_date is None:
        return None
    return nearest_date.strftime("%d.%m.%y")


def _has_times_of_day_marker(text: str) -> bool:
    tokens = set(re.findall(r"[a-zа-яё]+", text.lower()))
    return bool(tokens & (_MORNING_MARKERS | _EVENING_MARKERS | _DAY_MARKERS | _NIGHT_MARKERS))


def _apply_day_period(hour: int, text: str) -> int:
    tokens = set(re.findall(r"[a-zа-яё]+", text.lower()))
    has_morning = bool(tokens & _MORNING_MARKERS)
    has_evening = bool(tokens & _EVENING_MARKERS)
    has_day = bool(tokens & _DAY_MARKERS)
    has_night = bool(tokens & _NIGHT_MARKERS)

    if has_morning:
        if hour == 12:
            return 0
        return hour

    if has_evening or has_day:
        if hour == 0:
            return 12
        if 1 <= hour <= 11:
            return hour + 12
        return hour

    if has_night:
        if hour == 12:
            return 0
        if 1 <= hour <= 5:
            return hour
        if 6 <= hour <= 11:
            return hour + 12
        return hour

    return hour


def _parse_clock_time(command_text: str, now: datetime) -> dict | None:
    text = str(command_text or "").strip().lower()
    if not text:
        return None

    has_times_of_day = _has_times_of_day_marker(text)

    clock_match = _CLOCK_TIME_PATTERN.search(text)
    if clock_match:
        hour = int(clock_match.group("hour"))
        minute = int(clock_match.group("minut"))
        second = int(clock_match.group("second") or 0)
        if has_times_of_day:
            hour = _apply_day_period(hour, text)
        return {"hour": hour, "minut": minute, "second": second, "times_of_day": has_times_of_day}

    hour_minute_units_match = _HOUR_MINUTE_UNITS_PATTERN.search(text)
    if hour_minute_units_match:
        hour = int(hour_minute_units_match.group("hour"))
        minute = int(hour_minute_units_match.group("minut"))
        if has_times_of_day:
            hour = _apply_day_period(hour, text)
        return {"hour": hour, "minut": minute, "second": 0, "times_of_day": has_times_of_day}

    tokens = set(re.findall(r"[a-zа-яё]+", text.lower()))
    has_non_clock_units = bool(tokens & _NON_CLOCK_DURATION_MARKERS)
    spaced_clock_match = _SPACED_CLOCK_TIME_PATTERN.search(text)
    if spaced_clock_match and (not has_non_clock_units or has_times_of_day):
        hour = int(spaced_clock_match.group("hour"))
        minute = int(spaced_clock_match.group("minut"))
        second = int(spaced_clock_match.group("second") or 0)
        if has_times_of_day:
            hour = _apply_day_period(hour, text)
        return {"hour": hour, "minut": minute, "second": second, "times_of_day": has_times_of_day}

    hour_match = _HOUR_ONLY_PATTERN.search(text)
    if hour_match:
        hour = int(hour_match.group("hour"))
        if has_times_of_day:
            hour = _apply_day_period(hour, text)
        return {"hour": hour, "minut": 0, "second": 0, "times_of_day": has_times_of_day}

    digit_clock_match = _DIGIT_CLOCK_TIME_PATTERN.search(text)
    if digit_clock_match and not has_non_clock_units:
        matched_text = digit_clock_match.group(0)
        if len(matched_text) in {3, 4}:
            hour = int(digit_clock_match.group("hour"))
            minute = int(digit_clock_match.group("minut"))
            if has_times_of_day:
                hour = _apply_day_period(hour, text)
            return {"hour": hour, "minut": minute, "second": 0, "times_of_day": has_times_of_day}

    all_numbers = re.findall(r"\d+", text)
    if not has_non_clock_units and len(all_numbers) == 1:
        only_number = all_numbers[0]
        if len(only_number) in {3, 4}:
            hour = int(only_number[:-2])
            minute = int(only_number[-2:])
            if 0 <= hour <= 23 and 0 <= minute <= 59:
                if len(only_number) == 4 or has_times_of_day:
                    if has_times_of_day:
                        hour = _apply_day_period(hour, text)
                    return {"hour": hour, "minut": minute, "second": 0, "times_of_day": has_times_of_day}

    if not has_non_clock_units and len(all_numbers) == 1:
        only_number = int(all_numbers[0])
        if 0 <= only_number <= 23:
            hour = only_number
            if has_times_of_day:
                hour = _apply_day_period(hour, text)
            return {"hour": hour, "minut": 0, "second": 0, "times_of_day": has_times_of_day}

    day_period_number_match = re.search(
        r"\b([01]?\d|2[0-3])\s*(утра|утром|вечер|вечера|вечером|дня|днем|днём|ночи|ночью|am|pm)\b",
        text,
    )
    if day_period_number_match:
        hour = int(day_period_number_match.group(1))
        hour = _apply_day_period(hour, text)
        return {"hour": hour, "minut": 0, "second": 0, "times_of_day": True}

    return None


def _parse_duration_time(command_text: str) -> dict | None:
    text = str(command_text or "").strip().lower()
    if not text:
        return None

    hour = 0
    minute = 0
    second = 0

    for value in re.findall(r"(\d+)\s*(?:час(?:а|ов)?|ч)\b", text):
        hour += int(value)
    for value in re.findall(r"(\d+)\s*(?:мин(?:ут(?:а|ы|у)?)?|м)\b", text):
        minute += int(value)
    for value in re.findall(r"(\d+)\s*(?:сек(?:унд(?:а|ы|у)?)?|с)\b", text):
        second += int(value)
    for value in re.findall(r"(\d+)\s*(?:дн(?:я|ей)?|д)\b", text):
        hour += int(value) * 24
    for value in re.findall(r"(\d+)\s*(?:нед(?:еля|ели|ель)?|н)\b", text):
        hour += int(value) * 7 * 24
    for value in re.findall(r"(\d+)\s*(?:мес(?:яц(?:а|ев)?)?)\b", text):
        hour += int(value) * 30 * 24

    if hour == 0 and minute == 0 and second == 0:
        all_numbers = re.findall(r"\d+", text)
        if len(all_numbers) == 1:
            minute = int(all_numbers[0])

    if second >= 60:
        minute += second // 60
        second %= 60
    if minute >= 60:
        hour += minute // 60
        minute %= 60

    if hour == 0 and minute == 0 and second == 0:
        return None

    return {"hour": hour, "minut": minute, "second": second, "times_of_day": False}


def _parse_time_value(value, now=None):
    now = now or datetime.now()
    if isinstance(value, dict):
        hour = value.get("hour", value.get("час", 0))
        minute = value.get("minut", value.get("minute", value.get("минут", 0)))
        second = value.get("second", value.get("секунд", 0))
        raw_clock_flag = value.get("times_of_day", value.get("timesOfDay", False))
        if isinstance(raw_clock_flag, str):
            normalized_clock_flag = raw_clock_flag.strip().lower()
            if normalized_clock_flag not in {"true", "false", "1", "0", "yes", "no", "on", "off", ""}:
                return None
            times_of_day = normalized_clock_flag in {"true", "1", "yes", "on"}
        elif isinstance(raw_clock_flag, bool) or (type(raw_clock_flag) is int and raw_clock_flag in (0, 1)):
            times_of_day = bool(raw_clock_flag)
        else:
            return None
        if any(type(time_component) is not int or time_component < 0 for time_component in (hour, minute, second)):
            return None
        if times_of_day:
            if hour > 23 or minute > 59 or second > 59:
                return None
        else:
            total_seconds = hour * 3600 + minute * 60 + second
            if total_seconds == 0:
                return None
            hour, remainder = divmod(total_seconds, 3600)
            minute, second = divmod(remainder, 60)
        return {"hour": hour, "minut": minute, "second": second, "times_of_day": times_of_day}

    command_text = sanitize_location_text(" ".join(str(value or "").strip().split()))
    # Explicit durations must win over bare-hour/clock heuristics. In
    # particular, accusative "минуту" is a minute, and mixed units must
    # retain their seconds rather than stopping at the first hour match.
    has_duration_units = re.search(
        r"\d+\s*(?:час(?:а|ов)?|ч|мин(?:ут(?:а|ы|у)?)?|м|сек(?:унд(?:а|ы|у)?)?|с|дн(?:я|ей)?|д|нед(?:еля|ели|ель)?|н|мес(?:яц(?:а|ев)?)?)\b",
        command_text,
        re.IGNORECASE,
    )
    if has_duration_units and not _has_times_of_day_marker(command_text):
        return _parse_duration_time(command_text)
    clock_time = _parse_clock_time(command_text, now)
    if clock_time is not None:
        return clock_time

    duration_time = _parse_duration_time(command_text)
    if duration_time is not None:
        return duration_time

    return None


def parse_typed_value(value, value_type, now=None):
    normalized_value_type = str(value_type or "").strip().lower()

    if normalized_value_type == "all":
        return value

    if normalized_value_type == "string":
        if not isinstance(value, str):
            return None
        stripped = value.strip()
        if not stripped:
            return None
        # Удаляем все цифры из строки
        cleaned = re.sub(r'\d', '', stripped)
        cleaned = cleaned.strip()
        if not cleaned:
            return None
        return cleaned

    if normalized_value_type == "int":
        if isinstance(value, bool):
            return None
        if isinstance(value, int):
            return value
        text = str(value or "")
        match = re.search(r"[+-]?\d+", text)
        if not match:
            return None
        return int(match.group(0))

    if normalized_value_type == "date":
        return _parse_date_value(value, now=now)

    if normalized_value_type == "time":
        return _parse_time_value(value, now=now)

    return value


