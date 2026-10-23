import { FieldLabel } from "../FieldLabel/FieldLabel";
import { t } from "../../../i18n";
import { SelectHTMLAttributes, useId } from "react";

import styles from "./SelectInput.module.scss";

type SelectOption = {
  label: string;
  value: string;
};

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  options: SelectOption[];
}

export const SelectInput = ({
  label,
  hint,
  options,
  className = "",
  id,
  value,
  ...props
}: Props) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const normalizedValue = value == null ? "" : String(value);
  const hasCurrentValue = !normalizedValue || options.some((option) => option.value === normalizedValue);

  return (
    <div className={styles.field}>
      {label && <FieldLabel label={label} htmlFor={fieldId} className={styles.label} hint={hint} />}

      <select
        id={fieldId}
        {...props}
        value={normalizedValue}
        className={`${styles.select} ${className}`}
      >
        {!hasCurrentValue && <option value={normalizedValue}>{normalizedValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};
