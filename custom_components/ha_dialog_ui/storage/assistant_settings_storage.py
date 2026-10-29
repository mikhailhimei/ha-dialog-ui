"""Storage helpers for dialog custom UI assistant settings."""

from __future__ import annotations

from copy import deepcopy
from typing import Any
from uuid import uuid4

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .assistant_commands_storage import async_load_assistant_commands, async_save_assistant_commands
from .collection_helpers import normalize_collection_items

from .dialog_cache import update_dialog_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "ha_dialog_ui_assistant_settings"
_DEFAULT_ASSISTANT_SETTINGS: list[dict[str, Any]] = [
    {"uuid": str(uuid4()), "actionType": "stop", "title": "Стоп",
     "endStatus": True, "status": True, "voiceCommands": ["стоп"],
     "voiceResponse": "Диалог завершён."},
    {
        "uuid": str(uuid4()),
        "actionType": "default_main",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Если ничего не нашел",
        "voiceResponse": "Извините я вас не поняла",
    },
    {
        "uuid": str(uuid4()),
        "actionType": "not_understand",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Ничего не нашло у дочернего",
        "voiceResponse": "Извините я вас не поняла, повторите пожалуйста",
    },{
        "uuid": str(uuid4()),
        "actionType": "finish_miss",
        "endStatus": False,
        "forwardCommandToServer": False,
        "title": "Начинаем поиск сначала по родителю",
        "voiceResponse": "Давайте начнём сначала. Что вы хотите сделать?",
    },
]


ASSISTANT_SETTING_ACTION_TYPES = frozenset(item["actionType"] for item in _DEFAULT_ASSISTANT_SETTINGS)

def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _copy_default_assistant_settings() -> list[dict[str, Any]]:
    return deepcopy(_DEFAULT_ASSISTANT_SETTINGS)


async def _async_load_or_create_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    settings = [item for item in _copy_default_assistant_settings() if item["actionType"] != "stop"] if loaded is None else normalize_collection_items(loaded)
    stop = next((item for item in settings if item.get("actionType") == "stop"), None)
    commands = await async_load_assistant_commands(hass)
    legacy = next((item for item in commands if (item.get("componentDialog") or {}).get("actionType") == "stop"), None)
    changed = loaded is None
    if stop is None:
        stop = deepcopy(_DEFAULT_ASSISTANT_SETTINGS[0])
        if legacy is not None:
            component = legacy.get("componentDialog") or {}
            stop.update({"uuid": legacy["uuid"], "status": legacy.get("status", True),
                         "voiceCommands": component.get("voiceCommands", []),
                         "voiceResponse": next((item.get("voiceResponse", "") for item in component.get("voiceResponseArray") or [] if item.get("actionType") == "default"), "")})
            if "script_entity_id" in component:
                stop["script_entity_id"] = component["script_entity_id"]
        settings.append(stop)
        changed = True
    if changed:
        await store.async_save(settings)
    # Save the destination first, so an interrupted migration never loses the command.
    if legacy is not None and legacy.get("uuid") == stop.get("uuid"):
        await async_save_assistant_commands(hass, [item for item in commands if item.get("uuid") != legacy.get("uuid")])
    update_dialog_cache_collection(hass, "settings-dialog", settings)
    return settings


async def async_load_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    return await _async_load_or_create_assistant_settings(hass)


async def async_save_assistant_settings(
    hass: HomeAssistant,
    assistant_settings: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = normalize_collection_items(assistant_settings)
    await store.async_save(normalized)
    update_dialog_cache_collection(hass, "settings-dialog", normalized)
