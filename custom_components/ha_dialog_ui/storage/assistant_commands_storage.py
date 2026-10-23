"""Storage helpers for dialog custom UI assistant commands."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .collection_helpers import normalize_collection_items

from .dialog_cache import update_dialog_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_assistant_commands"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


async def async_load_assistant_commands(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return normalize_collection_items(loaded)


async def async_save_assistant_commands(
    hass: HomeAssistant,
    assistant_commands: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = normalize_collection_items(assistant_commands)
    await store.async_save(normalized)
    update_dialog_cache_collection(hass, "commands", normalized)
