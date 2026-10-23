"""Compatibility rules for incoming commands and stored scenario conditions."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.dialog import normalize


@pytest.mark.parametrize(('value', 'expected'), [
    (None, ''), (' text ', 'text'), (0, '0'), (False, 'False'),
])
def test_scalar_text_normalization(value, expected):
    assert normalize._normalize_value(value) == expected


@pytest.mark.parametrize(('value', 'expected'), [
    (None, []), (' a;b ', ['a;b']), (0, ['0']),
    ([' a ', None, '', 'a', False], ['a', 'a', 'False']),
    ((' a ', ' b '), ['a', 'b']), ({'a': 1, 'b': 2}, ['a', 'b']),
])
def test_value_list_preserves_iterable_and_duplicate_rules(value, expected):
    assert normalize._normalize_values(value) == expected


@pytest.mark.parametrize(('value', 'expected'), [
    (None, []), (' room ', ['room']),
    ({'type': 'a', 'mapping_type': 'b', 'mappingType': 'c', 'value': {'d': 1}}, ['a', 'b', 'c', 'd']),
    ([{'mapping_type': 'room', 'value': 'hall'}, {'mappingType': 'room'}], ['room', 'room']),
    ((None, 0, ' a '), ['0', 'a']),
])
def test_direct_type_names_keep_all_aliases_and_order(value, expected):
    assert normalize.extract_direct_type_names(value) == expected


@pytest.mark.parametrize(('condition', 'expected'), [
    ({}, None), ({'parent_type': ' '}, None),
    ({'parent_type': ' timer '}, {'parent_type': 'timer'}),
    ({'type': ' child '}, {'parent_type': '', 'children_type': 'child'}),
    ({'children_type': 'new', 'type': 'old'}, {'parent_type': '', 'children_type': 'new'}),
    ({'children_type': '', 'type': 'old'}, {'parent_type': '', 'children_type': 'old'}),
    ({'children_direct_type': ' room '}, {'parent_type': '', 'children_direct_type': 'room'}),
])
def test_condition_alias_and_empty_parent_rules(condition, expected):
    before = deepcopy(condition)
    assert normalize._normalize_condition(condition) == expected
    assert condition == before


def test_legacy_conditions_are_zipped_by_position_not_combined():
    scenario = {'parent_type': 'one; ;three', 'type': 'child;second', 'children_direct_type': ';room'}
    assert normalize._normalize_legacy_conditions(scenario) == [
        {'parent_type': 'one', 'children_type': 'child'},
        {'parent_type': '', 'children_type': 'second', 'children_direct_type': 'room'},
        {'parent_type': 'three'},
    ]
    assert normalize._normalize_legacy_conditions({}) == []


@pytest.mark.parametrize('conditions', [[], [{}], [None, '', {}]])
def test_empty_modern_conditions_fall_back_to_legacy_when_saving(conditions):
    item = {'uuid': ' id ', 'name': ' Name ', 'script_entity_id': ' script.test ',
            'conditions': conditions, 'parent_type': 'legacy', 'extra': 'ignored'}
    before = deepcopy(item)
    assert normalize._normalize_script_action(item) == {
        'uuid': 'id', 'name': 'Name', 'script_entity_id': 'script.test',
        'conditions': [{'parent_type': 'legacy'}],
    }
    assert item == before


def test_valid_modern_conditions_win_over_legacy():
    assert normalize._normalize_script_action({
        'conditions': [{'parent_type': 'modern'}], 'parent_type': 'legacy',
    }) == {'uuid': '', 'name': '', 'script_entity_id': '', 'conditions': [{'parent_type': 'modern'}]}


def test_script_action_update_keeps_id_and_untouched_fields():
    existing = {'uuid': 'id', 'name': 'Old', 'script_entity_id': 'script.test',
                'conditions': [{'parent_type': 'old'}]}
    message = {'data': {'name': ' New ', 'uuid': ' id '}}
    before = deepcopy((existing, message))
    assert normalize.merge_script_action_payload(message, existing, 'id') == {
        'uuid': 'id', 'name': 'New', 'script_entity_id': 'script.test',
        'conditions': [{'parent_type': 'old'}],
    }
    assert (existing, message) == before


@pytest.mark.parametrize('payload', [None, [], 'bad'])
def test_script_action_payload_requires_object(payload):
    with pytest.raises(ValueError, match='payload must be an object'):
        normalize.merge_script_action_payload({'data': payload})


def test_update_rejects_uuid_change_but_create_uses_supplied_id():
    with pytest.raises(ValueError, match='id mismatch'):
        normalize.merge_script_action_payload({'data': {'uuid': 'other'}}, {'uuid': 'id'}, 'id')
    assert normalize.merge_script_action_payload({'data': {'uuid': 'old', 'name': 'New'}}, script_action_id='new') == {
        'uuid': 'new', 'name': 'New', 'script_entity_id': '',
    }


@pytest.mark.parametrize(('raw', 'expected'), [
    (None, None), ({'status': False}, None), ({'status': 0}, {'status': 0}),
    ({'data': {'parent_type': 'timer'}}, {'data': {'parent_type': 'timer'}}),
])
def test_payload_filter_only_discards_literal_false_status(raw, expected):
    assert normalize.filter_failed_payload(raw) == expected


@pytest.mark.parametrize(('raw', 'expected'), [
    (None, []), ('text', []), ({}, [{}]),
    ([None, {'parent_type': 'timer'}, 1, {'parent_type': 'alarm'}], [{'parent_type': 'timer'}, {'parent_type': 'alarm'}]),
    (({'parent_type': 'timer'},), []),
])
def test_command_payload_collection_preserves_order_and_identity(raw, expected):
    result = normalize.collect_command_payloads(raw)
    assert result == expected
    if isinstance(raw, dict):
        assert result[0] is raw
    elif isinstance(raw, list):
        assert all(item is source for item, source in zip(result, [x for x in raw if isinstance(x, dict)]))


@pytest.mark.parametrize(('value', 'expected'), [
    (' device ', ['device']), ([' a ', 'a', ''], ['a', 'a']), (None, []), (('device',), []),
])
def test_device_id_list_preserves_duplicates_and_supported_inputs(value, expected):
    assert normalize._normalize_device_ids(value) == expected
