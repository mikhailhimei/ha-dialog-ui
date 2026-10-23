"""Pause/resume cancellation races and device-scoped command selection."""

import asyncio

from test_timer_runtime import runtime


async def test_immediate_pause_resume_preserves_new_task_and_creation_metadata(runtime):
    hass, manager = runtime
    manager._create_timer('timer', 'client', 'speaker', 120, False, 10)
    entry = manager._timers['timer']
    old_task = entry['task']
    await asyncio.sleep(0)
    await manager._pause_timer('timer')
    await manager._resume_timer('timer')
    new_task = entry['task']
    await hass.async_block_till_done()
    assert old_task.done()
    assert new_task is not old_task
    assert entry['task'] is new_task
    assert not new_task.done()
    assert (entry['created_at'], entry['total_seconds']) == (10, 120)


async def test_repeated_resume_does_not_restart_running_timer(runtime):
    _hass, manager = runtime
    manager._create_timer('timer', 'client', 'speaker', 120, True, 10)
    await manager._resume_timer('timer')
    entry = manager._timers['timer']
    task, deadline = entry['task'], entry['ends_at']
    await manager._resume_timer('timer')
    assert entry['task'] is task
    assert entry['ends_at'] == deadline


async def test_repeated_pause_does_not_recompute_frozen_remaining_time(runtime):
    _hass, manager = runtime
    manager._create_timer('timer', 'client', 'speaker', 120, False, 10)
    await manager._pause_timer('timer')
    entry = manager._timers['timer']
    entry['remaining_seconds'] = 30
    await manager._pause_timer('timer')
    assert entry['remaining_seconds'] == 30
    assert entry['task'] is None
    assert entry['paused']


async def test_voice_pause_resume_selects_latest_timer_only_on_requested_device(runtime):
    _hass, manager = runtime
    for name, client, device, created in [
        ('older', 'client', 'speaker-a', 10), ('newer', 'client', 'speaker-a', 20),
        ('other-speaker', 'client', 'speaker-b', 30), ('other-client', 'other', 'speaker-a', 40),
    ]:
        manager._create_timer(name, client, device, 120, False, created)
    await manager.async_handle_timer_pause('client', 'speaker-a', None, False)
    assert [name for name, item in manager._timers.items() if item['paused']] == ['newer']
    await manager.async_handle_timer_resume('client', 'speaker-a', None)
    assert all(not item['paused'] for item in manager._timers.values())
