"""HTTP view contracts and event broker cleanup."""
import asyncio
import json
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
import pytest_asyncio
from homeassistant.core import HomeAssistant, callback

from custom_components.ha_dialog_ui.http import dialog_http as http
from custom_components.ha_dialog_ui.const import EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE


def request(payload=None, token='test-token', error=None, query=None):
    return SimpleNamespace(headers={'Authorization': f'Bearer {token}'}, query=query or {},
                           json=AsyncMock(return_value=payload, side_effect=error))


@pytest_asyncio.fixture
async def runtime(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    options = {'api_commands_enabled': True, 'api_commands_token': 'test-token', 'client_id': 'configured'}
    with (
        patch.object(http, 'get_integration_entry', return_value=object()) as get_entry,
        patch.object(http, 'get_cached_settings', return_value={}),
        patch.object(http, 'build_runtime_options', return_value=options),
        patch.object(http, 'set_current_hass'),
    ):
        yield SimpleNamespace(hass=hass, options=options, get_entry=get_entry)
        await hass.async_stop()


@pytest.mark.parametrize(('enabled', 'configured_token', 'header', 'expected'), [
    (True, 'test-token', 'Bearer test-token', True),
    (False, 'test-token', 'Bearer test-token', False),
    (True, '', 'Bearer ', False), (True, 'test-token', 'Bearer wrong', False),
    (True, 'test-token', 'bearer test-token', False), (True, 'test-token', '', False),
])
def test_authorization_contract(runtime, enabled, configured_token, header, expected):
    runtime.options.update(api_commands_enabled=enabled, api_commands_token=configured_token)
    req = request()
    req.headers['Authorization'] = header
    assert http._is_authorized(req, runtime.hass) is expected


async def test_missing_entry_is_unauthorized(runtime):
    runtime.get_entry.return_value = None
    result = await http.DialogCommandsView(runtime.hass).post(request({}))
    assert result.status == 401


@pytest.mark.parametrize(('payload', 'command', 'client', 'device', 'new_session'), [
    ({'text': ' привет ', 'clientId': ' c ', 'deviceId': ' d '}, 'привет', 'c', 'd', True),
    ({'utterance': 'hello', 'userId': 'c', 'applicationId': 'd', 'new_session': False}, 'hello', 'c', 'd', False),
    ({'request': {'command': 'nested'}, 'command': 'outer', 'new': False}, 'nested', 'configured', '', False),
    ({'command': 'first', 'text': 'second'}, 'first', 'configured', '', True),
])
def test_flat_command_aliases_keep_precedence(payload, command, client, device, new_session):
    result = http._build_dialog_request_payload(payload, {'client_id': 'configured'})
    assert result['request'] == {'command': command}
    assert result['session']['user']['user_id'] == client
    assert result['session']['application']['application_id'] == device
    assert result['session']['new'] is new_session
    assert result['version'] == '1.0'


def test_canonical_request_is_forwarded_unchanged():
    payload = {'request': {'command': 'text'}, 'session': {'new': False}, 'custom': True}
    assert http._build_dialog_request_payload(payload, {}) is payload


async def test_command_view_returns_existing_response_envelope(runtime):
    answer = {'text': 'Готово', 'end_session': True}
    with patch.object(http.dialog_service, 'process_dialog_request', new_callable=AsyncMock, return_value=answer) as process:
        result = await http.DialogCommandsView(runtime.hass).post(request({'text': 'привет', 'device_id': 'd'}))
    assert result.status == 200
    assert json.loads(result.text) == {'response': answer, 'version': '1.0'}
    assert process.await_args.args[0]['session']['application']['application_id'] == 'd'


@pytest.mark.parametrize(('payload', 'error', 'expected'), [
    (None, ValueError('invalid'), 'invalid_json'), ([], None, 'invalid_payload'), ('text', None, 'invalid_payload'),
])
async def test_command_view_rejects_bad_body(runtime, payload, error, expected):
    with patch.object(http.dialog_service, 'process_dialog_request', new_callable=AsyncMock) as process:
        result = await http.DialogCommandsView(runtime.hass).post(request(payload, error=error))
    assert result.status == 400
    assert json.loads(result.text) == {'error': expected}
    process.assert_not_awaited()


async def test_command_failure_returns_500(runtime):
    with patch.object(http.dialog_service, 'process_dialog_request', new_callable=AsyncMock, side_effect=RuntimeError('failed')):
        result = await http.DialogCommandsView(runtime.hass).post(request({'text': 'hello'}))
    assert result.status == 500
    assert json.loads(result.text) == {'error': 'failed'}


@pytest.mark.parametrize('view_type', [http.DialogEventsView, http.DialogEventView])
async def test_event_post_normalizes_ids_and_publishes_on_real_bus(runtime, view_type):
    received = []

    @callback
    def receive(event):
        received.append(event.data)

    unsubscribe = runtime.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, receive)
    try:
        result = await view_type(runtime.hass, http.DialogEventBroker(runtime.hass)).post(request({
            'event': 'dialog_message', 'data': {'clientId': 'client', 'deviceId': 'device'}}))
        await runtime.hass.async_block_till_done()
        assert result.status == 200
        assert json.loads(result.text) == {'accepted': True, 'event': EVENT_DIALOG_MESSAGE}
        assert received == [{'clientId': 'client', 'deviceId': 'device', 'client_id': 'client', 'device_id': 'device'}]
    finally:
        unsubscribe()


@pytest.mark.parametrize(('payload', 'error', 'status', 'code'), [
    ({}, None, 400, 'unsupported_event'), (None, ValueError(), 400, 'invalid_json'),
])
async def test_event_post_rejects_bad_body(runtime, payload, error, status, code):
    result = await http.DialogEventsView(runtime.hass, http.DialogEventBroker(runtime.hass)).post(request(payload, error=error))
    assert result.status == status
    assert json.loads(result.text) == {'error': code}


async def test_broker_start_is_idempotent_and_removed_queues_do_not_receive(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    broker.async_start()
    broker.async_start()
    queue = broker.async_add_queue()
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, {'client_id': 'client'})
    await runtime.hass.async_block_till_done()
    assert queue.qsize() == 1
    assert queue.get_nowait() == {'event': EVENT_ACTIVE_COMMAND, 'data': {'client_id': 'client'}}
    broker.async_remove_queue(queue)
    broker.async_remove_queue(queue)
    runtime.hass.bus.async_fire(EVENT_ACTIVE_COMMAND, {})
    await runtime.hass.async_block_till_done()
    assert queue.empty()


async def test_full_queue_does_not_prevent_delivery_to_other_subscribers(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    full, available = broker.async_add_queue(), broker.async_add_queue()
    for _ in range(full.maxsize):
        full.put_nowait({})
    broker._handle_event(SimpleNamespace(event_type=EVENT_DIALOG_MESSAGE, data={'client_id': 'client'}))
    assert full not in broker._queues
    assert available.get_nowait()['data'] == {'client_id': 'client'}


async def test_stream_cancellation_removes_queue(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    response = SimpleNamespace(prepare=AsyncMock(), write=AsyncMock())
    with patch.object(http.web, 'StreamResponse', return_value=response):
        task = asyncio.create_task(http.DialogEventsView(runtime.hass, broker).get(request()))
        await asyncio.sleep(0)
        assert len(broker._queues) == 1
        task.cancel()
        with pytest.raises(asyncio.CancelledError):
            await task
    assert not broker._queues


async def test_prepare_failure_removes_queue(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    response = SimpleNamespace(prepare=AsyncMock(side_effect=ConnectionError('closed')))
    with patch.object(http.web, 'StreamResponse', return_value=response):
        with pytest.raises(ConnectionError):
            await http.DialogEventsView(runtime.hass, broker).get(request())
    assert not broker._queues


async def test_sse_filters_client_and_preserves_wire_format(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    written = []
    delivered = asyncio.Event()

    async def write(chunk):
        written.append(chunk)
        if len(written) == 2:
            delivered.set()

    response = SimpleNamespace(prepare=AsyncMock(), write=AsyncMock(side_effect=write))
    with patch.object(http.web, 'StreamResponse', return_value=response):
        task = asyncio.create_task(http.DialogEventsView(runtime.hass, broker).get(request(query={'clientId': 'client'})))
        try:
            await asyncio.sleep(0)
            broker._handle_event(SimpleNamespace(event_type=EVENT_DIALOG_MESSAGE, data={'client_id': 'other'}))
            broker._handle_event(SimpleNamespace(event_type=EVENT_DIALOG_MESSAGE, data={'client_id': 'client', 'text': 'Привет'}))
            await asyncio.wait_for(delivered.wait(), 1)
            assert written[0] == f'event: {EVENT_DIALOG_MESSAGE}\n'.encode()
            assert written[1].startswith(b'data: ') and written[1].endswith(b'\n\n')
            assert json.loads(written[1][6:]) == {'event': EVENT_DIALOG_MESSAGE, 'data': {'client_id': 'client', 'text': 'Привет'}}
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)
    assert not broker._queues


async def test_idle_stream_sends_keepalive_and_cleans_up(runtime, monkeypatch):
    monkeypatch.setattr(http, '_KEEPALIVE_SECONDS', 0.001)
    broker = http.DialogEventBroker(runtime.hass)
    sent = asyncio.Event()

    async def write(chunk):
        assert chunk == b': keepalive\n\n'
        sent.set()

    response = SimpleNamespace(prepare=AsyncMock(), write=AsyncMock(side_effect=write))
    with patch.object(http.web, 'StreamResponse', return_value=response):
        task = asyncio.create_task(http.DialogEventsView(runtime.hass, broker).get(request()))
        try:
            await asyncio.wait_for(sent.wait(), 1)
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)
    assert not broker._queues


def test_auth_failure_does_not_log_token_fragments(runtime, caplog):
    with caplog.at_level('DEBUG', logger=http.__name__):
        assert not http._is_authorized(request(token='provided-secret'), runtime.hass)
    assert 'provided-secret' not in caplog.text
    assert 'test-token' not in caplog.text


async def test_http_registration_is_idempotent(runtime):
    registered = []
    hass = SimpleNamespace(data={}, bus=runtime.hass.bus,
                           http=SimpleNamespace(register_view=registered.append))
    http.async_register_dialog_http(hass)
    http.async_register_dialog_http(hass)
    assert [view.url for view in registered] == ['/api/dialog/commands', '/api/dialog/events', '/api/dialog/event']


async def test_disconnected_sse_write_removes_queue(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    response = SimpleNamespace(prepare=AsyncMock(), write=AsyncMock(side_effect=ConnectionError('closed')))
    with patch.object(http.web, 'StreamResponse', return_value=response):
        task = asyncio.create_task(http.DialogEventsView(runtime.hass, broker).get(request()))
        try:
            await asyncio.sleep(0)
            broker._handle_event(SimpleNamespace(event_type=EVENT_DIALOG_MESSAGE, data={}))
            with pytest.raises(ConnectionError):
                await asyncio.wait_for(task, 1)
        finally:
            task.cancel()
            await asyncio.gather(task, return_exceptions=True)
    assert not broker._queues
