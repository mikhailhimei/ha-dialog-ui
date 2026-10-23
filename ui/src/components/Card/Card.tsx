import { t } from "../../i18n";

import styles from "./Card.module.scss";

interface Props {
  title: string;
  subTitle?: string;
  onClick: () => void;
}

export const Card = ({
  title,
  subTitle,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={`${styles.card} ${!subTitle ? styles.titleOnly : ""}`}
      onClick={onClick}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          {title}
        </div>

        {subTitle && <div className={styles.subtitle}>
          {t(subTitle)}
        </div>}
      </div>

      <div className={styles.arrow} aria-hidden="true">
        →
      </div>
    </button>
  );
};