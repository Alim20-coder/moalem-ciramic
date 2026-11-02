const U='https://jeddahline.com/wp-content/uploads/2025/';
const ART=[
{id:'tile-install',t:'خطوات تركيب السيراميك الصحيحة',d:'من تجهيز الأرضية حتى الترويب: كيف تحصل على سيراميك مستوٍ وثابت يدوم سنوات.',img:'08/tiling.webp',b:[
['تجهيز السطح','يجب أن تكون الأرضية نظيفة وجافة ومستوية. أي نتوء أو تجويف يظهر لاحقاً في السيراميك، لذلك تُفحص المناسيب وتُصحح قبل البدء.'],
['اللصق والتوزيع','نستخدم لاصقاً مناسباً لنوع البلاطة ومكان الاستخدام، وننشره بسكين مسننة ونضغط كل بلاطة جيداً حتى لا يبقى فراغ تحتها.'],
['الفواصل والترويب','نحافظ على فواصل متساوية بين البلاطات، وبعد جفاف اللاصق نملأها بالترويب المناسب وننظف السطح بعناية.']]},
{id:'ceramic-vs-parquet',t:'السيراميك أم الباركيه؟ كيف تختار لكل غرفة',d:'مقارنة بسيطة تساعدك على اختيار الأرضية الأنسب للمطبخ والمجلس وغرف النوم.',img:'09/Tile01-768x512.webp',b:[
['السيراميك','مقاوم للماء والحرارة وسهل التنظيف، لذلك يناسب المطابخ والحمامات والمداخل والأماكن كثيرة الاستخدام.'],
['الباركيه','يعطي دفئاً ومظهراً خشبياً أنيقاً ويناسب غرف النوم والمجالس، لكنه يحتاج حذراً من تسرب الماء والرطوبة العالية.'],
['القرار','إن لم تكن متأكداً، تواصل معنا ونعاين المكان ونقترح عليك الأنسب حسب الاستخدام والميزانية.']]},
{id:'remove-floor',t:'فك السيراميك والباركيه دون إتلاف المكان',d:'كيف تتم إزالة الأرضيات القديمة بأقل غبار وضرر قبل تركيب أرضية جديدة.',img:'08/takseer2.webp',b:[
['قبل الفك','يُنقل الأثاث وتُحمى الأبواب والجدران، وتُفك الوزرات بحذر حتى يمكن إعادة استخدامها إن كانت سليمة.'],
['أثناء الفك','الباركيه الطافي يُفك قطعاً بسهولة، أما السيراميك فيحتاج تكسيراً مضبوطاً حتى لا تتضرر الأرضية الخرسانية أو مواسير المياه.'],
['بعد الفك','نزيل الأنقاض وننظف ونسوّي الأرضية، ونفحص العزل قبل تركيب الأرضية الجديدة.']]},
{id:'parquet-care',t:'العناية بالباركيه ليدوم أطول',d:'عادات يومية بسيطة تحافظ على شكل الباركيه وتمنع تلفه.',img:'09/Tile01-768x512.webp',b:[
['التنظيف','امسح بقطعة قطن مبللة قليلاً فقط، وتجنب غمر الأرضية بالماء أو استخدام مواد قوية.'],
['حماية الأرضية','ضع لاصقات ناعمة تحت أرجل الأثاث ولا تسحب الأثاث الثقيل على الأرض، وجفف أي سائل يسقط فوراً.'],
['الظروف المحيطة','حاول تقليل التعرض المباشر لأشعة الشمس والرطوبة العالية لأنهما يغيّران لون الباركيه ويؤثران عليه.']]},
{id:'renovation-signs',t:'علامات تدل أن منزلك يحتاج ترميماً',d:'تعرّف على الأعراض التي لا يجب تجاهلها قبل أن تتفاقم وتزيد التكلفة.',img:'08/home-renovations.webp',b:[
['شروخ وتشققات','الشروخ الصغيرة تُعالج بسهولة، أما الممتدة أو المتسعة فتحتاج فحصاً لمعرفة سببها.'],
['رطوبة وتسربات','تقشر الدهان وبقع الماء والروائح الرطبة تدل غالباً على تسرب أو ضعف في العزل.'],
['أرضيات متضررة','بلاط مرتفع أو مكسور أو صوت أجوف عند المشي يعني أن اللاصق ضعف ويجب إصلاحه.']]},
{id:'roof-insulation',t:'عزل الأسطح ولماذا يهمّ قبل الصيف',d:'العزل الجيد يحمي المبنى من التسرب ويخفف الحرارة داخل المنزل.',img:'08/roof-insulation.webp',b:[
['العزل المائي','يمنع تسرب مياه الأمطار والرطوبة إلى الأسقف والجدران، وهو أهم خطوة في حماية المبنى.'],
['العزل الحراري','يقلل انتقال حرارة الشمس إلى الداخل فيصبح المنزل أبرد ويقل الحمل على المكيفات.'],
['التنفيذ','يجب تنظيف السطح ومعالجة الشروخ أولاً ثم تطبيق مواد العزل بالطريقة الصحيحة.']]}];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const tp=$('.top'),nav=$('#nav'),up=$('#up');
$('#burger').onclick=()=>nav.classList.toggle('open');nav.onclick=e=>{if(e.target.tagName==='A')nav.classList.remove('open')};
const sc=()=>{tp.classList.toggle('sc',scrollY>40);up.classList.toggle('show',scrollY>500)};sc();addEventListener('scroll',sc,{passive:true});
up.onclick=()=>scrollTo({top:0});
const card=a=>`<a class="card rv" href="articles.html#${a.id}"><div class="im"><img src="${U+a.img}" alt="${a.t}" loading="lazy"></div><div class="b"><h3>${a.t}</h3><p>${a.d}</p><span class="lnk">اقرأ المزيد <i class="bi bi-arrow-left"></i></span></div></a>`;
const L=$('#latest');if(L)L.innerHTML=ART.slice(0,3).map(card).join('');
const G=$('#gal');
if(G){const f=['07/construction.webp','07/construction2.webp'];for(let i=3;i<=52;i++)f.push('08/construction'+i+'.webp');
G.innerHTML=f.map((p,i)=>`<a class="g rv${i>11?' hid':''}" href="${U+p}" ${i>11?'hidden':''}><img src="${U+p}" alt="من أعمالنا" loading="lazy"></a>`).join('');
const items=$$('.g',G);let cur=0;const lb=$('#lb'),li=$('img',lb);
const show=i=>{cur=(i+items.length)%items.length;li.src=items[cur].href;lb.hidden=false};
items.forEach((a,i)=>a.onclick=e=>{e.preventDefault();show(i)});
$('.x',lb).onclick=()=>lb.hidden=true;$('.pv',lb).onclick=()=>show(cur+1);$('.nx',lb).onclick=()=>show(cur-1);lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
$('#more').onclick=function(){items.forEach(a=>a.hidden=false);this.remove();reveal()}}
const A=$('#arts');
if(A){const v=()=>{const a=ART.find(x=>x.id===location.hash.slice(1));scrollTo(0,0);
if(!a){A.className='grid3';A.innerHTML=ART.map(card).join('')}
else{A.className='art';A.innerHTML=`<a class="back" href="#"><i class="bi bi-arrow-right"></i> كل المقالات</a><img class="cov" src="${U+a.img}" alt="${a.t}"><h1>${a.t}</h1><p>${a.d}</p>${a.b.map(x=>`<h3>${x[0]}</h3><p>${x[1]}</p>`).join('')}<div class="cta"><b>تحتاج هذه الخدمة؟ تواصل معنا الآن</b><div class="acts"><a class="btn b1" href="tel:0533212119"><i class="bi bi-telephone-fill"></i> اتصل الآن</a><a class="btn b2" href="https://wa.me/966533212119"><i class="bi bi-whatsapp"></i> واتساب</a></div></div>`;document.title=a.t}
reveal()};addEventListener('hashchange',v);v()}
function reveal(){const S='.hd,.sub,.abc,.abi,.side,.svc,.card,.vm div,.proc-card,.proc-cta,.works-badge-wrap,.why li,.pic,.ci,.map,.fg>div,.cta';
$$(S).forEach(e=>{if(e.classList.contains('rv'))return;e.classList.add('rv')});
const io=window.__io||(window.__io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const e=x.target;
e.style.setProperty('--d',(([...e.parentNode.children].indexOf(e))%4)*.12+'s');e.classList.add('in');io.unobserve(e)}}),{threshold:.12,rootMargin:'0px 0px -40px'}));
$$('.rv:not(.in)').forEach(e=>io.observe(e))}
reveal();
$$('#yr').forEach(y=>y.textContent=new Date().getFullYear());
