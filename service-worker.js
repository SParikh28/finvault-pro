const CACHE_NAME = 'finvault-pro-v1';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Same-origin app files: serve cache-first, then update from network.
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
      if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)); }
      return response;
    }).catch(() => caches.match('./index.html'))));
    return;
  }
  // Cache successful CDN resources after the first online load for later offline use.
  if (url.protocol === 'https:') {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
      if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)); }
      return response;
    })));
  }
});
