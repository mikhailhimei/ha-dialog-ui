"""Whisper prompt settings persist locally even when live synchronization fails."""
from types import SimpleNamespace
from unittest.mock import Mock, patch, AsyncMock

import pytest
import pytest_asyncio
from aiohttp import web
from homeassistant.exceptions import Unauthorized

from custom_components.ha_dialog_ui import whisper_prompt as prompt
from test_timer_runtime import runtime
from test_request_mutations import async_handler


@pytest_asyncio.fixture
async def server():
    state = {'prompt': 'Пылесос, коты.', 'status': 200, 'confirmed': True, 'require_token': True, 'authorization': None}
    async def handle(request):
        state['authorization'] = request.headers.get('Authorization')
        if state['require_token'] and state['authorization'] != 'Bearer test-token':
            return web.json_response({'error': 'unauthorized'}, status=401)
        if state['status'] != 200:
            return web.json_response({}, status=state['status'])
        if request.method == 'PUT':
            state['prompt'] = (await request.json())['initial_prompt']
        return web.json_response({'initial_prompt': state['prompt'], 'applied': state['confirmed']})
    app = web.Application()
    app.router.add_route('*', '/initial-prompt', handle)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, '127.0.0.1', 0)
    await site.start()
    state['url'] = f'http://127.0.0.1:{site._server.sockets[0].getsockname()[1]}'
    yield state
    await runner.cleanup()


def connection():
    return SimpleNamespace(send_error=Mock(), send_result=Mock())


async def test_save_applies_remotely_persists_and_never_returns_token(runtime, server):
    hass, _ = runtime
    conn = connection()
    data = {'url': server['url'], 'token': 'test-token', 'initial_prompt': 'Включи свет.'}
    await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': data})
    conn.send_error.assert_not_called()
    assert server['prompt'] == ['Включи свет.']
    assert await prompt._store(hass).async_load() == {**data, "initial_prompt": [data["initial_prompt"]]}
    conn.send_result.reset_mock()
    await async_handler(prompt._get_prompt)(hass, conn, {'id': 2})
    conn.send_result.assert_called_once_with(2, {'url': server['url'], 'initial_prompt': ['Включи свет.'], 'has_token': True})
    conn.send_result.reset_mock()
    await async_handler(prompt._save_prompt)(hass, conn, {'id': 3, 'data': {'url': server['url'], 'token': '', 'initial_prompt': ''}})
    conn.send_error.assert_not_called()
    assert server['prompt'] == []
    assert (await prompt._store(hass).async_load())['token'] == 'test-token'


async def test_read_current_prompt_does_not_save_credentials(runtime, server):
    hass, _ = runtime
    conn = connection()
    await async_handler(prompt._read_prompt)(hass, conn, {'id': 1, 'data': {'url': server['url'], 'token': 'test-token'}})
    conn.send_error.assert_not_called()
    conn.send_result.assert_called_once_with(1, {'initial_prompt': [server['prompt']], 'saved': False, 'applied': False})
    assert await prompt._store(hass).async_load() is None


@pytest.mark.parametrize('failure', ['token', 'server', 'unconfirmed', 'timeout'])
async def test_failure_still_saves_settings(runtime, server, failure):
    hass, _ = runtime
    original = {'url': server['url'], 'token': 'test-token', 'initial_prompt': 'original'}
    await prompt._store(hass).async_save(original)
    conn = connection()
    server['status'] = 503 if failure == 'server' else 200
    data = {**original, 'initial_prompt': 'new', 'token': 'wrong' if failure == 'token' else 'test-token'}
    server['confirmed'] = failure != 'unconfirmed'
    with patch.object(prompt, '_remote', AsyncMock(side_effect=TimeoutError())) if failure == 'timeout' else patch.object(prompt, '_credentials', wraps=prompt._credentials):
        await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': data})
    conn.send_error.assert_not_called()
    conn.send_result.assert_called_once_with(1, {'initial_prompt': ['new'], 'saved': True, 'applied': False})
    assert await prompt._store(hass).async_load() == {**data, 'initial_prompt': ['new']}



@pytest.mark.parametrize('url', ['ftp://host', 'http://user:password@host', 'http://host?token=secret', 'http://host/path', ''])
def test_invalid_endpoint_rejected(url):
    with pytest.raises(ValueError):
        prompt._endpoint(url)


def test_saved_token_is_not_forwarded_to_changed_host():
    assert prompt._credentials({'url': 'http://original:10301', 'token': 'secret'}, {'url': 'http://other:10301', 'token': ''}) == ('http://other:10301', '')


@pytest.mark.parametrize('handler', [prompt._get_prompt, prompt._read_prompt, prompt._save_prompt])
def test_only_admins_can_access_prompt_settings(handler):
    with pytest.raises(Unauthorized):
        handler(None, SimpleNamespace(user=SimpleNamespace(is_admin=False)), {'id': 1})


async def test_read_and_save_without_token(runtime, server):
    hass, _ = runtime
    server['require_token'] = False
    conn = connection()
    await async_handler(prompt._read_prompt)(hass, conn, {'id': 1, 'data': {'url': server['url']}})
    conn.send_error.assert_not_called()
    assert server['authorization'] is None
    await async_handler(prompt._save_prompt)(hass, conn, {'id': 2, 'data': {'url': server['url'], 'initial_prompt': ' local ; ; kitchen '}})
    conn.send_error.assert_not_called()
    assert server['authorization'] is None
    assert server['prompt'] == ['local', 'kitchen']
    assert (await prompt._store(hass).async_load())['token'] == ''


async def test_local_storage_failure_does_not_apply_remote_prompt(runtime, server):
    hass, _ = runtime
    conn = connection()
    store = SimpleNamespace(async_load=AsyncMock(return_value={}), async_save=AsyncMock(side_effect=OSError('disk full')))
    with patch.object(prompt, '_store', return_value=store), patch.object(prompt, '_remote', AsyncMock()) as remote:
        await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': {'url': server['url'], 'initial_prompt': 'a;b'}})
    remote.assert_not_awaited()
    conn.send_result.assert_not_called()
    conn.send_error.assert_called_once()


async def test_save_only_never_contacts_whisper(runtime, server):
    hass, _ = runtime
    conn = connection()
    with patch.object(prompt, '_remote', AsyncMock()) as remote:
        await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': {'url': server['url'], 'initial_prompt': ' a ; ; b ', 'apply': False}})
    remote.assert_not_awaited()
    assert (await prompt._store(hass).async_load())['initial_prompt'] == ['a', 'b']
    conn.send_result.assert_called_once_with(1, {'initial_prompt': ['a', 'b'], 'saved': True, 'applied': False})


async def test_save_prompt_without_address_does_not_contact_whisper(runtime):
    hass, _ = runtime
    conn = connection()
    with patch.object(prompt, '_remote', AsyncMock()) as remote:
        await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': {'url': '', 'initial_prompt': 'Коты; Пылесос', 'apply': False}})
    remote.assert_not_awaited()
    assert await prompt._store(hass).async_load() == {'url': '', 'token': '', 'initial_prompt': ['Коты', 'Пылесос']}
    conn.send_error.assert_not_called()


async def test_send_without_address_is_rejected(runtime):
    hass, _ = runtime
    conn = connection()
    with patch.object(prompt, '_remote', AsyncMock()) as remote:
        await async_handler(prompt._save_prompt)(hass, conn, {'id': 1, 'data': {'url': '', 'initial_prompt': 'Коты', 'apply': True}})
    remote.assert_not_awaited()
    conn.send_error.assert_called_once()
