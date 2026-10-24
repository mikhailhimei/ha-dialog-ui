import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { chromium } from "playwright";
const bundle = await readFile(new URL("../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js", import.meta.url), "utf8");
const server = createServer((req,res) => { res.setHeader("Content-Type", req.url === "/panel.js" ? "text/javascript" : "text/html"); res.end(req.url === "/panel.js" ? bundle : '<!doctype html><body style="margin:0"><script type="module" src="/panel.js"></script>'); });
await new Promise(resolve => server.listen(0,"127.0.0.1",resolve));
const browser = await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH || "/usr/bin/chromium"});
try {
 for (const width of [1200,390]) {
  const context = await browser.newContext({viewport:{width,height:900}});
  const page = await context.newPage(); page.setDefaultTimeout(7000);
  const errors=[]; page.on("pageerror", e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.callState={available:true, devices:[{id:"a",node_id:"a",name:"Кухня",online:true},{id:"b",node_id:"b",name:"Спальня",online:true},{id:"offline",node_id:"offline",name:"Гостиная",online:false}],calls:[]};
   window.actions=[]; window.watchers=[];
   window.publish=()=>window.watchers.forEach(cb=>cb(structuredClone(window.callState)));
   window.hass={user:{is_admin:true},states:{"media_player.tv":{state:"idle",attributes:{friendly_name:"Телевизор"}}},connection:{
    async subscribeMessage(cb,msg){if(msg.type==="ha_dialog_ui/calls/watch"){window.watchers.push(cb);window.publish(); return ()=>{window.watchers=window.watchers.filter(x=>x!==cb);};} return ()=>{};},
    async sendMessagePromise(msg){
     if(msg.type.startsWith("ha_dialog_ui/calls/")){
      window.actions.push(msg);
      if(msg.type.endsWith("/start"))window.callState.calls=[{id:"pair",source_device_id:msg.source_device_id,target_device_id:msg.target_device_id,state:"ringing"}];
      if(msg.type.endsWith("/answer"))window.callState.calls[0].state="active";
      if(msg.type.endsWith("/end"))window.callState.calls=[];
      window.publish(); return {};
     }
     if(msg.type.endsWith("get_settings"))return {theme:"dark",active_remout:false,timer_alarm:{}};
     if(msg.type.endsWith("get_timer_alarm_config"))return {devices:[],timer_default:{},alarm_default:{}};
     return {data:[],page:1,total_pages:1};
    }
   }};
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/#/calls`);
  await page.evaluate(async()=>{await customElements.whenDefined("ha-dialog-ui-panel");const el=document.createElement("ha-dialog-ui-panel");el.hass=window.hass;document.body.append(el);});
  const panel=page.locator("ha-dialog-ui-panel");
  const kitchen=panel.getByRole("button",{name:/Кухня/}); const bedroom=panel.getByRole("button",{name:/Спальня/});
  await kitchen.waitFor(); assert.equal(await panel.getByText("Телевизор").count(),0);
  await kitchen.click(); const dialog=panel.getByRole("dialog",{name:"Кухня"});
  await dialog.waitFor(); const select=dialog.getByRole("combobox",{name:"Кому позвонить"});
  assert.equal(await select.locator('option[value="a"]').count(),0);
  assert.equal(await select.locator('option[value="offline"]').isDisabled(),true);
  await select.selectOption("b"); await dialog.getByRole("button",{name:"Позвонить",exact:true}).click();
  await dialog.getByText("Ожидание ответа",{exact:true}).waitFor();
  assert.equal(await dialog.getByRole("button",{name:"Ответить",exact:true}).count(),0);
  await dialog.getByRole("button",{name:"Закрыть",exact:true}).click(); await dialog.waitFor({state:"hidden"});
  assert.equal(await page.evaluate(()=>window.callState.calls.length),1);
  await bedroom.click(); const incoming=panel.getByRole("dialog",{name:"Спальня"});
  await incoming.getByRole("button",{name:"Ответить",exact:true}).click(); await incoming.getByText("Разговор",{exact:true}).waitFor();
  const box=await incoming.boundingBox(); if(width<768){assert.equal(Math.round(box.width),width);assert.equal(Math.round(box.x),0);}
  await page.screenshot({path:`/tmp/ha-dialog-calls-${width}.png`,fullPage:true});
  await incoming.getByRole("button",{name:"Закрыть",exact:true}).click(); await incoming.waitFor({state:"hidden"});
  await page.waitForTimeout(80); await page.evaluate(()=>location.hash="/timer"); await page.waitForTimeout(80);
  assert.equal(await page.evaluate(()=>window.callState.calls[0].state),"active");
  await page.evaluate(()=>location.hash="/calls"); await kitchen.waitFor(); await kitchen.click();
  await dialog.getByRole("button",{name:"Положить трубку",exact:true}).click();
  await dialog.getByText("Готово к звонку",{exact:true}).waitFor();
  assert.deepEqual(await page.evaluate(()=>window.actions.map(x=>x.type)),["ha_dialog_ui/calls/start","ha_dialog_ui/calls/answer","ha_dialog_ui/calls/end"]);
  assert.deepEqual(errors,[]); await context.close(); console.log(`Calls UI ${width}px: device selection, incoming answer, end, persistent call after tab close`);
 }
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
