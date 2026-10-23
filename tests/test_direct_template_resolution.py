from copy import deepcopy
from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.service import dialog_commands


VALUES = [{'subMappingType':'_hall', 'subVoiceCommands':['зал']}]
TEMPLATE = {'uuid':'rooms', 'valueType':'string', 'subDirectControl':VALUES}


@pytest.mark.parametrize('indexed', [False, True])
@pytest.mark.parametrize('reference', [
    'rooms', ' rooms ', TEMPLATE, ['rooms'], [TEMPLATE],
    ['rooms', {'valueType':'int','subDirectControl':[]}],
])
@pytest.mark.parametrize(('command_type','expected_type'), [
    (None,'string'), ('int','int'), ('',''),
])
def test_supported_template_forms_preserve_values_and_type_priority(reference,command_type,expected_type,indexed):
    item={'uuid':'direct', 'valueType':'date', 'directControl':{
        'manual':False, 'mappingType':'room', 'valueType':command_type,
        'subDirectControl':deepcopy(reference),
    }}
    original=deepcopy(item)
    with patch.object(dialog_commands,'get_one_by_uuid',return_value=deepcopy(TEMPLATE)):
        result=dialog_commands.normalize_direct_control(item,'directControl', {'rooms':TEMPLATE} if indexed else None)
    assert result['subDirectControl']==VALUES
    assert result['valueType']==expected_type
    assert item==original


@pytest.mark.parametrize('reference', [VALUES, 'rooms', TEMPLATE, []])
def test_manual_mode_does_not_resolve_references(reference):
    item={'uuid':'direct','directControl':{'manual':True,'valueType':'all','subDirectControl':deepcopy(reference)}}
    with patch.object(dialog_commands,'get_one_by_uuid') as lookup:
        result=dialog_commands.normalize_direct_control(item,'directControl')
    lookup.assert_not_called()
    assert result['subDirectControl']==reference
    assert result['valueType']=='all'


@pytest.mark.parametrize(('reference','expected'), [(None,None),([],[]),('missing',None),(['missing'],None)])
def test_missing_or_empty_template_keeps_previous_fallback(reference,expected):
    item={'uuid':'direct','valueType':'date','directControl':{'subDirectControl':reference}}
    with patch.object(dialog_commands,'get_one_by_uuid',return_value=None):
        result=dialog_commands.normalize_direct_control(item,'directControl')
    assert result['subDirectControl']==expected
    assert result['valueType']=='date'


def test_template_value_list_is_not_mistaken_for_another_template_reference():
    item={'uuid':'direct','directControl':{'subDirectControl':'rooms'}}
    with patch.object(dialog_commands,'get_one_by_uuid',return_value=deepcopy(TEMPLATE)) as lookup:
        result=dialog_commands.normalize_direct_control(item,'directControl')
    lookup.assert_called_once_with('sub-direct-controls-sample','rooms')
    assert result['subDirectControl']==VALUES


@pytest.mark.parametrize(('prefix', 'utterance', 'expected_code'), [
    (['свет'], 'включи свет в зале', '_hall'),
    (['свет'], 'включи свет в спальне', '_bedroom'),
    (['свет;освещение'], 'включи освещение в спальне', '_bedroom'),
    ([], 'включи в зале', '_hall'),
    ([''], 'включи в спальне', '_bedroom'),
])
def test_linked_nested_commands_support_common_phrase_or_no_common_phrase(prefix, utterance, expected_code):
    from custom_components.ha_dialog_ui.src.service.matching.selection import find_top_level_candidates
    template = {'uuid': 'shared-rooms', 'subDirectControl': [
        {'subMappingType': '_hall', 'subVoiceCommands': ['в зале']},
        {'subMappingType': '_bedroom', 'subVoiceCommands': ['в спальне']},
    ]}
    direct_record = {'uuid': 'light', 'directControl': {
        'mappingType': 'свет', 'valueType': 'command', 'manual': False,
        'voiceCommands': prefix, 'subDirectControl': 'shared-rooms',
    }}
    before = deepcopy((template, direct_record))
    direct = dialog_commands.normalize_direct_control(direct_record, 'directControl', {'shared-rooms': template})
    command = {'uuid': 'main', 'voiceCommands': ['включи ${свет}'], 'direct': [direct]}
    candidates = find_top_level_candidates([command], utterance)
    assert len(candidates) == 1
    assert candidates[0]['direct_entries'][0]['sub_mapping_type'] == [expected_code]
    assert (template, direct_record) == before


@pytest.mark.parametrize('phrases', ['в зале;зал', ['в зале;зал']])
def test_nested_phrase_variants_accept_semicolons_in_strings_and_lists(phrases):
    from custom_components.ha_dialog_ui.src.service.matching.direct import resolve_direct_types
    direct = {'mappingType': 'light', 'valueType': 'command', 'voiceCommands': ['свет'],
              'subDirectControl': [{'subMappingType': '_hall', 'subVoiceCommands': phrases}]}
    assert resolve_direct_types([direct], 'свет зале', source_name='light')['sub_mapping_type'] == ['_hall']
