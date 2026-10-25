"""User-addressed pending calls; no microphone is opened until explicit acceptance."""

import asyncio
import secrets
from dataclasses import dataclass

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.exceptions import HomeAssistantError

from .browser import get_peer


@dataclass
class Invitation:
    id: str
    source: str
    user_id: str
    timeout: asyncio.Task | None = None
    starting: asyncio.Task | None = None


async def create(runtime, source, user_id, timeout=120):
    user = await runtime.hass.auth.async_get_user(user_id)
    if not user or not user.is_active or user.system_generated:
        raise HomeAssistantError("Выберите активного пользователя Home Assistant")
    async with runtime.lock:
        runtime.resolve(source)
        if not runtime.running or runtime.busy(source) or runtime.radio_busy(source):
            raise HomeAssistantError("Колонка занята или недоступна")
        invitation = Invitation(secrets.token_urlsafe(16), source, user_id)
        runtime.invitations[invitation.id] = invitation
        invitation.starting = asyncio.current_task()
    try:
        await runtime.configure_ringtone(source)
        await runtime.native(source, "ring", {"incoming": False})
        await runtime.wait_ring(source, False)
        if invitation.id not in runtime.invitations:
            raise HomeAssistantError("Вызов отменён")

        async def expire():
            await asyncio.sleep(timeout)
            await cancel(runtime, invitation.id)

        invitation.timeout = runtime.hass.async_create_task(expire())
    except BaseException:
        await cancel(runtime, invitation.id)
        raise
    finally:
        invitation.starting = None
        if invitation.id not in runtime.invitations:
            await asyncio.gather(runtime.native(source, "end"), return_exceptions=True)
            runtime.retiring.discard(source)
    return invitation.id


async def cancel(runtime, invitation_id):
    invitation = runtime.invitations.pop(invitation_id, None)
    if not invitation:
        return
    if invitation.timeout and invitation.timeout is not asyncio.current_task():
        invitation.timeout.cancel()
    if invitation.starting:
        runtime.retiring.add(invitation.source)
    await asyncio.gather(
        runtime.native(invitation.source, "end"), return_exceptions=True
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_accept",
        vol.Required("view_id"): str,
        vol.Required("invitation_id"): str,
    }
)
@websocket_api.async_response
async def accept(hass, connection, msg):
    try:
        runtime, peer = get_peer(hass, connection, msg)
        previous_call = peer.call_id
        invitation = runtime.invitations.get(msg["invitation_id"])
        if not invitation or invitation.user_id != connection.user.id:
            raise HomeAssistantError("Входящий вызов недоступен")
        if invitation.starting:
            await asyncio.shield(invitation.starting)
        await runtime.dial(
            peer.id,
            invitation.source,
            browser=peer,
            phone_incoming=True,
            invitation_id=invitation.id,
        )
        await runtime.answer(invitation.source)
        if peer.closed or peer.call_id not in runtime.calls:
            raise HomeAssistantError("Звонок завершён")
        connection.send_result(msg["id"], {"call_id": peer.call_id})
    except (HomeAssistantError, TimeoutError):
        if (
            "previous_call" in locals()
            and peer.call_id
            and peer.call_id != previous_call
        ):
            await runtime.end(peer.call_id)
        connection.send_error(
            msg["id"], "call_error", "Вызов недоступен или не удалось подключить звук"
        )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "ha_dialog_ui/calls/browser_decline",
        vol.Required("view_id"): str,
        vol.Required("invitation_id"): str,
    }
)
@websocket_api.async_response
async def decline(hass, connection, msg):
    try:
        runtime, _ = get_peer(hass, connection, msg)
        invitation = runtime.invitations.get(msg["invitation_id"])
        if not invitation or invitation.user_id != connection.user.id:
            raise HomeAssistantError("Вызов недоступен")
        await cancel(runtime, invitation.id)
    except HomeAssistantError:
        connection.send_error(msg["id"], "call_error", "Вызов недоступен")
    else:
        connection.send_result(msg["id"])
