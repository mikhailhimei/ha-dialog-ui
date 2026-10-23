"""Runtime synchronization must visit each manager once despite HA aliases."""

from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.src.api.alarm_request import alarm_requests_api
from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api
from test_timer_runtime import runtime


@pytest.mark.parametrize('kind', ['timer', 'alarm'])
@pytest.mark.parametrize('distinct_managers', [False, True])
async def test_sync_deduplicates_aliases_but_keeps_distinct_managers(runtime, kind, distinct_managers):
    hass, _ = runtime
    module = timer_requests_api if kind == 'timer' else alarm_requests_api
    first = SimpleNamespace(apply_ui_items=AsyncMock())
    second = SimpleNamespace(apply_ui_items=AsyncMock()) if distinct_managers else first
    def coordinator(manager):
        return SimpleNamespace(timer_alarm_manager=SimpleNamespace(**{kind + '_manager': manager}))
    hass.data[DOMAIN] = {'entry': coordinator(first), 'coordinator': coordinator(second), 'logs': [], 'runtime': {}}
    request = {'uuid': 'item', 'action_type': 'create_' + kind, 'client_id': 'original-client',
               'device_id': 'speaker', 'status': 'on', 'time': '07:00', 'timer_time': '00:02:00'}
    with patch.object(module, 'get_cached_settings', return_value={'client_id': 'fallback'}):
        await getattr(module, f'_sync_{kind}_requests_to_runtime')(hass, [request])
    first.apply_ui_items.assert_awaited_once()
    if distinct_managers:
        second.apply_ui_items.assert_awaited_once()
        assert first.apply_ui_items.call_args == second.apply_ui_items.call_args
    item = first.apply_ui_items.call_args.args[0]['item']
    assert item['clientId'] == 'original-client'
    assert item['deviceId'] == 'speaker'
