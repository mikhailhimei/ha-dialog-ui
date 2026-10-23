"""Remote protocol compatibility and background task ownership."""
import asyncio
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
import pytest_asyncio
from homeassistant.core import Event, HomeAssistant, callback

from custom_components.ha_dialog_ui.http import external_event_bridge as module
from custom_components.ha_dialog_ui.const import EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE


@pytest.mark.parametrize(('value', 'expected'), [
    (' ha.local/ ', 'http://ha.local'), ('https://ha.local/', 'https://ha.local'), (None, ''),
])
def test_base_url_compatibility(value, expected):
    assert module._normalize_base_url(value) == expected


@pytest.mark.parametrize(('url', 'client', 'expected'), [
    ('https://ha', 'c', 'https://ha/api/dialog/events?clientId=c'),
    ('https://ha/api/custom?x=1', 'a b', 'https://ha/api/custom?x=1&clientId=a+b'),
    ('https://ha/sse', '', 'https://ha/sse'),
])
def test_stream_url_preserves_explicit_endpoint(url, client, expected):
    assert module._build_stream_url(url, client) == expected


@pytest.mark.parametrize(('payload', 'event_type', 'data'), [
    ({'event': 'active_command', 'data': {'commandData': []}}, EVENT_ACTIVE_COMMAND, {'commandData': []}),
    ({'type': 'dialog_command', 'data': '{"deviceId":"d"}'}, EVENT_DIALOG_MESSAGE, {'deviceId': 'd'}),
    ({'command_data': []}, EVENT_ACTIVE_COMMAND, {'command_data': []}),
    ({'clientId': 'c', 'deviceId': 'd'}, EVENT_DIALOG_MESSAGE, {'clientId': 'c', 'deviceId': 'd'}),
    ({}, None, None), ([], None, None),
])
def test_protocol_aliases_and_inferred_extract_event_type(payload, event_type, data):
    assert module._extract_event_data(payload) == ((event_type, data) if event_type else None)


@pytest_asyncio.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    session = SimpleNamespace(get=Mock(), post=Mock())
    options = {'base_url': 'https://remote', 'client_id': 'client', 'remote_token': 'Bearer example-token'}
    logs = Mock()
    with (
        patch.object(module, 'async_get_clientsession', return_value=session),
        patch.object(module, 'get_cached_settings', return_value={}),
        patch.object(module, 'build_runtime_options', return_value=options),
    ):
        bridge = module.ExternalEventBridge(hass, SimpleNamespace(options={}), logs)
        bridge._session = session
        yield SimpleNamespace(hass=hass, bridge=bridge, session=session, options=options, logs=logs)
        await bridge.async_stop()
        await hass.async_stop()


class ResponseContext:
    def __init__(self, response):
        self.response = response
        self.closed = False

    async def __aenter__(self):
        return self.response

    async def __aexit__(self, *_):
        self.closed = True


async def lines(values):
    for value in values:
        yield value


@pytest.mark.parametrize('content_type', ['text/event-stream', 'application/x-ndjson', 'application/json'])
async def test_stream_formats_publish_same_normalized_event(runtime, content_type):
    data = {'clientId': 'client', 'deviceId': 'device'}
    payload = {'event': 'dialog_message', 'data': data}
    raw_lines = ([b': keepalive\n', b'event: dialog_message\n', b'data: {"clientId":"client",\n',
                  b'data: "deviceId":"device"}\n'] if content_type == 'text/event-stream'
                 else [b'{"event":"dialog_message","data":{"clientId":"client","deviceId":"device"}}\n'])
    response = SimpleNamespace(headers={'Content-Type': content_type}, raise_for_status=Mock(),
                               json=AsyncMock(return_value=payload), content=lines(raw_lines))
    context = ResponseContext(response)
    runtime.session.get.return_value = context
    received = []

    @callback
    def receive(event):
        received.append(event.data)

    unsubscribescribe = runtime.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, receive)
    try:
        await runtime.bridge._consume_stream('https://remote/events', {})
        await runtime.hass.async_block_till_done()
        assert received == [{**data, 'client_id': 'client', 'device_id': 'device', 'origin': module._ORIGIN_EXTERNAL_BRIDGE}]
        assert context.closed
    finally:
        unsubscribescribe()


async def test_post_keeps_authorization_header_and_device_metadata(runtime):
    context = ResponseContext(SimpleNamespace(status=200))
    runtime.session.post.return_value = context
    data = {'clientId': 'client', 'deviceId': 'device'}
    before = deepcopy(data)
    await runtime.bridge._post_outbound_event(EVENT_DIALOG_MESSAGE, data)
    runtime.session.post.assert_called_once_with('https://remote/api/dialog/events', json={
        'event': EVENT_DIALOG_MESSAGE, 'clientId': 'client', 'data': {
            **data, 'client_id': 'client', 'device_id': 'device', 'origin': module._ORIGIN_EXTERNAL_BRIDGE}},
        headers={'Content-Type': 'application/json', 'Authorization': 'Bearer example-token'})
    assert data == before
    assert context.closed


async def test_inbound_origin_prevents_forwarding_loop(runtime):
    with patch.object(runtime.bridge, '_post_outbound_event', new_callable=AsyncMock) as post:
        await runtime.bridge.async_start(listen_external_active_commands=False, forward_dialog_messages=True)
        runtime.bridge._publish_inbound_payload({'event': 'dialog_message', 'data': {'clientId': 'client', 'deviceId': 'device'}})
        await runtime.hass.async_block_till_done()
        post.assert_not_awaited()
        runtime.hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {'client_id': 'client', 'device_id': 'device'})
        await runtime.hass.async_block_till_done()
        post.assert_awaited_once()


async def test_stream_wait_does_not_block_homeassistant_settling(runtime):
    started = asyncio.Event()

    async def listen():
        started.set()
        await asyncio.Event().wait()

    with patch.object(runtime.bridge, '_listen_with_reconnect', side_effect=listen):
        await runtime.bridge.async_start()
        await asyncio.wait_for(started.wait(), 1)
        await asyncio.wait_for(runtime.hass.async_block_till_done(), 0.2)


async def test_stop_cancels_pending_outbound_posts(runtime):
    started, finished = asyncio.Event(), asyncio.Event()

    async def post(*_):
        started.set()
        try:
            await asyncio.Event().wait()
        finally:
            finished.set()

    with patch.object(runtime.bridge, '_post_outbound_event', side_effect=post):
        await runtime.bridge.async_start(listen_external_active_commands=False)
        runtime.hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {'client_id': 'client'})
        await asyncio.wait_for(started.wait(), 1)
        await runtime.bridge.async_stop()
        assert finished.is_set()
        await runtime.bridge.async_stop()


async def test_reconnect_uses_latest_settings_after_failure(runtime):
    attempts = []

    async def consume(url, headers):
        attempts.append((url, headers))
        if len(attempts) == 1:
            runtime.options.update(base_url='https://changed', client_id='new-client')
            raise OSError('disconnected')
        runtime.bridge._stopping = True

    with (
        patch.object(runtime.bridge, '_consume_stream', side_effect=consume),
        patch.object(module.asyncio, 'sleep', new_callable=AsyncMock) as sleep,
    ):
        await runtime.bridge._listen_with_reconnect()
    assert attempts == [
        ('https://remote/api/dialog/events?clientId=client', {'Accept': 'text/event-stream, application/x-ndjson, application/json', 'Authorization': 'Bearer example-token'}),
        ('https://changed/api/dialog/events?clientId=new-client', {'Accept': 'text/event-stream, application/x-ndjson, application/json', 'Authorization': 'Bearer example-token'}),
    ]
    sleep.assert_awaited_once_with(module._RECONNECT_DELAY_SECONDS)


async def test_cancelling_stream_closes_response_context(runtime):
    started = asyncio.Event()

    async def content():
        started.set()
        await asyncio.Event().wait()
        yield b''

    response = SimpleNamespace(headers={'Content-Type': 'text/event-stream'}, raise_for_status=Mock(), content=content())
    context = ResponseContext(response)
    runtime.session.get.return_value = context
    task = asyncio.create_task(runtime.bridge._consume_stream('https://remote/events', {}))
    await asyncio.wait_for(started.wait(), 1)
    task.cancel()
    with pytest.raises(asyncio.CancelledError):
        await task
    assert context.closed


@pytest.mark.parametrize('http_error', [False, True])
async def test_post_failures_are_logged_and_do_not_escape(runtime, http_error):
    if http_error:
        runtime.session.post.return_value = ResponseContext(SimpleNamespace(
            status=503, text=AsyncMock(return_value='unavailable'), history=(), headers={},
            request_info=SimpleNamespace(real_url='https://remote')))
    else:
        runtime.session.post.side_effect = module.aiohttp.ClientError('failed')
    await runtime.bridge._post_outbound_event(EVENT_DIALOG_MESSAGE, {'client_id': 'client'})
    assert runtime.logs.call_args.args[0] == 'error'


@pytest.mark.parametrize('listen', [False, True])
async def test_disabled_or_unconfigured_bridge_does_not_acquire_session(runtime, listen):
    runtime.bridge._session = None
    runtime.options['base_url'] = ''
    await runtime.bridge.async_start(listen_external_active_commands=listen, forward_dialog_messages=False)
    module.async_get_clientsession.assert_not_called()


async def test_repeated_start_does_not_duplicate_forwarding(runtime):
    with patch.object(runtime.bridge, '_post_outbound_event', new_callable=AsyncMock) as post:
        for _ in range(2):
            await runtime.bridge.async_start(listen_external_active_commands=False)
        runtime.hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {'client_id': 'client'})
        await runtime.hass.async_block_till_done()
        post.assert_awaited_once()
        assert not runtime.bridge._outbound_tasks
        await runtime.bridge.async_stop()
        runtime.hass.bus.async_fire(EVENT_DIALOG_MESSAGE, {'client_id': 'client'})
        await runtime.hass.async_block_till_done()
        post.assert_awaited_once()
