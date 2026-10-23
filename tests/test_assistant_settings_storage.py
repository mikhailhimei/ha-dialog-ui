"""Built-in settings are persisted on first run and never reset on reload."""
from copy import deepcopy
from custom_components.ha_dialog_ui.storage import assistant_settings_storage as storage
from test_timer_runtime import runtime


async def test_clean_install_creates_and_persists_builtin_settings(runtime):
    hass, _ = runtime
    assert await storage._get_store(hass).async_load() is None
    defaults = await storage.async_load_assistant_settings(hass)
    assert {item['actionType'] for item in defaults} == {'default_main', 'not_understand', 'finish_miss'}
    assert len({item['uuid'] for item in defaults}) == 3
    assert await storage._get_store(hass).async_load() == defaults
    edited = deepcopy(defaults)
    edited[0]['voiceResponse'] = 'Пользовательский ответ'
    await storage.async_save_assistant_settings(hass, edited)
    assert await storage.async_load_assistant_settings(hass) == edited
