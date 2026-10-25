export class DataImportError extends Error {}

export type TransferKind = "scripts" | "scenarios" | "settings";
interface TransferApi {
  getAllRecords: (type: string) => Promise<{ uuid: string }[]>;
  getRecord: (uuid: string, type: string) => Promise<unknown>;
  getData: (type: string) => Promise<unknown>;
  saveData: (data: unknown, type: string) => Promise<unknown>;
}
const collections = {
  scripts: { list: "get_script_actions_short", detail: "get_script_action", import: "import_script_actions" },
  scenarios: { list: "get_assistant_sub_commands_short", detail: "get_assistant_sub_command", import: "import_assistant_sub_commands" },
};
const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === "object" && !Array.isArray(value);

export async function exportData(api: TransferApi, kind: TransferKind) {
  if (kind === "settings") {
    const response = await api.getData("get_settings");
    const settings = object(response) && object(response.result) ? response.result : response;
    if (!object(settings)) throw new DataImportError("Файл не содержит корректные настройки.");
    const keys = ["theme", "client_id", "is_admin", "active_remout", "api_commands_enabled", "api_commands_token", "call_music", "remout", "timer_alarm"];
    return Object.fromEntries(keys.filter(key => key in settings).map(key => [key, settings[key]]));
  }
  if (kind === "scenarios") return api.getData("export_command_bundle");
  const collection = collections[kind];
  const items = await api.getAllRecords(collection.list);
  return Promise.all(items.map(async item => {
    const response = await api.getRecord(item.uuid, collection.detail);
    return object(response) ? response.data : undefined;
  }));
}

export function parseImport(text: string, kind: TransferKind) {
  let data: unknown;
  try { data = JSON.parse(text); } catch { throw new DataImportError("Некорректный JSON-файл."); }
  if (kind === "settings") {
    const fields: Record<string, string> = { theme: "string", client_id: "string", is_admin: "boolean", active_remout: "boolean", api_commands_enabled: "boolean", api_commands_token: "string", call_music: "string", remout: "object", timer_alarm: "object" };
    if (!object(data) || !Object.keys(data).length || Object.keys(data).some(key => !fields[key] || typeof data[key] !== fields[key])) throw new DataImportError("Файл не содержит корректные настройки.");
    if (data.theme !== undefined && (typeof data.theme !== "string" || !["dark", "light"].includes(data.theme))) throw new DataImportError("Файл не содержит корректные настройки.");
    for (const [key, allowed] of [["remout", ["base_url", "token", "client_id"]], ["timer_alarm", ["global_music_timer", "global_music_alarm"]]] as const) {
      if (key in data && (!object(data[key]) || Object.entries(data[key] as Record<string, unknown>).some(([name, value]) => !allowed.includes(name as never) || typeof value !== "string"))) throw new DataImportError("Файл не содержит корректные настройки.");
    }
    return data;
  }
  if (kind === "scenarios" && object(data)) {
    const keys = ["commands", "sub_commands", "direct_commands", "templates", "settings"];
    if (data.format !== "ha-dialog-ui-commands" || data.version !== 1 || Object.keys(data).length !== 7 || keys.some(key => !Array.isArray(data[key]))) throw new DataImportError("Некорректный файл сценариев или неподдерживаемая версия.");
    for (const key of keys) {
      const ids = new Set();
      const records = data[key];
      if (!Array.isArray(records)) throw new DataImportError("Ожидается массив записей JSON.");
      for (const item of records) {
        if (!object(item) || typeof item.uuid !== "string" || !item.uuid.trim() || ids.has(item.uuid) || typeof item.title !== "string") throw new DataImportError("Некорректные или повторяющиеся ID записей.");
        ids.add(item.uuid);
      }
    }
    return data;
  }
  if (!Array.isArray(data)) throw new DataImportError("Ожидается массив записей JSON.");
  const ids = new Set();
  for (const item of data) {
    if (!object(item) || typeof item.uuid !== "string" || !item.uuid.trim() || ids.has(item.uuid)) throw new DataImportError("Некорректные или повторяющиеся ID записей.");
    ids.add(item.uuid);
    const valid = kind === "scripts"
      ? typeof item.name === "string" && typeof item.script_entity_id === "string"
      : typeof item.title === "string" && typeof item.status === "boolean" && object(item.subComponentDialog) && typeof item.subComponentDialog.endStatus === "boolean" && typeof item.subComponentDialog.actionType === "string" && typeof item.subComponentDialog.answerType === "string";
    if (!valid) throw new DataImportError("Нужен файл с полными записями. Краткий список названий загрузить нельзя.");
  }
  return data;
}

export async function importData(api: TransferApi, kind: TransferKind, text: string) {
  const data = parseImport(text, kind);
  await api.saveData(data, kind === "settings" ? "import_settings" : kind === "scenarios" && !Array.isArray(data) ? "import_command_bundle" : collections[kind].import);
  return data;
}
