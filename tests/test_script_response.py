from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_events
from custom_components.ha_dialog_ui.src.service.matching.selection import (
    _is_external_service_answer_type,
)


@pytest.mark.parametrize('answer_type', ['script_response', 'ha_storage', 'ha', 'external'])
async def test_script_response_and_legacy_types_wait_for_script(answer_type):
    hass = object()
    payload = {'text': 'Готово'}
    with (
        patch.object(dialog_events, 'get_current_hass', return_value=hass),
        patch.object(dialog_events, 'wait_for_script_response', new_callable=AsyncMock, return_value=payload) as wait,
        patch.object(dialog_events, 'publish_command_event') as send,
    ):
        assert _is_external_service_answer_type(answer_type)
        assert await dialog_events.request_script_response(hass, answer_type, {'command': 'test'}, 'client', 'device') == payload
        wait.assert_awaited_once_with(hass, 'client', 'device')
        send.assert_called_once_with(hass, 'client', {'command': 'test'})


@pytest.mark.parametrize('answer_type', ['default', 'redis'])
async def test_other_types_do_not_wait_for_script(answer_type):
    with patch.object(dialog_events, 'wait_for_script_response', new_callable=AsyncMock) as wait:
        assert not _is_external_service_answer_type(answer_type)
        assert await dialog_events.request_script_response(None, answer_type, {}, 'client', 'device') is None
        wait.assert_not_awaited()
