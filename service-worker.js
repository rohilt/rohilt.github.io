!function(){"use strict";const e=["/client/index.dfcc3947.js","/client/about.d7b12e8d.js","/client/experience.ae9db6f7.js","/client/projects.bd20849d.js","/client/client.86d97a07.js"].concat(["/service-worker-index.html","/contact.svg","/favicon.png","/github.png","/global.css","/index.css","/linkedin.png","/location.svg","/logo-192.png","/logo-512.png","/mail.svg","/manifest.json","/mountain.png","/personal.png","/resume.pdf","/resume.svg","/tailwind.css","/underline.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1601147140557").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1601147140557"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1601147140557").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
