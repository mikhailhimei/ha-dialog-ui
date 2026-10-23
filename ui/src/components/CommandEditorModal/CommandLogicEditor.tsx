import type { LinkedCommand } from "./LinkedCommandEditor";
import { useId, useState } from "react";
import { t } from "../../i18n";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/Select/SelectInput";
import { CommandSelect } from "./CommandSelect";
import { Button } from "../ui/Button/Button";
import type { ComponentDialog, DialogArrayKey } from "../../types/commandTypes";
import { ACTION_TYPE_COMPONENT_OPTIONS } from "../../constants/commandSelectOptions";
import styles from "./CommandEditorModal.module.scss";

interface Props {
  component: ComponentDialog;
  onOpenCommand: (target: LinkedCommand, index: number) => void;
  updateComponentArray: <K extends DialogArrayKey>(field: K, index: number, patch: Partial<ComponentDialog[K][number]>) => void;
  addComponentArrayItem: <K extends DialogArrayKey>(field: K, item: ComponentDialog[K][number]) => void;
  removeComponentArrayItem: (field: DialogArrayKey, index: number) => void;
}

const tabs = [
  { key: "direct", label: "Прямые команды" },
  { key: "continuations", label: "Продолжения" },
] as const;

export function CommandLogicEditor({ component, onOpenCommand, updateComponentArray, addComponentArrayItem, removeComponentArrayItem }: Props) {
  const id = useId();
  const [selectedTab, setActiveTab] = useState<typeof tabs[number]["key"]>("direct");
  const visibleTabs = tabs.filter(tab => tab.key !== "direct" || !component.forwardText);
  const activeTab = component.forwardText && selectedTab === "direct" ? "continuations" : selectedTab;
  return <div className={styles.form}>
    <div className={styles.logicTabs} role="tablist" aria-label={t("Настройки логики")}>
      {visibleTabs.map(tab => <button key={tab.key} type="button" role="tab"
        tabIndex={activeTab === tab.key ? 0 : -1}
        onKeyDown={event => {
          const index = visibleTabs.findIndex(item => item.key === tab.key);
          const next = event.key === "ArrowRight" ? (index + 1) % visibleTabs.length
            : event.key === "ArrowLeft" ? (index + visibleTabs.length - 1) % visibleTabs.length
            : event.key === "Home" ? 0 : event.key === "End" ? visibleTabs.length - 1 : -1;
          if (next < 0) return;
          event.preventDefault();
          setActiveTab(visibleTabs[next].key);
          event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
        }}
        id={`${id}-command-logic-tab-${tab.key}`} aria-selected={activeTab === tab.key}
        aria-controls={`${id}-command-logic-panel-${tab.key}`}
        onClick={() => setActiveTab(tab.key)}>{tab.key === "direct"
          ? <span className={styles.directTabLabel}>{t(tab.label).replace(" ", "\n")}</span>
          : t(tab.label)}</button>)}
    </div>
    {activeTab === "continuations" && <div role="tabpanel" id={`${id}-command-logic-panel-continuations`} aria-labelledby={`${id}-command-logic-tab-continuations`}>
          {(component.nextAction ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <SelectInput
                label={t("Вид продолжения")}
                value={item.actionTypeComponent || "children"}
                options={ACTION_TYPE_COMPONENT_OPTIONS}
                onChange={(event) =>
                  updateComponentArray("nextAction", index, {
                    actionTypeComponent: event.target.value,
                  })
                }
              />
            {item.actionTypeComponent == 'custom' ?
              <Input
                label={t("Тип результата скрипта")}
                placeholder={t("Например, room_required")}
                value={item.actionType ?? ""}
                onChange={(event) =>
                  updateComponentArray("nextAction", index, {
                    actionType: event.target.value,
                  })
                }
              /> : <></>}

              <CommandSelect
                kind="continuation"
                value={item.uuid}
                title={item.title}
                onSelect={(option) =>
                  updateComponentArray("nextAction", index, {
                    uuid: option.uuid,
                    title: option.title ?? "",
                    actionTypeComponent: item.actionTypeComponent || "children",
                  })
                }
              />

              <div className={styles.linkActions}>
                {item.uuid && <Button variant="secondary" onClick={() => onOpenCommand({ uuid: item.uuid, kind: "continuation" }, index)}>{t("Перейти к команде")}</Button>}
              <Button
                type="button"
                variant="remove"
                onClick={() =>
                  removeComponentArrayItem("nextAction", index)
                }
              >{t("Удалить")}</Button>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            fullWidth
            leftIcon={<span aria-hidden="true">+</span>}
            onClick={() =>
              addComponentArrayItem("nextAction", {
                actionTypeComponent: "children",
                actionType: "",
                uuid: "",
                title: "",
              })
            }
          >{t("Добавить ещё")}</Button>

    </div>}
    {activeTab === "direct" && <div role="tabpanel" id={`${id}-command-logic-panel-direct`} aria-labelledby={`${id}-command-logic-tab-direct`}>
          {(component.nextDirectControl ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <CommandSelect
                kind="direct"
                value={item.uuid}
                title={item.title}
                onSelect={(option) =>
                  updateComponentArray("nextDirectControl", index, {
                    uuid: option.uuid,
                    mappingType: option.mappingType ?? "",
                    title: option.title ?? "",
                  })
                }
              />

              {item.uuid && <Input
                label={t("mappingType")}
                hint={t("Переменная для фраз запуска. Например, используйте ${room} во фразе, если здесь указано room.")}
                readOnly
                value={item.mappingType ?? ""}
              />}

              <div className={styles.linkActions}>
                {item.uuid && <Button variant="secondary" onClick={() => onOpenCommand({ uuid: item.uuid, kind: "direct" }, index)}>{t("Перейти к команде")}</Button>}
              <Button
                type="button"
                variant="remove"
                onClick={() =>
                  removeComponentArrayItem("nextDirectControl", index)
                }
              >{t("Удалить")}</Button>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            fullWidth
            leftIcon={<span aria-hidden="true">+</span>}
            onClick={() =>
              addComponentArrayItem("nextDirectControl", {
                uuid: "",
                actionType: "",
                title: "",
              })
            }
          >{t("Добавить ещё")}</Button>

    </div>}
  </div>;
}
