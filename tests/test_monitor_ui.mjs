import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { chromium } from "playwright";
const bundle = await readFile(
  new URL(
    "../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js",
    import.meta.url,
  ),
  "utf8",
);
const server = createServer((req, res) => {
  res.setHeader(
    "Content-Type",
    req.url === "/panel.js" ? "text/javascript" : "text/html",
  );
  res.end(
    req.url === "/panel.js"
      ? bundle
      : '<!doctype html><html><body style="margin:0"><script type="module" src="/panel.js"></script></body></html>',
  );
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
});
try {
  for (const width of [1200, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    page.setDefaultTimeout(7000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.addInitScript(() => {
      window.monitorCalls = [];
      window.monitorWatchers = {};
      window.owned = {};
      window.monitorState = {
        available: true,
        devices: [
          {
            id: "source",
            node_id: "voice",
            name: "Детская",
            source: true,
            listener: true,
            online: true,
            transmitting: false,
          },
          {
            id: "listener",
            node_id: "receiver",
            name: "Спальня",
            source: false,
            listener: true,
            online: true,
            transmitting: false,
          },
        ],
        sessions: [],
      };
      window.publishMonitor = () => {
        for (const [id, cb] of Object.entries(window.monitorWatchers))
          cb({
            ...window.monitorState,
            owned_source_id: window.owned[id] ?? null,
          });
      };
      window.AudioContext = class {
        currentTime = 0;
        destination = {};
        async resume() {}
        async close() {}
        createBuffer() {
          return {
            getChannelData: () => new Float32Array(640),
            duration: 0.04,
          };
        }
        createBufferSource() {
          return { connect() {}, start() {}, stop() {} };
        }
      };
      window.hass = {
        user: { is_admin: true },
        states: {
          "media_player.tv": {
            entity_id: "media_player.tv",
            state: "idle",
            attributes: { friendly_name: "Несовместимый телевизор" },
          },
        },
        connection: {
          async subscribeMessage(callback, message) {
            if (message.type === "ha_dialog_ui/monitor/watch") {
              window.monitorWatchers[message.view_id] = callback;
              window.publishMonitor();
              return () => {
                delete window.monitorWatchers[message.view_id];
                if (window.owned[message.view_id]) {
                  window.monitorCalls.push("tab-stop");
                  window.monitorState.devices[0].transmitting = false;
                  window.monitorState.sessions = [];
                  delete window.owned[message.view_id];
                }
              };
            }
            callback({ type: "status", connected: true });
            return () => window.monitorCalls.push("audio-unsubscribe");
          },
          async sendMessagePromise(message) {
            if (message.type === "ha_dialog_ui/monitor/start") {
              window.monitorCalls.push("start");
              window.owned[message.view_id] = message.source_device_id;
              window.monitorState.devices[0].transmitting = true;
              if (message.listener_device_id)
                window.monitorState.sessions = [
                  {
                    source_device_id: message.source_device_id,
                    listener_device_id: message.listener_device_id,
                  },
                ];
              window.publishMonitor();
              return { started: true };
            }
            if (message.type === "ha_dialog_ui/monitor/stop") {
              window.monitorCalls.push("stop");
              window.monitorState.devices[0].transmitting = false;
              window.monitorState.sessions = [];
              delete window.owned[message.view_id];
              window.publishMonitor();
              return { stopped: true };
            }
            if (message.type.endsWith("/get_settings"))
              return { theme: "dark", active_remout: false, timer_alarm: {} };
            if (message.type.endsWith("/get_timer_alarm_config"))
              return { devices: [], timer_default: {}, alarm_default: {} };
            return { data: [], page: 1, total_pages: 1 };
          },
        },
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/#/monitor`);
    await page.evaluate(async () => {
      await customElements.whenDefined("ha-dialog-ui-panel");
      const panel = document.createElement("ha-dialog-ui-panel");
      panel.hass = window.hass;
      document.body.appendChild(panel);
    });
    const panel = page.locator("ha-dialog-ui-panel");
    const source = panel.getByRole("button", { name: /Детская/ });
    await source.waitFor();
    assert.equal(await panel.getByText("Несовместимый телевизор").count(), 0);
    assert.equal(
      await panel.getByRole("button", { name: /Спальня/ }).count(),
      0,
    ); // Listener-only device is not a source card.
    await source.click();
    const dialog = panel.getByRole("dialog", { name: "Детская" });
    await dialog.waitFor();
    await dialog.getByRole("radio", { name: /Спальня/ }).check();
    await dialog.getByRole("button", { name: "Старт", exact: true }).click();
    await dialog.getByText("Прослушивание активно", { exact: true }).waitFor();
    const box = await dialog.boundingBox();
    if (width < 768) {
      assert.equal(Math.round(box.width), width);
      assert.equal(Math.round(box.x), 0);
      assert.equal(Math.round(box.height), 900);
    } else {
      assert.ok(box.width <= 760 && box.x > 0);
    }
    await page.screenshot({
      path: `/tmp/ha-dialog-monitor-${width}.png`,
      fullPage: true,
    });
    await dialog.getByRole("button", { name: "Закрыть", exact: true }).click();
    await dialog.waitFor({ state: "hidden" });
    assert.deepEqual(await page.evaluate(() => window.monitorCalls), ["start"]);
    await panel.getByText(/^Радионяня включена:/).waitFor();
    await source.click();
    await dialog.getByText("Прослушивание активно", { exact: true }).waitFor();
    await dialog
      .getByRole("button", { name: "Остановить", exact: true })
      .click();
    assert.ok(
      (await page.evaluate(() => window.monitorCalls)).includes("stop"),
    );
    await dialog.getByRole("button", { name: "Закрыть", exact: true }).click();
    await dialog.waitFor({ state: "hidden" });
    await source.click();
    await dialog.getByRole("radio", { name: /На этом устройстве/ }).check();
    await dialog.getByRole("button", { name: "Старт", exact: true }).click();
    await dialog.getByText("Прослушивание активно", { exact: true }).waitFor();
    await dialog.getByRole("button", { name: "Закрыть", exact: true }).click();
    await dialog.waitFor({ state: "hidden" });
    await page.waitForTimeout(60); // Allow mobile overlay history entry removal to settle.
    await page.evaluate(() => {
      location.hash = "/timer";
    });
    await page.waitForFunction(() => window.monitorCalls.includes("tab-stop"));
    // Merely viewing a script-started pair never acquires ownership or stops it on navigation.
    await page.evaluate(() => {
      window.monitorState.devices[0].transmitting = true;
      window.monitorState.sessions = [
        { source_device_id: "source", listener_device_id: "listener" },
      ];
      window.monitorCalls = [];
      location.hash = "/monitor";
    });
    await source.waitFor();
    await source.click();
    await dialog.getByText("Прослушивание активно", { exact: true }).waitFor();
    await dialog.getByRole("button", { name: "Закрыть", exact: true }).click();
    await dialog.waitFor({ state: "hidden" });
    await page.waitForTimeout(60);
    await page.evaluate(() => {
      location.hash = "/timer";
    });
    await page.waitForTimeout(100);
    assert.deepEqual(await page.evaluate(() => window.monitorCalls), []);
    assert.deepEqual(errors, []);
    await context.close();
    console.log(
      `Monitor UI ${width}px: active state, full-screen/modal, close persistence, tab cleanup, scripts preserved`,
    );
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
