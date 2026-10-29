import re

from num2words import num2words
from words2numsrus import NumberExtractor

from ..normalization_dictionary import get_section
from .common import normalize_token
from .dates import MONTH_MARKERS, day_month_to_text
from .inflections import inflect_number_text, inflect_word, number_with_noun, number_with_noun_in_genitive

_NUMBER_EXTRACTOR = NumberExtractor()

def _number_word_values(section):
    return {word: int(number) for number, words in get_section(section).items() for word in words}


def refresh_normalization_dictionary():
    global _UNITS, _TEENS, _TENS, _HUNDREDS, _THOUSANDS, _LOCATION_STOP_WORDS, _SPECIAL_CHARACTERS, _NUMBER_WORDS
    _UNITS = _number_word_values("units")
    _TEENS = _number_word_values("teens")
    _TENS = _number_word_values("tens")
    _HUNDREDS = _number_word_values("hundreds")
    _THOUSANDS = get_section("thousands")
    _LOCATION_STOP_WORDS = get_section("location_stop_words")
    _SPECIAL_CHARACTERS = get_section("special_characters")

    _NUMBER_WORDS = (
        set(_UNITS)
        | set(_TEENS)
        | set(_TENS)
        | set(_HUNDREDS)
        | set(_THOUSANDS)
    )


refresh_normalization_dictionary()


def parse_number_words(tokens: list[str], start_index: int) -> tuple[int, int] | None:
    total = 0
    current_group_value = 0
    token_index = start_index
    consumed_tokens = 0

    while token_index < len(tokens):
        token = normalize_token(tokens[token_index])

        if token not in _NUMBER_WORDS:
            break

        if token in _THOUSANDS:
            if current_group_value == 0:
                current_group_value = 1
            total += current_group_value * 1000
            current_group_value = 0
        elif token in _HUNDREDS:
            current_group_value += _HUNDREDS[token]
        elif token in _TENS:
            current_group_value += _TENS[token]
        elif token in _TEENS:
            current_group_value += _TEENS[token]
        elif token in _UNITS:
            current_group_value += _UNITS[token]

        consumed_tokens += 1
        token_index += 1

    if consumed_tokens == 0:
        return None

    return total + current_group_value, consumed_tokens


def normalize_numbers(text: str) -> str:
    if not text:
        return text

    text = re.sub(r"(?<!\d)\.|\.(?!\d)", "", text)

    for char, replacement in _SPECIAL_CHARACTERS.items():
        text = text.replace(char, f" {replacement}")

    tokens = text.split()
    normalized_tokens: list[str] = []
    token_index = 0

    while token_index < len(tokens):
        token = normalize_token(tokens[token_index])

        if token.isdigit():
            normalized_tokens.append(token)
            token_index += 1
            continue

        if token in _NUMBER_WORDS:
            next_token = normalize_token(tokens[token_index + 1]) if token_index + 1 < len(tokens) else ""
            if token in _TEENS and next_token in _TENS:
                normalized_tokens.append(str(_TEENS[token]))
                token_index += 1
                continue

            parsed_number = parse_number_words(tokens, token_index)
            if parsed_number:
                value, consumed_tokens = parsed_number
                normalized_tokens.append(str(value))
                token_index += consumed_tokens
                continue

        normalized_tokens.append(tokens[token_index])
        token_index += 1

    return _NUMBER_EXTRACTOR.replace_groups(" ".join(normalized_tokens))


def sanitize_location_text(value: str) -> str:
    text = " ".join((value or "").strip().split())
    if not text:
        return text

    tokens = text.split(" ")

    while tokens:
        token = normalize_token(tokens[0])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop(0)

    while tokens:
        token = normalize_token(tokens[-1])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop()

    return " ".join(tokens).strip()


def _unit_rate_text(word: str) -> str:
    return f"в {inflect_word(word, {'sing', 'accs'})}"


def expand_marked_words(text: str) -> str:
    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>",
        lambda match: day_month_to_text(int(match.group(1)), match.group(2))
        if match.group(2).lower() in MONTH_MARKERS
        else match.group(0),
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>\s+<<([^<>]+)>>",
        lambda match: f"{number_with_noun(int(match.group(1)), match.group(2))} {_unit_rate_text(match.group(3))}",
        text,
    )

    text = re.sub(
        r"\bот\s+(-?\d+)\s+до\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda match: (
            f"от {inflect_number_text(num2words(int(match.group(1)), lang='ru'), 'gent')} "
            f"до {number_with_noun_in_genitive(int(match.group(2)), match.group(3))}"
        ),
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\bдо\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda match: f"до {number_with_noun_in_genitive(int(match.group(1)), match.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\bот\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda match: f"от {number_with_noun_in_genitive(int(match.group(1)), match.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>",
        lambda match: number_with_noun(int(match.group(1)), match.group(2)),
        text,
    )

    return text
