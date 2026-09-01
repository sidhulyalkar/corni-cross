/* Hosted/local leaderboard layer. Intentionally excluded from the 13 KB submission payload. */
(()=>{
const KEY='usTop50',NAME='usPlayer',URL=globalThis.UNICORN_LEADERBOARD_URL||'https://sidhulyalkar.com/api/unicorn-stampede/leaderboard',W='PRISM|WASH|CLOUD|PLUS|NEON|FROST|GEAR|MIRAGE|MOONFAIR|CITADEL'.split('|');
let rows=[],global=0,open=0,lastState=state,submitted=0;
const clean=s=>(s||'PLAYER').toUpperCase().replace(/[^A-Z0-9 _-]/g,'').trim().slice(0,16)||'PLAYER';
const local=()=>{try{return JSON.parse(localStorage[KEY]||'[]')}catch{return[]}};
const save=r=>{let a=local();a.push(r);a.sort((a,b)=>b.score-a.score||a.ms-b.ms);a=a.slice(0,50);localStorage[KEY]=JSON.stringify(a);return a};
const payload=()=>({name:clean(localStorage[NAME]),score:finalScore||comp(),zone,plus:!!plus,time:+timeLeft.toFixed(2),paint:+paintPct().toFixed(4),damage:+structPct().toFixed(4),chains,active:+(actT?actS/actT/6:0).toFixed(4),stuns,gates:gates(),ms:Math.round(actT*1e3),version:'0.22'});
async function load(){try{let r=await fetch(URL,{cache:'no-store'});if(!r.ok)throw 0;let j=await r.json();rows=(j.scores||j).slice(0,50);global=1}catch{rows=local();global=0}draw()}
async function submit(){if(submitted||!level||!landWin)return;submitted=1;let name=clean(localStorage[NAME]);if(!localStorage[NAME]){name=clean(prompt('Leaderboard name (max 16 characters):','PLAYER'));localStorage[NAME]=name}let p=payload();p.name=name;rows=save(p);try{let r=await fetch(URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(p)});if(!r.ok)throw 0;let j=await r.json();rows=(j.scores||rows).slice(0,50);global=1}catch{global=0}open=1;draw()}
const box=document.createElement('div');box.hidden=true;box.style.cssText='position:fixed;inset:5% 12%;z-index:9;background:#071020f2;border:2px solid #ffe56d;border-radius:20px;color:#fff;font:16px system-ui;padding:22px;overflow:auto;box-shadow:0 0 40px #c46cff66';document.body.append(box);
function draw(){box.hidden=!open;if(!open)return;let me=finalScore||0;box.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0;color:#ffe56d">${global?'GLOBAL':'LOCAL'} TOP 50</h2><b>L / ESC CLOSE</b></div><p style="color:#b8c8e8">${global?'Scores verified by the leaderboard service.':'Global service unavailable; showing this browser’s saved runs.'}</p><div style="display:grid;grid-template-columns:45px 1fr 110px 120px;gap:6px 12px">${rows.map((r,i)=>`<b>${i+1}</b><span>${clean(r.name)}</span><b style="color:${r.score===me?'#73eda0':'#fff'}">${r.score|0}</b><span>${W[r.zone]||'?'}${r.plus&&r.zone<3?' +':''}</span>`).join('')}</div>`}
addEventListener('keydown',e=>{if((state==='title'||state==='end')&&e.code==='KeyL'){open=!open;if(open)load();else draw()}if(open&&e.code==='Escape'){open=0;draw()}});
function watch(){if(lastState!=='end'&&state==='end'&&landWin)submit();if(state==='play')submitted=0;lastState=state;requestAnimationFrame(watch)}requestAnimationFrame(watch);
})();
