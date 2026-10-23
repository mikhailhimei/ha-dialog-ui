import { t } from "../../../i18n";
import type { ApiFeedbackState } from "../../../hooks/useApiFeedback";
import { Button } from "../Button/Button";
import styles from "./ApiError.module.scss";

export const ApiError = ({ error, retry, busy = false }: Partial<ApiFeedbackState>) => !error ? null : (
  <div role="alert" className={styles.error}>
    <p>{t(error)}</p>
    {retry && <Button variant="secondary" disabled={busy} onClick={retry}>{t("Повторить загрузку")}</Button>}
  </div>
);
