"""Storage helpers for dialog custom UI assistant settings."""

from __future__ import annotations

from typing import Any
from uuid import uuid4

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .collection_helpers import normalize_collection_items

from .dialog_cache import update_dialog_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_assistant_settings"
_DEFAULT_ASSISTANT_SETTINGS: list[dict[str, Any]] = [
    {
        "uuid": str(uuid4()),
        "actionType": "default_main",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Если ничего не нашел",
        "voiceResponse": "Извините я вас не поняла",
    },
    {
        "uuid": str(uuid4()),
        "actionType": "not_understand",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Ничего не нашло у дочернего",
        "voiceResponse": "Извините я вас не поняла, повторите пожалуйста",
    },{
        "uuid": str(uuid4()),
        "actionType": "finish_miss",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Начинаем поиск сначала по родителю",
        "voiceResponse": "Давайте начнём сначала. Что вы хотите сделать?",
    },
]


ASSISTANT_SETTING_ACTION_TYPES = frozenset(item["actionType"] for item in _DEFAULT_ASSISTANT_SETTINGS)

def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _copy_default_assistant_settings() -> list[dict[str, Any]]:
    return [dict(item) for item in _DEFAULT_ASSISTANT_SETTINGS]


async def _async_load_or_create_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    if loaded is None:
        defaults = _copy_default_assistant_settings()
        await store.async_save(defaults)
        update_dialog_cache_collection(hass, "settings-dialog", defaults)
        return defaults

    return normalize_collection_items(loaded)


async def async_load_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    return await _async_load_or_create_assistant_settings(hass)


async def async_save_assistant_settings(
    hass: HomeAssistant,
    assistant_settings: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = normalize_collection_items(assistant_settings)
    await store.async_save(normalized)
    update_dialog_cache_collection(hass, "settings-dialog", normalized)
