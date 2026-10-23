"""Timer shutdown must finish cancellation cleanup before returning."""

import asyncio

from test_timer_runtime import runtime


async def test_stop_waits_for_real_countdown_task(runtime):
    _hass, manager = runtime
    manager._create_timer('timer', 'client', 'speaker', 120, False, 10)
    task = manager._timers['timer']['task']
    await asyncio.sleep(0)
    await manager.async_stop()
    assert task.done()
    assert manager.get_timer_items() == []
    assert not manager._notification_tasks


async def test_stop_waits_for_notification_cleanup(runtime):
    _hass, manager = runtime
    started, cleaned = asyncio.Event(), asyncio.Event()

    async def notification():
        try:
            started.set()
            await asyncio.Event().wait()
        finally:
            await asyncio.sleep(0)
            cleaned.set()
            manager._notification_tasks.discard(asyncio.current_task())

    task = asyncio.create_task(notification())
    manager._notification_tasks.add(task)
    try:
        await started.wait()
        await manager.async_stop()
        assert task.done()
        assert cleaned.is_set()
        assert not manager._notification_tasks
    finally:
        task.cancel()
        await asyncio.gather(task, return_exceptions=True)


async def test_stop_from_own_notification_does_not_cancel_or_wait_for_itself(runtime):
    _hass, manager = runtime

    async def notification():
        current = asyncio.current_task()
        manager._notification_tasks.add(current)
        try:
            async with asyncio.timeout(1):
                await manager.async_stop()
            await asyncio.sleep(0)
            return 'finished'
        finally:
            manager._notification_tasks.discard(current)

    assert await asyncio.create_task(notification()) == 'finished'
    assert not manager._notification_tasks


async def test_repeated_stop_is_safe_with_paused_timer(runtime):
    _hass, manager = runtime
    manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
    await manager.async_stop()
    await manager.async_stop()
    assert not manager._timers
    assert not manager._notification_tasks
