"""Build dialog variables and start Home Assistant scripts."""

from copy import deepcopy

from homeassistant.core import HomeAssistant


def build_script_payload(payload: dict) -> dict:
    """Translate direct values for scripts without changing recognition data."""
    result = deepcopy(payload)
    result.pop("parent_type", None)
    result.pop("children_type", None)
    data = result.pop("data", None)
    result["text"] = data.get("commands", "") if isinstance(data, dict) else result.get("text", "")
    if isinstance(data, dict):
        extra_data = {key: value for key, value in data.items() if key != "commands"}
        if extra_data:
            result["data"] = extra_data
    result.setdefault("command_id", None)
    result.setdefault("continuation_id", None)
    direct_values = result.pop("children_direct_type", None)
    if direct_values is None:
        result.setdefault("direct_values", [])
        return result
    # Older external events can contain one direct value instead of a list.
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    result["direct_values"] = [
        _build_direct_value(entry) for entry in direct_values
    ]
    return result


def _build_direct_value(entry: dict) -> dict:
    result = dict(entry)
    for old_key, new_key in (
        ("valueType", "value_type"),
        ("mapping_type", "name"),
        ("sub_mapping_type", "matched_codes"),
    ):
        if old_key in result:
            result[new_key] = result.pop(old_key)
    if result.get("value_type") == "time" and isinstance(result.get("value"), dict):
        value = dict(result["value"])
        for old_key, new_key in (("hour", "hours"), ("minut", "minutes"), ("second", "seconds")):
            if old_key in value:
                value[new_key] = value.pop(old_key)
        result["value"] = value
    return result


def build_script_service_data(script_entity_id: str, payload: dict) -> dict:
    return {
        "entity_id": script_entity_id,
        "variables": {
            "dialog_payload": build_script_payload(payload),
        },
    }


async def run_script(hass: HomeAssistant, script_entity_id: str, payload: dict) -> None:
    if not hass.states.get(script_entity_id):
        return

    service_data = build_script_service_data(script_entity_id, payload)

    await hass.services.async_call(
        "script",
        "turn_on",
        service_data,
        blocking=False,
    )
