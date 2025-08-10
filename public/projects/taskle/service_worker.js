const CACHE_NAME = "taskle-cache";

const FILES_TO_CACHE = [
  "assets/index-BnXj5n8d.js",
  "assets/index-CMQJaHAw.css",
  "index.html",
  "favicon.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(buildCache());
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

function buildCache() {
  return caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(
      FILES_TO_CACHE.map(
        (url) => new Request(url, { method: "GET", cache: "no-store" })
      )
    );
  });
}
