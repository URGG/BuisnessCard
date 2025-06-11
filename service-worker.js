self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './style.css',
        './script.js',
        './les-digital-bc.jpg',
        './manifest.json',
        './icons/icon-192.png',
        './icons/icon-512.png',
        './icons/apple-icon-180.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});