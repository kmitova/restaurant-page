(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),c=n(645),d=n.n(c)()(a());d.push([e.id,"body {\n  font-family: sans-serif;\n}\n\n.hello {\n  color: red;\n}\n\nli {\n  cursor: pointer;\n  list-style: none;\n}\n\nul {\n  display: flex;\n  gap: 10px;\n}\n\n.hide {\n  display: none;\n}",""]);const r=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(d[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},d=[],r=0;r<e.length;r++){var i=e[r],s=o.base?i[0]+o.base:i[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,o);o.byIndex=r,t.splice(r,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<c.length;d++){var r=n(c[d]);t[r].references--}for(var i=o(e,a),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),d=n.n(c),r=n(565),i=n.n(r),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};function v(){const e=document.createElement("div"),t=document.createElement("h2");e.appendChild(t),t.textContent="About Us";const n=document.createElement("div");e.appendChild(n),n.textContent="here is  random description of the restaurant";const o=document.createElement("div");e.appendChild(o);const a=document.createElement("h3");o.appendChild(a),a.textContent="Hours";const c=document.createElement("div");o.appendChild(c),c.innerHTML="<p>Monday - Friday: 7am - 5pm</p><p>Saturday - Sunday: 7:30am - 4pm</p>";const d=document.createElement("div");e.appendChild(d);const r=document.createElement("h3");d.appendChild(r),r.textContent="Location";const i=document.createElement("p");return d.appendChild(i),i.textContent="13 Av. du Président Wilson, 75116 Paris, France",e}h.styleTagTransform=u(),h.setAttributes=i(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=document.getElementById("content");console.log("now in the index.js file");const C=document.createElement("div"),E=document.createElement("h1");E.textContent="Kati's Bakery and Café",C.appendChild(E),f.appendChild(C);const x=document.createElement("ul");f.appendChild(x);const y=document.createElement("li");y.textContent="Home",x.appendChild(y);const L=document.createElement("li");L.textContent="Menu",x.appendChild(L);const g=document.createElement("li");g.textContent="Contact",x.appendChild(g);let b=!1,M=!1,w=!1,T=document.createElement("div"),S=document.createElement("div"),A=document.createElement("div");f.append(T,S,A),S.classList.add("hide"),A.classList.add("hide"),T.classList.add("hide"),y.addEventListener("click",(()=>{b||(b=!0,T=v(),f.append(T),T.classList.remove("hide"),S.classList.add("hide"),A.classList.add("hide"),M=!1,w=!1)})),window.addEventListener("load",(()=>{b=!0,T=v(),f.append(T),T.classList.remove("hide"),S.classList.add("hide"),A.classList.add("hide"),M=!1,w=!1})),L.addEventListener("click",(()=>{M||(M=!0,S=function(){const e=document.createElement("div"),t=document.createElement("h2");t.textContent="Our Menu:",e.appendChild(t);const n=document.createElement("h3");n.textContent="Coffee:",e.appendChild(n);const o=document.createElement("div");e.appendChild(o);const a=document.createElement("h4");a.textContent="Espresso",o.appendChild(a);const c=document.createElement("p");c.textContent="3.5",o.appendChild(c);const d=document.createElement("div");e.appendChild(d);const r=document.createElement("h4");r.textContent="Latte",d.appendChild(r);const i=document.createElement("p");i.textContent="4.5",d.appendChild(i);const s=document.createElement("div");e.appendChild(s);const l=document.createElement("h4");l.textContent="Flat White",s.appendChild(l);const p=document.createElement("p");p.textContent="4.8",s.appendChild(p);const u=document.createElement("div");e.appendChild(u);const m=document.createElement("h4");m.textContent="Cappuccino",u.appendChild(m);const h=document.createElement("p");h.textContent="5",u.appendChild(h);const v=document.createElement("h3");return v.textContent="Food:",e.appendChild(v),e}(),S.classList.remove("hide"),f.appendChild(S),T.classList.add("hide"),A.classList.add("hide"),b=!1,w=!1)})),g.addEventListener("click",(()=>{w||(w=!0,A=function(){const e=document.createElement("div"),t=document.createElement("h2");e.append(t),t.textContent="Contact Us";const n=document.createElement("div");e.appendChild(n);const o=document.createElement("p");o.textContent="555-444-333";const a=document.createElement("p");return a.textContent="customersupport@katiscafe.com",n.append(o,a),e}(),A.classList.remove("hide"),f.appendChild(A),T.classList.add("hide"),S.classList.add("hide"),b=!1,M=!1)}))})()})();