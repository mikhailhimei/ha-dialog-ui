"""Storage helpers for Dialog Custom UI settings."""

from __future__ import annotations

from copy import deepcopy
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from ..const import DOMAIN

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_settings"
_CACHE_KEY = "settings_cache"

SETTINGS_FALLBACKS: dict[str, Any] = {
    "remout": {
        "base_url": "",
        "token": "",
    },
    "timer_alarm": {
        "global_music_timer": "",
        "global_music_alarm": "",
    },
    "call_music": "",
    "client_id": "",
    "theme": "light",
    "is_admin": False,
    "active_remout": False,
    "api_commands_enabled": False,
    "api_commands_token": "",
}


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _deep_merge(base: dict[str, Any], override: dict[str, Any]) -> dict[str, Any]:
    result = deepcopy(base)
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def normalize_settings(value: Any) -> dict[str, Any]:
    # Discard retired SpeechKit credentials from old settings/imports. Other
    # keys and nested settings retain their existing merge behavior.
    current = {key: item for key, item in value.items() if key != "yandex_tts"} if isinstance(value, dict) else {}
    return _deep_merge(SETTINGS_FALLBACKS, current)


async def async_load_settings(hass: HomeAssistant) -> dict[str, Any]:
    store = _get_store(hass)
    loaded = await store.async_load()
    return normalize_settings(loaded)


async def async_get_cached_settings(hass: HomeAssistant) -> dict[str, Any]:
    domain_data = hass.data.setdefault(DOMAIN, {})
    cached = domain_data.get(_CACHE_KEY)
    if not isinstance(cached, dict):
        loaded = await async_load_settings(hass)
        # A save or another reader may have populated the cache during I/O.
        cached = domain_data.get(_CACHE_KEY)
        if not isinstance(cached, dict):
            cached = loaded
            domain_data[_CACHE_KEY] = cached
    return deepcopy(cached)


def get_cached_settings(hass: HomeAssistant) -> dict[str, Any]:
    cached = hass.data.get(DOMAIN, {}).get(_CACHE_KEY)
    if isinstance(cached, dict):
        return deepcopy(normalize_settings(cached))
    return deepcopy(SETTINGS_FALLBACKS)


async def async_save_settings(hass: HomeAssistant, settings: dict[str, Any]) -> None:
    normalized = normalize_settings(settings)
    store = _get_store(hass)
    await store.async_save(normalized)
    hass.data.setdefault(DOMAIN, {})[_CACHE_KEY] = normalized
