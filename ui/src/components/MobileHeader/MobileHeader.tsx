import { useEffect, useRef, useState, type ReactNode } from "react";
import { LayoutGrid, Menu } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { t } from "../../i18n";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { CollectionSearch } from "../ui/CollectionSearch/CollectionSearch";
import styles from "./MobileHeader.module.scss";

export const MobileHeader = ({ title = "", search, beforeSearch }: {
  title?: string;
  search?: { value: string; onChange: (value: string) => void };
  beforeSearch?: ReactNode;
}) => {
  const mobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeMenu = () => { setMenuOpen(false); trigger.current?.focus(); };
  useEffect(() => { if (!mobile) setMenuOpen(false); }, [mobile]);

  return <>
    <header className={styles.header}>
      <div className={styles.bar}>
      <button type="button" aria-label={t("Открыть меню Home Assistant")} className={styles.menuButton}
        onClick={event => event.currentTarget.dispatchEvent(new CustomEvent("hass-toggle-menu", { bubbles: true, composed: true }))}>
        <Menu size={20} />
      </button>
      <h1 className={styles.title}>{t(title)}</h1>
      <button type="button" ref={trigger} aria-label={t("Открыть меню разделов")} aria-haspopup="dialog" aria-expanded={menuOpen}
        className={`${styles.menuButton} ${menuOpen ? styles.active : ""}`} onClick={() => setMenuOpen(true)}>
        <LayoutGrid size={20} />
      </button>
      </div>
      {mobile && (beforeSearch || search) && <div className={styles.tools}>
        {beforeSearch}
        {search && <CollectionSearch {...search} />}
      </div>}
    </header>
    {mobile && <MobileNavigation open={menuOpen} onClose={closeMenu} />}
  </>;
};
