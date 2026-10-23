"""Разбор шаблонов и извлечение значений параметров."""

import re
from ...utils.text_normalization import sanitize_location_text
from .text import (
    STOP_TOKENS,
    match_tokens_soft,
    tokenize_command_text,
)

_NUMBER_TOKEN_WORDS = set()


def template_to_fixed_tokens(template_text):
    parts = re.split(r"\$\{[^}]+\}", template_text or "")
    fixed_tokens = []
    for part in parts:
        fixed_tokens.extend(tokenize_command_text(part))
    return fixed_tokens


def split_template_parts(template_text):
    raw_parts = re.split(r"(\$\{[^}]+\})", template_text or "")
    parts = []

    for part in raw_parts:
        if not part:
            continue
        if part.startswith("${") and part.endswith("}"):
            parts.append(("value", part[2:-1].strip() or "value"))
            continue

        fixed_tokens = tokenize_command_text(part)
        if fixed_tokens:
            parts.append(("fixed", fixed_tokens))

    return parts


def score_template_fixed_tokens(query_text, template_text):
    query_tokens = tokenize_command_text(query_text)
    fixed_tokens = template_to_fixed_tokens(template_text)

    if not query_tokens or not fixed_tokens:
        return float("-inf")

    score = 0.0
    query_index = 0

    for fixed_token in fixed_tokens:
        matched_index = None

        for idx in range(query_index, len(query_tokens)):
            query_token = query_tokens[idx]
            if query_token == fixed_token:
                matched_index = idx
                score += 4.0
                break
            if query_token.startswith(fixed_token) or fixed_token.startswith(query_token):
                matched_index = idx
                score += 3.0
                break

        if matched_index is None:
            score -= 3.0
            continue

        if matched_index == query_index:
            score += 0.75

        query_index = matched_index + 1

    return score


def extract_template_variables(template_text, client_text, keep_stopword_vars=None):
    parts = split_template_parts(template_text)
    if not parts or not any(kind == "value" for kind, _ in parts):
        return None

    query_tokens = tokenize_command_text(client_text)
    if not query_tokens:
        return None
    keep_stopword_vars = {
        str(name or "").strip().lower()
        for name in (keep_stopword_vars or set())
        if str(name or "").strip()
    }

    def clean_span(tokens):
        cleaned = [token for token in tokens if token not in STOP_TOKENS]
        return cleaned

    def allocate_span(placeholders, span_tokens):
        if not placeholders:
            return {}

        keep_raw_tokens = (
            len(placeholders) == 1
            and str(placeholders[0] or "").strip().lower() in keep_stopword_vars
        )
        cleaned_tokens = list(span_tokens) if keep_raw_tokens else clean_span(span_tokens)
        if not cleaned_tokens:
            return None

        if len(placeholders) == 1:
            if keep_raw_tokens:
                value = " ".join(cleaned_tokens).strip()
            else:
                value = sanitize_location_text(" ".join(cleaned_tokens).strip())
            return {placeholders[0]: value} if value else None

        if len(cleaned_tokens) < len(placeholders):
            return None

        assigned = {}
        tokens_left = list(cleaned_tokens)
        for idx, placeholder_name in enumerate(placeholders):
            remaining_placeholders = len(placeholders) - idx - 1
            if remaining_placeholders == 0:
                chunk = tokens_left
            else:
                take_count = len(tokens_left) - remaining_placeholders
                if take_count < 1:
                    return None
                chunk = tokens_left[:take_count]
                tokens_left = tokens_left[take_count:]

            value = sanitize_location_text(" ".join(chunk).strip())
            if not value:
                return None
            assigned[placeholder_name] = value

        return assigned

    def is_count_like_variable_name(name):
        normalized = str(name or "").lower()
        return any(hint in normalized for hint in ("count", "колич", "раз"))

    def is_count_like_value(value):
        tokens = tokenize_command_text(value)
        if not tokens:
            return False
        return all(token.isdigit() or token in _NUMBER_TOKEN_WORDS for token in tokens)

    def repair_count_variables(values):
        variable_order = [value for kind, value in parts if kind == "value"]
        if not variable_order:
            return values

        count_like_names = [name for name in variable_order if is_count_like_variable_name(name)]
        if not count_like_names:
            return values

        count_suffix_tokens = {"раз", "раза", "разов"}

        def split_count_suffix(raw_value):
            tokens = tokenize_command_text(raw_value)
            if not tokens:
                return None, raw_value

            work_tokens = list(tokens)
            if work_tokens and work_tokens[-1] in count_suffix_tokens:
                work_tokens = work_tokens[:-1]

            if not work_tokens:
                return None, raw_value

            idx = len(work_tokens) - 1
            while idx >= 0 and (work_tokens[idx].isdigit() or work_tokens[idx] in _NUMBER_TOKEN_WORDS):
                idx -= 1

            count_tokens = work_tokens[idx + 1:]
            if not count_tokens:
                return None, raw_value

            value_tokens = work_tokens[:idx + 1]
            count_value = sanitize_location_text(" ".join(count_tokens).strip())
            value_text = sanitize_location_text(" ".join(value_tokens).strip())
            return count_value, value_text

        for count_name in count_like_names:
            current_count = values.get(count_name)
            if current_count and is_count_like_value(current_count):
                continue

            count_index = variable_order.index(count_name)
            if count_index <= 0:
                continue

            donor_name = variable_order[count_index - 1]
            donor_value = values.get(donor_name)
            if not donor_value:
                continue

            extracted_count, donor_trimmed = split_count_suffix(donor_value)
            if extracted_count:
                values[count_name] = extracted_count
                if donor_trimmed:
                    values[donor_name] = donor_trimmed
            else:
                # Если не удалось извлечь число, добавляем значение count к предыдущей переменной
                # и удаляем переменную count
                values[donor_name] = f"{donor_value} {current_count}".strip()
                del values[count_name]

        return values

    result = {}
    pending_placeholders = []
    search_from = 0

    idx = 0
    while idx < len(parts):
        kind, value = parts[idx]
        if kind == "value":
            pending_placeholders.append(value)
            idx += 1
            continue

        fixed_tokens = value
        matched_index = None
        max_start = len(query_tokens) - len(fixed_tokens)
        for pos in range(search_from, max_start + 1):
            if all(
                match_tokens_soft(query_tokens[pos + offset], fixed_tokens[offset])
                for offset in range(len(fixed_tokens))
            ):
                matched_index = pos + len(fixed_tokens) - 1
                break

        if matched_index is None:
            return None

        if pending_placeholders:
            span = query_tokens[search_from:matched_index - len(fixed_tokens) + 1]
            assigned = allocate_span(pending_placeholders, span)
            if assigned is None:
                return None
            result.update(assigned)
            pending_placeholders = []

        search_from = matched_index + 1
        idx += 1

    if pending_placeholders:
        assigned = allocate_span(pending_placeholders, query_tokens[search_from:])
        if assigned is None:
            return None
        result.update(assigned)

    if not result:
        return None

    result = repair_count_variables(result)
    result = {key: value for key, value in result.items() if value is not None}
    return result or None


def find_weighted_template_match(voice_commands, client_text, min_score=3.5, keep_stopword_vars=None):
    best_template = None
    best_score = float("-inf")

    for template_text in voice_commands or []:
        if not template_text or "${" not in str(template_text):
            continue

        current_score = score_template_fixed_tokens(client_text, str(template_text))
        if current_score > best_score:
            best_score = current_score
            best_template = str(template_text)

    if not best_template or best_score < min_score:
        return None

    return extract_template_variables(
        best_template,
        client_text,
        keep_stopword_vars=keep_stopword_vars,
    )


def match_template_command(voice_commands, client_text, require_fixed_start=False, keep_stopword_vars=None):
    # Сортируем шаблоны по специфичности: сначала более специфичные (со множеством фиксированных частей)
    def get_template_specificity(cmd):
        if not cmd or "${" not in str(cmd):
            return (0, 0)  # Без переменных - не специфичные
        parts = split_template_parts(str(cmd))
        # Считаем количество фиксированных токенов - чем больше, тем более специфичный
        fixed_token_count = sum(len(value) if kind == "fixed" else 0 for kind, value in parts)
        variable_count = sum(1 for kind, _ in parts if kind == "value")
        return (fixed_token_count, variable_count)
    
    # Сортируем: сначала по количеству фиксированных токенов (убывание), потом по количеству переменных (убывание)
    sorted_commands = sorted(voice_commands or [], key=lambda cmd: get_template_specificity(cmd), reverse=True)
    
    for command_pattern in sorted_commands:
        command_pattern = (command_pattern or "").lower()
        if "${" not in command_pattern:
            continue

        template_vars = extract_template_variables(command_pattern, client_text, keep_stopword_vars=keep_stopword_vars)
        if template_vars is None:
            continue

        if client_text:
            fixed_tokens = template_to_fixed_tokens(command_pattern)
            if fixed_tokens:
                query_tokens = tokenize_command_text(client_text)
                search_from = 0
                matched = True
                first_match_index = None
                for fixed_token in fixed_tokens:
                    matched_index = None
                    for idx in range(search_from, len(query_tokens)):
                        if match_tokens_soft(query_tokens[idx], fixed_token):
                            matched_index = idx
                            break
                    if matched_index is None:
                        matched = False
                        break
                    if first_match_index is None:
                        first_match_index = matched_index
                    search_from = matched_index + 1
                if not matched:
                    continue
                if require_fixed_start and (first_match_index is None or first_match_index > 0):
                    continue

        return template_vars

    return None

