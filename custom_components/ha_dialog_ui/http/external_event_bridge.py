"""External active-command event bridge for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import json
import logging
from collections.abc import Callable
from typing import Any
from urllib.parse import urlencode

import aiohttp
import async_timeout

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from ..const import EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE
from ..dialog.normalize import _normalize_value
from ..runtime_options import build_runtime_options
from ..storage.settings_storage import get_cached_settings

_LOGGER = logging.getLogger(__name__)

_RECONNECT_DELAY_SECONDS = 5
_STREAM_TIMEOUT_SECONDS = 60 * 60
_POST_TIMEOUT_SECONDS = 15
_ORIGIN_EXTERNAL_BRIDGE = "external_event_bridge"


def _normalize_base_url(value: Any) -> str:
    base_url = _normalize_value(value).rstrip("/")
    if not base_url:
        return ""
    if not base_url.startswith(("http://", "https://")):
        base_url = f"http://{base_url}"
    return base_url


def _append_query_parameters(url: str, params: dict[str, str]) -> str:
    clean_params = {key: value for key, value in params.items() if value}
    if not clean_params:
        return url
    separator = "&" if "?" in url else "?"
    return f"{url}{separator}{urlencode(clean_params)}"


def _build_stream_url(base_url: str, client_id: str) -> str:
    """Build stream URL from configured remote base URL.

    If the configured URL already looks like a concrete endpoint, keep it as-is.
    Otherwise use the integration convention under /api/dialog/events.
    """
    if "/api/" in base_url or base_url.endswith(("/events", "/stream", "/sse")):
        return _append_query_parameters(base_url, {"clientId": client_id})
    return _append_query_parameters(f"{base_url}/api/dialog/events", {"clientId": client_id})


def _build_post_url(base_url: str) -> str:
    if "/api/" in base_url:
        return base_url
    return f"{base_url}/api/dialog/events"


def _decode_json_or_text(value: str) -> Any:
    value = value.strip()
    if not value:
        return None
    try:
        return json.loads(value)
    except ValueError:
        return {"data": value}


def _extract_event_type(payload: dict[str, Any]) -> str:
    return _normalize_value(
        payload.get("event")
        or payload.get("event_type")
        or payload.get("type")
        or payload.get("name")
    ).lower()


def _normalize_event_data(data: dict[str, Any]) -> dict[str, Any]:
    normalized = dict(data)
    if "client_id" not in normalized and normalized.get("clientId") is not None:
        normalized["client_id"] = normalized.get("clientId")
    if "device_id" not in normalized and normalized.get("deviceId") is not None:
        normalized["device_id"] = normalized.get("deviceId")
    if "command_data" not in normalized and normalized.get("commandData") is not None:
        normalized["command_data"] = normalized.get("commandData")
    return normalized


def _extract_event_data(payload: Any) -> tuple[str, dict[str, Any]] | None:
    if not isinstance(payload, dict):
        return None

    event_type = _extract_event_type(payload)
    data = payload.get("data")

    if isinstance(data, str):
        parsed = _decode_json_or_text(data)
        data = parsed if isinstance(parsed, dict) else {"data": parsed}
    elif not isinstance(data, dict):
        data = payload

    if not isinstance(data, dict):
        return None

    if event_type in {EVENT_ACTIVE_COMMAND, "active_command", "ha_dialog_ui_active_command"}:
        return EVENT_ACTIVE_COMMAND, data

    if event_type in {EVENT_DIALOG_MESSAGE, "dialog_message", "dialog_command"}:
        return EVENT_DIALOG_MESSAGE, data

    if "command_data" in data:
        return EVENT_ACTIVE_COMMAND, data

    if {"client_id", "device_id"}.issubset(data.keys()) or {"clientId", "deviceId"}.issubset(data.keys()):
        return EVENT_DIALOG_MESSAGE, data

    return None


class ExternalEventBridge:
    """Subscribe to external events and mirror HA dialog events over HTTP."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        append_log,
    ) -> None:
        self.hass = hass
        self.entry = entry
        self._append_log = append_log
        self._session: aiohttp.ClientSession | None = None
        self._stream_task: asyncio.Task | None = None
        self._unsubscribers: list[Callable[[], None]] = []
        self._outbound_tasks: set[asyncio.Task] = set()
        self._stopping = False

    async def async_start(
        self,
        *,
        listen_external_active_commands: bool = True,
        forward_dialog_messages: bool = True,
    ) -> None:
        if self._stream_task or self._unsubscribers:
            return

        options = build_runtime_options(self.entry, get_cached_settings(self.hass))
        base_url = _normalize_base_url(options.get("base_url"))
        if listen_external_active_commands and not base_url:
            self._append_log("error", "external bridge listen skipped: base_url is empty")
            listen_external_active_commands = False

        if not listen_external_active_commands and not forward_dialog_messages:
            return

        self._session = async_get_clientsession(self.hass)
        self._stopping = False
        self._unsubscribers = []
        if forward_dialog_messages:
            self._unsubscribers.append(
                self.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, self._handle_outbound_event),
            )
        if listen_external_active_commands:
            self._stream_task = self.hass.async_create_background_task(
                self._listen_with_reconnect(), "Dialog Custom UI external event stream",
            )

        if listen_external_active_commands:
            self._append_log("info", "external bridge started")
        elif forward_dialog_messages:
            self._append_log("info", "dialog message forwarding started")

    async def async_stop(self) -> None:
        had_state = bool(self._stream_task or self._unsubscribers or self._outbound_tasks)
        self._stopping = True
        for unsubscribe in self._unsubscribers:
            try:
                unsubscribe()
            except Exception:
                _LOGGER.debug("Failed to unsubscribe external bridge listener", exc_info=True)
        self._unsubscribers = []

        task = self._stream_task
        self._stream_task = None
        if task:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass
        outbound_tasks = list(self._outbound_tasks)
        for outbound_task in outbound_tasks:
            outbound_task.cancel()
        if outbound_tasks:
            await asyncio.gather(*outbound_tasks, return_exceptions=True)
        self._outbound_tasks.clear()
        if had_state:
            self._append_log("info", "external bridge stopped")

    async def _listen_with_reconnect(self) -> None:
        while not self._stopping:
            options = build_runtime_options(self.entry, get_cached_settings(self.hass))
            base_url = _normalize_base_url(options.get("base_url"))
            client_id = _normalize_value(options.get("client_id"))
            token = _normalize_value(options.get("remote_token"))

            if not base_url:
                await asyncio.sleep(_RECONNECT_DELAY_SECONDS)
                continue

            stream_url = _build_stream_url(base_url, client_id)
            headers = {"Accept": "text/event-stream, application/x-ndjson, application/json"}
            if token:
                headers["Authorization"] = token

            try:
                await self._consume_stream(stream_url, headers)
            except asyncio.CancelledError:
                raise
            except Exception as err:
                _LOGGER.warning("External event stream failed: %s", err)
                self._append_log("error", f"external stream failed: {err}")

            if not self._stopping:
                await asyncio.sleep(_RECONNECT_DELAY_SECONDS)

    async def _consume_stream(self, stream_url: str, headers: dict[str, str]) -> None:
        if self._session is None:
            return

        _LOGGER.debug("Subscribing to external event stream: %s", stream_url)
        self._append_log("request", f"LISTEN {stream_url}")

        async with async_timeout.timeout(_STREAM_TIMEOUT_SECONDS):
            async with self._session.get(stream_url, headers=headers) as response:
                response.raise_for_status()
                content_type = response.headers.get("Content-Type", "")
                if "application/json" in content_type and "stream" not in content_type:
                    payload = await response.json(content_type=None)
                    self._publish_inbound_payload(payload)
                    return

                event_name = ""
                data_lines: list[str] = []
                async for raw_line in response.content:
                    line = raw_line.decode("utf-8", errors="ignore").strip()
                    if not line:
                        self._dispatch_sse_event(event_name, data_lines)
                        event_name = ""
                        data_lines = []
                        continue
                    if line.startswith(":"):
                        continue
                    if line.startswith("event:"):
                        event_name = line[6:].strip()
                        continue
                    if line.startswith("data:"):
                        data_lines.append(line[5:].strip())
                        continue

                    payload = _decode_json_or_text(line)
                    self._publish_inbound_payload(payload)

                self._dispatch_sse_event(event_name, data_lines)

    def _dispatch_sse_event(self, event_name: str, data_lines: list[str]) -> None:
        if not data_lines:
            return
        payload = _decode_json_or_text("\n".join(data_lines))
        if event_name and isinstance(payload, dict) and "event" not in payload and "type" not in payload:
            payload = {"event": event_name, "data": payload}
        self._publish_inbound_payload(payload)

    def _publish_inbound_payload(self, payload: Any) -> None:
        extracted = _extract_event_data(payload)
        if extracted is None:
            _LOGGER.debug("Ignored external event payload: %s", payload)
            return

        event_type, data = extracted
        if data.get("origin") == _ORIGIN_EXTERNAL_BRIDGE:
            return

        event_data = _normalize_event_data(data)
        event_data["origin"] = _ORIGIN_EXTERNAL_BRIDGE
        self.hass.bus.async_fire(event_type, event_data)
        self._append_log("event", f"RECV {event_type}")

    @callback
    def _handle_outbound_event(self, event: Event) -> None:
        data = event.data or {}
        if self._stopping or data.get("origin") == _ORIGIN_EXTERNAL_BRIDGE:
            return
        task = self.hass.async_create_task(self._post_outbound_event(event.event_type, data))
        self._outbound_tasks.add(task)
        task.add_done_callback(self._outbound_tasks.discard)

    async def _post_outbound_event(self, event_type: str, data: dict[str, Any]) -> None:
        if self._session is None:
            return

        options = build_runtime_options(self.entry, get_cached_settings(self.hass))
        base_url = _normalize_base_url(options.get("base_url"))
        token = _normalize_value(options.get("remote_token"))
        if not base_url:
            return

        event_data = _normalize_event_data(data)
        event_data["origin"] = _ORIGIN_EXTERNAL_BRIDGE
        payload = {
            "event": event_type,
            "clientId": _normalize_value(options.get("client_id")),
            "data": event_data,
        }
        headers = {"Content-Type": "application/json"}
        if token:
            headers["Authorization"] = token

        post_url = _build_post_url(base_url)
        try:
            async with async_timeout.timeout(_POST_TIMEOUT_SECONDS):
                async with self._session.post(post_url, json=payload, headers=headers) as response:
                    if response.status >= 400:
                        body = await response.text()
                        raise aiohttp.ClientResponseError(
                            response.request_info,
                            response.history,
                            status=response.status,
                            message=body[:200],
                            headers=response.headers,
                        )
            self._append_log("request", f"POST {event_type}")
        except (aiohttp.ClientError, TimeoutError) as err:
            _LOGGER.warning("Failed to post external dialog event: %s", err)
            self._append_log("error", f"external post failed: {err}")
