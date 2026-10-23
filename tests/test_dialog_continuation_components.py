"""Only children/custom are executable continuation components."""
from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.src.service.dialog_commands import normalize_command
from custom_components.ha_dialog_ui.src.service.dialog_responses import has_next_action_branch


@pytest.mark.parametrize('obsolete', ['children_error', 'chidren_error'])
def test_normalization_drops_removed_links_without_changing_stored_command(obsolete):
    children = {'actionTypeComponent': 'children', 'uuid': 'child'}
    custom = {'actionTypeComponent': 'custom', 'actionType': 'room_required', 'uuid': 'room'}
    command = {'uuid': 'main', 'componentDialog': {
        'nextAction': [children, {'actionTypeComponent': obsolete, 'uuid': 'error'}, custom],
        'voiceResponseArray': [{'actionType': 'error', 'voiceResponse': 'Не получилось'}],
    }}
    original = deepcopy(command)
    normalized = normalize_command(command, 'componentDialog')
    assert normalized['nextAction'] == [children, custom]
    assert normalized['voiceResponseArray'] == original['componentDialog']['voiceResponseArray']
    assert command == original
    assert not has_next_action_branch([{'actionTypeComponent': obsolete}], 'error')


@pytest.mark.parametrize('component', ['componentDialog', 'subComponentDialog'])
def test_saved_empty_continuation_kind_with_uuid_defaults_to_children(component):
    link = {'actionTypeComponent': '', 'actionType': '', 'uuid': '1311e53f-56b1-4025-ab28-e4dacfd50317'}
    command = {'uuid': 'b3k5-4g41-vfuk-kmwv', component: {'nextAction': [link]}}
    before = deepcopy(command)
    normalized = normalize_command(command, component)
    assert normalized['nextAction'] == [{**link, 'actionTypeComponent': 'children'}]
    assert has_next_action_branch(normalized['nextAction'])
    assert command == before


def test_empty_unselected_continuation_does_not_keep_dialog_open():
    command = {'uuid': 'main', 'componentDialog': {'nextAction': [{'actionTypeComponent': '', 'uuid': ''}]}}
    assert not has_next_action_branch(normalize_command(command, 'componentDialog')['nextAction'])
