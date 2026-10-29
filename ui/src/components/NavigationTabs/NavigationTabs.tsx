import { useApiEnabled } from "../../context/ApiEnabledContext";
import { useIsAdmin } from "../../context/AdminContext";
import { t } from "../../i18n";

import { useRemoteServerEnabled } from "../../context/RemoteServerContext";
import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  FileCode2,
  Command,
  Timer,
  Baby,
  Phone,
  AlarmClock,
  Settings,
  Download,
  ChevronDown
} from "lucide-react";

import styles from "./NavigationTabs.module.scss";

export const NavigationTabs = () => {
  const isMobile = useIsMobile()
  const apiEnabled = useApiEnabled();
  const isAdmin = useIsAdmin();
  const remoteEnabled = useRemoteServerEnabled();
  const location = useLocation();
  const [commandsOpen, setCommandsOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => { setCommandsOpen(false); }, [location.pathname, isMobile, remoteEnabled]);
  useEffect(() => {
    if (!commandsOpen) return;
    const closeOutside = (event: Event) => {
      if (dropdown.current && !event.composedPath().includes(dropdown.current)) setCommandsOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, [commandsOpen]);


  if (isMobile) return

  return (
    <div className={styles.tabs}>
      {remoteEnabled === true && (
      <NavLink
        to="/scripts"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <FileCode2 size={16} strokeWidth={2} />
        <span>{t(remoteEnabled ? "Действия удалённых команд" : "Запуск скриптов")}</span>
      </NavLink>
      )}

      {remoteEnabled === false && <div className={styles.dropdown} ref={dropdown}
        onKeyDown={event => {
          if (event.key === "Escape" && commandsOpen) {
            event.stopPropagation();
            setCommandsOpen(false);
            trigger.current?.focus();
          }
        }}>
        <button type="button" ref={trigger}
          className={`${styles.tab} ${location.pathname.startsWith("/commands") ? styles.active : ""}`}
          aria-expanded={commandsOpen} aria-controls={menuId}
          onClick={() => setCommandsOpen(current => !current)}
          onKeyDown={event => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setCommandsOpen(true);
              requestAnimationFrame(() => dropdown.current?.querySelector("a")?.focus());
            }
          }}>
          <Command size={16} strokeWidth={2} />
          <span>{t("Команды")}</span>
          <ChevronDown size={14} className={styles.chevron} />
        </button>

        {commandsOpen && <nav id={menuId} className={styles.menu} aria-label={t("Разделы команд")}
          onClick={() => setCommandsOpen(false)}>
          <NavLink
            to="/commands/main"
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >{t("Основные команды")}</NavLink>

          <NavLink
            to="/commands/sub"
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >{t("Второстепенные команды")}</NavLink>

          <NavLink
            to="/commands/direct/main"
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >{t("Прямые команды")}</NavLink>

          <NavLink
            to="/commands/settings"
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >{t("Ответы по умолчанию")}</NavLink>
          {isAdmin && <NavLink to="/commands/normalization" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}>{t("Настройки распознавания")}</NavLink>}
          {isAdmin && <NavLink to="/commands/whisper"
            className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
          >{t("Промпт распознавания")}</NavLink>}
        </nav>}
      </div>}

      <NavLink
        to="/timer"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <Timer size={16} strokeWidth={2} />
        <span>{t("Таймеры")}</span>
      </NavLink>

      <NavLink
        to="/alarm"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <AlarmClock size={16} strokeWidth={2} />
        <span>{t("Будильники")}</span>
      </NavLink>

      <NavLink to="/monitor" className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}><Baby size={16} /><span>{t("Радионяня")}</span></NavLink>

      <NavLink to="/calls" className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}><Phone size={16} /><span>{t("Звонки")}</span></NavLink>

      {isAdmin && <NavLink to="/downloads" className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}>
        <Download size={16} /><span>{t("Импорт и экспорт")}</span>
      </NavLink>}

      {apiEnabled && isAdmin && <NavLink to="/logs" className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}>{t("Логи")}</NavLink>}

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <Settings size={16} strokeWidth={2} />
        <span>{t("Настройки")}</span>
      </NavLink>
    </div>
  );
};
