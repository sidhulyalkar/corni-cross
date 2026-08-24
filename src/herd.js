function updateUnicorns(dt){
 for(let i=0;i<unis.length;i++){let u=unis[i],ctrl=i===active;u.stun=Math.max(0,u.stun-dt);u.charge=Math.max(0,u.charge-dt);u.beam=Math.max(0,u.beam-dt);u.anger=cl(u.anger-dt*(ctrl?.018:.026),0,1);let ax=0,ay=0;
  if(ctrl){let mx=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0),my=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0),m=Math.hypot(mx,my)||1;if(!u.charge&&!u.stun){ax=mx/m*900*u.p.sp;ay=my/m*900*u.p.sp}if((keys.Space)&&!u.charge&&!u.stun)charge(u);if(mouse.l)beam(u,dt)}else if(!u.stun){
   u.ai-=dt;if(u.ai<=0){u.ai=R(1.5,.45)/(1+u.anger);let target=u.anger>.52?nearestObj(u,760):null;if(target){u.tx=target.x+target.w/2;u.ty=target.y+target.h/2;if(u.anger>.72)u.charge=.36}else{u.tx=cl(u.x+R(600,-600),80,finish-80);u.ty=cl(u.y+R(350,-350),90,H-90)}}let dx=u.tx-u.x,dy=u.ty-u.y,d=Math.hypot(dx,dy)||1,spd=430*(.45+u.anger*.75)*u.p.sp;ax=dx/d*spd;ay=dy/d*spd;ax+=Math.sin(clock*2+u.h)*85*u.p.wild;ay+=Math.cos(clock*1.7+u.h)*85*u.p.wild}
  if(!u.stun&&!u.charge){u.vx+=ax*dt;u.vy+=ay*dt}if(!u.charge){let vmax=(ctrl?320:190+u.anger*165)*u.p.sp,v=Math.hypot(u.vx,u.vy);if(v>vmax){u.vx=u.vx/v*vmax;u.vy=u.vy/v*vmax}u.vx*=Math.pow(ctrl?.05:.28,dt);u.vy*=Math.pow(ctrl?.05:.28,dt)}
  u.x=cl(u.x+u.vx*dt,30,finish-30);u.y=cl(u.y+u.vy*dt,70,H-70);if(Math.hypot(u.vx,u.vy)>25)u.a=Math.atan2(u.vy,u.vx);if(Math.hypot(u.vx,u.vy)>55)paintAt(u,u.x,u.y,u.charge?1:0);
  let speed=Math.hypot(u.vx,u.vy);for(let o of objs)if(o.hp>0&&u.x>o.x-18&&u.x<o.x+o.w+18&&u.y>o.y-18&&u.y<o.y+o.h+18){let smash=u.charge||u.anger>.7&&speed>115;if(smash){damageObj(u,o,dt*(u.charge?330:125)*u.p.pow);if(rng()<dt*10)fx(u.x,u.y,2,80)}else{let ox=o.x+o.w/2,oy=o.y+o.h/2,a=Math.atan2(u.y-oy,u.x-ox);u.vx+=Math.cos(a)*80;u.vy+=Math.sin(a)*80}}
  u.trail.push([u.x,u.y]);if(u.trail.length>13)u.trail.shift();
 }
 if(AC&&clock>musicNext){musicNext=clock+.42;tone(72+team*10,.055,'triangle',.007);if(combo>3)tone(260+combo*45,.04,'sine',.006)}
}
function updateTutorial(dt){if(tutorial.done)return;tutorial.t+=dt;let s=tutorial.step;if(s===0&&(keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD||keys.ArrowRight))tutorial.step=1;if(s===1&&mouse.l)tutorial.step=2;if(s===2&&unis[active].charge)tutorial.step=3;if(s===3&&swapCd)tutorial.step=4;if(s===4&&tutorial.t>5){tutorial.done=1;S.set('ccTut2',1)}}
