"""Overlapping timer/alarm/widget API changes must preserve unrelated records."""

import asyncio
from copy import deepcopy
import inspect
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

from custom_components.ha_dialog_ui.src.api.alarm_time_widget import alarm_time_widgets_api as api
from custom_components.ha_dialog_ui.src.api.alarm_request import alarm_requests_api
from custom_components.ha_dialog_ui.src.api.timer_request import timer_requests_api
from custom_components.ha_dialog_ui.src.api.script_action import script_actions_api
from custom_components.ha_dialog_ui.const import DOMAIN
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_sub_direct_controls_sample_api
from custom_components.ha_dialog_ui.src.api.assistant_commands import assistant_settings
from test_timer_runtime import runtime


def async_handler(handler):
    while not inspect.iscoroutinefunction(handler):
        handler = handler.__wrapped__
    return handler


@pytest.mark.parametrize('collection', ['widget', 'alarm', 'timer', 'script', 'sample', 'setting'])
@pytest.mark.parametrize('second_action', ['create', 'update', 'delete'])
async def test_overlapping_mutations_preserve_each_changes_result(runtime, second_action, collection):
    hass, _ = runtime
    hass.data[DOMAIN] = {'coordinator': SimpleNamespace(async_reload=AsyncMock())}
    module, suffix, load_name, save_name = {
        'widget': (api, 'alarm_time_widget', 'async_load_alarm_time_widgets', 'async_save_alarm_time_widgets'),
        'alarm': (alarm_requests_api, 'alarm_request', 'async_load_alarm_requests', 'async_save_alarm_requests'),
        'timer': (timer_requests_api, 'timer_request', 'async_load_timer_requests', 'async_save_timer_requests'),
        'script': (script_actions_api, 'script_action', 'async_load_script_actions', 'async_save_script_actions'),
        'sample': (assistant_sub_direct_controls_sample_api, 'assistant_sub_direct_control_sample', 'async_load_assistant_sub_direct_control_samples', 'async_save_assistant_sub_direct_control_samples'),
        'setting': (assistant_settings, 'assistant_setting', 'async_load_assistant_settings', 'async_save_assistant_settings'),
    }[collection]

    def label(item):
        return item['title'] if collection in {'sample', 'setting'} else item['name']

    def payload(name, time):
        if collection == 'setting':
            return {'title': name, 'actionType': 'default', 'endStatus': True, 'voiceResponseArray': [{'value': 'test reply'}]}
        if collection == 'sample':
            return {'title': name, 'subDirectControl': [{'subMappingType': 'hall', 'subVoiceCommands': ['test phrase']}]}
        if collection == 'script':
            return {'name': name, 'script_entity_id': 'script.test', 'conditions': []}
        if collection == 'timer':
            return {'name': name, 'action_type': 'create_timer', 'device_id': 'speaker', 'timer_time': '00:02:00'}
        return {'name': name, 'action_type': 'alarm' if collection == 'widget' else 'create_alarm',
                'device_id': 'speaker', 'time': [time] if collection == 'widget' else time}

    items = [{'uuid': 'existing', **payload('Before', '07:00')}]
    entered, release = asyncio.Event(), asyncio.Event()
    calls = 0

    async def load(_hass):
        return deepcopy(items)

    async def save(_hass, values):
        nonlocal calls
        calls += 1
        if calls == 1:
            entered.set()
            await release.wait()
        items[:] = deepcopy(values)

    connection = SimpleNamespace(send_result=Mock(), send_error=Mock())
    create = async_handler(getattr(module, "_ws_save_" + suffix))
    second = {'create': create, 'update': async_handler(getattr(module, "_ws_update_" + suffix)),
              'delete': async_handler(getattr(module, "_ws_delete_" + suffix))}[second_action]
    tasks = []
    with patch.object(module, load_name, side_effect=load), patch.object(module, save_name, side_effect=save):
        try:
            async with asyncio.timeout(3):
                tasks.append(asyncio.create_task(create(hass, connection, {'id': 1, 'data': payload('First', '08:00')})))
                await entered.wait()
                tasks.append(asyncio.create_task(second(hass, connection, {'id': 2, 'uuid': 'existing', 'data': payload('Second', '09:00')})))
                await asyncio.sleep(0)
                release.set()
                await asyncio.gather(*tasks)
        finally:
            release.set()
            await asyncio.gather(*tasks, return_exceptions=True)
    assert any(label(item) == 'First' for item in items)
    if second_action == 'delete':
        assert len(items) == 1
    else:
        assert any(label(item) == 'Second' for item in items)
        assert len(items) == (3 if second_action == 'create' else 2)
    assert connection.send_result.call_count == 2
    if collection == 'sample':
        assert all(item['subDirectControl'] == [{'subMappingType': 'hall', 'subVoiceCommands': ['test phrase']}]
                   for item in items)
    if collection == 'setting':
        assert all(item['voiceResponseArray'] == [{'value': 'test reply'}] for item in items)
    connection.send_error.assert_not_called()
