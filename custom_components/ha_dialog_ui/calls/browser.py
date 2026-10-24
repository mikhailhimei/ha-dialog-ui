"""Authenticated, connection-owned browser microphone endpoint. No public ingest URL."""

import base64
import binascii
import secrets
from time import monotonic

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.exceptions import HomeAssistantError

from ..baby_monitor.receiver import CHUNK, RATE, Receiver


class BrowserPeer:
    def __init__(self):
        self.id = "browser:" + secrets.token_urlsafe(16)
        self.receiver = Receiver(self.id, secrets.token_urlsafe(32))
        self.call_id = None
        self.closed = False
        self.audio_stop = None
        self.tokens = 4.0
        self.last_frame = monotonic()

    def detach_audio(self):
        if self.audio_stop:
            self.audio_stop()

    def end(self):
        self.call_id = None
        self.receiver._status(False)
        self.detach_audio()

    def publish(self, pcm):
        now = monotonic()
        self.tokens = min(4.0, self.tokens + (now - self.last_frame) * 25)
        self.last_frame = now
        if self.tokens < 1:
            return False
        self.tokens -= 1
        self.receiver._publish({"type": "audio", "data": pcm})
        return True


def get_peer(hass, connection, msg):
    runtime = hass.data["ha_dialog_ui_calls"]
    peer = runtime.browser_views.get((connection, msg["view_id"]))
    if peer is None or peer.closed:
        raise HomeAssistantError("Откройте вкладку звонков заново")
    return runtime, peer


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_start",
        vol.Required("view_id"): str,
        vol.Required("target_device_id"): str,
    }
)
@websocket_api.async_response
async def start(hass, connection, msg):
    try:
        runtime, peer = get_peer(hass, connection, msg)
        await runtime.dial(peer.id, msg["target_device_id"], browser=peer)
        if peer.closed or peer.call_id not in runtime.calls:
            raise HomeAssistantError("Звонок завершён")
    except (HomeAssistantError, TimeoutError):
        connection.send_error(
            msg["id"],
            "call_error",
            "Не удалось позвонить. Проверьте связь, Mute и доступность колонки.",
        )
    else:
        connection.send_result(msg["id"], {"call_id": peer.call_id})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_end",
        vol.Required("view_id"): str,
    }
)
@websocket_api.async_response
async def end(hass, connection, msg):
    try:
        runtime, peer = get_peer(hass, connection, msg)
        if peer.call_id:
            await runtime.end(peer.call_id)
    except HomeAssistantError:
        connection.send_error(msg["id"], "call_error", "Вкладка звонка недоступна")
    else:
        connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_audio",
        vol.Required("view_id"): str,
        vol.Required("pcm"): vol.All(str, vol.Length(max=1800)),
    }
)
@websocket_api.async_response
async def audio(hass, connection, msg):
    try:
        runtime, peer = get_peer(hass, connection, msg)
        pcm = base64.b64decode(msg["pcm"], validate=True)
        if len(pcm) != CHUNK:
            raise ValueError("Invalid PCM frame")
    except (HomeAssistantError, ValueError, binascii.Error):
        connection.send_error(
            msg["id"],
            "call_error",
            "Недопустимый аудиопакет или вкладка звонка закрыта",
        )
        return
    call = runtime.calls.get(peer.call_id)
    accepted = bool(
        call
        and call.browser is peer
        and call.state in ("connecting", "active")
        and peer.receiver.connected
        and peer.publish(pcm)
    )
    connection.send_result(msg["id"], {"accepted": accepted})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_receive",
        vol.Required("view_id"): str,
    }
)
@websocket_api.async_response
async def receive(hass, connection, msg):
    try:
        runtime, peer = get_peer(hass, connection, msg)
        call = runtime.calls.get(peer.call_id)
        if call is None or call.browser is not peer:
            raise HomeAssistantError("Нет звонка этой вкладки")
        receiver = runtime.receivers[runtime.resolve(call.target)["node_id"]]
    except (HomeAssistantError, KeyError):
        connection.send_error(msg["id"], "call_error", "Звонок недоступен")
        return
    peer.detach_audio()

    def send(event):
        if event["type"] == "audio":
            event = {
                "type": "audio",
                "pcm": base64.b64encode(event["data"]).decode("ascii"),
                "rate": RATE,
            }
        connection.send_event(msg["id"], event)

    def stop():
        receiver.listeners.discard(send)
        if peer.audio_stop is stop:
            peer.audio_stop = None

    peer.audio_stop = stop
    receiver.listeners.add(send)
    connection.subscriptions[msg["id"]] = stop
    connection.send_result(msg["id"])
    send({"type": "status", "connected": receiver.connected})
