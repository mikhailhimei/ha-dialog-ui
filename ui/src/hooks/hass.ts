import { createConnection, createLongLivedTokenAuth } from "home-assistant-js-websocket";
import type { HassEntity, HassLike, HassUser, WebSocketMessage } from "../types/api";

interface HomeAssistantInput {
  user?: HassUser;
  states?: Record<string, HassEntity>;
  connection?: HassLike["connection"];
  callWS?: <T>(message: WebSocketMessage) => Promise<T>;
}

declare global { interface Window { hass?: HomeAssistantInput; } }

export function normalizeHass(hass?: HomeAssistantInput | null): HassLike {
  if (hass?.connection?.sendMessagePromise) {
    return { connection: hass.connection, user: hass.user, states: hass.states ?? {} };
  }
  if (hass?.callWS) {
    const callWS = hass.callWS.bind(hass);
    return { connection: { sendMessagePromise: callWS }, user: hass.user, states: hass.states ?? {} };
  }
  return {
    connection: { sendMessagePromise: async () => { throw new Error("Home Assistant websocket API is not available"); } },
    states: {},
  };
}

export async function createHass(): Promise<HassLike> {
  const url = import.meta.env.VITE_HA_URL;
  const token = import.meta.env.VITE_HA_TOKEN;
  if (!url) return normalizeHass(window.hass);
  const auth = createLongLivedTokenAuth(url, token);
  const connection = await createConnection({ auth });
  const states = await connection.sendMessagePromise<HassEntity[]>({ type: "get_states" });
  return { connection, states: Object.fromEntries(states.map(entity => [entity.entity_id, entity])) };
}
