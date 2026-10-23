
import { t } from "../../../i18n";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { Modal } from "../Modal/Modal";
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { Button } from "../Button/Button";
import styles from "./ActionsSheet.module.scss";

export interface SheetAction {
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "remove";
  onClick: () => void;
}

interface Props {
  open: boolean;
  title?: string;
  uuid?: string;
  onClose: () => void;
  actions: SheetAction[];
  size?: "sm" | "md";
  layout?: "row" | "column";
}

export const ActionsSheet = ({ open, title, uuid, onClose, actions, size = "md", layout = "column" }: Props) => {
  const isMobile = useIsMobile();
  const identifier = uuid ? <p className={styles.identifier}>{uuid}</p> : null;
  const content = (
    <div className={styles.content}>
      {isMobile && <div>
        <h3 className={styles.title}>{title}</h3>
        {identifier}
      </div>}
      <div className={`${styles.actions} ${layout === "row" && !isMobile ? styles.row : ""}`}>
        {actions.map(action => (
          <Button key={action.label} fullWidth variant={action.variant} onClick={() => {
            action.onClick();
            onClose();
          }}>{t(action.label)}</Button>
        ))}
      </div>
    </div>
  );

  return isMobile ? (
    <BottomSheet open={open} onClose={onClose}>{content}</BottomSheet>
  ) : (
    <Modal open={open} onClose={onClose} title={title} subtitle={identifier} size={size}>{content}</Modal>
  );
};
