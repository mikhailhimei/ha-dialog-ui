import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useMobilePagination(
  page: { page: number; total_pages: number } | null,
  loading: boolean,
  loadPage: (page: number, append: boolean) => Promise<void>,
  isMobile: boolean,
) {
  const { ref, inView } = useInView({ threshold: 0, rootMargin: "0px 0px 180px 0px" });
  const [canLoadMore, setCanLoadMore] = useState(false);
  useEffect(() => {
    if (!loading && page?.page === 1) setCanLoadMore(true);
  }, [loading, page]);
  useEffect(() => {
    if (canLoadMore && isMobile && inView && !loading && page && page.page < page.total_pages) {
      void loadPage(page.page + 1, true);
    }
  }, [canLoadMore, isMobile, inView, loading, page, loadPage]);
  return ref;
}
