const CACHE_NAME = "financial-calculator-v3";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];


// ============================================================
// INSTALL
// ============================================================

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(function (cache) {

                return cache.addAll(
                    FILES_TO_CACHE
                );

            })

            .then(function () {

                return self.skipWaiting();

            })

    );

});


// ============================================================
// ACTIVATE
// ============================================================

self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches.keys()

            .then(function (cacheNames) {

                return Promise.all(

                    cacheNames.map(
                        function (cacheName) {

                            if (
                                cacheName !==
                                CACHE_NAME
                            ) {

                                return caches.delete(
                                    cacheName
                                );

                            }

                        }
                    )

                );

            })

            .then(function () {

                return self.clients.claim();

            })

    );

});


// ============================================================
// FETCH
// ============================================================

self.addEventListener("fetch", function (event) {

    // Only handle GET requests

    if (
        event.request.method !== "GET"
    ) {

        return;

    }


    event.respondWith(

        caches.match(
            event.request
        )

        .then(function (cachedResponse) {

            // If file is already cached,
            // use the cached version.

            if (cachedResponse) {

                return cachedResponse;

            }


            // Otherwise try the internet.

            return fetch(
                event.request
            )

            .then(function (networkResponse) {

                // Cache successful responses
                // from the same website.

                if (
                    networkResponse &&
                    networkResponse.ok
                ) {

                    const requestURL =
                        new URL(
                            event.request.url
                        );


                    const currentURL =
                        new URL(
                            self.location.href
                        );


                    if (
                        requestURL.origin ===
                        currentURL.origin
                    ) {

                        const responseToCache =
                            networkResponse.clone();


                        caches.open(
                            CACHE_NAME
                        )

                        .then(function (cache) {

                            cache.put(
                                event.request,
                                responseToCache
                            );

                        });

                    }

                }


                return networkResponse;

            })

            .catch(function () {

                // If there is no internet and
                // the user is opening/navigating
                // the app, return index.html.

                if (
                    event.request.mode ===
                    "navigate"
                ) {

                    return caches.match(
                        "./index.html"
                    );

                }


                return new Response(
                    "",
                    {
                        status: 503,
                        statusText: "Offline"
                    }
                );

            });

        })

    );

});