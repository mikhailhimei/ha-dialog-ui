"""Scenario saves distinguish storage failures from reload failures."""

from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.src.api.script_action import script_actions_api as api
from test_timer_runtime import runtime


@pytest.mark.parametrize('missing_coordinator', [True, False])
async def test_saved_scenario_reports_reload_failure(runtime, missing_coordinator):
    hass, _ = runtime
    reload = AsyncMock(side_effect=RuntimeError('reload failed'))
    hass.data[DOMAIN] = {} if missing_coordinator else {'coordinator': SimpleNamespace(async_reload=reload)}
    connection = SimpleNamespace(send_error=Mock())
    records = [{'uuid': 'record'}]
    with patch.object(api, 'async_save_script_actions', new_callable=AsyncMock) as save:
        assert not await api._save(hass, records, connection, {'id': 42})
        save.assert_awaited_once_with(hass, records)
    assert connection.send_error.call_args.args[:2] == (42, 'reload_failed')
    assert connection.send_error.call_args.args[2].startswith('Saved but reload failed')
