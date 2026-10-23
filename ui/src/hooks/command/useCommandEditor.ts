import { useApiFeedback } from "../useApiFeedback";
import { useState } from "react";
import { useApiCommands } from "./useApiCommands";
import type { CommandDetails, CommandSummary } from "../../types/commandTypes";

interface CommandEndpoints {
  list: string;
  detail: string;
  create: string;
  update: string;
  remove: string;
  status?: string;
}
const endpoints: Record<"main" | "sub" | "direct" | "template", CommandEndpoints> = {
  main: { list: "get_assistant_commands_short", detail: "get_assistant_command", create: "save_assistant_command", update: "update_assistant_command", remove: "delete_assistant_command", status: "update_assistant_command_status" },
  sub: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", create: "save_assistant_sub_command", update: "update_assistant_sub_command", remove: "delete_assistant_sub_command", status: "update_assistant_sub_command_status" },
  direct: { list: "get_assistant_sub_direct_controls_short", detail: "get_assistant_sub_direct_control", create: "save_assistant_sub_direct_control", update: "update_assistant_sub_direct_control", remove: "delete_assistant_sub_direct_control", status: "update_assistant_sub_direct_controls_status" },
  template: { list: "get_assistant_sub_direct_control_samples_short", detail: "get_assistant_sub_direct_control_sample", create: "save_assistant_sub_direct_control_sample", update: "update_assistant_sub_direct_control_sample", remove: "delete_assistant_sub_direct_control_sample" },
};

export function useCommandEditor(kind: keyof typeof endpoints, createEmptyCommand: () => CommandDetails) {
  const endpoint = endpoints[kind];
  const { query, setQuery, commands, loading, loadCommands, getCommandDetails, saveCommand, updateCommand, deleteCommand, setCommandStatus, error: listError, retry: retryList } = useApiCommands(endpoint.list);
  const feedback = useApiFeedback();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(createEmptyCommand);
  const [actionsCommand, setActionsCommand] = useState<CommandSummary | null>(null);
  const openCreateModal = () => {
    feedback.clearError();
    setIsEdit(false);
    setFormData(createEmptyCommand());
    setModalOpen(true);
  };
  const openEditModal = (uuid: string) => feedback.run(async () => {
    const response = await getCommandDetails(endpoint.detail, uuid);
    setIsEdit(true);
    const data = response.data;
    for (const key of ["componentDialog", "subComponentDialog"] as const) {
      const component = data[key];
      if (component) {
        component.nextAction = (component.nextAction ?? []).filter(
          (item) => !item.actionTypeComponent || ["children", "custom"].includes(item.actionTypeComponent)
        );
      }
    }
    setFormData(data);
    setModalOpen(true);
  }, { retryable: true });
  const handleToggleStatus = (uuid: string, status: boolean) => feedback.run(async () => {
    if (endpoint.status) await setCommandStatus(endpoint.status, uuid, status);
  }, { exclusive: true });
  const handleDelete = (uuid: string) => feedback.run(async () => {
    await deleteCommand(endpoint.remove, uuid);
    await loadCommands();
  }, { exclusive: true });
  const handleCreate = () => feedback.run(async () => {
    await saveCommand(endpoint.create, formData);
    setModalOpen(false);
    await loadCommands();
  }, { exclusive: true });
  const handleUpdate = () => feedback.run(async () => {
    await updateCommand(endpoint.update, formData);
    setModalOpen(false);
  }, { exclusive: true });
  return { query, setQuery, feedback: { error: feedback.error ?? listError, busy: feedback.busy, retry: feedback.error ? feedback.retry ?? (() => { feedback.clearError(); retryList(); }) : retryList }, listError, commands, loading, loadCommands, modalOpen, setModalOpen, isEdit, formData, setFormData,
    actionsCommand, setActionsCommand, openCreateModal, openEditModal, handleToggleStatus, handleDelete, handleCreate, handleUpdate };
}
