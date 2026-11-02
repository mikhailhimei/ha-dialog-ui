"""Split adjacent captures using their configured types, preserving free text."""
from functools import lru_cache
import re

from ...utils import value_parser
from .text import STOP_TOKENS


def tokenize_typed_text(text):
    # Keep clock/date punctuation so a clock's hour cannot become a day of month.
    return re.findall(r'\d{1,2}(?::\d{2}){1,2}\b|\d{1,2}[./-]\d{1,2}(?:[./-]\d{2,4})?\b|\w+',
                      str(text or '').lower())


def slot_types(direct_items):
    return {str(item.get('mappingType', '')).strip().lower(): item.get('valueType')
            for item in direct_items or [] if isinstance(item, dict)}


def split_typed_span(names, tokens, types):
    """Return raw captures, or None when the typed captures cannot consume the span."""
    relative_dates = {'сегодня', 'завтра', 'послезавтра', 'today', 'tomorrow', 'now', 'сейчас'}
    time_words = set().union(value_parser._MORNING_MARKERS, value_parser._EVENING_MARKERS,
                            value_parser._DAY_MARKERS, value_parser._NIGHT_MARKERS,
                            value_parser._NON_CLOCK_DURATION_MARKERS)
    time_words.update({'через', 'день', 'дня', 'дней', 'д', 'неделя', 'недели', 'недель',
                       'н', 'месяц', 'месяца', 'месяцев', 'мес', 'ч', 'м', 'с'})

    @lru_cache(maxsize=None)
    def valid(index, start, end):
        kind = types.get(names[index].lower())
        words = [word for word in tokens[start:end] if word not in STOP_TOKENS]
        text = ' '.join(words)
        if not text:
            return False
        if kind == 'date':
            if text not in relative_dates:
                if value_parser._NUMERIC_DATE_PATTERN.fullmatch(text):
                    return value_parser.parse_typed_value(text, kind) is not None
                if not words[0].isdigit() or len(words) > 3:
                    return False
                if len(words) > 1 and not (words[1].isdigit() or words[1] in value_parser._MONTH_NAME_TO_NUMBER):
                    return False
                if len(words) > 2 and not words[2].isdigit():
                    return False
            return value_parser.parse_typed_value(text, kind) is not None
        if kind == 'time':
            return (all(word.isdigit() or word in time_words or
                        re.fullmatch(r'\d{1,2}[:.]\d{2}(?::\d{2})?', word) for word in words)
                    and value_parser.parse_typed_value(text, kind) is not None)
        if kind == 'int':
            return re.fullmatch(r'[+-]?\d+', text) is not None
        return True

    def specificity(index, start, end):
        kind = types.get(names[index].lower())
        words = [word for word in tokens[start:end] if word not in STOP_TOKENS]
        if kind == 'date':
            if ' '.join(words) in relative_dates:
                return 100
            if len(words) > 1 or value_parser._NUMERIC_DATE_PATTERN.fullmatch(' '.join(words)):
                return 80 + (5 if len(words) == 3 and len(words[-1]) == 4 else 0)
            return 10
        if kind == 'time':
            return 20 if len(words) > 1 else 5
        return 0

    @lru_cache(maxsize=None)
    def allocate(index, start):
        if index == len(names):
            return (0, ()) if start == len(tokens) else None
        last = len(tokens) - (len(names) - index - 1)
        # Keep free text greedy, but let dates/times consume only their own words.
        ends = range(start + 1, last + 1)
        if types.get(names[index].lower()) not in {'date', 'time', 'int'}:
            ends = reversed(ends)
        best = None
        for end in ends:
            if valid(index, start, end):
                tail = allocate(index + 1, end)
                if tail is not None:
                    capture = tokens[start:end]
                    if types.get(names[index].lower()) in {'date', 'time', 'int'}:
                        capture = [word for word in capture if word not in STOP_TOKENS]
                    score = specificity(index, start, end) + tail[0]
                    if best is None or score > best[0]:
                        best = (score, (' '.join(capture),) + tail[1])
        return best

    values = allocate(0, 0)
    return dict(zip(names, values[1])) if values is not None else None
