"""Response waiting on a real Home Assistant event bus."""
import asyncio
from unittest.mock import patch

import pytest
import pytest_asyncio
from homeassistant.core import EventBus, HomeAssistant, callback

from custom_components.ha_dialog_ui.const import EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE
from custom_components.ha_dialog_ui.src.service import dialog_events as runtime
from custom_components.ha_dialog_ui.src.service import dialog_state


@pytest_asyncio.fixture
async def runtime_bus(tmp_path, monkeypatch):
    hass = HomeAssistant(str(tmp_path))
    monkeypatch.setattr(dialog_state, 'CURRENT_HASS', hass)
    subscriptions = []
    original = EventBus.async_listen

    def track(bus, event_type, listener, *args, **kwargs):
        remove = original(bus, event_type, listener, *args, **kwargs)
        if event_type != EVENT_DIALOG_MESSAGE:
            return remove
        entry = {'active': True, 'removed': 0}
        subscriptions.append(entry)

        def unsubscribe():
            entry['active'] = False
            entry['removed'] += 1
            remove()
        return unsubscribe

    monkeypatch.setattr(EventBus, 'async_listen', track)
    yield hass, subscriptions
    await hass.async_stop()


def assert_unsubscribed(subscriptions, count):
    assert len(subscriptions) == count
    assert all(entry == {'active': False, 'removed': 1} for entry in subscriptions)


async def test_immediate_script_response_is_not_lost(runtime_bus):
    hass, subscriptions = runtime_bus
    sent = []
    response = {'client_id': 'client', 'device_id': 'device', 'data': {'answer': 'Готово'}}

    @callback
    def script(event):
        sent.append(event.data)
        assert subscriptions and subscriptions[-1]['active']
        hass.bus.async_fire(EVENT_DIALOG_MESSAGE, response)

    unsubscribe = hass.bus.async_listen(EVENT_ACTIVE_COMMAND, script)
    try:
        result = await asyncio.wait_for(runtime.request_script_response(hass, 'script_response', [{'id': 1}], 'client', 'device'), 1)
        assert result == response
        assert sent == [{'client_id': 'client', 'command_data': [{'id': 1}]}]
        assert_unsubscribed(subscriptions, 1)
    finally:
        unsubscribe()


async def test_wrong_client_or_device_does_not_complete_wait(runtime_bus):
    hass, subscriptions = runtime_bus
    task = asyncio.create_task(runtime.wait_for_script_response(hass, 'client', 'device'))
    try:
        await asyncio.sleep(0)
        for client, device in [('other', 'device'), ('client', 'other'), ('other', 'other')]:
            hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {'client_id': client, 'device_id': device})
        await hass.async_block_till_done()
        assert not task.done()
        expected = {'client_id': 'client', 'device_id': 'device', 'data': {}}
        # Repeated replies must not call set_result on a completed future.
        hass.bus.async_fire(EVENT_DIALOG_MESSAGE, expected)
        hass.bus.async_fire(EVENT_DIALOG_MESSAGE, expected)
        assert await asyncio.wait_for(task, 1) == expected
        assert_unsubscribed(subscriptions, 1)
    finally:
        task.cancel()
        await asyncio.gather(task, return_exceptions=True)


async def test_timeout_renews_and_removes_all_eight_subscriptions(runtime_bus):
    hass, subscriptions = runtime_bus
    real_wait_for = asyncio.wait_for
    intervals = []

    async def expire(future, timeout):
        intervals.append(timeout)
        return await real_wait_for(future, 0)

    with patch.object(runtime.asyncio, 'wait_for', side_effect=expire):
        assert await runtime.wait_for_script_response(hass, 'client', 'device') is None
    assert intervals == [1] * 8
    assert_unsubscribed(subscriptions, 8)


async def test_reply_after_subscription_renewal(runtime_bus):
    hass, subscriptions = runtime_bus
    real_wait_for = asyncio.wait_for
    expected = {'client_id': 'client', 'device_id': 'device'}
    attempts = 0

    async def expire_then_reply(future, timeout):
        nonlocal attempts
        attempts += 1
        if attempts == 1:
            return await real_wait_for(future, 0)
        assert subscriptions[0]['removed'] == 1
        hass.bus.async_fire(EVENT_DIALOG_MESSAGE, expected)
        return await real_wait_for(future, 1)

    with patch.object(runtime.asyncio, 'wait_for', side_effect=expire_then_reply):
        assert await runtime.wait_for_script_response(hass, 'client', 'device') == expected
    assert_unsubscribed(subscriptions, 2)


async def test_cancel_wait_removes_listener(runtime_bus):
    hass, subscriptions = runtime_bus
    task = asyncio.create_task(runtime.wait_for_script_response(hass, 'client', 'device'))
    await asyncio.sleep(0)
    assert subscriptions[0]['active']
    task.cancel()
    with pytest.raises(asyncio.CancelledError):
        await task
    assert_unsubscribed(subscriptions, 1)


@pytest.mark.parametrize('cancel_before_publish', [False, True])
async def test_cancel_request_removes_child_waiter(runtime_bus, cancel_before_publish):
    hass, subscriptions = runtime_bus
    task = asyncio.create_task(runtime.request_script_response(hass, 'script_response', [], 'client', 'device'))
    await asyncio.sleep(0)
    if not cancel_before_publish:
        await asyncio.sleep(0)
    task.cancel()
    try:
        with pytest.raises(asyncio.CancelledError):
            await task
        await asyncio.sleep(0)
        assert_unsubscribed(subscriptions, 1)
    finally:
        # Clean up leaked tasks even when checking the old implementation.
        children = [t for t in asyncio.all_tasks() if t.get_coro().__qualname__ == 'wait_for_script_response']
        for child in children:
            child.cancel()
        await asyncio.gather(*children, return_exceptions=True)


async def test_publish_error_removes_child_waiter(runtime_bus):
    hass, subscriptions = runtime_bus
    with patch.object(runtime, 'publish_command_event', side_effect=RuntimeError('publish failed')):
        with pytest.raises(RuntimeError, match='publish failed'):
            await runtime.request_script_response(hass, 'script_response', [], 'client', 'device')
    assert_unsubscribed(subscriptions, 1)


async def test_published_command_has_one_canonical_contract(runtime_bus):
    from copy import deepcopy
    hass, _ = runtime_bus
    received = []
    @callback
    def capture(event):
        received.append(event.data)
    unsubscribe = hass.bus.async_listen(EVENT_ACTIVE_COMMAND, capture)
    node = {'uuid': '5j78-5fs3-x8so-0e3e'}
    payload = runtime.build_command_data('', 'hi', {'commands': 'привет'}, 'client', 'device', [], True, command_node=node)
    before = deepcopy(payload)
    try:
        runtime.publish_command_event(hass, 'client', [payload])
        await hass.async_block_till_done()
        assert received == [{'client_id': 'client', 'command_data': [{
            'command_id': node['uuid'], 'continuation_id': None, 'text': 'привет',
            'client_id': 'client', 'device_id': 'device', 'direct_values': [], 'is_main_command': True,
        }]}]
        assert payload == before
    finally:
        unsubscribe()
