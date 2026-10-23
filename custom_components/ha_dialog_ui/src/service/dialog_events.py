"""Отправка команд и ожидание ответа скрипта на шине событий HA."""

import asyncio
import logging
from homeassistant.core import callback
from ...const import EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE
from ...dialog.script_runner import build_script_payload
from .dialog_state import get_current_hass
from .dialog_responses import has_next_action_branch


logger = logging.getLogger(__name__)


EXTERNAL_SERVICE_ANSWER_TYPES = {"script_response", "ha_storage", "ha", "external"}


def is_external_service_answer(answer_type):
    return str(answer_type or "").strip().lower() in EXTERNAL_SERVICE_ANSWER_TYPES


def build_command_data(
    command_type,
    parent_type,
    data,
    client_id,
    device_id,
    children_direct_type,
    is_main_command,
    *,
    command_node=None,
    command_id=None,
    continuation_id=None,
):
    payload = {
        "children_type": command_type,
        "parent_type": parent_type,
        "data": data,
        "client_id": client_id,
        "device_id": device_id,
        "children_direct_type": children_direct_type,
        "is_main_command": is_main_command
    }
    payload["command_id"] = command_id if command_id is not None or continuation_id is not None else (command_node or {}).get("uuid")
    payload["continuation_id"] = continuation_id
    if command_node is not None and "script_entity_id" in command_node:
        payload["command_script"] = {
            "entity_id": command_node.get("script_entity_id") or "",
            "run": should_run_command_script(command_node, children_direct_type),
        }
    return payload


def should_run_command_script(node, direct_entries):
    """A script runs for script answers, direct values or a final local answer."""
    if not node.get("script_entity_id"):
        return False
    return (
        is_external_service_answer(node.get("answerType"))
        or bool(direct_entries)
        or not has_next_action_branch(node.get("nextAction"))
    )


def publish_command_event(hass, client_id, command_data):
    hass = get_current_hass(hass)
    if hass is None:
        return

    def public_payload(payload):
        if isinstance(payload, dict) and any(key in payload for key in ("parent_type", "children_type", "command_id", "text", "children_direct_type", "direct_values")):
            return build_script_payload(payload)
        return payload

    command_data = ([public_payload(payload) for payload in command_data]
                    if isinstance(command_data, list) else public_payload(command_data))
    hass.bus.async_fire(
        EVENT_ACTIVE_COMMAND,
        {
            "client_id": client_id,
            "command_data": command_data,
        },
    )


async def wait_for_script_response(hass, client_id, device_id, timeout=8):
    poll_interval = 1

    for _ in range(timeout):
        # Refresh hass every second so the listener is attached to the latest bus.
        current_hass = get_current_hass() or hass
        if current_hass is None:
            await asyncio.sleep(poll_interval)
            continue

        loop = getattr(current_hass, "loop", None) or asyncio.get_running_loop()
        response_future = loop.create_future()

        @callback
        def listener(event):
            data = event.data

            logger.debug("wait_for_script_response listener got event data: %s", data)

            if (
                data.get("client_id") == client_id
                and data.get("device_id") == device_id
            ):
                if not response_future.done():
                    response_future.set_result(data)

        unsubscribe = current_hass.bus.async_listen(
            EVENT_DIALOG_MESSAGE,
            listener,
        )

        try:
            return await asyncio.wait_for(response_future, timeout=poll_interval)
        except asyncio.TimeoutError:
            continue
        finally:
            try:
                unsubscribe()
            except Exception:
                pass

    return None


async def request_script_response(hass, answer_type, command_data, client_id, device_id):
    if is_external_service_answer(answer_type):
        # update module-level hass and start waiting before emitting
        hass = get_current_hass(hass)
        if hass is None:
            return None

        response_task = asyncio.create_task(wait_for_script_response(hass, client_id, device_id))
        try:
            await asyncio.sleep(0)
            publish_command_event(hass, client_id, command_data)
            return await response_task
        finally:
            if not response_task.done():
                response_task.cancel()
                try:
                    await response_task
                except asyncio.CancelledError:
                    pass
    return None

