"""Speaker calls and connection-owned browser calls with shared audio transport."""

import asyncio
import logging
import secrets
from collections.abc import Callable
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
from .browser import BrowserPeer
from .browser import audio as browser_audio
from .browser import end as browser_end
from .browser import receive as browser_receive
from .browser import start as browser_start

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
    browser: BrowserPeer | None = None
    source_stop: Callable[[], None] | None = None


class CallRuntime:
    def __init__(self, hass):
        self.hass = hass
        self.receivers = {}
        self.keys = {}
        self.calls = {}
        self.invitations = {}
        self.retiring = set()
        self.browser_views = {}
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

    def snapshot(self, browser=None):
        return {
            "available": self.running,
            "owned_call_id": browser.call_id
            if browser and not browser.closed
            else None,
            "incoming": [
                {"id": i.id, "source_device_id": i.source}
                for i in self.invitations.values()
                if browser and i.user_id == browser.user_id
            ],
            "devices": self.devices(),
            "calls": [
                {
                    "id": c.id,
                    "source_device_id": None if c.browser else c.source,
                    "source_type": "browser" if c.browser else "speaker",
                    "target_device_id": c.target,
                    "state": c.state,
                }
                for c in self.calls.values()
            ],
        }

    def busy(self, device, invitation_id=None):
        return (
            any(
                i.source == device and i.id != invitation_id
                for i in self.invitations.values()
            )
            or device in self.retiring
            or any(device in (c.source, c.target) for c in self.calls.values())
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

    async def dial(
        self, source, target, browser=None, phone_incoming=False, invitation_id=None
    ):
        async with self.lock:
            if not self.running or source == target:
                raise HomeAssistantError(
                    "Выберите две разные колонки; сервер звонков должен быть запущен"
                )
            if browser and (browser.closed or browser.call_id or source != browser.id):
                raise HomeAssistantError("Вкладка закрыта или звонок уже идёт")
            invitation = self.invitations.get(invitation_id) if invitation_id else None
            if invitation_id and (
                not invitation
                or not browser
                or invitation.user_id != browser.user_id
                or invitation.source != target
            ):
                raise HomeAssistantError("Входящий вызов уже принят или завершён")
            a, b = None if browser else self.resolve(source), self.resolve(target)
            if any(
                self.busy(d, invitation_id) or self.radio_busy(d)
                for d in (source, target)
            ):
                raise HomeAssistantError("Колонка уже занята звонком или радионяней")
            call = Call(secrets.token_urlsafe(16), source, target, browser=browser)
            if browser:
                browser.call_id = call.id
            self.calls[call.id] = call
            if invitation:
                self.invitations.pop(invitation.id)
                if invitation.timeout:
                    invitation.timeout.cancel()
        call.starting = asyncio.current_task()
        try:
            endpoints = (
                ((b, not phone_incoming),) if browser else ((a, False), (b, True))
            )
            for device, incoming in endpoints:
                if call.id not in self.calls:
                    raise HomeAssistantError("Звонок завершён")
                await self.configure_ringtone(device["id"])
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
            endpoints = (call.target,) if call.browser else (call.source, call.target)
            if call.browser:
                if call.browser.closed:
                    raise HomeAssistantError("Вкладка закрыта")
                call.browser.receiver._status(True)
                source_receiver = self.receivers[self.resolve(call.target)["node_id"]]

                def source_status(event):
                    if (
                        event["type"] == "status"
                        and not event["connected"]
                        and call.id in self.calls
                    ):
                        self.hass.async_create_task(self.end(call.id))

                source_receiver.listeners.add(source_status)
                call.source_stop = lambda: source_receiver.listeners.discard(
                    source_status
                )
            for device_id in endpoints:
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
                        for d in endpoints
                    )
                ),
                10,
            )
            if call.id not in self.calls:
                raise HomeAssistantError("Звонок завершён")
            base = get_url(self.hass, allow_external=False).rstrip("/")
            ready_futures = []
            legs = (
                ((call.source, call.target),)
                if call.browser
                else ((call.source, call.target), (call.target, call.source))
            )
            for source, target in legs:
                if call.id not in self.calls:
                    raise HomeAssistantError("Звонок завершён")
                receiver = (
                    call.browser.receiver
                    if call.browser
                    else self.receivers[self.resolve(source)["node_id"]]
                )
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
            *(
                self.native(device, "end")
                for device in (
                    (call.target,) if call.browser else (call.source, call.target)
                )
            ),
            return_exceptions=True,
        )

    async def end_device(self, device):
        from .incoming import cancel

        for invitation in tuple(self.invitations.values()):
            if invitation.source == device:
                await cancel(self, invitation.id)
        call = next(
            (c for c in self.calls.values() if device in (c.source, c.target)), None
        )
        if call:
            await self.end(call.id)

    async def end(self, call_id):
        call = self.calls.pop(call_id, None)
        if call is None:
            return
        if call.source_stop:
            call.source_stop()
            call.source_stop = None
        if call.browser:
            call.browser.end()
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
        from .incoming import cancel

        invitation_tasks = [
            i.starting
            for i in self.invitations.values()
            if i.starting and i.starting is not asyncio.current_task()
        ]
        for invitation_id in tuple(self.invitations):
            await cancel(self, invitation_id)
        pending = [
            c.starting
            for c in self.calls.values()
            if c.starting and c.starting is not asyncio.current_task()
        ]
        pending.extend(invitation_tasks)
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
        for peer in self.browser_views.values():
            peer.end()
        if server:
            await server.wait_closed()

    def register(self):
        self.hass.data["ha_dialog_ui_call_streams"] = self.streams
        self.hass.http.register_view(CallStreamView())
        from .incoming import accept, decline

        self.hass.services.async_register(
            "ha_dialog_ui",
            "call_phone",
            self.service_phone,
            schema=vol.Schema(
                {
                    vol.Required("source_device_id"): str,
                    vol.Required("user_id"): str,
                    vol.Optional("timeout", default=120): vol.All(
                        vol.Coerce(int), vol.Range(min=10, max=300)
                    ),
                }
            ),
        )
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
        for command in (
            watch,
            start_call,
            answer_call,
            end_call,
            browser_start,
            browser_end,
            browser_audio,
            browser_receive,
            accept,
            decline,
        ):
            websocket_api.async_register_command(self.hass, command)

    async def service_phone(self, call):
        from .incoming import create

        await create(
            self,
            call.data["source_device_id"],
            call.data["user_id"],
            call.data["timeout"],
        )

    async def configure_ringtone(self, device):
        from homeassistant.components import media_source
        from homeassistant.components.media_player import async_process_play_media_url

        from ..storage.settings_storage import async_get_cached_settings

        item = self.resolve(device)
        service = slugify(f"{item['node_id']}_call_ringtone_configure")
        music = (
            (await async_get_cached_settings(self.hass)).get("call_music", "").strip()
        )
        if not self.hass.services.has_service("esphome", service):
            if music:
                raise HomeAssistantError(
                    "Обновите прошивку колонки для выбора музыки звонка"
                )
            return
        url = ""
        if music:
            media_id = (
                music
                if music.startswith("media-source://")
                else "media-source://media_source/local/" + music
            )
            resolved = await media_source.async_resolve_media(self.hass, media_id, None)
            url = async_process_play_media_url(
                self.hass, resolved.url, allow_relative_url=True
            )
            if url.startswith("/"):
                url = get_url(self.hass, allow_external=False).rstrip("/") + url
        await self.hass.services.async_call(
            "esphome", service, {"url": url}, blocking=True
        )

    async def service_start(self, call):
        await self.dial(call.data["source_device_id"], call.data["target_device_id"])

    async def service_answer(self, call):
        await self.answer(call.data["device_id"])

    async def service_end(self, call):
        await self.end_device(call.data["device_id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "ha_dialog_ui/calls/watch", vol.Optional("view_id"): str}
)
@websocket_api.async_response
async def watch(hass, connection, msg):
    runtime = hass.data["ha_dialog_ui_calls"]
    peer = None
    key = (connection, msg.get("view_id"))
    if msg.get("view_id"):
        if key in runtime.browser_views:
            connection.send_error(msg["id"], "call_error", "Вкладка уже открыта")
            return
        peer = runtime.browser_views[key] = BrowserPeer(connection.user.id)

    task = None

    def close():
        if task:
            task.cancel()
        if peer:
            peer.closed = True
            runtime.browser_views.pop(key, None)
            peer.detach_audio()
            if peer.call_id:
                hass.async_create_task(runtime.end(peer.call_id))

    async def updates():
        try:
            while True:
                connection.send_event(msg["id"], runtime.snapshot(peer))
                await asyncio.sleep(1)
        except asyncio.CancelledError:
            pass
        except (ConnectionError, RuntimeError):
            close()

    connection.subscriptions[msg["id"]] = close
    # HA may eagerly run a newly created task. Acknowledge before the first event.
    connection.send_result(msg["id"])
    task = hass.async_create_task(updates())


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
