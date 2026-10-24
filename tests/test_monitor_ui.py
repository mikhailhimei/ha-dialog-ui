"""Capability discovery and view ownership using real HA registries/services."""

import asyncio
import json
from types import SimpleNamespace
from unittest.mock import Mock

import pytest
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from test_request_mutations import async_handler
from test_timer_runtime import config_entry
from test_timer_runtime import runtime as runtime  # noqa: PLC0414 - pytest fixture re-export

from custom_components.ha_dialog_ui import monitor


class Connection:
    def context(self, msg):
        from homeassistant.core import Context

        return Context(user_id="test-user")

    def __init__(self):
        self.subscriptions = {}
        self.send_result = Mock()
        self.send_error = Mock()
        self.send_event = Mock()


@pytest.fixture
async def setup_monitor(runtime):
    hass, _ = runtime
    await dr.async_load(hass)
    await er.async_load(hass)
    calls = []
    receiver = SimpleNamespace(connected=False, upload_key="never-return-this")
    hass.data["voice_pe_monitor"] = {"source": receiver}
    hass.data["voice_pe_monitor_sessions"] = SimpleNamespace(sessions={})
    devices = {}
    for name, actions in [
        ("source", ["source", "listen", "stop"]),
        ("listener", ["listen", "stop"]),
        ("ordinary", []),
    ]:
        entry = config_entry("esphome", {"device_name": name})
        hass.config_entries._entries[entry.entry_id] = entry
        device = dr.async_get(hass).async_get_or_create(
            config_entry_id=entry.entry_id, identifiers={("esphome", name)}, name=name
        )
        entity = er.async_get(hass).async_get_or_create(
            "switch",
            "esphome",
            name + "-monitor",
            device_id=device.id,
            config_entry=entry,
            original_name="Радионяня",
        )
        hass.states.async_set(entity.entity_id, "off")
        devices[name] = device.id
        for action in actions:
            hass.services.async_register(
                "esphome", f"{name}_monitor_{action}", lambda call: None
            )

    async def source(call):
        calls.append(("source", dict(call.data)))
        receiver.connected = True

    async def listener(call):
        calls.append(("listener", dict(call.data)))

    async def stop(call):
        calls.append(("stop", dict(call.data)))
        receiver.connected = False

    for name, handler in [
        ("start_source", source),
        ("start_listener", listener),
        ("stop", stop),
    ]:
        hass.services.async_register("voice_pe_monitor", name, handler)
    monitor.register_monitor(hass)
    conn = Connection()
    await async_handler(monitor.watch)(hass, conn, {"id": 1, "view_id": "view"})
    yield hass, conn, devices, calls, receiver
    for unsubscribe in list(conn.subscriptions.values()):
        unsubscribe()
    await asyncio.sleep(0.01)


async def test_only_capable_devices_and_no_credentials(setup_monitor):
    hass, _conn, devices, _, receiver = setup_monitor
    receiver.connected = True
    hass.data["voice_pe_monitor_sessions"].sessions["secret-ticket"] = {
        "source": devices["source"],
        "listener": devices["listener"],
    }
    state = monitor.snapshot(hass)
    assert {device["id"] for device in state["devices"]} == {
        devices["source"],
        devices["listener"],
    }
    assert (
        next(
            device for device in state["devices"] if device["id"] == devices["listener"]
        )["source"]
        is False
    )
    assert state["sessions"] == [
        {
            "source_device_id": devices["source"],
            "listener_device_id": devices["listener"],
        }
    ]
    assert "secret-ticket" not in json.dumps(
        state
    ) and "never-return-this" not in json.dumps(state)


async def test_script_started_session_is_not_owned_or_stopped_on_view_close(
    setup_monitor,
):
    _hass, conn, _devices, calls, receiver = setup_monitor
    receiver.connected = True
    conn.subscriptions[1]()
    await asyncio.sleep(0.01)
    assert calls == []
    assert receiver.connected


async def test_start_device_pair_delegates_to_existing_services_and_closing_view_stops(
    setup_monitor,
):
    hass, conn, devices, calls, _ = setup_monitor
    await async_handler(monitor.start)(
        hass,
        conn,
        {
            "id": 2,
            "view_id": "view",
            "source_device_id": devices["source"],
            "listener_device_id": devices["listener"],
        },
    )
    assert calls == [
        ("source", {"device_id": devices["source"]}),
        (
            "listener",
            {"source_device_id": devices["source"], "device_id": devices["listener"]},
        ),
    ]
    conn.subscriptions[1]()
    await asyncio.sleep(0.01)
    assert calls[-1] == ("stop", {"device_id": devices["source"]})
    assert not hass.data["ha_dialog_ui_monitor_views"]


async def test_close_during_start_never_launches_listener_and_stops_microphone(
    setup_monitor,
):
    hass, conn, devices, calls, _ = setup_monitor
    entered, release = asyncio.Event(), asyncio.Event()

    async def slow_source(call):
        calls.append(("source", dict(call.data)))
        entered.set()
        await release.wait()

    hass.services.async_register("voice_pe_monitor", "start_source", slow_source)
    task = asyncio.create_task(
        async_handler(monitor.start)(
            hass,
            conn,
            {
                "id": 2,
                "view_id": "view",
                "source_device_id": devices["source"],
                "listener_device_id": devices["listener"],
            },
        )
    )
    await entered.wait()
    conn.subscriptions[1]()
    release.set()
    await task
    await asyncio.sleep(0.01)
    assert calls[0][0] == "source"
    assert {name for name, _ in calls} == {"source", "stop"}
    conn.send_result.assert_any_call(2, {"started": False})


async def test_unsupported_targets_are_rejected_without_starting(setup_monitor):
    hass, conn, devices, calls, _ = setup_monitor
    await async_handler(monitor.start)(
        hass,
        conn,
        {
            "id": 2,
            "view_id": "view",
            "source_device_id": devices["source"],
            "listener_device_id": devices["ordinary"],
        },
    )
    assert calls == []
    assert conn.send_error.call_args.args[1] == "monitor_error"


async def test_adapter_does_not_register_or_replace_script_services(setup_monitor):
    hass, conn, devices, calls, _ = setup_monitor
    await hass.services.async_call(
        "voice_pe_monitor",
        "start_source",
        {"device_id": devices["source"]},
        blocking=True,
    )
    conn.subscriptions[1]()
    await asyncio.sleep(0.01)
    assert [name for name, _ in calls] == ["source"]


async def test_start_conflict_does_not_stop_a_script_owned_pair(setup_monitor):
    hass, conn, devices, calls, receiver = setup_monitor
    receiver.connected = True
    hass.data["voice_pe_monitor_sessions"].sessions["existing"] = {
        "source": devices["source"],
        "listener": devices["listener"],
    }
    await async_handler(monitor.start)(
        hass,
        conn,
        {
            "id": 2,
            "view_id": "view",
            "source_device_id": devices["source"],
            "listener_device_id": devices["listener"],
        },
    )
    assert calls == []
    assert conn.send_error.call_args.args[1] == "monitor_error"
    conn.subscriptions[1]()
    await asyncio.sleep(0.01)
    assert calls == []


async def test_temporary_audio_disconnect_keeps_cleanup_ownership(setup_monitor):
    hass, conn, devices, calls, receiver = setup_monitor
    await async_handler(monitor.start)(
        hass, conn, {"id": 2, "view_id": "view", "source_device_id": devices["source"]}
    )
    registry = er.async_get(hass)
    entity = next(
        item
        for item in er.async_entries_for_device(registry, devices["source"])
        if item.original_name == "Радионяня"
    )
    hass.states.async_set(entity.entity_id, "on")
    receiver.connected = False
    await asyncio.sleep(1.05)
    view = hass.data["ha_dialog_ui_monitor_views"][(conn, "view")]
    assert view.source == devices["source"]
    conn.subscriptions[1]()
    await asyncio.sleep(0.01)
    assert calls[-1] == ("stop", {"device_id": devices["source"]})
