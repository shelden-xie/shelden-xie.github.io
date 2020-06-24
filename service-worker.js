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
    "revision": "786bfebcfca526867425711b99640124"
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
    "url": "assets/js/10.4648266c.js",
    "revision": "431ed0a4f8336e134432184aac6f1ad3"
  },
  {
    "url": "assets/js/11.1c1d2ae7.js",
    "revision": "49a94865ea9d32126a0e2dd62984469a"
  },
  {
    "url": "assets/js/12.0e2e8649.js",
    "revision": "a2770a19cda051f25c8466b6c14d92ac"
  },
  {
    "url": "assets/js/13.4eb3316b.js",
    "revision": "4805d402a6caf573c5e5a1034353e43c"
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
    "url": "assets/js/4.a1c15087.js",
    "revision": "9e6ac043db97427347ea6d8fb442890f"
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
    "url": "assets/js/7.5d606f0f.js",
    "revision": "98d86202a4fac213c9fba34d97d2ba03"
  },
  {
    "url": "assets/js/8.8c2be5ec.js",
    "revision": "e1a46beb695c6e7ca79dfab1d6ef38bd"
  },
  {
    "url": "assets/js/9.9d8af1f0.js",
    "revision": "6e577925e41d83f574f56d2598459bdf"
  },
  {
    "url": "assets/js/app.da7146cf.js",
    "revision": "980bfd4c33e385d37a17276f54982094"
  },
  {
    "url": "blog/index.html",
    "revision": "0bcd1974ffc36e9345cedd66ef9ca70c"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "9254bcd60201bfc01a47897105a7d147"
  },
  {
    "url": "index.html",
    "revision": "d18d09cf5e5d7bd998c881b0fd552c49"
  },
  {
    "url": "interview/algorithm.html",
    "revision": "b69ee3a113cb9cf16894d1db3fe047e8"
  },
  {
    "url": "interview/index.html",
    "revision": "2211bcd17638e449212a4008b685da21"
  },
  {
    "url": "interview/onetest.html",
    "revision": "00d6f0a66c549e04cc7bdf0d5ac7f812"
  },
  {
    "url": "material/index.html",
    "revision": "282f597c4f23077d38582c81ca3973cd"
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
