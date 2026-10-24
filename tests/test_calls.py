"""Real HA services, simultaneous bidirectional PCM, call lifecycle and isolation."""

import asyncio
import socket
from types import SimpleNamespace
from unittest.mock import patch

import pytest
from aiohttp import ClientSession
from homeassistant import loader
from homeassistant.auth import auth_manager_from_config
from homeassistant.config_entries import ConfigEntries
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.setup import async_setup_component
from test_timer_runtime import config_entry

from custom_components.ha_dialog_ui.baby_monitor.playback import WAV_HEADER
from custom_components.ha_dialog_ui.calls import async_start, async_stop
from custom_components.ha_dialog_ui.calls import runtime as calls_module


@pytest.fixture
async def calls(tmp_path, monkeypatch):
    hass = HomeAssistant(str(tmp_path))
    loader.async_setup(hass)
    hass.auth = await auth_manager_from_config(hass, [], [])
    hass.config_entries = ConfigEntries(hass, {})
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        port = sock.getsockname()[1]
    base = f"http://127.0.0.1:{port}"
    assert await async_setup_component(
        hass, "http", {"http": {"server_host": "127.0.0.1", "server_port": port}}
    )
    assert await async_setup_component(hass, "websocket_api", {})
    await dr.async_get(hass).async_load()
    await er.async_get(hass).async_load()
    monkeypatch.setattr(calls_module, "PORT", 0)
    monkeypatch.setattr(calls_module, "get_url", lambda *args, **kwargs: base)
    client = ClientSession()
    devices, entities, states = {}, {}, {}
    tasks, writers, responses, events, keys = {}, {}, {}, [], {}
    gate = asyncio.Event()
    gate.set()
    for index, node in enumerate(("kitchen", "bedroom", "ordinary")):
        entry = config_entry("esphome", {"device_name": node})
        hass.config_entries._entries[entry.entry_id] = entry
        device = dr.async_get(hass).async_get_or_create(
            config_entry_id=entry.entry_id, identifiers={("esphome", node)}, name=node
        )
        devices[node] = device.id
        if node == "ordinary":
            continue
        sensor = er.async_get(hass).async_get_or_create(
            "sensor",
            "esphome",
            node + "call",
            device_id=device.id,
            config_entry=entry,
            original_name="Звонок",
        )
        entities[node] = sensor.entity_id
        hass.states.async_set(sensor.entity_id, "idle")
        states[node] = "idle"
        pcm = bytes([index + 1, 0]) * 640

        async def configure(call, node=node):
            keys[node] = call.data["key"]

        async def ring(call, node=node):
            events.append((node, "ring", dict(call.data)))
            await gate.wait()
            states[node] = "ringing" if call.data["incoming"] else "outgoing"
            hass.states.async_set(entities[node], states[node])

        async def source(call, node=node, pcm=pcm):
            events.append((node, "source", {}))
            runtime = hass.data["ha_dialog_ui_calls"]
            port = runtime.server.sockets[0].getsockname()[1]
            reader, writer = await asyncio.open_connection("127.0.0.1", port)
            writers[node] = writer
            writer.write(f"{node} {keys[node]}\n".encode())
            await writer.drain()
            assert await reader.readline() == b"OK\n"

            async def pump():
                try:
                    while not writer.is_closing():
                        writer.write(pcm)
                        await writer.drain()
                        await asyncio.sleep(0.025)
                except ConnectionError:
                    pass

            tasks[node] = asyncio.create_task(pump())
            hass.states.async_set(entities[node], "connecting")

        async def listen(call, node=node):
            events.append((node, "listen", {}))
            responses[node] = await client.get(call.data["url"])
            hass.states.async_set(entities[node], "active")

        async def end(call, node=node):
            events.append((node, "end", {}))
            if node in writers:
                writers[node].close()
            if node in responses:
                responses[node].close()
            hass.states.async_set(entities[node], "idle")

        for action, handler in (
            ("configure", configure),
            ("ring", ring),
            ("source", source),
            ("listen", listen),
            ("end", end),
        ):
            hass.services.async_register("esphome", f"{node}_call_{action}", handler)
    await async_start(hass)
    await hass.http.start()
    data = SimpleNamespace(
        hass=hass,
        manager=hass.data["ha_dialog_ui_calls"],
        devices=devices,
        entities=entities,
        events=events,
        responses=responses,
        writers=writers,
        client=client,
        gate=gate,
        base=base,
    )
    yield data
    gate.set()
    await async_stop(hass)
    for task in tasks.values():
        task.cancel()
    await asyncio.gather(*tasks.values(), return_exceptions=True)
    await client.close()
    await hass.http.stop()
    await hass.async_stop()


async def dial(data):
    await data.hass.services.async_call(
        "ha_dialog_ui",
        "call_start",
        {
            "source_device_id": data.devices["kitchen"],
            "target_device_id": data.devices["bedroom"],
        },
        blocking=True,
    )


async def answer(data):
    await data.hass.services.async_call(
        "ha_dialog_ui",
        "call_answer",
        {"device_id": data.devices["bedroom"]},
        blocking=True,
    )


async def test_ring_does_not_capture_until_answer_and_duplex_audio(calls):
    await dial(calls)
    assert [event[1] for event in calls.events] == ["ring", "ring"]
    assert not any(r.connected for r in calls.manager.receivers.values())
    await answer(calls)
    assert next(iter(calls.manager.calls.values())).state == "active"
    for node, expected in (("kitchen", b"\x02\0" * 640), ("bedroom", b"\x01\0" * 640)):
        response = calls.responses[node]
        assert await response.content.readexactly(44) == WAV_HEADER
        assert await response.content.readexactly(1280) == expected
    snapshot = str(calls.manager.snapshot())
    assert "key" not in snapshot and "/stream/" not in snapshot
    assert {d["id"] for d in calls.manager.snapshot()["devices"]} == {
        calls.devices["kitchen"],
        calls.devices["bedroom"],
    }
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_end",
        {"device_id": calls.devices["kitchen"]},
        blocking=True,
    )
    assert not calls.manager.calls
    assert {e[0] for e in calls.events if e[1] == "end"} == {"kitchen", "bedroom"}


async def test_only_called_device_can_answer_and_busy_devices_are_rejected(calls):
    await dial(calls)
    with pytest.raises(HomeAssistantError):
        await calls.manager.answer(calls.devices["kitchen"])
    with pytest.raises(HomeAssistantError):
        await dial(calls)
    with pytest.raises(HomeAssistantError):
        await calls.manager.dial(calls.devices["ordinary"], calls.devices["bedroom"])
    assert len(calls.manager.calls) == 1


async def test_top_button_answer_and_either_end_stop_both(calls):
    await dial(calls)
    calls.hass.states.async_set(calls.entities["bedroom"], "answer_requested")
    for _ in range(100):
        if (
            calls.manager.calls
            and next(iter(calls.manager.calls.values())).state == "active"
        ):
            break
        await asyncio.sleep(0.02)
    assert next(iter(calls.manager.calls.values())).state == "active"
    calls.hass.states.async_set(calls.entities["kitchen"], "idle")
    for _ in range(100):
        if not calls.manager.calls:
            break
        await asyncio.sleep(0.02)
    assert not calls.manager.calls


async def test_disconnect_stops_both_and_tickets_cannot_be_replayed(calls):
    await dial(calls)
    await answer(calls)
    url = str(calls.responses["kitchen"].url)
    async with calls.client.get(url) as replay:
        assert replay.status == 404
    calls.writers["bedroom"].close()
    for _ in range(100):
        if not calls.manager.calls:
            break
        await asyncio.sleep(0.02)
    assert not calls.manager.calls


async def test_call_does_not_take_radio_devices(calls):
    with (
        patch.object(calls.manager, "radio_busy", return_value=True),
        pytest.raises(HomeAssistantError),
    ):
        await dial(calls)
    assert not calls.manager.calls
    assert not calls.events


async def test_end_during_pending_dial_prevents_late_ring(calls):
    calls.gate.clear()
    task = asyncio.create_task(dial(calls))
    while not calls.events:
        await asyncio.sleep(0)
    await calls.manager.end_device(calls.devices["kitchen"])
    with pytest.raises(HomeAssistantError):
        await dial(calls)
    calls.gate.set()
    with pytest.raises(HomeAssistantError):
        await task
    assert not calls.manager.calls
    assert calls.hass.states.get(calls.entities["kitchen"]).state == "idle"
    assert calls.hass.states.get(calls.entities["bedroom"]).state == "idle"


async def test_timeout_and_ha_unload_stop_calls(calls):
    await dial(calls)
    call = next(iter(calls.manager.calls.values()))
    await calls.manager.end(
        call.id
    )  # Same expiry cleanup path, without wall-clock delay.
    assert not calls.manager.calls
    await dial(calls)
    await answer(calls)
    await calls.manager.stop()
    assert not calls.manager.calls and not calls.manager.streams.sessions
    assert not calls.manager.server


async def test_real_ring_timeout(calls, monkeypatch):
    monkeypatch.setattr(calls_module, "RING_TIMEOUT", 0.03)
    await dial(calls)
    await asyncio.sleep(0.1)
    assert not calls.manager.calls
    assert {e[0] for e in calls.events if e[1] == "end"} == {"kitchen", "bedroom"}


async def test_inflight_radio_reservation_rejects_calls(calls):
    calls.hass.data["ha_dialog_ui_monitor_starting"] = {calls.devices["kitchen"]}
    with pytest.raises(HomeAssistantError):
        await dial(calls)
    assert not calls.manager.calls


async def test_authenticated_watch_unsubscribe_does_not_hang_up(calls):
    user = await calls.hass.auth.async_create_user("caller")
    refresh = await calls.hass.auth.async_create_refresh_token(
        user, client_id="http://localhost/"
    )
    token = calls.hass.auth.async_create_access_token(refresh)
    async with calls.client.ws_connect(calls.base + "/api/websocket") as ws:
        assert (await ws.receive_json())["type"] == "auth_required"
        await ws.send_json({"type": "auth", "access_token": "invalid"})
        assert (await ws.receive_json())["type"] == "auth_invalid"
    await dial(calls)
    async with calls.client.ws_connect(calls.base + "/api/websocket") as ws:
        await ws.receive_json()
        await ws.send_json({"type": "auth", "access_token": token})
        assert (await ws.receive_json())["type"] == "auth_ok"
        await ws.send_json({"id": 1, "type": "ha_dialog_ui/calls/watch"})
        assert (await ws.receive_json())["success"]
        event = (await ws.receive_json())["event"]
        assert event["calls"][0]["state"] == "ringing"
        assert "key" not in str(event)
        await ws.send_json({"id": 2, "type": "unsubscribe_events", "subscription": 1})
        assert (await ws.receive_json())["success"]
    assert len(calls.manager.calls) == 1
