"""Route command events to scenarios, scripts and the timer/alarm manager."""

import logging
from datetime import datetime
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HassJob, HomeAssistant, callback

from ..runtime_options import build_runtime_options
from .normalize import _normalize_value, filter_failed_payload, collect_command_payloads
from .scenario_engine import match_scenario
from .script_runner import run_script
from ..storage.script_actions_storage import async_load_script_actions
from ..storage.settings_storage import async_get_cached_settings, get_cached_settings
from ..timer_alarm.manager import DialogTimerAlarmManager
from ..http.external_event_bridge import ExternalEventBridge
from ..const import DOMAIN, EVENT_ACTIVE_COMMAND

_LOGGER = logging.getLogger(__name__)


def _normalize_active_command_event_data(data: dict) -> dict:
    """Return active-command data from direct or wrapped event payloads."""
    if not isinstance(data, dict):
        return {}

    nested_data = data.get("data")
    if isinstance(nested_data, dict) and (
        "command_data" in nested_data
        or "commandData" in nested_data
        or "command_id" in nested_data
        or "text" in nested_data
        or "parent_type" in nested_data
        or "children_type" in nested_data
    ):
        normalized = dict(nested_data)
        for key, value in data.items():
            if key not in {"data", "event", "event_type", "type"} and key not in normalized:
                normalized[key] = value
    else:
        normalized = dict(data)

    if "client_id" not in normalized and normalized.get("clientId") is not None:
        normalized["client_id"] = normalized.get("clientId")
    if "device_id" not in normalized and normalized.get("deviceId") is not None:
        normalized["device_id"] = normalized.get("deviceId")
    if "command_data" not in normalized and normalized.get("commandData") is not None:
        normalized["command_data"] = normalized.get("commandData")

    if "command_data" not in normalized and (
        "command_id" in normalized
        or "text" in normalized
        or "parent_type" in normalized
        or "children_type" in normalized
        or "children_direct_type" in normalized
    ):
        normalized["command_data"] = dict(normalized)

    return normalized


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._unsubscribe_active_command = None
        self._unsubscribe_shutdown = None
        self.external_event_bridge = ExternalEventBridge(
            hass,
            entry,
            self._append_log,
        )

        self.timer_alarm_manager = DialogTimerAlarmManager(
            hass,
            self._handle_timer_alarm_completion,
        )
        _LOGGER.debug("DialogCommandCoordinator initialized for entry %s", self.entry.entry_id)

    def _append_log(self, level: str, message: str):
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.append({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})

    async def async_reload(self):
        _LOGGER.info(
            "Reloading DialogCommandCoordinator for entry %s",
            self.entry.entry_id,
        )

        await self.async_stop()
        await self.async_start()

    async def async_start(self):
        if self._unsubscribe_active_command:
            _LOGGER.debug("Coordinator already started for entry %s", self.entry.entry_id)
            return
        _LOGGER.info("Starting DialogCommandCoordinator for entry %s", self.entry.entry_id)
        settings = await async_get_cached_settings(self.hass)
        options = build_runtime_options(self.entry, settings)
        await self.timer_alarm_manager.async_restore_from_storage(options.get("client_id", ""))
        self._append_log("info", "coordinator started")
        self._unsubscribe_active_command = self.hass.bus.async_listen(
            EVENT_ACTIVE_COMMAND,
            self._handle_active_command_event,
        )
        bridge_enabled = bool(
            options.get("remote_active_search_enabled")
            or options.get("external_event_bridge_enabled")
        )
        await self.external_event_bridge.async_start(
            listen_external_active_commands=bridge_enabled,
            forward_dialog_messages=bridge_enabled,
        )

        # Flush before the integration-stop stage: Store.async_save writes
        # immediately here rather than deferring another snapshot to shutdown.
        # Reload/unload removes this job in async_stop.
        self._unsubscribe_shutdown = self.hass.async_add_shutdown_job(
            HassJob(self._async_shutdown, "Dialog Custom UI shutdown"),
        )

    async def _async_shutdown(self):
        self._unsubscribe_shutdown = None
        await self.async_stop()

    async def async_stop(self):
        if self._unsubscribe_shutdown:
            self._unsubscribe_shutdown()
            self._unsubscribe_shutdown = None
        if self._unsubscribe_active_command:
            _LOGGER.info("Stopping DialogCommandCoordinator for entry %s", self.entry.entry_id)
            self._append_log("info", "coordinator stopping")
            self._unsubscribe_active_command()
            self._unsubscribe_active_command = None
        await self.external_event_bridge.async_stop()
        await self.timer_alarm_manager.async_stop()

    @callback
    def _handle_active_command_event(self, event: Event) -> None:
        data = _normalize_active_command_event_data(event.data or {})
        _LOGGER.debug(
            "Active command event received for entry %s: %s",
            self.entry.entry_id,
            data,
        )
        options = build_runtime_options(self.entry, get_cached_settings(self.hass))
        event_client_id = _normalize_value(data.get("client_id"))
        configured_client_id = _normalize_value(options.get("client_id"))

        if configured_client_id and event_client_id != configured_client_id:
            self._append_log("idle", f"active command skipped: client_id {event_client_id or '<empty>'}")
            return

        command_data = data.get("command_data")
        _LOGGER.debug(
            "Command data payload for entry %s: %s",
            self.entry.entry_id,
            command_data,
        )
        self.hass.async_create_task(
            self._process_command_payload(command_data),
        )

    async def _process_command_payload(self, raw_payload):
        _LOGGER.debug("Received raw payload for entry %s: %s", self.entry.entry_id, raw_payload)
        raw_payload = filter_failed_payload(raw_payload)
        _LOGGER.debug("Filtered payload for entry %s: %s", self.entry.entry_id, raw_payload)
        payloads = collect_command_payloads(raw_payload)
        _LOGGER.debug("Normalized payloads for entry %s: %s", self.entry.entry_id, payloads)
        if not payloads:
            self._append_log("idle", "active command empty")
            return

        for payload in payloads:
            # A bound command owns script execution; do not also run a legacy scenario.
            binding = payload.get("command_script")
            if isinstance(binding, dict):
                entity_id = _normalize_value(binding.get("entity_id"))
                if entity_id and binding.get("run") is True:
                    script_payload = {key: value for key, value in payload.items() if key != "command_script"}
                    try:
                        await run_script(self.hass, entity_id, script_payload)
                    except Exception as error:
                        _LOGGER.exception("Failed to run command script %s", entity_id)
                        self._append_log("error", f"command script run failed: {error}")
                continue
            scenarios = await async_load_script_actions(self.hass)
            scenario = match_scenario(payload, scenarios)

            if not scenario:
                _LOGGER.debug("No scenario match for payload: %s", payload)
                self._append_log("idle", "no match")
                continue

            scenario_name = scenario.get("name") or scenario.get("entity_id") or "unknown"
            _LOGGER.info(
                "Matched scenario %s for payload %s: script=%s",
                scenario_name,
                payload,
                scenario.get("script_entity_id"),
            )
            self._append_log("match", scenario_name)

            try:
                script_entity_id = _normalize_value(scenario.get("script_entity_id"))
                await run_script(
                    self.hass,
                    script_entity_id,
                    payload,
                )
            except Exception as error:
                _LOGGER.exception(
                    "Failed to run script %s for scenario %s",
                    scenario.get("script_entity_id"),
                    scenario_name,
                )
                self._append_log("error", f"script run failed: {error}")

    async def _handle_timer_alarm_completion(self, payload: dict[str, Any]) -> None:
        _LOGGER.info(
            "Timer/alarm worked payload for entry %s: %s",
            self.entry.entry_id,
            payload,
        )
        await self._process_command_payload([payload])
