function rr(x,y,w,h,r){X.beginPath();X.roundRect(x,y,w,h,r);X.fill()}
function text(t,x,y,s=20,align='left',alpha=1){X.globalAlpha=alpha;X.font=`800 ${s}px system-ui`;X.textAlign=align;X.fillText(t,x,y);X.globalAlpha=1}
function draw(){
  let sx=shake?R(shake,-shake):0,sy=shake?R(shake,-shake):0;X.setTransform(1,0,0,1,sx,sy);X.clearRect(-20,-20,W+40,H+40);
  if(state==='title'){drawTitle();return}
  drawWorld();drawHUD();if(paused)drawPause();if(state==='end')drawEnd();
  if(flash){X.fillStyle=`rgba(255,255,255,${flash*.25})`;X.fillRect(0,0,W,H)}
}
function drawWorld(){
  // asphalt + warm sidewalks
  X.fillStyle='#101727';X.fillRect(0,0,W,H);X.fillStyle='#24283a';X.fillRect(0,105,W,510);X.fillStyle='#ddd0b8';X.fillRect(0,95,W,68);X.fillRect(0,557,W,68);X.fillStyle='#30364a';X.fillRect(0,165,W,390);
  // lane lines
  X.strokeStyle='#74798b';X.lineWidth=3;X.setLineDash([34,34]);X.beginPath();X.moveTo(0,360);X.lineTo(W,360);X.stroke();X.setLineDash([]);
  // procedural shopfronts move with camera parallax
  for(let side of [0,1])for(let i=Math.floor(cam/190)-1;i<Math.floor((cam+W)/190)+2;i++){let x=i*190-cam,top=side?620:0,h=95,w=176,hu=(i*47+side*91+seed)%360;X.fillStyle=`hsl(${hu} 18% ${side?19:17}%)`;X.fillRect(x,top,w,h);X.fillStyle=`hsl(${hu+35} 55% 64%)`;for(let k=0;k<3;k++)X.fillRect(x+18+k*48,top+(side?18:48),28,30);X.fillStyle='#0d101a';X.fillRect(x+72,top+(side?5:56),35,39)}
  // crosswalks and props
  for(let p of props){let x=p.x-cam;if(x<-300||x>W+300)continue;if(p.t==='cross'){X.fillStyle='#e8e2d7';for(let y=177;y<545;y+=42)X.fillRect(x-p.w/2,y,p.w,16)}else if(p.t==='fountain'){X.fillStyle='#7a7d83';X.beginPath();X.arc(x,p.y,p.r+10,0,TAU);X.fill();X.fillStyle='#214b63';X.beginPath();X.arc(x,p.y,p.r,0,TAU);X.fill();X.strokeStyle='#82d8ff';X.lineWidth=3;X.beginPath();X.arc(x,p.y,p.r*.45,0,TAU);X.stroke()}else if(p.t==='cart'){X.fillStyle='#f4c95d';rr(x-30,p.y-22,60,44,8);X.fillStyle='#dd5b4d';X.fillRect(x-26,p.y-32,52,10);X.fillStyle='#0d111b';X.beginPath();X.arc(x-20,p.y+26,7,0,TAU);X.arc(x+20,p.y+26,7,0,TAU);X.fill()}else if(p.t==='cones'){X.fillStyle='#f07842';for(let q=-p.w/2;q<p.w/2;q+=42){X.beginPath();X.moveTo(x+q,p.y-20);X.lineTo(x+q-10,p.y+18);X.lineTo(x+q+10,p.y+18);X.fill()}}}
  // destination arch
  let fxp=finish-cam;if(fxp<W+150){X.strokeStyle='#ffd35c';X.lineWidth=18;X.beginPath();X.arc(fxp,360,120,Math.PI,TAU);X.stroke();X.fillStyle='#fff';text('PASTURE',fxp,315,24,'center');}
  drawPigeons();drawCars();
  for(let u of unis)drawTrail(u);for(let u of unis)drawUni(u);
  drawPlayer();drawParticles();
}
function drawCars(){for(let c of cars){let x=c.x-cam;if(x<-100||x>W+100)continue;X.save();X.translate(x,c.y);let cols=['#ff665a','#5cb9ff','#e8cf62'];X.fillStyle=c.bus?'#e4a642':cols[c.col];rr(-c.w/2,-c.h/2,c.w,c.h,10);X.fillStyle='#162333';X.fillRect(-c.w*.35,-c.h*.28,c.w*.7,c.h*.22);X.fillRect(-c.w*.35,c.h*.08,c.w*.7,c.h*.2);X.fillStyle='#ffeab3';X.fillRect(-c.w*.32,-c.h/2-2,c.w*.2,5);X.fillRect(c.w*.12,-c.h/2-2,c.w*.2,5);X.restore()}}
function drawPigeons(){X.strokeStyle='#a4a7b3';X.lineWidth=2;for(let p of pigeons){let x=p.x-cam;if(x<0||x>W)continue;X.beginPath();X.moveTo(x-5,p.y);X.quadraticCurveTo(x,p.y-6,x+5,p.y);X.stroke()}}
function drawTrail(u){if(u.trail.length<2)return;X.lineCap='round';for(let j=1;j<u.trail.length;j++){let a=u.trail[j-1],b=u.trail[j],q=j/u.trail.length;X.strokeStyle=`hsla(${u.h+j*9},90%,65%,${q*(burst?.72:.28)})`;X.lineWidth=(burst?12:6)*q;X.beginPath();X.moveTo(a[0]-cam,a[1]);X.lineTo(b[0]-cam,b[1]);X.stroke()}}
function drawUni(u){let x=u.x-cam,y=u.y,bob=Math.sin(clock*13+u.h)*2,flip=u.vx<0?-1:1;X.save();X.translate(x,y+bob);X.rotate(u.a*.12);X.scale(flip,1);
  X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.ellipse(0,15,23,7,0,0,TAU);X.fill();
  X.strokeStyle=`hsl(${u.h} 90% 65%)`;X.lineWidth=6;X.beginPath();X.moveTo(-19,0);X.quadraticCurveTo(-33,-11,-38,6);X.stroke();
  X.strokeStyle='#e5e9ff';X.lineWidth=5;for(let i of [-12,10]){let kick=Math.sin(clock*18+u.h+i)*8;X.beginPath();X.moveTo(i,9);X.lineTo(i+kick,25);X.stroke()}
  X.fillStyle=u.daze?'#c4c8db':'#f7f6ff';X.beginPath();X.ellipse(0,0,23,14,0,0,TAU);X.fill();X.beginPath();X.arc(19,-9,11,0,TAU);X.fill();
  X.fillStyle=`hsl(${u.h+35} 95% 66%)`;X.beginPath();X.moveTo(23,-18);X.lineTo(35,-35);X.lineTo(30,-14);X.fill();
  X.fillStyle='#1e2435';X.beginPath();X.arc(23,-10,2.3,0,TAU);X.fill();
  if(u.daze){X.fillStyle='#ffe06b';text('BONK!',0,-30,12,'center',.9)}else if(runTime<4.5){X.fillStyle='#fff';text(u.name,0,-29,11,'center',.72)}X.restore()}
function drawPlayer(){let x=player.x-cam,y=player.y;X.save();X.translate(x,y);X.rotate(player.a);X.strokeStyle=mouse.r?'#ff89d7':mouse.l?'#7ee9ff':'#cad1e8';X.globalAlpha=.5;X.lineWidth=2;X.beginPath();X.arc(0,0,mouse.r?115:mouse.l?150:26,-.75,.75);X.stroke();X.globalAlpha=1;X.fillStyle='#151929';X.beginPath();X.arc(0,0,15,0,TAU);X.fill();X.fillStyle='#fff';X.beginPath();X.arc(6,-5,5,0,TAU);X.fill();X.fillStyle='#ff63b7';X.beginPath();X.moveTo(9,-10);X.lineTo(21,-18);X.lineTo(13,-5);X.fill();X.restore()}
function drawParticles(){for(let p of particles){X.globalAlpha=cl(p.life*2,0,1);X.fillStyle=`hsl(${p.h} 95% 65%)`;X.beginPath();X.arc(p.x-cam,p.y,2+p.life*3,0,TAU);X.fill()}X.globalAlpha=1}
