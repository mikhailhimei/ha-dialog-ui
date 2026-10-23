"""Alarm tick shutdown and callbacks that stop their own manager."""

import asyncio
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.timer_alarm.alarm_manager import DialogAlarmManager
from test_timer_runtime import runtime


@pytest.fixture
async def alarms(runtime):
    hass, _ = runtime
    manager = DialogAlarmManager(hass, lambda: None, lambda: 'alarm.mp3')
    yield manager
    await manager.async_stop()


async def test_stop_waits_for_tick_cleanup(alarms):
    started, cleaned = asyncio.Event(), asyncio.Event()

    async def tick():
        try:
            started.set()
            await asyncio.Event().wait()
        finally:
            await asyncio.sleep(0)
            cleaned.set()

    with patch.object(alarms, '_alarm_tick_once', side_effect=tick):
        alarms._ensure_alarm_tick_task()
        task = alarms._alarm_tick_task
        await started.wait()
        await alarms.async_stop()
        assert task.done()
        assert cleaned.is_set()
        assert alarms._alarm_tick_task is None


async def test_stop_from_tick_finishes_loop_without_orphan(alarms):
    stopped = asyncio.Event()

    async def tick():
        await alarms.async_stop()
        stopped.set()

    with patch.object(alarms, '_alarm_tick_once', side_effect=tick) as check:
        alarms._ensure_alarm_tick_task()
        task = alarms._alarm_tick_task
        try:
            async with asyncio.timeout(0.5):
                await stopped.wait()
                await task
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)
        assert task.done()
        assert not task.cancelled()
        check.assert_awaited_once()
        assert alarms._alarm_tick_task is None


async def test_repeated_stop_and_restart_create_a_new_tick_task(alarms):
    with patch.object(alarms, '_alarm_tick_once', new_callable=AsyncMock):
        alarms._ensure_alarm_tick_task()
        first = alarms._alarm_tick_task
        await alarms.async_stop()
        await alarms.async_stop()
        alarms._ensure_alarm_tick_task()
        second = alarms._alarm_tick_task
        assert second is not first
        assert first.done()
        assert not second.done()
        await alarms.async_stop()
        assert second.done()
