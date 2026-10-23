
import { HashRouter } from "react-router-dom";

import { App } from "./App";
import { DialogProvider } from "../context/DialogProvider";
import type { HassLike } from "../api/dialog-api";

interface Props {
  hass?: HassLike | null;
}

export function AppRoot({ hass }: Props) {
  return (
    <HashRouter>
      <DialogProvider hass={hass}>
        <App />
      </DialogProvider>
    </HashRouter>
  );
}
