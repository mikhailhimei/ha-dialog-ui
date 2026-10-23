"""Domain migration copies user data without resetting new installations."""
import pytest
from homeassistant.helpers.storage import Store
from custom_components.ha_dialog_ui.storage.legacy_migration import (
    _STORAGE_SUFFIXES, async_migrate_legacy_storage,
)
from test_timer_runtime import runtime


@pytest.mark.parametrize('suffix', _STORAGE_SUFFIXES)
async def test_copies_legacy_storage_and_keeps_original(runtime, suffix):
    hass, _ = runtime
    legacy = Store(hass, 1, f'dialog_custom_ui_{suffix}')
    current = Store(hass, 1, f'ha_dialog_ui_{suffix}')
    data = {'client_id': 'client', 'theme': 'light'} if suffix == 'settings' else [
        {'uuid': 'original', 'created_at': 123, 'total_seconds': 300},
    ]
    await legacy.async_save(data)
    await async_migrate_legacy_storage(hass)
    assert await current.async_load() == data
    assert await legacy.async_load() == data
    # Existing new data, including an intentionally empty collection, wins.
    await current.async_save([])
    await async_migrate_legacy_storage(hass)
    assert await current.async_load() == []


async def test_clean_install_does_not_create_empty_stores(runtime):
    hass, _ = runtime
    await async_migrate_legacy_storage(hass)
    for suffix in _STORAGE_SUFFIXES:
        assert await Store(hass, 1, f'ha_dialog_ui_{suffix}').async_load() is None
