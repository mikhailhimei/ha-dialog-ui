"""Integration helpers: runtime settings and manager access."""
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import Mock

import pytest

from custom_components.ha_dialog_ui.const import DEFAULT_ALERT_MEDIA_ID, DOMAIN
from custom_components.ha_dialog_ui.integration_helpers import (
    get_integration_entry,
    get_timer_alarm_manager,
)
from custom_components.ha_dialog_ui.runtime_options import build_runtime_options


def test_entry_lookup_keeps_first_entry_convention():
    first, second = object(), object()
    entries = Mock(return_value=[first, second])
    hass = SimpleNamespace(config_entries=SimpleNamespace(async_entries=entries))
    assert get_integration_entry(hass) is first
    entries.assert_called_once_with(DOMAIN)
    entries.return_value = []
    assert get_integration_entry(hass) is None


def test_manager_must_provide_existing_interface():
    entry = SimpleNamespace(entry_id='entry')
    hass = SimpleNamespace(data={})
    assert get_timer_alarm_manager(hass, entry) is None
    manager = SimpleNamespace(**{name: Mock() for name in (
        'get_items', 'get_active_items', 'get_alarm_presets',
        'async_apply_ui_items', 'serialize_persisted_items')})
    hass.data[DOMAIN] = {'entry': SimpleNamespace(timer_alarm_manager=manager)}
    assert get_timer_alarm_manager(hass, entry) is manager
    del manager.get_items
    assert get_timer_alarm_manager(hass, entry) is None


def test_default_options_preserve_stored_timer_data():
    options = {'timer_alarm_items': [{'id': 'timer'}], 'timer_alarm_presets': ['08:00'],
               'timer_alarm_device_ids': [' device ', 'device']}
    before = deepcopy(options)
    result = build_runtime_options(SimpleNamespace(options=options))
    assert result['base_url'] == ''
    assert result['external_event_bridge_enabled'] is False
    assert result['timer_alarm_media_content_id'] == DEFAULT_ALERT_MEDIA_ID
    assert result['timer_music'] == result['alarm_music'] == DEFAULT_ALERT_MEDIA_ID
    assert result['timer_alarm_device_ids'] == ['device', 'device']
    assert result['timer_alarm_items'] == [{'id': 'timer'}]
    result['timer_alarm_items'].append({'id': 'new'})
    assert options == before


@pytest.mark.parametrize('remote_enabled', [False, True])
def test_options_use_settings_without_mutating_them(remote_enabled):
    settings = {'active_remout': remote_enabled,
                'remout': {'base_url': ' http://ha ', 'token': ' token '},
                'client_id': ' client ', 'api_commands_enabled': True,
                'api_commands_token': ' api-token ',
                'timer_alarm': {'global_music_timer': ' timer.mp3 ', 'global_music_alarm': ' alarm.mp3 '}}
    before = deepcopy(settings)
    result = build_runtime_options(SimpleNamespace(options={}), settings)
    assert result['base_url'] == ('http://ha' if remote_enabled else '')
    assert result['external_event_bridge_enabled'] is remote_enabled
    assert result['remote_active_search_enabled'] is remote_enabled
    assert result['remote_token'] == 'token'
    assert result['client_id'] == 'client'
    assert result['api_commands_token'] == 'api-token'
    assert result['timer_music'] == 'timer.mp3'
    assert result['alarm_music'] == 'alarm.mp3'
    assert result['timer_alarm_media_content_id'] == 'timer.mp3'
    assert settings == before


def test_alarm_music_does_not_replace_default_timer_sound():
    result = build_runtime_options(SimpleNamespace(options={}), {
        'timer_alarm': {'global_music_alarm': 'alarm.mp3'}})
    assert result['timer_music'] == DEFAULT_ALERT_MEDIA_ID
    assert result['alarm_music'] == 'alarm.mp3'
