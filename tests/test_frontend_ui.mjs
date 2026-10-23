import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { chromium } from 'playwright';

const bundle = await readFile(new URL('../custom_components/ha_dialog_ui/static/ha-dialog-ui-panel.js', import.meta.url), 'utf8');
assert(!bundle.includes('__HA_DIALOG_UI_BUNDLED_CSS__'));
const server = createServer((req, res) => {
  res.setHeader('Content-Type', req.url === '/panel.js' ? 'text/javascript' : 'text/html');
  res.end(req.url === '/panel.js' ? bundle : '<!doctype html><html><body><script type="module" src="/panel.js"></script></body></html>');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
try {
  const context = await browser.newContext({ viewport: { width: 1100, height: 1000 } });
  const page = await context.newPage();
  page.setDefaultTimeout(7000);
  const errors = [];
  let expectedRenderFailure = false;
  page.on('pageerror', error => { if (!expectedRenderFailure) { errors.push(error.message); console.error(error.message); } });
  page.on('console', msg => { if(msg.type() === 'error' && !expectedRenderFailure) console.error(msg.text()); });
  await page.addInitScript(() => {
    window.apiRequests = [];
    window.hass = { user: {is_admin:true}, states: {'script.bound':{entity_id:'script.bound',state:'off',attributes:{friendly_name:'Управление светом'}}}, connection: { sendMessagePromise: async message => {
      window.apiRequests.push(message.type);
      const requestType = message.type.split('/').pop();
      if (window.pauseCommandList && requestType === 'get_assistant_commands_short') {
        await new Promise(resolve => { window.releaseCommandList = resolve; });
      }
      if (window.collectionSearchFixture && ['get_assistant_commands_short','get_assistant_sub_commands_short','get_assistant_sub_direct_controls_short','get_assistant_sub_direct_control_samples_short','get_assistant_settings_short'].includes(requestType)) {
        window.lastSearchRequest=message;
        const records=[{uuid:'a',title:'Свет в зале',status:true},{uuid:'b',title:'Музыка',status:true},{uuid:'c',title:'Свет в кухне',status:true}].filter(row=>row.title.toLowerCase().includes((message.query || '').trim().toLowerCase()));
        const current=message.page || 1;
        return {data:records.slice(current-1,current),page:current,total_pages:Math.max(1,records.length),total_items:records.length,page_size:1};
      }
      if (window.linkedEditorFixture && requestType==='get_assistant_command' && message.uuid==='option-2') throw {code:'not_found'};
      if (window.linkedEditorFixture && requestType==='update_assistant_sub_direct_control') {window.savedLinkedDirect={...message.data,uuid:message.uuid};return {updated:true};}
      if (window.builtinSettingsLabels && requestType==='get_assistant_settings_short') return {data:[{uuid:'builtin',title:'Старое имя из хранилища',actionType:'default_main'}],page:1,total_pages:1};
      if (window.builtinSettingsLabels && requestType==='get_assistant_setting') return {data:{uuid:'builtin',title:'Старое имя из хранилища',actionType:'default_main',voiceResponse:'Мой ответ',endStatus:true}};
      if (window.settingEditorFixture && requestType === 'get_assistant_settings_short') return {data:[{uuid:'fixed',title:'Встроенный ответ',actionType:'default'}],page:1,total_pages:1};
      if (window.settingEditorFixture && requestType === 'get_assistant_setting') return {data:{uuid:'fixed',title:'Встроенный ответ',actionType:window.settingEditorType || 'default',voiceResponse:'Ответ по умолчанию',endStatus:true,...window.savedSetting}};
      if (window.settingEditorFixture && requestType === 'update_assistant_setting') {window.savedSetting={...message.data,uuid:message.uuid};return {updated:true};}
      const apiFailure = window.apiFailures?.[requestType];
      if (apiFailure) throw Object.assign(new Error('Simulated API failure'), {code:apiFailure});
      if (window.nestedSelectorFixtures && requestType==='get_assistant_sub_direct_control_samples_short') {
        const current=message.page || 1;
        return {data:[{uuid:`nested-${current}`,title:current===1?'Помещения':'Этажи'}],page:current,total_pages:2,total_items:2};
      }

      if (window.namedCommandFixtures && ['get_assistant_commands_short','get_assistant_sub_commands_short','get_assistant_sub_direct_controls_short'].includes(requestType)) {
        const first=(message.page || 1)===1 ? 0 : 4;
        const prefix = requestType==='get_assistant_commands_short' && message.page_size!==100;
        if (prefix) return {data:[{uuid:'command-1',title:'Команда 1',status:true}],page:1,total_pages:1};
        return {data:Array.from({length:4},(_,i)=>({uuid:`option-${first+i}`,title:`Запустить команду ${first+i}`,status:true})),page:message.page || 1,total_pages:2,total_items:8};
      }
      if (window.namedCommandFixtures && requestType === 'get_assistant_sub_direct_control') return {data:{uuid:message.uuid,title:'Комната',directControl:{mappingType:'room'}}};
      if (window.namedCommandFixtures && requestType === 'get_assistant_sub_command') return {data:window.savedNamedSub || {uuid:message.uuid,title:'Запасная команда',status:true,subComponentDialog:{actionType:'fallback',answerType:'default',forwardText:false,voiceCommands:[],voiceResponseArray:[],nextAction:[],nextDirectControl:[{uuid:'option-1',title:'Запустить команду 1'}]}}};
      if (window.namedCommandFixtures && requestType === 'update_assistant_sub_command') {window.savedNamedSub={...message.data,uuid:message.uuid};return {updated:true};}
      if (window.namedCommandFixtures && requestType === 'get_assistant_command') return {data:window.savedNamedCommand || {uuid:message.uuid,title:'Команда 1',status:true,componentDialog:{actionType:'test',answerType:'default',endStatus:true,voiceCommands:[],voiceResponseArray:[],nextAction:[{actionTypeComponent:'children',uuid:'option-0'}],nextDirectControl:[{uuid:'option-1'}]}}};
      if (window.namedCommandFixtures && requestType === 'update_assistant_command') {window.savedNamedCommand={...message.data,uuid:message.uuid};return {updated:true};}
      if (window.errorFixtures && requestType === 'get_assistant_command') return {data:{uuid:message.uuid,title:'Команда 1',status:true,componentDialog:{actionType:'test',answerType:'default',endStatus:true,voiceCommands:[],voiceResponseArray:[],nextAction:[],nextDirectControl:[]}}};

      if (window.bugFixtures) {
        const type = message.type.split('/').pop();
        const device_id = 'media_player.home_assistant_voice_0ab77d_media_player_2';
        if (type === 'get_timer_requests_short' || type === 'get_alarm_requests_short') return {data:[{uuid:'request-1'}]};
        if (type === 'get_timer_request') return {data:{uuid:'request-1',action_type:'create_timer',device_id,status:'running',timer_time:{count_timer:'00:05:00',date_end:new Date(Date.now()+300000).toISOString()}}};
        if (type === 'get_alarm_request') return {data:{uuid:'request-1',action_type:'create_alarm',device_id,status:window.alarmStatus || 'on',time:'07:50',repeat_type:'once'}};
        if (type === 'get_alarm_time_widgets_short') return {data:[{uuid:'time-widget'}],page:1,total_pages:1};
        if (type === 'get_alarm_time_widget') return {data:{uuid:'time-widget',action_type:'create_time_widget',time:window.alarmHistoryTimes || ['6:30','06:30']}};
        if (type === 'save_alarm_request') {
          window.createdAlarm=message.data;
          window.alarmHistoryTimes=[...new Set([...(window.alarmHistoryTimes || ['06:30']),message.data.time])];
          return {saved:true};
        }
        if (type === 'update_alarm_request') {
          window.alarmUpdate = message;
          window.alarmStatus = message.data.status;
          return {};
        }
        if (type === 'delete_alarm_request') { window.deletedAlarm = message.uuid; return {}; }
        if (type === 'get_script_action') return {data:{uuid:'script-1',name:'Настройки',script_entity_id:'script.test',conditions:[{parent_type:'music_start',children_type:''}]}};
        if (type.startsWith('search_assistant_')) return {data:Array.from({length:8},(_,i)=>({uuid:`option-${i}`,title:`Запустить команду ${i}`,actionType:`selected_${i}`}))};
        if (type === 'get_assistant_sub_direct_control_samples_short') return {data:[{uuid:'template-1',title:'Шаблон комнат'}],page:1,total_pages:1};
        if (type === 'get_assistant_sub_direct_control_sample') return {data:{uuid:'template-1',title:'Шаблон комнат',subDirectControl:[]}};
        if (type === 'save_assistant_sub_direct_control_sample') { window.createdTemplate = message.data; return {saved:true}; }
        if (type === 'delete_assistant_sub_direct_control_sample') { window.deletedTemplate = message.uuid; return {}; }
        if (window.crudMode) {
          const endpoints = [
            ['get_assistant_commands_short','get_assistant_command','save_assistant_command','update_assistant_command','delete_assistant_command'],
            ['get_assistant_sub_commands_short','get_assistant_sub_command','save_assistant_sub_command','update_assistant_sub_command','delete_assistant_sub_command'],
            ['get_assistant_sub_direct_controls_short','get_assistant_sub_direct_control','save_assistant_sub_direct_control','update_assistant_sub_direct_control','delete_assistant_sub_direct_control'],
          ];
          for (const [list, detail, create, update, remove] of endpoints) {
            if (type === list) return {data:window.crudRecords.slice((message.page||1)-1,message.page||1),page:message.page||1,total_pages:window.crudRecords.length,total_items:window.crudRecords.length,page_size:1};
            if (type === detail) return {data:window.crudRecords.find(record=>record.uuid===message.uuid)};
            if (type === update) {window.crudRecords=window.crudRecords.map(record=>record.uuid===message.uuid?{...record,...message.data}:record);return {updated:true};}
            if (type === create) {window.crudRecords.push({...message.data,uuid:'created-command'});return {saved:true};}
            if (type === remove) {window.crudRecords=window.crudRecords.filter(record=>record.uuid!==message.uuid);return {deleted:true};}
          }
        }
        const lists = ['get_assistant_commands_short','get_assistant_sub_commands_short','get_assistant_sub_direct_controls_short'];
        if (lists.includes(type)) return {data:[{uuid:`command-${message.page || 1}`,title:`Команда ${message.page || 1}`,status:window.commandStatus?.[message.page || 1] ?? true}],page:message.page || 1,total_pages:2,total_items:2};
        if (type.endsWith('_status')) {
          window.commandStatus ??= {};
          window.commandStatus[message.uuid.split('-').pop()] = message.status;
          return {success:true};
        }
      }
      if (message.type.endsWith('/export_command_bundle')) return {format:'ha-dialog-ui-commands',version:1,commands:[],sub_commands:[],direct_commands:[],templates:[],settings:[]};
      if (message.type.endsWith('/import_command_bundle')) { window.importedCommands = message.data; return {imported:{}}; }
      if (message.type.endsWith('/get_script_actions_short')) return {script_actions:window.failRender ? [null] : [{uuid:'script-1',title:'Настройки'}],page:1,total_pages:1};
      if (message.type.endsWith('/get_api_logs')) return {logs:[{timestamp:'2026-10-23T08:00:00Z',method:'POST',path:'/api/dialog/commands',phase:'completed',status:401,duration_ms:3,event:null,request_body:{text:'Включи свет'},response_body:{error:'unauthorized'}},{timestamp:'2026-10-23T07:59:59Z',method:'GET',path:'/api/dialog/event',phase:'connected',status:200,duration_ms:null,event:null}]};
      if (message.type.endsWith('/get_settings')) return {client_id:'test-client',theme:localStorage.getItem('test-saved-theme') || 'dark',active_remout:localStorage.getItem('test-remote-server') === 'true',timer_alarm:{}};
      if (message.type.endsWith('/save_settings') || message.type.endsWith('/import_settings')) {
        if (message.data.theme) localStorage.setItem('test-saved-theme', message.data.theme);
        if (typeof message.data.active_remout === 'boolean') localStorage.setItem('test-remote-server', String(message.data.active_remout));
        return {};
      }
      return { data: [], script_actions: [], page: message.page || 1, total_pages: 1 };
    } } };
  });
  const url = `http://127.0.0.1:${server.address().port}`;
  console.log("Opening panel");
  await page.goto(`${url}/#/settings`);
  await page.evaluate(async () => {
    await customElements.whenDefined('ha-dialog-ui-panel');
    const panel = document.createElement('ha-dialog-ui-panel');
    panel.hass = window.hass;
    document.body.appendChild(panel);
  });
  const panel = page.locator('ha-dialog-ui-panel');
  console.log('Waiting for language selector');
  await panel.getByText('Язык интерфейса', { exact: true }).waitFor().catch(async error => {console.log(await panel.evaluate(el=>el.shadowRoot.innerHTML.slice(-4000)));throw error;});
  assert.equal(await panel.getByText('Яндекс TTS', { exact: true }).count(), 0);
  const checkStyles = async () => {
    const style = await panel.evaluate(element => {
      const input = element.shadowRoot.querySelector('input');
      const shell = element.shadowRoot.querySelector('.appShell');
      return { styleLength: element.shadowRoot.querySelector('style').textContent.length,
        radius: getComputedStyle(input).borderRadius, boxSizing: getComputedStyle(input).boxSizing,
        language: shell.lang, value: input.value };
    });
    assert(style.styleLength > 10000);
    assert.equal(style.radius, '14px');
    assert.equal(style.boxSizing, 'border-box');
    assert.equal(style.value, 'test-client');
    return style;
  };
  assert.equal((await checkStyles()).language, 'ru');
  assert.equal(await panel.getByRole('button',{name:'Сохранить',exact:true}).count(),0);
  await panel.getByLabel('Идентификатор клиента',{exact:true}).fill('edited-client');
  const settingsSave = await panel.getByRole('button', {name:'Сохранить',exact:true}).boundingBox();
  assert(settingsSave.x >= 28);
  assert(settingsSave.x + settingsSave.width <= 1100 - 28);
  assert(settingsSave.width >= 160 && settingsSave.width < 250);
  await panel.getByLabel('Идентификатор клиента',{exact:true}).fill('test-client');
  assert.equal(await panel.getByRole('button',{name:'Сохранить',exact:true}).count(),0);

  const connections = panel.getByRole('region',{name:'Подключения',exact:true});
  await connections.getByRole('checkbox',{name:'Включить API',exact:true}).waitFor();
  assert.equal(await panel.getByRole('region',{name:'Общие',exact:true}).getByRole('checkbox',{name:'Включить API',exact:true}).count(),0);
  await connections.getByRole('button',{name:'Подсказка: Включить API',exact:true}).hover();
  await panel.getByRole('tooltip').filter({hasText:'/api/dialog/commands'}).waitFor();
  await page.keyboard.press('Escape');
  console.log('Checking desktop command dropdown does not navigate on open');
  const commandsTrigger = panel.getByRole('button',{name:'Команды',exact:true});
  const commandMenu = panel.getByRole('navigation',{name:'Разделы команд',exact:true});
  const originalRoute = await page.evaluate(()=>location.hash);
  await commandsTrigger.click();
  await commandMenu.waitFor();
  assert.equal(await page.evaluate(()=>location.hash),originalRoute);
  await page.keyboard.press('Escape');
  await commandMenu.waitFor({state:'hidden'});
  await commandsTrigger.press('ArrowDown');
  await commandMenu.getByRole('link',{name:'Основные команды',exact:true}).waitFor();
  await page.waitForFunction(()=>document.querySelector('ha-dialog-ui-panel').shadowRoot.activeElement?.textContent==='Основные команды');
  await panel.getByRole('heading',{name:'Настройки',exact:true}).click();
  await commandMenu.waitFor({state:'hidden'});
  await commandsTrigger.click();
  await commandMenu.getByRole('link',{name:'Второстепенные команды',exact:true}).click();
  await page.waitForFunction(()=>location.hash==='#/commands/sub');
  await commandMenu.waitFor({state:'hidden'});
  await page.evaluate(()=>{location.hash='/settings'});
  await commandsTrigger.waitFor();
  console.log('Checking remote-server navigation');
  const commandTab = panel.getByRole('button', {name:'Команды',exact:true});
  const remoteSwitch = panel.getByRole('checkbox',{name:'Подключаться к удалённому серверу',exact:true});
  const setRemoteEnabled = async enabled => {
    if (await remoteSwitch.isChecked() !== enabled) await panel.getByText('Подключаться к удалённому серверу', {exact:true}).first().click();
  };
  const saveSettingsButton = panel.getByRole('button', {name:'Сохранить',exact:true});
  await commandTab.waitFor();
  assert.equal(await panel.getByRole("link",{name:"Запуск скриптов",exact:true}).count(),0);
  assert.equal(await panel.getByRole("link",{name:"Действия удалённых команд",exact:true}).count(),0);
  await setRemoteEnabled(true);
  await saveSettingsButton.press("Enter");
  await commandTab.waitFor({state:'hidden'});
  await page.evaluate(() => { window.apiRequests = []; });
  for (const route of ['/commands', '/commands/main', '/commands/sub', '/commands/direct',
                       '/commands/direct/main', '/commands/direct/template', '/commands/settings']) {
    await page.evaluate(route => { location.hash = route; }, route);
    await page.waitForFunction(() => location.hash === '#/scripts');
  }
  assert.deepEqual(await page.evaluate(() => window.apiRequests.filter(type => type.startsWith('ha_dialog_ui/get_assistant_'))), []);
  console.log('Checking SSE action types use plain inputs without local command searches');
  await panel.getByRole('link',{name:'Действия удалённых команд',exact:true}).waitFor();
  await page.evaluate(()=>{window.bugFixtures=true;window.apiRequests=[]});
  await panel.getByRole('button',{name:/Настройки.*Нажмите/}).click();
  const sheetEdit = await panel.getByRole('button',{name:'Изменить',exact:true}).boundingBox();
  const sheetDelete = await panel.getByRole('button',{name:'Удалить',exact:true}).boundingBox();
  assert(Math.abs(sheetEdit.width - sheetDelete.width) < 1, 'Action sheet buttons have equal widths');
  const actionBounds = await panel.getByRole('button',{name:'Удалить',exact:true}).evaluate(button => {
    const container = button.parentElement.getBoundingClientRect();
    const bounds = button.getBoundingClientRect();
    return { right: bounds.right, containerRight: container.right };
  });
  assert(actionBounds.right <= actionBounds.containerRight + 1, 'Delete stays inside the action area');
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  await panel.getByRole('button',{name:/Условие 1/}).click();
  await panel.getByLabel('Основная команда',{exact:true}).fill('remote_main');
  await panel.getByLabel('Второстепенная команда',{exact:true}).fill('remote_child');
  await panel.getByRole('button',{name:'🞢 Добавить прямую команду',exact:true}).click();
  await panel.getByLabel('Прямая команда',{exact:true}).fill('remote_direct');
  assert.equal(await panel.getByPlaceholder('Начните вводить title или uuid').count(),0);
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  assert.deepEqual(await page.evaluate(()=>window.apiRequests.filter(type=>type.includes('/search_assistant_'))),[]);
  await page.evaluate(()=>{window.bugFixtures=false;location.hash='/downloads'});
  await panel.getByRole('heading',{name:'Действия удалённых команд',exact:true}).waitFor();
  await panel.getByRole('button',{name:'Скачать скрипты',exact:true}).waitFor();
  assert.equal(await panel.getByRole('heading',{name:'Сценарии',exact:true}).count(),0);
  assert.equal(await panel.getByRole('button',{name:'Скачать сценарии',exact:true}).count(),0);
  assert.equal(await panel.getByRole('button',{name:'Загрузить сценарии',exact:true}).count(),0);
  assert.equal(await panel.getByRole('heading',{name:'Запуск скриптов',exact:true}).count(),0);

  await page.evaluate(() => { location.hash = '/settings'; });
  await remoteSwitch.waitFor();
  assert(await remoteSwitch.isChecked());
  await page.setViewportSize({width:390,height:900});
  assert.equal(await panel.getByRole('button', {name:'Команды',exact:true}).count(), 0);
  await setRemoteEnabled(false);
  await saveSettingsButton.press("Enter");
  await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
  await panel.getByRole('navigation',{name:'Навигация интеграции',exact:true}).getByRole('link',{name:'Основные команды',exact:true}).waitFor();
  await page.keyboard.press('Escape');
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  assert.equal(await panel.getByRole('link',{name:'Запуск скриптов',exact:true}).count(),0);
  assert.equal(await panel.getByRole('link',{name:'Действия удалённых команд',exact:true}).count(),0);
  await setRemoteEnabled(true);
  await saveSettingsButton.press("Enter");
  await panel.getByRole('button', {name:'Команды',exact:true}).waitFor({state:'hidden'});
  await page.reload();
  await page.evaluate(async () => {
    await customElements.whenDefined('ha-dialog-ui-panel');
    const element = document.createElement('ha-dialog-ui-panel');
    element.hass = window.hass;
    document.body.appendChild(element);
  });
  await remoteSwitch.waitFor();
  assert(await remoteSwitch.isChecked());
  assert.equal(await panel.getByRole('button', {name:'Команды',exact:true}).count(), 0);
  await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
  const remoteMenu=panel.getByRole('navigation',{name:'Навигация интеграции',exact:true});
  await remoteMenu.getByRole('link',{name:'Действия удалённых команд',exact:true}).waitFor();
  assert.equal(await remoteMenu.getByRole('link',{name:'Основные команды',exact:true}).count(),0);
  await page.keyboard.press('Escape');
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);

  await setRemoteEnabled(false);
  await saveSettingsButton.press("Enter");
  await page.setViewportSize({width:1100,height:1000});
  await commandTab.waitFor();

  const languageSelect = panel.locator('select').filter({has:page.locator('option[value="en"]')});
  console.log('Switching to English');
  await languageSelect.selectOption('en');
  await panel.getByText('Interface language', {exact:true}).waitFor();
  await panel.getByText('General', {exact:true}).waitFor();
  assert.equal((await checkStyles()).language, 'en');
  await page.evaluate(() => { location.hash = '/scripts'; });
  await panel.getByText('Настройки', {exact:true}).waitFor();
  await panel.getByText('Click to edit', {exact:true}).waitFor();
  await page.evaluate(() => { location.hash = '/commands/main'; });
  await panel.getByRole('button', {name:'🞢 Add scenario',exact:true}).click();
  await panel.getByText('Trigger phrases', {exact:true}).waitFor();
  await panel.getByRole('button',{name:'Help: Response source',exact:true}).hover();
  await panel.getByRole('tooltip').waitFor();
  assert((await panel.getByRole('tooltip').textContent()).includes('Response from script'));
  await page.keyboard.press('Escape');
  await panel.getByRole('tooltip').waitFor({state:'hidden'});

  assert.equal(await panel.getByRole('tablist').count(),0);
  await panel.getByRole('button',{name:'Configure logic',exact:true}).click();
  assert.equal(await panel.getByRole('tab',{name:'Responses',exact:true}).count(),0);
  await panel.getByRole('tab',{name:'Direct commands',exact:true}).waitFor();
  await panel.getByRole('tab',{name:'Direct commands',exact:true}).press('End');
  assert.equal(await panel.getByRole('tab',{name:'Continuations',exact:true}).getAttribute('aria-selected'),'true');
  await panel.getByRole('button',{name:'Back',exact:true}).click();
  await page.evaluate(() => { location.hash = '/timer'; });
  await panel.getByText('No running timers.', {exact:true}).waitFor();
  await page.evaluate(() => { location.hash = '/alarm'; });
  await panel.getByText('No alarms.', {exact:true}).waitFor();
  await panel.getByRole('button', {name:'🞢 Create',exact:true}).click();
  const modalColor = await panel.getByRole('heading', {name:'Create alarm',exact:true}).evaluate(
    heading => getComputedStyle(heading.parentElement.parentElement).backgroundColor
  );
  assert.equal(modalColor, 'rgb(28, 28, 28)');
  const device = panel.getByLabel('Playback device', {exact:true});
  assert.equal(await device.evaluate(el => getComputedStyle(el).height), '50px');
  assert.equal(await device.evaluate(el => getComputedStyle(el).borderRadius), '14px');
  const save = panel.getByRole('button', {name:'Save',exact:true});
  const desktopButton = await save.boundingBox();
  assert(desktopButton.width >= 160 && desktopButton.width < 250);
  await page.setViewportSize({width:360,height:1000});
  await page.waitForTimeout(200);
  const mobileButton = await save.boundingBox();
  assert(mobileButton.width > 300 && mobileButton.width <= 360);
  await panel.getByRole('button', {name:'✕',exact:true}).click();
  await page.setViewportSize({width:1100,height:1000});

  await page.evaluate(() => { location.hash = '/settings'; });
  await panel.getByText('Interface language', {exact:true}).waitFor();
  console.log('Reloading');
  await page.reload();
  await page.evaluate(async () => {
    await customElements.whenDefined('ha-dialog-ui-panel');
    const panel = document.createElement('ha-dialog-ui-panel');
    panel.hass = window.hass;
    document.body.appendChild(panel);
  });
  await panel.getByText('Interface language', {exact:true}).waitFor();
  await panel.locator('select').filter({has:page.locator('option[value="ru"]')}).selectOption('ru');
  await panel.getByText('Общие', {exact:true}).waitFor();
  for (const width of [360, 1100]) {
    await page.setViewportSize({width,height:1000});
    assert.equal((await checkStyles()).language, 'ru');
  }
  await page.evaluate(() => { location.hash = '/commands/direct/main'; });
  await panel.getByRole('button', {name:'🞢 Добавить сценарий',exact:true}).click();
  await panel.getByRole('heading', {name:'Создать прямую команду',exact:true}).waitFor();
  await panel.getByText('Название переменной', {exact:true}).waitFor();
  await panel.getByText('Тип данных', {exact:true}).waitFor();
  const directValueType=panel.getByLabel('Тип данных',{exact:true});
  assert.equal(await directValueType.locator('option[value="command"]').count(),1);
  await page.evaluate(()=>{window.nestedSelectorFixtures=true});
  await directValueType.selectOption('command');
  assert.equal(await panel.getByRole('checkbox',{name:'Вручную',exact:true}).count(),0);
  const nestedPicker=panel.getByRole('combobox',{name:'Вложенные команды',exact:true});
  await nestedPicker.selectOption('nested-2');
  assert.equal(await nestedPicker.locator('option:checked').textContent(),'Этажи');
  assert.equal(await nestedPicker.locator('option[value="nested-1"]').textContent(),'Помещения');
  await nestedPicker.selectOption('');
  assert.equal(await nestedPicker.inputValue(),'');
  await panel.getByRole('button',{name:'Подсказка: Фразы для запуска',exact:true}).hover();
  const directHint=panel.getByRole('tooltip');
  await directHint.waitFor();
  assert((await directHint.textContent()).includes('включи свет в зале'));
  assert((await directHint.textContent()).includes('Поле можно оставить пустым'));
  await page.keyboard.press('Escape');
  await page.evaluate(()=>{window.nestedSelectorFixtures=false});
  await directValueType.selectOption('all');
  assert.equal(await panel.getByRole('combobox',{name:'Вложенные команды',exact:true}).count(),0);

  for (const width of [360, 1100]) {
    await page.setViewportSize({width,height:1000});
    const overflow = await panel.getByRole('heading', {name:'Создать прямую команду',exact:true}).evaluate(heading => {
      const modal = heading.parentElement.parentElement;
      return [...modal.querySelectorAll('div')].some(el => el.scrollWidth > el.clientWidth + 1);
    });
    assert.equal(overflow, false, `Direct command modal overflows at ${width}px`);
  }
  await panel.getByRole('button', {name:'✕',exact:true}).click();
  const sections = panel.getByRole('group', {name:'Раздел прямых команд'});
  assert.equal(await sections.getByRole('button', {name:'Команды',exact:true}).getAttribute('aria-pressed'), 'true');
  await sections.getByRole('button', {name:'Вложенные команды',exact:true}).click();
  await sections.locator('button[aria-pressed="true"]').filter({hasText:'Вложенные команды'}).waitFor();
  assert.equal(await sections.getByRole('button', {name:'Вложенные команды',exact:true}).getAttribute('aria-pressed'), 'true');
  assert(['flex', 'inline-flex'].includes(await sections.evaluate(el => getComputedStyle(el).display)));
  await panel.getByRole('button', {name:'🞢 Добавить сценарий',exact:true}).click();
  await panel.getByText('Варианты вложенных команд', {exact:true}).waitFor();
  await panel.getByRole('region',{name:'Варианты вложенных команд',exact:true}).waitFor();
  assert.equal(await panel.getByRole('button',{name:/Варианты вложенных команд/}).count(),0);
  await panel.getByRole('button', {name:'Добавить ещё',exact:true}).click();
  await panel.getByText('Код значения', {exact:true}).waitFor();
  await panel.getByText('Варианты произношения', {exact:true}).waitFor();
  for (const width of [360,1100]) {
    await page.setViewportSize({width,height:1000});
    const layout = await panel.locator('textarea').evaluate(el => ({
      gap: getComputedStyle(el.closest('div').parentElement).gap,
      width: el.getBoundingClientRect().width,
      parentWidth: el.closest('div').getBoundingClientRect().width,
    }));
    assert.equal(layout.gap, '18px');
    assert(layout.width <= layout.parentWidth + 1);
  }
  const palette = await panel.evaluate(element => {
    const shell = element.shadowRoot.querySelector('.appShell');
    const dark = getComputedStyle(shell).backgroundColor;
    shell.dataset.theme = 'light';
    const light = getComputedStyle(shell).backgroundColor;
    element.style.setProperty('--primary-color', '#00897b');
    const primaryButton = [...element.shadowRoot.querySelectorAll('button')].find(el => el.textContent.trim() === 'Сохранить');
    primaryButton.style.transition = 'none';
    const accent = getComputedStyle(primaryButton).backgroundColor;
    return {dark, light, accent};
  });
  assert.equal(palette.dark, 'rgb(17, 17, 17)');
  assert.equal(palette.light, 'rgb(244, 245, 247)');
  assert.equal(palette.accent, 'rgb(0, 137, 123)');
  await page.evaluate(() => { location.hash = '/timer'; });
  await panel.getByText('Нет запущенных таймеров.', {exact:true}).waitFor();
  const lightSurfaces = await panel.evaluate(element => {
    const shell = element.shadowRoot.querySelector('.appShell');
    shell.dataset.theme = 'light';
    const empty = [...element.shadowRoot.querySelectorAll('div')].find(el => el.childElementCount === 0 && el.textContent === 'Нет запущенных таймеров.');
    const navigation = element.shadowRoot.querySelector('a[href="#/timer"]').parentElement;
    return {card: getComputedStyle(empty).backgroundColor,
      navigation: getComputedStyle(navigation).backgroundColor,
      cardLeft: empty.getBoundingClientRect().left};
  });
  assert.equal(lightSurfaces.card, 'rgb(247, 248, 250)');
  assert.equal(lightSurfaces.navigation, 'rgb(255, 255, 255)');
  assert(lightSurfaces.cardLeft >= 28);


  await page.evaluate(() => { location.hash = '/settings'; });
  const themeSelect = panel.locator('select').filter({has:page.locator('option[value="light"]')});
  await themeSelect.waitFor();
  await themeSelect.selectOption('light');
  await page.waitForFunction(() => localStorage.getItem('test-saved-theme') === 'light');
  await page.evaluate(() => { location.hash = '/timer'; });
  await panel.getByText('Нет запущенных таймеров.', {exact:true}).waitFor();
  await page.evaluate(() => { location.hash = '/settings'; });
  await themeSelect.waitFor();
  assert.equal(await themeSelect.inputValue(), 'light');
  assert.equal(await panel.locator('.appShell').getAttribute('data-theme'), 'light');
  await page.reload();
  await page.evaluate(async () => {
    await customElements.whenDefined('ha-dialog-ui-panel');
    const element = document.createElement('ha-dialog-ui-panel');
    element.hass = window.hass;
    document.body.appendChild(element);
  });
  await themeSelect.waitFor();
  assert.equal(await themeSelect.inputValue(), 'light');
  assert.equal(await panel.locator('.appShell').getAttribute('data-theme'), 'light');
  // Returning from a background tab must preserve the mounted form.
  const clientInput = panel.getByLabel('Идентификатор клиента', {exact:true});
  await clientInput.fill('unsaved-client');
  const otherTab = await page.context().newPage();
  await otherTab.goto('about:blank');
  await otherTab.bringToFront();
  await page.bringToFront();
  await otherTab.close();
  await page.evaluate(() => {
    document.dispatchEvent(new Event('visibilitychange'));
    window.dispatchEvent(new PageTransitionEvent('pageshow', {persisted:true}));
  });
  assert.equal(await clientInput.inputValue(), 'unsaved-client');
  for (let index = 0; index < 3; index++) {
    await panel.evaluate(async element => {
      element.remove();
      await new Promise(resolve => setTimeout(resolve, 30));
      document.body.appendChild(element);
    });
    await panel.getByText('Язык интерфейса', {exact:true}).waitFor();
    assert.equal(await panel.locator('.appShell').count(), 1);
    assert.equal(await panel.evaluate(element => element.shadowRoot.children.length), 2);
  }
  console.log('Checking mobile overflow, dropdown clipping and command toggles');
  await page.evaluate(() => { window.bugFixtures = true; });
  for (const width of [320,390,1100]) {
    await page.setViewportSize({width,height:900});
    for (const route of ['/timer','/alarm']) {
      await page.evaluate(route => { location.hash = route; }, route);
      const metadata = panel.getByText(/media_player.home_assistant_voice_0ab77d_media_player_2/);
      await metadata.waitFor();
      const dimensions = await metadata.evaluate(el => {
        const card = el.closest('button') ?? el.parentElement.parentElement.parentElement.parentElement;
        return {left:card.getBoundingClientRect().left,right:card.getBoundingClientRect().right,
          overflow:card.scrollWidth-card.clientWidth};
      });
      assert(dimensions.left >= 0 && dimensions.right <= width, `${route}: card outside ${width}px viewport`);
      assert(dimensions.overflow <= 1, `${route}: card content overflows`);
    }
  }
  // Shared action sheet must retain the alarm object callbacks on desktop and mobile.
  for (const width of [1100,390]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(() => { window.alarmStatus = 'on'; location.hash = '/timer'; });
    await panel.getByText(/Заведен на/).waitFor();
    await page.evaluate(() => { location.hash = '/alarm'; });
    const alarmCard = panel.getByRole('button', {name:/07:50.*однократно/});
    await alarmCard.click();
    const deleteBounds = await panel.getByRole('button',{name:'Удалить',exact:true}).boundingBox();
    const toggleBounds = await panel.getByRole('button',{name:'Выключить',exact:true}).boundingBox();
    assert(Math.abs(deleteBounds.width-toggleBounds.width)<2,'Delete action must fill the modal width');
    await panel.getByRole('button', {name:'Выключить',exact:true}).click();
    await page.waitForFunction(() => window.alarmUpdate?.data.status === 'off');
    assert.equal(await page.evaluate(() => window.alarmUpdate.uuid), 'request-1');
    await alarmCard.click();
    await panel.getByRole('button', {name:'Включить',exact:true}).click();
    await page.waitForFunction(() => window.alarmUpdate.data.status === 'on');
    await alarmCard.click();
    await panel.getByRole('button', {name:'Изменить',exact:true}).click();
    await panel.getByRole('heading', {name:'Редактировать будильник',exact:true}).waitFor();
    assert.equal(await panel.getByLabel('Часы',{exact:true}).inputValue(), '07');
    assert.equal(await panel.getByLabel('Минуты',{exact:true}).inputValue(), '50');
    await panel.getByRole('button', {name:'✕',exact:true}).click();
    await alarmCard.click();
    await panel.getByRole('button', {name:'Удалить',exact:true}).click();
    await page.waitForFunction(() => window.deletedAlarm === 'request-1');
    await page.evaluate(() => { window.deletedAlarm = null; window.alarmUpdate = null; });
  }
  console.log('Checking mobile Back closes timer form without leaving the page');
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(()=>{location.hash='/timer'});
  await panel.getByRole('button',{name:'Добавить сценарий',exact:true}).click();
  await panel.getByLabel('Часы',{exact:true}).fill('1');
  await panel.getByLabel('Минуты',{exact:true}).fill('12');
  await panel.getByLabel('Секунды',{exact:true}).fill('34');
  assert.equal(await panel.getByLabel('Минуты',{exact:true}).inputValue(),'12');
  await page.evaluate(()=>history.back());
  await panel.getByLabel('Часы',{exact:true}).waitFor({state:'hidden'});
  assert.equal(await page.evaluate(()=>location.hash),'#/timer');
  await panel.getByRole('button',{name:'Добавить сценарий',exact:true}).click();
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  assert.equal(await page.evaluate(()=>location.hash),'#/timer');
  console.log('Checking alarm time fields, repeat dropdown, history and inline volume');
  await page.evaluate(()=>{
    window.hass.states['media_player.test']={entity_id:'media_player.test',state:'idle',attributes:{friendly_name:'Тестовая колонка'}};
    location.hash='/timer';
  });
  await panel.getByText(/Заведен на/).waitFor();
  await page.evaluate(()=>{location.hash='/alarm'});
  for(const width of [320,390,1100]) {
    await page.setViewportSize({width,height:900});
    const createButton=panel.getByRole('button',{name:width<=768?'Добавить сценарий':'🞢 Создать',exact:true});
    await createButton.click();
    await panel.getByRole('heading',{name:'Создать будильник',exact:true}).waitFor();
    const hours=panel.getByLabel('Часы',{exact:true});
    const minutes=panel.getByLabel('Минуты',{exact:true});
    const repeat=panel.getByLabel('Повторы',{exact:true});
    assert.equal(await panel.locator('input[type="time"]').count(),0);
    assert.equal(await panel.getByRole('button',{name:'06:30',exact:true}).count(),1);
    await panel.getByRole('button',{name:'06:30',exact:true}).click();
    assert.equal(await hours.inputValue(),'06');
    assert.equal(await minutes.inputValue(),'30');
    await hours.selectOption('08');
    await minutes.selectOption('15');
    await repeat.selectOption('weekdays');
    assert.equal(await panel.getByRole('group',{name:'Дни повтора',exact:true}).count(),0);
    await repeat.selectOption('custom');
    const repeatDays=panel.getByRole('group',{name:'Дни повтора',exact:true});
    for(const day of ['Пн','Пт']) {
      const button=repeatDays.getByRole('button',{name:day,exact:true});
      if(await button.getAttribute('aria-pressed')!=='true') await button.click();
    }
    const fields=panel.getByRole('group',{name:'Время будильника',exact:true});
    const bounds=await fields.boundingBox();
    assert(bounds.x>=0 && bounds.x+bounds.width<=width, 'Alarm time fields fit viewport');
    await panel.getByLabel('Устройство воспроизведения',{exact:true}).selectOption('media_player.test');
    await panel.getByRole('slider').press('End');
    await panel.getByText('Стартовая громкость 100%',{exact:true}).waitFor();
    if(width===390) await page.screenshot({path:'/tmp/alarm-new-form.png'});
    await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
    await panel.getByRole('heading',{name:'Создать будильник',exact:true}).waitFor({state:'hidden'});
    const saved=await page.evaluate(()=>window.createdAlarm);
    assert.equal(saved.time,'08:15');
    assert.equal(saved.volume_start,1);
    assert.equal(saved.repeat_type,'custom');
    assert.deepEqual(saved.repeat_days,['mon','fri']);
    await createButton.click();
    await panel.getByRole('button',{name:'08:15',exact:true}).click();
    assert.equal(await hours.inputValue(),'08');
    assert.equal(await minutes.inputValue(),'15');
    await panel.getByRole('button',{name:'✕',exact:true}).click();
  }
  await page.setViewportSize({width:390,height:900});
  for (const route of ['/commands/main','/commands/sub','/commands/direct/main']) {
    await page.evaluate(() => { window.commandStatus = {}; });
    await page.evaluate(route => { location.hash = route; }, route);
    const first = panel.getByRole('button', {name:/Команда 1.*Включена/});
    const second = panel.getByRole('button', {name:/Команда 2.*Включена/});
    await first.waitFor();
    await second.waitFor(); // Sentinel has appended the second page.
    for (const name of ['Выключить','Включить']) {
      await panel.getByRole('button', {name:/Команда 1.*(?:Включена|Выключена)/}).click();
      await panel.getByRole('button', {name,exact:true}).click();
      await panel.getByRole('button', {name:new RegExp(`Команда 1.*${name === 'Выключить' ? 'Выключена' : 'Включена'}`)}).waitFor();
      assert.equal(await second.count(), 1, `${route}: toggling must preserve other loaded pages`);
    }
  }
  console.log('Checking mobile header opens Home Assistant menu across the shadow root');
  await page.setViewportSize({width:390,height:900});
  const routeBeforeMenu=await page.evaluate(()=>location.hash);
  await page.evaluate(()=>{
    window.haMenuEvents=[];
    document.addEventListener('hass-toggle-menu',event=>window.haMenuEvents.push({composed:event.composed,bubbles:event.bubbles}));
  });
  await panel.getByRole('button',{name:'Открыть меню Home Assistant',exact:true}).click();
  assert.deepEqual(await page.evaluate(()=>window.haMenuEvents),[{composed:true,bubbles:true}]);
  assert.equal(await page.evaluate(()=>location.hash),routeBeforeMenu,'Opening the HA menu must not navigate away');
  assert.equal(await page.evaluate(() => {
    const drawer = document.createElement('div');
    drawer.style.cssText = 'position:fixed;inset:0;z-index:1;background:white';
    document.body.append(drawer);
    const abovePanel = document.elementFromPoint(370, 40) === drawer && document.elementFromPoint(195, 850) === drawer;
    drawer.remove();
    return abovePanel;
  }), true, 'HA drawer must cover panel header and bottom navigation');
  console.log('Checking flat mobile section menu, active route and responsive layout');
  const destinations=[
    ['Основные команды','/commands/main'],['Второстепенные команды','/commands/sub'],
    ['Прямые команды','/commands/direct/main'],['Вложенные команды','/commands/direct/template'],
    ['Ответы по умолчанию','/commands/settings'],['Таймеры','/timer'],['Будильники','/alarm'],
    ['Импорт и экспорт','/downloads'],['Настройки','/settings'],
  ];
  const mobileSections=panel.getByRole('navigation',{name:'Навигация интеграции',exact:true});
  for (const width of [320,390]) {
    await page.setViewportSize({width,height:900});
    for (const [label,route] of destinations) {
      const currentRoute=await page.evaluate(()=>location.hash);
      const haButton=await panel.getByRole('button',{name:'Открыть меню Home Assistant',exact:true}).boundingBox();
      const ownButton=await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).boundingBox();
      assert(haButton.x<width/2 && ownButton.x>width/2,'HA menu is on the left, section menu on the right');
      await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
      await mobileSections.waitFor();
      assert.equal(await page.evaluate(()=>location.hash),currentRoute,'Opening the section menu must not navigate');
      assert.equal(await mobileSections.getByRole('link').count(),9);
      assert.equal(await mobileSections.getByRole('button').count(),0,'All destinations are flat links');
      for (const [name] of destinations) {
        const rect=await mobileSections.getByRole('link',{name,exact:true}).boundingBox();
        assert(rect && rect.x>=0 && rect.x+rect.width<=width,`Menu item ${name} fits at ${width}px`);
      }
      const active=mobileSections.locator('[aria-current="page"]');
      assert.equal(await active.count(),1);
      await mobileSections.getByRole('link',{name:label,exact:true}).click();
      await page.waitForFunction(route=>location.hash==='#'+route,route);
      await mobileSections.waitFor({state:'hidden'});
      await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
      assert.equal(await panel.getByRole('button',{name:'Назад',exact:true}).count(),0);
    }
  }
  await page.setViewportSize({width:390,height:900});
  await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
  await mobileSections.waitFor();
  await page.screenshot({path:'/tmp/mobile-flat-sections.png',animations:'disabled'});
  await page.setViewportSize({width:390,height:500});
  await mobileSections.getByRole('link',{name:'Настройки',exact:true}).scrollIntoViewIfNeeded();
  const menuBounds=await panel.getByRole('dialog',{name:'Разделы',exact:true}).boundingBox();
  const closeBounds=await panel.getByRole('button',{name:'Закрыть меню разделов',exact:true}).boundingBox();
  assert(menuBounds.y>=0 && menuBounds.y+menuBounds.height<=501,'Section menu fits short screens');
  assert(closeBounds.y>=0 && closeBounds.y+closeBounds.height<=500,'Menu close stays visible while scrolling');
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(()=>history.back());
  await mobileSections.waitFor({state:'hidden'});
  assert.equal(await page.evaluate(()=>location.hash),'#/settings');
  await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
  await mobileSections.waitFor();
  await page.keyboard.press('Escape');
  await mobileSections.waitFor({state:'hidden'});
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await panel.evaluate(element=>{element.hass={...window.hass,user:{is_admin:false}}});
  await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
  await mobileSections.waitFor();
  await mobileSections.getByRole('link',{name:'Импорт и экспорт',exact:true}).waitFor({state:'hidden'});
  await panel.getByRole('button',{name:'Закрыть меню разделов',exact:true}).click();
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await panel.evaluate(element=>{element.hass={...window.hass,user:{is_admin:true}}});
  await page.setViewportSize({width:390,height:900});
  console.log('Checking command edits, creates and deletes preserve loaded pages');
  for (const route of ['/commands/main','/commands/sub','/commands/direct/main']) {
    await page.evaluate(() => {
      const component = {actionType:'test',answerType:'default',endStatus:true,voiceCommands:[],voiceResponseArray:[],nextAction:[],nextDirectControl:[]};
      window.crudMode = true;
      window.crudRecords = [1,2].map(index=>({uuid:`command-${index}`,title:`Команда ${index}`,status:true,componentDialog:component,subComponentDialog:component,directControl:{mappingType:'room',valueType:'command',manual:true,subDirectControl:[{subMappingType:'_hall',subVoiceCommands:['в зале']}],voiceCommands:[]}}));
      location.hash='/timer';
    });
    await panel.getByText(/Заведен на/).waitFor();
    await page.evaluate(route=>{location.hash=route},route);
    await panel.getByRole('button',{name:/Команда 2.*Включена/}).waitFor();
    await panel.getByRole('button',{name:/Команда 1.*Включена/}).click();
    await panel.getByRole('button',{name:'Изменить',exact:true}).click();
    if (route.includes('/direct/')) {
      const nested=panel.getByRole('combobox',{name:'Вложенные команды',exact:true});
      assert.equal(await nested.inputValue(),'__inline__');
      assert.equal(await nested.locator('option:checked').textContent(),'Сохранённые вложенные команды');
      assert.equal(await panel.getByRole('checkbox',{name:'Вручную',exact:true}).count(),0);
    }
    await panel.getByLabel('Название команды',{exact:true}).fill('Изменённая команда');
    await panel.getByRole('button',{name:route.includes('/direct/')?'Сохранить':'Обновить',exact:true}).click();
    await panel.getByRole('button',{name:/Изменённая команда.*Включена/}).waitFor();
    await panel.getByRole('button',{name:/Команда 2.*Включена/}).waitFor();
    if (route.includes('/direct/')) {
      const legacy=await page.evaluate(()=>window.crudRecords[0].directControl);
      assert.equal(legacy.manual,true);
      assert.deepEqual(legacy.subDirectControl,[{subMappingType:'_hall',subVoiceCommands:['в зале']}]);
      await panel.getByRole('button',{name:/Изменённая команда.*Включена/}).click();
      await panel.getByRole('button',{name:'Изменить',exact:true}).click();
      await panel.getByRole('combobox',{name:'Вложенные команды',exact:true}).selectOption('template-1');
      await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
      await panel.getByRole('button',{name:/Изменённая команда.*Включена/}).waitFor();
      const linked=await page.evaluate(()=>window.crudRecords[0].directControl);
      assert.equal(linked.manual,false);
      assert.equal(linked.subDirectControl,'template-1');
      assert.equal(linked.subDirectControlTitle,'Шаблон комнат');
    }
    await panel.getByRole('button',{name:/Изменённая команда.*Включена/}).click();
    await panel.getByRole('button',{name:'Удалить',exact:true}).click();
    await panel.getByRole('button',{name:/Изменённая команда.*Включена/}).waitFor({state:'hidden'});
    await panel.getByRole('button',{name:/Команда 2.*Включена/}).waitFor();
    await panel.getByRole('button',{name:'Добавить сценарий',exact:true}).press('Enter');
    await panel.getByLabel('Название команды',{exact:true}).fill('   ');
    await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
    assert.equal(await panel.getByLabel('Название команды',{exact:true}).getAttribute('aria-invalid'), 'true');
    if (!route.includes('/direct/')) {
      assert.equal(await panel.getByLabel('Тип действия',{exact:true}).count(), 0);
    }
    await panel.getByLabel('Название команды',{exact:true}).fill('Новая команда');
    await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
    await panel.getByRole('button',{name:/Новая команда.*Включена/}).waitFor();
    await panel.getByRole('button',{name:/Команда 2.*Включена/}).waitFor();
  }
  await page.setViewportSize({width:1100,height:900});
  await page.evaluate(()=>{location.hash='/timer'});
  await panel.getByText(/Заведен на/).waitFor();
  await page.evaluate(()=>{window.crudRecords[1].componentDialog=window.crudRecords[0].componentDialog;location.hash='/commands/main'});
  await panel.getByRole('button',{name:'Страница 2',exact:true}).click();
  await panel.getByRole('button',{name:/Новая команда.*Включена/}).click();
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  await panel.getByLabel('Название команды',{exact:true}).fill('Изменено на второй странице');
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await panel.getByRole('button',{name:/Изменено на второй странице/}).waitFor();
  assert.equal(await panel.getByRole('button',{name:'Страница 2',exact:true}).getAttribute('aria-current'),'page');
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(()=>{window.crudMode=false;window.apiRequests=[]});
  await page.evaluate(()=>{window.settingEditorFixture=true;location.hash='/commands/settings'});
  await panel.getByRole('button',{name:/Встроенный ответ/}).click();
  const fixedTitle = panel.getByLabel('Название команды',{exact:true});
  assert.equal(await fixedTitle.getAttribute('readonly'), '');
  assert.equal(await panel.getByLabel('Тип действия',{exact:true}).count(), 0);
  assert.equal(await panel.getByRole('checkbox',{name:'Передать команду серверу',exact:true}).count(),0);
  const responseMessage = panel.getByLabel('Ответное сообщение',{exact:true});
  assert.equal(await responseMessage.evaluate(el=>el.tagName), 'TEXTAREA');
  assert.equal(await responseMessage.getAttribute('rows'), '8');
  await responseMessage.fill('Многострочный ответ\nВторая строка');
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await page.evaluate(()=>{window.settingEditorType='default_main'});
  await panel.getByRole('button',{name:/Встроенный ответ/}).click();
  await panel.getByRole('checkbox',{name:'Передать команду серверу',exact:true}).waitFor();
  const fallbackScript=panel.getByRole('combobox',{name:'Скрипт Home Assistant',exact:true});
  assert.equal(await fallbackScript.count(),0);
  await panel.getByText('Передать команду серверу',{exact:true}).click();
  await fallbackScript.selectOption('script.bound');
  await panel.getByText('Передать команду серверу',{exact:true}).click();
  assert.equal(await fallbackScript.count(),0);
  await panel.getByText('Передать команду серверу',{exact:true}).click();
  assert.equal(await fallbackScript.inputValue(),'script.bound');
  const successType=panel.getByLabel('Тип результата скрипта',{exact:true});
  assert.equal(await successType.inputValue(),'success');
  assert.equal(await successType.getAttribute('readonly'),'');
  const successText=panel.getByLabel('Текст озвучки',{exact:true});
  await successText.fill('Ответ: ${reply}');
  await panel.getByRole('button',{name:'Подсказка: Текст озвучки',exact:true}).click();
  const speechHelp=panel.getByRole('dialog',{name:'Текст озвучки',exact:true});
  await speechHelp.waitFor();
  assert((await speechHelp.textContent()).includes('${reply}'));
  assert((await speechHelp.textContent()).includes('variables'));
  await speechHelp.getByRole('button',{name:'Закрыть подсказку',exact:true}).click();
  await speechHelp.waitFor({state:'hidden'});
  await panel.getByText('Передать команду серверу',{exact:true}).click();
  assert.equal(await successText.count(),0);
  assert.equal(await responseMessage.inputValue(),'Ответ по умолчанию');
  await panel.getByText('Передать команду серверу',{exact:true}).click();
  assert.equal(await successText.inputValue(),'Ответ: ${reply}');
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await page.waitForFunction(()=>window.savedSetting?.script_entity_id==='script.bound');
  await panel.getByRole('button',{name:'Обновить',exact:true}).waitFor({state:'hidden'});
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await panel.getByRole('button',{name:/Встроенный ответ/}).click();
  await fallbackScript.waitFor();
  assert.equal(await fallbackScript.inputValue(),'script.bound');
  assert.equal(await panel.getByLabel('Текст озвучки',{exact:true}).inputValue(),'Ответ: ${reply}');
  assert.equal(await page.evaluate(()=>window.savedSetting.voiceResponseArray[0].actionType),'success');
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await page.evaluate(()=>{window.settingEditorFixture=false;window.settingEditorType=null});
  // Templates have no enabled status: expose only edit/delete and never call the command status API.
  for (const width of [390,1100]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(() => { location.hash = '/commands/direct/template'; window.deletedTemplate = null; });
    const templateCard = panel.getByRole('button', {name:/^Шаблон комнат/});
    await templateCard.waitFor();
    const titleAlignment=await templateCard.evaluate(card=>{
      const title=card.firstElementChild.firstElementChild;
      const cardBounds=card.getBoundingClientRect(), titleBounds=title.getBoundingClientRect();
      return {align:getComputedStyle(card).textAlign,left:titleBounds.left-cardBounds.left,
        centerDifference:Math.abs(titleBounds.top+titleBounds.height/2-cardBounds.top-cardBounds.height/2)};
    });
    assert.equal(titleAlignment.align,'left');
    assert(titleAlignment.left>=18 && titleAlignment.left<=22);
    assert(titleAlignment.centerDifference<1,'Title-only cards must be centered vertically');
    await templateCard.click();
    assert.equal(await panel.getByRole('button', {name:/^(Включить|Выключить)$/}).count(), 0);
    await panel.getByRole('button', {name:'Изменить',exact:true}).click();
    await panel.getByRole('heading', {name:'Редактировать',exact:true}).waitFor();
    assert.equal(await panel.getByLabel('Название команды',{exact:true}).inputValue(), 'Шаблон комнат');
    await panel.getByRole('button', {name:'✕',exact:true}).click();
    await templateCard.click();
    await panel.getByRole('button', {name:'Удалить',exact:true}).click();
    await page.waitForFunction(() => window.deletedTemplate === 'template-1');
    const addTemplate = panel.getByRole('button',{name:width === 390 ? 'Добавить сценарий' : '🞢 Добавить сценарий',exact:true});
    await addTemplate.press('Enter');
    await panel.getByLabel('Название команды',{exact:true}).fill('Новый шаблон');
    await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
    await page.waitForFunction(()=>window.createdTemplate?.title==='Новый шаблон');
    const createdTemplate = await page.evaluate(()=>window.createdTemplate);
    assert.deepEqual(createdTemplate.subDirectControl,[]);
    assert.equal(createdTemplate.status,true);
    assert.equal('directTemplate' in createdTemplate,false);
    await page.evaluate(()=>{window.createdTemplate=null});

    assert.equal(await page.evaluate(() => window.apiRequests.includes('ha_dialog_ui/update_assistant_sub_direct_control')), false);
    await page.evaluate(() => { location.hash = '/timer'; });
    await panel.getByText(/Заведен на/).waitFor();
  }
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(() => { location.hash = '/scripts'; });
  await panel.getByRole('button', {name:/Настройки.*Нажмите/}).click();
  await panel.getByRole('button', {name:'Изменить',exact:true}).click();
  await panel.getByRole('button', {name:/Условие 1/}).click();
  const search = panel.getByPlaceholder('Начните вводить title или uuid').nth(1);
  await search.fill('зап');
  await panel.getByRole('listbox').waitFor();
  for (const height of [900,500]) {
    await page.setViewportSize({width:390,height});
    await search.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
    const box = await panel.getByRole('listbox').boundingBox();
    assert(box.x >= 0 && box.x+box.width <= 390 && box.y >= 0 && box.y+box.height <= height+1, JSON.stringify({height,box}));
    const visible = await panel.getByRole('listbox').getByRole('option').first().evaluate(el => {
      const r = el.getBoundingClientRect();
      const hit = el.getRootNode().elementFromPoint(r.left+5,r.top+5);
      return {visible:el.contains(hit),rect:r.toJSON(),hit:hit?.outerHTML.slice(0,300),parent:el.parentElement.parentElement.className};
    });
    assert(visible.visible, JSON.stringify({height,...visible}));
  }
  await panel.getByRole('listbox').getByRole('option').first().click();
  assert.equal(await search.inputValue(), 'selected_0');
  await panel.getByRole('button', {name:'✕',exact:true}).click();
  await page.evaluate(() => { window.bugFixtures = false; });
  console.log('Checking admin-only downloads and JSON upload');
  await page.setViewportSize({width:1100,height:900});
  await page.evaluate(() => { location.hash = '/settings'; });
  await themeSelect.waitFor();
  assert.equal(await panel.getByRole('button', {name:'Скачать настройки',exact:true}).count(), 0);
  await panel.getByRole('link', {name:'Импорт и экспорт',exact:true}).click();
  await panel.getByRole('button', {name:'Скачать настройки',exact:true}).waitFor();
  const downloadEvent = page.waitForEvent('download');
  await panel.getByRole('button', {name:'Скачать настройки',exact:true}).click();
  assert.equal((await downloadEvent).suggestedFilename(), 'ha-dialog-ui-settings.json');
  await panel.locator('input[type="file"]').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('broken')});
  await panel.getByRole('alert').filter({hasText:'Некорректный JSON-файл.'}).waitFor();
  const fileChooserEvent = page.waitForEvent('filechooser');
  await panel.getByRole('button', {name:'Загрузить настройки',exact:true}).click();
  await (await fileChooserEvent).setFiles({name:'settings.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({theme:'dark'}))});
  await panel.getByRole('status').filter({hasText:'Данные загружены.'}).waitFor();
  const scenariosDownloadEvent = page.waitForEvent('download');
  await panel.getByRole('button', {name:'Скачать сценарии',exact:true}).click();
  const scenariosDownload = await scenariosDownloadEvent;
  assert.equal(scenariosDownload.suggestedFilename(), 'ha-dialog-ui-scenarios.json');
  const scenariosJson = await readFile(await scenariosDownload.path(), 'utf8');
  assert.deepEqual(Object.keys(JSON.parse(scenariosJson)).sort(), ['commands','direct_commands','format','settings','sub_commands','templates','version']);
  const scenariosChooserEvent = page.waitForEvent('filechooser');
  await panel.getByRole('button', {name:'Загрузить сценарии',exact:true}).click();
  await (await scenariosChooserEvent).setFiles({name:'scenarios.json',mimeType:'application/json',buffer:Buffer.from(scenariosJson)});
  await page.waitForFunction(() => window.importedCommands?.format === 'ha-dialog-ui-commands');
  await panel.getByRole('status').filter({hasText:'Данные загружены.'}).waitFor();

  for (const width of [320,1100]) {
    await page.setViewportSize({width,height:900});
    const upload = await panel.getByRole('button', {name:'Загрузить настройки',exact:true}).boundingBox();
    assert(upload.x >= 0 && upload.x + upload.width <= width);
  }
  await panel.evaluate(element => { element.hass = {...window.hass, user:{is_admin:false}}; });
  await page.waitForFunction(() => location.hash === '#/commands/main');
  assert.equal(await panel.getByRole('link', {name:'Импорт и экспорт',exact:true}).count(), 0);
  await page.evaluate(() => { location.hash = '/downloads'; });
  await page.waitForFunction(() => location.hash === '#/commands/main');
  await panel.evaluate(element => { element.hass = {...window.hass, user:{is_admin:true}}; });
  await panel.getByRole('link', {name:'Импорт и экспорт',exact:true}).waitFor();
  console.log('Checking compact pages, visible settings sections and mobile actions');
  const compactPages = [
    ['/commands/main', 'Основные команды', 'Задайте фразы, с которых начинается диалог,'],
    ['/commands/sub', 'Второстепенные команды', 'Настройте команды для следующего шага диалога.'],
    ['/commands/direct/main', 'Прямые команды', 'Опишите значения, которые ассистент должен распознавать'],
    ['/commands/direct/template', 'Вложенные команды', 'Соберите набор значений и вариантов произношения,'],
    ['/commands/settings', 'Ответы по умолчанию', 'Изменяйте встроенные ответы для случаев,'],
    ['/timer', 'Таймеры', 'Задайте длительность и выберите колонку для сигнала.'],
    ['/alarm', 'Будильники', 'Выберите время, дни повтора и колонку для сигнала.'],
    ['/settings', 'Настройки', 'Настройте язык, тему, подключение к удалённому серверу'],
    ['/downloads', 'Импорт и экспорт', 'Скачайте JSON-файл для сохранения или переноса данных.'],
  ];
  for (const width of [320,390,1100]) {
    await page.setViewportSize({width,height:900});
    for (const [route, title, description] of compactPages) {
      await page.evaluate(route => { location.hash = route; }, route);
      await panel.getByRole('heading',{name:title,exact:true}).last().waitFor();
      assert.equal(await panel.getByText(description,{exact:false}).count(),0);
      const overflow = await panel.locator('.appShell').evaluate(el => el.scrollWidth > el.clientWidth+1);
      assert.equal(overflow, false, `${route}: section layout overflows at ${width}px`);
      if (route.startsWith('/commands/') && route!=='/commands/settings') {
        const search=panel.getByRole('searchbox',{name:'Поиск по названию',exact:true});
        assert(await search.evaluate(input=>Boolean(input.closest('header')?.querySelector('h1')) || Boolean(input.parentElement.parentElement.querySelector('h1'))),'Search belongs to the section header');
        const bounds=await search.boundingBox();
        assert(bounds.x>=0 && bounds.x+bounds.width<=width,'Header search must fit the viewport');
      }
      if (width<769 && ['/timer','/alarm','/settings','/downloads'].includes(route)) assert.equal(await panel.getByRole('button',{name:'Назад',exact:true}).count(),0);
      if (route==='/settings' || route==='/commands/settings') assert.equal(await panel.getByRole('searchbox').count(),0);
      if (route==='/settings') {
        await panel.getByRole('region',{name:'Общие',exact:true}).waitFor();
        await panel.getByRole('region',{name:'Таймеры и будильники',exact:true}).waitFor();
        assert.equal(await panel.getByRole('region').locator('[aria-expanded]:not([aria-haspopup="dialog"])').count(),0);
        const save = panel.getByRole('button',{name:'Сохранить',exact:true});
        assert.equal(await save.count(),0);
        await panel.getByLabel('Идентификатор клиента',{exact:true}).fill('changed-client');
        await save.waitFor();
        if (width<769) {
          await page.evaluate(()=>window.scrollTo(0,0));
          assert(await save.evaluate(button=>{
            const rect=button.getBoundingClientRect();
            return rect.width>0 && rect.top>=0 && rect.bottom<=innerHeight && button.getRootNode().elementFromPoint(rect.x+rect.width/2,rect.y+rect.height/2)===button;
          }),'Settings save must be visible and clickable after editing');
        }
      }
      if (route==='/downloads') {
        assert.equal(await panel.getByRole('heading',{name:'Запуск скриптов',exact:true}).count(),0);
        assert.equal(await panel.getByRole('button',{name:'Скачать скрипты',exact:true}).count(),0);
        for (const name of ['Скачать настройки','Загрузить настройки']) {
          const control=panel.getByRole('button',{name,exact:true});
          await control.scrollIntoViewIfNeeded();
          const rect=await control.boundingBox();
          assert(rect && rect.x>=0 && rect.x+rect.width<=width,`${name} must fit at ${width}px`);
        }
      }
    }
  }
  await page.evaluate(() => { location.hash = '/settings'; });
  await panel.locator('select').filter({has:page.locator('option[value="en"]')}).selectOption('en');
  await page.evaluate(() => { location.hash = '/scripts'; });
  await panel.getByRole('heading', {name:'Script triggers',exact:true}).last().waitFor();
  await panel.getByText('Link a recognized command to a Home Assistant script.', {exact:false}).waitFor();
  await page.evaluate(() => { location.hash = '/settings'; });
  await panel.locator('select').filter({has:page.locator('option[value="ru"]')}).selectOption('ru');
  console.log('Checking recoverable API errors and preserved form drafts');
  await page.setViewportSize({width:1100,height:1000});
  await page.evaluate(()=>{window.apiFailures={get_assistant_commands_short:'timeout'};window.apiRequests=[];window.bugFixtures=true;window.errorFixtures=true;location.hash='/commands/main'});
  await panel.getByRole('alert').filter({hasText:'Home Assistant не ответил вовремя.'}).waitFor();
  await page.waitForTimeout(350);
  assert.equal(await page.evaluate(()=>window.apiRequests.filter(type=>type.endsWith('/get_assistant_commands_short')).length),1,'Failed reads must not trigger an infinite retry loop');
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  const commandOne = panel.getByRole('button',{name:/Команда 1.*Включена/});
  await commandOne.waitFor();
  await page.evaluate(()=>{window.apiFailures={get_assistant_command:'not_found'}});
  await commandOne.click();
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  await panel.getByRole('alert').filter({hasText:'Запись больше не существует.'}).waitFor();
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  const draftInput = panel.getByLabel('Название команды',{exact:true});
  await draftInput.fill('Несохранённый черновик');
  await page.evaluate(()=>{window.apiRequests=[];window.apiFailures={update_assistant_command:'unauthorized'}});
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await panel.getByRole('alert').filter({hasText:'Недостаточно прав.'}).waitFor();
  assert.equal(await draftInput.inputValue(),'Несохранённый черновик');
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  await panel.getByRole('alert').waitFor({state:'hidden'});
  assert.equal(await page.evaluate(()=>window.apiRequests.filter(type=>type.endsWith('/update_assistant_command')).length),1,'Retry must reload data without resending a mutation');
  assert.equal(await draftInput.inputValue(),'Несохранённый черновик');
  await page.evaluate(()=>{window.apiFailures={update_assistant_command:'reload_failed'}});
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await panel.getByRole('alert').filter({hasText:'Данные сохранены, но не удалось обновить интеграцию.'}).waitFor();
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.evaluate(()=>{window.apiFailures={get_timer_requests_short:'connection_lost'};location.hash='/timer'});
  await panel.getByRole('alert').filter({hasText:'Соединение с Home Assistant потеряно.'}).waitFor();
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  await panel.getByText(/Заведен на/).waitFor();
  await page.evaluate(()=>{location.hash='/scripts'});
  await panel.getByRole('button',{name:/Настройки.*Нажмите/}).click();
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  await panel.getByRole('button',{name:/Условие 1/}).click();
  await page.evaluate(()=>{window.apiFailures={search_assistant_sub_commands:'timeout'}});
  const failedSearch = panel.getByPlaceholder('Начните вводить title или uuid').nth(1);
  await failedSearch.fill('зап');
  await panel.getByRole('alert').filter({hasText:'Home Assistant не ответил вовремя.'}).waitFor();
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  await panel.getByRole('listbox').waitFor();
  await panel.getByRole('listbox').getByRole('option').first().click();
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.evaluate(()=>{window.bugFixtures=false;window.errorFixtures=false;window.apiFailures={get_settings:'connection_lost'};location.hash='/settings'});
  await panel.evaluate(element=>{element.remove()});
  await page.evaluate(()=>{const element=document.createElement('ha-dialog-ui-panel');element.hass=window.hass;document.body.appendChild(element)});
  await panel.getByRole('alert').filter({hasText:'Соединение с Home Assistant потеряно.'}).waitFor();
  assert.equal(await panel.getByRole('alert').count(),1,'Initial setup failure should show one recovery message');
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  await themeSelect.waitFor();
  await page.evaluate(()=>{window.apiFailures={'media_source/browse_media':'connection_lost',browse_media:'connection_lost'};location.hash='/timer'});
  await panel.getByText('Нет запущенных таймеров.',{exact:true}).waitFor();
  await page.evaluate(()=>{location.hash='/settings'});
  await panel.getByRole('alert').filter({hasText:'Соединение с Home Assistant потеряно.'}).waitFor();
  await page.evaluate(()=>{window.apiFailures={}});
  await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
  await panel.getByRole('alert').waitFor({state:'hidden'});
  console.log('Checking shared palette for fields, focus and API errors');
  for (const theme of ['dark','light']) {
    await page.evaluate(theme=>{
      document.querySelector('ha-dialog-ui-panel').style.setProperty('--primary-color','#00897b');
      window.dispatchEvent(new CustomEvent('ha-dialog-ui-theme-change',{detail:theme}));
      location.hash='/commands/main';
    },theme);
    await panel.getByRole('button',{name:'🞢 Добавить сценарий',exact:true}).click();
    const titleField = panel.getByLabel('Название команды',{exact:true});
    await titleField.focus();
    await page.waitForFunction(()=>{
      const input=document.querySelector('ha-dialog-ui-panel').shadowRoot.querySelector('input:focus');
      return input && getComputedStyle(input).borderTopColor==='rgb(0, 137, 123)';
    });
    const palette = await titleField.evaluate(input=>({
      text:getComputedStyle(input).color,
      focus:getComputedStyle(input).borderTopColor,
      textarea:getComputedStyle(input.getRootNode().querySelector('textarea')).color,
    }));
    assert.equal(palette.focus,'rgb(0, 137, 123)');
    assert.equal(palette.text, theme === 'dark' ? 'rgb(225, 225, 225)' : 'rgb(33, 33, 33)');
    assert.equal(palette.text,palette.textarea);
    await panel.getByRole('button',{name:'✕',exact:true}).click();
    await page.evaluate(()=>{location.hash='/timer'});
    await panel.getByText('Нет запущенных таймеров.',{exact:true}).waitFor();
    await page.evaluate(()=>{window.apiFailures={get_assistant_commands_short:'unauthorized'};location.hash='/commands/main'});
    const error = panel.getByRole('alert');
    await error.waitFor();
    const errorPalette = await error.evaluate(el=>({border:getComputedStyle(el).borderTopColor,text:getComputedStyle(el).color}));
    assert.equal(errorPalette.border,theme==='dark'?'rgb(242, 139, 130)':'rgb(179, 38, 30)');
    assert.equal(errorPalette.text,palette.text);
    await page.evaluate(()=>{window.apiFailures={}});
    await panel.getByRole('button',{name:'Повторить загрузку',exact:true}).click();
    await error.waitFor({state:'hidden'});
  }
  assert.deepEqual(errors, []);
  console.log('Checking list skeletons stay below mobile header and preserve pagination position');
  await page.evaluate(()=>{location.hash='/settings'});
  await themeSelect.waitFor();
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(()=>{window.scrollTo(0,0);window.pauseCommandList=true;window.bugFixtures=true;window.crudMode=false;location.hash='/commands/main'});
  const pageLoader = panel.getByRole('status').filter({hasText:'Загрузка...'});
  await pageLoader.waitFor();
  const headerBefore = await panel.locator('header').boundingBox();
  const loaderBounds = await pageLoader.boundingBox();
  assert(headerBefore && headerBefore.y>=0 && headerBefore.y<=16,`Loading must not push the mobile header down: ${JSON.stringify(headerBefore)}`);
  assert(loaderBounds && loaderBounds.y>=headerBefore.y+headerBefore.height,'Loader belongs to page content');
  await page.evaluate(()=>{window.pauseCommandList=false;window.releaseCommandList()});
  await pageLoader.waitFor({state:'hidden'});
  const headerAfter = await panel.locator('header').boundingBox();
  assert.equal(headerAfter.y,headerBefore.y);
  await page.setViewportSize({width:1100,height:900});
  await page.evaluate(()=>{location.hash='/settings'});
  await themeSelect.waitFor();
  await page.evaluate(()=>{location.hash='/commands/main'});
  await panel.getByRole('button',{name:/Команда 1.*Включена/}).waitFor();
  const paginationBefore = await panel.getByRole('navigation',{name:'Страницы списка',exact:true}).boundingBox();
  await page.evaluate(()=>{window.pauseCommandList=true});
  await panel.getByRole('button',{name:'Страница 2',exact:true}).click();
  await pageLoader.waitFor();
  assert.equal(await panel.getByRole('button',{name:/Команда 1.*Включена/}).count(),0,'Old page cards must not remain interactive during replacement');
  const paginationDuring = await panel.getByRole('navigation',{name:'Страницы списка',exact:true}).boundingBox();
  assert(Math.abs(paginationBefore.y-paginationDuring.y)<1,'Skeletons must preserve the current list height');
  await page.evaluate(()=>{window.pauseCommandList=false;window.releaseCommandList()});
  await pageLoader.waitFor({state:'hidden'});
  await panel.getByRole('button',{name:/Команда 2.*Включена/}).waitFor();
  const paginationAfter = await panel.getByRole('navigation',{name:'Страницы списка',exact:true}).boundingBox();
  assert(Math.abs(paginationBefore.y-paginationAfter.y)<1,'Equal-sized pages must not shift pagination');
  console.log('Checking compact command form, logic tabs and saved links');
  await page.evaluate(()=>{location.hash='/settings'});
  await themeSelect.waitFor();
  await page.evaluate(()=>{window.bugFixtures=true;window.errorFixtures=false;window.crudMode=false;window.namedCommandFixtures=true;location.hash='/commands/main'});
  for (const width of [320,390,1100]) {
    await page.setViewportSize({width,height:900});
    await panel.getByRole('button',{name:/Команда \d+.*(?:Включена|Выключена)/}).first().click();
    await panel.getByRole('button',{name:'Изменить',exact:true}).click();
    assert.equal(await panel.getByRole('tablist').count(),0);
    assert.equal(await panel.getByLabel('Тип действия',{exact:true}).count(), 0);
    const commandScript = panel.locator('select').filter({hasText:'Управление светом'});
    await commandScript.selectOption('script.bound');
    const responseSection = panel.getByRole('region',{name:'Ответы',exact:true});
    await responseSection.waitFor();
    const sourceHelp = panel.getByRole('button',{name:'Подсказка: Источник ответа',exact:true});
    if (width<768) {
      await sourceHelp.click();
      const sheet=panel.getByRole('dialog',{name:'Источник ответа',exact:true});
      await sheet.waitFor();
      assert((await sheet.textContent()).includes('возвращающее тип результата'));
      const bounds=await sheet.boundingBox();
      assert(bounds.x>=0 && bounds.x+bounds.width<=width+1, 'Help sheet fits mobile viewport');
      await page.keyboard.press('Escape');
      await sheet.waitFor({state:'hidden'});
      await panel.getByRole('heading',{name:'Редактировать',exact:true}).waitFor();
      assert.equal(await sourceHelp.getAttribute('aria-expanded'),'false');
      assert(await sourceHelp.evaluate(el=>el.getRootNode().activeElement===el), 'Closing help restores focus');
      await panel.getByRole('button',{name:'Подсказка: Фразы для запуска',exact:true}).click();
      const phrasesHelp=panel.getByRole('dialog',{name:'Фразы для запуска',exact:true});
      assert((await phrasesHelp.textContent()).includes('точку с запятой (;)'));
      assert((await phrasesHelp.textContent()).includes('свет(а|у|ом)?'));
      if (width===390) await page.screenshot({path:'/tmp/dialog-field-help-mobile.png',animations:'disabled'});
      await phrasesHelp.getByRole('button',{name:'Закрыть подсказку',exact:true}).click();
      await phrasesHelp.waitFor({state:'hidden'});
    } else {
      await sourceHelp.hover();
      const tooltip=panel.getByRole('tooltip');
      await tooltip.waitFor();
      assert((await tooltip.textContent()).includes('Ответ из списка фраз'));
      const bounds=await tooltip.boundingBox();
      assert(bounds.x>=0 && bounds.y>=0 && bounds.x+bounds.width<=width && bounds.y+bounds.height<=900, 'Tooltip stays inside viewport');
      await page.screenshot({path:'/tmp/dialog-field-help-desktop.png',animations:'disabled'});
      await page.keyboard.press('Escape');
      await tooltip.waitFor({state:'hidden'});
      await panel.getByRole('heading',{name:'Редактировать',exact:true}).waitFor();
    }

    const labels = await panel.locator('label').allTextContents();
    const orderedLabels = ['Название команды','Источник ответа','Скрипт Home Assistant','Фразы для запуска'];
    const positions = orderedLabels.map(label=>labels.indexOf(label));
    assert(positions.every((position,index)=>position>=0 && (index===0 || position>positions[index-1])), 'Main fields must follow the requested order');
    if (await responseSection.locator('textarea').count()===0) {
      await responseSection.getByRole('button',{name:'Добавить ещё',exact:true}).click();
    }
    await responseSection.locator('textarea').first().fill('Ответ проверки');
    if (width===390) {
      for(let index=0;index<6;index++) await responseSection.getByRole('button',{name:'Добавить ещё',exact:true}).click();
      await responseSection.locator('textarea').last().fill('Дополнительный ответ');
      const logicButton=panel.getByRole('button',{name:'Настроить логику',exact:true});
      const saveButton=panel.getByRole('button',{name:'Обновить',exact:true});
      const logicBounds=await logicButton.boundingBox();
      const saveBounds=await saveButton.boundingBox();
      assert(logicBounds.y>=0 && logicBounds.y+logicBounds.height<=900, 'Logic button stays visible with many responses');
      assert(saveBounds.y>=0 && saveBounds.y+saveBounds.height<=900, 'Save button stays visible with many responses');
      assert(Math.abs(logicBounds.y-saveBounds.y)<1, 'Logic and save actions share the fixed footer');
      await page.screenshot({path:'/tmp/dialog-editor-main.png'});
    }
    if (width===1100) {
      await panel.getByRole('button',{name:'Подсказка: Текст ответа',exact:true}).first().hover();
      const responseHelp=panel.getByRole('tooltip');
      await responseHelp.waitFor();
      assert((await responseHelp.textContent()).includes('${temperature}'));
      assert((await responseHelp.textContent()).includes('variables'));
      await page.keyboard.press('Escape');
      await responseHelp.waitFor({state:'hidden'});
    }
    const responseMode = panel.getByRole('combobox',{name:'Типы ответов',exact:true}).first();
    if (width===390) {
      assert.equal(await responseMode.inputValue(),'custom');
      assert.equal(await panel.getByLabel('Тип результата скрипта',{exact:true}).first().inputValue(),'room_required');
    }
    if (width===1100) assert.equal(await responseMode.inputValue(),'default_next_step');
    await responseMode.selectOption('default_next_step');
    assert.equal(await panel.getByLabel('Тип результата скрипта',{exact:true}).count(),0);
    await responseMode.selectOption('custom');
    await panel.getByLabel('Тип результата скрипта',{exact:true}).first().fill('room_required');
    await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
    await panel.getByRole('tab',{name:'Прямые команды',exact:true}).waitFor();
    assert.equal(await panel.getByRole('tab',{name:'Ответы',exact:true}).count(),0);
    await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
    assert.equal(await responseMode.inputValue(),'custom');
    assert.equal(await panel.getByLabel('Тип результата скрипта',{exact:true}).first().inputValue(),'room_required');
    const storedType = width===320 ? 'room_required' : width===390 ? 'default_next_step' : 'default';
    await responseMode.selectOption(width===320 ? 'custom' : storedType);
    if (width===320) await panel.getByLabel('Тип результата скрипта',{exact:true}).first().fill(storedType);
    await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
    await panel.getByRole('tab',{name:'Прямые команды',exact:true}).click();
    if (width===320) {
      const directPanel=panel.getByRole('tabpanel');
      const beforeCount=await directPanel.getByLabel('Название переменной',{exact:true}).count();
      await directPanel.getByRole('button',{name:'Добавить ещё',exact:true}).click();
      assert.equal(await directPanel.getByLabel('Название переменной',{exact:true}).count(),beforeCount, 'Variable field is hidden until a command is selected');
      await directPanel.getByRole('combobox',{name:'Команда',exact:true}).last().selectOption('option-7');
      await page.waitForFunction(()=>[...document.querySelector('ha-dialog-ui-panel').shadowRoot.querySelectorAll('input')].some(el=>el.readOnly && el.value==='room'));
      assert.equal(await directPanel.getByLabel('Название переменной',{exact:true}).last().inputValue(),'room');
      await directPanel.getByRole('button',{name:'Подсказка: Название переменной',exact:true}).last().click();
      const variableHelp=panel.getByRole('dialog',{name:'Название переменной',exact:true});
      assert((await variableHelp.textContent()).includes('${room}'));
      await variableHelp.getByRole('button',{name:'Закрыть подсказку',exact:true}).click();
      await directPanel.getByRole('button',{name:'Удалить',exact:true}).last().click();
    }
    const linkedField = panel.getByRole('combobox',{name:'Команда',exact:true});
    await linkedField.selectOption('option-1');
    assert.equal(await linkedField.locator('option:checked').textContent(),'Запустить команду 1');
    assert.equal(await linkedField.locator('option[value="option-7"]').count(),1);
    await panel.getByRole('tab',{name:'Продолжения',exact:true}).click();
    const continuationKind=panel.getByLabel('Вид продолжения',{exact:true}).first();
    assert.equal(await continuationKind.locator('option[value="custom"]').textContent(),'По типу ответа скрипта');
    await continuationKind.selectOption('custom');
    const resultType=panel.getByLabel('Тип результата скрипта',{exact:true});
    assert.equal(await resultType.getAttribute('placeholder'),'Например, room_required');
    assert.equal(await panel.getByLabel('Тип действия',{exact:true}).count(),0);
    await resultType.fill('room_required');
    await continuationKind.selectOption('children');
    await linkedField.selectOption('option-2');
    assert.equal(await linkedField.locator('option:checked').textContent(),'Запустить команду 2');
    const overflow = await panel.getByRole('tablist').evaluate(element=>element.scrollWidth-element.clientWidth);
    assert(overflow<=1,'Logic tabs must fit on mobile');
    if (width===390) await page.screenshot({path:'/tmp/dialog-editor-logic.png'});
    await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
    assert.equal(await responseSection.locator('textarea').first().inputValue(),'Ответ проверки');
    assert.equal(await commandScript.inputValue(),'script.bound');
    assert.equal(await panel.getByRole('tablist').count(),0);
    await panel.getByRole('button',{name:'Обновить',exact:true}).click();
    await page.waitForFunction(expected=>window.savedNamedCommand?.componentDialog?.nextAction?.[0]?.uuid==='option-2' && window.savedNamedCommand?.componentDialog?.voiceResponseArray?.[0]?.actionType===expected,storedType);
    const saved = await page.evaluate(()=>window.savedNamedCommand.componentDialog);
    assert.equal(saved.nextDirectControl[0].uuid,'option-1');
    assert.equal(saved.script_entity_id,'script.bound');
    assert.equal(saved.voiceResponseArray[0].voiceResponse,'Ответ проверки');
    assert.equal(saved.voiceResponseArray[0].actionType,storedType);
  }
  await panel.getByRole('button',{name:/Команда \d+.*(?:Включена|Выключена)/}).first().click();
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  assert.equal(await panel.getByRole('tablist').count(),0,'Reopening starts at the main form');
  await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
  await panel.getByRole('tab',{name:'Продолжения',exact:true}).click();
  assert.equal(await panel.getByRole('combobox',{name:'Команда',exact:true}).inputValue(),'option-2');
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  console.log('Checking forward-text mode beside trigger phrases');
  await page.setViewportSize({width:390,height:900});
  await page.evaluate(()=>{location.hash='/commands/sub'});
  await panel.getByRole('button',{name:/Запустить команду 0.*Включена/}).click();
  await panel.getByRole('button',{name:'Изменить',exact:true}).click();
  const forwardSwitch=panel.getByRole('checkbox',{name:'Отправить команду как есть',exact:true});
  const triggerPhrases=panel.getByLabel('Фразы для запуска',{exact:true});
  await triggerPhrases.fill('тестовая фраза; другая фраза');
  await panel.getByText('Отправить команду как есть',{exact:true}).click();
  assert(await forwardSwitch.isChecked());
  assert.equal(await triggerPhrases.count(),0);
  await panel.getByRole('button',{name:'Подсказка: Отправить команду как есть',exact:true}).click();
  const forwardHelp=panel.getByRole('dialog',{name:'Отправить команду как есть',exact:true});
  assert((await forwardHelp.textContent()).includes('без сравнения с фразами запуска'));
  await forwardHelp.getByRole('button',{name:'Закрыть подсказку',exact:true}).click();
  await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
  assert.equal(await panel.getByRole('tab',{name:'Прямые команды',exact:true}).count(),0);
  assert.equal(await panel.getByRole('checkbox',{name:'Отправить команду как есть',exact:true}).count(),0);
  assert.equal(await panel.getByText('Изменения сохранятся вместе с командой.',{exact:true}).count(),0);
  await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
  await panel.getByText('Отправить команду как есть',{exact:true}).click();
  assert.equal(await forwardSwitch.isChecked(),false);
  assert.equal(await triggerPhrases.inputValue(),'тестовая фраза; другая фраза');
  await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
  await panel.getByRole('tab',{name:'Прямые команды',exact:true}).click();
  assert.equal(await panel.getByRole('combobox',{name:'Команда',exact:true}).inputValue(),'option-1');
  await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
  await panel.getByText('Отправить команду как есть',{exact:true}).click();
  await panel.getByRole('button',{name:'Обновить',exact:true}).click();
  await page.waitForFunction(()=>window.savedNamedSub?.subComponentDialog?.forwardText===true);
  assert.equal(await page.evaluate(()=>window.savedNamedSub.subComponentDialog.nextDirectControl[0].uuid),'option-1');
  assert.deepEqual(await page.evaluate(()=>window.savedNamedSub.subComponentDialog.voiceCommands),['тестовая фраза; другая фраза']);
  await panel.getByRole('button',{name:'Обновить',exact:true}).waitFor({state:'hidden'});
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await page.evaluate(()=>{window.namedCommandFixtures=false;window.bugFixtures=false});
  console.log('Checking builtin setting names follow the interface language');
  await page.evaluate(()=>{window.builtinSettingsLabels=true;location.hash='/settings'});
  await themeSelect.waitFor();
  const uiLanguage=panel.locator('select').filter({has:page.locator('option[value="en"]')});
  await uiLanguage.selectOption('en');
  await page.evaluate(()=>{location.hash='/commands/settings'});
  await panel.getByRole('button',{name:/When no command matches/}).click();
  assert.equal(await panel.getByLabel('Command name',{exact:true}).inputValue(),'When no command matches');
  assert.equal(await panel.getByLabel('Response message',{exact:true}).inputValue(),'Мой ответ');
  await panel.getByRole('button',{name:'✕',exact:true}).click();
  await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
  await page.evaluate(()=>{location.hash='/settings'});
  await uiLanguage.waitFor();
  await uiLanguage.selectOption('ru');
  await page.evaluate(()=>{location.hash='/commands/settings'});
  await panel.getByRole('button',{name:/Если ничего не нашёл/}).waitFor();
  await page.evaluate(()=>{window.builtinSettingsLabels=false});
  console.log('Checking mobile header search spans the width and stays visible while cards scroll');
  await page.setViewportSize({width:390,height:600});
  await page.evaluate(()=>{location.hash='/commands/direct/main'});
  const headerSearch=panel.getByRole('searchbox',{name:'Поиск по названию',exact:true});
  await headerSearch.waitFor();
  const searchRect=await headerSearch.evaluate(input=>input.parentElement.getBoundingClientRect().toJSON());
  const directTabsRect=await panel.getByRole('group',{name:'Раздел прямых команд',exact:true}).boundingBox();
  assert(directTabsRect.y+directTabsRect.height<=searchRect.y,'Direct command tabs must precede search');
  const integratedHeaderRect=await panel.locator('header').boundingBox();
  assert(Math.abs(searchRect.x-integratedHeaderRect.x-16)<1 && Math.abs(searchRect.width-integratedHeaderRect.width+32)<1,'Mobile search fills the header width with 16px side padding');
  assert(await headerSearch.evaluate(input=>Boolean(input.closest('header'))));
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:'/tmp/mobile-integrated-search.png',animations:'disabled'});
  console.log('Checking sticky header inside a height-constrained Home Assistant panel');
  await panel.evaluate(element=>{element.style.height='420px';element.scrollTop=0});
  assert.equal(await panel.evaluate(element=>getComputedStyle(element).overflowY),'auto');
  const boundedHeaderBefore=await headerSearch.evaluate(input=>input.closest('header').getBoundingClientRect().top);
  const contentBefore=await panel.getByRole('group',{name:'Раздел прямых команд',exact:true}).boundingBox();
  await panel.evaluate(element=>{element.scrollTop=140});
  await page.waitForFunction(()=>document.querySelector('ha-dialog-ui-panel').scrollTop>=100);
  const boundedHeaderAfter=await headerSearch.evaluate(input=>input.closest('header').getBoundingClientRect().top);
  assert(Math.abs(boundedHeaderAfter-boundedHeaderBefore)<1,'The whole header remains pinned inside the HA panel');
  const pinnedSearch=await headerSearch.boundingBox();
  assert(pinnedSearch.y>=0 && pinnedSearch.y+pinnedSearch.height<=420,'Search remains available after scrolling');
  const tabsAfter=await panel.getByRole('group',{name:'Раздел прямых команд',exact:true}).boundingBox();
  assert(Math.abs(contentBefore.y-tabsAfter.y)<1,'Direct tabs remain in the pinned header');
  await panel.evaluate(element=>{element.scrollTop=0;element.style.height=''});
  await page.evaluate(()=>window.scrollTo(0,0));
  console.log('Checking title search spans pages and resets pagination');
  await page.setViewportSize({width:1100,height:900});
  await page.evaluate(()=>{window.collectionSearchFixture=true;location.hash='/settings'});
  await themeSelect.waitFor();
  for (const route of ['/commands/main','/commands/sub','/commands/direct/main','/commands/direct/template']) {
    await page.evaluate(route=>{location.hash=route},route);
    const search=panel.getByRole('searchbox',{name:'Поиск по названию',exact:true});
    await search.fill('кух');
    await panel.getByRole('button',{name:/^Свет в кухне/}).waitFor();
    assert.equal(await page.evaluate(()=>window.lastSearchRequest.query),'кух');
    assert.equal(await page.evaluate(()=>window.lastSearchRequest.page),1);
    await search.fill('несуществующая');
    await panel.getByText('Ничего не найдено',{exact:true}).waitFor();
    await search.fill('');
    await panel.getByRole('button',{name:/^Свет в зале/}).waitFor();
    await panel.getByRole('button',{name:'Страница 3',exact:true}).waitFor();
  }
  await page.evaluate(()=>{window.collectionSearchFixture=false;location.hash='/settings'});
  await themeSelect.waitFor();
  console.log('Checking linked command editors preserve drafts and return through nested commands');
  for (const width of [390,1100]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(()=>{
      window.namedCommandFixtures=true;window.linkedEditorFixture=true;
      window.savedNamedCommand={uuid:'command-1',title:'Исходная команда',componentDialog:{answerType:'default',voiceCommands:['привет'],voiceResponseArray:[],nextDirectControl:[{uuid:'option-1',title:'Комната',mappingType:'room'}],nextAction:[{uuid:'option-2',title:'Дочерняя команда',actionTypeComponent:'children'}]}};
      window.savedNamedSub={uuid:'option-2',title:'Дочерняя команда',subComponentDialog:{answerType:'default',voiceCommands:[],voiceResponseArray:[],nextDirectControl:[{uuid:'option-1',title:'Комната'}],nextAction:[]}};
      location.hash='/commands/main';
    });
    await panel.getByRole('button',{name:/^Команда 1/}).click();
    await panel.getByRole('button',{name:'Изменить',exact:true}).click();
    const title=panel.getByLabel('Название команды',{exact:true});
    await title.fill('Несохранённая исходная');
    await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
    await panel.getByRole('button',{name:'Перейти к команде',exact:true}).click();
    await title.waitFor();
    assert.equal(await title.inputValue(),'Комната');
    await title.fill('Изменённая прямая');
    await panel.getByRole('button',{name:'Сохранить',exact:true}).click();
    await panel.getByRole('tab',{name:'Прямые команды',exact:true}).waitFor();
    assert.equal(await page.evaluate(()=>window.savedLinkedDirect.title),'Изменённая прямая');
    assert.equal(await page.evaluate(()=>window.savedLinkedDirect.status),false,'Editing a legacy direct command sends the same disabled status used in the list');
    assert.equal(await panel.getByRole('combobox',{name:'Команда',exact:true}).locator('option:checked').textContent(),'Изменённая прямая');
    await panel.getByRole('tab',{name:'Продолжения',exact:true}).click();
    await panel.getByRole('button',{name:'Перейти к команде',exact:true}).click();
    await title.waitFor();
    assert.equal(await title.inputValue(),'Дочерняя команда');
    await title.fill('Несохранённая дочерняя');
    await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
    await panel.getByRole('button',{name:'Перейти к команде',exact:true}).click();
    await title.waitFor();
    const linkedBack=panel.getByRole('button',{name:'Назад к предыдущей команде',exact:true});
    assert.equal(await linkedBack.textContent(),'','Linked Back should be an icon, not a text button');
    const backPosition=await linkedBack.boundingBox();
    const linkedHeading=await panel.getByRole('heading',{name:'Редактировать',exact:true}).boundingBox();
    assert(backPosition.x+backPosition.width<=linkedHeading.x && Math.abs(backPosition.y-linkedHeading.y)<24,'Back arrow belongs beside the editor heading');
    await linkedBack.click();
    await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
    assert.equal(await title.inputValue(),'Несохранённая дочерняя');
    await panel.getByRole('button',{name:'Обновить',exact:true}).click();
    await panel.getByRole('tab',{name:'Продолжения',exact:true}).waitFor();
    assert.equal(await panel.getByRole('tab',{name:'Продолжения',exact:true}).getAttribute('aria-selected'),'true');
    await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
    assert.equal(await title.inputValue(),'Несохранённая исходная');
    assert.equal(await page.evaluate(()=>window.savedNamedCommand.title),'Исходная команда','Following links must never save the parent draft');
    await panel.getByRole('button',{name:'✕',exact:true}).click();
    await page.waitForFunction(()=>!history.state?.dialogCustomUiOverlay);
    await page.evaluate(()=>{location.hash='/settings'});
    await themeSelect.waitFor();
  }
  await page.evaluate(()=>{window.namedCommandFixtures=false;window.linkedEditorFixture=false});
  console.log('Checking default continuation kinds are saved without touching the kind selector');
  for (const width of [1100,390]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(()=>{
      window.namedCommandFixtures=true;
      window.savedNamedCommand={uuid:'command-1',title:'Родительская команда',status:true,componentDialog:{answerType:'default',voiceCommands:['запусти пылесос'],voiceResponseArray:[],nextDirectControl:[],nextAction:[{uuid:'option-0',title:'Старое продолжение',actionTypeComponent:''}]}};
      location.hash='/commands/main';
    });
    await panel.getByRole('button',{name:/Команда 1.*Включена/}).click();
    await panel.getByRole('button',{name:'Изменить',exact:true}).click();
    await panel.getByRole('button',{name:'Настроить логику',exact:true}).click();
    await panel.getByRole('tab',{name:'Продолжения',exact:true}).click();
    assert.equal(await panel.getByLabel('Вид продолжения',{exact:true}).first().inputValue(),'children');
    await panel.getByRole('tabpanel').getByRole('button',{name:'Добавить ещё',exact:true}).click();
    assert.equal(await panel.getByLabel('Вид продолжения',{exact:true}).last().inputValue(),'children');
    await panel.getByRole('combobox',{name:'Команда',exact:true}).last().selectOption('option-2');
    await panel.getByRole('button',{name:'Назад',exact:true}).filter({hasText:'Назад'}).click();
    await panel.getByRole('button',{name:'Обновить',exact:true}).click();
    await page.waitForFunction(()=>window.savedNamedCommand.componentDialog.nextAction.length===2);
    assert.deepEqual(await page.evaluate(()=>window.savedNamedCommand.componentDialog.nextAction.map(link=>link.actionTypeComponent)),['children','children']);
    await page.evaluate(()=>{location.hash='/settings'});
    await themeSelect.waitFor();
  }
  await page.evaluate(()=>{window.namedCommandFixtures=false});
  console.log('Checking API logs navigation, responsive entries and disabled route guard');
  await page.setViewportSize({width:1100,height:900});
  assert.equal(await panel.getByRole('link',{name:'Логи',exact:true}).count(),0);
  await page.evaluate(()=>window.dispatchEvent(new CustomEvent('ha-dialog-ui-api-enabled-change',{detail:true})));
  await panel.getByRole('link',{name:'Логи',exact:true}).click();
  await panel.getByText('POST /api/dialog/commands',{exact:true}).waitFor();
  await panel.getByText('HTTP 401',{exact:true}).waitFor();
  await panel.getByText('Тело запроса',{exact:true}).click();
  await panel.locator('pre').filter({hasText:'Включи свет'}).waitFor();
  await panel.getByText('Тело ответа',{exact:true}).click();
  await panel.locator('pre').filter({hasText:'unauthorized'}).waitFor();
  await panel.getByText('SSE подключён',{exact:true}).waitFor();
  for (const width of [320,390]) {
    await page.setViewportSize({width,height:900});
    assert.equal(await panel.locator('.appShell').evaluate(el=>el.scrollWidth>el.clientWidth+1),false,'API logs fit mobile viewport');
    await panel.getByRole('button',{name:'Открыть меню разделов',exact:true}).click();
    await panel.getByRole('link',{name:'Логи',exact:true}).click();
  }
  await page.evaluate(()=>window.dispatchEvent(new CustomEvent('ha-dialog-ui-api-enabled-change',{detail:false})));
  await page.waitForFunction(()=>location.hash!=='#/logs');
  await page.setViewportSize({width:1100,height:1000});
  // An unexpected render exception must show recovery controls instead of a blank screen.
  await page.evaluate(() => { location.hash = '/settings'; });
  await themeSelect.waitFor();
  expectedRenderFailure = true;
  await page.evaluate(() => { window.failRender = true; location.hash = '/scripts'; });
  await panel.getByRole('alert').waitFor();
  await panel.getByText('Не удалось открыть панель. Попробуйте ещё раз.', {exact:true}).waitFor();
  await page.evaluate(() => { window.failRender = false; });
  await panel.getByRole('button', {name:'Открыть повторно',exact:true}).click();
  await panel.getByText('Нажмите для редактирования', {exact:true}).waitFor();

  console.log('Passed: shared action sheets on desktop/mobile (alarm status, edit and delete), mobile timer/alarm cards, search dropdown bounds and selection, paginated command toggles, remote-server navigation and guarded command routes, styles, translations, theme persistence, responsive forms, background return, reconnect and render error recovery');
} finally {
  await browser.close();
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
}
