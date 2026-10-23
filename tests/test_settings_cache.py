"""Initial settings loads must not replace newer cache values after I/O."""

import asyncio
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.storage import settings_storage as storage
from test_timer_runtime import runtime


async def test_initial_read_does_not_overwrite_settings_saved_while_loading(runtime):
    hass, _ = runtime
    entered, release = asyncio.Event(), asyncio.Event()

    async def load(_hass):
        entered.set()
        await release.wait()
        return storage.normalize_settings({'theme': 'light', 'client_id': 'old'})

    task = None
    with patch.object(storage, 'async_load_settings', side_effect=load):
        try:
            async with asyncio.timeout(3):
                task = asyncio.create_task(storage.async_get_cached_settings(hass))
                await entered.wait()
                await storage.async_save_settings(hass, {'theme': 'dark', 'client_id': 'new'})
                release.set()
                result = await task
        finally:
            release.set()
            if task is not None:
                await asyncio.gather(task, return_exceptions=True)
    assert result['theme'] == 'dark'
    assert result['client_id'] == 'new'
    assert storage.get_cached_settings(hass)['client_id'] == 'new'
    assert (await storage.async_load_settings(hass))['client_id'] == 'new'


async def test_cached_settings_return_independent_nested_copy(runtime):
    hass, _ = runtime
    await storage.async_save_settings(hass, {'timer_alarm': {'global_music_timer': 'original.mp3'}})
    result = await storage.async_get_cached_settings(hass)
    result['timer_alarm']['global_music_timer'] = 'changed.mp3'
    assert storage.get_cached_settings(hass)['timer_alarm']['global_music_timer'] == 'original.mp3'
    assert (await storage.async_get_cached_settings(hass))['timer_alarm']['global_music_timer'] == 'original.mp3'


async def test_failed_initial_read_can_be_retried(runtime):
    hass, _ = runtime
    expected = storage.normalize_settings({'client_id': 'loaded'})
    with patch.object(storage, 'async_load_settings', new_callable=AsyncMock, side_effect=[OSError('read failed'), expected]) as load:
        with pytest.raises(OSError, match='read failed'):
            await storage.async_get_cached_settings(hass)
        assert (await storage.async_get_cached_settings(hass))['client_id'] == 'loaded'
        assert load.await_count == 2
