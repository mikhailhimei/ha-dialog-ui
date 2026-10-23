"""Concurrent command edits and status changes preserve dialog configuration."""

import asyncio
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import Mock, patch

import pytest

from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_commands_api as api
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_sub_commands_api
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_sub_direct_controls_api
from test_request_mutations import async_handler
from test_timer_runtime import runtime


def command(command_id, title, dialog_key="componentDialog"):
    if dialog_key == 'directControl':
        return {'uuid': command_id, 'title': title, 'status': True,
                'directControl': {'mappingType': 'rooms', 'valueType': 'command', 'manual': True,
                                  'subDirectControl': [{'mappingType': 'hall', 'voiceCommands': ['test phrase']}]}}
    return {'uuid': command_id, 'title': title, 'status': True,
            dialog_key: {'endStatus': True, 'actionType': 'test', 'answerType': 'default',
                                'voiceCommands': ['test phrase'], 'nextAction': [{'uuid': 'child'}]}}


@pytest.mark.parametrize('collection', ['command', 'subcommand', 'direct'])
@pytest.mark.parametrize('second_action', ['create', 'update', 'status', 'delete'])
async def test_overlapping_command_mutations_keep_title_and_dialog(runtime, second_action, collection):
    hass, _ = runtime
    module, suffix, dialog_key = {
        'command': (api, 'assistant_command', 'componentDialog'),
        'subcommand': (assistant_sub_commands_api, 'assistant_sub_command', 'subComponentDialog'),
        'direct': (assistant_sub_direct_controls_api, 'assistant_sub_direct_control', 'directControl'),
    }[collection]
    items = [command('first', 'Original', dialog_key), command('other', 'Other', dialog_key)]
    entered, release = asyncio.Event(), asyncio.Event()
    writes = 0

    async def load(_hass):
        return deepcopy(items)

    async def save(_hass, value):
        nonlocal writes
        writes += 1
        if writes == 1:
            entered.set()
            await release.wait()
        items[:] = deepcopy(value)

    handlers = {'create': getattr(module, "_ws_save_" + suffix), 'update': getattr(module, "_ws_update_" + suffix),
                'status': getattr(module, "_ws_update_" + suffix + "_status"), 'delete': getattr(module, "_ws_delete_" + suffix)}
    second_message = {
        'create': {'id': 2, 'data': command('ignored', 'New', dialog_key)},
        'update': {'id': 2, 'uuid': 'first', 'data': {dialog_key: {'mappingType': 'updated'} if collection == 'direct' else {'endStatus': False}}},
        'status': {'id': 2, 'uuid': 'first', 'status': False},
        'delete': {'id': 2, 'uuid': 'other'},
    }[second_action]
    connection = SimpleNamespace(send_result=Mock(), send_error=Mock())
    tasks = []
    with patch.object(module, 'async_load_' + suffix + 's', side_effect=load), patch.object(module, 'async_save_' + suffix + 's', side_effect=save):
        try:
            async with asyncio.timeout(3):
                tasks.append(asyncio.create_task(async_handler(getattr(module, "_ws_update_" + suffix))(
                    hass, connection, {'id': 1, 'uuid': 'first', 'data': {'title': 'Renamed'}})))
                await entered.wait()
                tasks.append(asyncio.create_task(async_handler(handlers[second_action])(hass, connection, second_message)))
                await asyncio.sleep(0)
                release.set()
                await asyncio.gather(*tasks)
        finally:
            release.set()
            await asyncio.gather(*tasks, return_exceptions=True)
    first = next(item for item in items if item['uuid'] == 'first')
    assert first['title'] == 'Renamed'
    if collection == 'direct':
        assert first[dialog_key]['subDirectControl'] == [{'mappingType': 'hall', 'voiceCommands': ['test phrase']}]
        assert first[dialog_key]['manual'] is True
    else:
        assert first[dialog_key]['voiceCommands'] == ['test phrase']
        assert first[dialog_key]['nextAction'] == [{'uuid': 'child'}]
    if second_action == 'status':
        assert first['status'] is False
    elif second_action == 'update':
        if collection == 'direct':
            assert first[dialog_key]['mappingType'] == 'updated'
        else:
            assert first[dialog_key]['endStatus'] is False
    elif second_action == 'delete':
        assert len(items) == 1
    else:
        assert len(items) == 3
        assert any(item['title'] == 'New' for item in items)
    connection.send_error.assert_not_called()
    assert connection.send_result.call_count == 2


@pytest.mark.parametrize("module,key", [(api, "componentDialog"), (assistant_sub_commands_api, "subComponentDialog")])
@pytest.mark.parametrize("invalid", ["", "   ", None])
def test_command_requires_nonblank_title_without_requiring_action_type(module, key, invalid):
    payload = command("test", invalid, key)
    payload[key]["actionType"] = invalid
    assert set(module._missing_required(payload, include_uuid=True)) == {"title"}


@pytest.mark.parametrize("module,suffix,key", [
    (api, "assistant_command", "componentDialog"),
    (assistant_sub_commands_api, "assistant_sub_command", "subComponentDialog"),
])
async def test_create_and_update_without_action_type_keep_generated_uuid(runtime, module, suffix, key):
    from uuid import UUID
    from custom_components.ha_dialog_ui.src.service.dialog_commands import normalize_command
    hass, _ = runtime
    payload = command("ignored", "New", key)
    payload.pop("uuid")
    payload[key].pop("actionType")
    items = []
    async def load(_hass):
        return deepcopy(items)
    async def save(_hass, data):
        items[:] = deepcopy(data)
    connection = SimpleNamespace(send_result=Mock(), send_error=Mock())
    with patch.object(module, 'async_load_' + suffix + 's', side_effect=load), patch.object(module, 'async_save_' + suffix + 's', side_effect=save):
        await async_handler(getattr(module, '_ws_save_' + suffix))(hass, connection, {'id': 1, 'data': payload})
        command_id = items[0]['uuid']
        assert str(UUID(command_id)) == command_id
        await async_handler(getattr(module, '_ws_update_' + suffix))(hass, connection, {'id': 2, 'uuid': command_id, 'data': {'title': 'Renamed'}})
    assert items[0]['uuid'] == command_id
    assert normalize_command(items[0], key)['actionType'] == command_id
    assert 'actionType' not in items[0][key]
    connection.send_error.assert_not_called()
