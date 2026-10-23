import { ApiError } from "../components/ui/ApiError/ApiError";
import { formatApiError } from "../utils/apiErrors";
import { t } from "../i18n";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { AdminContext } from "./AdminContext";
import { DialogContext } from "./DialogContext";
import { DialogApi, type HassLike } from "../api/dialog-api";
import { createHass, normalizeHass } from "../hooks/hass";
import { Loader } from "../components/ui/Loader";

interface Props {
  children: React.ReactNode;
  hass?: HassLike | null;
}

export function DialogProvider({
  children,
  hass,
}: Props) {
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const apiRef = useRef<DialogApi | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    setConnectionError(null);
    async function init() {
      const resolvedHass = hass
        ? normalizeHass(hass)
        : await createHass();

      if (!active) return;
      if (!apiRef.current) {
        apiRef.current = new DialogApi(resolvedHass);
      } else {
        apiRef.current.setHass(resolvedHass);
      }

      const user = resolvedHass.user ?? await resolvedHass.connection.sendMessagePromise<{ is_admin: boolean }>({ type: "auth/current_user" });
      if (!active) return;
      setIsAdmin(user?.is_admin === true);
      setReady(true);
    }

    init().catch(reason => { if (active) setConnectionError(formatApiError(reason)); });
    return () => { active = false; };
  }, [hass, attempt]);

  if (connectionError) return <div className="appShell panelRecovery" data-theme={localStorage.getItem("ha-dialog-ui-theme") || "dark"}><ApiError error={connectionError} retry={() => setAttempt(value => value + 1)} /></div>;

  if (!ready || !apiRef.current) {
    return <Loader label={t("Подключение к Home Assistant...")} fullscreen />;
  }

  return (
    <DialogContext.Provider value={apiRef.current}>
      <AdminContext.Provider value={isAdmin}>{children}</AdminContext.Provider>
    </DialogContext.Provider>
  );
}
