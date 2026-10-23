import { t } from "../../../i18n";
import { useId } from "react";
import { ChevronDown } from "lucide-react";

import styles from "./Dropdown.module.scss";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  options: Option[];
  value?: string;
  placeholder?: string;
  error?: string;
  onSelect?: (value: string) => void;
};

export function Dropdown({
  label,
  options,
  value = "",
  placeholder = "Выберите",
  error,
  onSelect,
}: DropdownProps) {
  const id = useId();

  return (
    <div className={styles.dropdown}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {t(label)}
        </label>
      )}

      <div className={styles.wrapper}>
        <select
          id={id}
          className={`
            ${styles.select}
            ${error ? styles.error : ""}
          `}
          value={value}
          onChange={(e) =>
            onSelect?.(e.target.value)
          }
        >
          <option value="" disabled>
            {t(placeholder)}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className={styles.arrow}
        />
      </div>

      {error && (
        <span className={styles.errorText}>
          {t(error)}
        </span>
      )}
    </div>
  );
}
