import { CircleHelp } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { t } from "../../../i18n";
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { Button } from "../Button/Button";
import { getFieldHint } from "./fieldHints";
import styles from "./FieldLabel.module.scss";

export function FieldLabel({ label, htmlFor, className, hint }: {
  label: string; htmlFor?: string; className?: string; hint?: string;
}) {
  const description = hint ?? getFieldHint(label);
  return <div className={styles.labelRow}>
    <label htmlFor={htmlFor} className={className}>{t(label)}</label>
    {description && <FieldHelp label={label} description={description} />}
  </div>;
}

export function FieldHelp({ label, description = getFieldHint(label) ?? "" }: { label: string; description?: string }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ left: 12, top: 12 });
  const button = useRef<HTMLButtonElement>(null);
  const tooltip = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const id = useId();
  const close = () => { setOpen(false); if (isMobile) button.current?.focus(); };
  const show = () => { clearTimeout(closeTimer.current); setOpen(true); };
  const hide = () => { closeTimer.current = setTimeout(() => setOpen(false), 150); };
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  useEffect(() => { setOpen(false); }, [isMobile]);

  useLayoutEffect(() => {
    if (!open || isMobile || !button.current || !tooltip.current) return;
    const anchor = button.current.getBoundingClientRect();
    const bounds = tooltip.current.getBoundingClientRect();
    setPosition({
      left: Math.max(12, Math.min(anchor.left, window.innerWidth - bounds.width - 12)),
      top: Math.max(12, anchor.bottom + 8 + bounds.height <= window.innerHeight - 12
        ? anchor.bottom + 8 : anchor.top - bounds.height - 8),
    });
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        close();
      } else if (isMobile && event.key === "Tab") {
        event.preventDefault();
      }
    };
    // Handle Escape before the enclosing editor, so only the hint closes.
    window.addEventListener("keydown", onKey, true);
    const dismiss = (event: Event) => {
      if (!isMobile && !(event.target instanceof Node && tooltip.current?.contains(event.target))) setOpen(false);
    };
    window.addEventListener("scroll", dismiss, true);
    window.addEventListener("resize", dismiss);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      window.removeEventListener("scroll", dismiss, true);
      window.removeEventListener("resize", dismiss);
    };
  }, [open, isMobile]);

  const portalTarget = button.current?.closest("[data-theme]") ?? button.current?.getRootNode();
  return <>
    <button ref={button} type="button" className={styles.helpButton}
      aria-label={`${t("Подсказка")}: ${t(label)}`}
      aria-describedby={open && !isMobile ? id : undefined}
      aria-haspopup={isMobile ? "dialog" : undefined}
      aria-expanded={isMobile ? open : undefined}
      onMouseEnter={() => { if (!isMobile) show(); }}
      onMouseLeave={() => { if (!isMobile) hide(); }}
      onFocus={() => { if (!isMobile) show(); }}
      onBlur={() => { if (!isMobile) hide(); }}
      onClick={show}>
      <CircleHelp size={16} aria-hidden="true" />
    </button>
    {open && portalTarget && createPortal(isMobile ?
      <BottomSheet open onClose={close} className={styles.helpOverlay} labelledBy={id}>
        <div className={styles.sheetContent}>
          <h3 id={id}>{t(label)}</h3>
          <p>{t(description)}</p>
          <Button autoFocus variant="secondary" onClick={close}>{t("Закрыть подсказку")}</Button>
        </div>
      </BottomSheet> :
      <div ref={tooltip} id={id} role="tooltip" className={styles.tooltip} style={position}
        onMouseEnter={show} onMouseLeave={hide}>{t(description)}</div>, portalTarget as Element | DocumentFragment)}
  </>;
}
