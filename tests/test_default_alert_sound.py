"""The installed integration must serve a playable sound, without a media-library file."""
import io
import wave
from pathlib import Path

from homeassistant.components.http import StaticPathConfig
from test_calls import calls as calls  # noqa: PLC0414 - reuse real HA HTTP fixture

from custom_components.ha_dialog_ui.const import DEFAULT_ALERT_PATH


async def test_installed_default_alert_is_playable_over_ha_http(calls):
    root = Path(__file__).resolve().parents[1]
    static = root / "custom_components/ha_dialog_ui/static"
    await calls.hass.http.async_register_static_paths([
        StaticPathConfig("/ha_dialog_ui_static", str(static), cache_headers=False),
    ])
    async with calls.client.get(calls.base + DEFAULT_ALERT_PATH) as response:
        assert response.status == 200
        sound = await response.read()
    assert sound == (root / "ui/public/sounds/default-alert.wav").read_bytes()
    with wave.open(io.BytesIO(sound)) as audio:
        assert audio.getnchannels() == 1
        assert audio.getsampwidth() == 2
        assert audio.getframerate() == 16000
        assert audio.getnframes() / audio.getframerate() == 12
        assert any(audio.readframes(audio.getnframes()))
