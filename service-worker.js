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
    "revision": "7f260ae38a61fffa72b3fe8c1a625901"
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
    "url": "assets/js/10.245bf3d5.js",
    "revision": "4b735762f57096e197d97e212327fe0b"
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
    "url": "assets/js/app.4a754f01.js",
    "revision": "36fcaff5e20f2b8e1e667af7baa0d82e"
  },
  {
    "url": "blog/index.html",
    "revision": "fd868bd1bda558cc330c4821a4d53d99"
  },
  {
    "url": "blog/notes-es6.html",
    "revision": "f927c29a835accb85bf263e6bb22976d"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "98d019fe3ad11f9de422a3fc0275e8b1"
  },
  {
    "url": "index.html",
    "revision": "6a0db96302de02373d9d78d7c44f0e93"
  },
  {
    "url": "interview/algorithm.html",
    "revision": "33073c17f10f6e13d2d9591081264715"
  },
  {
    "url": "interview/EventEmitter.html",
    "revision": "0c8baa8b49d8ac1c9753710fcdd2e4a0"
  },
  {
    "url": "interview/index.html",
    "revision": "372af49d0f7ea9ff843bdd4a457cbfc5"
  },
  {
    "url": "interview/jswork.html",
    "revision": "c38752973ddad9802ef02e3ac118ea1e"
  },
  {
    "url": "interview/onetest.html",
    "revision": "55259ab75ced96fb8429701c8d562e97"
  },
  {
    "url": "material/function-fp.html",
    "revision": "aab169d762af2be763ea223672f454f3"
  },
  {
    "url": "material/index.html",
    "revision": "2b2b40866fc7d6be37d50753337ba6fa"
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
