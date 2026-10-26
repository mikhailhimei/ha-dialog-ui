"""Regression tests using real HA classes; no fake SensorEntity or registries."""
import asyncio
import json
from datetime import datetime, timedelta
from types import MappingProxyType, SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry, ConfigEntries
from homeassistant.helpers import device_registry as dr, entity_registry as er

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.sensor import DialogTimersSensor
from custom_components.ha_dialog_ui.timer_alarm.timer_manager import DialogTimerManager
from custom_components.ha_dialog_ui.timer_alarm.timer_display import latest_device_timers
from custom_components.ha_dialog_ui.timer_alarm.manager import DialogTimerAlarmManager
from custom_components.ha_dialog_ui.timer_alarm.request_mapping import (
    _timer_item_to_request, _timer_request_to_runtime_item,
)


def config_entry(domain=DOMAIN, data=None):
    return ConfigEntry(domain=domain, title=domain, data=data or {}, options={},
                       source="user", unique_id=None, version=1, minor_version=1,
                       discovery_keys=MappingProxyType({}))


@pytest.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    hass.config_entries = ConfigEntries(hass, {})
    manager = DialogTimerManager(hass, lambda: None, lambda: "alarm.mp3")
    yield hass, manager
    await manager.async_stop()
    await hass.async_stop()


def create(manager, name, created, device="voice", total=120, paused=False):
    manager._create_timer(name, "client", device, total, paused, created)


@pytest.mark.asyncio
async def test_countdown_pause_resume_and_reads_do_not_restart(runtime):
    hass, manager = runtime
    create(manager, "old", 10)
    create(manager, "new", 20)
    entry = manager._timers["new"]
    task = entry["task"]
    with patch("custom_components.ha_dialog_ui.timer_alarm.timer_manager.monotonic") as clock:
        clock.return_value = entry["deadline_monotonic"] - 60
        assert latest_device_timers(manager.get_timer_items())["voice"]["remaining_seconds"] == 60
        assert entry["task"] is task
        await manager._pause_timer("new")
        clock.return_value += 160
        assert latest_device_timers(manager.get_timer_items())["voice"]["remaining_seconds"] == 60
        await manager._resume_timer("new")
    assert entry["created_at"] == 20
    assert entry["total_seconds"] == 120
    assert not entry["paused"]


@pytest.mark.asyncio
async def test_apply_delete_and_unrelated_changes_preserve_running_task(runtime):
    _, manager = runtime
    create(manager, "old", 10)
    create(manager, "new", 20)
    create(manager, "other", 30, device="other")
    task = manager._timers["old"]["task"]
    items = {item["id"]: item for item in manager.get_timer_items()}
    await manager.apply_ui_items(items)
    assert manager._timers["old"]["task"] is task
    items.pop("new")
    await manager.apply_ui_items(items)
    selected = latest_device_timers(manager.get_timer_items())
    assert selected["voice"]["id"] == "old"
    assert selected["other"]["id"] == "other"
    assert manager._timers["old"]["task"] is task
    await manager.apply_ui_items({})
    assert latest_device_timers(manager.get_timer_items()) == {}


@pytest.mark.asyncio
async def test_completion_falls_back_and_plays_sound_once(runtime):
    _, manager = runtime
    create(manager, "old", 10)
    create(manager, "new", 20, total=1)
    task = manager._timers["new"]["task"]
    with patch("custom_components.ha_dialog_ui.timer_alarm.timer_manager.audio_notification", new_callable=AsyncMock) as sound:
        await task
        sound.assert_awaited_once()
    assert latest_device_timers(manager.get_timer_items())["voice"]["id"] == "old"


@pytest.mark.asyncio
async def test_storage_roundtrip_preserves_order_total_pause_and_remaining(runtime):
    hass, manager = runtime
    create(manager, "zzz", 10, total=300)
    create(manager, "aaa", 20, total=120, paused=True)
    manager._timers["aaa"]["remaining_seconds"] = 60
    requests = json.loads(json.dumps([_timer_item_to_request(item) for item in manager.get_timer_items()]))
    restored = DialogTimerManager(hass, lambda: None, lambda: "alarm.mp3")
    try:
        incoming = [_timer_request_to_runtime_item(item, "client") for item in requests]
        await restored.apply_ui_items({item["id"]: item for item in incoming})
        selected = latest_device_timers(restored.get_timer_items())["voice"]
        assert selected == {"id": "aaa", "created_at": 20, "total_seconds": 120,
                            "remaining_seconds": 60, "paused": True}
        persisted = restored.serialize_timer_persisted_items()
        assert next(item for item in persisted if item["id"] == "aaa")["time"]["remaining_seconds"] == 60
    finally:
        await restored.async_stop()


@pytest.mark.asyncio
async def test_expired_storage_is_not_restarted(runtime):
    _, manager = runtime
    item = {"id": "expired", "deviceId": "voice", "status": "on", "time": {
        "count_timer": "00:02:00", "total_seconds": 120, "remaining_seconds": 60,
        "date_end": (datetime.now() - timedelta(seconds=60)).isoformat(), "created_at": 10}}
    await manager.apply_ui_items({"expired": item})
    assert manager.get_timer_items() == []


@pytest.mark.asyncio
async def test_sensor_object_records_devices_and_empty_heartbeat(runtime):
    hass, manager = runtime
    await dr.async_load(hass)
    await er.async_load(hass)
    entry = config_entry()
    esphome = config_entry("esphome", {"device_name": "home-assistant-voice-0ab77d"})
    other = config_entry("esphome", {"device_name": "other-voice"})
    # Registry entries need real config entries, but no ESPHome connection here.
    hass.config_entries._entries[entry.entry_id] = entry
    hass.config_entries._entries[esphome.entry_id] = esphome
    hass.config_entries._entries[other.entry_id] = other
    devices = dr.async_get(hass)
    first = devices.async_get_or_create(config_entry_id=esphome.entry_id, identifiers={("esphome", "first")})
    second = devices.async_get_or_create(config_entry_id=other.entry_id, identifiers={("esphome", "second")})
    entity = er.async_get(hass).async_get_or_create("media_player", "esphome", "voice", device_id=first.id, config_entry=esphome)
    hass.data[DOMAIN] = {entry.entry_id: SimpleNamespace(timer_alarm_manager=manager)}
    sensor = DialogTimersSensor(hass, entry)
    create(manager, "old", 10, first.id)
    create(manager, "new", 20, entity.entity_id, paused=True)
    create(manager, "other", 30, second.id)
    await sensor.async_update()
    assert sensor.native_value == 2
    assert isinstance(sensor.extra_state_attributes["payload"], list)
    payload = {record["device_id"]: record for record in sensor.extra_state_attributes["payload"]}
    assert len(payload) == 2
    assert payload[first.id]["id"] == "new"
    assert payload[first.id]["client_id"] == "client"
    assert payload[second.id]["id"] == "other"
    duplicate = config_entry("esphome", {"device_name": "home-assistant-voice-0ab77d"})
    hass.config_entries._entries[duplicate.entry_id] = duplicate
    devices.async_get_or_create(config_entry_id=duplicate.entry_id, identifiers={("esphome", "third")})
    await sensor.async_update()
    payload = {record["device_id"]: record for record in sensor.extra_state_attributes["payload"]}
    assert "home-assistant-voice-0ab77d" not in payload
    assert payload[first.id]["id"] == "new"
    await manager.async_stop()
    with patch("custom_components.ha_dialog_ui.sensor.time.time", return_value=123):
        await sensor.async_update()
    assert sensor.extra_state_attributes == {"payload": [], "_updated_at": 123}
    with patch("custom_components.ha_dialog_ui.sensor.time.time", return_value=124):
        await sensor.async_update()
    assert sensor.extra_state_attributes == {"payload": [], "_updated_at": 124}


@pytest.mark.asyncio
async def test_service_persistence_keeps_one_runtime_uuid(runtime):
    hass, _ = runtime
    wrapper = DialogTimerAlarmManager(hass)
    saved = []
    async def save(_hass, items):
        saved[:] = items
    try:
        with patch.object(wrapper, "_mark_updated"), patch.object(wrapper, "_publish_runtime_state"), patch("custom_components.ha_dialog_ui.timer_alarm.manager.async_save_timer_requests", side_effect=save), patch("custom_components.ha_dialog_ui.timer_alarm.manager.async_save_alarm_requests", new_callable=AsyncMock):
            wrapper.timer_manager._mark_updated = lambda: None
            await wrapper.async_handle_service_action("timer", {"action": "create", "mm": 2}, "client", "voice")
            await wrapper._async_save_to_request_storages()
        assert len(saved) == 1
        assert saved[0]["uuid"] == wrapper.get_timer_items()[0]["id"]
        assert saved[0]["timer_time"]["created_at"] > 0
        assert saved[0]["timer_time"]["total_seconds"] == 120
    finally:
        await wrapper.async_stop()


@pytest.mark.asyncio
async def test_voice_controls_do_not_touch_another_column(runtime):
    _, manager = runtime
    create(manager, "first", 10, device="one")
    create(manager, "second", 20, device="two")
    await manager.async_handle_timer_pause("client", "one", None, False)
    assert manager._timers["first"]["paused"]
    assert not manager._timers["second"]["paused"]
    await manager.async_handle_timer_stop("client", "one", None, False)
    assert list(manager._timers) == ["second"]
    await manager.async_handle_timer_stop("missing-client", "two", None, False)
    assert list(manager._timers) == ["second"]


@pytest.mark.asyncio
async def test_ui_create_and_storage_sync_do_not_restart_existing(runtime):
    from custom_components.ha_dialog_ui.src.api.timer_request.timer_requests_api import _sync_timer_requests_to_runtime
    hass, manager = runtime
    coordinator = SimpleNamespace(timer_alarm_manager=SimpleNamespace(timer_manager=manager))
    hass.data[DOMAIN] = {"entry": coordinator, "coordinator": coordinator}
    requests = [{"uuid": "one", "device_id": "voice", "timer_time": "00:02:00"}]
    await _sync_timer_requests_to_runtime(hass, requests)
    task = manager._timers["one"]["task"]
    created = manager._timers["one"]["created_at"]
    requests.append({"uuid": "two", "device_id": "voice", "timer_time": "00:03:00"})
    await _sync_timer_requests_to_runtime(hass, requests)
    assert manager._timers["one"]["task"] is task
    assert manager._timers["one"]["created_at"] == created
    assert latest_device_timers(manager.get_timer_items())["voice"]["id"] == "two"


@pytest.mark.asyncio
async def test_duration_edit_preserves_creation_and_original_duration(runtime):
    _, manager = runtime
    create(manager, "one", 10)
    item = {"id": "one", "clientId": "client", "deviceId": "voice", "status": "on",
            "time": {"count_timer": "00:01:00"}}
    await manager.apply_ui_items({"one": item})
    task = manager._timers["one"]["task"]
    await manager.apply_ui_items({"one": item})
    assert manager._timers["one"]["task"] is task
    assert manager._timers["one"]["created_at"] == 10
    assert manager._timers["one"]["total_seconds"] == 120
    assert manager.get_timer_items()[0]["time"]["remaining_seconds"] == 60


@pytest.mark.asyncio
async def test_ui_list_read_does_not_apply_storage(runtime):
    from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api as api
    hass, _ = runtime
    connection = SimpleNamespace(send_result=lambda *args: None)
    with patch.object(api, "async_load_timer_requests", new_callable=AsyncMock, return_value=[]), patch.object(api, "_sync_timer_requests_to_runtime", new_callable=AsyncMock) as sync:
        await api._ws_get_timer_requests_short.__wrapped__(hass, connection, {"id": 1})
        sync.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize("finish", ["expire", "delete"])
async def test_sensor_device_key_survives_switch_from_voice_to_ui_timer(runtime, finish):
    hass, manager = runtime
    await dr.async_load(hass)
    await er.async_load(hass)
    entry = config_entry()
    esphome = config_entry("esphome", {"device_name": "home-assistant-voice-0ab77d"})
    hass.config_entries._entries[entry.entry_id] = entry
    hass.config_entries._entries[esphome.entry_id] = esphome
    device = dr.async_get(hass).async_get_or_create(config_entry_id=esphome.entry_id, identifiers={("esphome", "voice")})
    player = er.async_get(hass).async_get_or_create("media_player", "esphome", "player", device_id=device.id, config_entry=esphome)
    hass.data[DOMAIN] = {entry.entry_id: SimpleNamespace(timer_alarm_manager=manager)}
    sensor = DialogTimersSensor(hass, entry)
    create(manager, "ui", 10, player.entity_id, total=120)
    create(manager, "voice", 20, device.id, total=1)
    await sensor.async_update()
    assert sensor.extra_state_attributes["payload"][0]["id"] == "voice"
    if finish == "expire":
        with patch("custom_components.ha_dialog_ui.timer_alarm.timer_manager.audio_notification", new_callable=AsyncMock):
            await manager._timers["voice"]["task"]
    else:
        await manager.apply_ui_items({item["id"]: item for item in manager.get_timer_items() if item["id"] != "voice"})
    await sensor.async_update()
    payload = sensor.extra_state_attributes["payload"]
    assert len(payload) == 1
    assert payload[0]["id"] == "ui"
    assert payload[0]["device_id"] == device.id
    assert sensor.native_value == 1
    await manager.apply_ui_items({})
    await sensor.async_update()
    assert sensor.extra_state_attributes["payload"] == []
    assert "_updated_at" in sensor.extra_state_attributes


@pytest.mark.asyncio
async def test_expired_timer_is_removed_and_published_before_audio_callback(runtime):
    import asyncio
    _, manager = runtime
    create(manager, "old", 10, total=120)
    create(manager, "new", 20, total=1)
    updates = []
    manager._mark_updated = lambda: updates.append(list(manager._timers))
    started = asyncio.Event()
    release = asyncio.Event()
    async def audio(*args):
        started.set()
        await release.wait()
    task = manager._timers["new"]["task"]
    try:
        with patch("custom_components.ha_dialog_ui.timer_alarm.timer_manager.audio_notification", side_effect=audio):
            await started.wait()
            assert "new" not in manager._timers
            assert updates == [["old"]]
            assert latest_device_timers(manager.get_timer_items())["voice"]["id"] == "old"
            release.set()
            await task
    finally:
        release.set()


@pytest.mark.asyncio
async def test_alarm_sensor_is_read_only_and_reports_enabled_alarms(runtime):
    from unittest.mock import Mock
    from custom_components.ha_dialog_ui.sensor import DialogAlarmSensor
    from custom_components.ha_dialog_ui.timer_alarm.alarm_manager import DialogAlarmManager
    hass, _ = runtime
    await dr.async_load(hass)
    await er.async_load(hass)
    entry = config_entry()
    changed = Mock()
    alarms = DialogAlarmManager(hass, changed, lambda: "alarm.mp3")
    hass.data[DOMAIN] = {entry.entry_id: SimpleNamespace(timer_alarm_manager=alarms)}
    sensor = DialogAlarmSensor(hass, entry)
    try:
        await sensor.async_update()
        assert sensor.native_value == "off"
        assert sensor.extra_state_attributes == {"active_count": 0, "payload": []}
        future = (datetime.now() + timedelta(minutes=10)).strftime("%H:%M")
        item = {"id": "one", "deviceId": "voice", "status": "on", "time": {"time": future}}
        await alarms.apply_ui_items({"one": item})
        task = alarms._alarm_tick_task
        calls = changed.call_count
        before = dict(alarms._alarms["one"])
        for _ in range(3):
            await sensor.async_update()
        assert sensor.native_value == "on"
        assert sensor.extra_state_attributes["active_count"] == 1
        assert sensor.extra_state_attributes["payload"] == [{"id": "one", "media": "", "client_id": "", "device_id": "voice", "status": "on"}]
        assert alarms._alarms["one"] == before
        assert changed.call_count == calls
        assert alarms._alarm_tick_task is task
        await alarms.apply_ui_items({"one": {**item, "status": "off"}})
        await sensor.async_update()
        assert sensor.native_value == "off"
        assert sensor.extra_state_attributes["active_count"] == 0
        assert sensor.extra_state_attributes["payload"][0]["status"] == "off"
        calls = changed.call_count
        await alarms.apply_ui_items({})
        assert changed.call_count == calls + 1
        await sensor.async_update()
        assert sensor.native_value == "off"
        hass.data[DOMAIN].pop(entry.entry_id)
        await sensor.async_update()
        assert not sensor.available
    finally:
        await alarms.async_stop()


@pytest.mark.parametrize("kind", ["timer", "alarm"])
def test_request_storage_keeps_client_id_instead_of_rebinding_to_shared_client(kind):
    from custom_components.ha_dialog_ui.timer_alarm import request_mapping
    from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api
    from custom_components.ha_dialog_ui.src.api.alarm_request import alarm_requests_api
    item = {"id": "record", "clientId": "voice-client", "deviceId": "voice-device", "status": "on", "time": {"count_timer": "00:05:00", "time": "08:00"}}
    encode = getattr(request_mapping, f"_{kind}_item_to_request")
    decode = getattr(request_mapping, f"_{kind}_request_to_runtime_item")
    request = encode(item)
    assert request["client_id"] == "voice-client"
    assert decode(request, "different-default")["clientId"] == "voice-client"
    api = timer_requests_api if kind == "timer" else alarm_requests_api
    normalized = getattr(api, f"_normalize_{kind}_request_payload")(request)
    assert normalized["client_id"] == "voice-client"
    assert getattr(api, f"_{kind}_request_to_runtime_item")(normalized, "different-default")["clientId"] == "voice-client"


@pytest.mark.asyncio
async def test_service_alarm_keeps_original_id_and_client_when_persisted(runtime):
    from custom_components.ha_dialog_ui.timer_alarm.request_mapping import _alarm_item_to_request
    hass, _ = runtime
    wrapper = DialogTimerAlarmManager(hass)
    wrapper.alarm_manager._mark_updated = lambda: None
    captured = []
    async def save():
        captured[:] = [_alarm_item_to_request(item) for item in wrapper.get_alarm_items()]
    try:
        future = datetime.now() + timedelta(minutes=10)
        with patch.object(wrapper, "_async_save_to_request_storages", side_effect=save):
            await wrapper.async_handle_service_action("alarm", {"action": "create", "hh": future.hour, "mm": future.minute, "convert_day_period": True}, "alarm-client", "voice")
            await wrapper._async_save_to_request_storages()
        assert len(captured) == 1
        assert captured[0]["uuid"] == wrapper.get_alarm_items()[0]["id"]
        assert captured[0]["client_id"] == "alarm-client"
    finally:
        await wrapper.async_stop()
