from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_repository as repository
from custom_components.ha_dialog_ui.src.service import dialog_commands
from custom_components.ha_dialog_ui.storage.dialog_cache import update_dialog_cache_collection


@pytest.fixture
def cached_dialog():
    hass = SimpleNamespace(data={})
    with patch.object(repository, 'get_current_hass', return_value=hass):
        yield hass


def test_all_commands_are_read_without_exposing_mutable_cache(cached_dialog):
    items = [{'uuid': str(index), 'componentDialog': {'actionType': 'test'}} for index in range(205)]
    update_dialog_cache_collection(cached_dialog, 'commands', items)
    loaded = repository.get_all('commands')
    assert loaded == items
    assert len(dialog_commands.get_commands()['body']['componentDialog']) == 205
    loaded[200]['componentDialog']['actionType'] = 'changed'
    assert repository.get_one_by_uuid('commands', '200')['componentDialog']['actionType'] == 'test'


def test_linked_direct_template_and_dialog_settings(cached_dialog):
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls-sample', [{
        'uuid': 'rooms', 'valueType': 'string',
        'subDirectControl': [{'subMappingType': '_hall', 'subVoiceCommands': ['зал']}],
    }])
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls', [{
        'uuid': 'room-control', 'directControl': {'mappingType': 'room', 'subDirectControl': 'rooms'},
    }])
    update_dialog_cache_collection(cached_dialog, 'commands', [{
        'uuid': 'command', 'componentDialog': {
            'actionType': 'light', 'voiceCommands': ['включи свет'],
            'nextDirectControl': [{'uuid': 'room-control'}],
        },
    }])
    update_dialog_cache_collection(cached_dialog, 'settings-dialog', [{'actionType': 'miss', 'voiceResponse': 'Повторите'}])
    result = dialog_commands.get_commands()
    assert result['source'] == 'ha_storage'
    direct = result['body']['componentDialog'][0]['direct'][0]
    assert direct['valueType'] == 'string'
    assert direct['subDirectControl'][0]['subMappingType'] == '_hall'
    assert dialog_commands.get_dialog_settings()['body']['dialogSettings'][0]['message'] == 'Повторите'
    assert repository.get_one_by_uuid('commands', 'missing') is None


async def test_preload_populates_runtime_cache(cached_dialog):
    loader = AsyncMock(return_value=[{'uuid': 'loaded'}])
    with patch.dict(repository._LOADERS, {'commands': loader}, clear=True):
        await repository.async_load_dialog_cache(cached_dialog)
        loader.assert_awaited_once_with(cached_dialog)
        assert repository.get_one_by_uuid('commands', 'loaded') == {'uuid': 'loaded'}


def test_unknown_collection_is_rejected(cached_dialog):
    with pytest.raises(ValueError, match='Invalid dialog collection'):
        repository.get_all('unknown')


def test_error_results_do_not_share_mutable_empty_lists(cached_dialog):
    with patch.object(dialog_commands, 'get_all', side_effect=RuntimeError('storage unavailable')):
        first = dialog_commands.get_commands()
        first['body']['componentDialog'].append({'uuid': 'modified'})
        second = dialog_commands.get_commands()
    assert second['source'] == 'error'
    assert second['body'] == {'componentDialog': [], 'subComponentDialog': [], 'subDirectControl': []}


def test_all_dialog_settings_are_loaded_and_normalized(cached_dialog):
    settings = [{'actionType': f'test-{index}', 'voiceResponse': 'Ответ', 'endStatus': False} for index in range(205)]
    update_dialog_cache_collection(cached_dialog, 'settings-dialog', settings)
    result = dialog_commands.get_dialog_settings()
    assert len(result['body']['dialogSettings']) == 205
    assert result['body']['dialogSettings'][-1]['message'] == 'Ответ'
    assert result['body']['dialogSettings'][-1]['endStatus'] is False


def test_template_collection_is_read_once_and_index_is_rebuilt(cached_dialog):
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls-sample', [{
        'uuid':'rooms', 'valueType':'string',
        'subDirectControl':[{'subMappingType':'_hall','subVoiceCommands':['зал']}],
    }])
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls', [
        {'uuid':f'direct-{index}', 'directControl':{'subDirectControl':'rooms'}}
        for index in range(20)
    ])
    with (
        patch.object(dialog_commands, 'get_all', wraps=repository.get_all) as read,
        patch.object(dialog_commands, 'get_one_by_uuid', side_effect=AssertionError('Unexpected linear lookup')),
    ):
        result = dialog_commands.get_commands()
    assert result['source'] == 'ha_storage'
    assert sum(call.args == ('sub-direct-controls-sample',) for call in read.call_args_list) == 1
    controls = result['body']['subDirectControl']
    assert len(controls) == 20
    controls[0]['subDirectControl'][0]['subMappingType'] = '_changed'
    assert controls[1]['subDirectControl'][0]['subMappingType'] == '_hall'
    assert repository.get_one_by_uuid('sub-direct-controls-sample','rooms')['subDirectControl'][0]['subMappingType'] == '_hall'

    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls-sample', [{
        'uuid':'rooms', 'valueType':'string',
        'subDirectControl':[{'subMappingType':'_kitchen','subVoiceCommands':['кухня']}],
    }])
    refreshed = dialog_commands.get_commands()
    assert refreshed['body']['subDirectControl'][0]['subDirectControl'][0]['subMappingType'] == '_kitchen'


def test_template_index_preserves_first_match_for_duplicate_uuid(cached_dialog):
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls-sample', [
        {'uuid':'rooms', 'valueType':'string', 'subDirectControl':[{'subMappingType':'first'}]},
        {'uuid':'rooms', 'valueType':'int', 'subDirectControl':[{'subMappingType':'second'}]},
    ])
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls', [
        {'uuid':'direct', 'directControl':{'subDirectControl':'rooms'}},
    ])
    direct = dialog_commands.get_commands()['body']['subDirectControl'][0]
    assert direct['valueType'] == 'string'
    assert direct['subDirectControl'] == [{'subMappingType':'first'}]


def test_command_preparation_preserves_json_keys_order_and_linked_children(cached_dialog):
    update_dialog_cache_collection(cached_dialog, 'commands', [
        {'uuid':'first','componentDialog':{'actionType':'main','voiceCommands':'первая;вторая','endStatus':False}},
        {'uuid':'second','componentDialog':{'actionType':'other','voiceCommands':['третья']}},
    ])
    update_dialog_cache_collection(cached_dialog, 'sub-commands', [{
        'uuid':'child','subComponentDialog':{'actionType':'child','nextDirectControl':[{'uuid':'direct'}]},
    }])
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls-sample', [{
        'uuid':'template','valueType':'string','subDirectControl':[{'subMappingType':'room'}],
    }])
    update_dialog_cache_collection(cached_dialog, 'sub-direct-controls', [{
        'uuid':'direct','directControl':{'mappingType':'room','subDirectControl':'template'},
    }])
    result = dialog_commands.get_commands()
    assert result['source'] == 'ha_storage'
    body = result['body']
    assert set(body) == {'componentDialog','subComponentDialog','subDirectControl'}
    assert [node['uuid'] for node in body['componentDialog']] == ['first','second']
    assert body['componentDialog'][0]['voiceCommands'] == ['первая','вторая']
    assert body['componentDialog'][0]['endStatus'] is False
    assert body['subComponentDialog'][0]['direct'][0] == body['subDirectControl'][0]
    assert body['subDirectControl'][0]['subDirectControl'] == [{'subMappingType':'room'}]
    main, children = dialog_commands.prepare_dialog_nodes()
    assert [node['uuid'] for node in main] == ['first','second']
    assert [node['uuid'] for node in children] == ['child','first','second']
