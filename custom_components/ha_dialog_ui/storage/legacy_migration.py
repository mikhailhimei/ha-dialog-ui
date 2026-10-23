"""Copy storage from the former integration domain without overwriting new data."""

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from ..const import DOMAIN

_STORAGE_SUFFIXES = (
    "settings", "script_actions", "assistant_commands", "assistant_sub_commands",
    "assistant_sub_direct_controls", "assistant_sub_direct_controls_sample",
    "assistant_settings", "timer_requests", "alarm_requests",
)


async def async_migrate_legacy_storage(hass: HomeAssistant) -> None:
    """Preserve original files and copy only stores absent under the new domain."""
    for suffix in _STORAGE_SUFFIXES:
        current = Store(hass, 1, f"{DOMAIN}_{suffix}")
        if await current.async_load() is not None:
            continue
        legacy = Store(hass, 1, f"dialog_custom_ui_{suffix}")
        data = await legacy.async_load()
        if data is not None:
            await current.async_save(data)
