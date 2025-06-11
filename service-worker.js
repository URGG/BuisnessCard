self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('leslie-card-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/manifest.json',
        '/les-digital-bc.jpg',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        '/icons/apple-icon-180.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
