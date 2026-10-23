"""Final checks of command search, logs and real HA collection storage."""

from collections import deque
from copy import deepcopy
import importlib
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.storage import dialog_cache
from custom_components.ha_dialog_ui.src.api import logs_api
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_commands_search as search
from test_request_mutations import async_handler
from test_timer_runtime import runtime


COLLECTIONS = [
    ('assistant_commands', 'commands'), ('assistant_sub_commands', 'sub-commands'),
    ('assistant_sub_direct_controls', 'sub-direct-controls'),
    ('assistant_sub_direct_control_samples', 'sub-direct-controls-sample'),
    ('assistant_settings', 'settings-dialog'), ('script_actions', None), ('timer_requests', None),
]


def module_for(collection):
    filename = 'assistant_sub_direct_controls_sample' if collection == 'assistant_sub_direct_control_samples' else collection
    return importlib.import_module('custom_components.ha_dialog_ui.storage.' + filename + '_storage')


@pytest.mark.parametrize('collection,cache_key', COLLECTIONS)
async def test_collection_store_round_trip_and_empty_list(runtime, collection, cache_key):
    hass, _ = runtime
    module = module_for(collection)
    save, load = getattr(module, 'async_save_' + collection), getattr(module, 'async_load_' + collection)
    records = [{'uuid': 'one', 'nested': {'values': ['original']}}, {'uuid': 'two'}]
    await save(hass, records)
    assert await load(hass) == records
    await save(hass, [])
    assert await load(hass) == []
    if cache_key:
        assert dialog_cache.read_dialog_cache_collection(hass, cache_key) == []


@pytest.mark.parametrize('collection,cache_key', [entry for entry in COLLECTIONS if entry[1]])
async def test_saved_collection_cache_is_independent_of_input(runtime, collection, cache_key):
    hass, _ = runtime
    module = module_for(collection)
    records = [{'uuid': 'one', 'nested': {'values': ['original']}}]
    expected = deepcopy(records)
    await getattr(module, 'async_save_' + collection)(hass, records)
    records[0]['nested']['values'].append('changed')
    assert dialog_cache.read_dialog_cache_collection(hass, cache_key) == expected
    assert await getattr(module, 'async_load_' + collection)(hass) == expected


@pytest.mark.parametrize('type_value', [None, 42, [], 'unknown'])
async def test_unknown_search_type_returns_empty_without_loading(runtime, type_value):
    hass, _ = runtime
    with patch.object(search, 'async_load_assistant_commands', new_callable=AsyncMock) as commands, patch.object(search, 'async_load_assistant_sub_commands', new_callable=AsyncMock) as children:
        assert await search.async_search_assistant_commands(hass, 'test', type_value) == []
        commands.assert_not_awaited()
        children.assert_not_awaited()


@pytest.mark.parametrize('child', [False, True])
async def test_search_preserves_case_insensitive_title_uuid_and_action_type(runtime, child):
    hass, _ = runtime
    component = 'subComponentDialog' if child else 'componentDialog'
    records = [{'uuid': 'UUID-ONE', 'title': 'Кухня', component: {'actionType': 'light'}},
               {'uuid': 'other', 'title': 'Other', 'actionType': 'fallback'}]
    original = deepcopy(records)
    loader = 'async_load_assistant_sub_commands' if child else 'async_load_assistant_commands'
    request_type = 'ha_dialog_ui/search_assistant_sub_commands' if child else 'ha_dialog_ui/search_assistant_commands'
    with patch.object(search, loader, new_callable=AsyncMock, return_value=records):
        expected = [{'title': 'Кухня', 'uuid': 'UUID-ONE', 'actionType': 'light'}]
        assert await search.async_search_assistant_commands(hass, 'КУХ', request_type) == expected
        assert await search.async_search_assistant_commands(hass, 'uuid-one', request_type) == expected
        assert len(await search.async_search_assistant_commands(hass, '', request_type)) == 2
    assert records == original


@pytest.mark.parametrize('populated', [False, True])
async def test_logs_response_is_a_list_snapshot(runtime, populated):
    hass, _ = runtime
    entries = deque([{'level': 'info', 'message': 'first'}]) if populated else deque()
    hass.data[DOMAIN] = {'logs': entries}
    connection = SimpleNamespace(send_result=Mock())
    await async_handler(logs_api._ws_get_logs)(hass, connection, {'id': 42})
    expected = list(entries)
    entries.append({'level': 'info', 'message': 'later'})
    assert connection.send_result.call_args.args == (42, {'logs': expected})
