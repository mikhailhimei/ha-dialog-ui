"""Нормализация текста и базовые правила сопоставления."""

import re
from ...utils.normalization_dictionary import get_section

VOICE_PATTERN_META = set("()|?+*[]")
STOP_TOKENS = set(get_section("location_stop_words"))


def has_voice_pattern_syntax(value):
    return any(char in str(value or "") for char in VOICE_PATTERN_META)


def strip_voice_pattern_syntax(value):
    text = str(value or "").lower()
    text = re.sub(r"\([^)]*\)\?", "", text)
    text = re.sub(r"\([^)]*\)", " ", text)
    text = re.sub(r"[\[\]\|\?\+\*]", " ", text)
    return text


def voice_command_matches(command_pattern, text, partial=False):
    command_pattern = str(command_pattern or "").strip().lower()
    text = str(text or "").strip().lower()

    if not command_pattern or not text or "${" in command_pattern:
        return False

    if has_voice_pattern_syntax(command_pattern):
        try:
            if partial:
                return re.search(command_pattern, text, flags=re.IGNORECASE) is not None
            return re.fullmatch(command_pattern, text, flags=re.IGNORECASE) is not None
        except re.error:
            pass

    if partial:
        return command_pattern in text
    return command_pattern == text


def normalize_command_text(value):
    normalized_value = strip_voice_pattern_syntax(value)
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", " ", normalized_value)).strip()


def tokenize_command_text(value):
    return [token for token in normalize_command_text(value).split(" ") if token]


def tokenize_text(value):
    normalized = re.sub(r"[^\w\s]", " ", str(value or "").lower())
    return [token for token in normalized.split() if token]


def tokenize_template(value):
    if value is None:
        return []

    tokens = []
    raw_parts = re.split(r"(\$\{[^}]+\})", str(value).lower())
    for part in raw_parts:
        if not part:
            continue
        if part.startswith("${") and part.endswith("}"):
            tokens.append(part)
            continue

        for chunk in re.split(r"\s+", part.strip()):
            if not chunk:
                continue
            if has_voice_pattern_syntax(chunk):
                tokens.append(chunk)
            else:
                tokens.extend(tokenize_command_text(chunk))
    return tokens


def normalize_compact_text(text):
    return (text or "").replace(" ", "").lower()


def command_text_similarity(source_text, target_text):
    if not source_text or not target_text:
        return 0

    # ❗ критический штраф
    if source_text[:3] != target_text[:3]:
        return 0  # или сильно уменьшить

    min_len = min(len(source_text), len(target_text))
    matches = sum(1 for i in range(min_len) if source_text[i] == target_text[i])

    return matches / max(len(source_text), len(target_text))


def tokenize_words(text):
    return re.findall(r"[a-zа-яё0-9]+", (text or "").lower())


def _voice_commands(node):
    commands = node.get("voiceCommands", [])
    values = commands if isinstance(commands, list) else [commands]
    return [variant.strip() for value in values if value is not None
            for variant in str(value).split(";") if variant.strip()]


def words_similar(source_text, target_text):
    source_text = normalize_compact_text(source_text)
    target_text = normalize_compact_text(target_text)

    if not source_text or not target_text:
        return False

    # первые 4 символа совпадают
    if source_text[:4] == target_text[:4]:
        return True

    # одно слово внутри другого
    if source_text in target_text or target_text in source_text:
        return True

    return False


def match_tokens_soft(source_token, target_token):
    return (
        source_token == target_token
        or source_token.startswith(target_token)
        or target_token.startswith(source_token)
    )

