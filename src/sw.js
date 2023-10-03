/* eslint-env serviceworker */

const version = "1.0.0";
const CACHE = "cache-only-" + version;

self.addEventListener("install", (evt) => {
    evt.waitUntil(precache().then(() => {
        return self.skipWaiting();
    }));
});

self.addEventListener("activate", (evt) => {
    evt.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener("fetch", (evt) => {
    evt.respondWith(networkOrCache(evt.request));
    //     .catch(function () {
    //     return useFallback();
    // }));
});


function networkOrCache(request) {
    return fetch(request).then((response) => {
        return response.ok ? response : fromCache(request);
    })
        .catch(() => {
            return fromCache(request);
        });
}

//function useFallback() {
//    return caches.open(CACHE).then(function (cache) {
//        return cache.match("./");
//    });
//}

function fromCache(request) {
    return caches.open(CACHE).then((cache) => {
        return cache.match(request, {ignoreSearch: true}).then((matching) => {
            return matching || Promise.reject("request-not-in-cache");
        });
    });
}

function precache() {
    const filesToCache = self.__WB_MANIFEST.map((e) => e.url);
    return caches.open(CACHE).then((cache) => {
        return cache.addAll([
            "./",
            ...filesToCache
        ]);
    });
}
