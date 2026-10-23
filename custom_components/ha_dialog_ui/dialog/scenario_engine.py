"""Select the first scenario matching any configured condition row."""

from typing import Any
from .normalize import (
    _normalize_value,
    _normalize_values,
    extract_direct_type_names,
    _normalize_condition,
    _normalize_legacy_conditions,
)
from ..const import ATTR_PARENT_TYPE, ATTR_CHILDREN_TYPE, ATTR_CHILDREN_DIRECT_TYPE


def match_scenario(payload: dict[str, Any], scenarios: list[dict[str, Any]]) -> dict | None:
    for scenario in scenarios:
        if _scenario_matches(payload, scenario):
            return scenario
    return None


def _scenario_matches(payload: dict, scenario: dict) -> bool:
    conditions = _get_scenario_conditions(scenario)
    if not conditions:
        return False

    for condition in conditions:
        if _match_condition(payload, condition):
            return True

    return False


def _get_scenario_conditions(scenario: dict) -> list[dict]:
    raw_conditions = scenario.get("conditions")
    if isinstance(raw_conditions, list):
        return [
            condition
            for raw_condition in raw_conditions
            if isinstance(raw_condition, dict)
            if (condition := _normalize_condition(raw_condition))
        ] or []

    return _normalize_legacy_conditions(scenario)


def _match_condition(payload: dict, condition: dict) -> bool:
    expected_parent_type = _normalize_value(condition.get(ATTR_PARENT_TYPE))
    expected_child_type = _normalize_value(condition.get(ATTR_CHILDREN_TYPE))
    expected_direct_type = _normalize_value(condition.get(ATTR_CHILDREN_DIRECT_TYPE))

    if expected_parent_type and not _matches_expected_value(expected_parent_type, payload.get("command_id", payload.get("parent_type"))):
        return False

    if expected_child_type and not _matches_expected_value(expected_child_type, payload.get("continuation_id", payload.get("children_type"))):
        return False

    if expected_direct_type:
        direct_type_names = extract_direct_type_names(payload.get("direct_values", payload.get(ATTR_CHILDREN_DIRECT_TYPE)))
        if not any(_matches_expected_value(expected_direct_type, value) for value in direct_type_names):
            return False

    return True


def _matches_expected_value(expected_value: str, incoming_value: Any) -> bool:
    if not expected_value:
        return True
    allowed_values = [part.strip() for part in expected_value.split(";") if part.strip()]
    if not allowed_values:
        return not _normalize_values(incoming_value)
    return any(value in allowed_values for value in _normalize_values(incoming_value))
