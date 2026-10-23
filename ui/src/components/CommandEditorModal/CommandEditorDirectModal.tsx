import { commandNameHint } from "../ui/FieldLabel/fieldHints";
import type { ApiFeedbackState } from "../../hooks/useApiFeedback";
import { t } from "../../i18n";
import React, { useEffect, useMemo, useState } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/Select/SelectInput";
import { Textarea } from "../ui/Textarea/Textarea"
import { CommandSelect } from "./CommandSelect";

import { CommandDetails, DirectControl } from "../../types/commandTypes";
import { VALUE_TYPE_OPTIONS } from "../../constants/commandSelectOptions";

import styles from "./CommandEditorModal.module.scss";

const createDirectControl = (): DirectControl => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: false,
  subDirectControl: "",
});

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
  onBack?: () => void;
};

export const CommandDirectModal: React.FC<Props> = ({
  open,
  feedback,
  onClose,
  title,
  formData,
  setFormData,
  onSave,
  onBack,
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

  const directControl = useMemo(() => {
    return formData.directControl ?? createDirectControl();
  }, [formData]);

  const updateDirectControl = (patch: Partial<DirectControl>) => {
    setFormData((current) => ({
      ...current,
      directControl: {
        ...(current.directControl ?? createDirectControl()),
        ...patch,
      },
    }));
  };

  return (
    <Modal
      feedback={feedback}
      open={open}
      onClose={onClose}
      onBack={onBack}
      title={title}
      footer={
        <div className={styles.form}>
          <Button onClick={save}>{t("Сохранить")}</Button>
        </div>
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

        <Input
          label={t("mappingType")}
          value={directControl.mappingType}
          onChange={(event) =>
            updateDirectControl({
              mappingType: event.target.value,
            })
          }
        />

        <SelectInput
          label={t("valueType")}
          value={directControl.valueType}
          options={VALUE_TYPE_OPTIONS}
          onChange={(event) =>
            updateDirectControl({
              valueType: event.target.value,
            })
          }
        />
        {directControl.valueType == 'command' ?
          <>
            <div className={styles.field}>
              <Textarea
                label={t("Фразы для запуска")}
                hint={t("Фразы прямой команды — общая часть перед вложенными командами. Например: в основной команде «включи ${свет}», здесь — «свет», во вложенных командах — «в зале» и «в спальне». Получатся «включи свет в зале» и «включи свет в спальне».\nПоле можно оставить пустым: тогда используются только фразы вложенных команд. Один набор вложенных команд можно подключать к разным прямым командам.")}
                rows={6}
                value={(directControl.voiceCommands ?? []).join("\n")}
                onChange={(event) =>
                  updateDirectControl({
                    voiceCommands: event.target.value.split("\n"),
                  })
                }
              />
            </div>

            <CommandSelect
              kind="nested"
              value={Array.isArray(directControl.subDirectControl)
                ? (directControl.subDirectControl.length ? "__inline__" : "")
                : directControl.subDirectControl}
              title={Array.isArray(directControl.subDirectControl)
                ? t("Сохранённые вложенные команды") : directControl.subDirectControlTitle}
              onSelect={(option) => updateDirectControl({
                manual: false,
                subDirectControl: option.uuid,
                subDirectControlTitle: option.title,
              })}
            />
          </> : <></>}
      </div>
    </Modal>
  );
};
