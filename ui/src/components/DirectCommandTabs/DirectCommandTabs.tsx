import { useLocation, useNavigate } from "react-router-dom";
import { t } from "../../i18n";
import styles from "../../pages/GlobalsPage.module.scss";

const modes = [
  { path: "/commands/direct/main", label: "Команды" },
  { path: "/commands/direct/template", label: "Вложенные команды" },
];
export const DirectCommandTabs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return <div className={styles.innerTabs} role="group" aria-label={t("Раздел прямых команд")}>
    {modes.map(mode => <button key={mode.path} type="button"
      aria-pressed={pathname === mode.path}
      className={`${styles.innerTab} ${pathname === mode.path ? styles.activeInnerTab : ""}`}
      onClick={() => navigate(mode.path)}>{t(mode.label)}</button>)}
  </div>;
};
