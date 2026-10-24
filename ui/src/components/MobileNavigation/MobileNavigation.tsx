import { useApiEnabled } from "../../context/ApiEnabledContext";
import { useEffect, useId, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Baby, AlarmClock, ArrowRight, Check, Clock3, Download, GitBranch, Layers, MessageCircle, Settings, SlidersHorizontal, Workflow, X } from "lucide-react";
import { useIsAdmin } from "../../context/AdminContext";
import { useRemoteServerEnabled } from "../../context/RemoteServerContext";
import { t } from "../../i18n";
import { BottomSheet } from "../ui/BottomSheet/BottomSheet";
import styles from "./MobileNavigation.module.scss";

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const apiEnabled = useApiEnabled();
  const isAdmin = useIsAdmin();
  const remoteEnabled = useRemoteServerEnabled();
  const { pathname } = useLocation();
  const titleId = useId();
  const content = useRef<HTMLDivElement>(null);
  const items = [
    ...(remoteEnabled === false ? [
      { to: "/commands/main", label: "Основные команды", icon: MessageCircle },
      { to: "/commands/sub", label: "Второстепенные команды", icon: GitBranch },
      { to: "/commands/direct/main", label: "Прямые команды", icon: Workflow },
      { to: "/commands/direct/template", label: "Вложенные команды", icon: Layers },
      { to: "/commands/settings", label: "Ответы по умолчанию", icon: SlidersHorizontal },
      ...(isAdmin ? [{ to: "/commands/whisper", label: "Промпт распознавания", icon: SlidersHorizontal }] : []),
    ] : remoteEnabled === true ? [{ to: "/scripts", label: "Действия удалённых команд", icon: Workflow }] : []),
    { to: "/timer", label: "Таймеры", icon: Clock3 },
    { to: "/alarm", label: "Будильники", icon: AlarmClock },
    { to: "/monitor", label: "Радионяня", icon: Baby },
    { to: "/calls", label: "Звонки", icon: Phone },
    ...(isAdmin ? [{ to: "/downloads", label: "Импорт и экспорт", icon: Download }] : []),
    ...(apiEnabled && isAdmin ? [{ to: "/logs", label: "Логи", icon: SlidersHorizontal }] : []),
    { to: "/settings", label: "Настройки", icon: Settings },
  ];
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => (content.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? content.current?.querySelector<HTMLElement>('a'))?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  return <BottomSheet open={open} onClose={onClose} labelledBy={titleId} className={styles.overlay}>
    <div ref={content} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = [...content.current!.querySelectorAll<HTMLElement>('button, a')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && event.target === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && event.target === last) { event.preventDefault(); first.focus(); }
    }}>
      <div className={styles.heading}>
        <h2 id={titleId}>{t("Разделы")}</h2>
        <button type="button" className={styles.close} aria-label={t("Закрыть меню разделов")} onClick={onClose}><X size={20} /></button>
      </div>
      <nav className={styles.nav} aria-label={t("Навигация интеграции")}>
        {items.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} end
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ""}`}
          onClick={event => { if (pathname === to) event.preventDefault(); onClose(); }}>
          <span className={styles.icon}><Icon size={20} strokeWidth={1.8} /></span>
          <span className={styles.label}>{t(label)}</span>
          {pathname === to ? <Check size={18} aria-hidden="true" /> : <ArrowRight size={16} className={styles.arrow} aria-hidden="true" />}
        </NavLink>)}
      </nav>
    </div>
  </BottomSheet>;
}
