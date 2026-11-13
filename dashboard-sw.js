self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Hämtar alltid färsk data (Firebase, väder, RSS) direkt från nätet
  event.respondWith(fetch(event.request));
});
