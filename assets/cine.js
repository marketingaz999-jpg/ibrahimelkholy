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
