"""Shared normalization for list-based Home Assistant storage collections."""

from typing import Any


def normalize_collection_items(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]
