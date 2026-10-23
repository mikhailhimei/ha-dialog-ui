"""Adapt native Assist requests to the local dialog processor."""

import logging
import uuid
from typing import Any

import aiohttp

from homeassistant.components.conversation import (
    AbstractConversationAgent,
    ConversationInput,
    ConversationResult,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import intent

from ..dialog.normalize import _normalize_value
from ..runtime_options import build_runtime_options
from ..src.service import dialog_service
from ..storage.settings_storage import get_cached_settings

_LOGGER = logging.getLogger(__name__)


class DialogCustomUiVoiceAgent(AbstractConversationAgent):
    """Return dialog speech to the configured Assist TTS pipeline."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        fallback_device_id: str,
    ) -> None:
        self._hass = hass
        self._entry = entry
        self._fallback_device_id = fallback_device_id

    @property
    def supported_languages(self) -> list[str]:
        return ["ru"]

    async def async_process(self, user_input: ConversationInput) -> ConversationResult:
        conversation_id = user_input.conversation_id or str(uuid.uuid4())
        if self._entry is None:
            raise HomeAssistantError("Dialog Custom UI integration entry not found")

        options = build_runtime_options(self._entry, get_cached_settings(self._hass))
        client_id = _normalize_value(options.get("client_id"))
        device_id = getattr(user_input, "device_id", None) or self._fallback_device_id
        dialog_result: dict[str, Any] = {}

        try:
            dialog_payload = {
                "request": {"command": user_input.text},
                "session": {
                    "user": {"user_id": client_id},
                    "application": {"application_id": device_id},
                    "session_id": conversation_id,
                    "new": user_input.conversation_id is None,
                },
                "version": "1.0",
            }
            dialog_result = await dialog_service.process_dialog_request(dialog_payload)
        except (aiohttp.ClientError, TimeoutError, ValueError) as err:
            _LOGGER.error("Voice agent request failed: %s", err)

        response_text = str(dialog_result.get("text") or "")
        should_continue = not bool(dialog_result.get("end_session", True))
        response = intent.IntentResponse(language=user_input.language)
        response.async_set_speech(response_text)
        result_arguments: dict[str, Any] = {
            "response": response,
            "conversation_id": conversation_id if should_continue else None,
        }
        if "continue_conversation" in ConversationResult.__dataclass_fields__:
            result_arguments["continue_conversation"] = should_continue
        return ConversationResult(**result_arguments)
