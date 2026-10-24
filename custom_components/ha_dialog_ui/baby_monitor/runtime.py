"""Discover compatible ESPHome nodes and multiplex their authenticated uplinks."""

import asyncio
import logging
import secrets

from homeassistant.const import EVENT_HOMEASSISTANT_STOP, EVENT_SERVICE_REGISTERED
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.storage import Store
from homeassistant.util import slugify

from .provisioning import provision_source
from .receiver import Receiver

_LOGGER = logging.getLogger(__name__)
INGEST_PORT = 8124


class MonitorRuntime:
    def __init__(self, hass):
        self.hass = hass
        self.store = Store(hass, 1, "ha_dialog_ui.monitor_keys")
        self.keys = {}
        self.server = None
        self.clients = set()
        self.tasks = set()
        self.lock = asyncio.Lock()
        self.unsubscribers = []
        self.running = False

    async def start(self):
        if self.running:
            return
        self.keys = await self.store.async_load() or {}
        try:
            self.server = await asyncio.start_server(
                self.handle, "0.0.0.0", INGEST_PORT, limit=256
            )
        except OSError:
            # A busy monitor port must not break the voice agent or other UI tabs.
            _LOGGER.error(
                "Cannot bind radio monitor TCP port 8124; stop the legacy Voice PE Monitor integration or another process using this port"
            )
            return
        self.running = True
        self.unsubscribers = [
            self.hass.bus.async_listen(
                EVENT_SERVICE_REGISTERED, self.service_registered
            ),
            self.hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STOP, self.on_stop),
        ]
        await self.discover()

    async def service_registered(self, event):
        if event.data.get("domain") == "esphome":
            await self.discover()

    async def discover(self):
        async with self.lock:
            if not self.running:
                return
            receivers = self.hass.data["ha_dialog_ui_monitor_receivers"]
            for entry in self.hass.config_entries.async_entries("esphome"):
                if entry.disabled_by or not (node := entry.data.get("device_name")):
                    continue
                if not all(
                    self.hass.services.has_service(
                        "esphome", slugify(f"{node}_monitor_{action}")
                    )
                    for action in ("source", "stop", "configure")
                ):
                    continue
                if node not in receivers:
                    if node not in self.keys:
                        self.keys[node] = secrets.token_urlsafe(32)
                        await self.store.async_save(self.keys)
                    receivers[node] = Receiver(node, self.keys[node])
                await provision_source(self.hass, node)

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
            receiver = self.hass.data["ha_dialog_ui_monitor_receivers"].get(node)
            if receiver:
                # Receiver checks the per-node secret before ACK or publishing PCM.
                await receiver.handle(reader, writer, hello)
        except (TimeoutError, ValueError, UnicodeError, ConnectionError):
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
        for unsubscribe in self.unsubscribers:
            unsubscribe()
        self.unsubscribers = []
        if self.server:
            self.server.close()
            await self.server.wait_closed()
            self.server = None
        for view in tuple(
            self.hass.data.get("ha_dialog_ui_monitor_views", {}).values()
        ):
            await view.close()
        await self.hass.data["ha_dialog_ui_monitor_sessions"].stop()
        # Also end standalone script sources, rather than just dropping TCP.
        for node, receiver in tuple(
            self.hass.data["ha_dialog_ui_monitor_receivers"].items()
        ):
            service = slugify(f"{node}_monitor_stop")
            if self.hass.services.has_service("esphome", service):
                try:
                    await self.hass.services.async_call(
                        "esphome", service, {}, blocking=True
                    )
                except HomeAssistantError:
                    _LOGGER.warning(
                        "Could not stop monitor source %s during unload", node
                    )
            await receiver.stop()
        for writer in tuple(self.clients):
            writer.close()
        tasks = tuple(self.tasks)
        for task in tasks:
            task.cancel()
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)
        self.hass.data["ha_dialog_ui_monitor_receivers"].clear()
