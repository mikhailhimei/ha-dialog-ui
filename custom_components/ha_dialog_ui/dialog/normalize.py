"""Normalize command payloads and current or legacy scenario conditions."""

from collections.abc import Iterable
from typing import Any
from ..const import ATTR_CHILDREN_DIRECT_TYPE, ATTR_CHILDREN_TYPE, ATTR_PARENT_TYPE


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def _normalize_values(value: Any) -> list[str]:
    if value is None:
        return []

    if isinstance(value, str):
        value = [value]
    elif not isinstance(value, Iterable):
        value = [value]

    result: list[str] = []

    for item in value:
        if item is None:
            continue
        normalized = _normalize_value(item)
        if normalized:
            result.append(normalized)

    return result


def extract_direct_type_names(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, dict):
        values: list[Any] = [value]
    elif isinstance(value, (list, tuple, set)):
        values = list(value)
    else:
        values = [value]

    normalized_values: list[str] = []
    for item in values:
        if isinstance(item, dict):
            candidates = [item.get("command_id"), item.get("name"), item.get("type"), item.get("mapping_type"), item.get("mappingType")]
            nested_value = item.get("value")
            if isinstance(nested_value, dict):
                candidates.extend(nested_value.keys())
            for candidate in candidates:
                normalized = _normalize_value(candidate)
                if normalized:
                    normalized_values.append(normalized)
        else:
            normalized = _normalize_value(item)
            if normalized:
                normalized_values.append(normalized)
    return normalized_values


def _normalize_condition(condition: dict[str, Any]) -> dict[str, str] | None:
    parent_type = _normalize_value(condition.get(ATTR_PARENT_TYPE))
    children_type = _normalize_value(condition.get(ATTR_CHILDREN_TYPE) or condition.get("type"))
    children_direct_type = _normalize_value(condition.get(ATTR_CHILDREN_DIRECT_TYPE))
    if not parent_type and not children_type and not children_direct_type:
        return None
    normalized = {ATTR_PARENT_TYPE: parent_type}
    if children_type:
        normalized[ATTR_CHILDREN_TYPE] = children_type
    if children_direct_type:
        normalized[ATTR_CHILDREN_DIRECT_TYPE] = children_direct_type
    return normalized


def _normalize_legacy_conditions(scenario: dict[str, Any]) -> list[dict[str, str]]:
    parent_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_PARENT_TYPE)).split(";")]
    children_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_CHILDREN_TYPE) or scenario.get("type")).split(";")]
    direct_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_CHILDREN_DIRECT_TYPE)).split(";")]
    max_length = max(len(parent_values), len(children_values), len(direct_values), 1)
    conditions: list[dict[str, str]] = []
    for index in range(max_length):
        condition = _normalize_condition(
            {
                ATTR_PARENT_TYPE: parent_values[index] if index < len(parent_values) else "",
                ATTR_CHILDREN_TYPE: children_values[index] if index < len(children_values) else "",
                ATTR_CHILDREN_DIRECT_TYPE: direct_values[index] if index < len(direct_values) else "",
            }
        )
        if condition:
            conditions.append(condition)
    return conditions


def _normalize_script_action(item: dict[str, Any]) -> dict[str, Any]:
    script_action = {
        "uuid": _normalize_value(item.get("uuid")),
        "name": _normalize_value(item.get("name")),
        "script_entity_id": _normalize_value(item.get("script_entity_id")),
    }

    conditions = [
        normalized
        for condition in item.get("conditions", [])
        if isinstance(condition, dict)
        if (normalized := _normalize_condition(condition))
    ]

    if not conditions:
        conditions = _normalize_legacy_conditions(item)

    if conditions:
        script_action["conditions"] = conditions

    return script_action


def merge_script_action_payload(
    message: dict[str, Any],
    existing: dict[str, Any] | None = None,
    script_action_id: str | None = None,
) -> dict[str, Any]:
    payload = message.get("data")

    if not isinstance(payload, dict):
        raise ValueError("Script action payload must be an object")

    normalized_action_id = _normalize_value(script_action_id) if script_action_id else None

    # =========================
    # UPDATE EXISTING
    # =========================
    if existing is not None:
        if (
            "uuid" in payload
            and _normalize_value(payload["uuid"]) != normalized_action_id
        ):
            raise ValueError("Script action id mismatch")

        merged = dict(existing)

        # гарантируем контроль uuid
        if normalized_action_id:
            merged["uuid"] = normalized_action_id

        # безопасный merge без перетирания uuid
        for key, value in payload.items():
            if key != "uuid":
                merged[key] = value

    # =========================
    # CREATE NEW
    # =========================
    else:
        merged = dict(payload)

        if normalized_action_id:
            merged["uuid"] = normalized_action_id

    return _normalize_script_action(merged)


def _normalize_device_ids(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [value]
    if not isinstance(value, list):
        return []
    return [device_id.strip() for device_id in value if device_id.strip()]


def filter_failed_payload(raw_payload: Any) -> Any | None:
    if isinstance(raw_payload, dict) and raw_payload.get("status") is False:
        return None
    return raw_payload


def collect_command_payloads(raw_payload: Any) -> list[dict]:
    if isinstance(raw_payload, list):
        return [item for item in raw_payload if isinstance(item, dict)]
    if isinstance(raw_payload, dict):
        return [raw_payload]
    return []
