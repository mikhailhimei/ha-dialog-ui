import { t } from "../../i18n";

import { useRemoteServerEnabled } from "../../context/RemoteServerContext";
import { Input } from "../ui/Input/Input";
import { Accordion } from "../ui/Accordion/Accordion";
import { Condition } from "@/types/scripts";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Button } from "@/components/ui/Button/Button";

import styles from "./ConditionAccordion.module.scss";

type ConditionErrors = {
  parent_type?: string;
  children_type?: string;
  children_direct_type?: string;
};

interface Props {
  condition: Condition;
  index: number;
  defaultOpen?: boolean;

  onChange: (value: Condition) => void;
  onDelete: () => void;

  totalCount: number;

  errors?: ConditionErrors;
}

const conditionSources = {
  parent_type: "search_assistant_commands",
  children_type: "search_assistant_sub_commands",
  children_direct_type: "search_assistant_sub_direct_controls",
} as const;

function ConditionTypeInput({ field, value, error, onChange }: {
  field: keyof typeof conditionSources;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const remoteEnabled = useRemoteServerEnabled();
  if (remoteEnabled) {
    return <Input label={t(field)} value={value} error={error} onChange={event => onChange(event.target.value)} />;
  }
  return (
    <SearchInput
      label={t(field)}
      value={value}
      error={error}
      searchSource={[conditionSources[field]]}
      minQueryLength={3}
      onChange={onChange}
      getSelectedValue={option => (field === "children_direct_type" ? option.mappingType : option.actionType) ?? option.uuid}
    />
  );
}

export const ConditionAccordion = ({
  condition,
  index,
  defaultOpen,
  onChange,
  onDelete,
  totalCount,
  errors,
}: Props) => {
  const showChildrenType =
    condition.children_type !== undefined;

  const showChildrenDirectType =
    condition.children_direct_type !== undefined;

  const hideChildrenType = () => {
    onChange({
      ...condition,
      children_type: undefined,
    });
  };

  const hideChildrenDirectType = () => {
    onChange({
      ...condition,
      children_direct_type: undefined,
    });
  };

  return (
    <Accordion
      title={`${t("Условие")} ${index + 1}`}
      defaultOpen={defaultOpen}
    >
      <div className={styles.field}>
        <ConditionTypeInput
          field="parent_type"
          value={condition.parent_type ?? ""}
          error={errors?.parent_type}
          onChange={value => onChange({ ...condition, parent_type: value })}
        />
      </div>

      <div className={styles.field}>
        {!showChildrenType ? (
          <Button
            type="button"
            fullWidth
            onClick={() =>
              onChange({
                ...condition,
                children_type: "",
              })
            }
          >{t("🞢 Добавить второстепенную команду")}</Button>
        ) : (
          <div
            className={`${styles.row} ${errors?.children_type ? styles.rowError : ""}`}
          >
            <div className={styles.inputWrapper}>
              <ConditionTypeInput
                field="children_type"
                value={condition.children_type ?? ""}
                error={errors?.children_type}
                onChange={value => onChange({ ...condition, children_type: value })}
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              className={styles.clearButton}
              aria-label={t("Убрать второстепенную команду")}
              onClick={hideChildrenType}
            >
              ×
            </Button>
          </div>
        )}
      </div>

      <div className={styles.field}>
        {!showChildrenDirectType ? (
          <Button
            type="button"
            fullWidth
            onClick={() =>
              onChange({
                ...condition,
                children_direct_type: "",
              })
            }
          >{t("🞢 Добавить прямую команду")}</Button>
        ) : (
          <div
            className={`${styles.row} ${errors?.children_direct_type ? styles.rowError : ""}`}
          >
            <div className={styles.inputWrapper}>
              <ConditionTypeInput
                field="children_direct_type"
                value={condition.children_direct_type ?? ""}
                error={errors?.children_direct_type}
                onChange={value => onChange({ ...condition, children_direct_type: value })}
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              className={styles.clearButton}
              aria-label={t("Убрать прямую команду")}
              onClick={hideChildrenDirectType}
            >
              ×
            </Button>
          </div>
        )}
      </div>

      {totalCount > 1 && (
        <Button
          type="button"
          variant="remove"
          onClick={onDelete}
        >{t("Удалить")}</Button>
      )}
    </Accordion>
  );
};
