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
    "revision": "57c7018d2a8c6508ddaa473aaa225ecf"
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
    "url": "assets/js/13.33aea193.js",
    "revision": "dfba5150d4fbb22c99a6edf7dcab18ef"
  },
  {
    "url": "assets/js/14.7c96cab5.js",
    "revision": "cabea042c1e1db22d5a1b6321ed6f310"
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
    "url": "assets/js/4.04a31d5e.js",
    "revision": "2c495346e46eda02299c054fc8207378"
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
    "url": "assets/js/8.8c2be5ec.js",
    "revision": "e1a46beb695c6e7ca79dfab1d6ef38bd"
  },
  {
    "url": "assets/js/9.9d8af1f0.js",
    "revision": "6e577925e41d83f574f56d2598459bdf"
  },
  {
    "url": "assets/js/app.a59c3541.js",
    "revision": "c286ae290f2d1dffb555794a93d81140"
  },
  {
    "url": "blog/index.html",
    "revision": "a000fe938503fc2e2d7af935a53e857e"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "c923e07963c6be43935e38136128d915"
  },
  {
    "url": "index.html",
    "revision": "def62ac876fac8aa0fe0cf4fb59ab458"
  },
  {
    "url": "interview/algorithm.html",
    "revision": "6fdde6f8dba510239e3528e0fa36d9db"
  },
  {
    "url": "interview/index.html",
    "revision": "c70d05eaa3dde2787974e044b5995bad"
  },
  {
    "url": "interview/onetest.html",
    "revision": "53905f8bc80bf13961ae1b51495330c7"
  },
  {
    "url": "material/function-fp.html",
    "revision": "e250fe303ee97845952d200c8be91c62"
  },
  {
    "url": "material/index.html",
    "revision": "92a676b18530f9566e297aec5e0edc61"
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
