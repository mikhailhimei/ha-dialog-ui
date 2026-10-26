"""Build runtime options from stored entry options and integration settings."""

from typing import Any

from homeassistant.config_entries import ConfigEntry

from .const import DEFAULT_ALERT_MEDIA_ID
from .dialog.normalize import _normalize_device_ids, _normalize_value

_FALLBACK_TIMER_MEDIA_CONTENT_ID = DEFAULT_ALERT_MEDIA_ID


def build_runtime_options(entry: ConfigEntry, settings: dict[str, Any] | None = None) -> dict[str, Any]:
    stored_options = dict(entry.options)
    settings = settings or {}
    remote_settings = settings.get("remout") if isinstance(settings.get("remout"), dict) else {}
    timer_alarm_settings = settings.get("timer_alarm") if isinstance(settings.get("timer_alarm"), dict) else {}
    remote_enabled = bool(settings.get("active_remout"))
    timer_music = _normalize_value(timer_alarm_settings.get("global_music_timer"))
    alarm_music = _normalize_value(timer_alarm_settings.get("global_music_alarm"))
    default_music = timer_music or alarm_music or _FALLBACK_TIMER_MEDIA_CONTENT_ID

    return {
        "base_url": _normalize_value(remote_settings.get("base_url")) if remote_enabled else "",
        "client_id": _normalize_value(settings.get("client_id")),
        "external_event_bridge_enabled": remote_enabled,
        "remote_active_search_enabled": remote_enabled,
        "remote_token": _normalize_value(remote_settings.get("token")),
        "api_commands_enabled": bool(settings.get("api_commands_enabled")),
        "api_commands_token": _normalize_value(settings.get("api_commands_token")),
        "timeout": 10,
        "timer_alarm_items": list(stored_options.get("timer_alarm_items", [])),
        "timer_alarm_presets": list(stored_options.get("timer_alarm_presets", [])),
        "timer_alarm_device_ids": _normalize_device_ids(stored_options.get("timer_alarm_device_ids", [])),
        "timer_alarm_media_content_id": default_music,
        "timer_music": timer_music or _FALLBACK_TIMER_MEDIA_CONTENT_ID,
        "alarm_music": alarm_music or _FALLBACK_TIMER_MEDIA_CONTENT_ID,
    }

