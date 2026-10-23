"""Search operates on the whole collection before pagination."""
from copy import deepcopy
from importlib import import_module
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
from test_timer_runtime import runtime

CASES = [
    ("assistant_commands.assistant_commands_api", "assistant_commands", "title"),
    ("assistant_commands.assistant_sub_commands_api", "assistant_sub_commands", "title"),
    ("assistant_commands.assistant_sub_direct_controls_api", "assistant_sub_direct_controls", "title"),
    ("assistant_commands.assistant_sub_direct_controls_sample_api", "assistant_sub_direct_control_samples", "title"),
    ("assistant_commands.assistant_settings", "assistant_settings", "title"),
    ("script_action.script_actions_api", "script_actions", "name"),
]

@pytest.mark.parametrize("module_name,collection,field", CASES)
async def test_search_filters_before_pagination_without_mutation(runtime, module_name, collection, field):
    hass, _ = runtime
    api = import_module("custom_components.ha_dialog_ui.src.api." + module_name)
    handler = getattr(api, "_ws_get_" + collection + "_short")
    while hasattr(handler, "__wrapped__"):
        handler = handler.__wrapped__
    records = [{"uuid":"a",field:"Свет в зале"}, {"uuid":"b",field:"Музыка"}, {"uuid":"c",field:"СВЕТ в кухне"}]
    before = deepcopy(records)
    connection = SimpleNamespace(send_result=Mock())
    with patch.object(api, "async_load_" + collection, new=AsyncMock(return_value=records)):
        for query, page, expected, total in [(" свет ",2,["c"],2),("нет такого",1,[],0),("",2,["b"],3),("[",1,[],0)]:
            await handler(hass, connection, {"id":1,"query":query,"page":page,"page_size":1})
            result = connection.send_result.call_args.args[1]
            assert [item["uuid"] for item in result.get("data",result.get("script_actions",[]))] == expected
            assert result["total_items"] == total
    assert records == before
