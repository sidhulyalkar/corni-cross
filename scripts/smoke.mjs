import fs from 'node:fs';
import vm from 'node:vm';

function game(){
  const handlers={};
  const ctx2d=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})});
  const canvas={getContext:()=>ctx2d,addEventListener:(n,f)=>handlers['c:'+n]=f};
  const box={console,Math,Date,Uint8Array,localStorage:{},document:{getElementById:()=>canvas,createElement:()=>({width:0,height:0,getContext:()=>ctx2d})},addEventListener:(n,f)=>handlers[n]=f,requestAnimationFrame:()=>{}};
  vm.createContext(box);
  vm.runInContext(['core.js','herd.js','render.js','ui.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n'),box);
  const ev=s=>vm.runInContext(s,box);
  const key=(code,mods={})=>{let prevented=0;handlers.keydown({code,repeat:false,preventDefault(){prevented++},...mods});return prevented};
  return{ev,key};
}

{
  const {ev,key}=game();
  ev("state='play'");
  if(!key('KeyS',{ctrlKey:true})||ev('K.KeyS'))throw Error('Ctrl shortcut containment failed');
  if(!key('KeyD',{metaKey:true})||ev('K.KeyD'))throw Error('Meta shortcut containment failed');
  if(!key('KeyA',{altKey:true})||ev('K.KeyA'))throw Error('Alt shortcut containment failed');
}

{
  const {ev}=game();
  ev('startLevel(0);painted=PW*PH;update(.016)');
  if(ev('state')!=='play')throw Error('tutorial escaped before lessons');
  ev('intro.l=1;updateIntro(.1);intro.r=1;updateIntro(.1);intro.dash=1;updateIntro(.1);intro.power=1;updateIntro(.1);intro.distract=1;updateIntro(.1);intro.rescue=1;updateIntro(.1);update(.016)');
  if(ev('state')!=='between')throw Error('tutorial did not graduate after all lessons');
}

{
  const {ev,key}=game();
  ev('startLevel(1)');
  if(ev('unis.filter(u=>u.live).length')!==2)throw Error('wave 1 must start with 2');
  ev('runTime=19;update(.016)');
  if(ev('wave')!==2||ev('unis.filter(u=>u.live).length')!==4)throw Error('wave 2 must release 4');
  ev('unis[caps[0]].vx=100;unis[caps[0]].a=0;unis[caps[1]].vx=100;unis[caps[1]].a=0');
  key('KeyQ');key('Enter');
  if(ev('(dmask&48)')!==48)throw Error('Q/Enter handoffs not recorded');
  ev('update(.016)');
  if(ev('wave')!==3||ev('unis.filter(u=>u.live).length')!==6)throw Error('successful handoffs must release full herd');
}

console.log('headless controls/progression smoke: PASS');
