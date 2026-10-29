"""Admin editor for normalization dictionary overrides, preserved across updates."""
from copy import deepcopy
import json

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .src.api.mutation_lock import serialize_collection_mutation
from .src.utils.normalization_dictionary import _WORDS_PATH, apply_normalization_dictionary


def _store(hass):
    return Store(hass, 1, f"{DOMAIN}_normalization_words")


def _defaults():
    return json.loads(_WORDS_PATH.read_text(encoding="utf-8"))


def _node(dictionary, path):
    value = dictionary
    for key in path:
        if not isinstance(value, dict) or key not in value:
            raise ValueError("Unknown dictionary key")
        value = value[key]
    return value


def _validate(value, template):
    if isinstance(template, dict):
        if not isinstance(value, dict) or value.keys() != template.keys():
            raise ValueError("Dictionary keys cannot be changed")
        for key in template:
            _validate(value[key], template[key])
    elif isinstance(template, list):
        if not isinstance(value, list) or len(value) > 1000 or any(not isinstance(word, str) or not word.strip() or len(word) > 500 for word in value):
            raise ValueError("Expected a list of non-empty words")
    elif isinstance(template, int):
        if type(value) is not int or not 1 <= value <= 12:
            raise ValueError("Month number must be between 1 and 12")
    elif not isinstance(value, str) or len(value) > 500:
        raise ValueError("Expected text")


def _effective(defaults, settings):
    result = deepcopy(defaults)
    for encoded_path, value in settings.get("overrides", {}).items():
        try:
            path = json.loads(encoded_path)
            template = _node(defaults, path)
            _validate(value, template)
            parent = _node(result, path[:-1])
            parent[path[-1]] = deepcopy(value)
        except (ValueError, TypeError, KeyError, IndexError):
            continue  # An integration update may have removed a previously edited key.
    return result


async def async_setup_normalization_settings(hass):
    defaults = await hass.async_add_executor_job(_defaults)
    settings = await _store(hass).async_load() or {}
    apply_normalization_dictionary(_effective(defaults, settings))
    for handler in (_get_dictionary, _save_dictionary):
        websocket_api.async_register_command(hass, handler)


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/get_normalization_words"})
@websocket_api.require_admin
@websocket_api.async_response
async def _get_dictionary(hass, connection, msg):
    defaults = await hass.async_add_executor_job(_defaults)
    settings = await _store(hass).async_load() or {}
    connection.send_result(msg["id"], {"words": _effective(defaults, settings), "labels": settings.get("labels", {})})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/save_normalization_words",
    vol.Required("data"): {vol.Required("path"): vol.All([str], vol.Length(min=1, max=5)),
                           vol.Required("value"): object,
                           vol.Required("title"): vol.All(str, vol.Length(max=120))}})
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("normalization_words")
async def _save_dictionary(hass, connection, msg):
    defaults = await hass.async_add_executor_job(_defaults)
    data = msg["data"]
    path = data["path"]
    try:
        _validate(data["value"], _node(defaults, path))
        settings = deepcopy(await _store(hass).async_load() or {})
        key = json.dumps(path, ensure_ascii=False, separators=(",", ":"))
        # Replace nested overrides when their enclosing group is saved.
        overrides = settings.setdefault("overrides", {})
        for existing in list(overrides):
            if json.loads(existing)[:len(path)] == path:
                del overrides[existing]
        overrides[key] = data["value"]
        settings.setdefault("labels", {})[key] = data["title"].strip()
        effective = _effective(defaults, settings)
        await _store(hass).async_save(settings)
        apply_normalization_dictionary(effective)
    except (ValueError, TypeError, KeyError):
        connection.send_error(msg["id"], "invalid_payload", "Invalid normalization dictionary")
        return
    except OSError:
        connection.send_error(msg["id"], "storage_error", "Could not save normalization dictionary")
        return
    connection.send_result(msg["id"], {"words": effective, "labels": settings["labels"]})
