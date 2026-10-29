"""Built-in settings are persisted on first run and never reset on reload."""
from copy import deepcopy
from custom_components.ha_dialog_ui.storage import assistant_settings_storage as storage
from test_timer_runtime import runtime


async def test_clean_install_creates_and_persists_builtin_settings(runtime):
    hass, _ = runtime
    assert await storage._get_store(hass).async_load() is None
    defaults = await storage.async_load_assistant_settings(hass)
    assert {item['actionType'] for item in defaults} == {'default_main', 'not_understand', 'finish_miss', 'stop'}
    assert len({item['uuid'] for item in defaults}) == 4
    assert await storage._get_store(hass).async_load() == defaults
    edited = deepcopy(defaults)
    edited[0]['voiceResponse'] = 'Пользовательский ответ'
    await storage.async_save_assistant_settings(hass, edited)
    assert await storage.async_load_assistant_settings(hass) == edited


async def test_legacy_stop_moves_to_settings_preserving_uuid_phrases_and_script(runtime):
    from custom_components.ha_dialog_ui.storage.assistant_commands_storage import async_save_assistant_commands, async_load_assistant_commands
    hass, _ = runtime
    legacy = {'uuid': 'old-stop', 'title': 'Мой стоп', 'status': False, 'componentDialog': {
        'actionType': 'stop', 'voiceCommands': ['останов(и|ить)'], 'script_entity_id': 'script.stop',
        'voiceResponseArray': [{'actionType': 'default', 'voiceResponse': 'Остановлено'}]}}
    other = {'uuid': 'light', 'status': True, 'componentDialog': {'actionType': 'light'}}
    await async_save_assistant_commands(hass, [legacy, other])
    settings = await storage.async_load_assistant_settings(hass)
    stop = next(item for item in settings if item['actionType'] == 'stop')
    assert stop['uuid'] == 'old-stop'
    assert stop['voiceCommands'] == ['останов(и|ить)']
    assert stop['voiceResponse'] == 'Остановлено'
    assert stop['status'] is False
    assert stop['script_entity_id'] == 'script.stop'
    assert await async_load_assistant_commands(hass) == [other]
    assert await storage.async_load_assistant_settings(hass) == settings


async def test_existing_settings_receive_stop_without_resetting_responses(runtime):
    hass, _ = runtime
    original = [{'uuid': 'default', 'actionType': 'default_main', 'voiceResponse': 'Мой ответ'}]
    await storage.async_save_assistant_settings(hass, original)
    result = await storage.async_load_assistant_settings(hass)
    assert result[0] == original[0]
    assert len(result) == 2
    assert result[1]['actionType'] == 'stop'
