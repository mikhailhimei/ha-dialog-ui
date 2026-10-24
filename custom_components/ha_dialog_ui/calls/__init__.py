"""Independent speaker-call lifecycle and transport, with shared bounded audio primitives."""

from .runtime import CallRuntime


async def async_start(hass):
    runtime = hass.data.get("ha_dialog_ui_calls")
    if runtime is None:
        runtime = hass.data["ha_dialog_ui_calls"] = CallRuntime(hass)
        runtime.register()
    await runtime.start()


async def async_stop(hass):
    runtime = hass.data.get("ha_dialog_ui_calls")
    if runtime:
        await runtime.stop()
