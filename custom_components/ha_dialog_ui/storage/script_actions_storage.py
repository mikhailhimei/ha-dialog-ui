"""Storage helpers for dialog custom UI script actions."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .collection_helpers import normalize_collection_items

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_script_actions"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


async def async_load_script_actions(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return normalize_collection_items(loaded)


async def async_save_script_actions(
    hass: HomeAssistant,
    script_actions: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    await store.async_save(normalize_collection_items(script_actions))