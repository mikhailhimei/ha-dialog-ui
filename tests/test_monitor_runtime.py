"""Real HA services + HTTP WAV + TCP PCM, including either end stopping the pair."""

import asyncio
import importlib.util
import socket
import tempfile
import unittest
from types import MappingProxyType


@unittest.skipUnless(
    importlib.util.find_spec("homeassistant"), "Requires HA environment"
)
class PairPlaybackTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        from aiohttp import ClientSession
        from homeassistant import loader
        from homeassistant.auth import auth_manager_from_config
        from homeassistant.config_entries import ConfigEntries, ConfigEntry
        from homeassistant.core import HomeAssistant
        from homeassistant.helpers import device_registry as dr
        from homeassistant.helpers import entity_registry as er
        from homeassistant.setup import async_setup_component

        from custom_components.ha_dialog_ui.baby_monitor import async_start, runtime

        self.old_port = runtime.INGEST_PORT
        runtime.INGEST_PORT = 0

        self.temp = tempfile.TemporaryDirectory()
        self.hass = hass = HomeAssistant(self.temp.name)
        loader.async_setup(hass)
        hass.auth = await auth_manager_from_config(hass, [], [])
        hass.config_entries = ConfigEntries(hass, {})
        with socket.socket() as reservation:
            reservation.bind(("127.0.0.1", 0))
            port = reservation.getsockname()[1]
        self.base = f"http://127.0.0.1:{port}"
        assert await async_setup_component(
            hass, "http", {"http": {"server_host": "127.0.0.1", "server_port": port}}
        )
        assert await async_setup_component(hass, "websocket_api", {})
        await dr.async_get(hass).async_load()
        self.devices = []
        for name in ("voice", "listener"):
            entry = ConfigEntry(
                domain="esphome",
                title=name,
                data={"device_name": name},
                options={},
                source="user",
                unique_id=name,
                version=1,
                minor_version=1,
                discovery_keys=MappingProxyType({}),
            )
            hass.config_entries._entries[entry.entry_id] = entry
            device = dr.async_get(hass).async_get_or_create(
                config_entry_id=entry.entry_id, identifiers={("esphome", name)}
            )
            self.devices.append(device.id)
        registry = er.async_get(hass)
        await registry.async_load()
        entity = registry.async_get_or_create(
            "switch",
            "esphome",
            "listener-monitor-switch",
            device_id=self.devices[1],
            config_entry=entry,
            original_name="Радионяня: слушатель",
        )
        self.listener_switch = entity.entity_id
        self.writer = None
        self.response = None
        self.connect_listener = True
        self.pump = None
        self.urls = asyncio.Queue()
        self.stops = []
        self.both_stopped = asyncio.Event()
        self.pcm = b"\x01\x02" * 640
        self.received_keys = []

        async def configure(call):
            self.received_keys.append(call.data["key"])

        async def source(call):
            assert self.received_keys and self.received_keys[-1] == self.key
            port = self.runtime.server.sockets[0].getsockname()[1]
            reader, self.writer = await asyncio.open_connection("127.0.0.1", port)
            self.writer.write(b"voice " + self.key.encode() + b"\n")
            await self.writer.drain()
            assert await reader.readline() == b"OK\n"

            async def pump():
                try:
                    while not self.writer.is_closing():
                        self.writer.write(self.pcm)
                        await self.writer.drain()
                        await asyncio.sleep(0.04)
                except ConnectionError:
                    pass

            self.pump = asyncio.create_task(pump())

        async def listen(call):
            hass.states.async_set(self.listener_switch, "on")
            self.urls.put_nowait(call.data["url"])
            if self.connect_listener:
                self.response = await self.client.get(call.data["url"])

        async def stop_source(call):
            self.stops.append("voice")
            if self.writer:
                self.writer.close()
            if set(self.stops) == {"voice", "listener"}:
                self.both_stopped.set()

        async def stop_listener(call):
            self.stops.append("listener")
            if self.response:
                self.response.close()
            if set(self.stops) == {"voice", "listener"}:
                self.both_stopped.set()

        hass.services.async_register("esphome", "voice_monitor_configure", configure)
        hass.services.async_register("esphome", "voice_monitor_source", source)
        hass.services.async_register("esphome", "voice_monitor_stop", stop_source)
        hass.services.async_register("esphome", "listener_monitor_listen", listen)
        hass.services.async_register("esphome", "listener_monitor_stop", stop_listener)
        await async_start(hass)
        self.runtime = hass.data["ha_dialog_ui_monitor_runtime"]
        self.receiver = hass.data["ha_dialog_ui_monitor_receivers"]["voice"]
        self.key = self.receiver.provisioning_data()["key"]
        await hass.http.start()
        self.client = ClientSession()

    async def asyncTearDown(self):
        from custom_components.ha_dialog_ui.baby_monitor import async_stop, runtime

        runtime.INGEST_PORT = self.old_port

        await self.hass.data["ha_dialog_ui_monitor_sessions"].stop()
        if self.pump:
            self.pump.cancel()
            await asyncio.gather(self.pump, return_exceptions=True)
        await self.client.close()
        await async_stop(self.hass)
        await self.hass.http.stop()
        await self.hass.async_stop()
        self.temp.cleanup()

    async def start_pair(self):
        from custom_components.ha_dialog_ui.baby_monitor.playback import WAV_HEADER

        await self.hass.services.async_call(
            "ha_dialog_ui",
            "monitor_start_source",
            {"device_id": self.devices[0]},
            blocking=True,
        )
        await self.hass.services.async_call(
            "ha_dialog_ui",
            "monitor_start_listener",
            {
                "source_device_id": self.devices[0],
                "device_id": self.devices[1],
                "ha_url": self.base,
            },
            blocking=True,
        )
        self.url = await self.urls.get()
        self.assertEqual(self.response.status, 200)
        self.assertEqual(await self.response.content.readexactly(44), WAV_HEADER)
        self.assertEqual(await self.response.content.readexactly(1280), self.pcm)
        async with self.client.get(self.url) as replay:
            self.assertEqual(
                replay.status, 404
            )  # Ticket cannot be reused, even on another browser.

    async def test_source_button_stops_both(self):
        await self.start_pair()
        self.writer.close()  # Source firmware button closes its TCP uplink.
        await asyncio.wait_for(self.both_stopped.wait(), 2)
        self.assertCountEqual(self.stops, ["voice", "listener"])
        self.assertFalse(self.hass.data["ha_dialog_ui_monitor_sessions"].sessions)

    async def test_listener_button_stops_both(self):
        await self.start_pair()
        self.response.close()  # Listener firmware button stops its HTTP decoder.
        await asyncio.wait_for(self.both_stopped.wait(), 2)
        self.assertCountEqual(self.stops, ["voice", "listener"])
        self.assertFalse(self.hass.data["ha_dialog_ui_monitor_sessions"].sessions)

    async def test_ha_stop_by_either_device_stops_both(self):
        await self.start_pair()
        await self.hass.services.async_call(
            "ha_dialog_ui",
            "monitor_stop",
            {"device_id": self.devices[1]},
            blocking=True,
        )
        self.assertCountEqual(self.stops, ["voice", "listener"])
        self.assertFalse(self.hass.data["ha_dialog_ui_monitor_sessions"].sessions)

    async def test_button_during_startup_stops_pair_before_http_connects(self):
        from homeassistant.exceptions import HomeAssistantError

        self.connect_listener = False
        await self.hass.services.async_call(
            "ha_dialog_ui",
            "monitor_start_source",
            {"device_id": self.devices[0]},
            blocking=True,
        )
        task = asyncio.create_task(
            self.hass.services.async_call(
                "ha_dialog_ui",
                "monitor_start_listener",
                {
                    "device_id": self.devices[1],
                    "source_device_id": self.devices[0],
                    "ha_url": self.base,
                },
                blocking=True,
            )
        )
        await asyncio.wait_for(self.urls.get(), 2)
        self.hass.states.async_set(self.listener_switch, "off")
        await asyncio.wait_for(self.both_stopped.wait(), 2)
        with self.assertRaises(HomeAssistantError):
            await task
        self.assertCountEqual(self.stops, ["voice", "listener"])
        self.assertFalse(self.hass.data["ha_dialog_ui_monitor_sessions"].sessions)

    async def test_api_registration_and_switch_on_provision_without_scripts(self):
        await asyncio.sleep(0.01)  # Drain the service-registered callback from setup.
        self.assertIn(self.key, self.received_keys)
        self.received_keys.clear()
        from homeassistant.helpers import device_registry as dr
        from homeassistant.helpers import entity_registry as er

        device = dr.async_get(self.hass).async_get(self.devices[0])
        entry = self.hass.config_entries.async_get_entry(
            next(iter(device.config_entries))
        )
        entity = er.async_get(self.hass).async_get_or_create(
            "switch",
            "esphome",
            "voice-monitor-mode",
            device_id=self.devices[0],
            config_entry=entry,
            original_name="Радионяня",
        )
        self.hass.states.async_set(entity.entity_id, "on")
        await asyncio.sleep(0.01)
        self.assertEqual(self.received_keys, [self.key])

    async def test_auto_discovery_shared_port_and_per_node_authentication(self):
        from custom_components.ha_dialog_ui.baby_monitor.receiver import CHUNK

        async def configure(call):
            pass

        self.hass.services.async_register(
            "esphome", "listener_monitor_configure", configure
        )
        self.hass.services.async_register(
            "esphome", "listener_monitor_source", configure
        )
        await self.runtime.discover()
        receivers = self.hass.data["ha_dialog_ui_monitor_receivers"]
        other = receivers["listener"]
        other_key = other.provisioning_data()["key"]
        self.assertNotEqual(other_key, self.key)
        await self.hass.services.async_call(
            "ha_dialog_ui",
            "monitor_start_source",
            {"device_id": self.devices[0]},
            blocking=True,
        )
        port = self.runtime.server.sockets[0].getsockname()[1]
        reader, writer = await asyncio.open_connection("127.0.0.1", port)
        writer.write(b"listener " + self.key.encode() + b"\n")
        await writer.drain()
        self.assertEqual(await asyncio.wait_for(reader.read(), 1), b"")
        self.assertFalse(other.connected)
        writer.close()
        await writer.wait_closed()
        received = asyncio.Queue()
        other.listeners.add(received.put_nowait)
        reader, writer = await asyncio.open_connection("127.0.0.1", port)
        writer.write(b"listener " + other_key.encode() + b"\n")
        await writer.drain()
        self.assertEqual(await reader.readline(), b"OK\n")
        writer.write(b"x" * CHUNK)
        await writer.drain()
        self.assertEqual((await received.get())["type"], "status")
        self.assertEqual((await received.get())["data"], b"x" * CHUNK)
        self.assertTrue(self.receiver.connected)
        writer.close()
        await writer.wait_closed()

    async def test_keys_survive_reload_and_legacy_script_actions_exist(self):
        self.assertTrue(
            self.hass.services.has_service("voice_pe_monitor", "start_source")
        )
        self.assertTrue(
            self.hass.services.has_service("voice_pe_monitor", "start_listener")
        )
        self.assertTrue(self.hass.services.has_service("voice_pe_monitor", "stop"))
        await self.runtime.stop()
        await self.runtime.start()
        receiver = self.hass.data["ha_dialog_ui_monitor_receivers"]["voice"]
        self.assertEqual(receiver.provisioning_data()["key"], self.key)

    async def test_conflicting_port_does_not_break_dialog_and_can_retry(self):
        from custom_components.ha_dialog_ui.baby_monitor import runtime

        await self.runtime.stop()
        server = await asyncio.start_server(lambda r, w: w.close(), "0.0.0.0", 0)
        runtime.INGEST_PORT = server.sockets[0].getsockname()[1]
        try:
            await self.runtime.start()
            self.assertFalse(self.runtime.running)
            self.assertFalse(self.hass.data["ha_dialog_ui_monitor_receivers"])
        finally:
            server.close()
            await server.wait_closed()
        await self.runtime.start()
        self.assertTrue(self.runtime.running)

    async def test_browser_audio_requires_ha_auth_and_cleans_subscription(self):
        import base64

        user = await self.hass.auth.async_create_user("listener")
        refresh = await self.hass.auth.async_create_refresh_token(
            user, client_id="http://localhost/"
        )
        token = self.hass.auth.async_create_access_token(refresh)
        async with self.client.ws_connect(self.base + "/api/websocket") as ws:
            await ws.receive_json()
            await ws.send_json({"type": "auth", "access_token": "invalid"})
            self.assertEqual((await ws.receive_json())["type"], "auth_invalid")
        async with self.client.ws_connect(self.base + "/api/websocket") as ws:
            await ws.receive_json()
            await ws.send_json({"type": "auth", "access_token": token})
            self.assertEqual((await ws.receive_json())["type"], "auth_ok")
            await ws.send_json(
                {"id": 1, "type": "ha_dialog_ui/monitor/listen", "node_id": "voice"}
            )
            self.assertTrue((await ws.receive_json())["success"])
            self.assertFalse((await ws.receive_json())["event"]["connected"])
            await self.hass.services.async_call(
                "ha_dialog_ui",
                "monitor_start_source",
                {"device_id": self.devices[0]},
                blocking=True,
            )
            self.assertTrue((await ws.receive_json())["event"]["connected"])
            event = (await ws.receive_json())["event"]
            self.assertEqual(base64.b64decode(event["pcm"]), self.pcm)
            self.assertEqual(event["rate"], 16000)
        await asyncio.sleep(0.01)
        self.assertFalse(self.receiver.listeners)
