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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2e80808268f89552a7e0d8e39996204"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "577426df529176af892aea31213e4e59"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "f36bbb8d4e41b38a9d342114b1beff5a"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "45fbd4fca913be517bbc0b0aee10bb15"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "7cebe95f56b4565fa68a21b0fcc9d1e2"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "3f63b54cc6e8a41753d631a6056c7154"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "e1a2d6c92038f93a1259b84522f36146"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "797404e7cc915ecd010e26bbf67071d9"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "325d13cf9b212dd5774890b7e4a6bf6d"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "577426df529176af892aea31213e4e59"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "ade59ff3fdc0bbe45c2e2ebaf3293aec"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "63b5b9a428509431b87178c97df267e6"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "c4a29be4afba424b296d3cfdf0dbdd73"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "ce5039fafd4e00c9b8cd44f8a8dc64e7"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "3f63b54cc6e8a41753d631a6056c7154"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "29f9da30d79b329ea427fd38fe43e46e"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "759aaebdaa1a709fd721ebddb7c62e64"
  },
  {
    "url": "apple-icon.png",
    "revision": "759aaebdaa1a709fd721ebddb7c62e64"
  },
  {
    "url": "assets/css/0.styles.eabd6adb.css",
    "revision": "e55d1a0746f97a3e1f593bdbee43450b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b81b6b05.js",
    "revision": "d72fdaf8d142b335c4bb307a3aaab24a"
  },
  {
    "url": "assets/js/3.f1c5b5a4.js",
    "revision": "841d9087d0051ae068d46d76b611104e"
  },
  {
    "url": "assets/js/4.a428bf71.js",
    "revision": "c2221d9b52b714ef5fa6eb127384dd31"
  },
  {
    "url": "assets/js/5.9f8b9a2c.js",
    "revision": "cd523a5ea70ac11c25aca551892d24eb"
  },
  {
    "url": "assets/js/6.5ebf242c.js",
    "revision": "0cca41618fa20f199724cfbefff802fa"
  },
  {
    "url": "assets/js/7.c946190e.js",
    "revision": "ef02d00882790f34ab95e7ce9958d6ce"
  },
  {
    "url": "assets/js/app.2047f1a7.js",
    "revision": "5f64cbd9af9c3e1702d1f81a23ac08f4"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "a433716230c620402dc163a31c2ba6ac"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bf40f39db2fa351bab5dc917d438045f"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "e1a2d6c92038f93a1259b84522f36146"
  },
  {
    "url": "images/app-store-badge.png",
    "revision": "6549f239ac1c5a6ae09e02f681dda7ec"
  },
  {
    "url": "images/feature-1.png",
    "revision": "7f92a2e65e819e04d57f8f655dfaf64b"
  },
  {
    "url": "images/feature-2.png",
    "revision": "22c542fe555bccb50467d234b9df5da1"
  },
  {
    "url": "images/feature-3.png",
    "revision": "20ada7ed40df8959e4c24684b6386af1"
  },
  {
    "url": "images/feature-4.png",
    "revision": "b9adc015ea3d171db3691761292e17dd"
  },
  {
    "url": "images/google-play-badge.png",
    "revision": "446c374cff341d3ea4fecc91995e6a77"
  },
  {
    "url": "images/logo.png",
    "revision": "39e7c761b170db70291933966f2afba6"
  },
  {
    "url": "index.html",
    "revision": "d52b84f40b2969ee35d7676c6f2fac95"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "577426df529176af892aea31213e4e59"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "7d4c56223e49970b83f6a27510542442"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "ccc34e1f877302624aae8ad9ff7c6b4a"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "f9e0bc342d9b0ff861ac7a672578a57c"
  },
  {
    "url": "privacy-policy.html",
    "revision": "eca8c95543366bf57063bbd999458e36"
  },
  {
    "url": "scripts/main.js",
    "revision": "2f465bfa5ba80a745016a6cd0b1906ed"
  },
  {
    "url": "styles/index.css",
    "revision": "9d7a6ec0706746764180398496a4627b"
  },
  {
    "url": "terms-and-conditions.html",
    "revision": "ebd0d97c1a3c57a65aea348f0548b81f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
