"""Voice alarm commands must stay within the requested client and speaker."""

import pytest

from custom_components.ha_dialog_ui.timer_alarm.alarm_manager import DialogAlarmManager
from test_timer_runtime import runtime


@pytest.fixture
async def alarms(runtime):
    hass, _ = runtime
    manager = DialogAlarmManager(hass, lambda: None, lambda: 'alarm.mp3')
    for name, client, device, time, created in [
        ('other-speaker', 'client', 'speaker-b', '09:00', 10),
        ('own', 'client', 'speaker-a', '07:00', 20),
        ('other-client', 'other', 'speaker-a', '10:00', 30),
    ]:
        manager._alarms[name] = {'id': name, 'client_id': client, 'device_id': device,
                                 'time': time, 'status': 'on', 'created_at': created}
    yield manager
    await manager.async_stop()


async def test_info_only_lists_requested_speaker(alarms):
    result = await alarms.async_handle_alarm_info('client', 'speaker-a', True)
    assert result['actionType'] == 'one'
    assert result['message'] == '07:00'


async def test_stop_selects_only_requested_speaker(alarms):
    result = await alarms.async_handle_alarm_stop('client', 'speaker-a', 1, True)
    assert result['actionType'] == 'success'
    assert set(alarms._alarms) == {'other-speaker', 'other-client'}


async def test_missing_speaker_cannot_delete_another_speakers_alarm(alarms):
    result = await alarms.async_handle_alarm_stop('client', 'missing', 1, True)
    assert result['actionType'] == 'not_alarm'
    assert len(alarms._alarms) == 3


async def test_empty_device_keeps_client_wide_info(alarms):
    result = await alarms.async_handle_alarm_info('client', '', True)
    assert result['message'] == '1. на 09:00\n2. на 07:00'


async def test_no_client_filter_still_respects_device(alarms):
    assert [item['id'] for item in alarms._alarms_for_client('', 'speaker-b')] == ['other-speaker']


async def test_disabled_alarm_is_excluded_and_order_is_preserved(alarms):
    alarms._alarms['own']['status'] = 'off'
    assert alarms._alarms_for_client('client', 'speaker-a') == []
    assert [item['id'] for item in alarms._alarms_for_client('client')] == ['other-speaker']


@pytest.mark.parametrize('existing_device,new_device', [
    ('', 'speaker-a'), ('speaker-a', ''), ('speaker-a', 'speaker-b'),
])
@pytest.mark.parametrize('status', ['on', 'off'])
async def test_create_never_reuses_alarm_of_different_device(alarms, existing_device, new_device, status):
    alarms._alarms.clear()
    existing = {'id': 'existing', 'client_id': 'client', 'device_id': existing_device,
                'time': '07:00', 'status': status, 'created_at': 10, 'repeat_type': 'once', 'repeat_days': []}
    alarms._alarms['existing'] = existing
    result = await alarms.async_handle_alarm_start('07:00', 'client', new_device, True)
    assert result['actionType'] == 'success'
    assert len(alarms._alarms) == 2
    assert existing['device_id'] == existing_device
    assert existing['status'] == status
    created = next(item for key, item in alarms._alarms.items() if key != 'existing')
    assert created['device_id'] == new_device
    assert created['client_id'] == 'client'


@pytest.mark.parametrize('device', ['', 'speaker-a'])
@pytest.mark.parametrize('status', ['on', 'off'])
async def test_create_reuses_same_devices_alarm_and_keeps_identity(alarms, device, status):
    alarms._alarms.clear()
    existing = {'id': 'existing', 'client_id': 'client', 'device_id': device,
                'time': '07:00', 'status': status, 'created_at': 10, 'repeat_type': 'once', 'repeat_days': []}
    alarms._alarms['existing'] = existing
    await alarms.async_handle_alarm_start('07:00', 'client', device, True)
    assert list(alarms._alarms) == ['existing']
    assert alarms._alarms['existing'] is existing
    assert existing['status'] == 'on'
    assert existing['created_at'] == 10


@pytest.mark.parametrize('client,device', [('client', 'missing'), ('missing-client', 'speaker-a')])
@pytest.mark.parametrize('count', [None, 1])
async def test_stop_without_response_handles_no_matching_alarm(alarms, client, device, count):
    original = dict(alarms._alarms)
    result = await alarms.async_handle_alarm_stop(client, device, count, False)
    assert result is None
    assert alarms._alarms == original


@pytest.mark.parametrize('execution', [True, False])
async def test_stop_empty_manager_returns_expected_response(alarms, execution):
    alarms._alarms.clear()
    result = await alarms.async_handle_alarm_stop('client', 'speaker-a', None, execution)
    if execution:
        assert result == {'client_id': 'client', 'device_id': 'speaker-a', 'actionType': 'not_alarm'}
    else:
        assert result is None
