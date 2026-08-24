function updateUnicorns(dt){
  let cx=0,cy=0,avx=0,avy=0;for(let u of unis){cx+=u.x;cy+=u.y;avx+=u.vx;avy+=u.vy}cx/=unis.length;cy/=unis.length;avx/=unis.length;avy/=unis.length;
  let linked=0,totalSpread=0;
  for(let u of unis){
    u.daze=Math.max(0,u.daze-dt);u.wander+=dt*(.6+u.p.wander*.2);let ax=58*u.p.speed,ay=0,nearN=0,sx=0,sy=0;
    for(let o of unis)if(o!==u){let dx=u.x-o.x,dy=u.y-o.y,d2=dx*dx+dy*dy;if(d2<170*170){nearN++;sx+=o.x;sy+=o.y;if(d2<48*48&&d2>1){let d=Math.sqrt(d2);ax+=dx/d*220*(1-d/48);ay+=dy/d*220*(1-d/48)}}}
    if(nearN){sx/=nearN;sy/=nearN;ax+=(sx-u.x)*.34*u.p.coh+(avx-u.vx)*.24;ay+=(sy-u.y)*.34*u.p.coh+(avy-u.vy)*.24}
    ax+=(cx-u.x)*.045*u.p.coh;ay+=(cy-u.y)*.045*u.p.coh;ay+=(360-u.y)*.08;
    ax+=Math.cos(u.wander*1.7+u.h)*18*u.p.wander;ay+=Math.sin(u.wander*1.31+u.h)*25*u.p.wander;
    let dxp=player.x-u.x,dyp=player.y-u.y,dp=Math.hypot(dxp,dyp)||1;
    if(mouse.l&&dp<300){let targetX=mouse.x+cam,targetY=mouse.y,dx=targetX-u.x,dy=targetY-u.y,d=Math.hypot(dx,dy)||1;ax+=dx/d*350*(1-dp/380);ay+=dy/d*350*(1-dp/380)}
    if(mouse.r&&dp<240){let dir=Math.atan2(dyp,dxp),diff=Math.atan2(Math.sin(dir-player.a),Math.cos(dir-player.a));if(Math.abs(diff)<1.05){ax+=dxp/dp*620*(1-dp/260);ay+=dyp/dp*620*(1-dp/260)}}
    for(let p of props){let dx=u.x-p.x,dy=u.y-(p.y||360),d=Math.hypot(dx,dy)||1;if(p.t==='fountain'&&d<p.r+46){ax+=dx/d*650*(1-d/(p.r+46));ay+=dy/d*650*(1-d/(p.r+46))}if(p.t==='cart'&&d<220){ax-=dx/d*55*u.p.food;ay-=dy/d*55*u.p.food}if(p.t==='cones'&&u.x>p.x-p.w/2-35&&u.x<p.x+p.w/2+35&&u.y>p.y-p.h/2-35&&u.y<p.y+p.h/2+35){let sy2=Math.sign(u.y-p.y)||1;ay+=sy2*500}}
    if(burst){ax+=(player.x-u.x)*1.25+(cx-u.x)*.8+420;ay+=(player.y-u.y)*.85+(cy-u.y)*.8}
    if(!u.daze){u.vx+=ax*dt;u.vy+=ay*dt}else{u.vx*=Math.pow(.74,dt);u.vy+=80*dt}
    let vmax=(burst?470:270)*u.p.speed,vm=Math.hypot(u.vx,u.vy);if(vm>vmax){u.vx=u.vx/vm*vmax;u.vy=u.vy/vm*vmax}
    u.vx*=Math.pow(.32,dt);u.vy*=Math.pow(.42,dt);u.x+=u.vx*dt;u.y+=u.vy*dt;
    if(u.y<65){u.y=65;u.vy=Math.abs(u.vy)*.55}if(u.y>H-65){u.y=H-65;u.vy=-Math.abs(u.vy)*.55}if(u.x<40){u.x=40;u.vx=Math.abs(u.vx)}
    if(u.x>finish&&!u.home){u.home=1;fx(u.x,u.y,22,150);tone(460+u.h,.16,'triangle',.025,760+u.h)}u.a=Math.atan2(u.vy,u.vx||1);u.near=nearN;linked+=nearN>0;totalSpread+=Math.hypot(u.x-cx,u.y-cy);
    u.trail.push([u.x,u.y]);if(u.trail.length>(burst?20:10))u.trail.shift();
    for(let c of cars){let dx=u.x-c.x,dy=u.y-c.y,d=Math.hypot(dx,dy);if(d<90&&d>50&&Math.abs(c.vy)>80&&Math.abs(u.vx)>40&&rng()<dt*.25){near++;meter=cl(meter+.04,0,1);fx(u.x,u.y,4,60)}}
  }
  let cohesion=cl(1-totalSpread/unis.length/220,0,1),chain=Math.round(cohesion*5)+1;chainNow=chain;chainMax=Math.max(chainMax,chain);meter=cl(meter+dt*(cohesion>.46?cohesion*.055:.006),0,1);score+=dt*(20+chain*5);if(meter>=1&&!readyPing){readyPing=1;ping(2)}if(meter<1)readyPing=0;if(AC&&clock>musicNext){musicNext=clock+.48;tone(70+chain*8,.07,'triangle',.009);if(chain>4)tone(360+chain*45,.045,'sine',.008)}
}
function updateParticles(dt){for(let i=particles.length-1;i>=0;i--){let p=particles[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=Math.pow(.16,dt);p.vy*=Math.pow(.16,dt);if(p.life<=0)particles.splice(i,1)}}
function fx(x,y,n=8,s=100){for(let i=0;i<n;i++){let a=R(TAU),v=R(s,s*.2);particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:R(.7,.2),h:R(360)})}}
function updateTutorial(dt){if(tutorial.done)return;tutorial.t+=dt;let s=tutorial.step;if(s===0&&tutorial.t>2)tutorial.step=1;if(s===1&&(keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD||keys.ArrowRight))tutorial.step=2;if(s===2&&mouse.l)tutorial.step=3;if(s===3&&mouse.r)tutorial.step=4;if(s===4&&dashCd>.1)tutorial.step=5;if(s===5&&player.x>780){tutorial.step=6;tutorial.t=0}if(s===6&&player.x>1150){tutorial.done=1;S.set('ccTut',1)}}
