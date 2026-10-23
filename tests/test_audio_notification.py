"""Playback resolves real HA device/entity registries, without another speaker fallback."""
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
from homeassistant.helpers import device_registry as dr, entity_registry as er
from homeassistant.exceptions import HomeAssistantError

from custom_components.ha_dialog_ui.audio.audio_notification import _resolve_media_player_entity_id, audio_notification
from custom_components.ha_dialog_ui import services
from test_timer_runtime import config_entry, runtime


@pytest.fixture
async def speaker(runtime):
    hass, _ = runtime
    await dr.async_load(hass)
    await er.async_load(hass)
    entry = config_entry("esphome")
    hass.config_entries._entries[entry.entry_id] = entry
    device = dr.async_get(hass).async_get_or_create(config_entry_id=entry.entry_id, identifiers={("esphome", "voice")})
    registry = er.async_get(hass)
    player = registry.async_get_or_create("media_player", "esphome", "player", device_id=device.id, config_entry=entry)
    satellite = registry.async_get_or_create("assist_satellite", "esphome", "satellite", device_id=device.id, config_entry=entry)
    hass.states.async_set(player.entity_id, "idle", {"volume_level": 0.5})
    hass.states.async_set(satellite.entity_id, "idle")
    return hass, device, player, satellite, entry


@pytest.mark.asyncio
async def test_device_and_entity_refs_resolve_same_player(speaker):
    hass, device, player, satellite, _ = speaker
    for ref in (device.id, player.entity_id, satellite.entity_id, "  " + device.id + "  "):
        assert _resolve_media_player_entity_id(hass, ref) == player.entity_id


@pytest.mark.asyncio
async def test_missing_device_does_not_use_other_speaker(speaker, caplog):
    hass, _, _, _, _ = speaker
    assert _resolve_media_player_entity_id(hass, "f78b84553b463617269c25293950bb55") == ""
    assert "does not resolve" in caplog.text


@pytest.mark.asyncio
async def test_device_without_player_does_not_use_other_speaker(speaker, caplog):
    hass, _, _, _, entry = speaker
    other = dr.async_get(hass).async_get_or_create(config_entry_id=entry.entry_id, identifiers={("esphome", "other")})
    assert _resolve_media_player_entity_id(hass, other.id) == ""
    assert "no registered media_player" in caplog.text


@pytest.mark.asyncio
async def test_disabled_player_is_not_chosen(speaker):
    hass, device, player, _, entry = speaker
    registry = er.async_get(hass)
    registry.async_update_entity(player.entity_id, disabled_by=er.RegistryEntryDisabler.USER)
    second = registry.async_get_or_create("media_player", "esphome", "enabled", device_id=device.id, config_entry=entry)
    hass.states.async_set(second.entity_id, "idle")
    assert _resolve_media_player_entity_id(hass, device.id) == second.entity_id
    assert _resolve_media_player_entity_id(hass, player.entity_id) == ""


@pytest.mark.asyncio
async def test_unavailable_and_ambiguous_players(speaker):
    hass, device, player, _, entry = speaker
    hass.states.async_set(player.entity_id, "unavailable")
    assert _resolve_media_player_entity_id(hass, device.id) == ""
    second = er.async_get(hass).async_get_or_create("media_player", "esphome", "second", device_id=device.id, config_entry=entry)
    hass.states.async_set(second.entity_id, "idle")
    # The stale first registry entry must not hide the working second one.
    assert _resolve_media_player_entity_id(hass, device.id) == second.entity_id
    hass.states.async_set(player.entity_id, "idle")
    assert _resolve_media_player_entity_id(hass, device.id) == ""
    assert _resolve_media_player_entity_id(hass, player.entity_id) == player.entity_id


@pytest.mark.asyncio
async def test_notification_calls_real_service_for_resolved_player(speaker):
    hass, device, player, _, _ = speaker
    calls = []
    async def play(call):
        calls.append(call.data)
    hass.services.async_register("media_player", "play_media", play)
    await audio_notification(hass, device.id, "timer-alarm.mp3")
    await hass.async_block_till_done()
    assert len(calls) == 1
    assert calls[0]["entity_id"] == player.entity_id
    assert calls[0]["media_content_id"] == "media-source://media_source/local/timer-alarm.mp3"


@pytest.mark.asyncio
@pytest.mark.parametrize("kind", ["timer", "alarm"])
@pytest.mark.parametrize("field", ["device_id", "deviceId"])
async def test_create_services_accept_both_device_fields(runtime, kind, field):
    hass, _ = runtime
    manager = SimpleNamespace(async_handle_service_action=AsyncMock(return_value={"actionType": "success"}))
    schema = services._TIMER_CREATE_SCHEMA if kind == "timer" else services._ALARM_CREATE_SCHEMA
    data = schema({field: "f78b84553b463617269c25293950bb55", "clientId": "client"})
    with patch.object(services, "get_integration_entry", return_value=config_entry()), patch.object(services, "get_timer_alarm_manager", return_value=manager), patch.object(services, "build_runtime_options", return_value={}):
        services.async_register_services(hass)
        await hass.services.async_call("ha_dialog_ui", kind + "_create", data, blocking=True)
    assert manager.async_handle_service_action.await_args.args[3] == data[field]


@pytest.mark.asyncio
async def test_conflicting_device_fields_are_rejected(runtime):
    hass, _ = runtime
    manager = SimpleNamespace(async_handle_service_action=AsyncMock())
    with patch.object(services, "get_integration_entry", return_value=config_entry()), patch.object(services, "get_timer_alarm_manager", return_value=manager), patch.object(services, "build_runtime_options", return_value={}):
        services.async_register_services(hass)
        with pytest.raises(HomeAssistantError, match="different devices"):
            await hass.services.async_call("ha_dialog_ui", "timer_create", {"device_id": "one", "deviceId": "two"}, blocking=True)
    manager.async_handle_service_action.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize("audio", ["https://example.org/alarm.mp3", "media-source://media_source/local/sounds/alarm.mp3"])
async def test_ready_media_urls_are_not_wrapped_again(speaker, audio):
    hass, device, _, _, _ = speaker
    calls = []
    async def play(call):
        calls.append(call.data)
    hass.services.async_register("media_player", "play_media", play)
    await audio_notification(hass, device.id, audio)
    assert calls[0]["media_content_id"] == audio


@pytest.mark.asyncio
async def test_zero_previous_volume_is_restored_after_playback(speaker):
    import asyncio
    hass, device, player, _, _ = speaker
    hass.states.async_set(player.entity_id, "idle", {"volume_level": 0})
    calls = []
    finished = asyncio.Event()
    async def volume(call):
        calls.append(("volume", call.data["volume_level"]))
    async def play(call):
        calls.append(("play", call.data["entity_id"]))
    async def wait(*args):
        await finished.wait()
    hass.services.async_register("media_player", "volume_set", volume)
    hass.services.async_register("media_player", "play_media", play)
    with patch("custom_components.ha_dialog_ui.audio.audio_notification._async_wait_until_finished", side_effect=wait):
        await audio_notification(hass, device.id, "alarm.mp3", 0.3)
        assert calls == [("volume", 0.3), ("play", player.entity_id)]
        finished.set()
        await hass.async_block_till_done()
    assert calls == [("volume", 0.3), ("play", player.entity_id), ("volume", 0)]


@pytest.mark.asyncio
async def test_playback_error_is_reported_with_target_and_file(speaker, caplog):
    hass, device, player, _, _ = speaker
    async def play(call):
        raise HomeAssistantError("missing media file")
    hass.services.async_register("media_player", "play_media", play)
    await audio_notification(hass, device.id, "missing.mp3")
    assert "missing media file" in caplog.text
    assert player.entity_id in caplog.text
    assert "missing.mp3" in caplog.text


@pytest.mark.asyncio
@pytest.mark.parametrize("use_entity", [False, True])
async def test_sensors_publish_object_records_with_media_client_and_device(speaker, runtime, use_entity, caplog):
    from custom_components.ha_dialog_ui.sensor import DialogTimersSensor, DialogAlarmSensor
    from custom_components.ha_dialog_ui.const import DOMAIN
    hass, device, player, _, _ = speaker
    _, timers = runtime
    entry = config_entry()
    ref = player.entity_id if use_entity else device.id
    timers._create_timer("timer", "timer-client", ref, 300, True)
    alarm_items = [{"id": "alarm", "deviceId": ref, "clientId": "alarm-client", "status": "off"},
                   {"id": "unknown", "deviceId": "unknown-device", "clientId": "other-client", "status": "on"}]
    hass.data[DOMAIN] = {entry.entry_id: SimpleNamespace(timer_alarm_manager=SimpleNamespace(
        get_timer_items=timers.get_timer_items, get_alarm_items=lambda: alarm_items))}
    timer_sensor = DialogTimersSensor(hass, entry)
    alarm_sensor = DialogAlarmSensor(hass, entry)
    await timer_sensor.async_update()
    await alarm_sensor.async_update()
    assert timer_sensor.extra_state_attributes["payload"] == [{
        "id": "timer", "media": player.entity_id, "client_id": "timer-client",
        "device_id": device.id, "total_seconds": 300, "remaining_seconds": 300, "paused": True}]
    assert alarm_sensor.extra_state_attributes["payload"] == [
        {"id": "alarm", "media": player.entity_id, "client_id": "alarm-client", "device_id": device.id, "status": "off"},
        {"id": "unknown", "media": "", "client_id": "other-client", "device_id": "unknown-device", "status": "on"}]
    assert alarm_sensor.native_value == "on"
    assert alarm_sensor.extra_state_attributes["active_count"] == 1
    assert "does not resolve" not in caplog.text
