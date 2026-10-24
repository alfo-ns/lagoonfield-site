const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menuButton.querySelector('.menu-label').textContent=open?'Chiudi':'Menu';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){menuButton.click();menuButton.focus();}});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(nav.classList.contains('open'))menuButton.click();}));
// Keep page and anchor navigation indicators in sync, including back/forward.
function updateCurrentNavigation(){
  const links=[...nav?.querySelectorAll('a[href]')||[]];
  const current=new URL(window.location.href);
  const normalize=pathname=>pathname.replace(/\/index\.html$/,'/');
  const samePage=links.filter(link=>normalize(new URL(link.href).pathname)===normalize(current.pathname));
  const anchor=samePage.find(link=>new URL(link.href).hash===current.hash&&current.hash);
  const selected=anchor||samePage.find(link=>!new URL(link.href).hash);
  links.forEach(link=>{
    if(link===selected)link.setAttribute('aria-current',anchor?'location':'page');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange',updateCurrentNavigation);
window.addEventListener('pageshow',updateCurrentNavigation);
updateCurrentNavigation();
const tabs=[...document.querySelectorAll('[role="tab"]')];
function activateTab(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();activateTab(tabs[next]);tabs[next].focus();}});});
const form=document.querySelector('#demo-form');
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const name=String(data.get('name')).trim(),email=String(data.get('email')).trim(),company=String(data.get('company')).trim(),message=String(data.get('message')).trim();const body=`Buongiorno, vorrei conoscere LagoonField e richiedere una demo.\n\nNome: ${name}\nEmail: ${email}\nAzienda: ${company}\n\n${message}\n\nGrazie,\n${name}`;const mail='mailto:sales@lagoonfield.com?subject='+encodeURIComponent('Richiesta demo LagoonField — '+company)+'&body='+encodeURIComponent(body);const prepared=document.querySelector('#prepared-mail');prepared.hidden=false;prepared.querySelector('a').href=mail;document.querySelector('#form-status').textContent='La tua richiesta è pronta. Apri l’email precompilata e inviala dal tuo programma di posta. Nessun messaggio è stato inviato dal sito.';});
const heroVideo=document.querySelector('.hero-video');
if(heroVideo){
  const toggle=document.querySelector('.hero-video-toggle');
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const source=heroVideo.querySelector('source');
  let userPaused=false,visible=true,failed=false;
  function updateControl(){heroVideo.hidden=heroVideo.paused||motion.matches||failed;toggle.hidden=motion.matches||failed;toggle.textContent=heroVideo.paused?'Riprendi video':'Pausa video';toggle.setAttribute('aria-label',heroVideo.paused?'Riprendi il video della hero':'Metti in pausa il video della hero');}
  function resume(){if(!motion.matches&&!userPaused&&visible&&!document.hidden&&!failed){heroVideo.hidden=false;heroVideo.muted=true;heroVideo.play().catch(updateControl);}}
  function applyMotion(){if(motion.matches){heroVideo.pause();updateControl();return;}if(!source.getAttribute('src')){source.src=source.dataset.src;heroVideo.muted=true;heroVideo.load();}updateControl();resume();}
  heroVideo.addEventListener('play',updateControl);
  heroVideo.addEventListener('pause',updateControl);
  function showFallback(){failed=true;heroVideo.hidden=true;toggle.hidden=true;}
  heroVideo.addEventListener('error',showFallback);
  source.addEventListener('error',showFallback);
  toggle.addEventListener('click',()=>{userPaused=!heroVideo.paused;if(userPaused)heroVideo.pause();else resume();});
  if(motion.addEventListener)motion.addEventListener('change',applyMotion);else motion.addListener(applyMotion);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)heroVideo.pause();else resume();});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)heroVideo.pause();else resume();},{threshold:.05}).observe(heroVideo.parentElement);
  applyMotion();
}
