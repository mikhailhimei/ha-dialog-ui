import { useDialogApi } from "../../context/DialogContext";
import { usePaginatedCollection } from "../collections/usePaginatedCollection";
import type { CommandDetails, CommandSummary } from "../../types/commandTypes";

export function useApiCommands(listCommand: string) {
  const api = useDialogApi();
  const { query, setQuery, page: commands, loading, loadPage: loadCommands, updateItems, error, retry } = usePaginatedCollection<CommandSummary>(listCommand);

  const setCommandStatus = async (commandType: string, uuid: string, status: boolean) => {
    const response = await api.updateRecordStatus(commandType, uuid, status);
    updateItems(items => items.map(command => command.uuid === uuid ? { ...command, status } : command));
    return response;
  };

  const saveCommand = (commandType: string, data: CommandDetails) => api.saveData(data, commandType);
  const updateCommand = async (commandType: string, data: CommandDetails) => {
    if (!data.uuid) return;
    const { uuid, ...payload } = data;
    const result = await api.updateRecord(uuid, commandType, payload);
    await loadCommands();
    return result;
  };
  const deleteCommand = (commandType: string, uuid: string) => api.deleteRecord(uuid, commandType);
  const getCommandDetails = (commandType: string, uuid: string) => api.getRecord(uuid, commandType);

  return { query, setQuery, error, retry, loading, commands, loadCommands, saveCommand, updateCommand, deleteCommand, setCommandStatus, getCommandDetails };
}
