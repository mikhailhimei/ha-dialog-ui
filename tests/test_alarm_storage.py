"""Shared alarm/widget storage must preserve both collections under concurrency."""

import asyncio
from copy import deepcopy
from unittest.mock import patch

from custom_components.ha_dialog_ui.storage import alarm_requests_storage as storage
from test_timer_runtime import runtime


async def test_overlapping_alarm_and_widget_updates_preserve_both(runtime):
    hass, _ = runtime
    data = {'alarm_requests': [], 'alarm_time_widgets': []}
    entered, release = asyncio.Event(), asyncio.Event()
    writes = 0

    class Store:
        async def async_load(self):
            return deepcopy(data)

        async def async_save(self, value):
            nonlocal writes
            writes += 1
            if writes == 1:
                entered.set()
                await release.wait()
            data.clear()
            data.update(deepcopy(value))

    tasks = []
    with patch.object(storage, '_get_store', return_value=Store()):
        try:
            async with asyncio.timeout(3):
                tasks.append(asyncio.create_task(storage.async_save_alarm_requests(hass, [{'uuid': 'alarm'}])))
                await entered.wait()
                tasks.append(asyncio.create_task(storage.async_save_alarm_time_widgets(hass, [{'uuid': 'widget'}])))
                await asyncio.sleep(0)
                release.set()
                await asyncio.gather(*tasks)
        finally:
            release.set()
            await asyncio.gather(*tasks, return_exceptions=True)
    assert data == {'alarm_requests': [{'uuid': 'alarm'}], 'alarm_time_widgets': [{'uuid': 'widget'}]}


async def test_real_store_round_trip_keeps_both_collections(runtime):
    hass, _ = runtime
    await asyncio.gather(
        storage.async_save_alarm_requests(hass, [{'uuid': 'alarm', 'device_id': 'speaker'}]),
        storage.async_save_alarm_time_widgets(hass, [{'uuid': 'widget', 'time': '07:00'}]),
    )
    assert await storage.async_load_alarm_requests(hass) == [{'uuid': 'alarm', 'device_id': 'speaker'}]
    assert await storage.async_load_alarm_time_widgets(hass) == [{'uuid': 'widget', 'time': '07:00'}]


async def test_legacy_list_is_preserved_when_widgets_are_saved(runtime):
    hass, _ = runtime
    await storage._get_store(hass).async_save([{'uuid': 'legacy-alarm'}])
    await storage.async_save_alarm_time_widgets(hass, [{'uuid': 'widget'}])
    assert await storage.async_load_alarm_requests(hass) == [{'uuid': 'legacy-alarm'}]
    assert await storage.async_load_alarm_time_widgets(hass) == [{'uuid': 'widget'}]


async def test_alarm_times_are_remembered_once_and_survive_edit_delete_and_reload(runtime):
    hass, _ = runtime
    manual = {'uuid': 'existing', 'name': 'Утро', 'action_type': 'create_time_widget', 'time': ['07:00']}
    await storage.async_save_alarm_time_widgets(hass, [manual])
    await storage.async_save_alarm_requests(hass, [
        {'uuid': 'one', 'time': '07:00', 'device_id': 'one'},
        {'uuid': 'two', 'time': '07:00', 'device_id': 'two'},
    ])
    assert await storage.async_load_alarm_time_widgets(hass) == [manual]
    await storage.async_save_alarm_requests(hass, [{'uuid': 'one', 'time': '08:30'}])
    widgets = await storage.async_load_alarm_time_widgets(hass)
    assert widgets[0] == manual
    assert widgets[1]['time'] == ['08:30']
    await storage.async_save_alarm_requests(hass, [{'uuid': 'one', 'time': '08:30'}])
    assert await storage.async_load_alarm_time_widgets(hass) == widgets
    await storage.async_save_alarm_requests(hass, [])
    # A new Store instance reads the persisted history, independent of runtime alarms.
    assert (await storage._get_store(hass).async_load())['alarm_time_widgets'] == widgets


async def test_concurrent_widget_and_alarm_saves_keep_current_alarm_time(runtime):
    hass, _ = runtime
    await asyncio.gather(
        storage.async_save_alarm_requests(hass, [{'uuid': 'one', 'time': '06:45'}]),
        storage.async_save_alarm_time_widgets(hass, [{'uuid': 'manual', 'time': ['08:00']}]),
    )
    widgets = await storage.async_load_alarm_time_widgets(hass)
    times = [clock for widget in widgets for clock in widget['time']]
    assert sorted(times) == ['06:45', '08:00']
    assert (await storage.async_load_alarm_requests(hass))[0]['time'] == '06:45'
