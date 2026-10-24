import { useEffect } from "react";
import { CheckCircle2, TriangleAlert, X } from "lucide-react";
import { t } from "../../../i18n";
import styles from "./Toast.module.scss";

export function Toast({message, warning = false, onClose}: {message: string; warning?: boolean; onClose: () => void}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [message, warning, onClose]);
  const Icon = warning ? TriangleAlert : CheckCircle2;
  return <div role="status" aria-live="polite" className={`${styles.toast} ${warning ? styles.warning : ""}`}>
    <Icon size={22} aria-hidden="true" />
    <span>{message}</span>
    <button type="button" aria-label={t("Закрыть уведомление")} onClick={onClose}><X size={18} /></button>
  </div>;
}
