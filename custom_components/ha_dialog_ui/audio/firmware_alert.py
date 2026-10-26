"""Hand off alert playback to capable ESPHome firmware; HA keeps only the schedule."""

import logging

from homeassistant.components import media_source
from homeassistant.components.media_player import async_process_play_media_url
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.network import get_url
from homeassistant.util import slugify

from ..const import DEFAULT_ALERT_MEDIA_ID

_LOGGER = logging.getLogger(__name__)


def native_service(hass, player, action):
    entity = er.async_get(hass).async_get(player)
    device = (
        dr.async_get(hass).async_get(entity.device_id)
        if entity and entity.device_id
        else None
    )
    if not device:
        return None
    for entry_id in device.config_entries:
        entry = hass.config_entries.async_get_entry(entry_id)
        if entry and entry.domain == "esphome" and not entry.disabled_by:
            node = entry.data.get("device_name")
            if node:
                service = slugify(f"{node}_{action}")
                if hass.services.has_service("esphome", service):
                    return service
    return None


async def async_start(hass, player, audio_file):
    service = native_service(hass, player, "alert_start")
    if not service:
        return False
    url = ""
    if audio_file != DEFAULT_ALERT_MEDIA_ID:
        try:
            if audio_file.startswith(("http://", "https://")):
                source = audio_file
            else:
                media_id = (
                    audio_file
                    if audio_file.startswith("media-source://")
                    else "media-source://media_source/local/" + audio_file
                )
                resolved = await media_source.async_resolve_media(
                    hass, media_id, player
                )
                source = resolved.url
            url = async_process_play_media_url(hass, source, allow_relative_url=True)
            if url.startswith("/"):
                url = get_url(hass, allow_external=False).rstrip("/") + url
        except media_source.Unresolvable:
            _LOGGER.warning(
                "Selected alert music is unavailable; using the speaker's embedded sound"
            )
    await hass.services.async_call("esphome", service, {"url": url}, blocking=True)
    return True
