import { useCallback, useRef, useState } from "react";
import { formatApiError } from "../utils/apiErrors";

interface RunOptions { retryable?: boolean; exclusive?: boolean; fallback?: string; }
export function useApiFeedback() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [canRetry, setCanRetry] = useState(false);
  const pending = useRef(0);
  const retryAction = useRef<(() => Promise<void>) | null>(null);
  const run = useCallback(async (action: () => Promise<void>, options: RunOptions = {}) => {
    if (options.exclusive && pending.current > 0) return false;
    pending.current += 1;
    setBusy(true);
    setError(null);
    setCanRetry(false);
    try {
      await action();
      retryAction.current = null;
      return true;
    } catch (reason) {
      setError(formatApiError(reason, options.fallback));
      retryAction.current = options.retryable ? action : null;
      setCanRetry(Boolean(options.retryable));
      return false;
    } finally {
      pending.current -= 1;
      setBusy(pending.current > 0);
    }
  }, []);
  const retry = useCallback(() => {
    if (retryAction.current) void run(retryAction.current, { retryable: true });
  }, [run]);
  const clearError = useCallback(() => {
    setError(null); setCanRetry(false); retryAction.current = null;
  }, []);
  return { error, busy, retry: canRetry ? retry : undefined, run, clearError };
}
export type ApiFeedbackState = Pick<ReturnType<typeof useApiFeedback>, "error" | "busy" | "retry">;
