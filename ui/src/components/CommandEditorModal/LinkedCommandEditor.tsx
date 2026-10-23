import { useEffect, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import type { CommandDetails } from "../../types/commandTypes";
import { CommandEditorModal } from "./CommandEditorModal";
import { CommandDirectModal } from "./CommandEditorDirectModal";
import { Modal } from "../ui/Modal/Modal";
import { t } from "../../i18n";

export interface LinkedCommand { uuid: string; kind: "direct" | "continuation"; }

export function LinkedCommandEditor({ target, onBack, onSaved }: {
  target: LinkedCommand;
  onBack: () => void;
  onSaved: (command: CommandDetails) => void;
}) {
  const api = useDialogApi();
  const feedback = useApiFeedback();
  const [formData, setFormData] = useState<CommandDetails>({ title: "" });
  const [kind, setKind] = useState<"main" | "sub" | "direct">();
  useEffect(() => {
    let cancelled = false;
    void feedback.run(async () => {
      let loadedKind: "main" | "sub" | "direct" = target.kind === "direct" ? "direct" : "main";
      let response;
      if (target.kind === "direct") response = await api.getRecord<CommandDetails>(target.uuid, "get_assistant_sub_direct_control");
      else {
        try { response = await api.getRecord<CommandDetails>(target.uuid, "get_assistant_command"); }
        catch (error) {
          if (!(error && typeof error === "object" && "code" in error && error.code === "not_found")) throw error;
          loadedKind = "sub";
          response = await api.getRecord<CommandDetails>(target.uuid, "get_assistant_sub_command");
        }
      }
      if (!cancelled) { setFormData({ ...response.data, status: response.data.status ?? false }); setKind(loadedKind); }
    }, { retryable: true });
    return () => { cancelled = true; };
  }, [api, target.uuid, target.kind, feedback.run]);

  const save = () => feedback.run(async () => {
    if (!kind) return;
    const endpoint = kind === "direct" ? "update_assistant_sub_direct_control" : kind === "main" ? "update_assistant_command" : "update_assistant_sub_command";
    const { uuid: _uuid, ...data } = formData;
    await api.updateRecord(target.uuid, endpoint, data);
    onSaved(formData);
    onBack();
  }, { exclusive: true });

  if (!kind) return <Modal open onClose={onBack} onBack={onBack} title="Перейти к команде" feedback={feedback}>
    {feedback.busy && <p role="status">{t("Загрузка...")}</p>}
  </Modal>;
  if (kind === "direct") return <CommandDirectModal open title="Редактировать" feedback={feedback}
    formData={formData} setFormData={setFormData} onClose={onBack} onBack={onBack} onSave={save} />;
  return <CommandEditorModal open isEdit feedback={feedback} formData={formData} setFormData={setFormData}
    componentKey={kind === "main" ? "componentDialog" : "subComponentDialog"}
    onClose={onBack} onBack={onBack} onSave={save} onUpdate={save} />;
}
