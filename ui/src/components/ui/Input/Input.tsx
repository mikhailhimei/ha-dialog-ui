import { FieldLabel } from "../FieldLabel/FieldLabel";
import { t } from "../../../i18n";
import { InputHTMLAttributes, useId, useState } from "react";

import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = ({
  label,
  hint,
  error,
  disabled,
  className = "",
  id,
  type,
  ...props
}: Props) => {
  const generatedId = useId();

  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? generatedId;

  const inputType =
    type === "password" && showPassword
      ? "text"
      : type;

  return (
    <div className={styles.field}>
      {label && <FieldLabel label={label} htmlFor={inputId} className={styles.label} hint={hint} />}

      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          disabled={disabled}
          type={inputType}
          {...props}
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={[props["aria-describedby"], error ? `${inputId}-error` : undefined].filter(Boolean).join(" ") || undefined}
          className={`
            ${styles.input}
            ${type === "password" ? styles.passwordInput : ""}
            ${error ? styles.error : ""}
            ${className}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            disabled={disabled}
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>

      {error && (
        <span id={`${inputId}-error`} className={styles.errorText}>
          {t(error)}
        </span>
      )}
    </div>
  );
};
