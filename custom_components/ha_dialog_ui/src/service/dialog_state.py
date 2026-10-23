"""Состояние диалога, срок хранения и счётчик непонимания."""

import json
import time
from ...const import CURRENT_NODE_KEY, DOMAIN, MISS_COUNT_KEY
from ..utils.dialog_response import build_dialog_response
from .dialog_responses import build_text_response


CURRENT_HASS = None


def set_current_hass(hass):
    """Store the most recent Home Assistant instance and return it."""
    global CURRENT_HASS
    if hass is not None:
        CURRENT_HASS = hass
    return CURRENT_HASS


def get_current_hass(hass=None):
    """Return a fresh Home Assistant instance, preferring the explicit value."""
    return set_current_hass(hass) if hass is not None else CURRENT_HASS


def _get_dialog_state_store(hass=None):
    hass = get_current_hass(hass)
    if hass is None:
        return {}
    return hass.data.setdefault(DOMAIN, {}).setdefault("dialog_state", {})


def _dialog_state_key(key: str, client_id: str, device_id: str) -> str:
    return f"{key}:{client_id}:{device_id}"


def get_dialog_state_value(key: str, client_id: str, device_id: str):
    store = _get_dialog_state_store()
    entry = store.get(_dialog_state_key(key, client_id, device_id))
    if not entry:
        return None
    expires_at = entry.get("expires")
    if expires_at is not None and time.time() > expires_at:
        store.pop(_dialog_state_key(key, client_id, device_id), None)
        return None
    return entry.get("value")


def set_dialog_state_value(key: str, client_id: str, device_id: str, value, ttl: int | None = None):
    store = _get_dialog_state_store()
    entry = {"value": value}
    if ttl is not None:
        entry["expires"] = time.time() + ttl
    store[_dialog_state_key(key, client_id, device_id)] = entry


def delete_dialog_state_value(key: str, client_id: str, device_id: str):
    store = _get_dialog_state_store()
    store.pop(_dialog_state_key(key, client_id, device_id), None)


def clear_dialog_state(client_id, device_id):
    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    delete_dialog_state_value(MISS_COUNT_KEY, client_id, device_id)


def set_current_node_state(client_id, uuid, device_id, custom="", parent_type = "", command_id=None):
    node_state = {
        "uuid": uuid,
        "parent_type": parent_type,
        "command_id": command_id,
        "custom": str(custom or "").strip()
    }
    set_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id, json.dumps(node_state), ttl=120)
    set_dialog_state_value(MISS_COUNT_KEY, client_id, device_id, 0, ttl=120)


def handle_unmatched_input(client_id, device_id, response_text, dialog_settings):
    miss_count = int(get_dialog_state_value(MISS_COUNT_KEY, client_id, device_id) or 0) + 1
    set_dialog_state_value(MISS_COUNT_KEY, client_id, device_id, miss_count, ttl=120)

    if miss_count >= 3:
        delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
        delete_dialog_state_value(MISS_COUNT_KEY, client_id, device_id)
        dialog_response = build_dialog_response(dialog_settings, "finish_miss")
        return build_text_response(
            dialog_response.get("message", "Диалог завершен."),
            dialog_response.get("endStatus", True),
        )

    if not response_text:
        not_understand_response = build_dialog_response(dialog_settings, "not_understand")
        response_text = not_understand_response.get("message", "Не удалось распознать команду.")
    return build_text_response(response_text, False)

