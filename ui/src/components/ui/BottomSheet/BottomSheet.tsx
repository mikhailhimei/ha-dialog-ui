import { useMobileOverlayBack } from "../../../hooks/useMobileOverlayBack";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./BottomSheet.module.scss";

interface BottomSheetProps {
  className?: string;
  labelledBy?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet = ({
  open,
  className = "",
  labelledBy,
  onClose,
  children,
}: BottomSheetProps) => {
  useMobileOverlayBack(open, onClose);
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  const startY = useRef(0);
  const currentY = useRef(0);

  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) {
      setMounted(true);

      requestAnimationFrame(() => {
        setVisible(true);
      });

      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);

      const timeout = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const onTouchStart = (
    e: React.TouchEvent
  ) => {
    startY.current =
      e.touches[0].clientY;
  };

  const onTouchMove = (
    e: React.TouchEvent
  ) => {
    currentY.current =
      e.touches[0].clientY;

    const diff =
      currentY.current -
      startY.current;

    if (diff > 0) {
      setTranslate(diff);
    }
  };

  const onTouchEnd = () => {
    if (translate > 120) {
      onClose();
    }

    setTranslate(0);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener(
        "keydown",
        handler
      );
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handler
      );
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.overlay} ${
        visible ? styles.visible : ""
      } ${className}`}
      onClick={onClose}
    >
      <section
        className={`${styles.sheet} ${
          visible ? styles.open : ""
        }`}
        style={{
          transform: `translateY(${translate}px)`,
          transition:
            translate === 0
              ? "transform .3s cubic-bezier(.32,.72,0,1)"
              : "none",
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <div
          className={styles.handleArea}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.handle} />
        </div>

        <div className={styles.content}>
          {children}
        </div>

      </section>
    </div>
  );
};