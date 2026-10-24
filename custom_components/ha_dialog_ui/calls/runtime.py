"""Explicit ring/answer/end state machine; no browser-owned call lifetime."""

import asyncio
import logging
import secrets
from dataclasses import dataclass, field

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.const import (
    EVENT_HOMEASSISTANT_STOP,
    EVENT_SERVICE_REGISTERED,
    EVENT_STATE_CHANGED,
)
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.network import get_url
from homeassistant.helpers.storage import Store
from homeassistant.util import slugify

from ..baby_monitor.playback import MonitorStreamView, PlaybackSessions
from ..baby_monitor.receiver import Receiver

_LOGGER = logging.getLogger(__name__)
PORT = 8125
RING_TIMEOUT = 45


class CallStreamView(MonitorStreamView):
    url = "/api/ha_dialog_ui/calls/stream/{token}.wav"
    name = "api:ha_dialog_ui:calls:stream"
    sessions_key = "ha_dialog_ui_call_streams"


@dataclass
class Call:
    id: str
    source: str
    target: str
    state: str = "ringing"
    tokens: list = field(default_factory=list)
    timeout: asyncio.Task | None = None
    starting: asyncio.Task | None = None


class CallRuntime:
    def __init__(self, hass):
        self.hass = hass
        self.receivers = {}
        self.keys = {}
        self.calls = {}
        self.retiring = set()
        self.server = None
        self.running = False
        self.clients = set()
        self.tasks = set()
        self.listeners = []
        self.lock = asyncio.Lock()
        self.store = Store(hass, 1, "ha_dialog_ui.call_keys")
        self.streams = PlaybackSessions(self.end_device)

    def devices(self):
        result = []
        entities = er.async_get(self.hass)
        for device in dr.async_get(self.hass).devices.values():
            if device.disabled_by:
                continue
            for entry_id in device.config_entries:
                entry = self.hass.config_entries.async_get_entry(entry_id)
                if not entry or entry.domain != "esphome" or entry.disabled_by:
                    continue
                node = entry.data.get("device_name")
                if not node or not all(
                    self.hass.services.has_service(
                        "esphome", slugify(f"{node}_call_{action}")
                    )
                    for action in ("configure", "ring", "source", "listen", "end")
                ):
                    continue
                controls = [
                    self.hass.states.get(e.entity_id)
                    for e in er.async_entries_for_device(entities, device.id)
                    if (e.original_name or "").endswith("Звонок")
                ]
                result.append(
                    {
                        "id": device.id,
                        "name": device.name_by_user or device.name or node,
                        "node_id": node,
                        "online": any(
                            s and s.state not in ("unavailable", "unknown")
                            for s in controls
                        ),
                    }
                )
                break
        return sorted(result, key=lambda d: d["name"])

    def snapshot(self):
        return {
            "available": self.running,
            "devices": self.devices(),
            "calls": [
                {
                    "id": c.id,
                    "source_device_id": c.source,
                    "target_device_id": c.target,
                    "state": c.state,
                }
                for c in self.calls.values()
            ],
        }

    def busy(self, device):
        return device in self.retiring or any(
            device in (c.source, c.target) for c in self.calls.values()
        )

    def resolve(self, device):
        item = next(
            (d for d in self.devices() if d["id"] == device and d["online"]), None
        )
        if item is None:
            raise HomeAssistantError("Выберите подключённую колонку с модулем звонков")
        return item

    async def native(self, device, action, data=None):
        # Stop is also attempted for unavailable devices using their registry entry.
        item = next((d for d in self.devices() if d["id"] == device), None)
        if item is None:
            raise HomeAssistantError("Колонка звонков недоступна")
        await self.hass.services.async_call(
            "esphome",
            slugify(f"{item['node_id']}_call_{action}"),
            data or {},
            blocking=True,
        )

    def radio_busy(self, device):
        from ..monitor import snapshot

        if device in self.hass.data.get("ha_dialog_ui_monitor_starting", set()):
            return True
        state = snapshot(self.hass)
        return any(
            d["id"] == device and (d["transmitting"] or d["source_state"] == "on")
            for d in state["devices"]
        ) or any(
            device in (p["source_device_id"], p["listener_device_id"])
            for p in state["sessions"]
        )

    async def dial(self, source, target):
        async with self.lock:
            if not self.running or source == target:
                raise HomeAssistantError(
                    "Выберите две разные колонки; сервер звонков должен быть запущен"
                )
            a, b = self.resolve(source), self.resolve(target)
            if any(self.busy(d) or self.radio_busy(d) for d in (source, target)):
                raise HomeAssistantError("Колонка уже занята звонком или радионяней")
            call = Call(secrets.token_urlsafe(16), source, target)
            self.calls[call.id] = call
        call.starting = asyncio.current_task()
        try:
            for device, incoming in ((a, False), (b, True)):
                if call.id not in self.calls:
                    raise HomeAssistantError("Звонок завершён")
                await self.native(device["id"], "ring", {"incoming": incoming})
                await self.wait_ring(device["id"], incoming)
            if call.id in self.calls:
                call.timeout = asyncio.create_task(self.expire(call.id))
        except BaseException:
            await self.end(call.id)
            raise
        finally:
            call.starting = None
            if call.id not in self.calls:
                await self.stop_devices(call)
                self.retiring.difference_update((call.source, call.target))

    async def wait_ring(self, device, incoming):
        async def ready():
            expected = ("ringing", "answer_requested") if incoming else ("outgoing",)
            while True:
                entries = er.async_entries_for_device(er.async_get(self.hass), device)
                if any(
                    (e.original_name or "").endswith("Звонок")
                    and (state := self.hass.states.get(e.entity_id))
                    and state.state in expected
                    for e in entries
                ):
                    return
                await asyncio.sleep(0.05)

        try:
            await asyncio.wait_for(ready(), 3)
        except TimeoutError as err:
            raise HomeAssistantError(
                "Колонка не приняла вызов: проверьте Mute и связь"
            ) from err

    async def expire(self, call_id):
        await asyncio.sleep(RING_TIMEOUT)
        await self.end(call_id)

    async def answer(self, device):
        ringing = next(
            (
                c
                for c in self.calls.values()
                if c.target == device and c.state == "ringing"
            ),
            None,
        )
        if (
            ringing
            and ringing.starting
            and ringing.starting is not asyncio.current_task()
        ):
            await asyncio.shield(ringing.starting)
        async with self.lock:
            call = next(
                (
                    c
                    for c in self.calls.values()
                    if c.target == device and c.state == "ringing"
                ),
                None,
            )
            if call is None or call.starting:
                raise HomeAssistantError(
                    "Нет входящего звонка для ответа или вызов ещё запускается"
                )
            call.state = "connecting"
            call.starting = asyncio.current_task()
            if call.timeout:
                call.timeout.cancel()
        try:
            for device_id in (call.source, call.target):
                if call.id not in self.calls:
                    raise HomeAssistantError("Звонок завершён")
                item = self.resolve(device_id)
                receiver = self.receivers[item["node_id"]]
                await self.native(device_id, "configure", receiver.provisioning_data())
                await self.native(device_id, "source")
            await asyncio.wait_for(
                asyncio.gather(
                    *(
                        self.receivers[self.resolve(d)["node_id"]].online.wait()
                        for d in (call.source, call.target)
                    )
                ),
                10,
            )
            if call.id not in self.calls:
                raise HomeAssistantError("Звонок завершён")
            base = get_url(self.hass, allow_external=False).rstrip("/")
            ready_futures = []
            for source, target in (
                (call.source, call.target),
                (call.target, call.source),
            ):
                receiver = self.receivers[self.resolve(source)["node_id"]]
                token = self.streams.create(source, target, receiver)
                call.tokens.append(token)
                ready_futures.append(self.streams.sessions[token]["ready"])
                await self.native(
                    target,
                    "listen",
                    {"url": base + f"/api/ha_dialog_ui/calls/stream/{token}.wav"},
                )
            ready = await asyncio.wait_for(
                asyncio.gather(*(asyncio.shield(f) for f in ready_futures)), 12
            )
            if not all(ready) or call.id not in self.calls:
                raise HomeAssistantError("Звонок завершён во время подключения")
            call.state = "active"
        except BaseException:
            await self.end(call.id)
            raise
        finally:
            call.starting = None
            if call.id not in self.calls:
                await self.stop_devices(call)
                self.retiring.difference_update((call.source, call.target))

    async def stop_devices(self, call):
        await asyncio.gather(
            self.native(call.source, "end"),
            self.native(call.target, "end"),
            return_exceptions=True,
        )

    async def end_device(self, device):
        call = next(
            (c for c in self.calls.values() if device in (c.source, c.target)), None
        )
        if call:
            await self.end(call.id)

    async def end(self, call_id):
        call = self.calls.pop(call_id, None)
        if call is None:
            return
        if call.starting:
            self.retiring.update((call.source, call.target))
        if call.timeout and call.timeout is not asyncio.current_task():
            call.timeout.cancel()
        await asyncio.gather(*(self.streams.close(t) for t in call.tokens))
        await self.stop_devices(call)
        # A late in-flight native action is followed by another stop in its finally.

    async def discover(self):
        async with self.lock:
            if not self.running:
                return
            for device in self.devices():
                node = device["node_id"]
                if node not in self.receivers:
                    if node not in self.keys:
                        self.keys[node] = secrets.token_urlsafe(32)
                        await self.store.async_save(self.keys)
                    self.receivers[node] = Receiver(node, self.keys[node])
                if device["online"]:
                    await self.native(
                        device["id"],
                        "configure",
                        self.receivers[node].provisioning_data(),
                    )

    async def event(self, event):
        if event.event_type == EVENT_SERVICE_REGISTERED:
            if event.data.get("domain") == "esphome":
                await self.discover()
            return
        new, old = event.data.get("new_state"), event.data.get("old_state")
        entity = er.async_get(self.hass).async_get(event.data.get("entity_id"))
        if (
            not entity
            or not entity.device_id
            or not (entity.original_name or "").endswith("Звонок")
            or not new
            or (old and old.state == new.state)
        ):
            return
        if new.state == "answer_requested":
            try:
                await self.answer(entity.device_id)
            except HomeAssistantError:
                _LOGGER.warning("Could not answer speaker call")
        elif new.state in ("idle", "unavailable"):
            await self.end_device(entity.device_id)
            await self.discover()
        elif new.state not in ("unknown",):
            await self.discover()

    async def start(self):
        if self.running:
            return
        self.keys = await self.store.async_load() or {}
        try:
            self.server = await asyncio.start_server(
                self.handle, "0.0.0.0", PORT, limit=256
            )
        except OSError:
            _LOGGER.error("Cannot bind speaker-call TCP port 8125")
            return
        self.running = True
        self.listeners = [
            self.hass.bus.async_listen(EVENT_SERVICE_REGISTERED, self.event),
            self.hass.bus.async_listen(EVENT_STATE_CHANGED, self.event),
            self.hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STOP, self.on_stop),
        ]
        await self.discover()

    async def handle(self, reader, writer):
        if not self.running or len(self.clients) >= 8:
            writer.close()
            return
        task = asyncio.current_task()
        self.tasks.add(task)
        self.clients.add(writer)
        try:
            hello = await asyncio.wait_for(reader.readline(), 5)
            node = hello.split(b" ", 1)[0].decode("ascii")
            receiver = self.receivers.get(node)
            if receiver:
                await receiver.handle(reader, writer, hello)
        except (TimeoutError, ValueError, ConnectionError):
            pass
        finally:
            self.clients.discard(writer)
            self.tasks.discard(task)
            writer.close()
            try:
                await writer.wait_closed()
            except ConnectionError:
                pass

    async def on_stop(self, event):
        await self.stop()

    async def stop(self):
        async with self.lock:
            await self._stop()

    async def _stop(self):
        self.running = False
        for remove in self.listeners:
            remove()
        self.listeners = []
        server, self.server = self.server, None
        if server:
            server.close()
        pending = [
            c.starting
            for c in self.calls.values()
            if c.starting and c.starting is not asyncio.current_task()
        ]
        for call_id in tuple(self.calls):
            await self.end(call_id)
        for task in pending:
            task.cancel()
        if pending:
            await asyncio.gather(*pending, return_exceptions=True)
        for receiver in self.receivers.values():
            await receiver.stop()
        for task in tuple(self.tasks):
            task.cancel()
        if self.tasks:
            await asyncio.gather(*tuple(self.tasks), return_exceptions=True)
        self.receivers.clear()
        if server:
            await server.wait_closed()

    def register(self):
        self.hass.data["ha_dialog_ui_call_streams"] = self.streams
        self.hass.http.register_view(CallStreamView())
        for action, handler, fields in (
            (
                "call_start",
                self.service_start,
                {
                    vol.Required("source_device_id"): str,
                    vol.Required("target_device_id"): str,
                },
            ),
            ("call_answer", self.service_answer, {vol.Required("device_id"): str}),
            ("call_end", self.service_end, {vol.Required("device_id"): str}),
        ):
            self.hass.services.async_register(
                "ha_dialog_ui", action, handler, schema=vol.Schema(fields)
            )
        for command in (watch, start_call, answer_call, end_call):
            websocket_api.async_register_command(self.hass, command)

    async def service_start(self, call):
        await self.dial(call.data["source_device_id"], call.data["target_device_id"])

    async def service_answer(self, call):
        await self.answer(call.data["device_id"])

    async def service_end(self, call):
        await self.end_device(call.data["device_id"])


@websocket_api.websocket_command({vol.Required("type"): "ha_dialog_ui/calls/watch"})
@websocket_api.async_response
async def watch(hass, connection, msg):
    runtime = hass.data["ha_dialog_ui_calls"]

    async def updates():
        try:
            while True:
                connection.send_event(msg["id"], runtime.snapshot())
                await asyncio.sleep(1)
        except (asyncio.CancelledError, ConnectionError, RuntimeError):
            pass

    # HA may eagerly run a newly created task. Acknowledge before the first event.
    connection.send_result(msg["id"])
    task = hass.async_create_task(updates())
    connection.subscriptions[msg["id"]] = task.cancel


async def command(hass, connection, msg, action, fields):
    try:
        await hass.services.async_call(
            "ha_dialog_ui",
            action,
            {f: msg[f] for f in fields},
            blocking=True,
            context=connection.context(msg),
        )
    except (HomeAssistantError, TimeoutError):
        connection.send_error(
            msg["id"],
            "call_error",
            "Не удалось выполнить действие звонка. Проверьте связь, Mute и внутренний URL HA.",
        )
    else:
        connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/start",
        vol.Required("source_device_id"): str,
        vol.Required("target_device_id"): str,
    }
)
@websocket_api.async_response
async def start_call(hass, connection, msg):
    await command(
        hass, connection, msg, "call_start", ("source_device_id", "target_device_id")
    )


@websocket_api.websocket_command(
    {vol.Required("type"): "ha_dialog_ui/calls/answer", vol.Required("device_id"): str}
)
@websocket_api.async_response
async def answer_call(hass, connection, msg):
    await command(hass, connection, msg, "call_answer", ("device_id",))


@websocket_api.websocket_command(
    {vol.Required("type"): "ha_dialog_ui/calls/end", vol.Required("device_id"): str}
)
@websocket_api.async_response
async def end_call(hass, connection, msg):
    await command(hass, connection, msg, "call_end", ("device_id",))
