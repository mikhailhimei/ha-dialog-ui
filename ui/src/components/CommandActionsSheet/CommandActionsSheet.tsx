
import { ActionsSheet, type SheetAction } from "../ui/ActionsSheet/ActionsSheet";

interface Props {
  command: { uuid: string; title: string; status?: boolean } | null;
  open: boolean;
  onClose: () => void;
  onToggleStatus?: (uuid: string, status: boolean) => void;
  onEdit: (uuid: string) => void;
  onDelete: (uuid: string) => void;
}

export const CommandActionsSheet = ({ command, open, onClose, onToggleStatus, onEdit, onDelete }: Props) => {
  if (!command) return null;
  return <ActionsSheet open={open} title={command.title} uuid={command.uuid} onClose={onClose} actions={[
    ...(onToggleStatus ? [{ label: command.status ? "Выключить" : "Включить", onClick: () => onToggleStatus(command.uuid, !Boolean(command.status)) } satisfies SheetAction] : []),
    { label: "Изменить", variant: "secondary", onClick: () => onEdit(command.uuid) },
    { label: "Удалить", variant: "remove", onClick: () => onDelete(command.uuid) },
  ]} />;
};
