
'use strict';(function(){const a=self,q=a.document;var g=a.navigator;const W=a.Audio;var r=a.String;const v=a.Object,X=a.Image,ia=g.platform,Y="CustomElementRegistry"in a,F=g.appVersion||g.userAgent||"",K=/Edg/.test(F),L=/OPR/.test(F);g=a.chrome;const n=g.runtime,G=g.i18n,p=g.tabs,M=g.windows,ja=n.getURL,k=n.sendMessage,Z=M.create,aa=p.query,ka=p.reload,ba=p.remove,la=p.update,N=G.getMessage,ca=Navigator.prototype,O=DocumentFragment.prototype,c=Document.prototype,da=DOMImplementation.prototype,w=
EventTarget.prototype,P=Event.prototype,m=Node.prototype,e=Element.prototype,t=HTMLElement.prototype,ea=HTMLMediaElement.prototype,ma=O.querySelector,x=c.createElement,fa=c.createDocumentFragment,na=c.querySelector,Q=w.addEventListener,u=m.appendChild,oa=m.removeChild,R=m.insertBefore,pa=r.prototype.charAt,S=e.attachShadow||null,qa=ea.play,l=a.JSON.stringify,T=a.parseInt,H=a.close,B=a.setTimeout,D=(r=v.getOwnPropertyDescriptor(m,"textContent"))&&r.set||null,ha=(r=v.getOwnPropertyDescriptor(c,"body"))&&
r.get||null;try{var I=v.getOwnPropertyDescriptor(Function.prototype,"call");I&&(I.configurable=!1,I.writable=!1,v.defineProperty(Function.prototype,"call",I))}catch(y){}try{O.querySelector=O.querySelectorAll=c.adoptNode=c.append=c.captureEvents=c.getElementById=c.getElementsByClassName=c.getElementsByName=c.getElementsByTagName=c.getElementsByTagNameNS=c.createDocumentFragment=c.createTextNode=c.createElement=c.createElementNS=c.evaluate=c.createEvent=c.createCDATASection=c.execCommand=c.querySelector=
c.querySelectorAll=c.open=c.write=c.writeln=c.prepend=c.importNode=c.registerElement=da.createHTMLDocument=da.createDocument=w.addEventListener=w.removeEventListener=w.dispatchEvent=P.preventDefault=P.stopPropagation=P.stopImmediatePropagation=m.appendChild=m.cloneNode=m.getRootNode=m.insertBefore=m.removeChild=m.replaceChild=e.attachShadow=e.createShadowRoot=e.getElementsByClassName=e.getElementsByTagName=e.getElementsByTagNameNS=e.append=e.remove=e.before=e.after=e.prepend=e.querySelector=e.querySelectorAll=
e.requestPointerLock=e.setAttribute=e.removeAttribute=e.removeAttributeNS=e.removeAttributeNode=e.replaceWith=e.insertAdjacentElement=e.insertAdjacentText=e.insertAdjacentHTML=t.focus=t.click=ca.sendBeacon=ea.play=()=>{}}catch(y){}delete a.AnimationWorklet;delete a.Audio;delete a.AudioContext;delete a.Blob;delete a.CSS;delete a.CustomElementRegistry;delete a.CustomEvent;delete a.DOMImplementation;delete a.DOMParser;delete a.Event;delete a.FormData;delete a.Image;delete a.JSON;delete a.LayoutWorklet;
delete a.MutationObserver;delete a.Navigator;delete a.PaintWorklet;delete a.Proxy;delete a.Range;delete a.Request;delete a.Response;delete a.ServiceWorker;delete a.SharedWorker;delete a.Storage;delete a.URL;delete a.WebAssembly;delete a.WebSocket;delete a.Worker;delete a.XMLHttpRequest;delete a.XMLHttpRequestUpload;delete a.XMLSerializer;delete a.XSLTProcessor;delete a.fetch;delete a.close;delete a.console;delete a.open;delete a.alert;delete a.confirm;delete a.eval;delete a.localStorage;delete a.postMessage;
delete a.prompt;delete a.stop;delete a.navigator;delete m.textContent;delete c.cookie;delete c.body;delete ca.serviceWorker;delete e.innerHTML;delete e.outerHTML;delete t.innerText;delete t.outerText;delete g.Event;for(var U in g)if("runtime"==U)for(var V in n)"function"===typeof n[V]&&"connect"!==V&&(n[V]=()=>{});else if("object"===typeof g[U])try{v.defineProperty(g,U,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(y){}var J;const ra=()=>{var a,c,e=!1,h=/Comodo/.test(F)?"dragon://":/OPR/.test(F)?
"opera://":"chrome://",g="menu0";k.call(n,l({id:3}),C=>{const b=b=>{var a=x.call(q,"div");a.className=0==b?"nav act":"nav";a.id="menu"+b;D.call(a,e[b]);Q.call(a,"click",m,!1);return a};a=C;var e=N.call(G,"menu").split(";");C=fa.call(q);var d=x.call(q,"div"),z=x.call(q,"div"),f=x.call(q,"div");d.id="panel";z.id="menu";z.className="w102";f.id="box";701===a.ui?f.style.setProperty("filter","sepia(.5)"):702===a.ui?f.style.setProperty("filter","grayscale(1) brightness(1.17)"):703===a.ui?f.style.setProperty("filter",
"invert(1) sepia(1) saturate(0) brightness(1.7) contrast(.8)"):704===a.ui?f.style.setProperty("filter","invert(.9) sepia(1) brightness(.85) hue-rotate(20deg)"):705===a.ui?f.style.setProperty("filter","invert(.9) sepia(1) brightness(0.95) hue-rotate(155deg)"):706===a.ui&&f.style.setProperty("filter","invert(.87) sepia(1) brightness(0.95) hue-rotate(0deg)");u.call(d,z);u.call(d,f);u.call(C,d);u.call(z,b(0));u.call(z,b(1));u.call(z,b(3));r(g,f);u.call(J,C);Q.call(f,"click",v,!1);B(()=>{d.className="w310"},
10);/Win/.test(ia)&&k.call(n,l({id:15,v:"000E"}),a=>{a&&a.data&&(c=a.data,z.className="w77",R.call(z,b(2),A("#menu3")),B(()=>{A("#i9").firstElementChild.src="img2031/menu/quickscan.png";A("#i14").firstElementChild.src="img2031/menu/cleanup.png";var a=N.call(G,"menu0").split(";");D.call(A("#i9").firstElementChild.nextElementSibling,a[8]);D.call(A("#i14").firstElementChild.nextElementSibling,a[12])},1))})});const m=a=>{var b=a.target.id;g!=b&&(g&&(A("#"+g).className="nav"),g=b,a.target.className="nav act",
r(b))},r=(a,b)=>{b=b||A("#box");if("menu0"==a)var e=[3,"red","close.png",0,7,0,"options1.png",18,3,"magenta","clear.png",1,7,0,"options1.png",18,7,0,"tabs1.png",2,3,"violet","cache.png",3,7,0,"trash1.png",4,3,"violet","history.png",5,7,0,"trash1.png",6,0,"blue","quickscan.png",7,3,"violet","downloads.png",9,7,0,"trash1.png",10,0,"choko","cookie.png",15,7,0,"trash1.png",16,0,"seawave",c?"cleanup.png":"memory.png",c?12:13,3,"violet","security.png",14,0,"carbon","incognito.png",11,0,"teal","report.png",
17,0,"magenta","options.png",18,7,0,"themes.png",19,0,"green","updates.png",20,0,"yellow","rate32.png",21];else"menu1"==a?e=[3,"seawave","plugins.png",0,3,"green","extensions.png",1,3,"orange","experiments.png",2,3,"magenta","internals.png",3,0,"violet","dns.png",4,3,"violet","history.png",5,0,"violet","cache.png",6,0,"red","key.png",7,3,"blue","version.png",8,7,0,"arrow1.png",9,0,"red","conflicts.png",10,0,"teal","policies.png",11,0,"blue","releases.png",12,7,0,"calendar1.png",13,0,"blue","credits.png",
14,0,"teal","bug.png",15]:"menu2"==a?e=[3,"green","winsec.png",0,3,"blue","info.png",1,3,"red","uninstall.png",2,3,"violet","defragmenter.png",3,3,"magenta","sound.png",4,3,"marine","network.png",5,7,0,"connect.png",6,7,0,"wireless.png",7,3,"teal","devices.png",8,3,"violet","display.png",9,3,"blue","services.png",10,3,"seawave","directx.png",11]:"menu3"==a&&(d(ja.call(n,"ctrb2031.html"),!1,!0,!1),H());if("menu3"!==a){var C=0;a=N.call(G,a).split(";");for(var g=fa.call(q),f,h,k,m,l,p,r,t,v,w,y=
0;y<e.length;y+=4)r=y/4,l=e[y],p=e[y+1],t=e[y+2],r="i"+r,t="img2031/menu/"+t,w=a[e[y+3]],7>l?(v=0,f=x.call(q,"div"),h=x.call(q,"div"),m=x.call(q,"div"),k=new X,p="btn "+p,2<l?(p+=" wide",f.className="btnBoxWide"):f.className="btnBox",h.id=r,h.className=p,k.className="icn",m.className="txt0",k.dataset.url=k.src=t,D.call(m,w),u.call(h,k),u.call(h,m),u.call(f,h),u.call(g,f)):(f=x.call(q,"div"),l=x.call(q,"div"),k=new X,k.src=t,f.id=r,f.className="adt a"+v,k.className="icnm",l.className="txt1",D.call(l,
w),u.call(f,k),R.call(h,f,m),R.call(h,l,m),v++),C++;for(;b.firstElementChild;)oa.call(b,b.firstElementChild);u.call(b,g);b.style.display=""}},v=a=>{a=a.target.id?a.target:a.target.parentElement;if("menu0"==g){var b=T(a.id.slice(1));0==b?k.call(n,l({id:4})):1==b?(k.call(n,l({id:0,local:1,url:"cleaner2031.html",w:770,h:500})),H()):2==b?E(a):3==b?(k.call(n,l({id:0,local:1,url:"cleaner2031.html",w:770,h:500})),H()):4==b?t(0,0,0):5==b?d("https://www.hotcleaner.com/cache-viewer.html",!1,!0,!1):
6==b?E(a,"cache"):7==b?d("https://www.hotcleaner.com/clear-browsing-history.html",!1,!0,!1):8==b?E(a,"history"):9==b?d("https://www.hotcleaner.com/clickclean-scan-for-malware.html",!0,!0,!1):10==b?d(h+"downloads/",!1,!0,!1):11==b?E(a,"downloads"):12==b?d("https://www.hotcleaner.com/cookie-wiper.html",!1,!0,!1):13==b?E(a,"cookies"):14==b?c?w(115):d(h+"system/",!1,!0,!1):15==b?d("https://www.hotcleaner.com/clickclean-app.html#chvjhaa",!0,!0,!1):16==b?Z.call(M,{url:h+"newtab/",incognito:!0,focused:!0,
top:-3,left:-8,width:screen.availWidth+16,height:screen.availHeight+6}):17==b?d("https://www.hotcleaner.com/security-and-privacy-software-feedback.html#chvjhaa",!0,!0,!1):18==b?(k.call(n,l({id:0,local:1,url:"cleaner2031.html",w:770,h:500})),H()):19==b?d("https://www.hotcleaner.com/clickclean-appearance.html",!1,!0,!1):20==b?d("https://www.hotcleaner.com/clickclean_chrome_update_checker.html#chvjhaa",!0,!0,!1):21==b&&d(K?"https://microsoftedge.microsoft.com/addons/detail/dacknjoogbepndbemlmljdobinliojbk":
"https://chrome.google.com/webstore/detail/ghgabhipcejejjmhhchfonmamedcbeod/reviews",!1,!0,!1)}else"menu1"==g?(b=T(a.id.slice(1)),0==b?d(h+"components/",!1,!0,!1):1==b?d(h+"extensions/",!1,!0,!1):2==b?d(h+"flags/",!1,!0,!1):3==b?d(h+"net-export/",!1,!0,!1):4==b?d(h+"net-internals/#dns",!1,!0,!1):5==b?d("https://www.hotcleaner.com/clear-browsing-history.html",!1,!0,!1):6==b?d("https://www.hotcleaner.com/cache-viewer.html",!1,!0,!1):7==b?Z.call(M,{url:"pgen2031.html",type:"popup",focused:!0,width:350,
height:216}):8==b?d(L?h+"about/":h+"version/",!1,!0,!1):9==b?d(K?"https://blogs.windows.com/msedgedev/":L?"https://blogs.opera.com/desktop/":"https://blog.google/products/chrome/",!1,!0,!1):10==b?d(h+(c?"conflicts/":"crashes/"),!1,!0,!1):11==b?d(h+"policy/",!1,!0,!1):12==b?d(K?"https://www.microsoftedgeinsider.com/download":L?"https://help.opera.com/en/opera-version-history/":"https://chromereleases.googleblog.com/",!1,!0,!1):13==b?d("https://www.chromium.org/developers/calendar",!1,!0,!1):14==b?
d("o"==pa.call(h,0)?h+"about/credits/":h+"credits/",!1,!0,!1):15==b&&d("https://code.google.com/p/chromium/issues/list",!1,!0,!1)):"menu2"==g&&(b=T(a.id.slice(1))+100,w(b))},w=a=>{k.call(n,l({id:15,v:"00"+a.toString(16)}),()=>{})},t=(a,b,e)=>{aa.call(p,b?{active:!0}:{},c=>{c.forEach((d,f)=>{b?ka.call(p,d.id):f?ba.call(p,d.id):la.call(p,d.id,{url:a?"about:blank":"chrome-search://local-ntp/local-ntp.html"});e&&f==c.length-1&&B(e,500)})})},E=(a,b,c)=>{var d,g=b?a.previousElementSibling:a.firstElementChild;
g.src="img2031/menu/wipe.gif";const f=()=>{if(d.p28&&W){var a=new W("img2031/erased.ogg");qa.call(a)}B(()=>{g.src="img2031/menu/done.png";B(()=>{g.src=g.dataset.url;c&&aa.call(p,{},a=>{a.forEach((a,b)=>{ba.call(p,a.id)})})},990);e=!1},300)};e||(e=!0,k.call(n,l({id:3}),a=>{d=a;b?"cookies"==b?k.call(n,l({id:31,v:[!0,!1,!1]}),f):(a={id:19,v:{since:-1},v2:{}},a.v2[b]=!0,k.call(n,l(a),f)):d.p0||c?t(c,0,()=>{k.call(n,l({id:18}),f)}):k.call(n,l({id:18}),()=>{d.p25?t(0,1,f):f()})}))},d=(a,b,c,d)=>{k.call(n,
l({id:9,url:a,selected:c,first:d,incognito:b}))},A=a=>S&&Y?ma.call(J,a):na.call(q,a)};Q.call(a,"DOMContentLoaded",()=>{J=S&&Y?S.call(ha.call(q),{mode:"closed"}):ha.call(q);var a=x.call(q,"link");a.rel="stylesheet";a.type="text/css";a.href="css2031/menu2031.css";u.call(J,a);B(ra,1)},!0)})();
