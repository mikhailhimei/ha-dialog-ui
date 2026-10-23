import { useDialogApi } from "../../context/DialogContext";
import { usePaginatedCollection } from "../collections/usePaginatedCollection";
import type { ScriptActionSummary, ScriptActionDetails } from "../../types/scripts";

export function useApiScripts() {
  const api = useDialogApi();
  const { query, setQuery, page, loading, loadPage: loadScripts, error, retry } = usePaginatedCollection<ScriptActionSummary>("get_script_actions_short");
  const scripts = page ? { ...page, script_actions: page.data } : null;
  const getScriptAction = async (uuid: string) => (await api.getRecord<ScriptActionDetails>(uuid, "get_script_action")).data;
  const deleteScriptAction = async (uuid: string) => {
    await api.deleteRecord(uuid, "delete_script_action");
    await loadScripts();
  };
  const saveScript = async (data: ScriptActionDetails) => {
    await api.saveData(data, "save_script_action");
    await loadScripts();
  };
  const updateScript = async (uuid: string, data: Omit<ScriptActionDetails, "uuid">) => {
    await api.updateRecord(uuid, "update_script_action", data);
    await loadScripts();
  };
  const getAvailableScripts = () => api.getScripts();
  return { query, setQuery, error, retry, loading, scripts, loadScripts, getAvailableScripts, saveScript, updateScript, getScriptAction, deleteScriptAction };
}
