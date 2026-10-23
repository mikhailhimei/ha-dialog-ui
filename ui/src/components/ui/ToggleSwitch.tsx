import { t } from "../../i18n";
import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./ToggleSwitch.module.scss";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

export const ToggleSwitch = ({ label, className = "", ...props }: Props) => (
  <label className={`${styles.switchRow} ${className}`}>
    <input {...props} type="checkbox" className={styles.input} />
    <span className={styles.track} aria-hidden="true">
      <span className={styles.thumb} />
    </span>
    <span className={styles.label}>{t(label)}</span>
  </label>
);
