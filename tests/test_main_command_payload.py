"""The selected main-command flag is exposed to Home Assistant scripts."""

import pytest

from custom_components.ha_dialog_ui.dialog.script_runner import build_script_service_data
from custom_components.ha_dialog_ui.src.service.dialog_events import build_command_data


@pytest.mark.parametrize('is_main_command', [True, False])
def test_main_command_flag_is_preserved_in_script_payload(is_main_command):
    payload = build_command_data('', 'light', {}, 'client', 'speaker', [], is_main_command)
    variables = build_script_service_data('script.test', payload)['variables']
    assert variables['dialog_payload']['is_main_command'] is is_main_command
    assert 'execution_command' not in variables['dialog_payload']
    assert variables['dialog_payload']['client_id'] == 'client'
    assert variables['dialog_payload']['device_id'] == 'speaker'
