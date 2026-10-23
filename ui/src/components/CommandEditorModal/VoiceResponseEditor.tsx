import { t } from "../../i18n";
import type { VoiceResponse } from "../../types/commandTypes";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/Select/SelectInput";
import { Textarea } from "../ui/Textarea/Textarea";

const options = [
  { value: "default", label: "Основной" },
  { value: "default_next_step", label: "Ответ для продолжения диалога" },
  { value: "custom", label: "По типу результата скрипта" },
];

export function VoiceResponseEditor({ response, onChange }: {
  response: VoiceResponse;
  onChange: (patch: Partial<VoiceResponse>) => void;
}) {
  const type = (response.actionType ?? "").trim().toLowerCase();
  const mode = ["default", "direct", "default_direct", "next"].includes(type)
    ? "default" : type === "default_next_step" ? "default_next_step" : "custom";

  return <>
    <SelectInput
      label={t("Типы ответов")}
      aria-label={t("Типы ответов")}
      value={mode}
      options={options}
      onChange={event => onChange({ actionType: event.target.value === "custom" ? "" : event.target.value })}
    />
    {mode === "custom" ? <Input
      label={t("Тип результата скрипта")}
      placeholder={t("Например, room_required")}
      value={response.actionType ?? ""}
      onChange={event => onChange({ actionType: event.target.value })}
    /> : null}
    <Textarea
      label={t("voiceResponse")}
      value={response.voiceResponse}
      onChange={event => onChange({ voiceResponse: event.target.value })}
    />
  </>;
}
