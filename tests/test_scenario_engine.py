"""Scenario selection keeps exact matching, condition grouping and first match."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.dialog.scenario_engine import match_scenario, _matches_expected_value


@pytest.mark.parametrize(('expected', 'incoming', 'matches'), [
    ('', None, True), ('', 'anything', True),
    ('timer', 'timer', True), ('timer', ' timer ', True),
    ('timer', 'Timer', False), ('timer', 'timer_start', False),
    ('timer; alarm', 'alarm', True), ('timer;alarm', ['other', 'alarm'], True),
    ('timer', None, False), ('timer', [], False),
    (' ; ', None, True), (' ; ', [''], True), (' ; ', 'timer', False),
    ('0', 0, True), ('False', False, True),
    ('timer', {'timer': 'ignored'}, True),
])
def test_expected_values_use_exact_case_sensitive_alternatives(expected, incoming, matches):
    assert _matches_expected_value(expected, incoming) is matches


@pytest.mark.parametrize(('payload', 'matches'), [
    ({'parent_type': 'timer', 'children_type': 'start', 'children_direct_type': 'room'}, True),
    ({'parent_type': 'alarm', 'children_type': 'start', 'children_direct_type': 'room'}, False),
    ({'parent_type': 'timer', 'children_type': 'stop', 'children_direct_type': 'room'}, False),
    ({'parent_type': 'timer', 'children_type': 'start', 'children_direct_type': 'device'}, False),
    ({'parent_type': 'timer', 'children_type': 'start'}, False),
])
def test_fields_within_one_condition_are_all_required(payload, matches):
    scenario = {'uuid': 'scenario', 'conditions': [{
        'parent_type': 'timer', 'children_type': 'start', 'children_direct_type': 'room'}]}
    assert (match_scenario(payload, [scenario]) is scenario) is matches


def test_condition_rows_are_alternatives_and_first_matching_scenario_wins():
    first = {'uuid': 'first', 'conditions': [{'parent_type': 'alarm'}, {'parent_type': 'timer'}]}
    second = {'uuid': 'second', 'conditions': [{'parent_type': 'timer'}]}
    scenarios = [first, second]
    payload = {'parent_type': 'timer'}
    before = deepcopy((payload, scenarios))
    assert match_scenario(payload, scenarios) is first
    assert (payload, scenarios) == before
    assert match_scenario({'parent_type': 'other'}, scenarios) is None


@pytest.mark.parametrize('conditions', [[], [{}], [None, '', {}]])
def test_explicit_empty_modern_conditions_disable_legacy_fallback(conditions):
    scenario = {'conditions': conditions, 'parent_type': 'timer'}
    assert match_scenario({'parent_type': 'timer'}, [scenario]) is None


@pytest.mark.parametrize('conditions', [None, {}, 'old-format'])
def test_non_list_conditions_use_legacy_fields(conditions):
    scenario = {'conditions': conditions, 'parent_type': 'timer'}
    assert match_scenario({'parent_type': 'timer'}, [scenario]) is scenario


def test_legacy_rows_keep_positional_pairs():
    scenario = {'parent_type': 'timer;alarm', 'type': 'start;stop'}
    assert match_scenario({'parent_type': 'timer', 'children_type': 'start'}, [scenario]) is scenario
    assert match_scenario({'parent_type': 'alarm', 'children_type': 'stop'}, [scenario]) is scenario
    assert match_scenario({'parent_type': 'timer', 'children_type': 'stop'}, [scenario]) is None


@pytest.mark.parametrize('direct_value', [
    'room', {'type': 'room'}, {'mapping_type': 'room'}, {'mappingType': 'room'},
    {'value': {'room': 'hall'}}, [{'mapping_type': 'other'}, {'mappingType': 'room'}],
])
def test_direct_types_support_current_and_legacy_shapes(direct_value):
    scenario = {'conditions': [{'children_direct_type': 'room'}]}
    assert match_scenario({'children_direct_type': direct_value}, [scenario]) is scenario


def test_direct_value_text_is_not_a_mapping_type():
    scenario = {'conditions': [{'children_direct_type': 'hall'}]}
    assert match_scenario({'children_direct_type': {'mapping_type': 'room', 'value': 'hall'}}, [scenario]) is None


def test_legacy_type_alias_and_unspecified_fields():
    scenario = {'conditions': [{'type': 'start'}]}
    assert match_scenario({'children_type': 'start', 'parent_type': 'anything'}, [scenario]) is scenario
    assert match_scenario({}, []) is None
    assert match_scenario({}, [{}]) is None


@pytest.mark.parametrize(('continuation', 'expected'), [('child-id', True), ('other-id', False), (None, False)])
def test_uuid_conditions_match_canonical_continuations_and_direct_values(continuation, expected):
    scenario = {'conditions': [{'parent_type': 'main-id', 'children_type': 'child-id', 'children_direct_type': 'direct-id'}]}
    payload = {'command_id': 'main-id', 'continuation_id': continuation,
               'direct_values': [{'command_id': 'direct-id', 'name': 'room', 'value_type': 'command', 'value': 'зал'}]}
    assert (match_scenario(payload, [scenario]) is scenario) is expected


def test_uuid_fields_are_authoritative_even_when_legacy_fields_match():
    scenario = {'conditions': [{'parent_type': 'hi'}]}
    assert match_scenario({'command_id': 'main-id', 'parent_type': 'hi'}, [scenario]) is None
