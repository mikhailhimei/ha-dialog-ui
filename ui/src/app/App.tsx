import { ApiEnabledContext, API_ENABLED_CHANGE_EVENT } from "../context/ApiEnabledContext";
import { Loader } from "../components/ui/Loader";
import { ApiError } from "../components/ui/ApiError/ApiError";
import { useApiFeedback } from "../hooks/useApiFeedback";
import { useLanguage } from "../i18n";
import { useEffect, useState } from "react";

import { useDialogApi } from "../context/DialogContext";
import { AppRoutes } from "./routes";
import { RemoteServerContext, REMOTE_SERVER_CHANGE_EVENT } from "../context/RemoteServerContext";

type AppTheme = "dark" | "light";

const THEME_STORAGE_KEY = "ha-dialog-ui-theme";

const normalizeTheme = (theme?: string | null): AppTheme => (theme === "light" ? "light" : "dark");

const applyTheme = (theme: AppTheme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const App = () => {
  const feedback = useApiFeedback();
  const language = useLanguage();
  const api = useDialogApi();
  const [apiEnabled, setApiEnabled] = useState(false);
  const [remoteEnabled, setRemoteEnabled] = useState<boolean | null>(null);
  const [theme, setTheme] = useState<AppTheme>(() => normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY)));

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    let mounted = true;
    let themeChanged = false;
    let remoteChanged = false;
    let apiChanged = false;

    void feedback.run(async () => {
      const settings = await api.getSettings();
      if (!mounted) return;
      if (!themeChanged) setTheme(normalizeTheme(settings.theme));
      if (!apiChanged) setApiEnabled(Boolean(settings.api_commands_enabled));
      if (!remoteChanged) setRemoteEnabled(Boolean(settings.active_remout));
    }, { retryable: true });

    const handleThemeChange = (event: Event) => {
      themeChanged = true;
      setTheme(normalizeTheme((event as CustomEvent<string>).detail));
    };

    const handleRemoteChange = (event: Event) => {
      remoteChanged = true;
      setRemoteEnabled((event as CustomEvent<boolean>).detail);
    };
    const handleApiChange = (event: Event) => { apiChanged = true; setApiEnabled(Boolean((event as CustomEvent<boolean>).detail)); };
    window.addEventListener(API_ENABLED_CHANGE_EVENT, handleApiChange);
    window.addEventListener(REMOTE_SERVER_CHANGE_EVENT, handleRemoteChange);
    window.addEventListener("ha-dialog-ui-theme-change", handleThemeChange);

    return () => {
      mounted = false;
      window.removeEventListener(API_ENABLED_CHANGE_EVENT, handleApiChange);
      window.removeEventListener(REMOTE_SERVER_CHANGE_EVENT, handleRemoteChange);
      window.removeEventListener("ha-dialog-ui-theme-change", handleThemeChange);
    };
  }, [api, feedback.run]);

  return (
    <ApiEnabledContext.Provider value={apiEnabled}>
    <RemoteServerContext.Provider value={remoteEnabled}>
      <div className="appShell" data-theme={theme} lang={language}>
        <ApiError {...feedback} />
        {remoteEnabled === null ? !feedback.error && <Loader /> : <AppRoutes />}
      </div>
    </RemoteServerContext.Provider>
    </ApiEnabledContext.Provider>
  );
};
