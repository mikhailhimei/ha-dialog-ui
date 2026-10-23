import { t } from "../../../i18n";
import React from 'react';

import styles from './Pagination.module.scss';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ page, totalPages, onChange }: Props) => {
  if (totalPages <= 1) return null;

  const pages = Array.from(new Set([
    1,
    ...Array.from({ length: 5 }, (_, index) => page + index - 2)
      .filter(value => value >= 1 && value <= totalPages),
    totalPages,
  ])).sort((a, b) => a - b);

  const goToPage = (value: number) => {
    if (Number.isInteger(value) && value >= 1 && value <= totalPages && value !== page) {
      onChange(value);
    }
  };

  return (
    <nav className={styles.pagination} aria-label={t("Страницы списка")}>
      <div className={styles.pages}>
        <button type="button" className={styles.button} disabled={page <= 1}
          onClick={() => goToPage(page - 1)} aria-label={t("Предыдущая страница")}>‹</button>
        {pages.map((value, index) => (
          <React.Fragment key={value}>
            {index > 0 && value - pages[index - 1] > 1 && (
              <span className={styles.label} aria-hidden="true">…</span>
            )}
            <button type="button"
              className={`${styles.button} ${value === page ? styles.active : ''}`}
              aria-label={`${t("Страница")} ${value}`}
              aria-current={value === page ? 'page' : undefined}
              onClick={() => goToPage(value)}>{value}</button>
          </React.Fragment>
        ))}
        <button type="button" className={styles.button} disabled={page >= totalPages}
          onClick={() => goToPage(page + 1)} aria-label={t("Следующая страница")}>›</button>
      </div>
    </nav>
  );
};
