"""Overlapping partial settings saves preserve unrelated and nested fields."""

import asyncio
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.src.api.settings import settings_api as api
from test_request_mutations import async_handler
from test_timer_runtime import runtime


@pytest.mark.parametrize('nested', [False, True])
async def test_settings_partial_saves_do_not_overwrite_each_other(runtime, nested):
    hass, _ = runtime
    coordinator = SimpleNamespace(async_reload=AsyncMock())
    hass.data[DOMAIN] = {'coordinator': coordinator}
    stored = {'theme': 'light', 'client_id': 'old', 'timer_alarm': {'global_music_timer': 'timer.mp3', 'global_music_alarm': 'alarm.mp3'}}
    first_patch = {'timer_alarm': {'global_music_timer': 'new-timer.mp3'}} if nested else {'theme': 'dark'}
    second_patch = {'timer_alarm': {'global_music_alarm': 'new-alarm.mp3'}} if nested else {'client_id': 'new'}
    expected = {'theme': 'light' if nested else 'dark', 'client_id': 'old' if nested else 'new',
                'timer_alarm': {'global_music_timer': 'new-timer.mp3' if nested else 'timer.mp3',
                                'global_music_alarm': 'new-alarm.mp3' if nested else 'alarm.mp3'}}
    entered, release = asyncio.Event(), asyncio.Event()
    writes = 0

    async def load(_hass):
        return deepcopy(stored)

    async def save(_hass, settings):
        nonlocal writes
        writes += 1
        if writes == 1:
            entered.set()
            await release.wait()
        stored.clear()
        stored.update(deepcopy(settings))

    connection = SimpleNamespace(send_result=Mock())
    tasks = []
    with (patch.object(api, 'async_load_settings', side_effect=load),
          patch.object(api, 'async_save_settings', side_effect=save),
          patch.object(api, 'get_cached_settings', side_effect=lambda _: deepcopy(stored))):
        try:
            async with asyncio.timeout(3):
                handler = async_handler(api._ws_save_settings)
                tasks.append(asyncio.create_task(handler(hass, connection, {'id': 1, 'data': first_patch})))
                await entered.wait()
                tasks.append(asyncio.create_task(handler(hass, connection, {'id': 2, 'data': second_patch})))
                await asyncio.sleep(0)
                release.set()
                await asyncio.gather(*tasks)
        finally:
            release.set()
            await asyncio.gather(*tasks, return_exceptions=True)
    assert stored == expected
    assert connection.send_result.call_args.args == (2, {'saved': True, 'settings': expected})
    assert coordinator.async_reload.await_count == 2


@pytest.mark.parametrize('missing_coordinator', [False, True])
async def test_reload_error_reports_saved_settings_without_rollback(runtime, missing_coordinator):
    from custom_components.ha_dialog_ui.storage import settings_storage

    hass, _ = runtime
    hass.data[DOMAIN] = {} if missing_coordinator else {'coordinator': SimpleNamespace(async_reload=AsyncMock(side_effect=RuntimeError('reload failed')))}
    reply = asyncio.get_running_loop().create_future()
    connection = SimpleNamespace(
        user=SimpleNamespace(is_admin=True), send_result=Mock(),
        send_error=Mock(side_effect=lambda *args: reply.set_result(args)),
        async_handle_exception=Mock(side_effect=lambda _msg, error: reply.set_exception(error)),
    )
    api._ws_save_settings(hass, connection, {'id': 42, 'data': {'theme': 'dark', 'client_id': 'new'}})
    result = await asyncio.wait_for(reply, 2)
    assert result[:2] == (42, 'reload_failed')
    assert result[2].startswith('Saved but reload failed')
    assert (await settings_storage.async_load_settings(hass))['client_id'] == 'new'
    assert settings_storage.get_cached_settings(hass)['theme'] == 'dark'
    connection.send_result.assert_not_called()
    connection.async_handle_exception.assert_not_called()
