import { useEffect, useState } from "react";
import { useDialogApi } from "../../context/DialogContext";
import { useApiFeedback } from "../../hooks/useApiFeedback";
import { useIsMobile } from "../../hooks/useIsMobile";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/ui/Modal/Modal";
import { Input } from "../../components/ui/Input/Input";
import { Textarea } from "../../components/ui/Textarea/Textarea";
import { Button } from "../../components/ui/Button/Button";
import { ApiError } from "../../components/ui/ApiError/ApiError";
import { Loader } from "../../components/ui/Loader";
import { Toast } from "../../components/ui/Toast/Toast";
import { t } from "../../i18n";
import styles from "../GlobalsPage.module.scss";
import editorStyles from "./NormalizationSettingsPage.module.scss";

type DictionaryValue = string | number | string[] | { [key: string]: DictionaryValue };
interface Settings { words: Record<string, DictionaryValue>; labels: Record<string, string>; }
const names: Record<string, string> = {
  units: "Числа от 0 до 9", teens: "Числа от 10 до 19", tens: "Десятки", hundreds: "Сотни",
  thousands: "Тысяча: варианты произношения", location_stop_words: "Служебные слова в названиях мест",
  months: "Месяцы", time_markers: "Время суток", time_prefixes: "Предлоги перед временем", time_units: "Единицы времени",
  date_keywords: "Относительные даты", genitive_day: "Произношение дат", special_characters: "Замена символов",
  morning: "Утро", evening: "Вечер", day: "День", night: "Ночь", genitive: "Родительный падеж", dative: "Дательный падеж", plain: "Без склонения",
  minutes: "Минуты", seconds: "Секунды", hours: "Часы", today: "Сегодня", tomorrow: "Завтра", day_after: "Послезавтра",
  units2: "Порядковые числа от 1 до 9", months_map: "Номера месяцев", month_markers: "Формы названий месяцев",
};
const isGroup = (value: DictionaryValue): value is Record<string, DictionaryValue> => typeof value === "object" && !Array.isArray(value);
const at = (words: Record<string, DictionaryValue>, path: string[]): DictionaryValue => path.reduce<DictionaryValue>((node, key) => (node as Record<string, DictionaryValue>)[key], words);

export function NormalizationSettingsPage() {
  const api = useDialogApi();
  const feedback = useApiFeedback();
  const mobile = useIsMobile();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [draft, setDraft] = useState<Settings | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const [textDrafts, setTextDrafts] = useState<Record<string,string>>({});
  const [saved, setSaved] = useState(false);
  useEffect(() => { void feedback.run(async () => setSettings(await api.getData<Settings>("get_normalization_words")), {retryable: true}); }, [api, feedback.run]);
  const title = (keys: string[], source = draft ?? settings) => source?.labels[JSON.stringify(keys)] || t(names[keys.at(-1)!] ?? keys.at(-1)!);
  const close = () => { if (!feedback.busy) {setPath([]); setDraft(null); feedback.clearError();} };
  const open = (key: string) => { setDraft(structuredClone(settings)); setTextDrafts({}); setPath([key]); setSaved(false); };
  const update = (keys: string[], value: DictionaryValue) => setDraft(current => {
    if (!current) return current;
    const copy = structuredClone(current);
    const parent = at(copy.words, keys.slice(0, -1)) as Record<string, DictionaryValue>;
    parent[keys.at(-1)!] = value;
    return copy;
  });
  const save = () => feedback.run(async () => {
    const response = await api.saveData({path, value: at(draft!.words, path), title: title(path)}, "save_normalization_words") as Settings;
    setSettings(response); setDraft(null); setPath([]); setSaved(true);
  }, {exclusive: true});
  const field = (keys: string[], value: DictionaryValue) => Array.isArray(value)
    ? <Textarea key={JSON.stringify(keys)} label={title(keys)} rows={3} disabled={feedback.busy}
        hint={t("Укажите варианты через ;. Например: ноль; ноля; нолю. Пустые элементы не сохраняются.")}
        value={textDrafts[JSON.stringify(keys)] ?? value.join("; ")} onChange={event=>{setTextDrafts(current=>({...current,[JSON.stringify(keys)]:event.target.value}));update(keys, event.target.value.split(";").map(word=>word.trim()).filter(Boolean));}} />
    : <Input key={JSON.stringify(keys)} label={title(keys)} disabled={feedback.busy} type={typeof value === "number" ? "number" : "text"}
        min={typeof value === "number" ? 1 : undefined} max={typeof value === "number" ? 12 : undefined}
        value={String(value)} onChange={event=>update(keys, typeof value === "number" ? Number(event.target.value) : event.target.value)} />;
  const selected = draft && path.length ? at(draft.words, path) : null;
  return <>
    <MobileHeader title="Настройки распознавания" />
    <div className={styles.page}>
      {!mobile && <NavigationTabs />}
      <div className={`${styles.header} ${styles.collectionHeader}`}><div className={styles.headerTop}><div className={styles.heading}>
        {!mobile && <h1 className={styles.title}>{t("Настройки распознавания")}</h1>}
      </div></div></div>
      {!path.length && <ApiError {...feedback} />}
      {!settings && !feedback.error && <Loader />}
      <div className={styles.list}>{settings && Object.keys(settings.words).map(key=><Card key={key} title={title([key], settings)} subTitle={key} onClick={()=>open(key)} />)}</div>
      {saved && <Toast message={t("Словарь сохранён и применяется без перезапуска.")} onClose={()=>setSaved(false)} />}
    </div>
    <Modal dialogLabel={path.length ? title(path) : t("Настройки распознавания")} open={Boolean(path.length && draft)} title={path.length ? title(path) : ""} subtitle={path.join(" / ")} onClose={close}
      onBack={path.length > 1 ? ()=>setPath(current=>current.slice(0,-1)) : undefined} feedback={feedback}
      footer={<Button disabled={feedback.busy} onClick={()=>void save()}>{t("Сохранить")}</Button>}>
      {draft && selected !== null && <div className={editorStyles.fields}>
        <Input label={t("Название раздела")} hint={t("Это название отображается в редакторе. Технический ключ словаря не меняется.")} disabled={feedback.busy}
          value={draft.labels[JSON.stringify(path)] ?? title(path)} onChange={event=>setDraft(current=>current ? {...current, labels:{...current.labels,[JSON.stringify(path)]:event.target.value}} : current)} />
        {isGroup(selected) ? Object.entries(selected).map(([key, value]) => isGroup(value)
          ? <Card key={key} title={title([...path,key])} subTitle={key} onClick={()=>setPath(current=>[...current,key])} />
          : field([...path,key], value)) : field(path, selected)}
      </div>}
    </Modal>
  </>;
}
