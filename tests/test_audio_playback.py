"""Notification volume cleanup on completion, errors and cancellation."""
import asyncio
import importlib
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
import pytest_asyncio

module = importlib.import_module('custom_components.ha_dialog_ui.audio.audio_notification')
TARGET = 'media_player.speaker'


@pytest_asyncio.fixture
async def runtime():
    tasks = []

    def create_task(coro):
        task = asyncio.create_task(coro)
        tasks.append(task)
        return task

    hass = SimpleNamespace(states=SimpleNamespace(get=lambda _: SimpleNamespace(state='playing', attributes={'volume_level': 0.5})),
                           services=SimpleNamespace(async_call=AsyncMock()), async_create_task=create_task)
    with patch.object(module, '_resolve_media_player_entity_id', return_value=TARGET), patch.object(module, 'async_start_firmware_alert', new_callable=AsyncMock, return_value=False):
        yield SimpleNamespace(hass=hass, tasks=tasks)
        for task in tasks:
            task.cancel()
        await asyncio.gather(*tasks, return_exceptions=True)


def volumes(runtime):
    return [call.args[2]['volume_level'] for call in runtime.hass.services.async_call.await_args_list if call.args[1] == 'volume_set']


async def test_waiting_notification_restores_volume_once(runtime):
    with patch.object(module, '_async_wait_until_finished', new_callable=AsyncMock) as wait:
        await module.audio_notification(runtime.hass, 'device', 'sound.mp3', 0.2, wait_until_finished=True)
    assert volumes(runtime) == [0.2, 0.5]
    wait.assert_awaited_once_with(runtime.hass, TARGET)
    assert [call.args[1] for call in runtime.hass.services.async_call.await_args_list] == ['volume_set', 'play_media', 'volume_set']


async def test_play_error_restores_previous_volume(runtime):
    async def service(domain, name, *_args, **_kwargs):
        if name == 'play_media':
            raise RuntimeError('missing file')

    runtime.hass.services.async_call.side_effect = service
    await module.audio_notification(runtime.hass, 'device', 'missing.mp3', 0.2, wait_until_finished=True)
    assert volumes(runtime) == [0.2, 0.5]


async def test_cancelled_wait_restores_volume(runtime):
    started = asyncio.Event()

    async def wait(*_):
        started.set()
        await asyncio.Event().wait()

    with patch.object(module, '_async_wait_until_finished', side_effect=wait):
        task = asyncio.create_task(module.audio_notification(runtime.hass, 'device', 'sound.mp3', 0.2, wait_until_finished=True))
        await asyncio.wait_for(started.wait(), 1)
        task.cancel()
        with pytest.raises(asyncio.CancelledError):
            await task
    assert volumes(runtime) == [0.2, 0.5]


@pytest.mark.parametrize('wait_until_finished', [False, True])
async def test_volume_ramp_stops_before_restoration(runtime, wait_until_finished):
    ramp_started, ramp_stopped, finished = asyncio.Event(), asyncio.Event(), asyncio.Event()

    async def ramp(*_):
        ramp_started.set()
        try:
            await asyncio.Event().wait()
        finally:
            ramp_stopped.set()

    async def wait(*_):
        await ramp_started.wait()
        await finished.wait()

    async def service(domain, name, data, **kwargs):
        if name == 'volume_set' and data['volume_level'] == 0.5:
            assert ramp_stopped.is_set()

    runtime.hass.services.async_call.side_effect = service
    with (
        patch.object(module, '_async_ramp_volume', side_effect=ramp),
        patch.object(module, '_async_wait_until_finished', side_effect=wait),
    ):
        task = asyncio.create_task(module.audio_notification(runtime.hass, 'device', 'sound.mp3', '0.2-0.8', wait_until_finished=wait_until_finished))
        try:
            await asyncio.wait_for(ramp_started.wait(), 1)
            finished.set()
            await asyncio.wait_for(task, 1)
            # All volume-related child tasks must terminate after playback.
            await asyncio.wait_for(asyncio.gather(*runtime.tasks, return_exceptions=True), 1)
            assert ramp_stopped.is_set()
            assert volumes(runtime) == [0.2, 0.5]
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)


@pytest.mark.parametrize('state', [None, 'idle', 'off', 'paused'])
async def test_ramp_exits_without_changing_stopped_player(runtime, state):
    runtime.hass.states.get = lambda _: SimpleNamespace(state=state) if state else None
    with patch.object(module.asyncio, 'sleep', new_callable=AsyncMock):
        await module._async_ramp_volume(runtime.hass, TARGET, 0.2, 0.8)
    runtime.hass.services.async_call.assert_not_awaited()


@pytest.mark.parametrize('states', [['idle', 'playing', 'idle'], ['unavailable', 'unknown'], [None]])
async def test_waiter_handles_delayed_start_and_terminal_states(runtime, states):
    sequence = iter(states)
    runtime.hass.states.get = lambda _: SimpleNamespace(state=value) if (value := next(sequence)) else None
    with patch.object(module.asyncio, 'sleep', new_callable=AsyncMock):
        await module._async_wait_until_finished(runtime.hass, TARGET, check_interval=1, start_timeout=2)


async def test_cancelling_ranged_notification_stops_ramp_before_restoring(runtime):
    started, stopped = asyncio.Event(), asyncio.Event()

    async def ramp(*_):
        started.set()
        try:
            await asyncio.Event().wait()
        finally:
            stopped.set()

    async def wait(*_):
        await asyncio.Event().wait()

    with (
        patch.object(module, '_async_ramp_volume', side_effect=ramp),
        patch.object(module, '_async_wait_until_finished', side_effect=wait),
    ):
        task = asyncio.create_task(module.audio_notification(runtime.hass, 'device', 'sound.mp3', '0.2-0.8', wait_until_finished=True))
        await asyncio.wait_for(started.wait(), 1)
        task.cancel()
        with pytest.raises(asyncio.CancelledError):
            await task
    assert stopped.is_set()
    assert volumes(runtime) == [0.2, 0.5]


async def test_ramp_is_cleaned_up_even_without_previous_volume(runtime):
    runtime.hass.states.get = lambda _: SimpleNamespace(state='playing', attributes={})
    started, stopped, finished = asyncio.Event(), asyncio.Event(), asyncio.Event()

    async def ramp(*_):
        started.set()
        try:
            await asyncio.Event().wait()
        finally:
            stopped.set()

    async def wait(*_):
        await started.wait()
        await finished.wait()

    with (
        patch.object(module, '_async_ramp_volume', side_effect=ramp),
        patch.object(module, '_async_wait_until_finished', side_effect=wait),
    ):
        await module.audio_notification(runtime.hass, 'device', 'sound.mp3', '0.2-0.8')
        await asyncio.wait_for(started.wait(), 1)
        finished.set()
        await asyncio.wait_for(asyncio.gather(*runtime.tasks, return_exceptions=True), 1)
    assert stopped.is_set()
    assert volumes(runtime) == [0.2]
