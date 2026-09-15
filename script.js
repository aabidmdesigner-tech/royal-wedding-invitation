const loader=document.getElementById('loader');window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),700));

// Set the wedding date here when final details are available.
const weddingDate=new Date('2026-12-16T19:00:00+05:30');
function updateCountdown(){const diff=weddingDate-new Date();if(diff<=0)return;const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000)%24,m=Math.floor(diff/60000)%60,s=Math.floor(diff/1000)%60;document.getElementById('days').textContent=String(d).padStart(3,'0');document.getElementById('hours').textContent=String(h).padStart(2,'0');document.getElementById('mins').textContent=String(m).padStart(2,'0');document.getElementById('secs').textContent=String(s).padStart(2,'0')}updateCountdown();setInterval(updateCountdown,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('rsvpForm').addEventListener('submit',e=>{e.preventDefault();const name=e.target.querySelector('input[placeholder="Your name"]').value;const attending=e.target.querySelector('input[name="attendance"]:checked').value;document.getElementById('formMessage').textContent=attending==='yes'?`Thank you, ${name}. We can't wait to celebrate with you!`:`Thank you, ${name}. We'll miss you on our special day.`;e.reset();e.querySelector('input[value="yes"]').checked=true});

document.getElementById('musicBtn').addEventListener('click',e=>{e.currentTarget.classList.toggle('active');e.currentTarget.querySelector('span').textContent=e.currentTarget.classList.contains('active')?'On':'Music'});
