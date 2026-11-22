
const WHATSAPP="966597067966";
const WA_MSG="السلام عليكم أستاذ إبراهيم، شفت البورتفوليو وحاب أعرف أكثر عن إدارة التسويق لمتجري.";
const LOGOS={
 snap:{n:"سناب شات",bg:"#FFFC00",fg:"#111",c:"#F5D90A",d:"M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"},
 google:{n:"جوجل",bg:"#EEF3FE",fg:"#4285F4",c:"#34A853",d:"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"},
 tiktok:{n:"تيك توك",bg:"#111",fg:"#fff",c:"#14161B",d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"},
 meta:{n:"ميتا",bg:"#E8F0FD",fg:"#0467DF",c:"#1877F2",d:"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"},
 salla:{n:"سلة",bg:"#E3F4EF",fg:"#004956",c:"#0F6E6E",d:"M18.862 13.439a1.27 1.27 0 0 0-.81-.555 1.27 1.27 0 0 0-.964.18c-3.422 2.231-6.75 2.231-10.178 0a1.27 1.27 0 0 0-.964-.18 1.283 1.283 0 0 0-.434 2.327c2.142 1.394 4.326 2.1 6.49 2.1 2.166 0 4.348-.706 6.488-2.102a1.27 1.27 0 0 0 .555-.81 1.27 1.27 0 0 0-.18-.964zm5.103 2.82-1.171-9.764a5.24 5.24 0 0 0-5.2-4.614H6.406a5.236 5.236 0 0 0-5.198 4.612l-1.17 9.766a5.235 5.235 0 0 0 5.198 5.86h13.529a5.238 5.238 0 0 0 5.198-5.86zm-3.21 2.4c-.532.6-1.265.929-2.066.929H5.311c-.801 0-1.536-.33-2.066-.929a2.73 2.73 0 0 1-.676-2.16l1.157-9.657A2.764 2.764 0 0 1 6.468 4.41h11.064a2.765 2.765 0 0 1 2.742 2.432l1.157 9.656a2.72 2.72 0 0 1-.676 2.161"}
};

/* =========================================================
   البراندات — كل براند = فصل في قسم النتائج
   ========================================================= */
const BRANDS=[
 {c:"c1",lbl:"أثاث منزلي · متجر على سلة · من 2020",h:'من <span class="num">200K</span> لـ <span class="num">5.7M</span> ريال في السنة',
  sub:"براند أثاث جديد مسكت تسويقه من أول يوم، وكبر سنة بعد سنة لين صار من أقوى المتاجر في مجاله على سلة.",
  ch:"براند أثاث جديد دخل سلة في 2020 بدون اسم معروف ولا عملاء سابقين. أول سنة كاملة كانت 683 طلب وحوالي 200 ألف ريال. والأثاث منتج غالي، العميل ما يشتري من أول إعلان: يحتاج يشوف ويقارن ويثق قبل ما يطلب.",
  did:["مسكت التسويق من أول يوم، وبنيت الحملات على 4 منصات: سناب وجوجل وميتا وتيك توك.", "الميزانية تتوزع حسب المبيعات الفعلية في سلة، مو حسب أرقام المنصة. في 2026: سناب 33%، جوجل 32%، ميتا 18%، تيك توك 17%.", "سناب صار أقوى قناة: 3,342 عملية شراء من يناير لسبتمبر 2026، وROAS 12.9x حسب المنصة.", "متابعة الطلبات تحت التنفيذ بتنبيهات تأخير، عشان ما يضيع طلب ولا يزعل عميل.", "تقرير كل أسبوع بالإنفاق والطلبات والعائد من كل منصة."],
  res:"المبيعات السنوية كبرت 28 ضعف: من 200 ألف ريال في 2020 لـ 5.73 مليون ريال صافي و10,548 طلب في 2025، بنمو 126% عن 2024. وإجمالي المبيعات من الإطلاق تجاوز 17.5 مليون ريال وحوالي 33 ألف طلب.",
  k:[["4.1M","ر.س","مبيعات يناير – سبتمبر 2026"],["6,910","","طلب في نفس الفترة"],["8.0x","","ROAS (مبيعات ÷ إنفاق)"],["12.9x","","ROAS سناب حسب المنصة"]],
  p:[["snap-overview.jpg","سناب: ملخص أداء الحساب في 2026"],["salla-2025.jpg","سلة: مبيعات وطلبات 2025"],["snap-table.jpg","سناب: الحملات مرتبة حسب ROAS"],["snap-mobile.jpg","متابعة الحملات يوميًا من الجوال"]]},
 {c:"c2",lbl:"عسل وعطارة · متجر على سلة · نوفمبر 2025 – يناير 2026",h:'أكثر من <span class="num">100K</span> ريال مبيعات في الشهر',
  sub:"براند عسل موجود من 1417هـ، والهدف إن كل ريال إعلان يرجع مبيعات حقيقية على المتجر.",
  ch:"براند عسل وعطارة موجود من 1417هـ، وعملاؤه راضين (تقييم 4.9 من 5 على المتجر). بس مبيعاته أونلاين ما كانت على قد اسمه، والمطلوب مبيعات بربح، مو زيارات ومشاهدات.",
  did:["جوجل بحث وPerformance Max بهدف ROAS، عشان يلتقط اللي يدوّر فعلًا على العسل والعطارة.", "سناب بحملات تحويل، يصنع الطلب عند ناس ما كانت تدوّر.", "حملة تفاعل على تيك توك جابت 445 متابع جديد بـ 1,130 ريال.", "متابعة يومية لمبيعات سلة مقابل هدف الشهر."],
  res:"خلال حوالي شهرين: 201 ألف ريال و727 طلب. يناير لوحده 102 ألف ريال و361 طلب، فوق هدف الشهر (100 ألف). وجوجل لوحده: 20.8 ألف ريال إنفاق رجّعت 332 ألف ريال قيمة تحويلات (16x حسب المنصة).",
  k:[["201K","ر.س","مبيعات في حوالي شهرين"],["727","","طلب"],["16x","","ROAS جوجل حسب المنصة"],["5.5x","","ROAS الإجمالي"]],
  p:[["honey-google.jpg","جوجل: 20.8K إنفاق ← 332K قيمة تحويلات"],["honey-salla.jpg","سلة: يناير 2026، 102,154 ر.س و361 طلب"],["honey-snap-dec.jpg","سناب (27 نوفمبر – 30 ديسمبر): 148 عملية شراء"],["honey-google-aug.jpg","جوجل (أغسطس – سبتمبر 2025): ROAS 9.8x"]]},
 {c:"c3",lbl:"كفرات جوال · تيك توك وسناب · 3 شهور",h:'كل ريال إعلان رجّع <span class="num">8</span> ريال',
  sub:"براند عنده جمهور كبير على السوشال، والتحدي كان تحويل الاهتمام لطلبات بتكلفة معقولة.",
  ch:"براند كفرات جوال عنده جمهور كبير على تيك توك، بس الاهتمام ما كان يتحول لطلبات. وسعر المنتج بسيط، فأي تكلفة طلب عالية تاكل الربح كله.",
  did:["حوّلت الميزانية من الوصول والتفاعل لحملات تحويل وكتالوج وريتارجتنج.", "اختبرت أكثر من حملة بنفس الوقت، وأي حملة ما تجيب طلبات توقف بدري.", "تيك توك: 6,573 ريال إنفاق جابت 254 طلب.", "سناب: حوالي 1,700 دولار جابت 222 طلب، وحملة وحدة لحالها جابت 179 عملية شراء."],
  res:"خلال 3 شهور: 115,541 ريال مبيعات مقابل 13,875 ريال إنفاق. يعني كل ريال إعلان رجّع حوالي 8 ريال، وتكلفة الطلب حوالي 29 ريال.",
  k:[["115K","ر.س","مبيعات"],["476","","طلب من الإعلانات"],["8.3x","","ROAS"],["29","ر.س","تكلفة الطلب"]],
  p:[["byleo-tiktok.jpg","تيك توك: 6,573 ر.س إنفاق ← 254 طلب"],["byleo-snap.jpg","سناب: اختبار حملات تحويل وكتالوج وزيارات"]]},
 {c:"c4",lbl:"مركز خدمات بالحجز · الدمام · مارس – أغسطس 2025",h:'تكلفة الحجز نزلت <span class="num">64%</span>',
  sub:"مو بس متاجر: نفس طريقة الشغل على مركز خدمات، والهدف حجوزات أكثر بتكلفة أقل.",
  ch:"مركز خدمات في الدمام يعتمد على الحجوزات. في أول شهر (مارس 2025) كانت تكلفة الحجز الواحد حوالي 118 ريال، والمنصات تعدّ نقرات واتصالات، مو حجوزات فعلية.",
  did:["جوجل بحث للي يدوّر على الخدمة وقت ما يحتاجها.", "تيك توك بحملات زيارات وريتارجتنج للي شاف المركز وما حجز.", "شيت يومي يربط إنفاق كل يوم بالاتصالات ورسائل الواتساب والحجوزات اللي تمّت فعلًا.", "القرارات تنبني على تكلفة الحجز الحقيقية، مو على أرقام المنصة."],
  res:"646 حجز في 6 شهور بمتوسط 71 ريال للحجز. وفي يوليو: 179 حجز بتكلفة 42 ريال بدل 118، يعني التكلفة نزلت 64%.",
  k:[["646","","حجز في 6 شهور"],["42","ر.س","تكلفة الحجز في يوليو"],["71","ر.س","متوسط تكلفة الحجز"],["46K","ر.س","إنفاق إعلاني"]],
  p:[["svc-google.jpg","جوجل: حملات البحث"],["svc-sheet.jpg","تقرير الحجوزات الأسبوعي"],["svc-tiktok.jpg","تيك توك: حملات زيارات وريتارجتنج"],["svc-daily.jpg","شيت يومي يربط الإنفاق بالحجوزات"]]}
];
const YEARS=[["2020",200352],["2021",481361],["2022",2018205],["2023",1998992],["2024",2540797],["2025",5725261],["2026",4399441]];

/* ========================================================= */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const fmt=(n,d=0)=>n.toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const short=v=>v>=1e6?(v/1e6).toFixed(1)+"M":v>=1e3?Math.round(v/1e3)+"K":String(v);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

$$(".wa").forEach(a=>{a.href="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(WA_MSG);a.target="_blank";a.rel="noopener"});
$("#yr").textContent=new Date().getFullYear();
const hdr=$("#top");
const PAGE=document.body.dataset.page||"home";
$$(".pnav .nav a").forEach(a=>a.classList.toggle("on",a.dataset.p===PAGE));
function onScroll(){hdr.classList.toggle("s",scrollY>10)}
addEventListener("scroll",onScroll,{passive:true});onScroll();

/* platform chips */



/* marquee: all proof screenshots */
if($("#track")){
const ALL=BRANDS.flatMap(b=>b.p);
const items=ALL.map(([f,c])=>`<button data-src="img/${f}" data-cap="${c}" class="zoom"><img src="img/${f}" alt="${c}" loading="lazy"></button>`).join("");
$("#track").innerHTML=items+items.replace(/class="zoom"/g,'class="zoom" tabindex="-1" aria-hidden="true"');
const track=$("#track");
const step=()=>{const b=track.querySelector("button");return b?b.offsetWidth+16:300};
const half=()=>track.scrollWidth/2;
/* حركة مستمرة بطيئة */
const SPEED=0.35;           /* بكسل لكل فريم: زوّد الرقم = أسرع */
let paused=false,resume=null,pos=0;
function loop(){
  if(!paused){pos+=SPEED;if(pos>=half())pos-=half();track.scrollLeft=pos}
  requestAnimationFrame(loop)}
function hold(ms){paused=true;clearTimeout(resume);if(ms)resume=setTimeout(()=>{pos=track.scrollLeft;paused=false},ms)}
function go(dir){hold(4000);let t=track.scrollLeft+dir*step();
  if(t<0){track.scrollLeft+=half();t+=half()}
  if(t>=half()){track.scrollLeft-=half();t-=half()}
  track.scrollTo({left:t,behavior:"smooth"})}
/* السهم اليمين يحرّك لليمين، والشمال للشمال */
$("#mqPrev").onclick=()=>go(1);
$("#mqNext").onclick=()=>go(-1);
track.addEventListener("pointerdown",()=>hold(5000));
track.addEventListener("wheel",()=>hold(5000),{passive:true});
track.addEventListener("touchstart",()=>hold(5000),{passive:true});
$(".mq").addEventListener("mouseenter",()=>hold(0));
$(".mq").addEventListener("mouseleave",()=>hold(600));
if(!reduce)requestAnimationFrame(loop);
}

/* chapters */
if($("#snapP"))$("#snapP").setAttribute("d",LOGOS.snap.d);
const DASH=`<div class="mdash growme"><div class="dash-h"><b>مبيعات المتجر السنوية<small>تقارير سلة · ريال سعودي · 2026 حتى أكتوبر</small></b><span class="dash-big" style="margin:0"><span class="num" style="font-size:34px" data-count="28" data-suf="x">0</span></span></div><div class="ybars" id="ybars"></div><div class="ylab" id="ylab"></div></div>`;
if($("#chaps")&&!$("#chaps").children.length)$("#chaps").innerHTML=BRANDS.map((b,i)=>`
 <article class="chap ${b.c}" id="store-${i+1}">
  <div class="cgrid">
   <div>
    <div class="c-head"><span class="c-no">0${i+1}</span><span class="c-lbl">${b.lbl}</span></div>
    <h3>${b.h}</h3>
    <p class="c-sub">${b.sub}</p>
    <div class="ckpi">${b.k.map(([v,s,l])=>`<div><span class="num">${v}${s?`<small>${s}</small>`:""}</span><span>${l}</span></div>`).join("")}</div>
   </div>
   <div>
    ${i===0?DASH:""}
    <div class="collage${i===0?" mini":b.p.length===2?" two":""}">${(i===0?b.p.slice(0,2):b.p).map(([f,c])=>`<button class="zoom" data-src="img/${f}" data-cap="${c}"><img src="img/${f}" alt="${c}" loading="lazy"></button>`).join("")}</div>
    <div class="c-note">🔒 البيانات الحساسة مخفية · اضغط على الصورة لتكبيرها</div>
   </div>
  </div>
  <button class="story-btn" aria-expanded="false">اقرأ القصة كاملة: التحدي، وإيش سويت، والنتيجة <span>↓</span></button>
  <div class="cstory">
   <div class="cs1"><h5><i>1</i>التحدي</h5><p>${b.ch}</p></div>
   <div class="cs2"><h5><i>2</i>اللي سويته</h5><ul>${b.did.map(x=>`<li>${x}</li>`).join("")}</ul></div>
   <div class="cs3"><h5><i>3</i>النتيجة</h5><p>${b.res}</p></div>
  </div>
 </article>`).join("");

/* hero bars */
const ymx=Math.max(...YEARS.map(d=>d[1]));
if($("#ybars")){$("#ybars").innerHTML=YEARS.map((d,i)=>`<div class="yb${d[1]===ymx?" hi":""}${i===YEARS.length-1?" cur":""}"><span class="v">${short(d[1])}</span><span class="bar" data-h="${(d[1]/ymx).toFixed(3)}"></span></div>`).join("");
$("#ylab").innerHTML=YEARS.map(d=>`<span>${d[0]}</span>`).join("");}

/* sticky stacking: if a card is taller than the screen, let it scroll fully before it sticks */
function fitSticky(){
  const hh=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--hh"))||76;
  $$(".chap").forEach(c=>{c.style.top="";if(getComputedStyle(c).position!=="sticky")return;const t=Math.min(hh+14,innerHeight-c.offsetHeight-14);c.style.top=t+"px"});
}
addEventListener("resize",fitSticky);addEventListener("load",fitSticky);fitSticky();
/* slight shrink of the card underneath as the next one covers it */
const chaps=$$(".chap");
function stackFx(){
  if(reduce)return;
  chaps.forEach((c,i)=>{const n=chaps[i+1];if(!n){c.style.transform="";return}
    const r=n.getBoundingClientRect(),cr=c.getBoundingClientRect();
    const p=Math.min(Math.max((cr.bottom-r.top)/cr.height,0),1);
    c.style.transform=`scale(${1-p*.1})`;c.style.filter=`brightness(${1-p*.25})`;c.style.borderRadius=`${34+p*10}px`;});
}
if(matchMedia("(min-width:981px)").matches)addEventListener("scroll",stackFx,{passive:true});

/* count up + reveal + grow */
function countUp(el){
  const t=+el.dataset.count,d=+(el.dataset.dec||0),suf=el.dataset.suf||"";
  if(reduce){el.textContent=fmt(t,d)+suf;return}
  const st=performance.now(),step=x=>{const p=Math.min((x-st)/1600,1);el.textContent=fmt(t*(1-Math.pow(1-p,3)),d)+suf;if(p<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;const el=e.target;
  if(el.dataset.count)countUp(el);
  if(el.classList.contains("rv"))el.classList.add("in");
  if(el.classList.contains("growme"))$$("[data-h]",el).forEach(b=>b.style.setProperty("--h",b.dataset.h));
  io.unobserve(el);
}),{threshold:.2,rootMargin:"0px 0px -40px 0px"});
$$("[data-count],.rv,.growme").forEach(n=>io.observe(n));

/* mobile story toggle */
document.querySelectorAll(".story-btn").forEach(b=>b.addEventListener("click",()=>{const c=b.closest(".chap");const o=c.classList.toggle("open");b.setAttribute("aria-expanded",o);b.firstChild.textContent=o?"اخفِ القصة ":"اقرأ القصة كاملة: التحدي، وإيش سويت، والنتيجة ";fitSticky&&fitSticky()}));
/* lightbox */
const lb=$("#lb");
const closeLb=()=>{lb.classList.remove("on");document.body.style.overflow=""};
document.addEventListener("click",e=>{const f=e.target.closest(".zoom");if(!f)return;$("#lbi").src=f.dataset.src;$("#lbc").textContent=f.dataset.cap;lb.classList.add("on");document.body.style.overflow="hidden";$("#lbx").focus()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb()});
lb.addEventListener("click",e=>{if(e.target!==$("#lbi"))closeLb()});
