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
    "revision": "ee98709dd3ad9a9a75b45d98cc399985"
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
    "url": "assets/js/2.08fb9a7f.js",
    "revision": "134a307adab38587fec8be216c42d461"
  },
  {
    "url": "assets/js/3.73ea2950.js",
    "revision": "9e5d685dc115ea5d004667141271ce6c"
  },
  {
    "url": "assets/js/4.a1b1200d.js",
    "revision": "497bd6e0a624a36cbf7b2cc90eb66b02"
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
    "url": "assets/js/8.0c221529.js",
    "revision": "a4e0c521e9ab297f49f0c7ce35799fff"
  },
  {
    "url": "assets/js/9.2dce55e1.js",
    "revision": "5636a841828a7f6846f89b1f6fbb380e"
  },
  {
    "url": "assets/js/app.ec651f1a.js",
    "revision": "e266c34551a05033c97621d85044aa82"
  },
  {
    "url": "blog/index.html",
    "revision": "1f9191654481fb2fe8b5a5720458b19a"
  },
  {
    "url": "blog/notes-promise.html",
    "revision": "d8d27ffe02193f29961b0b34f678018e"
  },
  {
    "url": "index.html",
    "revision": "819273276aeae8b9ddbf5033a91c79f4"
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
