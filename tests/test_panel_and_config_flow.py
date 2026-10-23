"""Panel retries and config flows retain their public behavior."""
import json
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
import pytest_asyncio
from homeassistant.config_entries import ConfigEntries, OptionsFlow
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResultType

from custom_components.ha_dialog_ui import config_flow, panel
from custom_components.ha_dialog_ui.const import DOMAIN, PANEL_MODULE_BASENAME, PANEL_MODULE_PATH
from test_timer_runtime import config_entry


@pytest_asyncio.fixture
async def hass(tmp_path):
    hass = HomeAssistant(str(tmp_path))
    hass.config_entries = ConfigEntries(hass, {})
    yield hass
    await hass.async_stop()


async def test_config_flow_creates_only_one_instance(hass):
    flow = config_flow.DialogCustomUiConfigFlow()
    flow.hass = hass
    result = await flow.async_step_user()
    assert result['type'] is FlowResultType.CREATE_ENTRY
    assert result['title'] == 'HA Dialog UI' and result['data'] == {}
    entry = config_entry()
    hass.config_entries._entries[entry.entry_id] = entry
    result = await flow.async_step_user()
    assert result['type'] is FlowResultType.ABORT
    assert result['reason'] == 'single_instance_allowed'


async def test_options_flow_preserves_panel_options(hass):
    entry = config_entry()
    hass.config_entries._entries[entry.entry_id] = entry
    hass.config_entries.async_update_entry(entry, options={'theme': 'light', 'client_id': 'client', 'timer_alarm_items': [{'id': 'timer'}]})
    flow = config_flow.DialogCustomUiConfigFlow.async_get_options_flow(entry)
    flow.hass = hass
    flow.handler = entry.entry_id
    result = await flow.async_step_init({'ignored': 'panel controls settings'})
    assert result['type'] is FlowResultType.CREATE_ENTRY
    assert result['data'] == entry.options


async def test_options_factory_supports_readonly_config_entry(hass):
    entry = config_entry()
    with patch.object(OptionsFlow, 'config_entry', property(lambda _: None)):
        flow = config_flow.DialogCustomUiConfigFlow.async_get_options_flow(entry)
    assert isinstance(flow, config_flow.DialogCustomUiOptionsFlow)


@pytest.fixture
def panel_files(tmp_path, monkeypatch):
    monkeypatch.setattr(panel, '__file__', str(tmp_path / 'panel.py'))
    return tmp_path


@pytest.mark.parametrize(('version', 'has_module'), [('1.2.3', True), ('1.2.3', False), ('', True), ('', False)])
def test_panel_url_uses_version_and_build_marker(panel_files, version, has_module):
    (panel_files / 'manifest.json').write_text(json.dumps({'version': version}))
    module = panel_files / 'static' / PANEL_MODULE_BASENAME
    if has_module:
        module.parent.mkdir()
        module.write_text('module')
    marker = str(module.stat().st_mtime_ns) if has_module else ''
    expected_version = '.'.join(part for part in (version, marker) if part)
    assert panel._build_versioned_module_url() == (f'{PANEL_MODULE_PATH}?v={expected_version}' if expected_version else PANEL_MODULE_PATH)


@pytest.mark.parametrize('manifest', [None, 'not json'])
def test_missing_or_invalid_manifest_still_uses_build_marker(panel_files, manifest):
    if manifest is not None:
        (panel_files / 'manifest.json').write_text(manifest)
    module = panel_files / 'static' / PANEL_MODULE_BASENAME
    module.parent.mkdir()
    module.write_text('module')
    assert panel._build_versioned_module_url() == f'{PANEL_MODULE_PATH}?v={module.stat().st_mtime_ns}'


@pytest.fixture
def panel_runtime():
    hass = SimpleNamespace(data={}, http=SimpleNamespace(async_register_static_paths=AsyncMock()),
                           async_add_executor_job=AsyncMock(side_effect=lambda fn: fn()))
    with (
        patch.object(panel.panel_custom, 'async_register_panel', new_callable=AsyncMock) as register,
        patch.object(panel, '_build_versioned_module_url', return_value='/module?v=1'),
    ):
        yield SimpleNamespace(hass=hass, register=register)


async def test_panel_registration_is_idempotent(panel_runtime):
    hass, register = panel_runtime.hass, panel_runtime.register
    await panel.async_register_panel(hass)
    await panel.async_register_panel(hass)
    hass.http.async_register_static_paths.assert_awaited_once()
    register.assert_awaited_once()
    hass.async_add_executor_job.assert_awaited_once()
    assert register.await_args.kwargs['module_url'] == '/module?v=1'
    assert register.await_args.kwargs['require_admin'] is False
    assert register.await_args.kwargs['config'] == {'domain': DOMAIN}


async def test_static_registration_failure_can_retry(panel_runtime):
    hass, register = panel_runtime.hass, panel_runtime.register
    hass.http.async_register_static_paths.side_effect = [RuntimeError('failed'), None]
    with pytest.raises(RuntimeError, match='failed'):
        await panel.async_register_panel(hass)
    register.assert_not_awaited()
    assert not hass.data.get(panel._STATIC_REGISTERED_KEY)
    await panel.async_register_panel(hass)
    register.assert_awaited_once()


async def test_panel_failure_reuses_registered_static_path_on_retry(panel_runtime):
    hass, register = panel_runtime.hass, panel_runtime.register
    register.side_effect = [RuntimeError('failed'), None]
    with pytest.raises(RuntimeError, match='failed'):
        await panel.async_register_panel(hass)
    assert not hass.data.get(panel._PANEL_REGISTERED_KEY)
    await panel.async_register_panel(hass)
    hass.http.async_register_static_paths.assert_awaited_once()
    assert register.await_count == 2
