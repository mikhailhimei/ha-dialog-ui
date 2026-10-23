"""Shared UUID lookup and paginated summaries for request APIs."""

from __future__ import annotations

from typing import Any

from ...dialog.normalize import _normalize_value


def build_request_summary_page(requests: list[dict[str, Any]], page: int, page_size: int):
    total = len(requests)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": [
            {
                "uuid": item["uuid"],
                "title": item.get("name", "") or item.get("action_type", ""),
                "action_type": item.get("action_type", ""),
            }
            for item in requests[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def find_request_by_uuid(requests, uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in requests:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def filter_by_title(records: list[dict[str, Any]], query: str = "", field: str = "title") -> list[dict[str, Any]]:
    """Filter before pagination; preserve order and match literal title fragments."""
    value = query.strip().casefold()
    return [record for record in records if value in str(record.get(field) or "").casefold()] if value else records
