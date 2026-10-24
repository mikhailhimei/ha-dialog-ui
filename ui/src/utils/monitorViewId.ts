// A view ID correlates subscriptions on one authenticated HA connection.
// It is not an audio token. getRandomValues is available on ordinary HTTP too.
let sequence = 0;
export function createMonitorViewId(): string {
  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    return `monitor-${Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
  }
  // Older WebViews may omit Web Crypto. Uniqueness only needs to hold per connection.
  return `monitor-${Date.now().toString(36)}-${(++sequence).toString(36)}`;
}
