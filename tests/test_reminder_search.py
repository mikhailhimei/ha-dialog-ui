"""Queries use meaningful whole words and Russian lemmas, not full phrases."""
from copy import deepcopy
from unittest.mock import patch

import pytest

from custom_components.ha_dialog_ui.src.utils.reminder_search import filter_reminders_by_query
from custom_components.ha_dialog_ui import reminder_api
from custom_components.ha_dialog_ui.const import DOMAIN
from test_reminders import runtime

ITEMS = [
    {'id': 'insulin', 'text': 'Напоминаю поставить инсулин в'},
    {'id': 'pie', 'text': 'Напомни вытащить пирог из духовки'},
    {'id': 'water', 'text': 'Напоминаю выпить воды'},
]


@pytest.mark.parametrize('query,expected', [
    ('инсулине', {'insulin'}), ('когда инсулине', {'insulin'}), ('КОГДА ИНСУЛИНА?', {'insulin'}),
    ('Когда вытаскивать пирог из духовки', {'pie'}), ('о пироге', {'pie'}), ('в духовке', {'pie'}),
    ('когда пить воду', {'water'}), ('вода или пирог', {'water', 'pie'}),
    ('когда из', set()), ('напомни пожалуйста', set()), ('пир', set()), ('сулин', set()),
    ('пылесос', set()), ('!!!', set()),
])
def test_lemma_word_search(query, expected):
    original = deepcopy(ITEMS)
    assert {item['id'] for item in filter_reminders_by_query(ITEMS, query)} == expected
    assert ITEMS == original


async def test_service_lemma_search_keeps_client_device_and_status_filters(runtime):
    hass, manager = runtime
    reminder_api.register_services(hass)
    base = {'text': 'Напоминаю поставить инсулин в', 'device_id': 'media_player.kitchen',
            'clientId': manager.client_id, 'status': 'pending', 'at': '2099-01-01T00:00:00Z'}
    manager._items = {
        'own': {**base, 'id': 'own'},
        'other_device': {**base, 'id': 'other_device', 'device_id': 'media_player.bedroom'},
        'other_client': {**base, 'id': 'other_client', 'clientId': 'another-client'},
        'completed': {**base, 'id': 'completed', 'status': 'completed'},
    }
    with patch.object(reminder_api, '_manager', return_value=manager):
        response = await hass.services.async_call(DOMAIN, 'reminder_info', {
            'device_id': 'media_player.kitchen', 'query': 'когда инсулине',
        }, blocking=True, return_response=True)
    assert [item['id'] for item in response['reminders']] == ['own']
