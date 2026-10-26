"""A duration timer has one bounded monotonic deadline for display and firing."""

import asyncio
from datetime import datetime, timedelta
from unittest.mock import AsyncMock, patch

import pytest
from test_timer_runtime import runtime as runtime  # noqa: PLC0414

from custom_components.ha_dialog_ui.timer_alarm import timer_manager as module
from custom_components.ha_dialog_ui.timer_alarm.timer_display import (
    latest_device_timers,
)


async def test_imported_remainder_never_exceeds_total(runtime):
    _, manager = runtime
    future = (datetime.now() + timedelta(seconds=300.9)).isoformat()
    await manager.apply_ui_items(
        {
            "new": {
                "id": "new",
                "deviceId": "speaker",
                "time": {
                    "count_timer": "00:05:00",
                    "total_seconds": 300,
                    "remaining_seconds": 301,
                    "date_end": future,
                },
            }
        }
    )
    entry = manager._timers["new"]
    assert entry["remaining_seconds"] <= 300
    assert manager.get_timer_items()[0]["time"]["remaining_seconds"] <= 300
    assert (
        latest_device_timers(manager.get_timer_items())["speaker"]["remaining_seconds"]
        <= 300
    )


async def test_wall_clock_adjustment_cannot_change_live_remainder(runtime):
    _, manager = runtime
    with patch.object(module, "monotonic", return_value=1000.0) as clock:
        manager._create_timer("two-hours", "client", "speaker", 7200, False)
        clock.return_value = 1600.0
        for delta in (-3600, 0, 7200):
            with patch.object(module, "datetime") as wall:
                wall.now.return_value = datetime.now() + timedelta(seconds=delta)
                assert manager.get_timer_items()[0]["time"]["remaining_seconds"] == 6600
        await manager._pause_timer("two-hours")
        assert manager._timers["two-hours"]["remaining_seconds"] == 6600


async def test_pause_resume_does_not_round_up_each_time(runtime):
    _, manager = runtime
    with patch.object(module, "monotonic", return_value=1000.0) as clock:
        manager._create_timer("timer", "client", "speaker", 300, False)
        for tick in (1000.2, 1000.4, 1000.6, 1000.8):
            clock.return_value = tick
            await manager._pause_timer("timer")
            await manager._resume_timer("timer")
            assert manager._timers["timer"]["deadline_monotonic"] == pytest.approx(
                1300.0
            )


async def test_delayed_task_waits_only_until_the_same_display_deadline(runtime):
    _, manager = runtime
    started, release = asyncio.Event(), asyncio.Event()
    delays = []

    async def sleep(delay):
        delays.append(delay)
        started.set()
        await release.wait()

    with (
        patch.object(module, "monotonic", return_value=1000.0) as clock,
        patch.object(module.asyncio, "sleep", side_effect=sleep),
        patch.object(module, "audio_notification", new_callable=AsyncMock) as sound,
    ):
        manager._create_timer("timer", "client", "speaker", 5, False)
        task = manager._timers["timer"]["task"]
        # Simulate the event loop beginning this task after a scheduling delay.
        clock.return_value = 1000.75
        await asyncio.wait_for(started.wait(), 1)
        assert delays == [4.25]
        clock.return_value = 1005.0
        assert manager.get_timer_items()[0]["time"]["remaining_seconds"] == 0
        release.set()
        await task
        sound.assert_awaited_once()
        assert not manager.get_timer_items()
