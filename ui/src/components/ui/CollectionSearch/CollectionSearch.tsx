import { Search } from "lucide-react";
import { t } from "../../../i18n";
import styles from "./CollectionSearch.module.scss";

export function CollectionSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className={styles.search}>
    <Search size={18} aria-hidden="true" />
    <input type="search" aria-label={t("Поиск по названию")} placeholder={t("Поиск по названию")}
      value={value} onChange={event => onChange(event.target.value)} />
  </div>;
}
