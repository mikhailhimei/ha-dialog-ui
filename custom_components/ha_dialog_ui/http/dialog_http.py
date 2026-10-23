"""HTTP API for Dialog Custom UI distributed dialog commands."""

from __future__ import annotations

import asyncio
import json
import logging
from collections.abc import Callable
from typing import Any

from aiohttp import web

from homeassistant.components.http import HomeAssistantView
from homeassistant.core import Event, HomeAssistant, callback

from ..const import DOMAIN, EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE
from .api_logs import append_api_log, log_api_request
from .external_event_bridge import _extract_event_data, _normalize_event_data
from ..dialog.normalize import _normalize_value
from ..src.service import dialog_service
from ..src.service.dialog_state import set_current_hass
from ..integration_helpers import get_integration_entry
from ..runtime_options import build_runtime_options
from ..storage.settings_storage import get_cached_settings

_LOGGER = logging.getLogger(__name__)

_COMMANDS_URL = "/api/dialog/commands"
_EVENTS_URL = "/api/dialog/events"
_EVENT_URL = "/api/dialog/event"
_KEEPALIVE_SECONDS = 15


def async_register_dialog_http(hass: HomeAssistant) -> None:
    """Register HTTP endpoints used by primary/subscriber HA instances."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    if domain_data.get("dialog_http_registered"):
        return

    broker = DialogEventBroker(hass)
    domain_data["dialog_http_broker"] = broker
    domain_data["dialog_http_registered"] = True

    hass.http.register_view(DialogCommandsView(hass))
    hass.http.register_view(DialogEventsView(hass, broker))
    hass.http.register_view(DialogEventView(hass, broker))
    broker.async_start()


def _json_response(data: Any, status: int = 200) -> web.Response:
    return web.json_response(data, status=status, dumps=_json_dumps)


def _json_dumps(data: Any) -> str:
    return json.dumps(data, ensure_ascii=False)


def _is_authorized(request: web.Request, hass: HomeAssistant) -> bool:
    entry = get_integration_entry(hass)
    if entry is None:
        _LOGGER.debug("Authorization failed: no entry found")
        return False

    options = build_runtime_options(entry, get_cached_settings(hass))
    # Debug: show whether cache exists and keys available (don't log full token)
    domain_data = hass.data.get(DOMAIN, {})
    cache_present = bool(domain_data.get("settings_cache"))
    _LOGGER.debug("Settings cache present=%s, options keys=%s", cache_present, list(options.keys()))

    # Check if external API is enabled for commands and events
    api_commands_enabled = options.get("api_commands_enabled", False)
    _LOGGER.debug("API enabled: %s", api_commands_enabled)
    if not api_commands_enabled:
        return False

    # If no token is set, deny access
    api_commands_token = options.get("api_commands_token", "")
    if not api_commands_token:
        _LOGGER.debug("Authorization failed: no token configured in options")
        return False

    # Verify the token from Authorization header
    auth_header = request.headers.get("Authorization", "")
    expected = f"Bearer {api_commands_token}"
    result = auth_header == expected
    if not result:
        _LOGGER.debug("Authorization failed: token mismatch")
    return result


def _extract_command_text(payload: dict[str, Any]) -> str:
    request_payload = payload.get("request")
    if isinstance(request_payload, dict):
        command = _normalize_value(request_payload.get("command"))
        if command:
            return command

    for key in ("command", "text", "utterance"):
        command = _normalize_value(payload.get(key))
        if command:
            return command

    return ""


def _extract_client_id(payload: dict[str, Any], options: dict[str, Any]) -> str:
    session = payload.get("session")
    if isinstance(session, dict):
        user = session.get("user")
        if isinstance(user, dict):
            client_id = _normalize_value(user.get("user_id"))
            if client_id:
                return client_id

    for key in ("client_id", "clientId", "user_id", "userId"):
        client_id = _normalize_value(payload.get(key))
        if client_id:
            return client_id

    return _normalize_value(options.get("client_id"))


def _extract_device_id(payload: dict[str, Any]) -> str:
    session = payload.get("session")
    if isinstance(session, dict):
        application = session.get("application")
        if isinstance(application, dict):
            device_id = _normalize_value(application.get("application_id"))
            if device_id:
                return device_id

    for key in ("device_id", "deviceId", "application_id", "applicationId"):
        device_id = _normalize_value(payload.get(key))
        if device_id:
            return device_id

    return ""


def _extract_new_session(payload: dict[str, Any]) -> bool:
    session = payload.get("session")
    if isinstance(session, dict) and "new" in session:
        return bool(session.get("new"))
    if "new" in payload:
        return bool(payload.get("new"))
    if "new_session" in payload:
        return bool(payload.get("new_session"))
    return True


def _build_dialog_request_payload(
    payload: dict[str, Any],
    options: dict[str, Any],
) -> dict[str, Any]:
    """Build the canonical dialog payload expected by process_dialog_request."""
    if isinstance(payload.get("request"), dict) and isinstance(payload.get("session"), dict):
        return payload

    command = _extract_command_text(payload)
    client_id = _extract_client_id(payload, options)
    device_id = _extract_device_id(payload)
    new_session = _extract_new_session(payload)

    return {
        "request": {"command": command},
        "session": {
            "user": {"user_id": client_id},
            "application": {"application_id": device_id},
            "session_id": _normalize_value(payload.get("session_id") or payload.get("sessionId")),
            "new": new_session,
        },
        "version": _normalize_value(payload.get("version") or "1.0"),
    }


class DialogEventBroker:
    """Fan out local active-command and dialog-message events to HTTP stream subscribers."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._queues: set[asyncio.Queue[dict[str, Any]]] = set()
        self._unsubscribers: list[Callable[[], None]] = []

    def async_start(self) -> None:
        if self._unsubscribers:
            return
        self._unsubscribers = [
            self.hass.bus.async_listen(
                EVENT_ACTIVE_COMMAND,
                self._handle_event,
            ),
            self.hass.bus.async_listen(
                EVENT_DIALOG_MESSAGE,
                self._handle_event,
            ),
        ]

    def async_add_queue(self) -> asyncio.Queue[dict[str, Any]]:
        queue: asyncio.Queue[dict[str, Any]] = asyncio.Queue(maxsize=100)
        self._queues.add(queue)
        return queue

    def async_remove_queue(self, queue: asyncio.Queue[dict[str, Any]]) -> None:
        self._queues.discard(queue)

    @callback
    def _handle_event(self, event: Event) -> None:
        payload = {"event": event.event_type, "data": event.data or {}}
        full_queues: list[asyncio.Queue[dict[str, Any]]] = []
        for queue in self._queues:
            try:
                queue.put_nowait(payload)
            except asyncio.QueueFull:
                full_queues.append(queue)
        for queue in full_queues:
            self._queues.discard(queue)


class DialogCommandsView(HomeAssistantView):
    """Accept an external dialog command and run it through process_dialog_request."""

    url = _COMMANDS_URL
    name = "api:ha_dialog_ui:commands"
    requires_auth = False

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass

    @log_api_request
    async def post(self, request: web.Request) -> web.Response:
        if not _is_authorized(request, self.hass):
            return _json_response({"error": "unauthorized"}, status=401)

        entry = get_integration_entry(self.hass)
        if entry is None:
            return _json_response({"error": "not_configured"}, status=404)

        try:
            payload = await request.json()
        except ValueError:
            return _json_response({"error": "invalid_json"}, status=400)

        if not isinstance(payload, dict):
            return _json_response({"error": "invalid_payload"}, status=400)

        options = build_runtime_options(entry, get_cached_settings(self.hass))
        dialog_payload = _build_dialog_request_payload(payload, options)

        try:
            set_current_hass(self.hass)
            result = await dialog_service.process_dialog_request(dialog_payload)
        except Exception as err:
            _LOGGER.exception("Failed to process dialog command")
            return _json_response({"error": str(err)}, status=500)

        response = {
            "response": result,
            "version":"1.0"
        }

        return _json_response(response)


class _BaseDialogEventsView(HomeAssistantView):
    """Expose local active commands as SSE and accept dialog_message events."""

    requires_auth = False

    def __init__(self, hass: HomeAssistant, broker: DialogEventBroker) -> None:
        self.hass = hass
        self.broker = broker

    @log_api_request
    async def get(self, request: web.Request) -> web.StreamResponse:
        if not _is_authorized(request, self.hass):
            return _json_response({"error": "unauthorized"}, status=401)

        client_id = _normalize_value(
            request.query.get("clientId") or request.query.get("client_id")
        )
        queue = self.broker.async_add_queue()
        response = web.StreamResponse(
            status=200,
            headers={
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        )
        try:
            await response.prepare(request)
            append_api_log(self.hass, method="GET", path=self.url, phase="connected", status=200)

            try:
                while True:
                    try:
                        payload = await asyncio.wait_for(
                            queue.get(),
                            timeout=_KEEPALIVE_SECONDS,
                        )
                    except asyncio.TimeoutError:
                        await response.write(b": keepalive\n\n")
                        continue

                    data = payload.get("data") if isinstance(payload, dict) else {}
                    if client_id and _normalize_value(data.get("client_id")) != client_id:
                        continue

                    event_name = payload.get("event") or EVENT_ACTIVE_COMMAND
                    body = _json_dumps(payload)
                    await response.write(f"event: {event_name}\n".encode())
                    await response.write(f"data: {body}\n\n".encode())
                    append_api_log(self.hass, method="GET", path=self.url, phase="event", status=200, event=event_name, response_body=payload)
            except (asyncio.CancelledError, ConnectionError):
                raise
            except Exception:
                _LOGGER.debug("Dialog events stream closed", exc_info=True)
        finally:
            self.broker.async_remove_queue(queue)

        return response

    @log_api_request
    async def post(self, request: web.Request) -> web.Response:
        if not _is_authorized(request, self.hass):
            return _json_response({"error": "unauthorized"}, status=401)

        try:
            payload = await request.json()
        except ValueError:
            return _json_response({"error": "invalid_json"}, status=400)

        extracted = _extract_event_data(payload)
        if extracted is None:
            return _json_response({"error": "unsupported_event"}, status=400)

        event_type, data = extracted
        event_data = _normalize_event_data(data)
        self.hass.bus.async_fire(event_type, event_data)
        return _json_response({"accepted": True, "event": event_type})


class DialogEventsView(_BaseDialogEventsView):
    """Plural dialog events endpoint."""

    url = _EVENTS_URL
    name = "api:ha_dialog_ui:events"


class DialogEventView(_BaseDialogEventsView):
    """Singular dialog event endpoint alias."""

    url = _EVENT_URL
    name = "api:ha_dialog_ui:event"
