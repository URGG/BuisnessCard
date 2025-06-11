self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/manifest.json",
        "/les-digital-bc.jpg",
        "/icons/icon-192.png",
        "/icons/icon-512.png",
        "/images/step1.png",
        "/images/step2.png",
        "/images/step3.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
