"""Retired speech provider settings are excluded without altering other settings."""
import pytest

from custom_components.ha_dialog_ui.storage.settings_storage import (
    SETTINGS_FALLBACKS, normalize_settings, async_save_settings, async_load_settings,
    get_cached_settings,
)
from test_timer_runtime import runtime


def test_normalize_discards_retired_settings_without_mutating_input():
    original = {"yandex_tts": {"api_key": "retired-test-value"},
                "client_id": "client", "timer_alarm": {"global_music_timer": "custom.mp3"},
                "remout": {"token": "remote-test-value"}, "custom_option": True}
    normalized = normalize_settings(original)
    assert "yandex_tts" not in SETTINGS_FALLBACKS
    assert "yandex_tts" not in normalized
    assert "yandex_tts" in original
    assert normalized["client_id"] == "client"
    assert normalized["timer_alarm"]["global_music_timer"] == "custom.mp3"
    assert normalized["remout"]["token"] == "remote-test-value"
    assert normalized["custom_option"] is True


@pytest.mark.asyncio
async def test_save_and_cache_exclude_retired_settings(runtime):
    hass, _ = runtime
    await async_save_settings(hass, {"yandex_tts": {"voice": "legacy"}, "client_id": "client"})
    assert "yandex_tts" not in await async_load_settings(hass)
    assert "yandex_tts" not in get_cached_settings(hass)
    assert get_cached_settings(hass)["client_id"] == "client"


@pytest.mark.asyncio
async def test_settings_response_does_not_echo_retired_fields(runtime):
    import inspect
    from types import SimpleNamespace
    from unittest.mock import AsyncMock, Mock
    from custom_components.ha_dialog_ui.const import DOMAIN
    from custom_components.ha_dialog_ui.src.api.settings.settings_api import _ws_save_settings
    hass, _ = runtime
    coordinator = SimpleNamespace(async_reload=AsyncMock())
    hass.data[DOMAIN] = {"coordinator": coordinator}
    connection = SimpleNamespace(send_result=Mock())
    await inspect.unwrap(_ws_save_settings)(hass, connection, {
        "id": 1, "data": {"client_id": "client", "yandex_tts": {"voice": "legacy"}},
    })
    response = connection.send_result.call_args.args[1]
    assert response["saved"]
    assert response["settings"]["client_id"] == "client"
    assert "yandex_tts" not in response["settings"]
    coordinator.async_reload.assert_awaited_once()
