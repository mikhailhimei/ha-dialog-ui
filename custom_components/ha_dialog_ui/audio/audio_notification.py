"""Resolve notification speakers and manage playback volume cleanup."""

import asyncio
import logging
from typing import Any

from homeassistant.components import media_source
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.network import get_url

from ..const import DEFAULT_ALERT_MEDIA_ID, DEFAULT_ALERT_PATH

_LOGGER = logging.getLogger(__name__)


def _resolve_media_player_entity_id(hass, device_ref, *, log_warnings=True) -> str:
    """Resolve only the specified device; never fall back to another speaker."""
    device_ref = str(device_ref or "").strip()
    registry = er.async_get(hass)

    def log_warning(*args):
        if log_warnings:
            _LOGGER.warning(*args)

    def is_playable(entity_id):
        entry = registry.async_get(entity_id)
        state = hass.states.get(entity_id)
        return (
            (entry is None or not entry.disabled)
            and state is not None
            and state.state not in {"unavailable", "unknown"}
        )

    if device_ref.startswith("media_player."):
        if is_playable(device_ref):
            return device_ref
        log_warning("Playback entity %s is missing, disabled or unavailable", device_ref)
        return ""

    # A timer can reference a registry device ID or any entity of that device
    # (for example an assist_satellite). A non-player entity is never a target.
    reference = registry.async_get(device_ref)
    device_id = reference.device_id if reference is not None else device_ref
    device = dr.async_get(hass).async_get(device_id) if device_id else None
    if device is None:
        log_warning("Playback reference %s does not resolve to a Home Assistant device", device_ref)
        return ""
    players = [entry for entry in er.async_entries_for_device(registry, device.id)
               if entry.entity_id.startswith("media_player.")]
    available = [entry.entity_id for entry in players if is_playable(entry.entity_id)]
    if len(available) == 1:
        return available[0]
    if len(available) > 1:
        log_warning("Device %s has multiple available media players: %s; specify a media_player entity_id",
                        device.id, available)
    elif players:
        log_warning("Device %s has no available media player (entity, disabled, state): %s",
                        device.id, [(entry.entity_id, entry.disabled,
                                     hass.states.get(entry.entity_id).state if hass.states.get(entry.entity_id) else "missing")
                                    for entry in players])
    else:
        log_warning("Device %s (%s) has no registered media_player entity",
                        device.id, device.name_by_user or device.name or "unnamed")
    return ""


async def _async_restore_volume(hass, target: str, previous_volume: Any) -> None:
    try:
        await hass.services.async_call(
            "media_player",
            "volume_set",
            {"volume_level": float(previous_volume)},
            target={"entity_id": target},
            blocking=False,
        )
    except Exception as err:
        _LOGGER.error("Failed to restore volume on %s: %s", target, err)


async def _async_ramp_volume(
    hass,
    target: str,
    start: float,
    end: float,
    interval: float = 15.0,
) -> None:
    try:
        current_volume = float(start)
        end = float(end)

        while current_volume < end:
            await asyncio.sleep(interval)

            state = hass.states.get(target)

            if state is None:
                break

            if state.state in ("idle", "off", "paused"):
                break

            current_volume = round(min(current_volume + 0.1, end), 1)

            await hass.services.async_call(
                "media_player",
                "volume_set",
                {"volume_level": current_volume},
                target={"entity_id": target},
                blocking=True,
            )

            await asyncio.sleep(0.5)

            if current_volume >= end:
                break

    except Exception as err:
        _LOGGER.error("Volume ramp task failed for %s: %s", target, err)


async def _async_wait_until_finished(
    hass,
    target: str,
    check_interval: float = 0.1,
    start_timeout: float = 5.0,
) -> None:
    """Wait until media player starts and then stops playing."""
    try:
        elapsed = 0.0
        seen_playback = False

        while True:
            await asyncio.sleep(check_interval)
            elapsed += check_interval

            state = hass.states.get(target)

            if state is None:
                break

            if state.state == "playing":
                seen_playback = True
                continue

            if state.state in ("idle", "off", "paused", "unavailable", "unknown") and (
                seen_playback or elapsed >= start_timeout
            ):
                break

    except Exception as err:
        _LOGGER.error("Failed while waiting for playback to finish on %s: %s", target, err)


async def _async_stop_volume_ramp(ramp_task: asyncio.Task | None) -> None:
    if ramp_task is None:
        return
    ramp_task.cancel()
    await asyncio.gather(ramp_task, return_exceptions=True)


async def _async_restore_volume_after_playback(
    hass, target: str, previous_volume: Any, ramp_task: asyncio.Task | None = None,
) -> None:
    """Stop ramping and restore the player's volume after notification playback."""
    try:
        await _async_wait_until_finished(hass, target)
    finally:
        try:
            await _async_stop_volume_ramp(ramp_task)
        finally:
            if previous_volume is not None:
                await _async_restore_volume(hass, target, previous_volume)


async def audio_notification(
    hass, device_id, audio_file, volume_level=None, wait_until_finished=False
):
    audio_file = str(audio_file or "").strip()
    if not audio_file:
        _LOGGER.error("No audio file provided for notification playback")
        return
    if not device_id:
        _LOGGER.error("No device_id/entity_id provided for notification playback")
        return

    target = _resolve_media_player_entity_id(hass, device_id)
    if not target:
        _LOGGER.error("Cannot play notification for device_id/entity_id: %s (see resolution warning)", device_id)
        return

    if audio_file in ("timer-alarm.mp3", "media-source://media_source/local/timer-alarm.mp3"):
        # Old installations used this filename as a placeholder. Keep real custom
        # files intact, but supply the bundled sound when the placeholder is absent.
        try:
            await media_source.async_resolve_media(hass, "media-source://media_source/local/timer-alarm.mp3", None)
        except media_source.Unresolvable:
            audio_file = DEFAULT_ALERT_MEDIA_ID
    if audio_file == DEFAULT_ALERT_MEDIA_ID:
        audio_url = get_url(hass, allow_external=False).rstrip("/") + DEFAULT_ALERT_PATH
    else:
        audio_url = (
            audio_file
            if audio_file.startswith(("media-source://", "https://", "http://"))
            else f"media-source://media_source/local/{audio_file}"
        )

    is_volume_range = isinstance(volume_level, str) and "-" in volume_level
    range_start = None
    range_end = None
    state = hass.states.get(target)
    previous_volume = state.attributes.get("volume_level") if state is not None else None
    if is_volume_range:
        parts = volume_level.split("-", 1)
        range_start = float(parts[0])
        range_end = float(parts[1])
        volume = range_start
    else:
        volume = volume_level if volume_level is not None else previous_volume

    restore_on_exit = previous_volume is not None and volume_level is not None
    ramp_task = None
    try:
        if volume is not None:
            try:
                await hass.services.async_call(
                    "media_player", "volume_set", {"volume_level": float(volume)},
                    target={"entity_id": target}, blocking=True,
                )
            except Exception as err:
                _LOGGER.error("Failed to set volume on %s: %s", target, err)

        await hass.services.async_call(
            "media_player", "play_media",
            {"media_content_id": audio_url, "media_content_type": "music", "enqueue": "replace"},
            target={"entity_id": target}, blocking=True,
        )

        if is_volume_range:
            ramp_task = hass.async_create_task(
                _async_ramp_volume(hass, target, range_start, range_end, 10.0)
            )

        if wait_until_finished:
            await _async_wait_until_finished(hass, target)
        elif restore_on_exit or ramp_task is not None:
            cleanup = _async_restore_volume_after_playback(
                hass, target, previous_volume if restore_on_exit else None, ramp_task,
            )
            try:
                hass.async_create_task(cleanup)
            except Exception:
                cleanup.close()
                raise
            # The playback cleanup task now owns the ramp and restoration.
            ramp_task = None
            restore_on_exit = False
    except Exception as err:
        _LOGGER.error("Failed to play notification %s on %s (device reference %s): %s", audio_url, target, device_id, err)
    finally:
        try:
            await _async_stop_volume_ramp(ramp_task)
        finally:
            if restore_on_exit:
                await _async_restore_volume(hass, target, previous_volume)
