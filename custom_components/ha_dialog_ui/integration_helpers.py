"""Access the integration config entry and its timer/alarm manager."""

from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN


def get_integration_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None



def get_timer_alarm_manager(hass: HomeAssistant, entry: ConfigEntry) -> Any | None:
    """Попытаться извлечь объект менеджера таймеров/будильников из координатора.

    Проверяет наличие необходимых методов и возвращает менеджер только
    если он удовлетворяет интерфейсу.
    """
    coordinator = hass.data.get(DOMAIN, {}).get(entry.entry_id)
    manager = getattr(coordinator, "timer_alarm_manager", None)
    if manager is None:
        return None
    required_methods = (
        "get_items",
        "get_active_items",
        "get_alarm_presets",
        "async_apply_ui_items",
        "serialize_persisted_items",
    )
    return manager if all(hasattr(manager, attr) for attr in required_methods) else None

