/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "33a7dbd1f78872febf563e6151abef9b"
  },
  {
    "url": "assets/css/0.styles.9983b828.css",
    "revision": "a534c3d01d28b272856381d10e359a03"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.23a8f878.js",
    "revision": "7e5e1dd9397ec6be944593d5e66c5576"
  },
  {
    "url": "assets/js/2.08fb9a7f.js",
    "revision": "134a307adab38587fec8be216c42d461"
  },
  {
    "url": "assets/js/3.73ea2950.js",
    "revision": "9e5d685dc115ea5d004667141271ce6c"
  },
  {
    "url": "assets/js/4.dfb9703e.js",
    "revision": "e8a19b62aa85b510f9f34d11098e97f2"
  },
  {
    "url": "assets/js/5.691589d4.js",
    "revision": "26f76642c8566174830cc77f7d395c58"
  },
  {
    "url": "assets/js/6.b33f8e23.js",
    "revision": "1d8c00063195d33954581e4036487d4d"
  },
  {
    "url": "assets/js/7.c8f7a0f9.js",
    "revision": "440dcf274f30ed64c6d435e4d37a0e81"
  },
  {
    "url": "assets/js/8.20472c33.js",
    "revision": "3708206d23f976f4cebb5803dd70f617"
  },
  {
    "url": "assets/js/9.16072e07.js",
    "revision": "860faf5b37402809140cebe9edf5061d"
  },
  {
    "url": "assets/js/app.13e59573.js",
    "revision": "eb755be25fe83b3cc632c33600a056c9"
  },
  {
    "url": "blog/index.html",
    "revision": "76a87bfa36d69c7977161bd119148781"
  },
  {
    "url": "blog/introduce.html",
    "revision": "02b2e1ff62d78d45b4a1bd34236b0db3"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "84a72b56e14cc5081ed7a638f0b1c3a4"
  },
  {
    "url": "index.html",
    "revision": "3aa89df1d21d79a75b48e68cdc293719"
  },
  {
    "url": "verify_sheild.png",
    "revision": "6281b850f0a2a01c121cb037b55f4011"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
