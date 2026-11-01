import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { chromium } from 'playwright';

const bundle = await readFile(new URL('../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js', import.meta.url), 'utf8');
const server = createServer((req, res) => {
  res.setHeader('Content-Type', req.url === '/panel.js' ? 'text/javascript' : 'text/html');
  res.end(req.url === '/panel.js' ? bundle : '<!doctype html><html><body style="margin:0"><script type="module" src="/panel.js"></script></body></html>');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({headless: true, executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium'});
try {
  for (const width of [1200, 390]) {
    const context = await browser.newContext({viewport: {width, height: 900}, timezoneId: 'Asia/Yekaterinburg'});
    const page = await context.newPage();
    page.setDefaultTimeout(7000);
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.addInitScript(() => {
      window.reminders = [];
      window.requests = [];
      window.hass = {user: {is_admin: true}, states: {}, connection: {async sendMessagePromise(msg) {
        window.requests.push(msg);
        if (msg.type.endsWith('/get_settings')) return {theme: 'dark', active_remout: false, timer_alarm: {}};
        if (msg.type === 'ha_dialog_ui/reminders/get') return {reminders: window.reminders, devices: [{id: 'assist_satellite.kitchen', name: 'Кухня'}]};
        if (msg.type === 'ha_dialog_ui/reminders/create') {
          if (window.failCreate) throw {code: 'reminder_error', message: 'Колонка недоступна'};
          const reminder = {id: crypto.randomUUID(), text: msg.text, device_id: msg.device_id, at: msg.at || new Date(Date.now() + msg.delay_seconds * 1000).toISOString(), status: 'pending'};
          window.reminders.push(reminder);
          return {reminder};
        }
        if (msg.type === 'ha_dialog_ui/reminders/delete') {window.reminders = window.reminders.filter(i => i.id !== msg.reminder_id); return {deleted: msg.reminder_id};}
        return {data: [], page: 1, total_pages: 1};
      }}};
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/#/reminders`);
    await page.evaluate(async () => {
      await customElements.whenDefined('ha-dialog-ui-panel');
      const element = document.createElement('ha-dialog-ui-panel');
      element.hass = window.hass;
      document.body.append(element);
    });
    const panel = page.locator('ha-dialog-ui-panel');
    await panel.getByText('Нет напоминаний.', {exact: true}).waitFor();
    assert.equal(await panel.getByText('В выбранное время колонка озвучит текст напоминания целиком.', {exact: true}).count(), 0);
    if (width < 768) {
      await panel.getByRole('button', {name: 'Открыть меню разделов', exact: true}).click();
      await panel.getByRole('link', {name: 'Напоминания', exact: true}).click();
    } else await panel.getByRole('link', {name: 'Напоминания', exact: true}).waitFor();
    await panel.getByRole('button', {name: 'Добавить напоминание', exact: true}).click();
    const create = panel.getByRole('button', {name: 'Создать', exact: true});
    assert.equal(await create.isDisabled(), true);
    const text = 'Напомнить насыпать еды через 30 минут';
    await panel.getByLabel('Что напомнить', {exact: true}).fill(text);
    await panel.getByLabel('Где напомнить', {exact: true}).selectOption('assist_satellite.kitchen');
    await panel.getByLabel('Через сколько минут', {exact: true}).fill('0');
    assert.equal(await create.isDisabled(), true);
    await panel.getByLabel('Через сколько минут', {exact: true}).fill('30');
    await page.evaluate(() => {window.failCreate = true;});
    await create.click();
    await panel.getByRole('alert').filter({hasText: 'Колонка недоступна'}).waitFor();
    assert.equal(await panel.getByLabel('Что напомнить', {exact: true}).inputValue(), text);
    await page.evaluate(() => {window.failCreate = false;});
    await create.click();
    await panel.getByRole('heading', {name: text, exact: true}).waitFor();
    assert.deepEqual(await page.evaluate(() => {
      const msg = window.requests.findLast(r => r.type === 'ha_dialog_ui/reminders/create');
      return [msg.text, msg.device_id, msg.delay_seconds];
    }), [text, 'assist_satellite.kitchen', 1800]);
    await panel.getByRole('button', {name: 'Добавить напоминание', exact: true}).click();
    await panel.getByLabel('Что напомнить', {exact: true}).fill('Выпить воды');
    await panel.getByLabel('Когда напомнить', {exact: true}).selectOption('at');
    await panel.getByLabel('Дата и время', {exact: true}).fill('2099-11-02T18:30');
    await create.click();
    await panel.getByRole('heading', {name: 'Выпить воды', exact: true}).waitFor();
    const card = panel.getByRole('article').filter({hasText: 'Выпить воды'});
    const bounds = await card.boundingBox();
    assert(bounds.width <= 421, 'Reminder card stays compact on desktop');
    assert(bounds.height < 180, 'Reminder card has compact spacing');
    assert.equal(await card.locator('svg.lucide-sticky-note').count(), 1);
    assert.equal(await page.evaluate(() => window.requests.findLast(r => r.type === 'ha_dialog_ui/reminders/create').at), '2099-11-02T13:30:00.000Z');
    await panel.getByRole('button', {name: `Удалить напоминание: ${text}`, exact: true}).click();
    await panel.getByRole('heading', {name: text, exact: true}).waitFor({state: 'detached'});
    await page.screenshot({path: `/tmp/ha-reminders-${width}.png`, fullPage: true});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.deepEqual(errors, []);
    console.log(`Reminders ${width}px: navigation, validation, literal text, create failure/retry, delay, timezone date and delete passed`);
    await context.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
