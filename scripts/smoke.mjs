import fs from 'node:fs';
import vm from 'node:vm';
function game(){
  const H={};
  const on=(n,f)=>((H[n]??=[]).push(f));
  const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})});
  const canvas={getContext:()=>ctx,getBoundingClientRect:()=>({left:0,top:0,width:1280,height:720}),addEventListener:(n,f)=>on('c:'+n,f)};
  const node=()=>({gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}});
  class AudioContext{constructor(){this.currentTime=0;this.destination={}}createGain(){return node()}createOscillator(){return node()}}
  const box={console,Math,Date,Uint8Array,AudioContext,localStorage:{},document:{getElementById:()=>canvas,createElement:()=>({width:0,height:0,getContext:()=>ctx})},addEventListener:on,requestAnimationFrame:()=>{}};
  vm.createContext(box);vm.runInContext(['core.js','herd.js','render.js','ui.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n'),box);
  const ev=s=>vm.runInContext(s,box),fire=(n,e={})=>{for(const f of H[n]||[])f({code:'',repeat:false,button:0,detail:1,clientX:0,clientY:0,preventDefault(){this.prevented=1},...e})};
  return{ev,fire,box};
}
{
 const {ev,fire,box}=game();ev("state='play'");fire('keydown',{code:'KeyS',ctrlKey:true});if(ev('K.KeyS'))throw Error('ctrl leak');let p=0;box.onbeforeunload({preventDefault(){p++}});if(!p||typeof box.onerror!=='function')throw Error('safety guards');
}
{
 const {ev,fire}=game();ev('startLevel(0)');fire('c:mousemove',{clientX:843,clientY:360});fire('c:mousedown',{detail:1});fire('c:mousemove',{clientX:1050,clientY:360});ev('updateWorld(.1)');if(!ev('intro.r')||!ev('md'))throw Error('mouse acquire/drag');fire('mouseup');ev('painted=PW*PH;intro.l=1;updateIntro(.1);intro.dash=1;updateIntro(.1);intro.power=1;updateIntro(.1);intro.distract=1;updateIntro(.1);intro.rescue=1;updateIntro(.1);update(.016)');if(ev('state')!=='between')throw Error('tutorial gate');
}
{
 const {ev,fire}=game();ev('startLevel(1);runTime=19;update(.016)');if(ev('wave')!==2)throw Error('wave2');
 fire('keydown',{code:'KeyD'});ev('updateWorld(.12)');fire('keyup',{code:'KeyD'});if(ev('caps[0]')!==1||ev('unis[0].order')<3)throw Error('left auto next');
 fire('c:mousemove',{clientX:800,clientY:144});fire('c:mousedown',{detail:2});if(ev('unis[caps[1]].boost')<2)throw Error('double tap boost');fire('c:mousemove',{clientX:1040,clientY:144});ev('updateWorld(.12)');fire('mouseup');if(ev('caps[1]')!==4||ev('unis[3].order')<3)throw Error('mouse auto next');
 ev('update(.016)');if(ev('wave')!==3)throw Error('wave3');
 ev('caps[0]=0;unis[1].order=3;unis[2].distract=1;cycle(0)');if(ev('caps[0]')!==2)throw Error('attention director priority');
}
console.log('headless smart-director smoke: PASS');
