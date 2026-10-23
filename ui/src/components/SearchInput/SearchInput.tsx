import { ApiError } from "../ui/ApiError/ApiError";
import { formatApiError } from "../../utils/apiErrors";
import { t } from "../../i18n";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { createPortal } from "react-dom";

import { useDialogApi } from "../../context/DialogContext";
import { Input } from "../ui/Input/Input";

import styles from "./SearchInput.module.scss";

export type CommandSearchOption = {
  title: string;
  uuid: string;
  actionType?: string;
  mappingType?: string;
};

type SearchSource =
  | "search_assistant_commands"
  | "search_assistant_sub_commands"
  | "search_assistant_sub_direct_controls"
  | "search_assistant_sub_direct_control_samples";

type Props = {
  label?: string;
  value: string;
  selectedTitle?: string;
  searchSource?: SearchSource[];
  minQueryLength?: number;
  onChange: (value: string) => void;
  onSelect?: (option: CommandSearchOption) => void;
  getSelectedValue?: (option: CommandSearchOption) => string;
  error?: string;
};

export const SearchInput = ({
  label = "uuid",
  value,
  selectedTitle,
  searchSource = ["search_assistant_commands"],
  minQueryLength = 2,
  onChange,
  onSelect,
  getSelectedValue,
  error,
}: Props) => {
  const api = useDialogApi();
  const sourceKey = JSON.stringify(searchSource);
  const sources = useMemo(() => JSON.parse(sourceKey) as SearchSource[], [sourceKey]);
  const [resolvedSelection, setResolvedSelection] = useState<CommandSearchOption | null>(null);
  const displayTitle = !getSelectedValue
    ? selectedTitle || (resolvedSelection?.uuid === value ? resolvedSelection.title : "")
    : "";

  // Stored links can contain only UUID: resolve their visible name without changing the link.
  useEffect(() => {
    if (!value || selectedTitle || getSelectedValue || wrapperRef.current?.contains(document.activeElement)) return;
    let cancelled = false;
    void (async () => {
      try {
        for (const source of sources) {
          const response = await api.searchAssistantCommands<CommandSearchOption>(value, source);
          const option = response.data?.find(item => item.uuid === value);
          if (option) {
            if (!cancelled) setResolvedSelection(option);
            return;
          }
        }
      } catch {
        // Keep the UUID visible when the referenced command cannot be loaded.
      }
    })();
    return () => { cancelled = true; };
  }, [api, value, selectedTitle, getSelectedValue, sources]);

  const [searchError, setSearchError] = useState<string | null>(null);
  const [retryAttempt, setRetryAttempt] = useState(0);
  const [options, setOptions] = useState<CommandSearchOption[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [placement, setPlacement] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!open) return;
    const update = () => {
      const rect = wrapperRef.current?.querySelector("input")?.getBoundingClientRect();
      if (!rect) return;
      const viewport = window.visualViewport;
      const top = (viewport?.offsetTop ?? 0) + 8;
      const bottom = (viewport?.offsetTop ?? 0) + (viewport?.height ?? window.innerHeight) - 8;
      const lowerAnchor = Math.min(bottom, Math.max(top, rect.bottom + 6));
      const upperAnchor = Math.min(bottom, Math.max(top, rect.top - 6));
      const below = bottom - lowerAnchor;
      const above = upperAnchor - top;
      const upwards = below < 180 && above > below;
      const height = Math.min(260, upwards ? above : below);
      const left = Math.max(8, rect.left);
      setPlacement({ left, width: Math.max(0, Math.min(rect.width, window.innerWidth - left - 8)),
        top: upwards ? upperAnchor : lowerAnchor,
        transform: upwards ? "translateY(-100%)" : undefined, maxHeight: height });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, [open]);

  const requestIdRef = useRef(0);
  const lastSearchedQueryRef = useRef("");

  const query = useMemo(() => value.trim(), [value]);

  useEffect(() => {
    // Если поле очищено (pivot снят)
    // ничего не отправляем и разрешаем повторный поиск
    if (!query) {
      requestIdRef.current += 1;
      setSearchError(null);
      lastSearchedQueryRef.current = "";
      setOptions([]);
      setOpen(false);
      return;
    }

    if (query.length < minQueryLength) {
      requestIdRef.current += 1;
      setSearchError(null);
      setOptions([]);
      setOpen(false);
      return;
    }

    if (!isFocused || displayTitle) {
      requestIdRef.current += 1;
      setOpen(false);
      setLoading(false);
      return;
    }

    // Уже отправляли этот запрос
    if (lastSearchedQueryRef.current === query) {
      return;
    }

    lastSearchedQueryRef.current = query;

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    const timeoutId = window.setTimeout(async () => {
      setLoading(true);
      setSearchError(null);

      try {
        let data: CommandSearchOption[] = [];

        for (const source of sources) {
          const response = await api.searchAssistantCommands<CommandSearchOption>(query, source);

          const dataResult = Array.isArray(response?.data)
            ? response.data
            : [];

          data.push(...dataResult);
        }

        if (requestIdRef.current !== requestId) {
          return;
        }

        setOptions(data);
        setOpen(data.length > 0);
      } catch (reason) {
        if (requestIdRef.current === requestId) {
          setSearchError(formatApiError(reason));
          setOptions([]); setOpen(false);
        }
      } finally {
        if (requestIdRef.current === requestId) {
          setLoading(false);
        }
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [api, query, sources, minQueryLength, isFocused, retryAttempt, displayTitle]);

  const handleSelect = (option: CommandSearchOption) => {
    const selectedValue = getSelectedValue
      ? getSelectedValue(option)
      : option.uuid;

    requestIdRef.current += 1;
    setResolvedSelection(option);
    lastSearchedQueryRef.current = "";
    setLoading(false);
    setOptions([]);
    onChange(selectedValue);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <Input
        label={label}
        value={displayTitle || value}
        autoComplete="off"
        placeholder={t("Начните вводить title или uuid")}
        error={error}
        onBlur={() => {
          setIsFocused(false);
          window.setTimeout(() => setOpen(false), 150);
        }}
        onFocus={() => {
          setIsFocused(true);
          setOpen(!displayTitle && options.length > 0);
        }}
        onChange={(event) => {
          setResolvedSelection(null);
          onChange(event.target.value);
        }}
      />

      {open && wrapperRef.current && createPortal(
        <div role="listbox" className={styles.dropdown} style={placement}>
          {options.map((option) => (
            <button
              role="option"
              key={option.uuid}
              type="button"
              className={styles.option}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleSelect(option)}
            >
              <span className={styles.title}>
                {option.title || "Без названия"}
              </span>

              <span className={styles.uuid}>{option.uuid}</span>

              {option.mappingType && (
                <span className={styles.uuid}>{t("mappingType:")}{option.mappingType}
                </span>
              )}
            </button>
          ))}
        </div>,
        wrapperRef.current.closest("[data-theme]") ?? wrapperRef.current
      )}

      <ApiError error={searchError} busy={loading} retry={() => {
        lastSearchedQueryRef.current = "";
        wrapperRef.current?.querySelector("input")?.focus();
        setRetryAttempt(value => value + 1);
      }} />
      {loading && <span className={styles.hint}>{t("Поиск...")}</span>}
    </div>
  );
};
