
import { ActionsSheet } from "../ui/ActionsSheet/ActionsSheet";

interface Props {
  uuid?: string;
  title?: string;
  open: boolean;
  onClose: () => void;
  onEdit: (uuid: string) => void;
  onDelete: (uuid: string) => void;
}

export const ScriptActionsSheet = ({ uuid, title, open, onClose, onEdit, onDelete }: Props) => {
  if (!uuid) return null;
  return <ActionsSheet open={open} title={title} uuid={uuid} onClose={onClose} size="sm" layout="row" actions={[
    { label: "Изменить", onClick: () => onEdit(uuid) },
    { label: "Удалить", variant: "remove", onClick: () => onDelete(uuid) },
  ]} />;
};
