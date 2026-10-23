import { createContext, useContext } from "react";

export const REMOTE_SERVER_CHANGE_EVENT = "ha-dialog-ui-remote-server-change";

// null means the persisted settings have not loaded yet.
export const RemoteServerContext = createContext<boolean | null>(null);

export const useRemoteServerEnabled = () => useContext(RemoteServerContext);
