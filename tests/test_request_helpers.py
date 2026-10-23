"""Preserve request list pagination and normalized UUID lookup semantics."""

from copy import deepcopy

import pytest

from custom_components.ha_dialog_ui.src.api.request_helpers import (
    build_request_summary_page, find_request_by_uuid,
)


@pytest.mark.parametrize(('page', 'expected', 'pages'), [
    (1, ['a', 'b'], 2), (2, ['c'], 2), (3, [], 2),
])
def test_summary_pages_preserve_order_and_metadata(page, expected, pages):
    records = [{'uuid': 'a', 'name': 'A', 'extra': 1},
               {'uuid': 'b', 'name': '', 'action_type': 'create_timer'}, {'uuid': 'c'}]
    before = deepcopy(records)
    result = build_request_summary_page(records, page, 2)
    assert [item['uuid'] for item in result['data']] == expected
    assert (result['page'], result['page_size'], result['total_pages'], result['total_items']) == (page, 2, pages, 3)
    if page == 1:
        assert result['data'] == [{'uuid': 'a', 'title': 'A', 'action_type': ''},
                                  {'uuid': 'b', 'title': 'create_timer', 'action_type': 'create_timer'}]
    assert records == before


def test_empty_collection_has_one_page():
    assert build_request_summary_page([], 1, 10) == {
        'data': [], 'page': 1, 'page_size': 10, 'total_pages': 1, 'total_items': 0,
    }


def test_uuid_lookup_normalizes_and_returns_first_original_record():
    first = {'uuid': ' item ', 'name': 'First'}
    assert find_request_by_uuid([first, {'uuid': 'item'}], ' item ') is first


def test_missing_uuid_returns_none():
    assert find_request_by_uuid([{'uuid': 'item'}], 'missing') is None
