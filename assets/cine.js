const WA="966597067966",MSG="السلام عليكم أستاذ إبراهيم، شفت البورتفوليو وحاب أعرف أكثر عن إدارة التسويق لمتجري.";
document.querySelectorAll(".wa").forEach(a=>{a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(MSG);a.target="_blank";a.rel="noopener"});
document.getElementById("yr").textContent=new Date().getFullYear();
const hdr=document.getElementById("top"),hbg=document.getElementById("hbg"),gn=document.getElementById("gname");
const red=matchMedia("(prefers-reduced-motion: reduce)").matches;
function sc(){const y=scrollY;hdr.classList.toggle("s",y>20);
 if(!red){hbg.style.transform=`scale(1.04) translateY(${y*.25}px)`;gn.style.setProperty("--x",`${Math.max(-40,Math.min(40,(innerHeight-y)*.05))}px`)}}
addEventListener("scroll",sc,{passive:true});sc();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const lbx=document.getElementById("lbx");
document.querySelectorAll(".zoom").forEach(z=>z.addEventListener("click",e=>{e.stopPropagation();lbx.querySelector("img").src=z.dataset.src;lbx.classList.add("on")}));
lbx.onclick=()=>lbx.classList.remove("on");

const fab=document.getElementById("fab");if(fab)addEventListener("scroll",()=>fab.classList.toggle("on",scrollY>innerHeight*.8),{passive:true});
/* lead form → Google Sheet (Apps Script) */
const LEAD_URL="";
(function(){
 const f=document.getElementById("leadForm");if(!f)return;
 const msg=document.getElementById("leadMsg"),btn=f.querySelector(".lead-btn"),t0=Date.now();
 const normPhone=v=>v.replace(/[^\d+]/g,"").replace(/^00/,"+");
 f.addEventListener("submit",async e=>{
  e.preventDefault();msg.className="lead-msg";msg.textContent="";
  const d=Object.fromEntries(new FormData(f));
  if(d.website||Date.now()-t0<2500)return;
  let bad=[];
  if((d.name||"").trim().length<2)bad.push("name");
  const ph=normPhone(d.phone||"");if(ph.replace("+","").length<9)bad.push("phone");
  if(!d.budget)bad.push("budget");
  f.querySelectorAll(".bad").forEach(x=>x.classList.remove("bad"));
  bad.forEach(n=>f.elements[n].classList.add("bad"));
  if(bad.length){msg.className="lead-msg err";msg.textContent="فضلًا كمّل الاسم ورقم الواتساب والميزانية.";return}
  d.phone=ph;d.page=location.pathname;delete d.website;
  if(!LEAD_URL){
   const txt=`السلام عليكم، أبي مراجعة مجانية لمتجري.\nالاسم: ${d.name}\nالجوال: ${d.phone}\nالمتجر: ${d.store||"-"}\nالميزانية: ${d.budget}\n${d.note?"ملاحظة: "+d.note:""}`;
   window.open("https://wa.me/966597067966?text="+encodeURIComponent(txt),"_blank","noopener");return}
  btn.disabled=true;btn.textContent="جاري الإرسال…";
  try{
   await fetch(LEAD_URL,{method:"POST",mode:"no-cors",body:new URLSearchParams(d)});
   f.classList.add("done");msg.className="lead-msg ok";
   msg.textContent=`وصلني طلبك يا ${d.name.split(" ")[0]} 👌 بتواصل معك على الواتساب قريب.`;
   if(window.gtag)gtag("event","generate_lead");
  }catch(err){
   btn.disabled=false;btn.textContent="أرسل طلب المراجعة";
   msg.className="lead-msg err";msg.textContent="صار خطأ في الإرسال. جرّب مرة ثانية أو كلمني واتساب مباشرة.";
  }
 });
})();
