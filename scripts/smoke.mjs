import fs from 'node:fs';
import vm from 'node:vm';
function game(){
 const H={};const on=(n,f)=>(H[n]??=[]).push(f);
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})});
 const canvas={getContext:()=>ctx,getBoundingClientRect:()=>({left:0,top:0,width:1280,height:720}),addEventListener:(n,f)=>on('c:'+n,f)};
 const node=()=>({gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}});class AudioContext{constructor(){this.currentTime=0;this.destination={}}createGain(){return node()}createOscillator(){return node()}}
 const box={console,Math,Date,Uint8Array,AudioContext,localStorage:{},document:{getElementById:()=>canvas,createElement:()=>({width:0,height:0,getContext:()=>ctx})},addEventListener:on,requestAnimationFrame:()=>{}};vm.createContext(box);vm.runInContext(['core.js','herd.js','render.js','ui.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n'),box);
 const ev=s=>vm.runInContext(s,box),fire=(n,e={})=>{for(const f of H[n]||[])f({code:'',repeat:false,button:0,clientX:0,clientY:0,preventDefault(){},...e})};
 const click=()=>{fire('c:mousemove',{clientX:ev('unis[caps[1]].x*z+ox'),clientY:ev('unis[caps[1]].y*z+oy')});fire('c:mousedown')};return{ev,fire,click,box};
}
{
 const {ev,fire,box}=game();ev("state='play'");fire('keydown',{code:'KeyS',ctrlKey:true});if(ev('K.KeyS'))throw Error('ctrl leak');let p=0;box.onbeforeunload({preventDefault(){p++}});if(!p||typeof box.onerror!=='function')throw Error('safety');
}
{
 const {ev,fire,click}=game();ev('startLevel(0)');fire('keydown',{code:'KeyD'});ev('updateWorld(.1)');fire('keyup',{code:'KeyD'});click();if(!ev('intro.r')||ev('unis[caps[1]].tap')!==1)throw Error('click dash');ev('updateWorld(.08)');click();if(!ev('intro.dash')||ev('unis[caps[1]].tap')!==2)throw Error('chase chain');ev('painted=PW*PH;intro.power=1;updateIntro(.1);intro.distract=1;updateIntro(.1);intro.rescue=1;updateIntro(.1);update(.016)');if(ev('state')!=='between')throw Error('tutorial');
}
{
 const {ev,fire,click}=game();ev('startLevel(1);runTime=19;update(.016)');if(ev('wave')!==2)throw Error('wave2');fire('keydown',{code:'KeyD'});ev('updateWorld(.1)');fire('keyup',{code:'KeyD'});if(ev('caps[0]')!==1||ev('unis[0].order')<3)throw Error('left smart next');click();ev('updateWorld(.08)');click();if(ev('unis[caps[1]].tap')!==2||ev('unis[caps[1]].boost')<1)throw Error('2x prism');ev('updateWorld(.08)');click();if(ev('caps[1]')!==4||ev('unis[3].order')<3)throw Error('3x smart next');ev('update(.016)');if(ev('wave')!==3)throw Error('wave3');ev('caps[0]=0;unis[1].order=3;unis[2].distract=1;cycle(0)');if(ev('caps[0]')!==2)throw Error('director priority');
}
{
 const {ev,click}=game();ev('startLevel(1);waveUp(2)');click();ev('update(.61)');if(ev('caps[1]')!==4)throw Error('timeout smart next');
}
console.log('headless prism-chase smoke: PASS');
