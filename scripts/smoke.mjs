import fs from 'node:fs';
import vm from 'node:vm';
function game(){
 const H={};const on=(n,f,c)=>(H[n]??=[]).push({f,c:!!c});
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})});
 const canvas={getContext:()=>ctx,getBoundingClientRect:()=>({left:0,top:0,width:1280,height:720}),addEventListener:(n,f,c)=>on('c:'+n,f,c)};
 const node=()=>({gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}});class AudioContext{constructor(){this.currentTime=0;this.destination={}}createGain(){return node()}createOscillator(){return node()}}
 const box={console,Math,Date,Uint8Array,AudioContext,localStorage:{},document:{getElementById:()=>canvas,createElement:()=>({width:0,height:0,getContext:()=>ctx})},addEventListener:(n,f,c)=>on(n,f,c),requestAnimationFrame:()=>{}};vm.createContext(box);vm.runInContext(['core.js','herd.js','render.js','ui.js','top10.js','polish.js','hud12.js','whip.js','worlds.js'].map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n'),box);
 const ev=s=>vm.runInContext(s,box),fire=(n,e={})=>{let E={code:'',repeat:false,button:0,clientX:0,clientY:0,preventDefault(){},stopImmediatePropagation(){this.stop=1},...e};for(const h of [...(H[n]||[])].sort((a,b)=>b.c-a.c)){h.f(E);if(E.stop)break}};
 const press=()=>{fire('c:mousemove',{clientX:ev('(unis[caps[1]].x+100)*z+ox'),clientY:ev('unis[caps[1]].y*z+oy')});fire('c:mousedown')},click=()=>{press();ev('update(.12)')};return{ev,fire,press,click,box};
}
{
 const {ev,fire,box}=game();ev("state='play'");fire('keydown',{code:'KeyS',ctrlKey:true});if(ev('K.KeyS'))throw Error('ctrl leak');let p=0;box.onbeforeunload({preventDefault(){p++}});if(!p||typeof box.onerror!=='function')throw Error('safety');
}
{
 const {ev,fire}=game();ev("S.s('ccIntro10',1);state='title'");fire('c:mousedown');if(ev('state')!=='title')throw Error('fresh briefing click-through');fire('keydown',{code:'Enter'});if(ev('level')!==0||ev('state')!=='play')throw Error('revised tutorial not forced');
}
{
 const {ev,fire,press}=game();ev('startLevel(0)');if(ev('LM.length')!==1||ev("LM[0].k")!=='bakery')throw Error('tutorial landmark');fire('keydown',{code:'KeyD'});ev('updateWorld(.1)');if(ev('intro.step')!==0)throw Error('move skipped release lesson');fire('keyup',{code:'KeyD'});ev('update(.02)');if(ev('intro.step')!==1||ev('unis[0].order')<=0)throw Error('route release lesson');let v=ev('unis[caps[1]].vx');press();if(!ev('intro.r')||ev('unis[caps[1]].tap')!==1||ev('unis[caps[1]].vx')===v)throw Error('whip not immediate');ev('updateIntro()');if(ev('intro.step')!==2)throw Error('whip first crack lesson');press();if(ev('intro.dash')||ev('unis[caps[1]].tap')!==2)throw Error('chain graduated before 3x');press();if(!ev('intro.dash'))throw Error('3x not immediate');ev('updateIntro()');if(ev('intro.step')!==3)throw Error('3x chain lesson');ev('LM[0].os.forEach(o=>o.hp=0);update(.016)');if(ev('state')!=='between'||ev("S.g('ccIntro16')")!==1)throw Error('short tutorial objective/onboarding gate');
}
{
 const {ev,fire}=game();ev('startLevel(1);waveUp(2)');if(!ev("msg.includes('4 UNICORNS')"))throw Error('switch arrival teaching');fire('keydown',{code:'KeyD'});ev('updateWorld(.02);unis[caps[0]].vx=0;unis[caps[0]].vy=0');let old=ev('caps[0]');fire('keyup',{code:'KeyD'});if(ev('caps[0]')===old||ev(`unis[${old}].order`)<=0)throw Error('low-speed WASD release did not route+next');if(!ev("msg.includes('BLUE')&&msg.includes('RUNS')"))throw Error('blue handoff explanation');
}
{
 const {ev}=game();ev('startLevel(1);unis[0].x=20;unis[0].y=20;unis[0].vx=-200;unis[0].vy=-200;unis[0].ai=2;updateWorld(.01)');if(ev('Math.hypot(unis[0].x-160,unis[0].y-160)')>138.1||ev('unis[0].ai')!==0)throw Error('rounded anti-stuck corner');
}
{
 const {ev,fire,click}=game();ev('startLevel(1)');if(ev('zone')!==0||ev('LM.length')!==5||ev("S.g('ccRun')")!==1)throw Error('prismborough/remix');let hp=ev("LM[4].os[0].hp");ev("hitObj(unis[0],LM[4].os[0],999)");if(ev("LM[4].os[0].hp")!==hp)throw Error('town hall shield');ev("LM.slice(0,-1).forEach(l=>l.os.forEach(o=>o.hp=0));hitObj(unis[0],LM[4].os[0],10)");if(ev("LM[4].os[0].hp")>=hp)throw Error('town hall unlock');ev('runTime=19;update(.016)');if(ev('wave')!==2||ev('cleaners.length')!==2)throw Error('act2 cleanup');ev('unis[0].order=3;unis[3].order=3;update(.01)');if(ev('stamp')<2)throw Error('stampede state');ev('stamp=6;cleaners[0].spray=0;updateCleaners(.01)');if(ev('cleaners[0].spray')>.17)throw Error('adaptive cleanup');fire('keydown',{code:'KeyD'});ev('updateWorld(.1)');fire('keyup',{code:'KeyD'});if(ev('caps[0]')!==1||ev('unis[0].order')<3)throw Error('left smart next');click();click();if(ev('unis[caps[1]].tap')!==2||ev('unis[caps[1]].boost')<1)throw Error('2x prism');click();if(ev('caps[1]')!==4||ev('unis[3].order')<3||ev('chains')!==1)throw Error('3x smart next/mastery');if(!ev("msg.includes('YELLOW')&&msg.includes('RUNS')"))throw Error('yellow handoff explanation');ev('update(.016)');if(ev('wave')!==3||ev('cleaners.length')!==4)throw Error('act3');ev('caps[0]=0;unis[1].order=3;unis[2].distract=1;cycle(0)');if(ev('caps[0]')!==2||ev('cueWhy[0]')!==1)throw Error('director reason');ev('hud()');
}
{
 const {ev}=game();ev('startLevel(1);paintReset();stamp=0;paintStamp(unis[0],400,400,20)');let low=ev('painted');ev('paintReset();stamp=6;paintStamp(unis[0],400,400,20)');if(ev('painted')<=low)throw Error('stampede paint reward');
}
{
 const {ev}=game();ev('startLevel(1);paintStamp(unis[0],400,400,80)');let p=ev('painted');ev('eraseStamp(400,400,50)');if(ev('painted')>=p)throw Error('cleanup erasure');
}
{
 const {ev,click}=game();ev('startLevel(1);waveUp(2)');click();ev('update(.7)');if(ev('caps[1]')!==4)throw Error('timeout smart next');
}
{
 const {ev,fire}=game();ev("S.s('ccIntro10',1);S.s('ccC0',1);state='title';zone=0");fire('keydown',{code:'KeyD'});if(ev('zone')!==1||ev("S.g('ccZone')")!==1)throw Error('campaign world select');
}
{
 const {ev,click}=game();ev("startLevel(1);landWin=1;state='end';startLevel(1)");if(ev('zone')!==1||ev('timeLeft')!==94||ev('pwash.length')!==3||!ev('heli'))throw Error('washwater unlock');ev('paintStamp(unis[0],400,400,90);pwash[0].x=400;pwash[0].y=400;washT=0');let p=ev('painted');ev('updateZone(.1)');if(ev('painted')>=p)throw Error('powerwasher erasure');ev('heli.t=.5;heli.aim=0;updateZone(.1)');if(!ev('heli.aim'))throw Error('water drop telegraph');ev("landWin=1;chains=2;painted=PW*PH*.5");if(ev('grade()')!==3)throw Error('washwater crowns');click();
}
{
 const {ev,click}=game();ev("startLevel(1);landWin=1;state='end';startLevel(1);landWin=1;state='end';startLevel(1)");if(ev('zone')!==2||ev('timeLeft')!==90)throw Error('cloudtop unlock');let v=ev('unis[0].vx');ev('stamp=6;windT=0;updateZone(.2)');if(ev('unis[0].vx')===v)throw Error('cloudtop crosswind');click();if(ev('unis[caps[1]].tapT')>.51)throw Error('cloudtop whip window');
}
console.log('headless v0.19 clarity/fun smoke: PASS');
