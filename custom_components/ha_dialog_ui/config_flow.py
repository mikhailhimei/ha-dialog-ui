"""Config flow for HA Dialog UI."""

from __future__ import annotations

from typing import Any

from homeassistant import config_entries
from homeassistant.data_entry_flow import FlowResult

from .const import DOMAIN


class DialogCustomUiConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for HA Dialog UI."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None) -> FlowResult:
        """Create a single instance entry."""
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        return self.async_create_entry(title="HA Dialog UI", data={})

    @staticmethod
    def async_get_options_flow(config_entry: config_entries.ConfigEntry) -> config_entries.OptionsFlow:
        """Return the options flow."""
        return DialogCustomUiOptionsFlow()


class DialogCustomUiOptionsFlow(config_entries.OptionsFlow):
    """No-op options flow because configuration lives in the custom panel."""

    async def async_step_init(self, user_input: dict[str, Any] | None = None) -> FlowResult:
        """Finish immediately because settings live in the sidebar panel."""
        return self.async_create_entry(title="", data=self.config_entry.options)
