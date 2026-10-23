import { ArrowLeft } from "lucide-react";
import { useMobileOverlayBack } from "../../../hooks/useMobileOverlayBack";
import { ApiError } from "../ApiError/ApiError";
import type { ApiFeedbackState } from "../../../hooks/useApiFeedback";
import { t } from "../../../i18n";
import { ReactNode, useEffect } from "react";

import { Button } from "../Button/Button";

import styles from "./Modal.module.scss";

interface Props {
  feedback?: ApiFeedbackState;
  suspended?: boolean;
  open: boolean;

  onClose: () => void;
  onBack?: () => void;

  title?: string;
  subtitle?: ReactNode;

  footer?: ReactNode;

  children: ReactNode;

  size?: "sm" | "md" | "lg" | "xl";
}

export const Modal = ({
  open,
  suspended = false,
  feedback,
  onClose,
  onBack,
  title,
  subtitle,
  footer,
  children,
  size = "md",
}: Props) => {
  useMobileOverlayBack(open, onClose);
  useEffect(() => {
    if (!open || suspended) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose, suspended]);

  if (!open) return null;

  return (
    <div
      className={`${styles.overlay} ${suspended ? styles.suspended : ""}`}
      aria-hidden={suspended || undefined}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${styles[size]}`}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className={styles.header}>
          {onBack && <Button variant="ghost" className={styles.close}
            aria-label={t("Назад к предыдущей команде")} onClick={onBack}>
            <ArrowLeft size={20} aria-hidden="true" />
          </Button>}
          {title && (subtitle ? (
            <div className={styles.heading}>
              <h2 className={styles.title}>{t(title)}</h2>
              {subtitle}
            </div>
          ) : <h2 className={styles.title}>{t(title)}</h2>)}

          <Button
            variant="ghost"
            className={styles.close}
            onClick={onClose}
          >
            ✕
          </Button>
        </div>

        <div className={styles.body}>
          <ApiError {...feedback} />
          <fieldset className={styles.fields} disabled={feedback?.busy}>{children}</fieldset>
        </div>

        {footer && (
          <div className={styles.footer}>
            <fieldset className={styles.fields} disabled={feedback?.busy}>{footer}</fieldset>
          </div>
        )}
      </div>
    </div>
  );
};
