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
  const page=await context.newPage();page.setDefaultTimeout(7000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.stopSetting={uuid:'stop-setting',title:'Stop',actionType:'stop',endStatus:true,status:true,voiceCommands:['стоп'],voiceResponse:'Завершено'};
   window.hass={user:{is_admin:true},states:{},connection:{sendMessagePromise:async message=>{
    const key=message.type.split('/').pop();
    if(key==='get_settings')return {active_remout:false,theme:'dark'};
    if(key==='get_assistant_settings_short')return {data:[window.stopSetting],page:1,total_pages:1};
    if(key==='get_assistant_setting')return {data:window.stopSetting};
    if(key==='update_assistant_setting'){window.stopSetting={uuid:message.uuid,...message.data};return {success:true};}
    return {data:[],page:1,total_pages:1};
   }}};
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/#/commands/settings`);
  await page.evaluate(async()=>{await customElements.whenDefined('ha-dialog-ui-panel');const el=document.createElement('ha-dialog-ui-panel');el.hass=window.hass;document.body.appendChild(el);});
  const panel=page.locator('ha-dialog-ui-panel');
  await panel.getByRole('button',{name:/^Стоп/}).click();
  assert.equal(await panel.getByRole('checkbox',{name:'Завершать диалог',exact:true}).count(),0);
  const phrases=panel.getByLabel('Фразы для запуска',{exact:true});
  await phrases.fill('стоп; останов(и|ить)');
  await panel.getByLabel('Ответное сообщение',{exact:true}).fill('Остановлено');
  await panel.getByRole('checkbox',{name:'Включить команду «Стоп»',exact:true}).uncheck({force:true});
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await phrases.waitFor({state:'hidden'});
  const result=await page.evaluate(()=>window.stopSetting);
  assert.deepEqual(result.voiceCommands,['стоп; останов(и|ить)']);
  assert.equal(result.voiceResponse,'Остановлено');assert.equal(result.status,false);
  await panel.getByRole('button',{name:/^Стоп/}).click();
  assert.equal(await phrases.inputValue(),'стоп; останов(и|ить)');
  assert.equal(await panel.getByRole('checkbox',{name:'Включить команду «Стоп»',exact:true}).isChecked(),false);
  assert.equal(await panel.locator('.appShell').evaluate(el=>el.scrollWidth>el.clientWidth+1),false);
  assert.deepEqual(errors,[]);await context.close();
 }
 console.log('Passed stop settings desktop/mobile: localized title, phrases, response, status, save and reopen');
} finally {await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
