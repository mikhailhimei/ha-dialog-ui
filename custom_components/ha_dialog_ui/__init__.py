"""Dialog Custom UI integration."""

from __future__ import annotations

import logging
from collections import deque

from homeassistant.components import conversation
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_IP_ADDRESS, Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er

from .src.api.logs_api import async_register_logs_websockets
from .const import DOMAIN, MAX_LOG_ENTRIES
from .dialog.coordinator import DialogCommandCoordinator
from .http.dialog_http import async_register_dialog_http
from .src.api.assistant_commands.command_transfer import async_register_command_transfer_websockets
from .src.api.script_action.script_actions_api import async_register_script_actions_websockets
from .src.api.timer_request.timer_requests_api import async_register_timer_requests_websockets
from .src.api.alarm_request.alarm_requests_api import async_register_alarm_requests_websockets
from .src.api.alarm_time_widget.alarm_time_widgets_api import async_register_alarm_time_widgets_websockets
from .src.api.assistant_commands.assistant_commands_api import async_register_assistant_commands_websockets
from .src.api.assistant_commands.assistant_sub_commands_api import async_register_assistant_sub_commands_websockets
from .src.api.assistant_commands.assistant_sub_direct_controls_api import async_register_assistant_sub_direct_controls_websockets
from .src.api.assistant_commands.assistant_sub_direct_controls_sample_api import async_register_assistant_sub_direct_control_samples_websockets
from .src.api.assistant_commands.assistant_settings import async_register_assistant_settings_websockets
from .src.api.settings.settings_api import async_register_settings_websockets
from .timer_alarm.websocket import async_register_timer_alarm_websockets
from .storage.legacy_migration import async_migrate_legacy_storage
from .whisper_prompt import async_register_whisper_prompt_websockets
from .monitor import register_monitor
from .panel import async_register_panel
from .services import async_register_services, async_unregister_services
from .src.service.dialog_state import (
    set_current_hass,
)
from .src.service.dialog_repository import async_load_dialog_cache
from .voice.voice_agent import DialogCustomUiVoiceAgent


_LOGGER = logging.getLogger(__name__)
PLATFORMS = [Platform.SENSOR]


def _initialize_domain_runtime(hass: HomeAssistant) -> None:
    set_current_hass(hass)
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the integration domain."""
    _initialize_domain_runtime(hass)
    register_monitor(hass)
    async_register_command_transfer_websockets(hass)
    async_register_logs_websockets(hass)
    async_register_whisper_prompt_websockets(hass)
    async_register_script_actions_websockets(hass)
    async_register_timer_requests_websockets(hass)
    async_register_alarm_requests_websockets(hass)
    async_register_alarm_time_widgets_websockets(hass)
    async_register_assistant_commands_websockets(hass)
    async_register_assistant_sub_commands_websockets(hass)
    async_register_assistant_sub_direct_controls_websockets(hass)
    async_register_assistant_sub_direct_control_samples_websockets(hass)
    async_register_assistant_settings_websockets(hass)
    async_register_settings_websockets(hass)
    async_register_timer_alarm_websockets(hass)
    await async_migrate_legacy_storage(hass)
    await async_load_dialog_cache(hass)
    async_register_dialog_http(hass)
    async_register_services(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Dialog Custom UI from a config entry."""
    _initialize_domain_runtime(hass)
    async_register_dialog_http(hass)
    async_register_services(hass)
    await _async_migrate_legacy_voice_agent_options(hass, entry)
    await async_load_dialog_cache(hass)
    await async_register_panel(hass)
    registry = er.async_get(hass)
    for entity in er.async_entries_for_config_entry(registry, entry.entry_id):
        # Remove only this integration's retired speech provider, preserving
        # other TTS integrations and user-owned entities.
        if entity.domain == "tts" and entity.platform == DOMAIN and entity.unique_id == f"{DOMAIN}_tts":
            registry.async_remove(entity.entity_id)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    hass.data[DOMAIN]["coordinator"] = coordinator
    agent_registration_started = False
    try:
        await coordinator.async_start()
        await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
        agent_registration_started = True
        conversation.async_set_agent(
            hass, entry, DialogCustomUiVoiceAgent(hass, entry, entry.entry_id),
        )
    except Exception:
        await _async_cleanup_failed_setup(
            hass, entry, coordinator, remove_agent=agent_registration_started,
        )
        raise

    return True


async def _async_cleanup_failed_setup(
    hass: HomeAssistant,
    entry: ConfigEntry,
    coordinator: DialogCommandCoordinator,
    *,
    remove_agent: bool,
) -> None:
    """Attempt every cleanup step without masking the setup failure."""
    if remove_agent:
        try:
            conversation.async_unset_agent(hass, entry)
        except Exception:
            _LOGGER.exception("Failed to remove conversation agent after setup failure")
    try:
        await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    except Exception:
        _LOGGER.exception("Failed to unload platforms after setup failure")
    try:
        await coordinator.async_stop()
    except Exception:
        _LOGGER.exception("Failed to stop coordinator after setup failure")
    finally:
        domain_data = hass.data[DOMAIN]
        domain_data.pop(entry.entry_id, None)
        if domain_data.get("coordinator") is coordinator:
            domain_data.pop("coordinator", None)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""

    unload_ok = await hass.config_entries.async_unload_platforms(
        entry,
        PLATFORMS,
    )

    if not unload_ok:
        return False

    conversation.async_unset_agent(hass, entry)
    coordinator: DialogCommandCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    if hass.data[DOMAIN].get("coordinator") is coordinator:
        hass.data[DOMAIN].pop("coordinator", None)
    await coordinator.async_stop()
    if not any(isinstance(value, DialogCommandCoordinator) for value in hass.data[DOMAIN].values()):
        async_unregister_services(hass)
    return True


async def _async_migrate_legacy_voice_agent_options(
    hass: HomeAssistant,
    entry: ConfigEntry,
) -> None:
    options = dict(entry.options)
    if options.get("voice_agent_ip") and options.get("voice_agent_user_id"):
        return

    legacy_entries = hass.config_entries.async_entries("custom_voice_agent")
    if not legacy_entries:
        return

    legacy = legacy_entries[0]
    migrated_ip = str(legacy.data.get(CONF_IP_ADDRESS, "")).strip()
    migrated_user_id = str(legacy.data.get("user_id", "")).strip()
    if not migrated_ip or not migrated_user_id:
        return

    options["voice_agent_ip"] = migrated_ip
    options["voice_agent_user_id"] = migrated_user_id
    hass.config_entries.async_update_entry(entry, options=options)
