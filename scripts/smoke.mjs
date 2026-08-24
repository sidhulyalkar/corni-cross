import fs from 'node:fs';
import vm from 'node:vm';

function game(){
  const handlers={};
  const ctx2d=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})});
  const canvas={getContext:()=>ctx2d,getBoundingClientRect:()=>({left:0,top:0,width:1280,height:720}),addEventListener:(n,f)=>handlers['c:'+n]=f};
  const node=()=>({gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}});
  class AudioContext{constructor(){this.currentTime=0;this.destination={}}createGain(){return node()}createOscillator(){return node()}}
  const box={console,Math,Date,Uint8Array,AudioContext,localStorage:{},document:{getElementById:()=>canvas,createElement:()=>({width:0,height:0,getContext:()=>ctx2d})},addEventListener:(n,f)=>handlers[n]=f,requestAnimationFrame:()=>{}};
  vm.createContext(box);
  vm.runInContext(['core.js','herd.js','render.js','ui.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n'),box);
  const ev=s=>vm.runInContext(s,box);
  const key=(code,mods={})=>{let prevented=0;handlers.keydown({code,repeat:false,preventDefault(){prevented++},...mods});return prevented};
  const mouse=(n,e={})=>handlers['c:'+n]({clientX:0,clientY:0,button:0,preventDefault(){},...e});
  return{ev,key,mouse,box};
}

{
  const {ev,key,box}=game();ev("state='play'");
  if(!key('KeyS',{ctrlKey:true})||ev('K.KeyS'))throw Error('Ctrl containment failed');
  if(!key('KeyD',{metaKey:true})||ev('K.KeyD'))throw Error('Meta containment failed');
  if(!key('KeyA',{altKey:true})||ev('K.KeyA'))throw Error('Alt containment failed');
  let p=0;box.onbeforeunload({preventDefault(){p++}});if(!p)throw Error('close guard missing');
  if(typeof box.onerror!=='function')throw Error('runtime recovery missing');
}

{
  const {ev,mouse}=game();ev('startLevel(0)');
  mouse('mousemove',{clientX:1100,clientY:360});mouse('mousedown',{button:0});ev('updateWorld(.1)');
  if(!ev('intro.r')||!ev('md'))throw Error('mouse steering failed');
  ev('painted=PW*PH;update(.016)');if(ev('state')!=='play')throw Error('tutorial escaped before lessons');
  ev('intro.l=1;updateIntro(.1);intro.dash=1;updateIntro(.1);intro.power=1;updateIntro(.1);intro.distract=1;updateIntro(.1);intro.rescue=1;updateIntro(.1);update(.016)');
  if(ev('state')!=='between')throw Error('tutorial did not graduate');
}

{
  const {ev,key,mouse}=game();ev('startLevel(1)');
  if(ev('unis.filter(u=>u.live).length')!==2)throw Error('wave 1');
  ev('runTime=19;update(.016)');if(ev('wave')!==2||ev('unis.filter(u=>u.live).length')!==4)throw Error('wave 2');
  ev('unis[caps[0]].vx=100;unis[caps[0]].a=0;unis[caps[1]].vx=100;unis[caps[1]].a=0');key('KeyQ');mouse('mousedown',{button:2});
  if(ev('(dmask&48)')!==48)throw Error('Q/RMB handoffs');
  ev('update(.016)');if(ev('wave')!==3||ev('unis.filter(u=>u.live).length')!==6)throw Error('wave 3');
}

console.log('headless controls/progression smoke: PASS');
