if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/fonts/kumbhsans-regular-webfont.woff2",revision:"c91441314266f79d1033192de96f1c59"},{url:"/index.html",revision:"416a58a02f819b57f31236cd8a6ccdaa"},{url:"/main.c5644902.css",revision:"1905e37fa53602d3f9d5c101d0c1a354"},{url:"/main.c56449021a0f5b7ab845.js",revision:"4522523717d1611b7b5a8c4fef8abf50"},{url:"/vendors~main.c56449021a0f5b7ab845.js",revision:"02d490c47cc90a173cbe743c09c914f4"}],{})}));
//# sourceMappingURL=service-worker.js.map
