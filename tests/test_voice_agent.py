"""Assist adapter preserves device identity and continuation semantics."""
from dataclasses import dataclass
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import aiohttp
import pytest
from homeassistant.components.conversation import ConversationInput
from homeassistant.core import Context
from homeassistant.exceptions import HomeAssistantError

from custom_components.ha_dialog_ui.voice import voice_agent as module


def request(conversation_id=None, device_id='device'):
    return ConversationInput(text='Установи таймер', context=Context(), conversation_id=conversation_id,
                             device_id=device_id, language='ru')


@pytest.fixture
def runtime():
    hass = object()
    entry = SimpleNamespace(options={})
    with (
        patch.object(module, 'get_cached_settings', return_value={}),
        patch.object(module, 'build_runtime_options', return_value={'client_id': ' client '}),
        patch.object(module.uuid, 'uuid4', return_value='generated-session'),
    ):
        yield module.DialogCustomUiVoiceAgent(hass, entry, 'fallback-device')


@pytest.mark.parametrize(('conversation_id', 'expected_id', 'is_new'), [
    (None, 'generated-session', True), ('existing', 'existing', False), ('', 'generated-session', False),
])
async def test_assist_request_keeps_existing_session_rules(runtime, conversation_id, expected_id, is_new):
    with patch.object(module.dialog_service, 'process_dialog_request', new_callable=AsyncMock, return_value={'text': 'Готово', 'end_session': False}) as process:
        result = await runtime.async_process(request(conversation_id=conversation_id))
    assert process.await_args.args[0] == {
        'request': {'command': 'Установи таймер'},
        'session': {'user': {'user_id': 'client'}, 'application': {'application_id': 'device'},
                    'session_id': expected_id, 'new': is_new}, 'version': '1.0'}
    assert result.conversation_id == expected_id
    assert getattr(result, "continue_conversation", result.conversation_id is not None) is True
    assert result.response.as_dict()['speech']['plain']['speech'] == 'Готово'


@pytest.mark.parametrize('device_id', [None, ''])
async def test_missing_device_uses_existing_fallback(runtime, device_id):
    with patch.object(module.dialog_service, 'process_dialog_request', new_callable=AsyncMock, return_value={}) as process:
        result = await runtime.async_process(request(device_id=device_id))
    assert process.await_args.args[0]['session']['application']['application_id'] == 'fallback-device'
    assert result.conversation_id is None
    assert getattr(result, "continue_conversation", result.conversation_id is not None) is False


@pytest.mark.parametrize('response', [{}, {'text': 'Готово', 'end_session': True}, {'text': 123}])
async def test_finished_dialog_returns_text_to_native_assist_pipeline(runtime, response):
    with patch.object(module.dialog_service, 'process_dialog_request', new_callable=AsyncMock, return_value=response):
        result = await runtime.async_process(request())
    assert result.response.language == 'ru'
    assert result.response.as_dict()['speech']['plain']['speech'] == str(response.get('text') or '')
    assert result.conversation_id is None
    assert getattr(result, "continue_conversation", result.conversation_id is not None) is False


@pytest.mark.parametrize('error', [ValueError('bad command'), TimeoutError(), aiohttp.ClientError('failed')])
async def test_handled_processing_errors_end_dialog(runtime, error):
    with patch.object(module.dialog_service, 'process_dialog_request', new_callable=AsyncMock, side_effect=error):
        result = await runtime.async_process(request())
    assert result.conversation_id is None
    assert getattr(result, "continue_conversation", result.conversation_id is not None) is False
    assert result.response.as_dict()['speech']['plain']['speech'] == ''


async def test_missing_entry_reports_configuration_error(runtime):
    runtime._entry = None
    with pytest.raises(HomeAssistantError, match='integration entry not found'):
        await runtime.async_process(request())


@pytest.mark.parametrize('continue_conversation', [False, True])
async def test_new_result_api_keeps_explicit_continuation_flag(runtime, continue_conversation):
    @dataclass
    class ModernResult:
        response: object
        conversation_id: str | None
        continue_conversation: bool

    with (
        patch.object(module, 'ConversationResult', ModernResult),
        patch.object(module.dialog_service, 'process_dialog_request', new_callable=AsyncMock,
                     return_value={'text': 'Готово', 'end_session': not continue_conversation}),
    ):
        result = await runtime.async_process(request())
    assert result.continue_conversation is continue_conversation
    assert result.conversation_id == ('generated-session' if continue_conversation else None)
