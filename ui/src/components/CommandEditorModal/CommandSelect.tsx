import { useEffect, useRef, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import type { CommandDetails, CommandSummary } from "../../types/commandTypes";
import { formatApiError } from "../../utils/apiErrors";
import { t } from "../../i18n";
import { ApiError } from "../ui/ApiError/ApiError";
import { SelectInput } from "../ui/Select/SelectInput";

type Selection = { uuid: string; title: string; mappingType?: string };

export function CommandSelect({ kind, value, title, onSelect }: {
  kind: "continuation" | "direct" | "nested";
  value: string;
  title?: string;
  onSelect: (command: Selection) => void;
}) {
  const api = useDialogApi();
  const [commands, setCommands] = useState<CommandSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selecting, setSelecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const retry = useRef<(() => void) | null>(null);
  const selectionId = useRef(0);
  useEffect(() => () => { selectionId.current += 1; }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const sources = kind === "nested"
      ? ["get_assistant_sub_direct_control_samples_short"]
      : kind === "direct"
      ? ["get_assistant_sub_direct_controls_short"]
      : ["get_assistant_commands_short", "get_assistant_sub_commands_short"];
    void Promise.all(sources.map(source => api.getAllRecords<CommandSummary>(source))).then(results => {
      if (!cancelled) setCommands([...new Map(results.flat().map(item => [item.uuid, item])).values()]);
    }).catch(reason => {
      if (!cancelled) {
        setError(formatApiError(reason));
        retry.current = () => setAttempt(current => current + 1);
      }
    }).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [api, kind, attempt]);

  // A linked editor can rename the selected command without remounting this list.
  useEffect(() => {
    if (value && title) setCommands(items => items.map(item => item.uuid === value ? { ...item, title } : item));
  }, [value, title]);

  const select = async (uuid: string) => {
    if (!uuid) { selectionId.current += 1; setError(null); onSelect({ uuid: "", title: "" }); return; }
    const command = commands.find(item => item.uuid === uuid);
    if (!command) return;
    const id = ++selectionId.current;
    setError(null);
    if (kind !== "direct") { onSelect(command); return; }
    setSelecting(true);
    try {
      const response = await api.getRecord<CommandDetails>(uuid, "get_assistant_sub_direct_control");
      if (id === selectionId.current) onSelect({ ...command, mappingType: response.data.directControl?.mappingType ?? "" });
    } catch (reason) {
      if (id === selectionId.current) {
        setError(formatApiError(reason));
        retry.current = () => { void select(uuid); };
      }
    } finally { if (id === selectionId.current) setSelecting(false); }
  };

  const options = commands.map(command => ({ value: command.uuid, label: command.title || t("Без названия") }));
  if (value && !commands.some(command => command.uuid === value)) {
    options.unshift({ value, label: title || t("Выбранная команда недоступна") });
  }
  const label = t(kind === "nested" ? "subDirectControl" : "uuid");
  return <div>
    <SelectInput label={label} aria-label={label} value={value}
      disabled={loading || selecting}
      options={[{ value: "", label: t(loading ? "Загрузка..." : kind === "nested" ? "Без вложенных команд" : "Выберите команду") }, ...options]}
      onChange={event => { void select(event.target.value); }} />
    <ApiError error={error} busy={loading || selecting} retry={() => retry.current?.()} />
  </div>;
}
