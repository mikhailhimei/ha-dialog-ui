"""Сопоставление потока слов с шаблонами составных команд."""

import re
from .text import (
    STOP_TOKENS,
    tokenize_template,
)


def is_slot(token):
    return token.startswith("${") and token.endswith("}")


def slot_name(token):
    return token[2:-1]


def is_regex(token):
    return bool(re.search(r"[()|?*]", token))


def regex_match(pattern, word):
    return re.fullmatch(pattern, word) is not None


def flatten_commands(nodes):
    command_templates = []
    for node in nodes:
        for command_tokens in node.get("voiceCommands", []):
            for command_variant in str(command_tokens).split(";"):
                tokens = tokenize_template(command_variant)
                if tokens:
                    command_templates.append(tokens)
    return command_templates


def match_token(token, current_word):
    if is_regex(token):
        return regex_match(token, current_word)
        
    if len(current_word) <= 3:
        return token == current_word
    else:
        return token.startswith(current_word)


def match_stream(template_tokens, text_tokens, command_templates):
    # Precompute first tokens for efficient checking
    first_tokens = set()
    regex_first_tokens = []

    for command_tokens in command_templates:
        if command_tokens:
            first = command_tokens[0]
            if is_regex(first):
                regex_first_tokens.append(first)
            else:
                first_tokens.add(first)

    def looks_like_command(start_index):
        """
        Проверяем:
        является ли текст начиная с start_index
        полноценной командой, а не просто словом
        """
        remaining = text_tokens[start_index:]

        for command_tokens in command_templates:
            command_index = 0
            candidate_text_index = 0
            candidate_started = False

            while command_index < len(command_tokens) and candidate_text_index < len(remaining):
                command_token = command_tokens[command_index]
                text_token = remaining[candidate_text_index]

                if is_slot(command_token):
                    # слот считаем за матч одного слова
                    command_index += 1
                    candidate_text_index += 1
                    candidate_started = True
                    continue

                if is_regex(command_token):
                    if regex_match(command_token, text_token):
                        command_index += 1
                        candidate_text_index += 1
                        candidate_started = True
                        continue

                    if not candidate_started:
                        break

                    break

                if match_token(command_token, text_token):
                    command_index += 1
                    candidate_text_index += 1
                    candidate_started = True
                    continue

                break

            # ВАЖНО:
            # считаем команду валидной
            # только если сматчили ВСЕ фиксированные токены
            if command_index == len(command_tokens):
                return True

        return False


    template_index = 0
    text_index = 0
    slot_names = []
    remaining_tokens = []
    started = False

    while template_index < len(template_tokens):
        if text_index >= len(text_tokens) and not is_slot(template_tokens[template_index]):
            return None

        token = template_tokens[template_index]

        if is_slot(token):
            placeholder_name = slot_name(token)
            slot_names.append(placeholder_name)

            next_fixed = None

            for next_token_index in range(template_index + 1, len(template_tokens)):
                if not is_slot(template_tokens[next_token_index]):
                    next_fixed = template_tokens[next_token_index]
                    break

            # слот в конце шаблона
            if next_fixed is None:
                tail_tokens = []

                while text_index < len(text_tokens):
                    current = text_tokens[text_index]

                    is_candidate = (
                        current in first_tokens or
                        any(regex_match(regex_pattern, current) for regex_pattern in regex_first_tokens)
                    )

                    # если это потенциальная команда —
                    # проверяем реально ли она матчится
                    if is_candidate and looks_like_command(text_index):
                        break

                    tail_tokens.append(current)
                    text_index += 1

                remaining_tokens.extend(tail_tokens)

                template_index += 1
                continue

            span_tokens = []
            first_pass = True

            while text_index < len(text_tokens):
                current = text_tokens[text_index]

                if first_pass:
                    first_pass = False

                elif is_regex(next_fixed):
                    if regex_match(next_fixed, current):
                        break

                else:
                    if current == next_fixed:
                        break

                span_tokens.append(current)
                text_index += 1

            if text_index >= len(text_tokens):
                return None

            remaining_tokens.extend(span_tokens)

            template_index += 1
            continue

        current_word = text_tokens[text_index]

        match = match_token(token, current_word)

        if is_regex(token):
            if match:
                started = True
                template_index += 1
                text_index += 1
                continue

            if not started:
                text_index += 1
                continue

            return None

        if match:
            started = True
            template_index += 1
            text_index += 1
            continue

        if not started:
            text_index += 1
            continue

        return None

    return {
        "vars": slot_names,
        "remaining": remaining_tokens
    }


def normalize_text_tokens(text_tokens, template_tokens):
    template_has_stop_tokens = any(
        token in STOP_TOKENS for token in template_tokens
    )

    if template_has_stop_tokens:
        return text_tokens

    return [token for token in text_tokens if token not in STOP_TOKENS]

