"""Failure rollback must stop managers and remove stale runtime references."""
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest

import custom_components.ha_dialog_ui as integration
from custom_components.ha_dialog_ui.const import DOMAIN


@pytest.fixture
def runtime():
    start, stop = AsyncMock(), AsyncMock()
    coordinators = []

    class Coordinator:
        def __init__(self, hass, entry):
            self.async_start, self.async_stop = start, stop
            coordinators.append(self)

    entries = SimpleNamespace(async_entries=Mock(return_value=[]), async_update_entry=Mock(),
                              async_forward_entry_setups=AsyncMock(), async_unload_platforms=AsyncMock(return_value=True))
    hass = SimpleNamespace(data={}, config_entries=entries)
    entry = SimpleNamespace(entry_id='entry', options={})
    with (
        patch.object(integration, 'set_current_hass'),
        patch.object(integration, 'async_register_dialog_http'),
        patch.object(integration, 'async_register_services'),
        patch.object(integration, 'async_unregister_services') as unregister,
        patch.object(integration, 'async_load_dialog_cache', new_callable=AsyncMock),
        patch.object(integration, 'async_register_panel', new_callable=AsyncMock),
        patch.object(integration.er, 'async_get', return_value=object()),
        patch.object(integration.er, 'async_entries_for_config_entry', return_value=[]),
        patch.object(integration, 'DialogCommandCoordinator', Coordinator),
        patch.object(integration, 'DialogCustomUiVoiceAgent', return_value=object()),
        patch.object(integration.conversation, 'async_set_agent') as set_agent,
        patch.object(integration.conversation, 'async_unset_agent') as unset_agent,
    ):
        yield SimpleNamespace(hass=hass, entry=entry, start=start, stop=stop, coordinators=coordinators,
                              set_agent=set_agent, unset_agent=unset_agent, unregister=unregister)


async def test_success_and_refused_unload_keep_runtime_until_platforms_unload(runtime):
    assert await integration.async_setup_entry(runtime.hass, runtime.entry)
    coordinator = runtime.coordinators[0]
    assert runtime.hass.data[DOMAIN]['entry'] is coordinator
    runtime.hass.config_entries.async_unload_platforms.return_value = False
    assert not await integration.async_unload_entry(runtime.hass, runtime.entry)
    runtime.stop.assert_not_awaited()
    runtime.unset_agent.assert_not_called()
    assert runtime.hass.data[DOMAIN]['entry'] is coordinator
    runtime.hass.config_entries.async_unload_platforms.return_value = True
    assert await integration.async_unload_entry(runtime.hass, runtime.entry)
    runtime.stop.assert_awaited_once()
    runtime.unregister.assert_called_once_with(runtime.hass)
    assert 'entry' not in runtime.hass.data[DOMAIN]
    assert 'coordinator' not in runtime.hass.data[DOMAIN]


@pytest.mark.parametrize('failure', ['start', 'platform', 'agent'])
async def test_setup_failure_cleans_coordinator_at_every_stage(runtime, failure):
    stage = {'start': runtime.start, 'platform': runtime.hass.config_entries.async_forward_entry_setups,
             'agent': runtime.set_agent}[failure]
    stage.side_effect = RuntimeError('setup failed')
    with pytest.raises(RuntimeError, match='setup failed'):
        await integration.async_setup_entry(runtime.hass, runtime.entry)
    runtime.stop.assert_awaited_once()
    if failure == 'agent':
        runtime.unset_agent.assert_called_once_with(runtime.hass, runtime.entry)
    assert 'entry' not in runtime.hass.data[DOMAIN]
    assert 'coordinator' not in runtime.hass.data[DOMAIN]


@pytest.mark.parametrize('cleanup_failure', ['platform', 'stop'])
async def test_cleanup_error_preserves_original_failure_and_removes_runtime(runtime, cleanup_failure):
    runtime.start.side_effect = RuntimeError('original setup failure')
    if cleanup_failure == 'platform':
        runtime.hass.config_entries.async_unload_platforms.side_effect = RuntimeError('cleanup error')
    else:
        runtime.stop.side_effect = RuntimeError('cleanup error')
    with pytest.raises(RuntimeError, match='original setup failure'):
        await integration.async_setup_entry(runtime.hass, runtime.entry)
    runtime.stop.assert_awaited_once()
    assert 'entry' not in runtime.hass.data[DOMAIN]
    assert 'coordinator' not in runtime.hass.data[DOMAIN]


async def test_migration_keeps_complete_options(runtime):
    runtime.entry.options = {'voice_agent_ip': 'existing', 'voice_agent_user_id': 'user'}
    await integration._async_migrate_legacy_voice_agent_options(runtime.hass, runtime.entry)
    runtime.hass.config_entries.async_entries.assert_not_called()
    runtime.hass.config_entries.async_update_entry.assert_not_called()


async def test_migration_reads_legacy_entry_and_preserves_other_options(runtime):
    runtime.entry.options = {'custom': 'keep'}
    runtime.hass.config_entries.async_entries.return_value = [SimpleNamespace(data={'ip_address': ' host ', 'user_id': ' user '})]
    await integration._async_migrate_legacy_voice_agent_options(runtime.hass, runtime.entry)
    runtime.hass.config_entries.async_update_entry.assert_called_once_with(runtime.entry, options={
        'custom': 'keep', 'voice_agent_ip': 'host', 'voice_agent_user_id': 'user'})
