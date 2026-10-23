import { createContext, useContext } from "react";
export const API_ENABLED_CHANGE_EVENT = "ha-dialog-ui-api-enabled-change";
export const ApiEnabledContext = createContext(false);
export const useApiEnabled = () => useContext(ApiEnabledContext);
