"""Runtime sensors keep registry identity and detach mutation listeners."""
from types import SimpleNamespace
from unittest.mock import Mock

import pytest
import pytest_asyncio
from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send

from custom_components.ha_dialog_ui.const import SIGNAL_TIMER_ALARM_UPDATED
from custom_components.ha_dialog_ui.sensor import DialogTimersSensor, DialogAlarmSensor


@pytest_asyncio.fixture
async def hass(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    yield hass
    await hass.async_stop()


@pytest.mark.parametrize('sensor_class', [DialogTimersSensor, DialogAlarmSensor])
async def test_dispatcher_subscription_is_removed_with_entity(hass, sensor_class):
    sensor = sensor_class(hass, SimpleNamespace(entry_id='entry'))
    removers = []
    sensor.async_on_remove = removers.append
    sensor.async_schedule_update_ha_state = Mock()
    await sensor.async_added_to_hass()
    async_dispatcher_send(hass, SIGNAL_TIMER_ALARM_UPDATED)
    await hass.async_block_till_done()
    sensor.async_schedule_update_ha_state.assert_called_once_with(force_refresh=True)
    assert len(removers) == 1
    removers[0]()
    async_dispatcher_send(hass, SIGNAL_TIMER_ALARM_UPDATED)
    await hass.async_block_till_done()
    assert sensor.async_schedule_update_ha_state.call_count == 1


@pytest.mark.parametrize('sensor_class', [DialogTimersSensor, DialogAlarmSensor])
async def test_sensor_unavailable_without_coordinator(hass, sensor_class):
    sensor = sensor_class(hass, SimpleNamespace(entry_id='missing'))
    await sensor.async_update()
    assert not sensor.available


def test_unique_ids_remain_compatible():
    entry = SimpleNamespace(entry_id='entry')
    assert DialogTimersSensor(None, entry).unique_id == 'entry_voice_timers'
    assert DialogAlarmSensor(None, entry).unique_id == 'entry_alarm_status'
