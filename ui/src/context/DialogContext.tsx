
import { createContext, useContext } from "react";

import { DialogApi } from "../api/dialog-api";

export const DialogContext =
  createContext<DialogApi | null>(null);

export function useDialogApi() {
  const api = useContext(DialogContext);

  if (!api) {
    throw new Error(
      "DialogContext not initialized"
    );
  }

  return api;
}