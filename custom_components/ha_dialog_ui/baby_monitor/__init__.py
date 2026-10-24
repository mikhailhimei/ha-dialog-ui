"""Built-in authenticated radio monitor transport; no separate integration."""

import base64

import voluptuous as vol
from homeassistant.components import websocket_api

from .receiver import RATE
from .runtime import MonitorRuntime
from .services import register_services


async def async_start(hass):
    runtime = hass.data.get("ha_dialog_ui_monitor_runtime")
    if runtime is None:
        runtime = hass.data["ha_dialog_ui_monitor_runtime"] = MonitorRuntime(hass)
        hass.data.setdefault("ha_dialog_ui_monitor_receivers", {})
        register_services(hass)
        websocket_api.async_register_command(hass, ws_listen)
    await runtime.start()


async def async_stop(hass):
    runtime = hass.data.get("ha_dialog_ui_monitor_runtime")
    if runtime:
        await runtime.stop()


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/monitor/listen",
        vol.Required("node_id"): str,
    }
)
@websocket_api.async_response
async def ws_listen(hass, connection, msg):
    # HA's websocket API has already authenticated this connection.
    receiver = hass.data["ha_dialog_ui_monitor_receivers"].get(msg["node_id"])
    if receiver is None:
        connection.send_error(msg["id"], "not_found", "Monitor not configured")
        return
    if len(receiver.listeners) >= 4:
        connection.send_error(msg["id"], "busy", "Maximum four listeners")
        return

    def send(event):
        if event["type"] == "audio":
            event = {
                "type": "audio",
                "pcm": base64.b64encode(event["data"]).decode("ascii"),
                "rate": RATE,
            }
        connection.send_event(msg["id"], event)

    receiver.listeners.add(send)
    connection.subscriptions[msg["id"]] = lambda: receiver.listeners.discard(send)
    connection.send_result(msg["id"])
    send({"type": "status", "connected": receiver.connected})
