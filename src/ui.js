function drawHUD(){
  X.fillStyle='rgba(8,11,20,.78)';rr(24,22,360,78,18);X.fillStyle='#fff';text('CORNI CROSS',44,53,22);X.fillStyle='#aeb7d2';text(`HOME ${unis.filter(u=>u.home).length}/6  •  SCORE ${Math.round(score)}`,44,82,15);
  X.fillStyle='#111625';rr(W-330,25,290,30,15);let grad=X.createLinearGradient(W-325,0,W-45,0);['#ff638f','#ffcd60','#7cf08c','#62c9ff','#b686ff'].forEach((c,i)=>grad.addColorStop(i/4,c));X.fillStyle=grad;rr(W-326,29,282*meter,22,11);X.fillStyle='#fff';text(meter>=1?'R: PRISM READY':'PRISM',W-185,47,13,'center');
  let cx=unis.reduce((a,u)=>a+u.x,0)/unis.length,cy=unis.reduce((a,u)=>a+u.y,0)/unis.length,spread=unis.reduce((a,u)=>a+Math.hypot(u.x-cx,u.y-cy),0)/unis.length,chain=Math.round(cl(1-spread/220,0,1)*5)+1;X.fillStyle=chain>=5?'#ffe56f':'#c8cde0';text(`RAINBOW CHAIN ×${chain}`,W-45,86,16,'right');
  if(dashCd){X.fillStyle='#8a91a8';text(`DASH ${dashCd.toFixed(1)}`,W-45,111,12,'right')}X.fillStyle='#6f7894';text(`${muted?'MUTED':'M sound'}  •  P pause`,W-45,137,11,'right')
  drawTutorial();
}
function drawTutorial(){if(tutorial.done)return;let msg=['Welcome, Wrangler. Keep every unicorn moving east.','Move with WASD or arrow keys.','Hold LEFT CLICK and aim to whistle the herd toward your cursor.','Hold RIGHT CLICK to shoo nearby unicorns away from you.','Aim and press SPACE to dash through the herd.','Traffic is predictable. Herd across the crosswalk between vehicles.','Great. Keep them together to charge your Prism Burst.'][tutorial.step];X.fillStyle='rgba(8,11,20,.88)';rr(W/2-335,H-88,670,58,16);X.fillStyle='#fff';text(msg,W/2,H-53,17,'center')}
function drawPause(){X.fillStyle='rgba(4,6,12,.7)';X.fillRect(0,0,W,H);X.fillStyle='#fff';text('PAUSED',W/2,H/2-10,44,'center');X.fillStyle='#c3c9db';text('P / Esc to continue',W/2,H/2+34,18,'center')}
function drawTitle(){
  let g=X.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0a1022');g.addColorStop(1,'#241338');X.fillStyle=g;X.fillRect(0,0,W,H);
  for(let i=0;i<90;i++){let x=(i*173+clock*18)%W,y=(i*79)%H;X.globalAlpha=.15+.15*Math.sin(clock+i);X.fillStyle=`hsl(${i*31} 90% 70%)`;X.fillRect(x,y,2,2)}X.globalAlpha=1;
  X.save();X.translate(W*.68,H*.52);X.rotate(-.08);for(let i=0;i<6;i++){let u={x:i*42,y:Math.sin(i)*26,h:hues[i],vx:90,vy:0,a:0,daze:0};u.trail=[];drawMiniUni(u,i*42-120,Math.sin(i)*26)}X.restore();
  X.fillStyle='#fff';text('CORNI',92,190,86);let grad=X.createLinearGradient(90,0,500,0);['#ff638f','#ffcf5c','#6dec9a','#63ceff','#c88aff'].forEach((c,i)=>grad.addColorStop(i/4,c));X.fillStyle=grad;text('CROSS',92,270,86);X.fillStyle='#b9c1d8';text('herd the rainbow through rush hour',98,313,22);
  X.fillStyle='#fff';rr(98,365,330,68,18);X.fillStyle='#15172a';text('CLICK / ENTER TO START',263,408,19,'center');X.fillStyle='#919ab7';text('WASD • mouse • Space • R',100,470,16);text(`DAILY TOWN ${today()}    BEST ${best}`,100,505,14);
  X.fillStyle='#767f9c';text('Every collision is recoverable. Every unicorn has opinions.',100,570,15);
}
function drawMiniUni(u,x,y){X.save();X.translate(x,y);X.fillStyle='#f7f6ff';X.beginPath();X.ellipse(0,0,25,14,0,0,TAU);X.fill();X.beginPath();X.arc(20,-10,11,0,TAU);X.fill();X.fillStyle=`hsl(${u.h} 95% 65%)`;X.beginPath();X.moveTo(23,-19);X.lineTo(35,-37);X.lineTo(30,-15);X.fill();X.strokeStyle=`hsl(${u.h+25} 90% 65%)`;X.lineWidth=7;X.beginPath();X.moveTo(-20,0);X.lineTo(-38,8);X.stroke();X.restore()}
function drawEnd(){X.fillStyle='rgba(5,8,15,.82)';X.fillRect(0,0,W,H);X.fillStyle='#fff';text('HERD HOME!',W/2,170,58,'center');X.fillStyle='#ffd765';text(`${score}`,W/2,245,72,'center');X.fillStyle='#c4cbde';text(`TIME ${runTime.toFixed(1)}s   •   CHAIN ×${chainMax}   •   BONKS ${damage}   •   NEAR MISSES ${near}`,W/2,300,17,'center');X.fillStyle=damage?'#9ea7bf':'#77efb1';text(damage?'RAINBOW WRANGLER':'PRISM PERFECT!',W/2,335,16,'center');X.fillStyle='#fff';rr(W/2-170,355,340,62,18);X.fillStyle='#17192a';text('CLICK TO RUN AGAIN',W/2,395,18,'center');X.fillStyle='#99a2ba';text(`BEST ${best}   •   DAILY TOWN ${daySeed}`,W/2,455,15,'center')}

function frame(t){let dt=Math.min(.033,(t-last)/1000||0);last=t;if(!paused)clock+=state==='title'?dt:0;update(dt);draw();requestAnimationFrame(frame)}
requestAnimationFrame(frame);
