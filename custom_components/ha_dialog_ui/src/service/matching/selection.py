"""Выбор команд, дочерних ветвей и главного действия."""

import copy
from .text import (
    _voice_commands,
    tokenize_template,
    tokenize_text,
    voice_command_matches,
)
from .templates import (
    find_weighted_template_match,
    match_template_command,
)
from .direct import (
    collect_all_type_template_vars,
    resolve_matched_slot_entries,
)
from .ranking import (
    find_weighted_command_node,
)
from .stream import (
    flatten_commands,
    is_regex,
    is_slot,
    match_stream,
    normalize_text_tokens,
)


def find_node_by_uuid(nodes, node_uuid):
    for node in nodes:
        if node.get("uuid") == node_uuid:
            return node

    return None


def find_node_by_type(nodes, node_type):
    for node in nodes or []:
        if str(node.get("actionType")) == str(node_type):
            return node

    return None


def build_child_candidates(node, sub_level_nodes):
    target_components = {"children"}
    children_ids = []
    for item in node.get("nextAction", []):
        if item.get("actionTypeComponent") not in target_components:
            continue
        child_ref = item.get("uuid") or item.get("id")
        if child_ref:
            children_ids.append(child_ref)

    children_list = []
    for child in sub_level_nodes:
        if child.get("id") in children_ids or child.get("uuid") in children_ids:
            children_list.append(child)

    return children_list


def build_custom_next_action_candidates(node, sub_level_nodes, action_type=None):
    custom_refs = []
    action_type = str(action_type or "").strip()

    for item in node.get("nextAction", []) or []:
        if item.get("actionTypeComponent") != "custom":
            continue

        item_action_type = str(item.get("actionType") or "").strip()
        if action_type and item_action_type != action_type:
            continue

        child_ref = item.get("uuid") or item.get("id")
        if child_ref:
            custom_refs.append(child_ref)

    candidates = []
    for child in sub_level_nodes or []:
        if child.get("id") in custom_refs or child.get("uuid") in custom_refs:
            candidates.append(child)

    return candidates


def find_matching_node_by_voice_command(nodes, client_text):
    nodes = [node for node in (nodes or []) if isinstance(node, dict)]
    has_forward_text = any(node.get("forwardText") for node in nodes)

    for node in nodes:
        if node.get("forwardText"):
            continue
        voice_commands = _voice_commands(node)
        if any(voice_command_matches(voice_command, client_text) for voice_command in voice_commands):
            return node, False, None

    for node in nodes:
        if node.get("forwardText"):
            continue
        voice_commands = _voice_commands(node)
        template_vars = match_template_command(
            voice_commands,
            client_text,
            require_fixed_start=has_forward_text,
            keep_stopword_vars=collect_all_type_template_vars(node),
        )
        if template_vars:
            return node, False, template_vars

    if not has_forward_text:
        for node in nodes:
            if node.get("forwardText"):
                continue
            voice_commands = _voice_commands(node)
            template_vars = find_weighted_template_match(
                voice_commands,
                client_text,
                min_score=0.5,
                keep_stopword_vars=collect_all_type_template_vars(node),
            )
            if template_vars:
                return node, False, template_vars

        weighted_node = find_weighted_command_node(
            client_text,
            [node for node in nodes if not node.get("forwardText")],
        )
        if weighted_node:
            return weighted_node, False, None

    if has_forward_text:
        for node in nodes:
            if node.get("forwardText"):
                return node, True, None

    return None, False, None


def find_matching_custom_next_action(node, client_text, sub_level_nodes, action_type=None):
    custom_candidates = build_custom_next_action_candidates(
        node,
        sub_level_nodes,
        action_type=action_type,
    )
    return find_matching_node_by_voice_command(custom_candidates, client_text)


def find_matching_subcommand(node, client_text, sub_level_nodes):
    children_list = build_child_candidates(node, sub_level_nodes)
    return find_matching_node_by_voice_command(children_list, client_text)


def find_top_level_candidates(top_level_nodes, client_text):
    # Разбиваем клиентский текст на массив слов для поиска команд
    # Пример: "насыпь 20 грамм еды и запусти пылесос" -> ["насыпь", "20", "грамм", "еды", "и", "запусти", "пылесос"]
    text_tokens = tokenize_text(client_text)
    command_templates = flatten_commands(top_level_nodes)
    results = []

    for node in top_level_nodes:
        node_copy = copy.deepcopy(node)
        all_matches = []  # List of (score, match_dict)
        best_score = float("-inf")

        for voice_command in node_copy.get("voiceCommands", []) or []:
            for variant in [variant.strip() for variant in str(voice_command).split(";") if variant.strip()]:
                template_tokens = tokenize_template(variant)
                new_text_tokens = normalize_text_tokens(text_tokens, template_tokens)
                match = match_stream(template_tokens, new_text_tokens, command_templates)
                if match is None:
                    continue

                # Important: if vars is not empty but remaining is empty, skip this variant
                if match.get("vars") and not match.get("remaining"):
                    continue

                fixed_token_count = sum(1 for token in template_tokens if not is_slot(token) and not is_regex(token))
                regex_token_count = sum(1 for token in template_tokens if is_regex(token))
                slot_count = sum(1 for token in template_tokens if is_slot(token))
                score = fixed_token_count * 10 + regex_token_count * 20 + slot_count * 5

                all_matches.append((score, match))
                if score > best_score:
                    best_score = score

        if all_matches:
            # Find all matches with the best score
            best_matches = [candidate_match for match_score, candidate_match in all_matches if match_score == best_score]
            
            if best_matches:
                # Sort by remaining count (descending) to pick the one with most remaining
                best_matches.sort(key=lambda candidate_match: len(candidate_match.get("remaining", [])), reverse=True)
                best_primary = best_matches[0]
                best_remaining = tuple(best_primary.get("remaining", []))
                
                # Combine all vars from matches with same score and same remaining
                combined_vars = []
                for match in best_matches:
                    if tuple(match.get("remaining", [])) == best_remaining:
                        combined_vars.extend(match.get("vars", []))
                
                # Remove duplicates while preserving order
                seen = set()
                combined_vars = [entry_value for entry_value in combined_vars if not (entry_value in seen or seen.add(entry_value))]
                
                best_vars = {
                    "vars": combined_vars,
                    "remaining": list(best_remaining)
                }
                
                clean_vars = {entry_key: entry_value for entry_key, entry_value in best_vars.items() if entry_value not in (None, "")}
                has_template_variables = True if clean_vars.get('vars') else False
                
                if has_template_variables:
                    direct_entries = resolve_matched_slot_entries(node_copy, clean_vars)
                    if direct_entries :
                        node_copy["direct_entries"] = direct_entries
                        node_copy["template_var"] = has_template_variables
                results.append(node_copy)

    return apply_main_command(results)


def _is_external_service_answer_type(answer_type):
    return str(answer_type or "").strip().lower() in {"script_response", "ha_storage", "ha", "external"}


def apply_main_command(nodes):
    if not nodes:
        return nodes

    # =========================
    # 1. PRIORITY 0: default + nextAction
    # =========================
    def is_high_priority_default(candidate_node):
        return (
            candidate_node.get("answerType") == "default"
            and bool(candidate_node.get("nextAction"))
            and not candidate_node.get('template_var')
        )

    default_priority_nodes = [
        candidate_node for candidate_node in nodes if is_high_priority_default(candidate_node)
    ]

    if default_priority_nodes:
        # первый default + nextAction = главный
        for candidate_node in nodes:
            candidate_node["is_main_command"] = False

        default_priority_nodes[0]["is_main_command"] = True
        return nodes

    # =========================
    # 2. ищем внешнюю HA-обработку
    # =========================
    external_nodes = [candidate_node for candidate_node in nodes if _is_external_service_answer_type(candidate_node.get("answerType"))]

    # =========================
    # 3. если внешней HA-обработки НЕТ → первый = main
    # =========================
    if not external_nodes:
        for candidate_node in nodes:
            candidate_node["is_main_command"] = False

        nodes[0]["is_main_command"] = True
        return nodes

    # =========================
    # 4. выбираем лучшую внешнюю HA-обработку
    # =========================
    def external_priority(candidate_node):
        has_template_variables = candidate_node.get("template_var") or False

        # 🥇 внешняя обработка без переменных шаблона
        if not has_template_variables:
            return 2
        return 1

    best_node = None
    best_priority = -1

    for node in external_nodes:
        priority = external_priority(node)

        if priority > best_priority:
            best_priority = priority
            best_node = node

    # =========================
    # 5. назначаем is_main_command
    # =========================
    for candidate_node in nodes:
        candidate_node["is_main_command"] = False

    if best_node:
        best_node["is_main_command"] = True

    return nodes

