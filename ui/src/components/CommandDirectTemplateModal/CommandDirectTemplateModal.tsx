import { commandNameHint } from "../ui/FieldLabel/fieldHints";
import type { ApiFeedbackState } from "../../hooks/useApiFeedback";
import { t } from "../../i18n";
import React, { useEffect, useMemo, useState } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { Textarea } from "../ui/Textarea/Textarea";

import { CommandDetails, SubDirectControlItem } from "../../types/commandTypes";

import styles from "./CommandDirectTemplateModal.module.scss";

type Props = {
  feedback?: ApiFeedbackState;
  open: boolean;
  onClose: () => void;
  title: string;

  formData: CommandDetails;
  setFormData: React.Dispatch<
    React.SetStateAction<CommandDetails>
  >;

  onSave: () => void;
};

export const CommandDirectTemplateModal: React.FC<Props> = ({
  open,
  feedback,
  onClose,
  title,
  formData,
  setFormData,
  onSave,
}) => {
  const [titleError, setTitleError] = useState("");
  useEffect(() => { setTitleError(""); }, [open, formData.uuid]);
  const save = () => {
    if (!formData.title?.trim()) {
      setTitleError("Обязательное поле");
      return;
    }
    setTitleError("");
    onSave();
  };

  const template = useMemo(
    () => formData.subDirectControl ?? [],
    [formData]
  );

  const updateTemplate = (items: SubDirectControlItem[]) => {
    setFormData((current) => ({
      ...current,
      subDirectControl: items,
    }));
  };

  const updateItem = (
    index: number,
    patch: Partial<SubDirectControlItem>
  ) => {
    const list = [...template];

    list[index] = {
      ...list[index],
      ...patch,
    };

    updateTemplate(list);
  };

  const addItem = () => {
    updateTemplate([
      ...template,
      {
        subMappingType: "",
        subVoiceCommands: "",
      },
    ]);
  };

  const removeItem = (index: number) => {
    updateTemplate(
      template.filter((_, i) => i !== index)
    );
  };

  return (
    <Modal
      feedback={feedback}
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <Button onClick={save}>{t("Сохранить")}</Button>
      }
    >
      <div className={styles.form}>
        <Input
          label={t("Название команды")}
          hint={commandNameHint(formData.uuid)}
          required
          error={titleError}
          value={formData.title}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              title: event.target.value,
            }))
          }
        />

        <section className={styles.form} aria-label={t("Варианты вложенных команд")}>
          <h3 className={styles.sectionTitle}>{t("Варианты вложенных команд")}</h3>
          {template.map((item, index) => (
            <div
              key={index}
              className={styles.arrayItem}
            >
              <Input
                label={t("Код значения")}
                value={item.subMappingType ?? ""}
                onChange={(event) =>
                  updateItem(index, {
                    subMappingType:
                      event.target.value,
                  })
                }
              />

              <Textarea
                label={t("Варианты произношения")}
                rows={3}
                value={(Array.isArray(item.subVoiceCommands) ? item.subVoiceCommands : []).join("\n")}
                onChange={(event) =>
                    updateItem(index, {
                    subVoiceCommands: event.target.value
                        .split("\n")
                        .filter(Boolean),
                    })
                }
                />

              <Button
                type="button"
                variant="remove"
                onClick={() =>
                  removeItem(index)
                }
              >{t("Удалить")}</Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            fullWidth
            leftIcon={<span aria-hidden="true">+</span>}
            onClick={addItem}
          >{t("Добавить ещё")}</Button>
        </section>
      </div>
    </Modal>
  );
};
