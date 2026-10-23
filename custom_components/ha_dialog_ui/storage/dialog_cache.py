"""Shared runtime cache for dialog collections stored in Home Assistant storage."""

from __future__ import annotations

from copy import deepcopy
from typing import Any

from homeassistant.core import HomeAssistant

from ..const import DOMAIN

DIALOG_CACHE_KEY = "dialog_storage_cache"


def get_dialog_cache(hass: HomeAssistant) -> dict[str, list[dict[str, Any]]]:
    cache = hass.data.setdefault(DOMAIN, {}).setdefault(DIALOG_CACHE_KEY, {})
    return cache if isinstance(cache, dict) else {}


def update_dialog_cache_collection(
    hass: HomeAssistant,
    collection: str,
    items: list[dict[str, Any]],
) -> None:
    cache = get_dialog_cache(hass)
    cache[collection] = deepcopy([dict(item) for item in items if isinstance(item, dict)])


def read_dialog_cache_collection(
    hass: HomeAssistant,
    collection: str,
) -> list[dict[str, Any]]:
    cache = get_dialog_cache(hass)
    items = cache.get(collection, [])
    return deepcopy(items if isinstance(items, list) else [])
