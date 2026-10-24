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
  for (const width of [1100, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    page.setDefaultTimeout(7000);
    await page.addInitScript(() => {
      const originalGet = Storage.prototype.getItem;
      Storage.prototype.getItem = function (key) {
        if (window.failShell && key === "ha-dialog-ui-theme")
          throw new Error("Simulated shell failure");
        return originalGet.call(this, key);
      };
      window.haMenuEvents = 0;
      document.addEventListener(
        "hass-toggle-menu",
        () => window.haMenuEvents++,
      );
      window.hass = {
        user: { is_admin: true },
        states: {},
        connection: {
          async sendMessagePromise(message) {
            if (message.type.endsWith("/get_settings"))
              return { theme: "dark", active_remout: false, timer_alarm: {} };
            if (message.type.endsWith("/get_script_actions_short"))
              return {
                script_actions: window.failRoute ? [null] : [],
                page: 1,
                total_pages: 1,
              };
            if (message.type.endsWith("/get_timer_alarm_config"))
              return { devices: [], timer_default: {}, alarm_default: {} };
            return { data: [], page: 1, total_pages: 1 };
          },
        },
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/#/scripts`);
    await page.evaluate(async () => {
      await customElements.whenDefined("ha-dialog-ui-panel");
      window.failRoute = true;
      const panel = document.createElement("ha-dialog-ui-panel");
      panel.hass = window.hass;
      document.body.appendChild(panel);
    });
    const panel = page.locator("ha-dialog-ui-panel");
    const message = panel
      .getByRole("alert")
      .filter({ hasText: "Не удалось открыть панель." });
    await message.waitFor();
    const checkCentered = async () => {
      const b = await message.boundingBox(),
        button = await message
          .getByRole("button", { name: "Открыть повторно", exact: true })
          .boundingBox();
      assert.ok(
        Math.abs(b.x + b.width / 2 - width / 2) < 2,
        "Message is horizontally centered",
      );
      assert.ok(
        Math.abs(button.x + button.width / 2 - width / 2) < 2,
        "Retry button is horizontally centered",
      );
      assert.ok(
        b.y + b.height / 2 > 900 * 0.3 && b.y + b.height / 2 < 900 * 0.75,
        "Message is in the middle of the visible panel",
      );
      assert.ok(
        button.x >= 0 && button.x + button.width <= width,
        "Retry button fits",
      );
    };
    await checkCentered();
    await page.screenshot({
      path: `/tmp/ha-dialog-recovery-${width}.png`,
      fullPage: true,
    });
    if (width < 768) {
      await panel
        .getByRole("button", { name: "Открыть меню разделов", exact: true })
        .click();
    }
    await panel.getByRole("link", { name: "Таймеры", exact: true }).click();
    await message.waitFor({ state: "hidden" });
    assert.equal(await page.evaluate(() => location.hash), "#/timer");
    // Fail the shell outside the router. Independent links and the HA menu still work.
    await page.evaluate(() => {
      document.querySelector("ha-dialog-ui-panel").remove();
      window.failShell = true;
      window.failRoute = false;
      const panel = document.createElement("ha-dialog-ui-panel");
      panel.hass = window.hass;
      document.body.appendChild(panel);
    });
    await message.waitFor();
    await checkCentered();
    await panel
      .getByRole("button", { name: "Открыть меню Home Assistant", exact: true })
      .click();
    assert.equal(await page.evaluate(() => window.haMenuEvents), 1);
    await page.evaluate(() => {
      window.failShell = false;
    });
    await panel.getByRole("link", { name: "Будильники", exact: true }).click();
    await message.waitFor({ state: "hidden" });
    assert.equal(await page.evaluate(() => location.hash), "#/alarm");
    await context.close();
    console.log(
      `Recovery ${width}px: centered alert/button, page and shell navigation preserved`,
    );
  }
} finally {
  await browser.close();
  server.closeAllConnections();
  await new Promise((resolve) => server.close(resolve));
}
