import { useEffect, useRef } from "react";
import { useIsMobile } from "./useIsMobile";

const stateKey = "dialogCustomUiOverlay";
const overlays: string[] = [];
const waiting = new Set<() => void>();
let sequence = 0;
let closingToken: string | null = null;
let navigatingBack = false;

function removeHistoryEntry() {
  navigatingBack = true;
  window.addEventListener("popstate", () => {
    navigatingBack = false;
    const callbacks = [...waiting];
    waiting.clear();
    queueMicrotask(() => callbacks.forEach(callback => callback()));
  }, { once: true });
  history.back();
}

/** Give a mobile overlay its own history entry so browser Back closes it. */
export function useMobileOverlayBack(open: boolean, onClose: () => void) {
  const mobile = useIsMobile();
  const close = useRef(onClose);
  close.current = onClose;

  useEffect(() => {
    if (!open || !mobile) return;
    const token = `overlay-${++sequence}`;
    let popped = false;
    let registered = false;
    let cancelled = false;
    const handleBack = () => {
      if (overlays.at(-1) !== token || history.state?.[stateKey] === token) return;
      popped = true;
      close.current();
    };
    const register = () => {
      if (cancelled) return;
      registered = true;
      overlays.push(token);
      const state = { ...history.state, [stateKey]: token };
      // Switching from an action sheet to its editor uses the same Back entry.
      if (closingToken && history.state?.[stateKey] === closingToken) {
        history.replaceState(state, "");
        closingToken = null;
      } else history.pushState(state, "");
      window.addEventListener("popstate", handleBack);
    };
    // Wait for an earlier close to finish before adding the new editor's entry.
    if (navigatingBack) waiting.add(register);
    else register();
    return () => {
      cancelled = true;
      waiting.delete(register);
      window.removeEventListener("popstate", handleBack);
      if (!registered) return;
      overlays.splice(overlays.indexOf(token), 1);
      if (!popped && history.state?.[stateKey] === token) {
        closingToken = token;
        queueMicrotask(() => {
          if (closingToken !== token) return;
          closingToken = null;
          if (history.state?.[stateKey] === token) removeHistoryEntry();
        });
      }
    };
  }, [open, mobile]);
}
