self.addEventListener('fetch', function (event) {
    /** An empty fetch handler! */
});

// self.addEventListener('install', function (e) {
//     e.waitUntil(
//         caches.open('the-magic-cache').then(function (cache) {
//             return cache.addAll([
//                 '/',
//                 '/index.html',
//                 // '/main.js',
//                 '/site.js'
//             ]);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     if (event.request.url === '') {
//         console.info('responding to dragon-server fetch with Service Worker! 🤓');
//         event.respondWith(fetch(event.request).catch(function (e) {
//             let out = {Gold: 1, Size: -1, Actions: []};
//             return new Response(JSON.stringify(out));
//         }));
//         return;
//     }
//
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });