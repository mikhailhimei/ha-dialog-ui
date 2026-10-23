"""Dialog memory is isolated by client and device, with expiring state."""
import json
from types import SimpleNamespace

import pytest

from custom_components.ha_dialog_ui.const import CURRENT_NODE_KEY, MISS_COUNT_KEY
from custom_components.ha_dialog_ui.src.service import dialog_state as state


@pytest.fixture
def memory(monkeypatch):
    hass = SimpleNamespace(data={})
    now = [1000]
    monkeypatch.setattr(state, 'CURRENT_HASS', hass)
    monkeypatch.setattr(state, 'time', SimpleNamespace(time=lambda: now[0]))
    return hass, now


def test_state_is_isolated_by_client_and_device(memory):
    state.set_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device', 'first', ttl=120)
    state.set_dialog_state_value(CURRENT_NODE_KEY, 'client', 'other', 'second', ttl=120)
    state.set_dialog_state_value(CURRENT_NODE_KEY, 'other', 'device', 'third', ttl=120)
    state.delete_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device')
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device') is None
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'other') == 'second'
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'other', 'device') == 'third'


def test_expired_state_is_removed_without_removing_permanent_values(memory):
    hass, now = memory
    state.set_dialog_state_value('temporary', 'client', 'device', 'value', ttl=120)
    state.set_dialog_state_value('permanent', 'client', 'device', 0)
    now[0] += 119
    assert state.get_dialog_state_value('temporary', 'client', 'device') == 'value'
    now[0] += 2
    assert state.get_dialog_state_value('temporary', 'client', 'device') is None
    assert state._dialog_state_key('temporary', 'client', 'device') not in state._get_dialog_state_store()
    assert state.get_dialog_state_value('permanent', 'client', 'device') == 0


def test_set_current_node_and_clear_dialog(memory):
    state.set_current_node_state('client', 'node', 'device', custom=' confirm ', parent_type='parent')
    assert json.loads(state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device')) == {
        'uuid': 'node', 'parent_type': 'parent', 'command_id': None, 'custom': 'confirm'}
    assert state.get_dialog_state_value(MISS_COUNT_KEY, 'client', 'device') == 0
    state.set_dialog_state_value(CURRENT_NODE_KEY, 'client', 'other', 'untouched')
    state.clear_dialog_state('client', 'device')
    for key in (CURRENT_NODE_KEY, MISS_COUNT_KEY):
        assert state.get_dialog_state_value(key, 'client', 'device') is None
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'other') == 'untouched'


def test_third_miss_ends_dialog_only_for_current_device(memory):
    state.set_current_node_state('client', 'node', 'device')
    state.set_current_node_state('client', 'other-node', 'other')
    for count in (1, 2):
        assert state.handle_unmatched_input('client', 'device', 'Повторите', [])['end_session'] is False
        assert state.get_dialog_state_value(MISS_COUNT_KEY, 'client', 'device') == count
    assert state.handle_unmatched_input('client', 'device', 'Повторите', [])['end_session'] is True
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'device') is None
    assert state.get_dialog_state_value(MISS_COUNT_KEY, 'client', 'device') is None
    assert state.get_dialog_state_value(CURRENT_NODE_KEY, 'client', 'other') is not None
