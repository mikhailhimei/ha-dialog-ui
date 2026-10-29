"""Dictionary edits are persistent, validated and applied to existing consumers."""
from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import Mock

import pytest
from homeassistant.exceptions import Unauthorized

from custom_components.ha_dialog_ui import normalization_settings as editor
from custom_components.ha_dialog_ui.src.utils.normalization_dictionary import load_normalization_dictionary, apply_normalization_dictionary
from custom_components.ha_dialog_ui.src.utils.text_normalization import numbers, dates
from custom_components.ha_dialog_ui.src.utils import value_parser
from custom_components.ha_dialog_ui.src.service.matching import text
from test_timer_runtime import runtime
from test_request_mutations import async_handler


@pytest.fixture(autouse=True)
def restore_dictionary():
    original = deepcopy(load_normalization_dictionary())
    yield
    apply_normalization_dictionary(original)


def connection():
    return SimpleNamespace(send_result=Mock(), send_error=Mock())


async def test_list_save_is_live_and_restored_at_startup(runtime):
    hass, _ = runtime
    conn = connection()
    await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': ['location_stop_words'], 'value': ['новоеслово'], 'title': 'Мои предлоги'}})
    conn.send_error.assert_not_called()
    assert 'новоеслово' in text.STOP_TOKENS
    assert numbers.sanitize_location_text('кухня новоеслово') == 'кухня'
    stored = await editor._store(hass).async_load()
    assert stored['labels']['["location_stop_words"]'] == 'Мои предлоги'
    apply_normalization_dictionary(editor._defaults())
    assert 'новоеслово' not in text.STOP_TOKENS
    await editor.async_setup_normalization_settings(hass)
    assert 'новоеслово' in text.STOP_TOKENS


async def test_nested_month_edits_refresh_derived_tables(runtime):
    hass, _ = runtime
    conn = connection()
    await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': ['months', '1'], 'value': ['первомесяц'], 'title': 'Первый месяц'}})
    conn.send_error.assert_not_called()
    assert value_parser._MONTH_NAME_TO_NUMBER['первомесяц'] == 1
    assert 'первомесяц' in value_parser._MONTH_PATTERN


async def test_refresh_keeps_exported_month_marker_identity(runtime):
    hass, _ = runtime
    markers = dates.MONTH_MARKERS
    conn = connection()
    await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': ['genitive_day', 'month_markers', 'январь'], 'value': 'новыйянварь', 'title': 'Январь'}})
    conn.send_error.assert_not_called()
    assert markers is dates.MONTH_MARKERS
    assert markers['январь'] == 'новыйянварь'


@pytest.mark.parametrize('path,value', [(['units'], {}), (['unknown'], []), (['months', '1'], 'bad'), (['thousands'], [1]), (['genitive_day', 'months_map', 'января'], 13)])
async def test_bad_schema_does_not_modify_saved_or_active_data(runtime, path, value):
    hass, _ = runtime
    original = deepcopy(load_normalization_dictionary())
    conn = connection()
    await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': path, 'value': value, 'title': 'test'}})
    conn.send_error.assert_called_once()
    assert await editor._store(hass).async_load() is None
    assert load_normalization_dictionary() == original


@pytest.mark.parametrize('handler', [editor._get_dictionary, editor._save_dictionary])
def test_admin_required(handler):
    with pytest.raises(Unauthorized):
        handler(None, SimpleNamespace(user=SimpleNamespace(is_admin=False)), {'id': 1})


async def test_edited_number_alias_is_recognized_without_restart(runtime):
    hass, _ = runtime
    conn = connection()
    await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': ['units', '2'], 'value': ['двойчик'], 'title': 'Два'}})
    conn.send_error.assert_not_called()
    assert numbers.normalize_numbers('насыпь двойчик грамма') == 'насыпь 2 грамма'


async def test_storage_failure_leaves_active_dictionary_unchanged(runtime):
    from unittest.mock import AsyncMock, patch
    hass, _ = runtime
    original = deepcopy(load_normalization_dictionary())
    conn = connection()
    store = SimpleNamespace(async_load=AsyncMock(return_value={}), async_save=AsyncMock(side_effect=OSError('disk full')))
    with patch.object(editor, '_store', return_value=store):
        await async_handler(editor._save_dictionary)(hass, conn, {'id': 1, 'data': {'path': ['location_stop_words'], 'value': ['test'], 'title': 'test'}})
    conn.send_error.assert_called_once()
    assert load_normalization_dictionary() == original


async def test_saving_one_section_preserves_other_sections(runtime):
    hass, _ = runtime
    conn = connection()
    for index, (path, value) in enumerate([(['units', '2'], ['двойчик']), (['location_stop_words'], ['новоеслово'])]):
        await async_handler(editor._save_dictionary)(hass, conn, {'id': index, 'data': {'path': path, 'value': value, 'title': 'Название'}})
    conn.send_error.assert_not_called()
    assert numbers.normalize_numbers('двойчик') == '2'
    assert 'новоеслово' in text.STOP_TOKENS
    conn.send_result.reset_mock()
    await async_handler(editor._get_dictionary)(hass, conn, {'id': 3})
    assert conn.send_result.call_args.args[1]['labels']['["units","2"]'] == 'Название'
