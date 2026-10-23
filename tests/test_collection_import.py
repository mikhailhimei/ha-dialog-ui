"""Collection imports preserve references and never save a partially valid file."""
import inspect
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

from homeassistant.exceptions import Unauthorized

from custom_components.ha_dialog_ui.src.api.script_action import script_actions_api
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_sub_commands_api
from custom_components.ha_dialog_ui.src.api.settings import settings_api
from test_timer_runtime import runtime


def coroutine(handler):
    while not inspect.iscoroutinefunction(handler):
        handler = handler.__wrapped__
    return handler


@pytest.mark.parametrize("kind", ["script", "scenario"])
@pytest.mark.parametrize("invalid", [None, "duplicate", "incomplete", "bad_type"])
async def test_import_is_validated_before_atomic_merge(runtime, kind, invalid):
    hass, _ = runtime
    module = script_actions_api if kind == "script" else assistant_sub_commands_api
    collection = "script_actions" if kind == "script" else "assistant_sub_commands"
    item = ({"uuid": "same", "name": "New name", "script_entity_id": "script.test", "conditions": []}
            if kind == "script" else {"uuid": "same", "title": "New name", "status": True,
              "subComponentDialog": {"actionType": "test", "answerType": "default", "endStatus": True}})
    records = [item, {**item, "uuid": "new"}]
    if invalid == "duplicate":
        records.append(item)
    elif invalid == "incomplete":
        records.append({"uuid": "broken", "title": "Short export"})
    elif invalid == "bad_type":
        records[1] = {**records[1], "uuid": []}
    connection = SimpleNamespace(send_result=Mock(), send_error=Mock())
    existing = [{"uuid": "untouched", "name": "Keep"}, {"uuid": "same", "name": "Old"}]
    with patch.object(module, "async_load_" + collection, AsyncMock(return_value=existing)) as load, \
         patch.object(module, "_save", AsyncMock(return_value=True)) as save:
        await coroutine(getattr(module, "_ws_import_" + collection))(hass, connection, {"id": 1, "data": records})
        if invalid:
            save.assert_not_awaited()
            load.assert_not_awaited()
            connection.send_error.assert_called_once()
        else:
            imported = save.await_args.args[1]
            assert [row["uuid"] for row in imported] == ["untouched", "same", "new"]
            assert imported[0] == existing[0]
            assert imported[1] == item
            connection.send_result.assert_called_once_with(1, {"imported": 2})


@pytest.mark.parametrize("module,collection", [(script_actions_api, "script_actions"), (assistant_sub_commands_api, "assistant_sub_commands"), (settings_api, "settings")])
async def test_import_denies_non_admin(runtime, module, collection):
    hass, _ = runtime
    connection = SimpleNamespace(user=SimpleNamespace(is_admin=False), send_error=Mock())
    # websocket/async-response wrapper schedules a task; require_admin is its immediate wrapped handler.
    handler = getattr(module, "_ws_import_" + collection)
    with patch.object(module, "_save" if collection != "settings" else "_async_save_settings", AsyncMock()) as save:
        with pytest.raises(Unauthorized):
            handler(hass, connection, {"id": 1, "data": []})
        save.assert_not_awaited()
