"""Authenticated browser PCM to one speaker, return PCM and ownership cleanup."""

import asyncio
import base64

from test_calls import calls as calls  # noqa: PLC0414 - pytest fixture re-export

from custom_components.ha_dialog_ui.baby_monitor.playback import WAV_HEADER


async def connect(data):
    user = await data.hass.auth.async_create_user("phone")
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
