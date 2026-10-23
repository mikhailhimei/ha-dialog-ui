"""Native HA WebSocket wrappers retain error handling and admin checks."""

import asyncio
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
from homeassistant.exceptions import Unauthorized

from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api
from custom_components.ha_dialog_ui.src.api.alarm_request import alarm_requests_api
from custom_components.ha_dialog_ui.src.api.alarm_time_widget import alarm_time_widgets_api
from test_timer_runtime import runtime


APIS = [
    (timer_requests_api, 'timer_request', 'timer_requests', 'async_load_timer_requests', 'async_save_timer_requests'),
    (alarm_requests_api, 'alarm_request', 'alarm_requests', 'async_load_alarm_requests', 'async_save_alarm_requests'),
    (alarm_time_widgets_api, 'alarm_time_widget', 'alarm_time_widgets', 'async_load_alarm_time_widgets', 'async_save_alarm_time_widgets'),
]


@pytest.mark.parametrize('module,singular,plural,load_name,save_name', APIS)
@pytest.mark.parametrize('operation', ['list', 'detail', 'create'])
async def test_native_wrapper_reports_read_failure_without_saving(runtime, module, singular, plural, load_name, save_name, operation):
    hass, _ = runtime
    future = asyncio.get_running_loop().create_future()
    error = OSError('storage read failed')
    def handle_exception(msg, raised):
        future.set_result((msg, raised))
    connection = SimpleNamespace(user=SimpleNamespace(is_admin=True),
                                 async_handle_exception=Mock(side_effect=handle_exception),
                                 send_result=Mock(), send_error=Mock())
    name = {'list': '_ws_get_' + plural + '_short', 'detail': '_ws_get_' + singular,
            'create': '_ws_save_' + singular}[operation]
    msg = {'id': 42, 'uuid': 'record', 'data': {}}
    with patch.object(module, load_name, new_callable=AsyncMock, side_effect=error), patch.object(module, save_name, new_callable=AsyncMock) as save:
        getattr(module, name)(hass, connection, msg)
        received_msg, received_error = await asyncio.wait_for(future, 1)
        assert received_msg is msg
        assert received_error is error
        save.assert_not_awaited()
    connection.send_result.assert_not_called()
    connection.async_handle_exception.assert_called_once()


@pytest.mark.parametrize('module,singular,plural,load_name,save_name', APIS)
@pytest.mark.parametrize('operation', ['save', 'update', 'delete'])
async def test_mutation_still_rejects_non_admin_before_read_or_write(runtime, module, singular, plural, load_name, save_name, operation):
    hass, _ = runtime
    connection = SimpleNamespace(user=SimpleNamespace(is_admin=False))
    with patch.object(module, load_name, new_callable=AsyncMock) as load, patch.object(module, save_name, new_callable=AsyncMock) as save:
        with pytest.raises(Unauthorized):
            getattr(module, '_ws_' + operation + '_' + singular)(hass, connection, {'id': 42, 'uuid': 'record', 'data': {}})
        load.assert_not_awaited()
        save.assert_not_awaited()
