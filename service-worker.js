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
    "revision": "421e633d84afeb68dd4b787248e40ca8"
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
    "url": "assets/js/10.fbea7bca.js",
    "revision": "f78848aa3d5b16f5dccc0b45cee46587"
  },
  {
    "url": "assets/js/11.4bd8ab48.js",
    "revision": "dfe2534782531905039c491c2e78bdd2"
  },
  {
    "url": "assets/js/12.6579f1f7.js",
    "revision": "4d76178b2a55d973a24ed5a2e21c7ba1"
  },
  {
    "url": "assets/js/13.cd2fa3a7.js",
    "revision": "a44698e8e73291949012a49af18af0d7"
  },
  {
    "url": "assets/js/14.a4c8de90.js",
    "revision": "039f81ba713dee8a0c805b6e199a38dc"
  },
  {
    "url": "assets/js/15.f836e1f5.js",
    "revision": "4602e96983e9657aad9eb7cb19543abf"
  },
  {
    "url": "assets/js/16.f4a3d43f.js",
    "revision": "31fb59f7a8a1d03edbe2f8cf912d7c64"
  },
  {
    "url": "assets/js/17.5d3578f0.js",
    "revision": "dc6ab04b689ad5205da7042e1b7b087a"
  },
  {
    "url": "assets/js/2.93ef99a3.js",
    "revision": "007ff34ed9b92f8f22451753778794eb"
  },
  {
    "url": "assets/js/3.2659aaaf.js",
    "revision": "5d711a3c583eb610070ef72d4a90c5ad"
  },
  {
    "url": "assets/js/4.d181edf8.js",
    "revision": "aacaf33e5d8b62a5b49bb5c7c5a31c37"
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
    "url": "assets/js/7.0c1dd434.js",
    "revision": "3e5bdb27869b59c65f4bfdfcd7d9fd73"
  },
  {
    "url": "assets/js/8.77f245d0.js",
    "revision": "80e0651feaa7e2be941a7675907ef39a"
  },
  {
    "url": "assets/js/9.6a567b05.js",
    "revision": "7d009ff9725b68733843821bd74303f5"
  },
  {
    "url": "assets/js/app.1a4d3165.js",
    "revision": "0610d043a7748498aef285394018c289"
  },
  {
    "url": "blog/index.html",
    "revision": "70123c0a0c3c784989c4bf335727f43f"
  },
  {
    "url": "blog/notes-es6.html",
    "revision": "e2ce77c77c6bb37e03625e691d599796"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "b06f6645f0e3cb71d18fba7fd4cc0b5e"
  },
  {
    "url": "index.html",
    "revision": "43eb31bb1c4c6aac40bac520e57ffac4"
  },
  {
    "url": "interview/algorithm.html",
    "revision": "9ebd81f886a3b169159bafc38c150352"
  },
  {
    "url": "interview/EventEmitter.html",
    "revision": "0c61e1c1beac2be365d6d034cd215f30"
  },
  {
    "url": "interview/index.html",
    "revision": "25714a66f3d778906ce8a105cbf1cab2"
  },
  {
    "url": "interview/jswork.html",
    "revision": "9c85771d97dcfb170385f055131c2ad6"
  },
  {
    "url": "interview/onetest.html",
    "revision": "484b5025922519a37ee4dd7f26c2b1c6"
  },
  {
    "url": "material/function-fp.html",
    "revision": "6587977ef990e9308e40796d4bd3c60c"
  },
  {
    "url": "material/index.html",
    "revision": "d22591b3423e9cf56e009bffbebe8257"
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
