import {test} from 'node:test';
import assert from 'node:assert/strict';
import {tokenize,stateAt} from '../dist/engine.js';
const opt={latency:.5,wait:3,cadence:'smooth'};
test('tokenization is lossless for mixed Unicode, code and whitespace',()=>{for(const s of ['你好，世界！ Hello world\n','const x = "🧑‍💻";\n\treturn x;', '{"a": 123, "中文": true}'])assert.equal(tokenize(s).join(''),s)});
test('latency, reasoning and first answer token remain distinct',()=>{assert.equal(stateAt(.2,30,300,opt).phase,'connecting');assert.equal(stateAt(2,30,300,opt).phase,'thinking');assert.equal(stateAt(3.5,30,300,opt).count,0);const s=stateAt(4.5,30,300,opt);assert.equal(s.count,30);assert.equal(s.first,3.5+1/30);assert.equal(s.duration,10);assert.equal(stateAt(13.5,30,300,opt).done,true)});
test('chunk streams wait for full batches and flush the last partial batch',()=>{const p={latency:0,wait:0,cadence:'chunk'};assert.equal(stateAt(.7,10,13,p).count,0);assert.equal(stateAt(.8,10,13,p).count,8);assert.equal(stateAt(1.6,10,13,p).count,13);assert.equal(stateAt(1.6,10,13,p).end,1.6)});
test('network stalls pause count and extend answer duration',()=>{const p={latency:0,wait:0,cadence:'jitter'};assert.equal(stateAt(3,10,100,p).phase,'stalled');assert.equal(stateAt(3,10,100,p).count,28);assert.equal(stateAt(3.8,10,100,p).count,28);assert.equal(stateAt(100,10,100,p).duration,13.6);assert.equal(stateAt(13.6,10,100,p).done,true)});
