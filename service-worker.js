if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"5a2290a45173e18d6923e0ce3de81587"},{url:"/fonts/KumbhSans-Bold.ttf",revision:"0355899eebab4c5da750cb642f1b085f"},{url:"/fonts/KumbhSans-Regular.ttf",revision:"20190890b4cb9a4b6f6117a3f7479c51"},{url:"/fonts/kumbhsans-regular-webfont.woff",revision:"6a570e68ebf4c70b71d0813f33dcce0f"},{url:"/fonts/kumbhsans-regular-webfont.woff2",revision:"c91441314266f79d1033192de96f1c59"},{url:"/index.html",revision:"8d0da2d32154176d584b61e77ae407f7"},{url:"/main.8c674b0b.css",revision:"233aeee7353cd29c4b0f944f9066624a"},{url:"/main.8c674b0b0683a903a2e0.js",revision:"395999a7bc64d72aabe68113847d62df"},{url:"/vendors~main.8c674b0b0683a903a2e0.js",revision:"4fb4b26cb2156dfda7f8cb9e4f39ae31"}],{})}));
