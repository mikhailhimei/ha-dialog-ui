import { t } from "../i18n";

const labels: Record<string, string> = {
  stop: "Стоп",
  default_main: "Если ничего не нашёл",
  not_understand: "Если не распознано продолжение",
  finish_miss: "Если продолжение не распознано несколько раз",
};

export function assistantSettingTitle(setting: { actionType?: string; title: string }): string {
  return setting.actionType && labels[setting.actionType] ? t(labels[setting.actionType]) : setting.title;
}
