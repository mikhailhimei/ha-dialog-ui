"""Calendar arithmetic for configurable relative date phrases."""
import calendar
from datetime import timedelta
import re

from .normalization_dictionary import get_section
from .text_normalization.numbers import normalize_numbers


def _phrase(value):
    return ' '.join(normalize_numbers(value.lower()).split())


def _alternatives(values):
    words = {_phrase(value) for value in values if value.strip()}
    return '|'.join(re.escape(word).replace(r'\ ', r'\s+')
                    for word in sorted(words, key=len, reverse=True)) or r'(?!)'


def _pattern(value):
    return re.compile(rf'(?<!\w)(?:{value})(?!\w)')


def _shift(today, unit, count):
    if unit in {'days', 'weeks'}:
        return today + timedelta(days=count * (7 if unit == 'weeks' else 1))
    month_index = today.year * 12 + today.month - 1 + count * (12 if unit == 'years' else 1)
    year, month = divmod(month_index, 12)
    month += 1
    return today.replace(year=year, month=month,
                         day=min(today.day, calendar.monthrange(year, month)[1]))


class RelativeDates:
    def __init__(self):
        self.aliases = []
        for key, offset in (('day_before_yesterday', -2), ('yesterday', -1), ('today', 0),
                            ('tomorrow', 1), ('day_after_tomorrow', 2)):
            words = get_section('date_keywords')[key]
            self.aliases.append((_pattern(_alternatives(words)), offset))
        units = get_section('date_relative_units')
        modifiers = get_section('date_modifiers')
        self.modifiers = {key: _pattern(_alternatives(words)) for key, words in modifiers.items()}
        self.invalid_fraction = _pattern(
            rf'(?:{_alternatives(modifiers["future"])})\s+[+-]?\d+[.,]\d+'
            rf'|[+-]?\d+[.,]\d+\s+(?:{_alternatives([word for words in units.values() for word in words])})\s+(?:{_alternatives(modifiers["past"])})')
        qualifier = _alternatives([word for key in ('next', 'previous', 'current', 'nearest')
                                   for word in modifiers[key]])
        self.periods = []
        self.durations = []
        for unit, words in units.items():
            names = _alternatives(words)
            for direction, expr in ((1, rf'(?:{_alternatives(modifiers["future"])})\s+(?:(?P<count>\d+)\s+)?(?:{names})'),
                                    (-1, rf'(?:(?P<count>\d+)\s+)?(?:{names})\s+(?:{_alternatives(modifiers["past"])})')):
                self.durations.append((_pattern(expr), unit, direction))
            self.periods.append((_pattern(rf'(?P<qualifier>{qualifier})\s+(?:{names})'), unit))
        self.weekdays = []
        for number, key in enumerate(('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')):
            names = _alternatives(get_section('date_weekdays')[key])
            suffix = rf'(?:\s+(?:(?:{_alternatives(modifiers["on"])})\s+)?(?P<week>{qualifier})\s+(?:{_alternatives(units["weeks"])}))?'
            self.weekdays.append((_pattern(rf'(?:(?P<qualifier>{qualifier})\s+)?(?:{names}){suffix}'), number))
            prefix = rf'(?P<week>{qualifier})\s+(?:{_alternatives(units["weeks"])})\s+(?:{_alternatives(modifiers["on"])})\s+(?:{names})'
            self.weekdays.append((_pattern(prefix), number))

    def _qualifier(self, text):
        return next((key for key in ('next', 'previous', 'current', 'nearest')
                     if self.modifiers[key].fullmatch(text)), 'current')

    def parse(self, text, today):
        # Date-only arithmetic accepts whole units. Never reinterpret 1.5 days
        # as a calendar date (May 1) or silently truncate a fractional count.
        if self.invalid_fraction.search(text.lower()):
            return True, None
        text = _phrase(text)
        candidates = []

        def add(match, calculate):
            if match:
                try:
                    value = calculate()
                except (ValueError, OverflowError):
                    value = None
                candidates.append((match.start(), -len(match.group()), value))

        for pattern, offset in self.aliases:
            match = pattern.search(text)
            add(match, lambda: today + timedelta(days=offset))
        for pattern, unit, direction in self.durations:
            match = pattern.search(text)
            add(match, lambda: _shift(today, unit, direction * int(match.group('count') or 1)))
        for pattern, weekday in self.weekdays:
            match = pattern.search(text)
            def weekday_date():
                qualifier = match.groupdict().get('week') or match.groupdict().get('qualifier')
                kind = self._qualifier(qualifier) if qualifier else 'nearest'
                if kind == 'nearest':
                    return today + timedelta(days=(weekday - today.weekday()) % 7)
                week = {'next': 1, 'previous': -1, 'current': 0}[kind]
                return today + timedelta(days=weekday - today.weekday() + week * 7)
            add(match, weekday_date)
        for pattern, unit in self.periods:
            match = pattern.search(text)
            def period_date():
                kind = self._qualifier(match.group('qualifier'))
                count = {'next': 1, 'previous': -1, 'current': 0, 'nearest': 0}[kind]
                if unit == 'days':
                    return today + timedelta(days=count)
                if unit == 'weeks':
                    return today + timedelta(days=-today.weekday() + count * 7)
                shifted = _shift(today.replace(day=1), unit, count)
                return shifted.replace(month=1) if unit == 'years' else shifted
            add(match, period_date)
        if not candidates:
            return False, None
        # First date phrase wins; a full phrase outranks an alias within it.
        candidate = min(candidates, key=lambda item: item[:2])
        return True, candidate[2]
