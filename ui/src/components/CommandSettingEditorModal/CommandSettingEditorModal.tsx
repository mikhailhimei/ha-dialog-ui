import { commandNameHint } from "../ui/FieldLabel/fieldHints";
import { assistantSettingTitle } from "../../utils/assistantSettingLabels";
import { useDialogApi } from "../../context/DialogContext";
import { SelectInput } from "../ui/Select/SelectInput";
import type { ApiFeedbackState } from "../../hooks/useApiFeedback";
import { t } from "../../i18n";
import React from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Textarea } from "../ui/Textarea/Textarea";
import { Input } from "../ui/Input/Input";
import { ToggleSwitch } from "../ui/ToggleSwitch";

import { CommandDetails } from "../../types/commandTypes";

import styles from "./CommandEditorModal.module.scss";

interface CommandEditorModalProps {
  feedback?: ApiFeedbackState;
  open: boolean;
  isEdit: boolean;
  formData: CommandDetails;
  setFormData: React.Dispatch<React.SetStateAction<CommandDetails>>;
  onClose: () => void;
  onUpdate: () => void;
}

export const CommandSettingEditorModal: React.FC<CommandEditorModalProps> = ({
  open,
  feedback,
  isEdit,
  formData,
  setFormData,
  onClose,
  onUpdate,
}) => {

  const component = formData;
  const scripts = useDialogApi().getScripts();
  const scriptResponseEnabled = component.actionType === "default_main" && Boolean(component.forwardCommandToServer);

  const updateComponent = (patch: Partial<CommandDetails>) => {
    setFormData((current) => ({
      ...current,
      ...patch
    }));
  };

  return (
    <Modal
      feedback={feedback}
      open={open}
      onClose={onClose}
      title={isEdit ? "Редактировать" : "Создать"}
      footer={
        <Button onClick={onUpdate}>
          {t("Обновить")}
        </Button>
      }
    >
      <div className={styles.form}>
        <Input
          label={t("Название команды")}
          hint={commandNameHint(formData.uuid)}
          value={assistantSettingTitle(formData)}
          readOnly
        />

        {component.actionType === "stop" && <>
          <ToggleSwitch label={t("Включить команду «Стоп»")} checked={component.status !== false}
            onChange={event=>updateComponent({status:event.target.checked})} />
          <Textarea label={t("Фразы для запуска")} rows={4}
            hint={t("Фразы завершения диалога через ;. Работают для основных команд и продолжений. Проверяется совпадение всей фразы.")}
            value={Array.isArray(component.voiceCommands) ? component.voiceCommands.join("\n") : component.voiceCommands ?? ""}
            onChange={event=>updateComponent({voiceCommands:event.target.value.split("\n")})} />
        </>}

        {component.actionType !== "stop" && <ToggleSwitch
          label={t("Завершать диалог")}
          checked={Boolean(component.endStatus)}
          onChange={(event) =>
            updateComponent({
              endStatus: event.target.checked,
            })
          }
        />}

        {component.actionType === "default_main" && <ToggleSwitch
          label={t("Передать команду серверу")}
          checked={Boolean(component.forwardCommandToServer)}
          onChange={(event) =>
            updateComponent({
              forwardCommandToServer: event.target.checked,
            })
          }
        />}

        {component.actionType === "default_main" && component.forwardCommandToServer && <SelectInput
          label={t("Скрипт Home Assistant")}
          value={component.script_entity_id ?? ""}
          options={[
            { value: "", label: t("Использовать существующие сценарии") },
            ...scripts.map(script => ({ value: script.entity_id, label: script.name })),
            ...(component.script_entity_id && !scripts.some(script => script.entity_id === component.script_entity_id)
              ? [{ value: component.script_entity_id, label: component.script_entity_id }] : []),
          ]}
          onChange={event => updateComponent({ script_entity_id: event.target.value })}
        />}

        {scriptResponseEnabled ? <>
          <Input label={t("Тип результата скрипта")} value="success" readOnly
            hint={t("Ожидается ответ скрипта с типом success. После его получения будет озвучен текст из поля ниже.")} />
          <Textarea rows={8} label={t("Текст озвучки")}
            hint={t("Можно подставить данные из скрипта через ${имя}. Например, для текста «Ответ: ${reply}» передайте reply в поле variables действия ha_dialog_ui.send_command. Имена должны совпадать. Скрипт должен вернуть тип success.")}
            placeholder={t("Например: ${reply}")}
            value={component.voiceResponseArray?.find(response => response.actionType === "success")?.voiceResponse ?? ""}
            onChange={event => updateComponent({ voiceResponseArray: [{ actionType: "success", voiceResponse: event.target.value }] })}
          />
        </> : <Textarea
          rows={8}
          aria-label={t("Ответное сообщение")}
          label={t("Ответное сообщение")}
          value={component.voiceResponse}
          onChange={(event) =>
            updateComponent({
              voiceResponse: event.target.value,
            })
          }
        />}
      </div>
    </Modal>
  );
};
