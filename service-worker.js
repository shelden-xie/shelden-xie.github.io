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
    "revision": "8537cffc0822277721f9bc5afda8e9fd"
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
    "url": "assets/js/10.4fee8cad.js",
    "revision": "1b21f247cee020bc0d84d1139edeef1e"
  },
  {
    "url": "assets/js/11.3118a9f2.js",
    "revision": "f497712351c982ed56172b008f6a1c9a"
  },
  {
    "url": "assets/js/12.cdfc3b43.js",
    "revision": "2575733f5d3df8e30d15cc4f9fec19d9"
  },
  {
    "url": "assets/js/13.63b5f0a6.js",
    "revision": "50276c43acdde03825cf23bbc2ae44c6"
  },
  {
    "url": "assets/js/14.16824abc.js",
    "revision": "7cfbf19eaacf85b91e1f253d52e514bd"
  },
  {
    "url": "assets/js/15.1571d5a5.js",
    "revision": "bff3f0f2a60d0f6901f7e2506bd1164c"
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
    "url": "assets/js/4.734a1615.js",
    "revision": "c712500c39436c268121f441169d3ec3"
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
    "url": "assets/js/app.e8686edd.js",
    "revision": "1a1ca8bf950812aa02a465507c732f69"
  },
  {
    "url": "blog/index.html",
    "revision": "dba8e990bd8993fcb43ec70ab6b251d7"
  },
  {
    "url": "blog/notes-es6.html",
    "revision": "3d99a621c2ed0ab53d89ae18fb3b50ba"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "9eb25537bb2cf8ec9377ab9ac77bf362"
  },
  {
    "url": "index.html",
    "revision": "8ba72d81b09203e5e9b458423516dc36"
  },
  {
    "url": "interview/algorithm.html",
    "revision": "fae80275b7ff298f6148fbea0d148d80"
  },
  {
    "url": "interview/index.html",
    "revision": "331c5bf4eb6228bc56ced3d8c528f1cd"
  },
  {
    "url": "interview/onetest.html",
    "revision": "cac93883f8a16839018525fb2d9726d8"
  },
  {
    "url": "material/function-fp.html",
    "revision": "e1fbb34b7bd46667aa739992677237b0"
  },
  {
    "url": "material/index.html",
    "revision": "d83a7632ed54424b4153cae392befb2f"
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
