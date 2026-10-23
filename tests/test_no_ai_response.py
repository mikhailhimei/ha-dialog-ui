from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.service.dialog_responses import (
    get_voice_response_payload,
)
from custom_components.ha_dialog_ui.src.service.dialog_service import _setting_to_service_node
from custom_components.ha_dialog_ui.src.service.matching.ranking import (
    get_ranked_command_nodes,
)


@pytest.mark.parametrize('flag', ['llm', 'LLM'])
@pytest.mark.parametrize('enabled', [True, 'true', 1])
def test_legacy_ai_flags_use_the_configured_phrase_without_network(flag, enabled):
    node = {'endStatus': True, 'voiceResponseArray': [{
        'actionType': 'default', 'voiceResponse': 'Таймер установлен',
        flag: enabled, 'system': 'legacy prompt', 'model': 'legacy-model',
    }]}
    with patch('socket.socket.connect', side_effect=AssertionError('Unexpected network call')):
        text, end_status = get_voice_response_payload(node)
    assert text == 'Таймер установлен'
    assert end_status is True


def test_script_fallback_keeps_its_phrase_without_ai_metadata():
    node = _setting_to_service_node({'message': 'Готово', 'LLM': True, 'system': 'legacy prompt'})
    assert node['voiceResponseArray'] == [{'actionType': 'default', 'voiceResponse': 'Готово'}]


def test_command_ranking_remains_local():
    nodes = [{'id': 'timer', 'voiceCommands': ['поставь таймер']}]
    with patch('socket.socket.connect', side_effect=AssertionError('Unexpected network call')):
        assert get_ranked_command_nodes('поставь таймер', nodes)
