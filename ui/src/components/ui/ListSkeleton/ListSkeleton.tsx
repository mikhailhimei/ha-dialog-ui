import type { ReactNode } from "react";
import { t } from "../../../i18n";
import styles from "./ListSkeleton.module.scss";

interface Props {
  loading: boolean;
  itemCount: number;
  append?: boolean;
  children?: ReactNode;
  placeholderCount?: number;
  grid?: boolean;
  label?: string;
}

/** Keep the current page's height while its replacement is loading. */
export function ListSkeleton({ loading, itemCount, append = false, children, placeholderCount = 10, grid = false, label = "Загрузка..." }: Props) {
  const replacing = loading && itemCount > 0 && !append;
  const placeholders = loading && <div className={`${replacing ? styles.overlay : styles.rows} ${grid ? styles.grid : ""}`} role="status" aria-live="polite">
    <span className={styles.srOnly}>{t(label)}</span>
    {Array.from({ length: replacing ? itemCount : append && itemCount > 0 ? 3 : placeholderCount }, (_, index) => (
      <div className={styles.card} key={index} aria-hidden="true">
        <span className={styles.title} /><span className={styles.subtitle} />
      </div>
    ))}
  </div>;

  return <div className={styles.container} aria-busy={loading}>
    <div className={`${styles.rows} ${replacing ? styles.hidden : ""}`} aria-hidden={replacing || undefined}>{children}</div>
    {placeholders}
  </div>;
}
