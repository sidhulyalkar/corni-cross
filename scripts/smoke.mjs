import fs from'node:fs';import vm from'node:vm';
const files=['core.js','herd.js','render.js','ui.js','top10.js','polish.js','hud12.js','whip.js','worlds.js','expansion.js'],src=files.map(f=>fs.readFileSync('src/'+f,'utf8')).join('\n');
function game(store={}){const H={},on=(n,f)=>(H[n]??=[]).push(f),ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(()=>{})}),canvas={getContext:()=>ctx,getBoundingClientRect:()=>({left:0,top:0,width:1280,height:720}),addEventListener:(n,f)=>on('c:'+n,f)},node=()=>({gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}});class AudioContext{constructor(){this.currentTime=0;this.destination={}}createGain(){return node()}createOscillator(){return node()}}const box={console,Math,Date,Uint8Array,AudioContext,localStorage:store,document:{body:{append(){}},getElementById:()=>canvas,createElement:()=>({width:0,height:0,hidden:false,style:{},innerHTML:'',append(){},getContext:()=>ctx})},addEventListener:on,requestAnimationFrame:()=>{},fetch:async()=>{throw Error('offline')},prompt:()=>null};box.globalThis=box;vm.createContext(box);vm.runInContext(src,box,{timeout:3000});let ev=s=>vm.runInContext(s,box,{timeout:3000}),fire=(n,e={})=>(H[n]||[]).forEach(f=>f({...e,preventDefault(){},stopImmediatePropagation(){}})),click=()=>fire('c:mousedown',{clientX:900,clientY:360});return{ev,fire,click,H}}
{
 const {ev}=game();ev('startLevel(1)');if(ev('unis.length')!==6||ev('unis.filter(u=>u.live).length')!==2)throw Error('2-unicorn opening');ev('waveUp(2)');if(ev('unis.filter(u=>u.live).length')!==4)throw Error('four-unicorn wave');ev('waveUp(3)');if(ev('unis.filter(u=>u.live).length')!==6)throw Error('six-unicorn wave');
}
{
 const {ev,fire}=game();ev('startLevel(1);waveUp(3)');let a=ev('caps[0]');fire('keydown',{code:'KeyW'});fire('keyup',{code:'KeyW'});if(ev('caps[0]')===a)throw Error('Blue release did not rotate');
}
{
 const {ev}=game();ev('startLevel(1);waveUp(3);let u=unis[caps[1]];u.tap=2;u.tapT=1;chains=0;whip.hit=1;whip.i=caps[1];crackWhip()');if(ev('chains')<1)throw Error('Prism chain count');
}
{
 const {ev}=game();ev("startLevel(1);LM.slice(0,-1).forEach(l=>l.os.forEach(o=>o.hp=0))");let hp=ev('LM[4].os[0].hp');ev('hitObj(unis[0],LM[4].os[0],999)');if(ev('LM[4].os[0].hp')!==hp||!ev("msg.includes('28% CHAOS')"))throw Error('Hall chaos gate');ev('painted=PW*PH*.4;hitObj(unis[0],LM[4].os[0],999)');if(!ev('landWin'))throw Error('Hall unlock');
}
{
 const {ev,fire}=game();ev("S.s('ccIntro16',1);S.s('ccC0',1);state='title';zone=0");fire('keydown',{code:'KeyD'});if(ev('zone')!==1||ev("S.g('ccZone')")!==1)throw Error('campaign world select');
}
{
 const {ev,click}=game();ev("startLevel(1);landWin=1;state='end';startLevel(1)");if(ev('zone')!==1||ev('timeLeft')!==94||ev('pwash.length')!==3||!ev('heli'))throw Error('washwater unlock');ev('paintStamp(unis[0],400,400,90);pwash[0].x=400;pwash[0].y=400;washT=0');let p=ev('painted');ev('updateZone(.1)');if(ev('painted')>=p)throw Error('powerwasher erasure');ev('heli.t=.5;heli.aim=0;updateZone(.1)');if(!ev('heli.aim'))throw Error('water drop telegraph');ev("landWin=1;chains=2;painted=PW*PH*.5");if(ev('grade()')!==3)throw Error('washwater crowns');click();
}
{
 const {ev,click}=game();ev("startLevel(1);landWin=1;state='end';startLevel(1);landWin=1;state='end';startLevel(1)");if(ev('zone')!==2||ev('timeLeft')!==90)throw Error('cloudtop unlock');let v=ev('unis[0].vx');ev('stamp=6;windT=0;updateZone(.2)');if(ev('unis[0].vx')===v)throw Error('cloudtop crosswind');click();if(ev('unis[caps[1]].tapT')>.51)throw Error('cloudtop whip window');
}
{
 const {ev}=game();ev("startLevel(1);landWin=1;state='end';startLevel(1);landWin=1;state='end';startLevel(1);landWin=1;state='end';startLevel(1)");if(!ev('plus')||ev('zone')!==3||ev('timeLeft')!==86||ev('cleaners.length')!==1||!ev("lmText.includes('STAMPEDE+')"))throw Error('world four Stampede+');let v=ev('unis[0].vx');ev('clock=1;updateZone(.1)');if(ev('unis[0].vx')===v)throw Error('stampede+ roaming gust');ev('unis[0].x=550;unis[0].y=1130;updateZone(.01)');if(!(ev('dmask')&64)||ev('unis[0].boost')<2)throw Error('prism gate reward');ev('draw()');
}
if(!fs.readFileSync('src/style.css','utf8').includes('cursor:none'))throw Error('native cursor not hidden');
console.log('headless v0.22 ten-world competitive smoke: PASS');
