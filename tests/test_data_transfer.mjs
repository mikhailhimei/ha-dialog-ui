import assert from 'node:assert/strict';
import { test } from 'node:test';
import { exportData, importData, parseImport } from '../ui/src/utils/dataTransfer.ts';

test('export fetches full details, not names, across the complete collection', async () => {
  const item = {uuid:'one',name:'Test',script_entity_id:'script.test',conditions:[]};
  const api = {getAllRecords:async type=>{assert.equal(type,'get_script_actions_short');return [{uuid:'one',title:'Test'}]},getRecord:async (id,type)=>{assert.equal(id,'one');assert.equal(type,'get_script_action');return {data:item}}};
  assert.deepEqual(await exportData(api,'scripts'),[item]);
});

test('invalid files cause no writes; valid records preserve IDs', async () => {
  const calls=[];
  const api={saveData:async (...args)=>calls.push(args)};
  for(const text of ['bad','{}','[{"uuid":"one","title":"Old short export"}]']) {
    await assert.rejects(importData(api,'scripts',text));
  }
  assert.equal(calls.length,0);
  const records=[{uuid:'one',name:'Test',script_entity_id:'script.test',conditions:[]}];
  await importData(api,'scripts',JSON.stringify(records));
  assert.deepEqual(calls,[[records,'import_script_actions']]);
  assert.throws(()=>parseImport(JSON.stringify([...records,...records]),'scripts'));
});

test('scenario and settings imports reject mismatched structure', () => {
  assert.throws(()=>parseImport('{"theme":"invalid"}','settings'));
  assert.throws(()=>parseImport('{"active_remout":"false"}','settings'));
  assert.throws(()=>parseImport('{"remout":null}','settings'));
  assert.throws(()=>parseImport('[{"uuid":"one","title":"Short","status":true}]','scenarios'));
  assert.deepEqual(parseImport('{"theme":"dark","timer_alarm":{"global_music_alarm":"alarm.mp3"}}','settings'),{theme:'dark',timer_alarm:{global_music_alarm:'alarm.mp3'}});
});

test('scenarios export/import uses all command sections in one versioned file', async () => {
  const data={format:'ha-dialog-ui-commands',version:1,commands:[{uuid:'main',title:'Main',componentDialog:{nextAction:[{uuid:'sub'}]}}],sub_commands:[{uuid:'sub',title:'Sub'}],direct_commands:[{uuid:'direct',title:'Direct',directControl:{subDirectControl:'template'}}],templates:[{uuid:'template',title:'Template'}],settings:[{uuid:'setting',title:'Default'}]};
  const calls=[];
  const api={getData:async type=>{assert.equal(type,'export_command_bundle');return data},saveData:async (...args)=>calls.push(args)};
  const exported=await exportData(api,'scenarios');
  assert.deepEqual(exported,data);
  await importData(api,'scenarios',JSON.stringify(exported));
  assert.deepEqual(calls,[[data,'import_command_bundle']]);
  assert.throws(()=>parseImport(JSON.stringify({...data,version:2}),'scenarios'));
  const {templates,...incomplete}=data;
  assert.throws(()=>parseImport(JSON.stringify(incomplete),'scenarios'));
});

test('legacy full subcommand arrays remain importable without changing other sections', async () => {
  const data=[{uuid:'sub',title:'Sub',status:true,subComponentDialog:{endStatus:true,actionType:'test',answerType:'default'}}];
  const calls=[];
  await importData({saveData:async (...args)=>calls.push(args)},'scenarios',JSON.stringify(data));
  assert.deepEqual(calls,[[data,'import_assistant_sub_commands']]);
});
