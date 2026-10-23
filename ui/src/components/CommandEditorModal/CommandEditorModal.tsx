import { commandNameHint } from "../ui/FieldLabel/fieldHints";
import { LinkedCommandEditor, type LinkedCommand } from "./LinkedCommandEditor";
import { useDialogApi } from "../../context/DialogContext";
import type { ApiFeedbackState } from "../../hooks/useApiFeedback";
import { t } from "../../i18n";
import React, { useEffect, useMemo, useState } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/Select/SelectInput";
import { Textarea } from "../ui/Textarea/Textarea"
import { VoiceResponseEditor } from "./VoiceResponseEditor";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { FieldHelp } from "../ui/FieldLabel/FieldLabel";
import { CommandLogicEditor } from "./CommandLogicEditor";
import { ComponentDialog, CommandDetails, DialogComponentKey, DialogArrayKey } from "../../types/commandTypes";
import {
  ANSWER_TYPE_OPTIONS,
} from "../../constants/commandSelectOptions";

import styles from "./CommandEditorModal.module.scss";

const createComponent = (): ComponentDialog => ({
  endStatus: true,
  script_entity_id: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "default", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "children", actionType: "", uuid: "", title: "" }],
});

interface CommandEditorModalProps {
  feedback?: ApiFeedbackState;
  onBack?: () => void;
  open: boolean;
  isEdit: boolean;
  formData: CommandDetails;
  componentKey: DialogComponentKey;
  setFormData: React.Dispatch<React.SetStateAction<CommandDetails>>;
  onClose: () => void;
  onSave: () => void;
  onUpdate: () => void;
}

export const CommandEditorModal: React.FC<CommandEditorModalProps> = ({
  open,
  feedback,
  isEdit,
  formData,
  componentKey,
  setFormData,
  onClose,
  onBack,
  onSave,
  onUpdate,
}) => {

  const api = useDialogApi();
  const availableScripts = api.getScripts();
  const component = useMemo(() => formData[componentKey] ?? createComponent(), [formData, componentKey]);

  useEffect(() => {
    if (!open) return;
    setFormData(current => {
      const currentComponent = current[componentKey];
      if (!currentComponent?.nextAction?.some(link => !link.actionTypeComponent)) return current;
      return { ...current, [componentKey]: { ...currentComponent,
        nextAction: currentComponent.nextAction.map(link => ({ ...link, actionTypeComponent: link.actionTypeComponent || "children" })),
      }};
    });
  }, [open, formData.uuid, componentKey, setFormData]);

  const [linked, setLinked] = useState<(LinkedCommand & { index: number }) | null>(null);
  useEffect(() => { if (!open) setLinked(null); }, [open]);
  const [logicOpen, setLogicOpen] = useState(false);
  useEffect(() => {
    setLogicOpen(false);
    setErrors({});
  }, [open, formData.uuid, componentKey]);

  const [errors, setErrors] = useState<Partial<Record<"title", string>>>({});

  const updateComponent = (patch: Partial<ComponentDialog>) => {
    setFormData((current) => ({
      ...current,
      [componentKey]: {
        ...(current[componentKey] ?? createComponent()),
        ...patch,
      },
    }));
  };

  const updateComponentArray = <K extends DialogArrayKey,>(
    field: K,
    index: number,
    patch: Partial<ComponentDialog[K][number]>
  ) => {
    const list = [...(component[field] ?? [])];
    list[index] = { ...list[index], ...patch };

    updateComponent({
      [field]: list,
    });
  };

  const addComponentArrayItem = <K extends DialogArrayKey,>(
    field: K,
    item: ComponentDialog[K][number]
  ) => {
    updateComponent({
      [field]: [...(component[field] ?? []), item],
    });
  };

  const removeComponentArrayItem = (
    field: DialogArrayKey,
    index: number
  ) => {
    updateComponent({
      [field]: (component[field] ?? []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    });
  };

  const validate = () => {
    const nextErrors: Partial<Record<"title", string>> = {};

    if (!formData.title.trim()) {
      nextErrors.title =
        "Обязательное поле";
    }

    setErrors(nextErrors);

    const isEmpty = Object.keys(nextErrors).length === 0;

    return (isEmpty);
  };

  return (
    <>
    <Modal
      suspended={Boolean(linked)}
      feedback={feedback}
      open={open}
      onClose={onClose}
      onBack={onBack}
      title={logicOpen ? "Настроить логику" : isEdit ? "Редактировать" : "Создать"}
      footer={<div className={styles.form}>
        {logicOpen ? <Button variant="secondary" onClick={() => setLogicOpen(false)}>{t("Назад")}</Button> :
        <div className={styles.footerActions}>
          <Button variant="secondary" onClick={() => setLogicOpen(true)}>{t("Настроить логику")}</Button>
          <Button onClick={() => {
            if (!validate()) return;
            isEdit ? onUpdate() : onSave();
          }}>
            {t(isEdit ? "Обновить" : "Сохранить")}
          </Button>
        </div>}
      </div>}
    >
      {logicOpen ? <CommandLogicEditor
        onOpenCommand={(target, index) => setLinked({ ...target, index })}
        component={component}
        updateComponentArray={updateComponentArray}
        addComponentArrayItem={addComponentArrayItem} removeComponentArrayItem={removeComponentArrayItem}
      /> : <div className={styles.form}>
        <Input
          label={t("Название команды")}
          hint={commandNameHint(formData.uuid)}
          value={formData.title}
          error={errors.title}
          onChange={(event) =>
            setFormData({
              ...formData,
              title: event.target.value,
            })
          }
        />

        <SelectInput
          label={t("Источник ответа")}
          value={["ha_storage", "ha", "external"].includes(component.answerType) ? "script_response" : component.answerType}
          options={ANSWER_TYPE_OPTIONS}
          onChange={(event) =>
            updateComponent({
              answerType: event.target.value,
            })
          }
        />

        <SelectInput
          label={t("Скрипт Home Assistant")}
          value={component.script_entity_id ?? "__legacy__"}
          options={[
            ...(component.script_entity_id === undefined ? [{ label: t("Использовать существующие сценарии"), value: "__legacy__" }] : []),
            { label: t("Не запускать скрипт"), value: "" },
            ...availableScripts.map(script => ({ label: script.name, value: script.entity_id })),
          ]}
          onChange={event => updateComponent({ script_entity_id: event.target.value })}
        />
        {componentKey === "subComponentDialog" && <div className={styles.phraseMode}>
          <ToggleSwitch label={t("Отправить команду как есть")} checked={Boolean(component.forwardText)}
            onChange={event => updateComponent({ forwardText: event.target.checked })} />
          <FieldHelp label="Отправить команду как есть" />
        </div>}
        {!(componentKey === "subComponentDialog" && component.forwardText) && (
        <div className={styles.field}>
          <Textarea
            label={t("Фразы для запуска")}
            value={(component.voiceCommands == null ? [] : typeof component.voiceCommands != 'object' ? component?.voiceCommands.split(';') : component?.voiceCommands).join("\n")}
            onChange={(event) =>
              updateComponent({
                voiceCommands: event.target.value.split("\n"),
              })
            }
          />
        </div>

        )}

        <section className={styles.form} aria-label={t("Ответы")}>
          <h3 className={styles.sectionTitle}>{t("Ответы")}</h3>
          {(component.voiceResponseArray ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <VoiceResponseEditor
                response={item}
                onChange={patch => updateComponentArray("voiceResponseArray", index, patch)}
              />

              <Button
                type="button"
                variant="remove"
                onClick={() =>
                  removeComponentArrayItem("voiceResponseArray", index)
                }
              >{t("Удалить")}</Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            fullWidth
            leftIcon={<span aria-hidden="true">+</span>}
            onClick={() =>
              addComponentArrayItem("voiceResponseArray", {
                actionType: "default",
                voiceResponse: "",
              })
            }
          >{t("Добавить ещё")}</Button>

        </section>

      </div>}
    </Modal>
    {linked && <LinkedCommandEditor key={`${linked.kind}-${linked.uuid}`} target={linked}
      onBack={() => setLinked(null)} onSaved={saved => {
        if (linked.kind === "direct") updateComponentArray("nextDirectControl", linked.index, { title: saved.title, mappingType: saved.directControl?.mappingType ?? "" });
        else updateComponentArray("nextAction", linked.index, { title: saved.title });
      }} />}
    </>
  );
};
