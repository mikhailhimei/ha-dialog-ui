import { useSyncExternalStore } from 'react';
import translations from './translations.json';

export type Language = 'ru' | 'en';
const STORAGE_KEY = 'ha-dialog-ui-language';
let language: Language = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ru';
const listeners = new Set<() => void>();

export function setLanguage(value: Language) {
  language = value;
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach(listener => listener());
}

export function useLanguage() {
  return useSyncExternalStore(listener => {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, () => language);
}

export function t<T>(value: T): T {
  if (typeof value !== 'string') return value;
  const entry = (translations as Record<string, { ru: string; en: string }>)[value];
  return (entry?.[language] ?? value) as T;
}
