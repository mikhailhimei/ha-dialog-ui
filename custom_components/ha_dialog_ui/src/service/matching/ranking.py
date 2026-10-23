"""Оценка и ранжирование обычных команд."""

from .text import (
    _voice_commands,
    normalize_compact_text,
    command_text_similarity,
    tokenize_words,
    words_similar,
)


def find_node_by_id(nodes, node_id):
    for node in nodes or []:
        if str(node.get("id")) == str(node_id):
            return node

    return None


def get_ranked_command_nodes(query_text, nodes):
    ranked_nodes = []

    normalized_query = normalize_compact_text(query_text)
    query_words = tokenize_words(query_text)

    for node in nodes or []:
        voice_commands = _voice_commands(node)

        best_score = 0
        best_command = None

        word_coverage = {query_word: 0 for query_word in query_words}
        command_matches = {}

        for voice_command in voice_commands:
            if not voice_command or "${" in str(voice_command):
                continue

            normalized_command = normalize_compact_text(voice_command)
            command_words = tokenize_words(voice_command)

            # Оценка сходства нормализованного текста команды.
            score = command_text_similarity(normalized_query, normalized_command)

            # ----------------------------
            # слова совпадения
            # ----------------------------
            matches = []
            for query_word in query_words:
                for command_word in command_words:
                    if words_similar(query_word, command_word):
                        word_coverage[query_word] += 1
                        matches.append(query_word)
                        break

            command_matches[voice_command] = matches

            matched_count = len(matches)
            total_words = len(query_words)

            # ----------------------------
            # 🔥 ШТРАФ ЗА МУСОР
            # ----------------------------
            penalty = 0

            # 0 совпадений → почти бесполезно
            if matched_count == 0:
                penalty = 1.0

            # 1 слово совпало, остальное мусор
            elif matched_count == 1 and total_words > 1:
                penalty = 0.6

            # есть "лишние" слова (сзади и т.д.)
            unmatched_word_count = total_words - matched_count
            if unmatched_word_count > 0:
                penalty += unmatched_word_count * 0.2

            effective_score = score - penalty
            if effective_score < 0:
                effective_score = 0

            # ----------------------------
            # BEST выбираем по effective_score
            # ----------------------------
            if effective_score > best_score:
                best_score = effective_score
                best_command = voice_command

        if best_command is None:
            continue

        outliers = [query_word for query_word, coverage_count in word_coverage.items() if coverage_count == 0]

        ranked_nodes.append({
            "id": node.get("id"),
            "voiceCommands": voice_commands,
            "bestVoiceCommand": best_command,
            "_score": command_text_similarity(normalized_query, normalize_compact_text(best_command)),
            "wordCoverage": word_coverage,
            "outlierWords": outliers,
            "commandWordMatches": command_matches
        })

    ranked_nodes.sort(key=lambda ranked_node: ranked_node["_score"], reverse=True)
    return ranked_nodes


def find_weighted_command_node(query_text, nodes, min_score=6):
    ranked_nodes = get_ranked_command_nodes(query_text, nodes)
    if not ranked_nodes:
        return None

    best_node = ranked_nodes[0]
    if best_node.get("_score", float("-inf")) < min_score:
        return None

    query_content_count = best_node.get("_query_content_count", 0)
    query_content_matches = best_node.get("_query_content_matches", 0)
    command_content_count = best_node.get("_command_content_count", 0)
    command_content_matches = best_node.get("_command_content_matches", 0)

    if query_content_count >= 2 and query_content_matches < 2:
        return None
    if command_content_count >= 2 and command_content_matches < 2:
        return None

    return find_node_by_id(nodes, best_node.get("id"))

