"""Actual HA native-service routing, without HA owning repeat or volume restoration."""

from unittest.mock import patch

from homeassistant.components.media_source import Unresolvable
from homeassistant.core import ServiceCall
from test_audio_notification import speaker as speaker  # noqa: PLC0414
from test_timer_runtime import runtime as runtime  # noqa: PLC0414

from custom_components.ha_dialog_ui.audio.audio_notification import audio_notification
from custom_components.ha_dialog_ui.const import DEFAULT_ALERT_MEDIA_ID
from custom_components.ha_dialog_ui.services import async_register_services


async def prepare(speaker):
    hass, _, _, _, entry = speaker
    hass.config_entries.async_update_entry(entry, data={"device_name": "voice"})
    commands, media = [], []

    async def alert(call: ServiceCall):
        commands.append(call.data)

    async def play(call: ServiceCall):
        media.append(call.data)

    hass.services.async_register("esphome", "voice_alert_start", alert)
    hass.services.async_register("media_player", "play_media", play)
    hass.services.async_register("media_player", "volume_set", play)
    return commands, media


async def test_native_alert_has_no_ha_volume_or_playback_jobs(speaker):
    hass, device, _, _, _ = speaker
    commands, media = await prepare(speaker)
    await audio_notification(hass, device.id, DEFAULT_ALERT_MEDIA_ID, "0.3-0.7")
    assert commands == [{"url": ""}]
    assert media == []


async def test_native_alert_preserves_custom_music_and_signs_internal_url(speaker):
    from types import SimpleNamespace

    hass, device, _, _, _ = speaker
    commands, media = await prepare(speaker)
    with (
        patch(
            "custom_components.ha_dialog_ui.audio.firmware_alert.media_source.async_resolve_media",
            return_value=SimpleNamespace(url="/media/my-alarm.mp3"),
        ),
        patch(
            "custom_components.ha_dialog_ui.audio.firmware_alert.async_process_play_media_url",
            return_value="/media/my-alarm.mp3?authSig=temporary",
        ),
        patch(
            "custom_components.ha_dialog_ui.audio.firmware_alert.get_url",
            return_value="http://ha.local:8123",
        ),
    ):
        await audio_notification(hass, device.id, "my-alarm.mp3", "0.3-0.7")
    assert commands == [
        {"url": "http://ha.local:8123/media/my-alarm.mp3?authSig=temporary"}
    ]
    assert not media


async def test_missing_native_custom_music_uses_embedded_sound(speaker):
    hass, device, _, _, _ = speaker
    commands, _ = await prepare(speaker)
    with patch(
        "custom_components.ha_dialog_ui.audio.firmware_alert.media_source.async_resolve_media",
        side_effect=Unresolvable("missing"),
    ):
        await audio_notification(hass, device.id, "missing.mp3", "0.3-0.7")
    assert commands == [{"url": ""}]


async def test_stop_script_calls_only_target_speaker_native_action(speaker):
    hass, device, _, _, _ = speaker
    await prepare(speaker)
    stopped = []

    async def stop(call):
        stopped.append(dict(call.data))

    hass.services.async_register("esphome", "voice_activity_stop", stop)
    async_register_services(hass)
    await hass.services.async_call(
        "ha_dialog_ui", "activity_stop", {"device_id": device.id}, blocking=True
    )
    assert stopped == [{}]


async def test_v2_alert_receives_alarm_type_and_is_preferred_over_v1(speaker):
    hass, device, _, _, _ = speaker
    old_commands, _ = await prepare(speaker)
    typed_commands = []

    async def start(call):
        typed_commands.append(dict(call.data))

    hass.services.async_register("esphome", "voice_alert_start_v2", start)
    await audio_notification(
        hass, device.id, DEFAULT_ALERT_MEDIA_ID, "0.3-0.7", alert_kind="alarm"
    )
    await audio_notification(hass, device.id, DEFAULT_ALERT_MEDIA_ID, "0.3-0.7")
    assert typed_commands == [
        {"url": "", "kind": "alarm"},
        {"url": "", "kind": "timer"},
    ]
    assert old_commands == []
