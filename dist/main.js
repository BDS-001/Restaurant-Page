(()=>{"use strict";const e=document.querySelector("#content"),t=function(){e.innerHTML="";const t=document.createElement("div");t.className="homepage";const n=document.createElement("h1");n.innerHTML="The Bit & Byte Bistro Grand Opening!",t.append(n);const c=document.createElement("img");c.setAttribute("src",".././src/assets/images/res_pic.jpg"),c.setAttribute("alt","restaurant"),t.append(c);const r=document.createElement("p");r.innerHTML="this restaurant is so great is has really good food. the staff are nice, the decore is nice, everything in the place is nice!",t.append(r),e.append(t)},n=function(){document.querySelector("body");const e=document.createElement("div");e.className="header";const t=document.createElement("button");t.id="home",t.innerHTML="HOME";const n=document.createElement("button");n.id="menu",n.innerHTML="MENU";const c=document.createElement("button");return c.id="about",c.innerHTML="ABOUT",e.append(t),e.append(n),e.append(c),{headerBar:e,homepage:t,menu:n,about:c,renderHeader:function(){document.querySelector("body").prepend(e)}}}(),c=function(){const t=function(e,t,n,c){const r=document.createElement("div");r.className="item-container";const a=document.createElement("h3");a.innerHTML=`${e} ($${t})`,r.append(a);const o=document.createElement("div");o.className="item-img-container";const i=document.createElement("img");i.setAttribute("src",n),i.setAttribute("alt",e),i.className="item-img",o.append(i),r.append(o);const s=document.createElement("p");return s.innerHTML=c,r.append(s),r},n=[t("test",4.99,".././src/assets/images/res_pic.jpg","testing desc"),t("another test",5.45,".././src/assets/images/res_pic.jpg","anopther test for this")];return{renderMenu:function(){e.innerHTML="";const t=document.createElement("div");t.className="menu-container";const c=document.createElement("h1");c.innerHTML="MENU",t.append(c);for(let e=0;e<n.length;e++)t.append(n[e]);console.log(t),e.append(t)}}}(),r={renderAbout:function(){e.innerHTML="";const t=document.createElement("div");t.className="about-container";const n=document.createElement("p");n.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.",t.append(n),t.append(function(){const e=document.createElement("div");e.className="contact-container";const t=document.createElement("h1");t.innerHTML="Contact Information",e.append(t);const n=document.createElement("h3");n.innerHTML="Phone: 999-999-9999",e.append(n);const c=document.createElement("h3");c.innerHTML="Email: contact@bitandbytebistro.com",e.append(c);const r=document.createElement("h3");return r.innerHTML="Address: 123 realstreet rd",e.append(r),e}()),e.append(t)}};n.renderHeader(),t(),n.menu.addEventListener("click",c.renderMenu),n.about.addEventListener("click",r.renderAbout),n.homepage.addEventListener("click",t)})();