"""Partial WebSocket edits preserve request identity and persisted metadata."""

import asyncio
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import Mock

import pytest

from custom_components.ha_dialog_ui.src.api.alarm_request import alarm_requests_api
from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api
from custom_components.ha_dialog_ui.storage.alarm_requests_storage import async_load_alarm_requests, async_save_alarm_requests
from custom_components.ha_dialog_ui.storage.timer_requests_storage import async_load_timer_requests, async_save_timer_requests
from test_timer_runtime import runtime


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
@pytest.mark.parametrize('changes', [{'name': 'Renamed'}, {'volume_start': 0.7}, {'name': 'Renamed', 'uuid': 'different-id'}])
async def test_partial_update_preserves_untouched_fields_in_real_store(runtime, kind, changes):
    hass, _ = runtime
    module, load, save = (timer_requests_api, async_load_timer_requests, async_save_timer_requests) if kind == 'timer' else (
        alarm_requests_api, async_load_alarm_requests, async_save_alarm_requests)
    original = {'uuid': 'original-id', 'name': 'Original', 'action_type': 'create_' + kind,
                'client_id': 'original-client', 'device_id': 'speaker', 'status': 'on', 'volume_start': 0.3}
    if kind == 'timer':
        original['timer_time'] = {'count_timer': '00:05:00', 'total_seconds': 300, 'remaining_seconds': 90,
                                  'created_at': 10, 'date_end': '2099-01-01T12:00:00+00:00'}
    else:
        original.update(time='07:50', repeat_type='custom', repeat_days=['mon', 'fri'])
    await save(hass, [original])
    response = asyncio.get_running_loop().create_future()
    connection = SimpleNamespace(
        user=SimpleNamespace(is_admin=True),
        send_result=Mock(side_effect=lambda _id, data: response.set_result(data)),
        send_error=Mock(side_effect=lambda *args: response.set_exception(AssertionError(args))),
        async_handle_exception=Mock(side_effect=lambda _msg, error: response.set_exception(error)),
    )
    getattr(module, '_ws_update_' + kind + '_request')(hass, connection, {'id': 42, 'uuid': original['uuid'], 'data': changes})
    result = await asyncio.wait_for(response, 2)
    expected = {**deepcopy(original), **changes, 'uuid': original['uuid']}
    assert result == {'updated': True, 'data': expected}
    assert await load(hass) == [expected]
    connection.async_handle_exception.assert_not_called()
    connection.send_error.assert_not_called()
