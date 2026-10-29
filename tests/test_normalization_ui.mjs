import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createServer} from 'node:http';
import {chromium} from 'playwright';
const bundle=await readFile(new URL('../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js',import.meta.url),'utf8');
const server=createServer((req,res)=>{res.setHeader('Content-Type',req.url==='/panel.js'?'text/javascript':'text/html');res.end(req.url==='/panel.js'?bundle:'<html><body><script type="module" src="/panel.js"></script></body></html>');});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium'});
try {
 for(const width of [1100,390]) {
  const context=await browser.newContext({viewport:{width,height:900}});
  const page=await context.newPage();
  page.setDefaultTimeout(7000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.hass={user:{is_admin:true},states:{},connection:{sendMessagePromise:async message=>{
    const key=message.type.split('/').pop();
    if(key==='get_settings')return {active_remout:false,theme:'dark'};
    if(key==='get_normalization_words')return JSON.parse(localStorage.getItem('words')||'{"words":{"units":{"0":["ноль","ноля"],"1":["один"]},"location_stop_words":["и","в"],"date_pronunciation":{"month_numbers_by_name":{"января":1},"month_name_forms":{"январь":"января"}}},"labels":{}}');
    if(key==='save_normalization_words'){
     if(window.failSave)throw {code:'storage_error',message:'failure'};
     window.lastSave=message.data;
     const settings=await window.hass.connection.sendMessagePromise({type:'get_normalization_words'});
     let parent=settings.words;for(const part of message.data.path.slice(0,-1))parent=parent[part];parent[message.data.path.at(-1)]=message.data.value;
     settings.labels[JSON.stringify(message.data.path)]=message.data.title;
     localStorage.setItem('words',JSON.stringify(settings));return settings;
    }
    return {data:[],page:1,total_pages:1};
   }}};
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/#/commands/normalization`);
  const mount=()=>page.evaluate(async()=>{await customElements.whenDefined('ha-dialog-ui-panel');const el=document.createElement('ha-dialog-ui-panel');el.hass=window.hass;document.body.appendChild(el);});
  await mount();const panel=page.locator('ha-dialog-ui-panel');
  await panel.getByRole('button',{name:/Числа от 0 до 9/}).click();
  const dialog=panel.getByRole('dialog');
  await dialog.getByLabel('0',{exact:true}).fill('ноль; ноля; нолю');
  await dialog.getByLabel('Название раздела',{exact:true}).fill('Мои единицы');
  await page.evaluate(()=>{window.failSave=true});
  await dialog.getByRole('button',{name:'Сохранить',exact:true}).click();
  await dialog.getByRole('alert').waitFor();
  assert.equal(await dialog.getByLabel('0',{exact:true}).inputValue(),'ноль; ноля; нолю');
  await page.evaluate(()=>{window.failSave=false});
  await dialog.getByRole('button',{name:'Сохранить',exact:true}).click();
  await dialog.waitFor({state:'hidden'});
  assert.deepEqual(await page.evaluate(()=>window.lastSave.value['0']),['ноль','ноля','нолю']);
  await page.reload();await mount();
  await panel.getByRole('button',{name:/Мои единицы/}).click();
  assert.equal(await dialog.getByLabel('0',{exact:true}).inputValue(),'ноль; ноля; нолю');
  await page.keyboard.press('Escape');
  await panel.getByRole('button',{name:/Служебные слова/}).click();
  const list=dialog.locator('textarea');
  await list.fill('и; в; во');await list.press('End');await list.pressSequentially('; под');
  assert.equal(await list.inputValue(),'и; в; во; под');
  await dialog.getByRole('button',{name:'Сохранить',exact:true}).click();
  await dialog.waitFor({state:'hidden'});
  assert.deepEqual(await page.evaluate(()=>window.lastSave.value),['и','в','во','под']);
  await panel.getByRole('button',{name:/Произношение дат/}).click();
  await dialog.getByRole('button',{name:/Номера месяцев/}).click();
  await dialog.getByLabel('января',{exact:true}).fill('2');
  await dialog.getByRole('button',{name:'Сохранить',exact:true}).click();
  await dialog.waitFor({state:'hidden'});
  assert.equal(await page.evaluate(()=>window.lastSave.value['января']),2);
  assert.equal(await panel.locator('.appShell').evaluate(el=>el.scrollWidth>el.clientWidth+1),false);
  await panel.evaluate(el=>{el.hass={...window.hass,user:{is_admin:false}}});
  await page.waitForFunction(()=>location.hash!=='#/commands/normalization');
  assert.deepEqual(errors,[]);
  await context.close();
 }
 console.log('Passed normalization editor: desktop/mobile, nested fields, semicolons, editable titles, failure recovery, reload and admin guard');
} finally {await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
