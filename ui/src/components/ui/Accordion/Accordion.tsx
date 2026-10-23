import { t } from "../../../i18n";
import { ReactNode, useState } from "react";

import styles from "./Accordion.module.scss";

interface Props {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export const Accordion = ({
  title,
  defaultOpen = false,
  children,
}: Props) => {
  const [open, setOpen] =
    useState(defaultOpen);

  return (
    <div
      className={styles.accordion}
      data-open={open}
    >
      <button
        type="button"
        className={styles.header}
        onClick={() =>
          setOpen((prev) => !prev)
        }
        aria-expanded={open}
      >
        <span>{t(title)}</span>

        <span className={styles.icon}>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
};
