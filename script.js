const progress=document.getElementById('progress');
const nav=document.getElementById('navlinks');
document.getElementById('menu').addEventListener('click',()=>nav.classList.toggle('open'));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%';});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
