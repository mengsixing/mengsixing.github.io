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
    "revision": "727802854c50769dd07683f055f71144"
  },
  {
    "url": "assets/css/0.styles.f27f001d.css",
    "revision": "4966e63330d4be22d57b4a47f5c64602"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ad8d2bf.js",
    "revision": "fc08f5874dc16bd39b5f6582aa442950"
  },
  {
    "url": "assets/js/100.56ddc542.js",
    "revision": "e0ccc41708f3086eb8c6d3d71c589e5e"
  },
  {
    "url": "assets/js/101.405d395e.js",
    "revision": "c1063118bfb059debf1b397eb2fd20de"
  },
  {
    "url": "assets/js/102.509c30e4.js",
    "revision": "c1cb61cf8a19a3d2cb5c1a48dc612dff"
  },
  {
    "url": "assets/js/103.b98d88a5.js",
    "revision": "1efed67669c87b16cced23a20ce9e75a"
  },
  {
    "url": "assets/js/104.29245cfc.js",
    "revision": "c54bd283e12b6801995b77594e3650c1"
  },
  {
    "url": "assets/js/105.35d79a15.js",
    "revision": "5e6d907e587c9ad55b2f1b1325a56d67"
  },
  {
    "url": "assets/js/106.31e7fa8a.js",
    "revision": "15831b39965e12f70b3273b9f120050a"
  },
  {
    "url": "assets/js/107.31c950af.js",
    "revision": "572a80f8e39bf6cfd20f63448fabc0bf"
  },
  {
    "url": "assets/js/108.1fae7c10.js",
    "revision": "2a2629208e715b70f48ebdcdbc00b174"
  },
  {
    "url": "assets/js/109.211d74a1.js",
    "revision": "bd188adc4371b53db7e597609f1a7106"
  },
  {
    "url": "assets/js/11.46572d18.js",
    "revision": "5704a110a37e1051937966f128707f60"
  },
  {
    "url": "assets/js/110.5ec7e7cc.js",
    "revision": "39b4c5894c5e4de397c99aa98e70cee0"
  },
  {
    "url": "assets/js/111.e6cd0c64.js",
    "revision": "4a5269238600c00c1bef735ab3ecb25d"
  },
  {
    "url": "assets/js/112.4f84e074.js",
    "revision": "aa56da6375e19643ad58a9711958d980"
  },
  {
    "url": "assets/js/113.46ee9150.js",
    "revision": "bd2cfec82c89dc1298bfc9224ea473aa"
  },
  {
    "url": "assets/js/114.55e36af5.js",
    "revision": "28c6d50b8c960704ca928e968e61c552"
  },
  {
    "url": "assets/js/115.55bdfded.js",
    "revision": "f8b9524b99480b8b2d25c9556e18121a"
  },
  {
    "url": "assets/js/116.47f70309.js",
    "revision": "27154eeb563a0cf86e6bcabd13dd73e5"
  },
  {
    "url": "assets/js/117.d9a25804.js",
    "revision": "f338cf0064c002ad7c6cd1016c666565"
  },
  {
    "url": "assets/js/118.56db45aa.js",
    "revision": "650b55d432230068a0fff7677fa21789"
  },
  {
    "url": "assets/js/119.bd3372c9.js",
    "revision": "72a429738452f3d12c1a8005042aefa4"
  },
  {
    "url": "assets/js/12.fc4a32e1.js",
    "revision": "5a7430dfa8b62cbe6033beddeac70567"
  },
  {
    "url": "assets/js/120.74918aed.js",
    "revision": "d2bbc0d427da134b36b79d9e096e6bfa"
  },
  {
    "url": "assets/js/121.98306a4e.js",
    "revision": "7642b97c8b7f9cc3c015cdccba53a987"
  },
  {
    "url": "assets/js/122.f6296294.js",
    "revision": "406767302a08c5cd58b54839b73a271a"
  },
  {
    "url": "assets/js/123.9497d1f3.js",
    "revision": "17b5802bd83b1bd350874a4ad4bb2f41"
  },
  {
    "url": "assets/js/124.345fb8e5.js",
    "revision": "71ef8535b5d436347f089386699c5389"
  },
  {
    "url": "assets/js/125.167b12d9.js",
    "revision": "9bea1c4e577abdf42ac7b759a0ce4c46"
  },
  {
    "url": "assets/js/126.82fc0897.js",
    "revision": "755c3f9127c661e5701735716a39036a"
  },
  {
    "url": "assets/js/127.d49926f8.js",
    "revision": "9a05c14d330e612df0f2930103108972"
  },
  {
    "url": "assets/js/128.0fb5e1e1.js",
    "revision": "ffa9cb0eac1e1ae24e5164dcc319ea23"
  },
  {
    "url": "assets/js/129.1f880ad0.js",
    "revision": "728b35b3357379f3af3fe40f7468f76b"
  },
  {
    "url": "assets/js/13.441ff4dd.js",
    "revision": "b2abeb5b40817bd8c3820615c83b83ff"
  },
  {
    "url": "assets/js/130.b910ab0c.js",
    "revision": "553e470c653c4124cd612bd4bfc0d80e"
  },
  {
    "url": "assets/js/131.6308fa0b.js",
    "revision": "76b80f35292fa705e67fdec3ee720a47"
  },
  {
    "url": "assets/js/14.e0ff33db.js",
    "revision": "b20889967330746afbdf56fdb693a032"
  },
  {
    "url": "assets/js/15.e4e60ae6.js",
    "revision": "d41d80dd901cd0980fba73e4d1b91a36"
  },
  {
    "url": "assets/js/16.5f3f1ed5.js",
    "revision": "cb25981259c3ef7f064a85e58238f940"
  },
  {
    "url": "assets/js/17.e2459ca7.js",
    "revision": "0bdbfdcc2546629dcc26f4b844183834"
  },
  {
    "url": "assets/js/18.0dcad6e2.js",
    "revision": "f977d27edf17c0431f3cbf236d8bdfa9"
  },
  {
    "url": "assets/js/19.db3590f5.js",
    "revision": "7495610054da006f7302152d2228ae6e"
  },
  {
    "url": "assets/js/2.5dc819ef.js",
    "revision": "3bc8f4e99555d8d1c0189fe6ad0cd23d"
  },
  {
    "url": "assets/js/20.b77d426f.js",
    "revision": "9d4c0d32cd6320553df2e830c439dcbb"
  },
  {
    "url": "assets/js/21.e7745a29.js",
    "revision": "7457f3186f68bded47e281b0624f50c3"
  },
  {
    "url": "assets/js/22.8ab5ded0.js",
    "revision": "4a257eabe67070bd4414dd8938c1cf45"
  },
  {
    "url": "assets/js/23.a8b61f51.js",
    "revision": "d76c12e9af385a9ae3a1e77ddc54679b"
  },
  {
    "url": "assets/js/24.196e3cc6.js",
    "revision": "d286410d6f08c7ba2b6986a68743d012"
  },
  {
    "url": "assets/js/25.98b6b795.js",
    "revision": "36631baf21c4f8fad7887913463a87d2"
  },
  {
    "url": "assets/js/26.a792428c.js",
    "revision": "dbcebe58b6dfd5b77bf9babce465b8e5"
  },
  {
    "url": "assets/js/27.3e7b3f30.js",
    "revision": "3f42977b857ca587b41ecfd758725be0"
  },
  {
    "url": "assets/js/28.1c8d0f06.js",
    "revision": "728455facc27d88bb24278ecacd4075d"
  },
  {
    "url": "assets/js/29.1e7def0c.js",
    "revision": "1d33385b006063123d55cdb6633767e7"
  },
  {
    "url": "assets/js/3.f6a35f03.js",
    "revision": "58cc8fe2486c9a52bfa250914f5bba46"
  },
  {
    "url": "assets/js/30.c9cd0825.js",
    "revision": "8894690d5b6283757706dd95144e471c"
  },
  {
    "url": "assets/js/31.d7ac76a8.js",
    "revision": "60d8b820b61f664100e00cb09aeeee92"
  },
  {
    "url": "assets/js/32.9b5fc06e.js",
    "revision": "6ec33b52319a30218855601e77b73810"
  },
  {
    "url": "assets/js/33.98edcd21.js",
    "revision": "a3452397f0ab94b96ecfef4288e1672e"
  },
  {
    "url": "assets/js/34.1ef152dd.js",
    "revision": "cbfc0dec2c79ca4aa64973d928feefc0"
  },
  {
    "url": "assets/js/35.c5b0730d.js",
    "revision": "36ea3258efe90efe92fd56f534846ad7"
  },
  {
    "url": "assets/js/36.8d9a0bdc.js",
    "revision": "4119eaa4011aa8ab200216c288d30ec5"
  },
  {
    "url": "assets/js/37.8298c921.js",
    "revision": "d9cbf8d9cf40c40d6cbc00a4cab54255"
  },
  {
    "url": "assets/js/38.7fc3468a.js",
    "revision": "dd3a30c3447d1e11d0aec3000fb9ee13"
  },
  {
    "url": "assets/js/39.a64e5af1.js",
    "revision": "1df68140785b1030f2a59777fdbc8e5e"
  },
  {
    "url": "assets/js/4.119d9b03.js",
    "revision": "ab3a0651e96720e87cc5897ba9e7811b"
  },
  {
    "url": "assets/js/40.7d7fbe4c.js",
    "revision": "b2bce23a7c8167585d5d7bd44b5db895"
  },
  {
    "url": "assets/js/41.b8f653e3.js",
    "revision": "5ec7c3ecf8171a2a6956ed3ce16bd8e0"
  },
  {
    "url": "assets/js/42.0d80b9d7.js",
    "revision": "f1b27310f015d955f2e8efb0ae24ebdb"
  },
  {
    "url": "assets/js/43.f4661495.js",
    "revision": "3a79de62b144a551e934c5ad47644f80"
  },
  {
    "url": "assets/js/44.3f8bf02f.js",
    "revision": "c8ccc42b3b0569698bc60b6ac546f207"
  },
  {
    "url": "assets/js/45.73b5738e.js",
    "revision": "bc4f019c5ab56cc287d6ec940be2a3dc"
  },
  {
    "url": "assets/js/46.0351adee.js",
    "revision": "9244fb605c22f175d3f2e0063cfd780a"
  },
  {
    "url": "assets/js/47.634a0899.js",
    "revision": "09d25166627477adf319e4e306a72ea4"
  },
  {
    "url": "assets/js/48.d505a549.js",
    "revision": "71c3c1db818d6ab66b76aa4edf8c4280"
  },
  {
    "url": "assets/js/49.40e10f1b.js",
    "revision": "fd82765d91862e8e89434f2d2bbf4fba"
  },
  {
    "url": "assets/js/5.6e47d801.js",
    "revision": "224c8e6548d7e2b7d1b18fd5e62ecdce"
  },
  {
    "url": "assets/js/50.2a5ff664.js",
    "revision": "deb57b41733a4f1bb667a4cce8b072df"
  },
  {
    "url": "assets/js/51.b9b06b88.js",
    "revision": "c978d58cdd769fb59658df82f2bf7493"
  },
  {
    "url": "assets/js/52.ea2677e5.js",
    "revision": "65d6be9525566ef5473ee178513ebcce"
  },
  {
    "url": "assets/js/53.df78fd5c.js",
    "revision": "6c0b782158bad0353bcf60d1161896ad"
  },
  {
    "url": "assets/js/54.055a43e6.js",
    "revision": "b95e8aa09e7a755b50fcfed5fa6723e4"
  },
  {
    "url": "assets/js/55.6639974d.js",
    "revision": "07510ae75863dbd0ffb973a6b56cf913"
  },
  {
    "url": "assets/js/56.a69a874c.js",
    "revision": "630d6d77ad551068bd66c2e25f5f64d9"
  },
  {
    "url": "assets/js/57.1a8869e7.js",
    "revision": "d581da2563a6d8c4e3b0db1d7edb5fe6"
  },
  {
    "url": "assets/js/58.42fce731.js",
    "revision": "b5ede927ce3ebdee0a469890e4413f5b"
  },
  {
    "url": "assets/js/59.27cfc1f8.js",
    "revision": "911ee2a41751f8ef76c2fb4a96b65cb0"
  },
  {
    "url": "assets/js/6.f7ce3416.js",
    "revision": "075d8bbc96190f6e08509a9bbb72636e"
  },
  {
    "url": "assets/js/60.97f817bf.js",
    "revision": "49f6dbec85e8e5357b2debb0069bb646"
  },
  {
    "url": "assets/js/61.b57e91e3.js",
    "revision": "2641cb740cfe763f366221bd91f7f1db"
  },
  {
    "url": "assets/js/62.d26f18f1.js",
    "revision": "77c1a603ad7237f71c4765e2db5c77f8"
  },
  {
    "url": "assets/js/63.10bc6c93.js",
    "revision": "eb2516de7ce0d4edcedf064644c36cfa"
  },
  {
    "url": "assets/js/64.4784a8cf.js",
    "revision": "95dece425040941b4cf901bb441afb92"
  },
  {
    "url": "assets/js/65.5fa9edae.js",
    "revision": "deeacd764a400ac8e54a20cd348f3b3c"
  },
  {
    "url": "assets/js/66.f963e6d6.js",
    "revision": "c684e97a6a2ebe8635acfd6a49251fd2"
  },
  {
    "url": "assets/js/67.a930dc80.js",
    "revision": "c257f553d65eb59b4dac67504b7b26d0"
  },
  {
    "url": "assets/js/68.efbc5b2d.js",
    "revision": "b780a63ebfffcf788e51609bd8346692"
  },
  {
    "url": "assets/js/69.b046c825.js",
    "revision": "96ec472b6977484ce0ca62c8ac2f3fbd"
  },
  {
    "url": "assets/js/7.51086548.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/70.977f7f0c.js",
    "revision": "a12ca0e31b4102b811e78ef78a7a9c61"
  },
  {
    "url": "assets/js/71.8716c39c.js",
    "revision": "737b19bc3ac1142f13ddb1ecab064146"
  },
  {
    "url": "assets/js/72.6c2caa05.js",
    "revision": "4ac5124a053f10c30699bf69b749d09b"
  },
  {
    "url": "assets/js/73.a1a04950.js",
    "revision": "699c874b06c127a45084c0a36c99bba6"
  },
  {
    "url": "assets/js/74.c8725951.js",
    "revision": "207b05178093288a0f9e740b3615e6fc"
  },
  {
    "url": "assets/js/75.d5c9e618.js",
    "revision": "e910a57f50ba6789fa57d9fe3ace5c26"
  },
  {
    "url": "assets/js/76.bc3950a5.js",
    "revision": "99db0dfae16fed7016caa9c3576024cf"
  },
  {
    "url": "assets/js/77.e063f30c.js",
    "revision": "056da20f3521b7f4f02f4f477358e555"
  },
  {
    "url": "assets/js/78.753a34f0.js",
    "revision": "96b9c89fc10b5b181a198acc28f23894"
  },
  {
    "url": "assets/js/79.528e6870.js",
    "revision": "fbca7c13fc97df38ec204acdbcb6e152"
  },
  {
    "url": "assets/js/8.16d04e9d.js",
    "revision": "b73be9dbba1f113454741aa252073855"
  },
  {
    "url": "assets/js/80.672efe8f.js",
    "revision": "bdb64f760fb41bce79098dacad866654"
  },
  {
    "url": "assets/js/81.3adb623a.js",
    "revision": "9a67ceaf39656fcaf16364ddf773aea2"
  },
  {
    "url": "assets/js/82.ceb16a22.js",
    "revision": "749ca3d6f136e35bed4780fa583cdafb"
  },
  {
    "url": "assets/js/83.3883707e.js",
    "revision": "709f2769e5385b4be864027924aa0e6b"
  },
  {
    "url": "assets/js/84.53948675.js",
    "revision": "4d362fbe5cdf57a615c8936e9d1e3248"
  },
  {
    "url": "assets/js/85.b073a67c.js",
    "revision": "24c6ec87dad2805f2d6d8bc45a406976"
  },
  {
    "url": "assets/js/86.080891c9.js",
    "revision": "662f884b5d396d728273c9729ec96eea"
  },
  {
    "url": "assets/js/87.3c8b5c4c.js",
    "revision": "7992555592bdd580fb9d98d1b125f6d4"
  },
  {
    "url": "assets/js/88.34ddabfc.js",
    "revision": "262bfd5cc5c3b641425165e53a89fbe9"
  },
  {
    "url": "assets/js/89.1ade16fb.js",
    "revision": "fac54d455d9c2c0929fb2cae83ab68d3"
  },
  {
    "url": "assets/js/9.34ab4f37.js",
    "revision": "b12225d6dabef283c936cf81150a141c"
  },
  {
    "url": "assets/js/90.3650b814.js",
    "revision": "dbf0cc8ac9245806130b45321ad73184"
  },
  {
    "url": "assets/js/91.6913b17f.js",
    "revision": "439c6fa4520540de2038ba6cd41e88c1"
  },
  {
    "url": "assets/js/92.6ea36a1d.js",
    "revision": "bd85efcb19950f18c5acd1d65267c117"
  },
  {
    "url": "assets/js/93.3cbed0c0.js",
    "revision": "21f884fa945ddc890cd366253f4d742a"
  },
  {
    "url": "assets/js/94.bc2e956b.js",
    "revision": "d5317a17695f093cfcf19745f5129482"
  },
  {
    "url": "assets/js/95.be9264e3.js",
    "revision": "7674fb1fc8f5805b2ee4ababa9d70dcd"
  },
  {
    "url": "assets/js/96.d00b9c48.js",
    "revision": "9a1f797dc3dc32acd9386825a8a50691"
  },
  {
    "url": "assets/js/97.a02b2735.js",
    "revision": "b2191a6f224bdcc4f5913de582ab5cc4"
  },
  {
    "url": "assets/js/98.449ec175.js",
    "revision": "e0afaba21cb3e026590baeb46d01620e"
  },
  {
    "url": "assets/js/99.3c9e85db.js",
    "revision": "74277241e5a78b99a1f694f97bcb7d76"
  },
  {
    "url": "assets/js/app.c2a33776.js",
    "revision": "c111374c9e6257fc433aa7caaf1e7dd7"
  },
  {
    "url": "blog/2018.html",
    "revision": "b10cce40a31c19e25cc1b168ec4b9755"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "4d890eac2c421d811e34b6145a295493"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "58841a91c67135b86978025567998acd"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "5c0ea45cb27967cd21b204a2cefc6ec3"
  },
  {
    "url": "blog/base-computer-flow.png",
    "revision": "e095714298dbc676ea08e45dfb83a014"
  },
  {
    "url": "blog/base-computer-line.png",
    "revision": "8446b7225d5894993a57dddd5f67bee0"
  },
  {
    "url": "blog/base-computer.html",
    "revision": "134661a3a70e13477148f7f195320ba0"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "bf5c29de317c27b5fa8ced778fc1b6d0"
  },
  {
    "url": "blog/base-design-pattren-mvc.png",
    "revision": "7f500560b7f5db156f54401d4d7570d3"
  },
  {
    "url": "blog/base-design-pattren-mvp.png",
    "revision": "9eb71d6abfa0291cdfc2faf2d02071a0"
  },
  {
    "url": "blog/base-design-pattren-mvvm.png",
    "revision": "279d1579b7762f89e49fe6653c6ae40a"
  },
  {
    "url": "blog/base-function-monad.html",
    "revision": "d4d42b89cb2a18b5d453887ad11b11e9"
  },
  {
    "url": "blog/base-function.html",
    "revision": "2f093dbac7e9fa4772434dd5cee59fd4"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "92ddbe17e008eea2f0a0a2d9d526894d"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "54d65b3ac759710cb12553724e7e8d34"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "a4bc52204d9c6a365a5522cf5fe23ad4"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "bce51c77685f929e1392168bb091c5d7"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "d297b7de0fefea59c294acc17c03ccbd"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "41deb86118a7b1424b02affd740cd447"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "628455a31de0ea34179ff8efce20c8ba"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "6d5bdb58e928343be024e75722e8a56a"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "db8a452c1a26093efca6e2a4c5a69d5f"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "a4b96b327fa5655411d8f4e10c5b2e4b"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "6ea9dbd9b438719487ddca31b59e1c57"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "d2f281a019c08f7991c52bb1fc909421"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "fd51d86394a6a7591fb8777a9cce02f1"
  },
  {
    "url": "blog/css-houdini-star-fragments.png",
    "revision": "673a05390c131213c80b371259317397"
  },
  {
    "url": "blog/css-houdini-star.gif",
    "revision": "905af6ad0da0f34c544c53fcd0b266a9"
  },
  {
    "url": "blog/css-houdini-star.html",
    "revision": "927005525b25fc25fc052336e6f9c644"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "27ce5938ad1062a0c0760020062704e2"
  },
  {
    "url": "blog/css-ifc-baseline.jpg",
    "revision": "3257df202141626bcd373c1168be21c5"
  },
  {
    "url": "blog/css-ifc-box.jpg",
    "revision": "4b9457e2e5d4992ac6522214fbf6bf8c"
  },
  {
    "url": "blog/css-ifc-img1.png",
    "revision": "43a67d486c1c28da49fe638045236ee4"
  },
  {
    "url": "blog/css-ifc-img2.png",
    "revision": "f95164b2ce631ae62b98c1ce2bf2079e"
  },
  {
    "url": "blog/css-ifc-img3.png",
    "revision": "7e1e10bdb9e9a606b49a5d961e1b9170"
  },
  {
    "url": "blog/css-ifc-img4.png",
    "revision": "49646a1fa11442858640be387dfda6fd"
  },
  {
    "url": "blog/css-ifc.html",
    "revision": "c67ba4ad4f79e7de25379e28683b1f75"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "e2e905e875fd8b6ad09f575358f56c97"
  },
  {
    "url": "blog/css-next.html",
    "revision": "63deea46fc79983a95b2610e36dfd606"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "cbc0ffcb65a2bbac699436bb015610be"
  },
  {
    "url": "blog/css.html",
    "revision": "c798907e1a12258a27c38554da8ba8c9"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "16494cfd3b6fc79030fe2130b203e579"
  },
  {
    "url": "blog/devops-cli-diy-demo.png",
    "revision": "fb68b8b2efe526f029212ef6e54070b6"
  },
  {
    "url": "blog/devops-cli-diy-inquirer.gif",
    "revision": "e8c2aee89570fc8916099e34576ca232"
  },
  {
    "url": "blog/devops-cli-diy.html",
    "revision": "b0f9d04c3da45787a0bed754924e5f83"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "b8b8565b4e42776d45285012d582e4fc"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "bc1e2829adf1b5d8e61aa88e9e8e4273"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "a2c2106da6cac1fb387f68c6df723aa2"
  },
  {
    "url": "blog/devops-docker.png",
    "revision": "68303391c402338e2841fba331dee61a"
  },
  {
    "url": "blog/devops-git-rebase.jpg",
    "revision": "abb1767186fb9fa30f5b0e5b6386d496"
  },
  {
    "url": "blog/devops-git.html",
    "revision": "b31ab897f38f4d986cf932d4bae5a0c8"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "d577449dd9d4ab683aa67be08006ec8c"
  },
  {
    "url": "blog/devops-image.png",
    "revision": "e02bfa355435c1f45d2306cc347fe654"
  },
  {
    "url": "blog/devops-kubernetes-step1.png",
    "revision": "a383ca6b10cf54cdf08b09e93daf374f"
  },
  {
    "url": "blog/devops-kubernetes-step2.png",
    "revision": "3ab73fdd30236034fce0b2630b286349"
  },
  {
    "url": "blog/devops-kubernetes-step3.png",
    "revision": "9a58967ee520665e3076e17966144739"
  },
  {
    "url": "blog/devops-kubernetes-step4.1.png",
    "revision": "e60ee965ffe978807b7dc94967bf62e6"
  },
  {
    "url": "blog/devops-kubernetes-step4.png",
    "revision": "1e7556d81ee883f8ae88aca2bf8b61e3"
  },
  {
    "url": "blog/devops-kubernetes-step5.png",
    "revision": "2ca05d57a0d8ffe340630b10e04da300"
  },
  {
    "url": "blog/devops-kubernetes-step6.png",
    "revision": "6d670ecf5bc26f818e15a35346fbe1d6"
  },
  {
    "url": "blog/devops-kubernetes-step7.png",
    "revision": "33381fdc74674697be73e50569e647d3"
  },
  {
    "url": "blog/devops-kubernetes-step8.png",
    "revision": "00bd1e65a6f816f81efc2318dae948f3"
  },
  {
    "url": "blog/devops-kubernetes.html",
    "revision": "51271d3ad439ea63dac968f4fd041d87"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "bd41ee65ffeedd76ebf9dbc5ec02f920"
  },
  {
    "url": "blog/devops-performance-cache.png",
    "revision": "8f33689a73abfb2f216bb69095aab475"
  },
  {
    "url": "blog/devops-performance-page_render.png",
    "revision": "f0817ffb80d8ce5be57a86304b522efd"
  },
  {
    "url": "blog/devops-performance-render.png",
    "revision": "6ced6b1be85cd8ce2e1ece5aaec65fef"
  },
  {
    "url": "blog/devops-performance.html",
    "revision": "61d0cb683ab60056834ed35d5bdb2bd6"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "9435a3b48c58f19d34c5bf1be82685dc"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "068a293a382569529f6b74a7509ef74a"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "7e57a69a78ab5a8298171ed834b178e8"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "7fda36913d20a708586282967cfd225f"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "c3b5fcb579a4eff1cbb460f946e9e510"
  },
  {
    "url": "blog/index.html",
    "revision": "e30804aa70f03252e4cf674fcbf4d422"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "8e6cd12f08513e94b289d41d477403af"
  },
  {
    "url": "blog/js-event.html",
    "revision": "6526d79524f4eb1d8fb1accf804140ac"
  },
  {
    "url": "blog/js-form.html",
    "revision": "bdedc6ffb370ee624c38120abcd05090"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "bde6dc70154feee590d1c4b7b98b55ec"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "2b0ba6f5970f899416942faf73369066"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "3e0d16ccc004305c760cebcd72eb632e"
  },
  {
    "url": "blog/js-jsBridge-core.png",
    "revision": "aa05dbcd700744448fa64ee9e81b8e75"
  },
  {
    "url": "blog/js-jsBridge-detail.png",
    "revision": "a0801c4e787701b363e1ca6fc0d50832"
  },
  {
    "url": "blog/js-jsBridge.html",
    "revision": "7503bde990459d9719bf80033f2335c9"
  },
  {
    "url": "blog/js-module.html",
    "revision": "d9568e1f5f66335cb42b004e4c4001d7"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "8d2d68eaf4234880b8c2ea8c612b0211"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "cd66df860794be1d78ae3ecaefab8dee"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "1549fc13b8c27af88ae9f6eeb618ccb4"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "214031b357c0c7bcb71030ab9af88711"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "69dae82f046d482cbdb9e35bb727072d"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "2d03fe14f7d58609eb56cb582811aa73"
  },
  {
    "url": "blog/js-this.html",
    "revision": "295f7b54d31e6c9b55ded5268f061c54"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "d9be0ac14ba727430753ad01a292e787"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "db4ae3f7f54fcf04e49dea15e13f21a2"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "4e73f6f15059515c751a2945e1363ed3"
  },
  {
    "url": "blog/library-miniProgram-appService.png",
    "revision": "a9d1133bb0109828ef08495fdc020d96"
  },
  {
    "url": "blog/library-miniProgram-component.jpeg",
    "revision": "711a1e88bba7265c4a2de4666a04b7ac"
  },
  {
    "url": "blog/library-miniProgram-jiagou.png",
    "revision": "39a3f88f3d9482b722c058db8b6a3a9f"
  },
  {
    "url": "blog/library-miniProgram-jiagou2.png",
    "revision": "ea953d686390837662ebde6f3a1fbbf4"
  },
  {
    "url": "blog/library-miniProgram-wxml.png",
    "revision": "f80cb9e26caa6f28355fc712f42ddb9c"
  },
  {
    "url": "blog/library-miniProgram-wxss.png",
    "revision": "dce54cb46a769cd5f0d494d6c0a727e2"
  },
  {
    "url": "blog/library-miniProgram.html",
    "revision": "e6ec1cc9017a17ddd121eaa885fb791c"
  },
  {
    "url": "blog/library-node-async.png",
    "revision": "4194c06b592b3c0dc430fabb70927ca6"
  },
  {
    "url": "blog/library-node-backend.png",
    "revision": "3e4e3bf6802d9a3d4782c7ed74c3837a"
  },
  {
    "url": "blog/library-node.html",
    "revision": "4625b656a9ea2d7c7374c6190b4d6f33"
  },
  {
    "url": "blog/library-react-batchedUpdates.png",
    "revision": "3fd9fa9462ff121c2242e18db6219faf"
  },
  {
    "url": "blog/library-react-children-map.png",
    "revision": "16443a082ef65bdb180c76d1a942a9ba"
  },
  {
    "url": "blog/library-react-code-1.html",
    "revision": "d10cdad87df7789e36e1804bee3ca065"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "5ae59169dddc7845392a4a0cf309333a"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "a44fc8c174829c82eaed46a136b81ee1"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "3f9dba9d5046be89414586a2b267c57f"
  },
  {
    "url": "blog/library-react-code3-fiber-detail.png",
    "revision": "d3f432d807596a32698dee5b44fd0bb6"
  },
  {
    "url": "blog/library-react-code3-fiber.png",
    "revision": "6768aba4e04b67193a700c283661148b"
  },
  {
    "url": "blog/library-react-code4-effectlist.png",
    "revision": "18d7e632db3244d234cb1e7f497c9637"
  },
  {
    "url": "blog/library-react-code4-render-phase.png",
    "revision": "287b0a3564174ba2cd2cb7d837f4cdfc"
  },
  {
    "url": "blog/library-react-code4-updatequeue.png",
    "revision": "560191954e084b0cf18336c920d2b9fb"
  },
  {
    "url": "blog/library-react-code4-workinprocess.png",
    "revision": "38d278ac5274ff8fcfdaec47bfaca278"
  },
  {
    "url": "blog/library-react-effect-2.png",
    "revision": "52214aec0f93351b042032a1f6962e54"
  },
  {
    "url": "blog/library-react-effect.png",
    "revision": "c5d667a728acff34d14b041891dd2d73"
  },
  {
    "url": "blog/library-react-hooks.html",
    "revision": "34876633a5247e60ec492aa3ed0ccde8"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "72b7ce3f25609a2ec2b46e05b40f2347"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "42f4537ac194f52969f6fe4facd37e6e"
  },
  {
    "url": "blog/library-react-scheduler-fiber-scheduler.png",
    "revision": "5614e29c9aecf8cea3589cc1aeeaea8b"
  },
  {
    "url": "blog/library-react-scheduler-render-root.png",
    "revision": "6f8ace8bff5693dd642d9d83eeeb2c41"
  },
  {
    "url": "blog/library-react-ssr.html",
    "revision": "6348309f4b4d1ab12e1a5e792e5e4aa5"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "87de7f9813ad7825fc67dcbcee605e1a"
  },
  {
    "url": "blog/library-redux-code-flow.png",
    "revision": "92a506e8ddb170e872237052c604c574"
  },
  {
    "url": "blog/library-redux-flux.png",
    "revision": "f719fccae7b22258f97c2c3f9490f3f2"
  },
  {
    "url": "blog/library-redux-mvc.png",
    "revision": "7b8ac74d335701de13b99290ab65240a"
  },
  {
    "url": "blog/library-redux.html",
    "revision": "0630542eaa3634ab80d91aa5ea9bc418"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "50cef79b335f74bccd2b3e46ff6b860c"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "e6abc52f3549a83b2523bc1a0a4dd03b"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "9dff7ae2126d1a48d06395540fff8af0"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "91a3abf54bef54c4b382255637602039"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "11aabebec0d242948e40c88287f7105f"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "d1b1fb5680c530cda5f9c9045eb95348"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "eedae4d1dafeb7559bb58c5d99200557"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "5a2c9a55343c6140eb216f1fa9df7d8b"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "d2caa82237a15376a17a157222eb4ce5"
  },
  {
    "url": "blog/operation-nginx-load-balancing-loadBalancing.png",
    "revision": "7a6ec47ab1d5d6a9a0668ea67c0dcd68"
  },
  {
    "url": "blog/operation-nginx-load-balancing-reverseProxy.png",
    "revision": "5e9558d00008ece24f3f3b50918c76a6"
  },
  {
    "url": "blog/operation-nginx-load-balancing.html",
    "revision": "9e7e160980c9c8a903fc8f1245cc2960"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "48a1f8012bcbb1021c77d22eaaa7fa25"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "074b1af044900d18072cf0cea0ac8710"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "f62a93aaa6e85a7aa059d0744958947c"
  },
  {
    "url": "blog/osi-http-0rtt.png",
    "revision": "a81b6efb8af80fb839b1181b210f4a21"
  },
  {
    "url": "blog/osi-http-binary_framing_layer.svg",
    "revision": "ae09920e853bee0b21be83f8e770ba01"
  },
  {
    "url": "blog/osi-http-duolufuyong-1.png",
    "revision": "29bab6ea23377b0d2fe85a97680600e8"
  },
  {
    "url": "blog/osi-http-duolufuyong.png",
    "revision": "8e01bb02ebacabc03da3e79dab7ee8d9"
  },
  {
    "url": "blog/osi-http-header_compression.svg",
    "revision": "feb142f82737d148ed5bcefd91915276"
  },
  {
    "url": "blog/osi-http-jiami.png",
    "revision": "71b35bce707111d2f81dd87e2024f8bb"
  },
  {
    "url": "blog/osi-http-push.svg",
    "revision": "d759887277b266a42c526643285dd244"
  },
  {
    "url": "blog/osi-http-streams_messages_frames.svg",
    "revision": "8e6931bb40fc26c511ad15645e7b6113"
  },
  {
    "url": "blog/osi-http.html",
    "revision": "d341597522cd8196a9d54a0c1cfbf679"
  },
  {
    "url": "blog/osi-https-hash1.png",
    "revision": "87c69f423d32966c5e0890e0ae0ed637"
  },
  {
    "url": "blog/osi-https-hash2.png",
    "revision": "91d4b06df8230a597c054f83dabf5a9b"
  },
  {
    "url": "blog/osi-https-tsl.png",
    "revision": "3cbf6a508ade1eb3c3e7e819a48c5c7e"
  },
  {
    "url": "blog/osi-https.html",
    "revision": "13b3517c8b37e617ea6cdcf504378080"
  },
  {
    "url": "blog/osi-https.png",
    "revision": "99291362aca06ef1c282cf0561fd37d4"
  },
  {
    "url": "blog/osi-tcp-arq.png",
    "revision": "a56f5dd37438dbcc059b1b11b3a6ac6c"
  },
  {
    "url": "blog/osi-tcp-cancel.png",
    "revision": "9bb6008d0e5d389285bdd5a7f1c914b7"
  },
  {
    "url": "blog/osi-tcp-connect.png",
    "revision": "27055efa76010e511c26f44c403116fe"
  },
  {
    "url": "blog/osi-tcp-header.png",
    "revision": "77d18b4b741565596e54b545dca60ebe"
  },
  {
    "url": "blog/osi-tcp-resend-congestion-avoidance.png",
    "revision": "ca1f34dc9951e3dd44770620fd900c05"
  },
  {
    "url": "blog/osi-tcp-resend.png",
    "revision": "494d24b3f888b61dd1f0e43318698272"
  },
  {
    "url": "blog/osi-tcp.html",
    "revision": "0410c899630b9774f89185bbd40798db"
  },
  {
    "url": "blog/osi-web-login-oauth.jpg",
    "revision": "2dae82002027e00a585f7b6b673b397e"
  },
  {
    "url": "blog/osi-web-login-sso1.jpeg",
    "revision": "ec1c5788d8b1d7140ddd6e6a2878c3ea"
  },
  {
    "url": "blog/osi-web-login-sso2.jpeg",
    "revision": "8d17a3f406ccd2f845cbcd40a9ee531a"
  },
  {
    "url": "blog/osi-web-login-sso3.jpeg",
    "revision": "94ce0cdc0d6db01494df7ce516a6b575"
  },
  {
    "url": "blog/osi-web-login.html",
    "revision": "ba0fd7e2a1d0febfa81ee8ce72f7b200"
  },
  {
    "url": "blog/osi-web-security-1.png",
    "revision": "ca28968daa49b9787e11039c2c3a9d27"
  },
  {
    "url": "blog/osi-web-security-2.png",
    "revision": "cec7aaca64d04a1a0545db9bae985ee1"
  },
  {
    "url": "blog/osi-web-security-csrf.jpg",
    "revision": "0c8a1016b3659bf99bbf1db4759b1e1b"
  },
  {
    "url": "blog/osi-web-security.html",
    "revision": "ccf336d5dcda26371d09796c017652de"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "ebb7356baf8b8ce0752fd804fb6f89db"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "e6a40d1c181e88463e2d7e0105de9487"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "fd885097176fb0fffedd36b51677ef59"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "1ef2667c6746b8692efa0af6b6c60892"
  },
  {
    "url": "blog/vue-dir.png",
    "revision": "5c582c957a5cff9cf58ab13b73b411de"
  },
  {
    "url": "blog/vue-flow.png",
    "revision": "cd92342a375f5a699de658e857cc4937"
  },
  {
    "url": "blog/vue-mvvm.png",
    "revision": "a2c5e4e7a6be3029a5fd6818cc89cb0e"
  },
  {
    "url": "blog/vue-platforms.png",
    "revision": "89b10f58b5d84dc85e84a819350ce965"
  },
  {
    "url": "blog/冒泡排序.gif",
    "revision": "e1a5e701ab13aa61112dcf0d7732e929"
  },
  {
    "url": "blog/希尔排序.gif",
    "revision": "26d982ad88862f930b1b7e67ad87b37f"
  },
  {
    "url": "blog/归并排序.gif",
    "revision": "b99460f4173a23f9ed1be77f2f9fd224"
  },
  {
    "url": "blog/快速排序.gif",
    "revision": "90fb5f9dd147f5acbb04419c8c8b4ac0"
  },
  {
    "url": "blog/插入排序.gif",
    "revision": "ffda0249330d775e6fd3488f198c5c43"
  },
  {
    "url": "blog/选择排序.gif",
    "revision": "f37e5468225dff6e2edd0d9bec3778a2"
  },
  {
    "url": "book/book-act-like-a-leader.html",
    "revision": "ec877523724d1ede8854e53cb5197fad"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "81668dd02d50dc8df54653ea3408299f"
  },
  {
    "url": "book/book-code.html",
    "revision": "4ecc65b4d4ae4f4a3594f1521eb5e91b"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "7c0fd8974921a1927a9d1fdfeacb17e2"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "d7a2cedfe0dd3ae3f083467382beac8a"
  },
  {
    "url": "book/book-http2.html",
    "revision": "d902f649f7d6e5ae13a3ef26a408f407"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "3d77fbfff78da7e1866ad82ff2c681e1"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "3810ae34d9a9d6e91bd02fc280e76aef"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "c0dfc67274abd867a40ec234b88fe81a"
  },
  {
    "url": "book/book-regular.html",
    "revision": "77e7c348110a834a9920da95a2815363"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "463130f55ba6d87cfc6dc0f5266ac065"
  },
  {
    "url": "book/book-webgl-flow.jpeg",
    "revision": "4e3f5cc4ea17e4f086d6d0b1f725793f"
  },
  {
    "url": "book/book-webgl-structure.png",
    "revision": "78903b0d4e9a363e41966d81ae5c464e"
  },
  {
    "url": "book/book-webgl.html",
    "revision": "bec9ff1e0854a0cb63fc0afca7b0667f"
  },
  {
    "url": "book/index.html",
    "revision": "2c33a21c7a46d71c8d33d1b5ba91c560"
  },
  {
    "url": "index.html",
    "revision": "83d90dda195f65e0591763455f58474e"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "d7f710e80a2df2401c34987445ab3b50"
  },
  {
    "url": "interview/base.html",
    "revision": "927405b07761357b1bdca3699638ac7f"
  },
  {
    "url": "interview/css.html",
    "revision": "6e1f2fafda075ea77527a41a17834295"
  },
  {
    "url": "interview/framework.html",
    "revision": "976ee92cde7428c9ac399a2ad43fcec9"
  },
  {
    "url": "interview/html.html",
    "revision": "c8e5602d68419bfc28e7817411df3f07"
  },
  {
    "url": "interview/index.html",
    "revision": "3a7896fe215b446ca95eed972b4ae213"
  },
  {
    "url": "interview/interview-abstractCompare.png",
    "revision": "683b800b15d495bfd2e2ade99b6eba74"
  },
  {
    "url": "interview/interview-bom.jpg",
    "revision": "637f20e7efb9d9f0af995dd5b97529b4"
  },
  {
    "url": "interview/interview-css.png",
    "revision": "e2ef1b6cbdb573ccb36a31952542907b"
  },
  {
    "url": "interview/interview-jsbridge.png",
    "revision": "e1f58f641b1961a977f56cc0244117e9"
  },
  {
    "url": "interview/js.html",
    "revision": "599df8af6f93653ea079c8eec16f14d2"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "517ef2013f83dd842657e6613bfd458d"
  },
  {
    "url": "interview/structure.html",
    "revision": "d3de1f3ef9b4530ea7017277f9012edc"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "b6a259a98f892b44de04f2c33c258559"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "qianduanrizhi.png",
    "revision": "d1ede0e6a9b10d10c8c69097888ac07d"
  },
  {
    "url": "translate/index.html",
    "revision": "992575eaa3b9015c8c7010d03a7c7026"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "016fbd74d12944d95da93c9b1fd6a61d"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "0fa3c5459fa261e3be12548a11835c9a"
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
