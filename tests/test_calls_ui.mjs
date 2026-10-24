import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { chromium } from "playwright";
const bundle = await readFile(new URL("../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js", import.meta.url), "utf8");
const worklet = await readFile(new URL("../custom_components/ha_dialog_ui/static/call-capture-worklet.js", import.meta.url), "utf8");
const server = createServer((req,res) => {
 const script = req.url === "/panel.js" || req.url.startsWith("/ha_dialog_ui_static/call-capture-worklet.js");
 res.setHeader("Content-Type", script ? "text/javascript" : "text/html");
 res.end(req.url === "/panel.js" ? bundle : script ? worklet : '<!doctype html><body style="margin:0"><script type="module" src="/panel.js"></script>');
});
await new Promise(resolve => server.listen(0,"127.0.0.1",resolve));
const browser = await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH || "/usr/bin/chromium",args:["--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"]});
try {
 for (const width of [1200,390]) {
  const context = await browser.newContext({viewport:{width,height:900},permissions:["microphone"]});
  const page = await context.newPage(); page.setDefaultTimeout(10000);
  const errors=[]; page.on("pageerror", e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.callState={available:true,owned_call_id:null, devices:[{id:"a",node_id:"a",name:"Кухня",online:true},{id:"b",node_id:"b",name:"Спальня",online:true},{id:"offline",node_id:"offline",name:"Гостиная",online:false}],calls:[]};
   window.actions=[];window.watchers=[];window.micFrames=0;window.prepares=0;
   const getMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
   navigator.mediaDevices.getUserMedia=async opts=>{window.prepares++;if(window.denyMicrophone)throw new DOMException("Denied","NotAllowedError");window.lastMic=await getMedia(opts);return window.lastMic;};
   window.publish=()=>window.watchers.forEach(cb=>cb(structuredClone(window.callState)));
   window.hass={user:{is_admin:true},states:{"media_player.tv":{state:"idle",attributes:{friendly_name:"Телевизор"}}},connection:{
    async subscribeMessage(cb,msg){
     if(msg.type==="ha_dialog_ui/calls/watch"){
      window.watchers.push(cb);window.publish();return ()=>{
       window.watchers=window.watchers.filter(x=>x!==cb);
       if(window.callState.owned_call_id){window.actions.push({type:"view-disconnect"});window.callState.calls=window.callState.calls.filter(c=>c.id!==window.callState.owned_call_id);window.callState.owned_call_id=null;}
      };
     }
     if(msg.type==="ha_dialog_ui/calls/browser_receive"){cb({type:"status",connected:false});return ()=>{};}
     return ()=>{};
    },
    async sendMessagePromise(msg){
     if(msg.type==="ha_dialog_ui/calls/browser_audio"){
      if(!window.callState.calls.some(c=>c.id===window.callState.owned_call_id&&["connecting","active"].includes(c.state)))throw Error("Audio before answer");
      if(atob(msg.pcm).length!==1280)throw Error("Invalid PCM");window.micFrames++;return {accepted:true};
     }
     if(msg.type==="ha_dialog_ui/calls/browser_start"){
      window.actions.push(msg);window.callState.owned_call_id="phone-call";
      window.callState.calls=[{id:"phone-call",source_device_id:null,source_type:"browser",target_device_id:msg.target_device_id,state:"ringing"}];window.publish();return {call_id:"phone-call"};
     }
     if(msg.type==="ha_dialog_ui/calls/browser_end"){
      window.actions.push(msg);window.callState.calls=window.callState.calls.filter(c=>c.id!==window.callState.owned_call_id);window.callState.owned_call_id=null;window.publish();return {};
     }
     if(msg.type.endsWith("get_settings"))return {theme:"dark",active_remout:false,timer_alarm:{}};
     if(msg.type.endsWith("get_timer_alarm_config"))return {devices:[],timer_default:{},alarm_default:{}};
     return {data:[],page:1,total_pages:1};
    }
   }};
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/#/calls`);
  await page.evaluate(async()=>{await customElements.whenDefined("ha-dialog-ui-panel");const el=document.createElement("ha-dialog-ui-panel");el.hass=window.hass;document.body.append(el);});
  const panel=page.locator("ha-dialog-ui-panel");const kitchen=panel.getByRole("button",{name:/Кухня/});
  await kitchen.waitFor();assert.equal(await panel.getByText("Телевизор").count(),0);
  await kitchen.click();const dialog=panel.getByRole("dialog",{name:"Кухня"});await dialog.waitFor();
  assert.equal(await dialog.getByRole("combobox").count(),0);
  assert.equal(await dialog.getByRole("button",{name:"Ответить",exact:true}).count(),0);
  await dialog.getByRole("button",{name:"Позвонить",exact:true}).click();await dialog.getByText("Ожидание ответа",{exact:true}).waitFor();
  assert.equal(await page.evaluate(()=>window.actions[0].target_device_id),"a");
  assert.equal(await page.evaluate(()=>"source_device_id" in window.actions[0]),false);
  await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>window.micFrames),0);
  await dialog.getByRole("button",{name:"Закрыть",exact:true}).click();await dialog.waitFor({state:"hidden"});assert.equal(await page.evaluate(()=>window.callState.calls.length),1);
  await kitchen.click();await page.evaluate(()=>{window.callState.calls[0].state="active";window.publish();});
  await dialog.getByText("Разговор",{exact:true}).waitFor();await page.waitForFunction(()=>window.micFrames>0);
  const box=await dialog.boundingBox();if(width<768){assert.equal(Math.round(box.width),width);assert.equal(Math.round(box.x),0);}
  await page.screenshot({path:`/tmp/ha-dialog-browser-calls-${width}.png`,fullPage:true});
  await dialog.getByRole("button",{name:"Положить трубку",exact:true}).click();await dialog.getByText("Готово к звонку",{exact:true}).waitFor();
  assert.equal(await page.evaluate(()=>window.lastMic.getAudioTracks().every(t=>t.readyState==="ended")),true);
  await dialog.getByRole("button",{name:"Позвонить",exact:true}).click();await dialog.getByText("Ожидание ответа",{exact:true}).waitFor();
  await dialog.getByRole("button",{name:"Закрыть",exact:true}).click();await dialog.waitFor({state:"hidden"});
  await page.waitForTimeout(80);await page.evaluate(()=>location.hash="/timer");await page.waitForFunction(()=>window.callState.calls.length===0);
  assert.equal(await page.evaluate(()=>window.lastMic.getAudioTracks().every(t=>t.readyState==="ended")),true);
  // Device-to-device script calls remain untouched by closing this browser view.
  await page.evaluate(()=>{window.actions=[];window.callState.calls=[{id:"script",source_device_id:"a",target_device_id:"b",state:"active"}];location.hash="/calls";});await kitchen.waitFor();await kitchen.click();
  assert.equal(await dialog.getByRole("button",{name:"Занято",exact:true}).isDisabled(),true);
  await dialog.getByRole("button",{name:"Закрыть",exact:true}).click();await dialog.waitFor({state:"hidden"});await page.waitForTimeout(80);await page.evaluate(()=>location.hash="/timer");await page.waitForTimeout(80);
  assert.equal(await page.evaluate(()=>window.callState.calls.length),1);assert.deepEqual(await page.evaluate(()=>window.actions),[]);
  await page.evaluate(()=>{window.callState.calls=[];window.denyMicrophone=true;location.hash="/calls";});await kitchen.waitFor();await kitchen.click();
  await dialog.getByRole("button",{name:"Позвонить",exact:true}).click();await dialog.getByText(/Разрешите доступ к микрофону/).waitFor();
  assert.equal(await page.evaluate(()=>window.callState.calls.length),0);
  const prepares = await page.evaluate(()=>window.prepares);
  await page.evaluate(()=>{Object.defineProperty(globalThis,"isSecureContext",{value:false,configurable:true});window.publish();});
  await dialog.getByText("Для звонка разрешите микрофон и откройте Home Assistant по HTTPS.",{exact:true}).waitFor();
  assert.equal(await dialog.getByRole("button",{name:"Позвонить",exact:true}).isDisabled(),true);
  assert.equal(await page.evaluate(()=>window.prepares),prepares);
  assert.deepEqual(errors,[]);await context.close();console.log(`Browser Calls ${width}px: recipient-only modal, real fake-device AudioWorklet capture, answer gating, hangup/tab cleanup, script isolation, permission denial`);
 }

}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
