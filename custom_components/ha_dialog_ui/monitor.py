"""Built-in monitor UI, capability discovery and view ownership."""

from __future__ import annotations

import asyncio
import logging
from dataclasses import dataclass

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import Context, HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.util import slugify

DOMAIN = "ha_dialog_ui"
_LOGGER = logging.getLogger(__name__)


def snapshot(hass):
    available = all(
        hass.services.has_service(DOMAIN, action)
        for action in ("monitor_start_source", "monitor_start_listener", "monitor_stop")
    )
    runtime = hass.data.get("ha_dialog_ui_monitor_runtime")
    if runtime is not None:
        available = available and runtime.running
    receivers = hass.data.get("ha_dialog_ui_monitor_receivers", {})
    devices = []
    if available:
        entities = er.async_get(hass)
        for device in dr.async_get(hass).devices.values():
            if device.disabled_by:
                continue
            for entry_id in device.config_entries:
                entry = hass.config_entries.async_get_entry(entry_id)
                if (
                    not entry
                    or entry.domain != "esphome"
                    or not (name := entry.data.get("device_name"))
                ):
                    continue

                def supports(action):
                    return hass.services.has_service(
                        "esphome", slugify(f"{name}_monitor_{action}")
                    )

                source = name in receivers and supports("source") and supports("stop")
                listener = supports("listen") and supports("stop")
                if not source and not listener:
                    continue
                device_entities = er.async_entries_for_device(entities, device.id)
                controls = [
                    hass.states.get(item.entity_id)
                    for item in device_entities
                    if (item.original_name or "").endswith(
                        ("Радионяня", "Радионяня: слушатель")
                    )
                ]
                source_control = next(
                    (
                        hass.states.get(item.entity_id)
                        for item in device_entities
                        if (item.original_name or "").endswith("Радионяня")
                    ),
                    None,
                )
                online = any(
                    state and state.state not in ("unknown", "unavailable")
                    for state in (
                        controls
                        or [hass.states.get(item.entity_id) for item in device_entities]
                    )
                )
                devices.append(
                    {
                        "id": device.id,
                        "name": device.name_by_user or device.name or name,
                        "node_id": name,
                        "source": source,
                        "listener": listener,
                        "online": online,
                        "source_state": source_control.state
                        if source_control
                        else "unavailable",
                        "transmitting": bool(source and receivers[name].connected),
                    }
                )
                break
    manager = hass.data.get("ha_dialog_ui_monitor_sessions")
    sessions = [
        {"source_device_id": item["source"], "listener_device_id": item["listener"]}
        for item in getattr(manager, "sessions", {}).values()
    ]
    return {
        "available": available,
        "devices": sorted(devices, key=lambda item: item["name"]),
        "sessions": sessions,
    }


@dataclass(eq=False)
class MonitorView:
    hass: HomeAssistant
    context: Context | None = None
    source: str | None = None
    closed: bool = False
    starting: bool = False
    pending: asyncio.Task | None = None
    updates: asyncio.Task | None = None

    async def stop(self):
        if self.source:
            source = self.source
            await self.hass.services.async_call(
                DOMAIN,
                "monitor_stop",
                {"device_id": source},
                blocking=True,
                context=self.context,
            )
            if self.source == source:
                self.source = None

    async def close(self):
        self.closed = True
        if self.updates:
            self.updates.cancel()
        # Stop immediately, then settle and stop again if an in-flight start finishes.
        # Keeping ownership until it settles prevents a late microphone restart.
        if self.pending and self.pending is not asyncio.current_task():
            if self.source:
                try:
                    await self.hass.services.async_call(
                        DOMAIN, "monitor_stop", {"device_id": self.source}, blocking=True
                    )
                except HomeAssistantError:
                    _LOGGER.warning(
                        "Could not interrupt monitor startup; retrying after it settles"
                    )
            await asyncio.gather(self.pending, return_exceptions=True)
        try:
            await self.stop()
        except HomeAssistantError:
            _LOGGER.warning(
                "Could not stop monitor on view disconnect; check device connectivity"
            )


def register_monitor(hass):
    hass.data.setdefault("ha_dialog_ui_monitor_views", {})
    for handler in (watch, start, stop):
        websocket_api.async_register_command(hass, handler)


@websocket_api.websocket_command(
    {vol.Required("type"): "ha_dialog_ui/monitor/watch", vol.Required("view_id"): str}
)
@websocket_api.async_response
async def watch(hass, connection, msg):
    key = (connection, msg["view_id"])
    views = hass.data["ha_dialog_ui_monitor_views"]
    if key in views:
        connection.send_error(msg["id"], "monitor_error", "Вкладка уже открыта")
        return
    view = views[key] = MonitorView(hass, context=connection.context(msg))

    def close():
        views.pop(key, None)
        view.closed = True
        hass.async_create_task(view.close())

    connection.subscriptions[msg["id"]] = close
    connection.send_result(msg["id"])

    async def updates():
        try:
            while not view.closed:
                state = snapshot(hass)
                owned = next(
                    (item for item in state["devices"] if item["id"] == view.source),
                    None,
                )
                if (
                    not view.starting
                    and owned
                    and owned["source_state"] == "off"
                    and not owned["transmitting"]
                    and not any(
                        pair["source_device_id"] == view.source
                        for pair in state["sessions"]
                    )
                ):
                    view.source = None
                connection.send_event(
                    msg["id"], {**state, "owned_source_id": view.source}
                )
                await asyncio.sleep(1)
        except asyncio.CancelledError:
            pass
        except (ConnectionError, RuntimeError):
            close()

    view.updates = hass.async_create_task(updates())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/monitor/start",
        vol.Required("view_id"): str,
        vol.Required("source_device_id"): str,
        vol.Optional("listener_device_id"): str,
    }
)
@websocket_api.async_response
async def start(hass, connection, msg):
    view = hass.data["ha_dialog_ui_monitor_views"].get((connection, msg["view_id"]))
    if view is None or view.closed or view.starting:
        connection.send_error(
            msg["id"], "monitor_error", "Вкладка закрыта или запуск уже выполняется"
        )
        return
    state = snapshot(hass)
    source = next(
        (
            device
            for device in state["devices"]
            if device["id"] == msg["source_device_id"]
            and device["source"]
            and device["online"]
        ),
        None,
    )
    listener_id = msg.get("listener_device_id")
    if source is None or (
        listener_id
        and not any(
            device["id"] == listener_id
            and device["listener"]
            and device["online"]
            and listener_id != source["id"]
            for device in state["devices"]
        )
    ):
        connection.send_error(
            msg["id"],
            "monitor_error",
            "Выберите подключённые колонки с поддержкой радионяни",
        )
        return
    requested = {source["id"], listener_id} - {None}
    if any(
        requested.intersection((pair["source_device_id"], pair["listener_device_id"]))
        for pair in state["sessions"]
    ) or any(
        device["id"] == listener_id and device["transmitting"]
        for device in state["devices"]
    ):
        connection.send_error(
            msg["id"],
            "monitor_error",
            "Сначала остановите текущий сеанс выбранных колонок",
        )
        return
    # Do not take a source from another open UI tab; scripts remain independent services.
    if any(
        other is not view and other.source in requested
        for other in hass.data["ha_dialog_ui_monitor_views"].values()
    ):
        connection.send_error(
            msg["id"], "monitor_error", "Эта колонка уже используется в другой вкладке"
        )
        return
    view.starting = True
    view.pending = asyncio.current_task()
    try:
        await view.stop()
        if view.closed:
            connection.send_result(msg["id"], {"started": False})
            return
        view.source = source["id"]
        await hass.services.async_call(
            DOMAIN,
            "monitor_start_source",
            {"device_id": source["id"]},
            blocking=True,
            context=view.context,
        )
        if not view.closed and listener_id:
            await hass.services.async_call(
                DOMAIN,
                "monitor_start_listener",
                {"source_device_id": source["id"], "device_id": listener_id},
                blocking=True,
                context=view.context,
            )
        if view.closed:
            await view.stop()
            connection.send_result(msg["id"], {"started": False})
        else:
            connection.send_result(msg["id"], {"started": True})
    except (HomeAssistantError, TimeoutError):
        try:
            await view.stop()
        except HomeAssistantError:
            _LOGGER.warning(
                "Could not clean up failed monitor start; check device connectivity"
            )
        if not view.closed:
            connection.send_error(
                msg["id"],
                "monitor_error",
                "Не удалось запустить радионяню. Проверьте Mute, связь и внутренний URL Home Assistant.",
            )
    finally:
        view.starting = False
        view.pending = None


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/monitor/stop",
        vol.Required("view_id"): str,
        vol.Required("device_id"): str,
    }
)
@websocket_api.async_response
async def stop(hass, connection, msg):
    view = hass.data["ha_dialog_ui_monitor_views"].get((connection, msg["view_id"]))
    if view is None or view.closed:
        connection.send_error(msg["id"], "monitor_error", "Вкладка закрыта")
        return
    if view.starting:
        connection.send_error(
            msg["id"],
            "monitor_error",
            "Дождитесь завершения запуска или закройте вкладку",
        )
        return
    if view.source != msg["device_id"] and not any(
        device["id"] == msg["device_id"] for device in snapshot(hass)["devices"]
    ):
        connection.send_error(
            msg["id"], "monitor_error", "Колонка не поддерживает радионяню"
        )
        return
    try:
        await hass.services.async_call(
            DOMAIN,
            "monitor_stop",
            {"device_id": msg["device_id"]},
            blocking=True,
            context=connection.context(msg),
        )
        if view.source == msg["device_id"]:
            view.source = None
        connection.send_result(msg["id"], {"stopped": True})
    except HomeAssistantError:
        connection.send_error(
            msg["id"],
            "monitor_error",
            "Не удалось остановить радионяню. Проверьте соединение с колонками.",
        )
