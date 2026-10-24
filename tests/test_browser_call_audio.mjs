import {test} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {runInNewContext} from "node:vm";
import {BrowserCallAudio, microphoneAvailable, microphoneError} from "../ui/src/pages/CallsPage/browserAudio.ts";

const source = await readFile(new URL("../ui/public/call-capture-worklet.js",import.meta.url),"utf8");
for(const rate of [16000,44100,48000,96000]) test(`worklet ${rate} Hz -> 16 kHz little-endian frames, silence output and bounded queue`,()=>{
 let Capture; const packets=[];
 runInNewContext(source,{sampleRate:rate,ArrayBuffer,DataView,Math,AudioWorkletProcessor:class{constructor(){this.port={postMessage:packet=>packets.push(packet)};}}, registerProcessor:(_name,type)=>{Capture=type;}});
 const node=new Capture();
 const frames=rate*0.4;
 for(let i=0;i<frames;i+=128){const n=Math.min(128,frames-i);const output=new Float32Array(n).fill(1);node.process([[new Float32Array(n).fill(0.5)]],[[output]]);assert.ok(output.every(x=>x===0));}
 assert.equal(packets.length,3); // No ACKs: producer cannot queue more than 120 ms.
 for(const packet of packets){assert.equal(packet.byteLength,1280);const data=new DataView(packet);for(let i=0;i<640;i++)assert.equal(data.getInt16(i*2,true),16384);}
 node.port.onmessage({data:"ack"});
 node.process([[new Float32Array(Math.round(rate*0.04)).fill(-2)]],[[]]);
 assert.equal(packets.length,4);
 assert.equal(new DataView(packets[3]).getInt16(0,true),-32768);
 node.port.onmessage({data:"ack"});
 node.process([[]],[[new Float32Array(Math.round(rate*0.04)).fill(1)]]);
 assert.equal(packets.length,5);assert.ok(new Uint8Array(packets[4]).every(byte=>byte===0));
});

function environment(getMedia){
 let stopped=0,closed=0,node;
 Object.defineProperty(globalThis,"isSecureContext",{value:true,configurable:true});
 Object.defineProperty(globalThis,"navigator",{value:{mediaDevices:{getUserMedia:getMedia??(async()=>stream)}},configurable:true});
 const track={onended:null,stop(){stopped++;}};
 const stream={getTracks:()=>[track],getAudioTracks:()=>[track]};
 globalThis.AudioContext=class{currentTime=0;destination={};audioWorklet={async addModule(){}};async resume(){};async close(){closed++;}createMediaStreamSource(){return{connect(){},disconnect(){}};}};
 globalThis.AudioWorkletNode=class{constructor(){node=this;}port={onmessage:null,postMessage(){}};connect(){}disconnect(){}};
 return {stream,track,get node(){return node;},get stopped(){return stopped;},get closed(){return closed;}};
}

test("capture starts only after answer, network backlog is bounded and closing releases tracks",async()=>{
 const env=environment();const sends=[],failures=[];let release;
 const pending=new Promise(resolve=>release=resolve);
 const api={browserCallAudio:(_id,pcm)=>{sends.push(pcm);return pending;}};
 const audio=new BrowserCallAudio(api,"view",message=>failures.push(message));
 await audio.prepare();
 env.node.port.onmessage({data:new ArrayBuffer(1280)});assert.equal(sends.length,0);
 audio.setSending(true);
 for(let i=0;i<10;i++)env.node.port.onmessage({data:new ArrayBuffer(1280)});
 assert.equal(sends.length,3);
 audio.close();release({});await Promise.resolve();
 assert.equal(env.stopped,1);assert.equal(env.closed,1);assert.deepEqual(failures,[]);
});

test("permission grant arriving after page close immediately stops the microphone",async()=>{
 let grant; const permission=new Promise(resolve=>grant=resolve);const env=environment(()=>permission);
 const audio=new BrowserCallAudio({},"view",()=>{});const ready=audio.prepare();
 await new Promise(resolve=>setTimeout(resolve,0));audio.close();grant(env.stream);
 await assert.rejects(ready,{name:"AbortError"});assert.equal(env.stopped,1);
});

test("permission denial, track end and insecure origins have explicit behavior",async()=>{
 const env=environment();const failures=[];
 const audio=new BrowserCallAudio({},"view",msg=>failures.push(msg));await audio.prepare();env.track.onended();
 assert.equal(failures.length,1);assert.equal(env.stopped,1);
 Object.defineProperty(globalThis,"isSecureContext",{value:false,configurable:true});assert.equal(microphoneAvailable(),false);
 assert.match(microphoneError(new DOMException("denied","NotAllowedError")),/Разрешите/);
 const insecure=new BrowserCallAudio({},"view",()=>{});await assert.rejects(insecure.prepare(),{name:"SecurityError"});insecure.close();
});

test("mute disables the microphone and sends silence, preserving the call stream",async()=>{
 const env=environment();const sent=[];
 const audio=new BrowserCallAudio({browserCallAudio:async(_id,pcm)=>sent.push(Buffer.from(pcm,"base64"))},"view",()=>{});
 await audio.prepare();audio.setSending(true);
 audio.setMicrophoneMuted(true);assert.equal(env.track.enabled,false);
 env.node.port.onmessage({data:new Uint8Array(1280).fill(99).buffer});
 await new Promise(resolve=>setTimeout(resolve,0));
 assert.equal(sent.length,1);assert.ok(sent[0].every(byte=>byte===0));assert.equal(env.stopped,0);
 audio.setMicrophoneMuted(false);assert.equal(env.track.enabled,true);
 env.node.port.onmessage({data:new Uint8Array(1280).fill(99).buffer});
 await new Promise(resolve=>setTimeout(resolve,0));
 assert.equal(sent.length,2);assert.ok(sent[1].every(byte=>byte===99));audio.close();
});

test("supported output routing selects a real sink and returns to the system default",async()=>{
 const env=environment();const sinks=[];
 AudioContext.prototype.setSinkId=async id=>sinks.push(id);
 navigator.mediaDevices.enumerateDevices=async()=>[{kind:"audiooutput",deviceId:"default",label:"System"},{kind:"audiooutput",deviceId:"speaker",label:"Speaker"}];
 const audio=new BrowserCallAudio({},"view",()=>{});await audio.prepare();
 assert.equal(audio.canSelectOutput(),true);assert.equal(audio.canPromptOutput(),false);
 assert.deepEqual(audio.getOutputDevices(),[{id:"default",label:"System"},{id:"speaker",label:"Speaker"}]);
 await audio.selectOutput("speaker");await audio.selectOutput("default");assert.deepEqual(sinks,["speaker","default"]);
 audio.close();await assert.rejects(audio.selectOutput("speaker"),{name:"AbortError"});assert.equal(env.stopped,1);
});

test("an output picker result arriving after hangup cannot reopen or reroute audio",async()=>{
 environment();const sinks=[];AudioContext.prototype.setSinkId=async id=>sinks.push(id);
 let resolve;const choice=new Promise(done=>resolve=done);navigator.mediaDevices.selectAudioOutput=()=>choice;
 const audio=new BrowserCallAudio({},"view",()=>{});await audio.prepare();assert.equal(audio.canPromptOutput(),true);
 const pending=audio.promptOutput();audio.close();resolve({deviceId:"speaker",label:"Speaker"});
 await assert.rejects(pending,{name:"AbortError"});assert.deepEqual(sinks,[]);
});

test("unsupported output routing is reported honestly without ending the call",async()=>{
 const env=environment();const audio=new BrowserCallAudio({},"view",()=>{});await audio.prepare();
 assert.equal(audio.canSelectOutput(),false);await assert.rejects(audio.selectOutput("speaker"),{name:"NotSupportedError"});
 assert.equal(env.stopped,0);audio.close();
});
