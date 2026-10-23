import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DialogApi } from '../ui/src/api/dialog-api.ts';
import { normalizeHass } from '../ui/src/hooks/hass.ts';

test('typed API preserves websocket command names and payloads', async () => {
  const calls=[];
  const api=new DialogApi({states:{},connection:{sendMessagePromise:async message=>{calls.push(message);return {data:[]}}}});
  await api.getPage('get_assistant_commands_short',2,10);
  await api.getRecord('one','get_assistant_command');
  await api.saveData({title:'Create'},'save_assistant_command');
  await api.updateRecord('one','update_assistant_command',{title:'Edit'});
  await api.updateRecordStatus('update_assistant_command_status','one',false);
  await api.deleteRecord('one','delete_assistant_command');
  assert.deepEqual(calls,[
    {type:'ha_dialog_ui/get_assistant_commands_short',page:2,page_size:10},
    {type:'ha_dialog_ui/get_assistant_command',uuid:'one'},
    {type:'ha_dialog_ui/save_assistant_command',data:{title:'Create'}},
    {type:'ha_dialog_ui/update_assistant_command',uuid:'one',data:{title:'Edit'}},
    {type:'ha_dialog_ui/update_assistant_command_status',uuid:'one',status:false},
    {type:'ha_dialog_ui/delete_assistant_command',uuid:'one'},
  ]);
});

test('all-record loading includes every page and both collection response formats', async () => {
  for(const field of ['data','script_actions']) {
    const api=new DialogApi({states:{},connection:{sendMessagePromise:async message=>({[field]:[{uuid:String(message.page)}],total_pages:3})}});
    assert.deepEqual(await api.getAllRecords('list'),[{uuid:'1'},{uuid:'2'},{uuid:'3'}]);
  }
});

test('settings wrappers and HA callWS adapter retain the current user and context', async () => {
  const hass={user:{is_admin:true},states:{},callWS:async function(message){assert.equal(this,hass);return {result:{theme:'dark'}}}};
  const normalized=normalizeHass(hass);
  assert.equal(normalized.user.is_admin,true);
  assert.deepEqual(await new DialogApi(normalized).getSettings(),{theme:'dark'});
  await assert.rejects(normalizeHass().connection.sendMessagePromise({type:'test'}),/not available/);
});

test('media browsing retries a fallback root and reports failure when neither root is available', async () => {
  const calls=[];
  const api=new DialogApi({states:{},connection:{sendMessagePromise:async message=>{
    calls.push(message.media_content_id);
    if(message.media_content_id.endsWith('/local')) throw {code:'not_found'};
    return {children:[{title:'Alarm',media_content_id:'media-source://media_source/local/alarm.mp3',media_content_type:'music'}]};
  }}});
  assert.deepEqual(await api.getLocalMusicOptions(),[{value:'alarm.mp3',label:'Alarm'}]);
  assert.equal(calls.length,2);
  const failing=new DialogApi({states:{},connection:{sendMessagePromise:async ()=>{throw {code:'connection_lost'}}}});
  await assert.rejects(failing.getLocalMusicOptions(),error=>error.code==='connection_lost');
});

test('music browsing finds MIME audio in custom media_dirs even when local is empty', async () => {
  const api=new DialogApi({states:{},connection:{sendMessagePromise:async ({media_content_id:id})=>{
    if(id==='media-source://media_source/local') return {children:[]};
    if(id==='media-source://media_source') return {children:[{media_content_id:'media-source://media_source/sounds',can_expand:true}]};
    return {children:[{title:'Bell',media_content_id:'media-source://media_source/sounds/bell',media_content_type:'audio/mpeg'}]};
  }}});
  assert.deepEqual(await api.getLocalMusicOptions(),[{label:'Bell',value:'media-source://media_source/sounds/bell'}]);
});

test('unreadable media folder does not discard readable music, but fails visibly when nothing is readable', async () => {
  for(const readable of [true,false]) {
    const api=new DialogApi({states:{},connection:{sendMessagePromise:async ({media_content_id:id})=>{
      if(id.endsWith('/broken')) throw {code:'browse_media_failed'};
      return {children:[{media_content_id:'media-source://media_source/broken',can_expand:true},...(readable?[{title:'Bell.mp3',media_content_id:'media-source://media_source/local/bell.mp3'}]:[])]};
    }}});
    if(readable) assert.deepEqual(await api.getLocalMusicOptions(),[{label:'Bell.mp3',value:'bell.mp3'}]);
    else await assert.rejects(api.getLocalMusicOptions(),error=>error.code==='browse_media_failed');
  }
});

test('populated local music does not exclude another configured media directory', async () => {
  const api=new DialogApi({states:{},connection:{sendMessagePromise:async ({media_content_id:id})=>{
    if(id.endsWith('/local')) return {children:[{title:'First.mp3',media_content_id:'media-source://media_source/local/first.mp3'}]};
    if(id==='media-source://media_source') return {children:[{media_content_id:'media-source://media_source/local',can_expand:true},{media_content_id:'media-source://media_source/other',can_expand:true}]};
    return {children:[{title:'Second.mp3',media_content_id:'media-source://media_source/other/second.mp3'}]};
  }}});
  assert.deepEqual(await api.getLocalMusicOptions(),[{label:'First.mp3',value:'first.mp3'},{label:'Second.mp3',value:'media-source://media_source/other/second.mp3'}]);
});

test('collection search passes title query without changing existing unfiltered calls', async () => {
  const calls=[];
  const api=new DialogApi({states:{},connection:{sendMessagePromise:async message=>{calls.push(message);return {data:[]}}}});
  await api.getPage('get_assistant_commands_short',2,10,'Кухня');
  await api.getPage('get_assistant_commands_short',1);
  assert.deepEqual(calls,[{type:'ha_dialog_ui/get_assistant_commands_short',page:2,page_size:10,query:'Кухня'},{type:'ha_dialog_ui/get_assistant_commands_short',page:1}]);
});
