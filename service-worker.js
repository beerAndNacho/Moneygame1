const CACHE_NAME = 'below-the-waves-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/styles-part-1.css',
  '/styles-part-2.css',
  '/styles-part-3.css',
  '/styles-part-4.css',
  '/styles-part-5.css',
  '/game.js',
  '/game-part-1.txt',
  '/game-part-2.txt',
  '/game-part-3.txt',
  '/game-part-4.txt',
  '/game-part-5.txt',
  '/game-part-6.txt',
  '/game-part-7.txt',
  '/game-core.js',
  '/manifest.webmanifest',
  '/assets/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('/index.html'))),
  );
});
