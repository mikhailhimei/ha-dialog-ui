"""API diagnostics include failures and SSE, but never credentials or bodies."""
import asyncio
import inspect
import json
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
from homeassistant.exceptions import Unauthorized
from custom_components.ha_dialog_ui.const import DOMAIN, EVENT_DIALOG_MESSAGE
from custom_components.ha_dialog_ui.http import api_logs
from custom_components.ha_dialog_ui.src.api import logs_api
from test_dialog_http import runtime, request, http


def entries(hass):
    return list(hass.data.get(DOMAIN, {}).get('api_logs', []))


@pytest.mark.parametrize('view_type', [http.DialogCommandsView, http.DialogEventsView, http.DialogEventView])
async def test_records_auth_failures_without_secrets(runtime, view_type):
    req = request({'password': 'body-secret'}, token='header-secret', query={'token': 'query-secret'})
    with patch.object(api_logs, 'get_cached_settings', return_value={'api_commands_enabled': True, 'api_commands_token': 'test-token'}):
        result = await view_type(runtime.hass, http.DialogEventBroker(runtime.hass)).post(req) if view_type is not http.DialogCommandsView else await view_type(runtime.hass).post(req)
    assert result.status == 401
    log = entries(runtime.hass)[0]
    assert log['path'] == view_type.url
    assert log['status'] == 401 and log['method'] == 'POST'
    assert log['duration_ms'] >= 0
    assert 'secret' not in json.dumps(log)
    req.json.assert_not_called()


async def test_logs_success_bad_json_and_server_failure(runtime):
    with patch.object(api_logs, 'get_cached_settings', return_value={'api_commands_enabled': True, 'api_commands_token': 'test-token'}):
        view = http.DialogCommandsView(runtime.hass)
        with patch.object(http.dialog_service, 'process_dialog_request', AsyncMock(return_value={'text': 'ok'})):
            assert (await view.post(request({'text': 'hello'}))).status == 200
        assert (await view.post(request(error=ValueError()))).status == 400
        with patch.object(http.dialog_service, 'process_dialog_request', AsyncMock(side_effect=RuntimeError('test-token failed'))):
            assert (await view.post(request({'text': 'hello'}))).status == 500
    assert [log['status'] for log in entries(runtime.hass)] == [200, 400, 500]
    assert 'secret' not in json.dumps(entries(runtime.hass))


async def test_bounded_log_and_disabled_logging(runtime):
    with patch.object(api_logs, 'get_cached_settings', return_value={'api_commands_enabled': True, 'api_commands_token': 'test-token'}):
        for i in range(210):
            api_logs.append_api_log(runtime.hass, method='POST', path='/api/dialog/events', phase='completed', duration_ms=i)
    assert len(entries(runtime.hass)) == 200
    assert entries(runtime.hass)[0]['duration_ms'] == 10
    with patch.object(api_logs, 'get_cached_settings', return_value={'api_commands_enabled': False}):
        api_logs.append_api_log(runtime.hass, method='POST', path='/api/dialog/events', phase='completed')
    assert entries(runtime.hass)[-1]['duration_ms'] == 209


async def test_sse_records_connection_event_and_cancellation(runtime):
    broker = http.DialogEventBroker(runtime.hass)
    response = SimpleNamespace(prepare=AsyncMock(), write=AsyncMock())
    with patch.object(api_logs, 'get_cached_settings', return_value={'api_commands_enabled': True, 'api_commands_token': 'test-token'}), patch.object(http.web, 'StreamResponse', return_value=response):
        task = asyncio.create_task(http.DialogEventView(runtime.hass, broker).get(request()))
        try:
            await asyncio.sleep(0)
            queue = next(iter(broker._queues))
            queue.put_nowait({'event': EVENT_DIALOG_MESSAGE, 'data': {'token': 'secret'}})
            for _ in range(20):
                if len(entries(runtime.hass)) == 2:
                    break
                await asyncio.sleep(0)
            assert entries(runtime.hass)[1]['event'] == EVENT_DIALOG_MESSAGE
        finally:
            task.cancel()
            with pytest.raises(asyncio.CancelledError):
                await task
    assert [log['phase'] for log in entries(runtime.hass)] == ['connected', 'event', 'completed']
    assert entries(runtime.hass)[-1]['status'] == 499
    assert 'secret' not in json.dumps(entries(runtime.hass))
    assert not broker._queues


async def test_websocket_requires_admin_and_enabled_api(runtime):
    connection = SimpleNamespace(user=SimpleNamespace(is_admin=False), send_result=Mock(), send_error=Mock())
    with pytest.raises(Unauthorized):
        logs_api._ws_get_api_logs(runtime.hass, connection, {'id': 1})
    handler = inspect.unwrap(logs_api._ws_get_api_logs)
    with patch('custom_components.ha_dialog_ui.storage.settings_storage.get_cached_settings', return_value={'api_commands_enabled': False}):
        await handler(runtime.hass, connection, {'id': 1})
    connection.send_error.assert_called_once_with(1, 'api_disabled', 'API is disabled')
    with patch('custom_components.ha_dialog_ui.storage.settings_storage.get_cached_settings', return_value={'api_commands_enabled': True, 'api_commands_token': 'test-token'}):
        runtime.hass.data.setdefault(DOMAIN, {})['api_logs'] = [{'status': 200}, {'status': 400}]
        await handler(runtime.hass, connection, {'id': 2})
    connection.send_result.assert_called_once_with(2, {'logs': [{'status': 400}, {'status': 200}]})


async def test_request_response_bodies_are_redacted_without_changing_wire_data(runtime):
    body = {'text': 'hello', 'nested': [{'password': 'hidden', 'apiKey': 'hidden'}], 'token': 'hidden'}
    reply = {'text': 'Got test-token and remote-secret', 'Authorization': 'hidden', 'values': [1, 2]}
    settings = {'api_commands_enabled': True, 'api_commands_token': 'test-token', 'remout': {'token': 'Bearer remote-secret'}}
    with patch.object(api_logs, 'get_cached_settings', return_value=settings), patch.object(http.dialog_service, 'process_dialog_request', AsyncMock(return_value=reply)):
        response = await http.DialogCommandsView(runtime.hass).post(request(body))
    assert json.loads(response.text)['response'] == reply
    log = entries(runtime.hass)[0]
    assert log['request_body']['text'] == 'hello'
    assert log['request_body']['nested'][0]['password'] == '[redacted]'
    assert log['request_body']['token'] == '[redacted]'
    assert log['response_body']['response']['values'] == [1, 2]
    serialized = json.dumps(log)
    for secret in ('test-token', 'remote-secret', 'hidden'):
        assert secret not in serialized
    assert body['token'] == 'hidden', 'Redaction must not mutate request data'


def test_large_bodies_are_bounded_and_known_secrets_are_hidden():
    payload = {'rows': [{'value': 'x' * 5000, 'access_token': 'hidden'} for _ in range(1000)]}
    body = api_logs._safe_body(payload, {'api_commands_token': 'hidden'})
    assert body['_truncated'] is True
    assert len(body['preview']) <= api_logs._BODY_LIMIT
    assert 'hidden' not in json.dumps(body)
