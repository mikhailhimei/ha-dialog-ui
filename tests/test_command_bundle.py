"""A command bundle transfers all five sections and preserves their references."""
from contextlib import ExitStack
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
from homeassistant.exceptions import Unauthorized

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.src.api.assistant_commands import command_transfer as api
from test_collection_import import coroutine
from test_timer_runtime import runtime


def bundle():
    dialog = {"endStatus": True, "actionType": "test", "answerType": "default"}
    return {"format": api.FORMAT, "version": 1,
        "commands": [{"uuid": "main", "title": "Main", "status": True,
            "componentDialog": {**dialog, "nextAction": [{"uuid": "sub"}], "nextDirectControl": [{"uuid": "direct"}]}}],
        "sub_commands": [{"uuid": "sub", "title": "Secondary", "status": True, "subComponentDialog": dialog}],
        "direct_commands": [{"uuid": "direct", "title": "Direct", "status": True,
            "directControl": {"mappingType": "room", "valueType": "string", "manual": False, "subDirectControl": "template"}}],
        "templates": [{"uuid": "template", "title": "Template", "subDirectControl": [{"subMappingType": "hall", "subVoiceCommands": ["hall"]}]}],
        "settings": [{"uuid": "setting", "title": "Default response", "actionType": "default_main", "endStatus": True, "voiceResponseArray": [{"voiceResponse": "OK"}]}]}


@pytest.mark.parametrize("failure", [None, "invalid_last", "missing_setting", "write"])
async def test_roundtrip_all_collections_and_preserve_links(runtime, failure):
    hass, _ = runtime
    coordinator = SimpleNamespace(async_reload=AsyncMock())
    hass.data[DOMAIN] = {"coordinator": coordinator}
    connection = SimpleNamespace(send_result=Mock(), send_error=Mock())
    data = bundle()
    state = {key: [{**deepcopy(items[0]), "uuid": "keep-" + key}] for key, items in data.items() if key in api.COLLECTIONS}
    if failure == "missing_setting":
        state["settings"] = []
    previous = deepcopy(state)
    writes = []
    with ExitStack() as stack:
        for key, (module, collection) in api.COLLECTIONS.items():
            async def load(hass, key=key):
                return deepcopy(state[key])
            async def save(hass, items, key=key):
                writes.append(key)
                state[key] = deepcopy(items)
                if failure == "write" and key == "direct_commands" and writes.count(key) == 1:
                    raise OSError("disk error")
            stack.enter_context(patch.object(module, "async_load_" + collection, load))
            stack.enter_context(patch.object(module, "async_save_" + collection, save))
        if failure == "invalid_last":
            data["settings"][0].pop("actionType")
        await coroutine(api._ws_import_command_bundle)(hass, connection, {"id": 1, "data": data})
        if failure:
            assert state == previous
            if failure in {"invalid_last", "missing_setting"}:
                assert writes == []
            coordinator.async_reload.assert_not_awaited()
            connection.send_error.assert_called_once()
            connection.send_result.assert_not_called()
            return
        for key in api.COLLECTIONS:
            if key == "settings":
                assert state[key] == [{**data[key][0], "uuid": previous[key][0]["uuid"]}]
            else:
                assert state[key] == previous[key] + data[key]
        coordinator.async_reload.assert_awaited_once()
        # Reimport must update the same IDs rather than creating copies.
        await coroutine(api._ws_import_command_bundle)(hass, connection, {"id": 2, "data": data})
        for key in api.COLLECTIONS:
            assert len(state[key]) == (1 if key == "settings" else 2)
        await coroutine(api._ws_export_command_bundle)(hass, connection, {"id": 3})
        exported = connection.send_result.call_args.args[1]
        assert exported == {"format": api.FORMAT, "version": 1, **state}
        assert exported["direct_commands"][1]["directControl"]["subDirectControl"] == "template"
        assert exported["commands"][1]["componentDialog"]["nextAction"][0]["uuid"] == "sub"


@pytest.mark.parametrize("handler", [api._ws_import_command_bundle, api._ws_export_command_bundle])
async def test_transfer_requires_admin(runtime, handler):
    hass, _ = runtime
    with pytest.raises(Unauthorized):
        handler(hass, SimpleNamespace(user=SimpleNamespace(is_admin=False)), {"id": 1, "data": bundle()})


@pytest.mark.parametrize("change", ["missing", "version", "duplicate", "status", "unknown_setting", "duplicate_setting"])
def test_invalid_bundle(change):
    data = bundle()
    if change == "missing":
        data.pop("templates")
    elif change == "version":
        data["version"] = 2
    elif change == "duplicate":
        data["templates"] *= 2
    elif change == "unknown_setting":
        data["settings"][0]["actionType"] = "new_setting"
    elif change == "duplicate_setting":
        data["settings"].append({**data["settings"][0], "uuid": "another-id"})
    else:
        data["commands"][0]["status"] = "on"
    with pytest.raises(ValueError):
        api.validate_bundle(data)
