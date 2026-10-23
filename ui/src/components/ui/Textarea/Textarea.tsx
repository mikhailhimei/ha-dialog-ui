import { FieldLabel } from "../FieldLabel/FieldLabel";
import { t } from "../../../i18n";
import { TextareaHTMLAttributes, useId } from "react";

import styles from "./Textarea.module.scss";

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;

  error?: string;
}

export const Textarea = ({
  label,
  hint,
  error,
  className = "",
  id,
  ...props
}: Props) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <div className={styles.field}>
      {label && <FieldLabel label={label} htmlFor={fieldId} className={styles.label} hint={hint} />}

      <textarea
        id={fieldId}
        {...props}
        className={`
          ${styles.textarea}
          ${error ? styles.error : ""}
          ${className}
        `}
      />

      {error && (
        <span className={styles.errorText}>
          {t(error)}
        </span>
      )}
    </div>
  );
};
