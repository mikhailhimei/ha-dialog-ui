
import { AlarmRequest } from "../../types/timerAlarm";
import { ActionsSheet } from "../ui/ActionsSheet/ActionsSheet";

interface Props {
  command: (AlarmRequest & { title?: string }) | null;
  open: boolean;
  onClose: () => void;
  onToggleStatus: (alarm: AlarmRequest, status: "on" | "off") => void;
  onEdit: (alarm: AlarmRequest) => void;
  onDelete: (alarm: AlarmRequest) => void;
}

export const AlarmActionsSheet = ({ command, open, onClose, onToggleStatus, onEdit, onDelete }: Props) => {
  if (!command) return null;
  const enabled = command.status === "on";
  return <ActionsSheet open={open} title={command.title} uuid={command.uuid} onClose={onClose} actions={[
    { label: enabled ? "Выключить" : "Включить", onClick: () => onToggleStatus(command, enabled ? "off" : "on") },
    { label: "Изменить", variant: "secondary", onClick: () => onEdit(command) },
    { label: "Удалить", variant: "remove", onClick: () => onDelete(command) },
  ]} />;
};
