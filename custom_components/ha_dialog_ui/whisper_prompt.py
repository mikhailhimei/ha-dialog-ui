"""Admin-only configuration and live synchronization of Whisper's initial prompt."""
from __future__ import annotations

import asyncio
import json
from urllib.parse import urlsplit

import voluptuous as vol
from aiohttp import ClientError
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .src.api.mutation_lock import serialize_collection_mutation

_MAX_PROMPT_LENGTH = 16000


def _store(hass):
    return Store(hass, 1, f"{DOMAIN}_whisper_prompt")


def _endpoint(value):
    parts = urlsplit(value.strip())
    if (parts.scheme not in {"http", "https"} or not parts.hostname
            or parts.username or parts.password or parts.query or parts.fragment
            or parts.path not in {"", "/"}):
        raise ValueError("Укажите адрес API Whisper, например http://192.168.1.10:10301")
    return value.strip().rstrip("/")


def _credentials(current, data):
    url = _endpoint(data.get("url", ""))
    token = data.get("token", "").strip()
    if not token and url == current.get("url"):
        token = current.get("token", "")
    if not token:
        raise ValueError("Укажите токен API Whisper")
    return url, token


async def _remote(hass, url, token, *, prompt=None):
    session = async_get_clientsession(hass)
    async with asyncio.timeout(10):
        async with session.request("GET" if prompt is None else "PUT", f"{url}/initial-prompt",
                                   headers={"Authorization": f"Bearer {token}"},
                                   json=None if prompt is None else {"initial_prompt": prompt},
                                   allow_redirects=False) as response:
            if response.status == 401:
                raise ValueError("Whisper отклонил токен доступа")
            if response.status != 200:
                raise ValueError(f"API Whisper вернул HTTP {response.status}")
            # Bound data before parsing responses from the configured service.
            raw = bytearray()
            async for chunk in response.content.iter_chunked(16384):
                raw.extend(chunk)
                if len(raw) > 100000:
                    raise ValueError("Ответ API Whisper слишком большой")
            result = json.loads(raw)
            if not isinstance(result, dict) or not isinstance(result.get("initial_prompt"), str):
                raise ValueError("API Whisper вернул некорректный ответ")
            if len(result["initial_prompt"]) > _MAX_PROMPT_LENGTH:
                raise ValueError("Промпт Whisper слишком длинный")
            if prompt is not None and (result.get("applied") is not True or result["initial_prompt"] != prompt):
                raise ValueError("Whisper не подтвердил применение промпта")
            return result["initial_prompt"]


def async_register_whisper_prompt_websockets(hass: HomeAssistant):
    for handler in (_get_prompt, _read_prompt, _save_prompt):
        websocket_api.async_register_command(hass, handler)


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/get_whisper_prompt"})
@websocket_api.require_admin
@websocket_api.async_response
async def _get_prompt(hass, connection, msg):
    settings = await _store(hass).async_load() or {}
    connection.send_result(msg["id"], {"url": settings.get("url", ""),
                                      "initial_prompt": settings.get("initial_prompt", ""),
                                      "has_token": bool(settings.get("token"))})


_REQUEST_SCHEMA = {vol.Required("url"): str, vol.Optional("token", default=""): str}


async def _apply_request(hass, connection, msg, *, save):
    current = await _store(hass).async_load() or {}
    try:
        url, token = _credentials(current, msg["data"])
        prompt = await _remote(hass, url, token, prompt=msg["data"]["initial_prompt"] if save else None)
        if save:
            await _store(hass).async_save({"url": url, "token": token, "initial_prompt": prompt})
    except (ValueError, UnicodeError) as error:
        connection.send_error(msg["id"], "whisper_prompt_error", str(error))
        return
    except (ClientError, TimeoutError):
        connection.send_error(msg["id"], "whisper_prompt_error", "Не удалось подключиться к API Whisper. Проверьте адрес, порт и доступность контейнера.")
        return
    except OSError:
        connection.send_error(msg["id"], "whisper_prompt_error", "Промпт применён в Whisper, но не удалось сохранить настройки Home Assistant. Повторите сохранение.")
        return
    connection.send_result(msg["id"], {"initial_prompt": prompt, "applied": save})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/read_whisper_prompt",
                                vol.Required("data"): _REQUEST_SCHEMA})
@websocket_api.require_admin
@websocket_api.async_response
async def _read_prompt(hass, connection, msg):
    await _apply_request(hass, connection, msg, save=False)


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/save_whisper_prompt",
                                vol.Required("data"): {**_REQUEST_SCHEMA,
                                    vol.Required("initial_prompt"): vol.All(str, vol.Length(max=_MAX_PROMPT_LENGTH))}})
@websocket_api.require_admin
@websocket_api.async_response
@serialize_collection_mutation("whisper_prompt")
async def _save_prompt(hass, connection, msg):
    await _apply_request(hass, connection, msg, save=True)
