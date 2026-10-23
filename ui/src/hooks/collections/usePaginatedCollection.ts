import { formatApiError } from "../../utils/apiErrors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import type { CollectionPage, CollectionResponse } from "../../types/api";

export const normalizeCollectionPage = <T,>(response: CollectionResponse<T>): CollectionPage<T> => ({
  data: response.data ?? response.script_actions ?? [],
  page: response.page ?? 1,
  page_size: response.page_size ?? 10,
  total_pages: response.total_pages ?? 1,
  total_items: response.total_items ?? 0,
});

export function usePaginatedCollection<T>(listCommand: string) {
  const api = useDialogApi();
  const [page, setPage] = useState<CollectionPage<T> | null>(null);
  const [query, setQuery] = useState("");
  const queryRef = useRef("");
  const requestId = useRef(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const failedRequest = useRef<{ page: number | undefined; append: boolean }>();
  const currentPage = useRef(1);
  const appendedPages = useRef(false);
  const loadedCommand = useRef<string>();

  const loadPage = useCallback(async (pageNumber?: number, append = false) => {
    const id = ++requestId.current;
    const search = queryRef.current.trim();
    const refreshAllLoadedPages = pageNumber === undefined && appendedPages.current;
    const requestedPage = pageNumber ?? currentPage.current;
    setError(null);
    setLoading(true);
    try {
      let result = normalizeCollectionPage(await api.getPage<T>(listCommand, requestedPage, undefined, search));
      const lastPage = Math.max(1, result.total_pages);
      if (requestedPage > lastPage) result = normalizeCollectionPage(await api.getPage<T>(listCommand, lastPage, undefined, search));
      if (refreshAllLoadedPages && result.page > 1) {
        const earlierPages = await Promise.all(Array.from({ length: result.page - 1 }, (_, index) =>
          api.getPage<T>(listCommand, index + 1, undefined, search).then(normalizeCollectionPage)));
        result = { ...result, data: [...earlierPages.flatMap(page => page.data), ...result.data] };
      }
      if (id !== requestId.current) return;
      if (!refreshAllLoadedPages) appendedPages.current = append;
      failedRequest.current = undefined;
      currentPage.current = result.page;
      setPage(previous => append && previous ? { ...result, data: [...previous.data, ...result.data] } : result);
    } catch (reason) {
      if (id !== requestId.current) return;
      failedRequest.current = { page: pageNumber, append };
      setError(formatApiError(reason, "Не удалось загрузить список. Проверьте подключение к Home Assistant."));
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, [api, listCommand]);

  useEffect(() => {
    const commandChanged = loadedCommand.current !== listCommand;
    loadedCommand.current = listCommand;
    if (!commandChanged && queryRef.current === query) return;
    queryRef.current = query;
    currentPage.current = 1;
    appendedPages.current = false;
    requestId.current += 1;
    setLoading(true);
    const timeout = window.setTimeout(() => { void loadPage(1); }, commandChanged ? 0 : 250);
    return () => window.clearTimeout(timeout);
  }, [listCommand, loadPage, query]);


  const updateItems = useCallback((update: (items: T[]) => T[]) => {
    setPage(previous => previous ? { ...previous, data: update(previous.data) } : previous);
  }, []);

  const retry = () => { void loadPage(failedRequest.current?.page, failedRequest.current?.append ?? false); };
  return { query, setQuery, page, loading, loadPage, updateItems, error, retry };
}
