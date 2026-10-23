"""Full integration loading, polling and restart on a local Home Assistant core."""
import asyncio
import json
import socket
from pathlib import Path
from unittest.mock import AsyncMock, patch

import pytest
from homeassistant import loader
from homeassistant.bootstrap import async_from_config_dict
from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.components import conversation

from custom_components.ha_dialog_ui.const import DOMAIN
from test_timer_runtime import config_entry

CONFIG = {"homeassistant": {"name": "Timer tests", "latitude": 0, "longitude": 0,
          "elevation": 0, "unit_system": "metric", "time_zone": "UTC"},
          "http": {"server_host": "127.0.0.1", "server_port": 18123}, "frontend": {}}
ENTITY = "sensor.ha_dialog_ui_timers"


async def boot(config_dir):
    hass = HomeAssistant(str(config_dir))
    loader.async_setup(hass)
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        port = sock.getsockname()[1]
    config = {**CONFIG, "http": {**CONFIG["http"], "server_port": port}}
    assert await async_from_config_dict(config, hass) is hass
    await hass.async_start()
    return hass


@pytest.mark.asyncio
async def test_full_setup_service_poll_unload_and_restart(tmp_path):
    (tmp_path / "custom_components").symlink_to(Path(__file__).resolve().parents[1] / "custom_components", target_is_directory=True)
    hass = await boot(tmp_path)
    try:
        entry = config_entry()
        # Seed an old provider registry entry: upgrading removes precisely
        # this integration's retired entity, not an unrelated TTS provider.
        registry = er.async_get(hass)
        old_provider = registry.async_get_or_create("tts", DOMAIN, f"{DOMAIN}_tts", config_entry=entry)
        other_provider = registry.async_get_or_create("tts", "other_provider", "other-provider")
        # Setup failure must clean runtime state and remain retryable.
        with patch.object(hass.config_entries, "async_forward_entry_setups", new_callable=AsyncMock, side_effect=RuntimeError("forward failed")):
            await hass.config_entries.async_add(entry)
        assert entry.state is ConfigEntryState.SETUP_ERROR
        assert entry.entry_id not in hass.data[DOMAIN]
        assert "coordinator" not in hass.data[DOMAIN]
        assert await hass.config_entries.async_reload(entry.entry_id)
        assert entry.state is ConfigEntryState.LOADED
        assert registry.async_get(old_provider.entity_id) is None
        assert registry.async_get(other_provider.entity_id) is not None
        assert not hass.services.has_service(DOMAIN, "yandex_tts_speak")
        assert conversation.async_get_agent(hass, entry.entry_id) is not None
        state = hass.states.get(ENTITY)
        assert state is not None and state.state == "0"
        assert isinstance(state.attributes["payload"], list)
        before = state.attributes["_updated_at"]
        await asyncio.sleep(2.2)
        assert hass.states.get(ENTITY).attributes["_updated_at"] > before
        await hass.services.async_call(DOMAIN, "timer_create", {"clientId": "test", "deviceId": "voice", "ss": 120}, blocking=True)
        manager = hass.data[DOMAIN][entry.entry_id].timer_alarm_manager.timer_manager
        timer_id = next(iter(manager._timers))
        await asyncio.sleep(2.2)
        payload = hass.states.get(ENTITY).attributes["payload"]
        assert 115 <= payload[0]["remaining_seconds"] < 120
        await manager._pause_timer(timer_id)
        await asyncio.sleep(2.2)
        payload = hass.states.get(ENTITY).attributes["payload"]
        expected = payload[0]
        assert expected["paused"]
        before = hass.states.get(ENTITY).attributes["_updated_at"]
        await asyncio.sleep(1.2)
        payload = hass.states.get(ENTITY).attributes["payload"]
        assert hass.states.get(ENTITY).attributes["_updated_at"] > before
        assert payload[0] == expected
        await hass.async_block_till_done()
        registry_id = er.async_get(hass).async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_voice_timers")
        assert registry_id == ENTITY
        # A refused unload leaves the manager intact.
        with patch.object(hass.config_entries, "async_unload_platforms", new_callable=AsyncMock, return_value=False):
            assert not await hass.config_entries.async_unload(entry.entry_id)
        assert hass.data[DOMAIN][entry.entry_id].timer_alarm_manager.timer_manager is manager
        assert await hass.config_entries.async_unload(entry.entry_id)
        assert entry.entry_id not in hass.data[DOMAIN]
        assert hass.states.get(ENTITY).state == "unavailable"
        await hass.async_block_till_done()
    finally:
        await hass.async_stop()
    # New core reads the actual .storage and entity registry from disk.
    hass = await boot(tmp_path)
    try:
        await asyncio.sleep(1.2)
        entries = hass.config_entries.async_entries(DOMAIN)
        assert len(entries) == 1 and entries[0].state is ConfigEntryState.LOADED
        assert hass.states.get(ENTITY).state == "1"
        payload = hass.states.get(ENTITY).attributes["payload"]
        assert payload[0] == expected
        assert payload[0]["client_id"] == "test"
        assert len([s for s in hass.states.async_all("sensor") if s.entity_id.startswith(ENTITY)]) == 1
    finally:
        await hass.async_stop()


@pytest.mark.asyncio
async def test_two_service_timers_sensor_continues_after_one_expires(tmp_path):
    (tmp_path / "custom_components").symlink_to(Path(__file__).resolve().parents[1] / "custom_components", target_is_directory=True)
    hass = await boot(tmp_path)
    try:
        entry = config_entry()
        await hass.config_entries.async_add(entry)
        wrapper = hass.data[DOMAIN][entry.entry_id].timer_alarm_manager
        async def create(seconds):
            await hass.services.async_call(DOMAIN, "timer_create", {"clientId": "voice-client", "deviceId": "voice-device", "ss": seconds}, blocking=True)
        await create(120)
        older = next(iter(wrapper.timer_manager._timers))
        await create(3)
        newest = next(key for key in wrapper.timer_manager._timers if key != older)
        task = wrapper.timer_manager._timers[newest]["task"]
        with patch("custom_components.ha_dialog_ui.timer_alarm.timer_manager.audio_notification", new_callable=AsyncMock) as sound:
            await asyncio.sleep(1.2)
            assert hass.states.get(ENTITY).attributes["payload"][0]["id"] == newest
            await task
            await asyncio.sleep(1.2)
            state = hass.states.get(ENTITY)
            remaining = state.attributes["payload"]
            assert state.state == "1"
            assert remaining[0]["id"] == older
            assert 110 <= remaining[0]["remaining_seconds"] < 120
            stamp = state.attributes["_updated_at"]
            await asyncio.sleep(1.2)
            after = hass.states.get(ENTITY).attributes["payload"]
            assert after[0]["id"] == older
            assert hass.states.get(ENTITY).attributes["_updated_at"] > stamp
            assert after[0]["remaining_seconds"] < remaining[0]["remaining_seconds"]
            sound.assert_awaited_once()
    finally:
        await hass.async_stop()


@pytest.mark.asyncio
async def test_alarm_sensor_setup_updates_restore_and_unload(tmp_path):
    from datetime import datetime, timedelta
    (tmp_path / "custom_components").symlink_to(Path(__file__).resolve().parents[1] / "custom_components", target_is_directory=True)
    alarm_entity = "sensor.ha_dialog_ui_alarm"
    async def expect(hass, value, count):
        for _ in range(100):
            state = hass.states.get(alarm_entity)
            if state is not None and state.state == value and state.attributes.get("active_count") == count:
                return
            await asyncio.sleep(0.01)
        assert False, f"Alarm sensor did not reach {value}/{count}: {hass.states.get(alarm_entity)}"
    hass = await boot(tmp_path)
    try:
        entry = config_entry()
        await hass.config_entries.async_add(entry)
        await expect(hass, "off", 0)
        future = datetime.now() + timedelta(minutes=10)
        await hass.services.async_call(DOMAIN, "alarm_create", {"clientId": "test", "deviceId": "voice", "hh": future.hour, "mm": future.minute}, blocking=True)
        await expect(hass, "on", 1)
        wrapper = hass.data[DOMAIN][entry.entry_id].timer_alarm_manager
        alarm = wrapper.get_alarm_items()[0]
        await wrapper.alarm_manager.apply_ui_items({alarm["id"]: {**alarm, "status": "off"}})
        await expect(hass, "off", 0)
        await wrapper.alarm_manager.apply_ui_items({alarm["id"]: alarm})
        await expect(hass, "on", 1)
    finally:
        await hass.async_stop()
    assert (tmp_path / ".storage/ha_dialog_ui_alarm_requests").exists()
    saved = json.loads((tmp_path / ".storage/ha_dialog_ui_alarm_requests").read_text())["data"]["alarm_requests"]
    assert len(saved) == 1 and saved[0]["status"] == "on", saved
    history = json.loads((tmp_path / ".storage/ha_dialog_ui_alarm_requests").read_text())["data"]["alarm_time_widgets"]
    assert [clock for widget in history for clock in widget["time"]] == [saved[0]["time"]]
    hass = await boot(tmp_path)
    try:
        await expect(hass, "on", 1)
        assert hass.states.get(alarm_entity).attributes["payload"][0]["client_id"] == "test"
        entries = hass.config_entries.async_entries(DOMAIN)
        entry = entries[0]
        wrapper = hass.data[DOMAIN][entry.entry_id].timer_alarm_manager
        await wrapper.alarm_manager.apply_ui_items({})
        await expect(hass, "off", 0)
        assert await hass.config_entries.async_unload(entry.entry_id)
        assert hass.states.get(alarm_entity).state == "unavailable"
        # Removed entities must detach mutation listeners.
        from homeassistant.helpers.dispatcher import async_dispatcher_send
        from custom_components.ha_dialog_ui.const import SIGNAL_TIMER_ALARM_UPDATED
        async_dispatcher_send(hass, SIGNAL_TIMER_ALARM_UPDATED)
        await asyncio.sleep(0.05)
        assert hass.states.get(alarm_entity).state == "unavailable"
    finally:
        await hass.async_stop()
