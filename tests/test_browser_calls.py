"""Authenticated browser PCM to one speaker, return PCM and ownership cleanup."""

import asyncio
import base64

from test_calls import calls as calls  # noqa: PLC0414 - pytest fixture re-export

from custom_components.ha_dialog_ui.baby_monitor.playback import WAV_HEADER


async def connect(data, user=None):
    user = user or await data.hass.auth.async_create_user("phone")
    refresh = await data.hass.auth.async_create_refresh_token(
        user, client_id="http://localhost/"
    )
    token = data.hass.auth.async_create_access_token(refresh)
    ws = await data.client.ws_connect(data.base + "/api/websocket")
    await ws.receive_json()
    await ws.send_json({"type": "auth", "access_token": token})
    assert (await ws.receive_json())["type"] == "auth_ok"
    return ws


async def reply(ws, msg_id):
    async with asyncio.timeout(5):
        while True:
            msg = await ws.receive_json()
            if msg["type"] == "result" and msg.get("id") == msg_id:
                return msg


async def open_view(data, ws):
    await ws.send_json(
        {"id": 1, "type": "ha_dialog_ui/calls/watch", "view_id": "phone-view"}
    )
    assert (await reply(ws, 1))["success"]


async def start_phone(data, ws):
    await ws.send_json(
        {
            "id": 2,
            "type": "ha_dialog_ui/calls/browser_start",
            "view_id": "phone-view",
            "target_device_id": data.devices["bedroom"],
        }
    )
    response = await reply(ws, 2)
    assert response["success"], response
    return response["result"]["call_id"]


async def test_browser_to_speaker_and_return_audio_after_answer(calls):
    async with await connect(calls) as ws:
        await open_view(calls, ws)
        call_id = await start_phone(calls, ws)
        assert [e[:2] for e in calls.events] == [("bedroom", "ring")]
        pcm = b"\x03\x00" * 640
        await ws.send_json(
            {
                "id": 3,
                "type": "ha_dialog_ui/calls/browser_audio",
                "view_id": "phone-view",
                "pcm": base64.b64encode(pcm).decode(),
            }
        )
        assert (await reply(ws, 3))["result"][
            "accepted"
        ] is False  # No transmission before answer.
        await ws.send_json(
            {
                "id": 4,
                "type": "ha_dialog_ui/calls/browser_receive",
                "view_id": "phone-view",
            }
        )
        assert (await reply(ws, 4))["success"]
        await calls.hass.services.async_call(
            "ha_dialog_ui",
            "call_answer",
            {"device_id": calls.devices["bedroom"]},
            blocking=True,
        )
        assert calls.manager.calls[call_id].state == "active"
        # Browser receives the actual target microphone's PCM on its authenticated WS.
        async with asyncio.timeout(3):
            while True:
                event = await ws.receive_json()
                if (
                    event.get("id") == 4
                    and event.get("event", {}).get("type") == "audio"
                ):
                    assert base64.b64decode(event["event"]["pcm"]) == b"\x02\x00" * 640
                    break
        await ws.send_json(
            {
                "id": 5,
                "type": "ha_dialog_ui/calls/browser_audio",
                "view_id": "phone-view",
                "pcm": base64.b64encode(pcm).decode(),
            }
        )
        assert (await reply(ws, 5))["result"]["accepted"]
        response = calls.responses["bedroom"]
        assert await response.content.readexactly(44) == WAV_HEADER
        assert await response.content.readexactly(1280) == pcm
        assert {e[0] for e in calls.events if e[1] == "source"} == {"bedroom"}
        await ws.send_json(
            {"id": 6, "type": "ha_dialog_ui/calls/browser_end", "view_id": "phone-view"}
        )
        assert (await reply(ws, 6))["success"]
        assert not calls.manager.calls
        assert {e[0] for e in calls.events if e[1] == "end"} == {"bedroom"}


async def test_another_authenticated_connection_cannot_take_phone_audio(calls):
    async with await connect(calls) as owner, await connect(calls) as other:
        await open_view(calls, owner)
        call_id = await start_phone(calls, owner)
        await other.send_json(
            {
                "id": 1,
                "type": "ha_dialog_ui/calls/browser_audio",
                "view_id": "phone-view",
                "pcm": base64.b64encode(b"x" * 1280).decode(),
            }
        )
        assert not (await reply(other, 1))["success"]
        await other.send_json(
            {
                "id": 2,
                "type": "ha_dialog_ui/calls/browser_receive",
                "view_id": "phone-view",
            }
        )
        assert not (await reply(other, 2))["success"]
        await other.send_json(
            {"id": 3, "type": "ha_dialog_ui/calls/browser_end", "view_id": "phone-view"}
        )
        assert not (await reply(other, 3))["success"]
        assert call_id in calls.manager.calls


async def test_phone_disconnect_hangs_up_and_releases_capture(calls):
    ws = await connect(calls)
    await open_view(calls, ws)
    await start_phone(calls, ws)
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_answer",
        {"device_id": calls.devices["bedroom"]},
        blocking=True,
    )
    await ws.close()
    for _ in range(100):
        if not calls.manager.calls and not calls.manager.browser_views:
            break
        await asyncio.sleep(0.01)
    assert not calls.manager.calls
    assert not calls.manager.browser_views
    assert not calls.manager.streams.sessions


async def test_bad_frames_rejected_and_no_secrets_in_browser_snapshot(calls):
    async with await connect(calls) as ws:
        await open_view(calls, ws)
        await start_phone(calls, ws)
        for index, pcm in enumerate(
            ("not-base64!", base64.b64encode(b"tiny").decode(), "x" * 1801), 3
        ):
            await ws.send_json(
                {
                    "id": index,
                    "type": "ha_dialog_ui/calls/browser_audio",
                    "view_id": "phone-view",
                    "pcm": pcm,
                }
            )
            assert not (await reply(ws, index))["success"]
        peer = next(iter(calls.manager.browser_views.values()))
        snapshot = calls.manager.snapshot(peer)
        assert snapshot["owned_call_id"] == peer.call_id
        assert snapshot["calls"][0]["source_type"] == "browser"
        assert snapshot["calls"][0]["source_device_id"] is None
        assert "key" not in str(snapshot) and "/stream/" not in str(snapshot)


async def test_browser_view_does_not_own_script_calls(calls):
    async with await connect(calls) as ws:
        await open_view(calls, ws)
        await calls.manager.dial(calls.devices["kitchen"], calls.devices["bedroom"])
        await ws.send_json({"id": 2, "type": "unsubscribe_events", "subscription": 1})
        assert (await reply(ws, 2))["success"]
        assert len(calls.manager.calls) == 1
        assert not calls.manager.browser_views


async def test_speaker_uplink_loss_ends_phone_call_without_browser_audio_subscription(
    calls,
):
    async with await connect(calls) as ws:
        await open_view(calls, ws)
        await start_phone(calls, ws)
        await calls.hass.services.async_call(
            "ha_dialog_ui",
            "call_answer",
            {"device_id": calls.devices["bedroom"]},
            blocking=True,
        )
        calls.writers["bedroom"].close()
        for _ in range(100):
            if not calls.manager.calls:
                break
            await asyncio.sleep(0.01)
        assert not calls.manager.calls
        assert not calls.manager.streams.sessions
        assert not calls.manager.receivers["bedroom"].listeners


async def test_incoming_phone_waits_for_user_and_explicit_answer(calls):
    user = await calls.hass.auth.async_create_user("recipient")
    other = await calls.hass.auth.async_create_user("other")
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_phone",
        {
            "source_device_id": calls.devices["kitchen"],
            "user_id": user.id,
        },
        blocking=True,
    )
    invitation = next(iter(calls.manager.invitations.values()))
    assert calls.manager.busy(calls.devices["kitchen"])
    assert not calls.manager.calls
    assert not any(event[1] == "source" for event in calls.events)
    async with await connect(calls, other) as wrong:
        await open_view(calls, wrong)
        peer = next(
            p for p in calls.manager.browser_views.values() if p.user_id == other.id
        )
        assert calls.manager.snapshot(peer)["incoming"] == []
        await wrong.send_json(
            {
                "id": 2,
                "type": "ha_dialog_ui/calls/browser_accept",
                "view_id": "phone-view",
                "invitation_id": invitation.id,
            }
        )
        assert not (await reply(wrong, 2))["success"]
        assert invitation.id in calls.manager.invitations
    async with await connect(calls, user) as phone:
        await open_view(calls, phone)
        peer = next(
            p for p in calls.manager.browser_views.values() if p.user_id == user.id
        )
        assert calls.manager.snapshot(peer)["incoming"][0]["id"] == invitation.id
        await phone.send_json(
            {
                "id": 2,
                "type": "ha_dialog_ui/calls/browser_accept",
                "view_id": "phone-view",
                "invitation_id": invitation.id,
            }
        )
        result = await reply(phone, 2)
        assert result["success"], result
        assert calls.manager.calls[result["result"]["call_id"]].state == "active"
        assert not calls.manager.invitations
        await phone.send_json(
            {"id": 3, "type": "ha_dialog_ui/calls/browser_end", "view_id": "phone-view"}
        )
        assert (await reply(phone, 3))["success"]
        assert not calls.manager.calls


async def test_incoming_phone_decline_does_not_open_microphones(calls):
    user = await calls.hass.auth.async_create_user("recipient")
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_phone",
        {"source_device_id": calls.devices["bedroom"], "user_id": user.id},
        blocking=True,
    )
    invitation = next(iter(calls.manager.invitations))
    async with await connect(calls, user) as phone:
        await open_view(calls, phone)
        await phone.send_json(
            {
                "id": 2,
                "type": "ha_dialog_ui/calls/browser_decline",
                "view_id": "phone-view",
                "invitation_id": invitation,
            }
        )
        assert (await reply(phone, 2))["success"]
        assert not calls.manager.invitations
        assert not any(event[1] == "source" for event in calls.events)


async def test_music_ringtone_resolved_per_call_without_changing_default(calls):
    from types import SimpleNamespace
    from unittest.mock import patch

    from custom_components.ha_dialog_ui.storage.settings_storage import (
        async_save_settings,
    )

    configured = []

    async def configure(call):
        configured.append(call.data["url"])

    calls.hass.services.async_register(
        "esphome", "bedroom_call_ringtone_configure", configure
    )
    await async_save_settings(
        calls.hass, {"call_music": "media-source://media_source/local/ring.mp3"}
    )
    with (
        patch(
            "homeassistant.components.media_source.async_resolve_media",
            return_value=SimpleNamespace(url="/media/ring.mp3"),
        ) as resolve,
        patch(
            "homeassistant.components.media_player.async_process_play_media_url",
            return_value="/media/ring.mp3?authSig=temporary",
        ),
    ):
        await calls.manager.configure_ringtone(calls.devices["bedroom"])
        assert resolve.call_args.args[1] == "media-source://media_source/local/ring.mp3"
    assert configured[-1] == calls.base + "/media/ring.mp3?authSig=temporary"
    assert "authSig" not in str(calls.manager.snapshot())
    await async_save_settings(calls.hass, {"call_music": ""})
    await calls.manager.configure_ringtone(calls.devices["bedroom"])
    assert configured[-1] == ""


async def test_pending_phone_survives_view_close_and_script_can_cancel(calls):
    user = await calls.hass.auth.async_create_user("recipient")
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_phone",
        {"source_device_id": calls.devices["kitchen"], "user_id": user.id},
        blocking=True,
    )
    async with await connect(calls, user) as phone:
        await open_view(calls, phone)
    await asyncio.sleep(0.05)
    assert calls.manager.invitations
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_end",
        {"device_id": calls.devices["kitchen"]},
        blocking=True,
    )
    assert not calls.manager.invitations
    assert not calls.manager.busy(calls.devices["kitchen"])
    assert not any(event[1] == "source" for event in calls.events)


async def test_pending_phone_expires_without_microphone(calls):
    from custom_components.ha_dialog_ui.calls.incoming import create

    user = await calls.hass.auth.async_create_user("recipient")
    await create(calls.manager, calls.devices["bedroom"], user.id, timeout=0.01)
    await asyncio.sleep(0.05)
    assert not calls.manager.invitations
    assert not any(event[1] == "source" for event in calls.events)


async def test_only_one_phone_can_claim_same_invitation(calls):
    user = await calls.hass.auth.async_create_user("recipient")
    await calls.hass.services.async_call(
        "ha_dialog_ui",
        "call_phone",
        {"source_device_id": calls.devices["kitchen"], "user_id": user.id},
        blocking=True,
    )
    invitation = next(iter(calls.manager.invitations))
    async with (
        await connect(calls, user) as first,
        await connect(calls, user) as second,
    ):
        await open_view(calls, first)
        await open_view(calls, second)
        message = {
            "id": 2,
            "type": "ha_dialog_ui/calls/browser_accept",
            "view_id": "phone-view",
            "invitation_id": invitation,
        }
        await asyncio.gather(first.send_json(message), second.send_json(message))
        results = await asyncio.gather(reply(first, 2), reply(second, 2))
        assert sorted(result["success"] for result in results) == [False, True]
        assert len(calls.manager.calls) == 1
        assert next(iter(calls.manager.calls.values())).state == "active"


async def test_phone_service_user_dropdown_tracks_active_users(calls):
    from homeassistant.helpers.service import SERVICE_DESCRIPTION_CACHE

    await calls.hass.auth.async_create_user("owner")
    user = await calls.hass.auth.async_create_user("Misha")

    def options():
        return calls.hass.data[SERVICE_DESCRIPTION_CACHE][
            ("ha_dialog_ui", "call_phone")
        ]["fields"]["user_id"]["selector"]["select"]

    async with asyncio.timeout(2):
        while not any(item["value"] == user.id for item in options()["options"]):
            await asyncio.sleep(0)
    assert {"value": user.id, "label": "Misha"} in options()["options"]
    assert options()["custom_value"] is False
    await calls.hass.auth.async_update_user(user, is_active=False)
    async with asyncio.timeout(2):
        while any(item["value"] == user.id for item in options()["options"]):
            await asyncio.sleep(0)
