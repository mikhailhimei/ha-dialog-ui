"""Bounded in-memory HTTP diagnostics with redacted JSON bodies."""
import asyncio
import json
import re
from collections import deque
from datetime import datetime, timezone
from functools import wraps
from time import monotonic

from aiohttp import web

from ..const import DOMAIN
from ..storage.settings_storage import get_cached_settings

_BODY_LIMIT = 16384
_SENSITIVE_KEY = re.compile(r"token|password|passwd|authorization|secret|api.?key|cookie|credential", re.I)


def _safe_body(value, settings):
    remote = settings.get("remout") or {}
    tokens = [settings.get("api_commands_token"), remote.get("token")]
    secrets = {str(token) for token in tokens if token}
    secrets.update(token[7:] for token in list(secrets) if token.lower().startswith("bearer ") and token[7:])

    def redact_text(text):
        for secret in sorted(secrets, key=len, reverse=True):
            text = text.replace(secret, "[redacted]")
        return text

    def redact(item, depth=0):
        if depth > 15:
            return "[truncated]"
        if isinstance(item, dict):
            return {redact_text(str(key)): "[redacted]" if _SENSITIVE_KEY.search(str(key)) else redact(val, depth + 1)
                    for key, val in list(item.items())[:100]}
        if isinstance(item, (list, tuple)):
            return [redact(val, depth + 1) for val in item[:100]]
        if isinstance(item, str):
            item = redact_text(item)
            return item[:4096] + ("… [truncated]" if len(item) > 4096 else "")
        return item

    result = redact(value)
    serialized = json.dumps(result, ensure_ascii=False)
    if len(serialized) > _BODY_LIMIT:
        return {"_truncated": True, "preview": serialized[:_BODY_LIMIT]}
    return json.loads(serialized)


def append_api_log(hass, *, method, path, phase, status=None, duration_ms=None,
                   event=None, request_body=None, response_body=None):
    settings = get_cached_settings(hass)
    if not settings.get("api_commands_enabled"):
        return
    logs = hass.data.setdefault(DOMAIN, {}).setdefault("api_logs", deque(maxlen=200))
    logs.append({"timestamp": datetime.now(timezone.utc).isoformat(), "method": method,
                 "path": path, "phase": phase, "status": status,
                 "duration_ms": duration_ms, "event": event,
                 "request_body": _safe_body(request_body, settings),
                 "response_body": _safe_body(response_body, settings)})


def log_api_request(handler):
    @wraps(handler)
    async def wrapped(self, request):
        started = monotonic()
        method = "GET" if handler.__name__ == "get" else "POST"
        status = 500
        response = None
        try:
            response = await handler(self, request)
            status = response.status
            return response
        except (asyncio.CancelledError, ConnectionError):
            status = 499
            raise
        finally:
            if get_cached_settings(self.hass).get("api_commands_enabled"):
                request_body = response_body = None
                # Never read an unauthorized request body just for logging.
                if method == "POST" and status != 401:
                    try:
                        request_body = await request.json()
                    except Exception:
                        # Diagnostics must not mask a disconnect or handler failure.
                        request_body = {"_error": "invalid_json"}
                if isinstance(response, web.Response) and response.text:
                    try:
                        response_body = json.loads(response.text)
                    except ValueError:
                        response_body = response.text
                append_api_log(self.hass, method=method, path=self.url, phase="completed",
                               status=status, duration_ms=round((monotonic() - started) * 1000),
                               request_body=request_body, response_body=response_body)
    return wrapped
