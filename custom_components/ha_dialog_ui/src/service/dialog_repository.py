"""Read dialog commands, templates and settings from Home Assistant storage."""

from __future__ import annotations

from typing import Any

from ...storage.assistant_commands_storage import async_load_assistant_commands
from ...storage.assistant_settings_storage import async_load_assistant_settings
from ...storage.assistant_sub_commands_storage import async_load_assistant_sub_commands
from ...storage.assistant_sub_direct_controls_sample_storage import (
    async_load_assistant_sub_direct_control_samples,
)
from ...storage.assistant_sub_direct_controls_storage import (
    async_load_assistant_sub_direct_controls,
)
from ...storage.dialog_cache import read_dialog_cache_collection, update_dialog_cache_collection
from .dialog_state import (
    get_current_hass,
)

_LOADERS = {
    "commands": async_load_assistant_commands,
    "sub-commands": async_load_assistant_sub_commands,
    "sub-direct-controls": async_load_assistant_sub_direct_controls,
    "sub-direct-controls-sample": async_load_assistant_sub_direct_control_samples,
    "settings-dialog": async_load_assistant_settings,
}


async def async_load_dialog_cache(hass) -> None:
    """Preload storage collections for synchronous dialog command readers."""
    for collection_name, loader in _LOADERS.items():
        update_dialog_cache_collection(hass, collection_name, await loader(hass))


def get_all(collection_name: str) -> list[dict[str, Any]]:
    if collection_name not in _LOADERS:
        raise ValueError(f"Invalid dialog collection: {collection_name}")
    hass = get_current_hass()
    if hass is None:
        return []
    return read_dialog_cache_collection(hass, collection_name)


def get_one_by_uuid(collection_name: str, uuid: str):
    uuid = str(uuid or "")
    for item in get_all(collection_name):
        if str(item.get("uuid") or "") == uuid:
            return item
    return None
