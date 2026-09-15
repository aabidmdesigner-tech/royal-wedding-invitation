document.body.classList.add('no-scroll');
const opening=document.getElementById('opening'),site=document.getElementById('site'),openBtn=document.getElementById('openBtn');
openBtn.addEventListener('click',()=>{opening.classList.add('opened');document.body.classList.remove('no-scroll');site.classList.add('ready');setTimeout(()=>opening.remove(),1300)});
window.addEventListener('load',()=>setTimeout(()=>site.classList.add('ready'),250));

// Cinematic particle field
const particles=document.getElementById('particles');
for(let i=0;i<34;i++){const p=document.createElement('i');p.className='particle';p.style.left=Math.random()*100+'%';p.style.animationDuration=8+Math.random()*13+'s';p.style.animationDelay=-Math.random()*18+'s';p.style.opacity=.18+Math.random()*.55;particles.appendChild(p)}

// Live countdown — replace with the final wedding date when confirmed.
const weddingDate=new Date('2026-12-16T19:00:00+05:30');
function countdown(){let x=Math.max(0,weddingDate-new Date());const d=Math.floor(x/86400000),h=Math.floor(x/3600000)%24,m=Math.floor(x/60000)%60,s=Math.floor(x/1000)%60;document.getElementById('days').textContent=String(d).padStart(3,'0');document.getElementById('hours').textContent=String(h).padStart(2,'0');document.getElementById('mins').textContent=String(m).padStart(2,'0');document.getElementById('secs').textContent=String(s).padStart(2,'0')}countdown();setInterval(countdown,1000);

// Scroll reveal with staggered cinematic timing
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');entry.target.style.setProperty('--reveal-delay',Math.min(entry.target.getBoundingClientRect().top/1000,.28)+'s')}}),{threshold:.12,rootMargin:'0px 0px -8%'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Smooth anchors
for(const a of document.querySelectorAll('a[href^="#"]'))a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}});

// Subtle hero parallax — intentionally disabled on touch devices for performance.
if(!matchMedia('(pointer:coarse)').matches){window.addEventListener('scroll',()=>{const y=scrollY;const hero=document.querySelector('.hero');if(hero){const t=Math.min(y,hero.offsetHeight);hero.querySelector('.moon')?.style.setProperty('transform',`translateX(-50%) translateY(${t*.10}px)`);hero.querySelector('.palace-back')?.style.setProperty('transform',`translateX(-50%) translateY(${t*.05}px)`);hero.querySelector('.palace-front')?.style.setProperty('transform',`translateX(-50%) translateY(${t*.11}px)`);hero.querySelector('.hero-content')?.style.setProperty('transform',`translateY(${t*.22}px)`)}}, {passive:true})}

// Navigation state + reading progress
const progress=document.createElement('div');progress.setAttribute('aria-hidden','true');progress.style.cssText='position:fixed;z-index:100;top:0;left:0;width:0;height:2px;background:#d9b86f;transition:width .08s linear';document.body.appendChild(progress);
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+'%';const nav=document.querySelector('.nav');if(nav)nav.style.background=scrollY>40?'#21050df2':'linear-gradient(#21050ddd,transparent)'},{passive:true});

// RSVP interaction
const form=document.getElementById('rsvpForm');
form.addEventListener('submit',e=>{e.preventDefault();const name=form.name.value.trim(),attendance=form.attendance.value;document.getElementById('formMessage').textContent=attendance==='yes'?`Thank you, ${name}. We can't wait to celebrate with you!`:`Thank you, ${name}. We'll miss you on our special day.`;form.reset();form.querySelector('input[value="yes"]').checked=true});

// Music control UI (audio can be connected later when the final track is supplied).
document.getElementById('musicBtn').addEventListener('click',e=>{e.currentTarget.classList.toggle('active');e.currentTarget.querySelector('span').textContent=e.currentTarget.classList.contains('active')?'On':'Music'});

// Gentle tilt on event cards for mouse users
if(!matchMedia('(pointer:coarse)').matches){document.querySelectorAll('.event,.gallery-grid>div').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-2}deg) rotateY(${x*2}deg) translateY(-3px)`});card.addEventListener('pointerleave',()=>card.style.transform='')})}
