"""Serialize complete read-modify-save API mutations within a collection."""

import asyncio
from functools import wraps


def serialize_collection_mutation(collection: str):
    """Give each HA instance and collection its own mutation lock."""
    lock_key = f"ha_dialog_ui_{collection}_mutation_lock"

    def decorate(handler):
        @wraps(handler)
        async def serialized(hass, connection, msg):
            lock = hass.data.setdefault(lock_key, asyncio.Lock())
            async with lock:
                return await handler(hass, connection, msg)

        return serialized

    return decorate
