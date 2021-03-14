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
    "revision": "8f5b74b1d435fd3930de2a252e6961f2"
  },
  {
    "url": "assets/css/0.styles.a4ed3cf5.css",
    "revision": "c60e6d9c09255903ec19275f748367bf"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f63809d.js",
    "revision": "90c95073c5df6f63e494bcfba02afce6"
  },
  {
    "url": "assets/js/100.8f9616b5.js",
    "revision": "8433ce9c409d5a812a183f51695d7add"
  },
  {
    "url": "assets/js/101.c7cf53ba.js",
    "revision": "cbdbbc7921d40b19831a154f2a1555e4"
  },
  {
    "url": "assets/js/102.0795e1c2.js",
    "revision": "0973a53f77415aaa7dd8fbd438a3201c"
  },
  {
    "url": "assets/js/103.ee0c543f.js",
    "revision": "18233cac3c10dbf852c353c4032625b3"
  },
  {
    "url": "assets/js/104.1f3268d1.js",
    "revision": "12533902a002345f71b87cb4027faf7b"
  },
  {
    "url": "assets/js/105.bb260b3a.js",
    "revision": "eb13022184740a8cc0d025d807193447"
  },
  {
    "url": "assets/js/106.d3703ba4.js",
    "revision": "5a8fcc48afe95acc61d095bed6918465"
  },
  {
    "url": "assets/js/107.8839fa42.js",
    "revision": "a3f314cc75f7d30811f1b07155bca1c9"
  },
  {
    "url": "assets/js/108.f9e79b52.js",
    "revision": "5d97c7025e3e5aa3fea50f2e610d5f4f"
  },
  {
    "url": "assets/js/109.76d658bc.js",
    "revision": "19588a4c2d6a67df45a537a4dfb6ce47"
  },
  {
    "url": "assets/js/11.f3bf506b.js",
    "revision": "a8e0f973e0529134252de99a32c93a14"
  },
  {
    "url": "assets/js/110.4eea1f31.js",
    "revision": "5827f337fe0b642f991f6b8cc7928cd4"
  },
  {
    "url": "assets/js/111.96443bce.js",
    "revision": "c91487ef9c54d36924ccfea484ce284e"
  },
  {
    "url": "assets/js/112.60a09170.js",
    "revision": "a9114754cc860ccbd00428e78a024fb6"
  },
  {
    "url": "assets/js/113.ecd2a8ef.js",
    "revision": "3a558fa6da69064369d27893897d342f"
  },
  {
    "url": "assets/js/114.54fac3be.js",
    "revision": "09342417d5e96bd6ef2f4a8b14512149"
  },
  {
    "url": "assets/js/115.d0e73098.js",
    "revision": "7109e0181c7da92c7fc6e0df5d015467"
  },
  {
    "url": "assets/js/116.e6e16c77.js",
    "revision": "deafe33225b5f304d1d5098b152dbd47"
  },
  {
    "url": "assets/js/117.14ebdd39.js",
    "revision": "af4ca7b56e4c3203989387ccc695af19"
  },
  {
    "url": "assets/js/118.9e6ea1df.js",
    "revision": "f6bade84cad99d754b8424972b5acd0c"
  },
  {
    "url": "assets/js/119.a31b6329.js",
    "revision": "435a5b36a5d7a912743d84c37f794c9d"
  },
  {
    "url": "assets/js/12.5bc2eeb2.js",
    "revision": "a037533c47d14f26923b1e3f66d6bd60"
  },
  {
    "url": "assets/js/120.7a2ac2c4.js",
    "revision": "57dac510305fad3ef4f5462cd6bf517c"
  },
  {
    "url": "assets/js/121.0808f468.js",
    "revision": "df1d9bbce00a6ba476c344ff23a531c3"
  },
  {
    "url": "assets/js/122.9a527a29.js",
    "revision": "49729928840ab55c06a55417f6a8490a"
  },
  {
    "url": "assets/js/123.ac49de3d.js",
    "revision": "0b0f0ea27b174f418c7b519ff3a9f73e"
  },
  {
    "url": "assets/js/124.cc6a2d0e.js",
    "revision": "27799b33a7223d4fff26684cae8028e6"
  },
  {
    "url": "assets/js/125.185a7434.js",
    "revision": "fd863de13fc173e12ec9966b03a3a182"
  },
  {
    "url": "assets/js/126.6e597e31.js",
    "revision": "376f5c79400d416e75c6ab8627a88191"
  },
  {
    "url": "assets/js/127.04aef380.js",
    "revision": "4682e6b4ccd396e3884b2ed84f10c692"
  },
  {
    "url": "assets/js/128.67110951.js",
    "revision": "5cf80837f5ac517b732a288ad772e7b3"
  },
  {
    "url": "assets/js/129.5ad4e45a.js",
    "revision": "a883039fc9529b4134e5b4930168f140"
  },
  {
    "url": "assets/js/13.ecf0fefe.js",
    "revision": "c061da3f2c56e2687fab3f0f92f14b10"
  },
  {
    "url": "assets/js/14.bd5d5243.js",
    "revision": "98977a6bf741525308e54d0402c67fbc"
  },
  {
    "url": "assets/js/15.0a719780.js",
    "revision": "451dcfa4145184013ae922e40c9777ac"
  },
  {
    "url": "assets/js/16.ac38a305.js",
    "revision": "9ae7e6b5033c8f6b298d09a93cee9831"
  },
  {
    "url": "assets/js/17.29c6e14c.js",
    "revision": "d21602a8728e33d9b5585d549bd2b7fe"
  },
  {
    "url": "assets/js/18.91df6c77.js",
    "revision": "4be74d03cf691bf73ed25cf747f3e354"
  },
  {
    "url": "assets/js/19.1f9da1f3.js",
    "revision": "c9f3d4724c7deb9315f0c035309aa85a"
  },
  {
    "url": "assets/js/2.aee12845.js",
    "revision": "920c5d97e874f9902076e4b20a3b4d4e"
  },
  {
    "url": "assets/js/20.5c156202.js",
    "revision": "65895253b555696424cde264a31b4c85"
  },
  {
    "url": "assets/js/21.84bb4b0a.js",
    "revision": "8256805861d393d37353095cb053d84f"
  },
  {
    "url": "assets/js/22.babac6d0.js",
    "revision": "5910c3094e725a412fa8e812f04b74d9"
  },
  {
    "url": "assets/js/23.31a8e03a.js",
    "revision": "9dd82f618d2b9a8c67fe0c44261e778f"
  },
  {
    "url": "assets/js/24.c13d837b.js",
    "revision": "c8a3ac708522827fae3fd988e8480613"
  },
  {
    "url": "assets/js/25.991fbba6.js",
    "revision": "4178576cbf4dd43bdfc6b4b10b03bef9"
  },
  {
    "url": "assets/js/26.875d1aed.js",
    "revision": "fab5c613c05695c2965037dfd014caeb"
  },
  {
    "url": "assets/js/27.71de7192.js",
    "revision": "64a56199b13161915907b6887900c5e9"
  },
  {
    "url": "assets/js/28.7ed55e18.js",
    "revision": "d7163e938488dabd767e4d7b29332de4"
  },
  {
    "url": "assets/js/29.424fd539.js",
    "revision": "b92aa11e53ac0ca8e5f909bac3384804"
  },
  {
    "url": "assets/js/3.9c1a18bc.js",
    "revision": "98b2c766390d448ec3c2356b26f78619"
  },
  {
    "url": "assets/js/30.87cb8d49.js",
    "revision": "54343fada14d98f15f9e878ed0f1eb84"
  },
  {
    "url": "assets/js/31.f0035bb5.js",
    "revision": "6555dbe748d096ba83ca14508fbe168c"
  },
  {
    "url": "assets/js/32.a69b7fee.js",
    "revision": "5a260e68a07211b758bcda6b9a868a96"
  },
  {
    "url": "assets/js/33.fae117a0.js",
    "revision": "2be79bcf895ec9072dc7cb8f4244e6c1"
  },
  {
    "url": "assets/js/34.111c1519.js",
    "revision": "fb898933a5840111cfc2ba9859646831"
  },
  {
    "url": "assets/js/35.5cd5fbee.js",
    "revision": "d94f653a44e6974ab12f31147deeaf23"
  },
  {
    "url": "assets/js/36.8a947b3f.js",
    "revision": "35e2394579beb99482306cf6ac0a5502"
  },
  {
    "url": "assets/js/37.869e012e.js",
    "revision": "cc1dfc6b6380b98b13ed33c5c460647a"
  },
  {
    "url": "assets/js/38.24ff6f79.js",
    "revision": "98aaf4c2e8716aad2938f8b6362f3e08"
  },
  {
    "url": "assets/js/39.d37d0384.js",
    "revision": "cbd99e032d4ea481612283aa5ac3a59c"
  },
  {
    "url": "assets/js/4.dbd505c3.js",
    "revision": "cd3fc259ad8495ade477f9029266ddff"
  },
  {
    "url": "assets/js/40.0e383ea2.js",
    "revision": "433521dd32bc980d3f8d8e5410680695"
  },
  {
    "url": "assets/js/41.94e34ee6.js",
    "revision": "cc90620848f7e5b0dee8eae3e1f2e507"
  },
  {
    "url": "assets/js/42.4f406453.js",
    "revision": "23a10a5221e5c1444a39b7c2eeeb2b16"
  },
  {
    "url": "assets/js/43.42a80392.js",
    "revision": "00e8c996fe405d0d51b3c89de9730396"
  },
  {
    "url": "assets/js/44.c7718cea.js",
    "revision": "3a6eadfc832deac028b23e0424fe33a7"
  },
  {
    "url": "assets/js/45.6c4e5893.js",
    "revision": "0f8ef418d63d5cbea0f90361575ce7b6"
  },
  {
    "url": "assets/js/46.63a97d29.js",
    "revision": "ac10a043a3dc7dd1717f120ffaf022a7"
  },
  {
    "url": "assets/js/47.85ac90da.js",
    "revision": "6c274d7a082fd9709eadd9b63653a859"
  },
  {
    "url": "assets/js/48.6e69bdb7.js",
    "revision": "7aafe37bb700eda7e6847cac39ee0dbe"
  },
  {
    "url": "assets/js/49.24e42de8.js",
    "revision": "0cb6b63a360fe4dc4f575463ad1393f0"
  },
  {
    "url": "assets/js/5.150d269d.js",
    "revision": "bc050b41787d68135c79c62908439679"
  },
  {
    "url": "assets/js/50.09436b06.js",
    "revision": "3e3806be9afec9ae2625e6772d5077df"
  },
  {
    "url": "assets/js/51.420fc262.js",
    "revision": "38cb4e67b45ae2d80cf32b24789a22f7"
  },
  {
    "url": "assets/js/52.af140bfe.js",
    "revision": "cf750cbb76163ab37561895bbecb599a"
  },
  {
    "url": "assets/js/53.1bb581e0.js",
    "revision": "12ea8049a4bc71a447c73b6157fc46b6"
  },
  {
    "url": "assets/js/54.67d40816.js",
    "revision": "d167906f18273c29252105bd14dedd7a"
  },
  {
    "url": "assets/js/55.5824603e.js",
    "revision": "f61201052f2166b10b5a3e8593cb48eb"
  },
  {
    "url": "assets/js/56.3ed03012.js",
    "revision": "e705bf033d4eb72fe9a302d702248bbe"
  },
  {
    "url": "assets/js/57.cb94d706.js",
    "revision": "40524764e9792a9a6787b1250f52f5eb"
  },
  {
    "url": "assets/js/58.7bdc977d.js",
    "revision": "8ec4b8a0263991139d7762f49ad699de"
  },
  {
    "url": "assets/js/59.90eada0b.js",
    "revision": "69914bb037e0baac41a1b15a9e6ccc49"
  },
  {
    "url": "assets/js/6.896bd4c4.js",
    "revision": "4809be4b2ca26407ba88cca44b7d4f1d"
  },
  {
    "url": "assets/js/60.ce9fa6cb.js",
    "revision": "3f7016a8f11d8abadc92b1a7cc5b5787"
  },
  {
    "url": "assets/js/61.a9656aee.js",
    "revision": "053c106131f130ea0d529dd104267d16"
  },
  {
    "url": "assets/js/62.135c3a6f.js",
    "revision": "c6037412e10174eddf52d782ebc62814"
  },
  {
    "url": "assets/js/63.9d6833ba.js",
    "revision": "b9299d6d9b6e6bf1ce52e0e41092c3c8"
  },
  {
    "url": "assets/js/64.074295bd.js",
    "revision": "118aca4ae7615686f400b6fd7e962e94"
  },
  {
    "url": "assets/js/65.a0b8d183.js",
    "revision": "daea7e0fd0f9f3cbd2e6922a1b798336"
  },
  {
    "url": "assets/js/66.c25895c4.js",
    "revision": "c927f58f088b5600399fa96fbf4670af"
  },
  {
    "url": "assets/js/67.781d2e72.js",
    "revision": "8baad2041f30ad2f1380ca16cfea4005"
  },
  {
    "url": "assets/js/68.57fa5274.js",
    "revision": "bd37ea375ed1219f89f35d4f5e61e732"
  },
  {
    "url": "assets/js/69.1d4251ea.js",
    "revision": "00c07e91970477cca017903c4f2f2128"
  },
  {
    "url": "assets/js/7.2d2fd358.js",
    "revision": "ebf0eda977b25812054e2325ea13442e"
  },
  {
    "url": "assets/js/70.72c02386.js",
    "revision": "f823a7c91dbf7672635c9c0f47c8b12a"
  },
  {
    "url": "assets/js/71.35ac974a.js",
    "revision": "6899f646c8f1cdf71c5fded4a99d8539"
  },
  {
    "url": "assets/js/72.bf82b602.js",
    "revision": "deab9aacf7b8486d43a91fc47f849f36"
  },
  {
    "url": "assets/js/73.bba00619.js",
    "revision": "91efc51dc9c6d6b11ef9f01961d90f1c"
  },
  {
    "url": "assets/js/74.566e9fb3.js",
    "revision": "ef9e63b92b018526f9429652cd4bac75"
  },
  {
    "url": "assets/js/75.e26d2743.js",
    "revision": "35dcb5f90472d3ecd94ecb80483338c6"
  },
  {
    "url": "assets/js/76.892ed5c3.js",
    "revision": "9e451bbe466cdccd42b9196a4fbb32c0"
  },
  {
    "url": "assets/js/77.18ca8426.js",
    "revision": "fd33f70f218d69a5b76b0d4f28dbaed8"
  },
  {
    "url": "assets/js/78.81ba95bd.js",
    "revision": "e5f59d56997809d4cde599e71cc7c33e"
  },
  {
    "url": "assets/js/79.e3fd55e9.js",
    "revision": "ac631598bdfab07cb68cb8b0fa7c0787"
  },
  {
    "url": "assets/js/8.e74751fe.js",
    "revision": "4f6363d95c253a3ca6f8ca9b0d09134d"
  },
  {
    "url": "assets/js/80.7555de4e.js",
    "revision": "cd6997206fb9d754fda415f9d3524cc4"
  },
  {
    "url": "assets/js/81.ce1c920a.js",
    "revision": "1f3bdcfad475ed24d9ec69bd9de2a87b"
  },
  {
    "url": "assets/js/82.76d037cf.js",
    "revision": "29e3acb9025d8c4733f8ecdf67809b03"
  },
  {
    "url": "assets/js/83.16037880.js",
    "revision": "160a30c43ddd87adc4df5a5f1408458b"
  },
  {
    "url": "assets/js/84.e2f962ce.js",
    "revision": "2a80110cc1c3024c40613ccf25ec554b"
  },
  {
    "url": "assets/js/85.f3038250.js",
    "revision": "7363edd105b6664d54359aff2b979c76"
  },
  {
    "url": "assets/js/86.801e2a11.js",
    "revision": "ee8e86991223cf34a6bc286fb21e2f1e"
  },
  {
    "url": "assets/js/87.ab9bace8.js",
    "revision": "612852f3daf01d75f4df322138632765"
  },
  {
    "url": "assets/js/88.9f21cfa6.js",
    "revision": "5a434b7e9e9b600f442cd6df03657927"
  },
  {
    "url": "assets/js/89.266587c3.js",
    "revision": "41ddef75b76a2d50646d7d6c81a810e8"
  },
  {
    "url": "assets/js/9.a7d1a842.js",
    "revision": "2ae0030743021b81665c1a6b194e833b"
  },
  {
    "url": "assets/js/90.b60fa353.js",
    "revision": "0eae3b9235e4ce2b0f2b34f5abaf5660"
  },
  {
    "url": "assets/js/91.f6943263.js",
    "revision": "f314bfb6ebdc460ca5d8b8ca841914b6"
  },
  {
    "url": "assets/js/92.585b717d.js",
    "revision": "aa5d86590591d32d9fdc69a12d2e96d6"
  },
  {
    "url": "assets/js/93.53b4c14e.js",
    "revision": "bf284c8e48b77a3d179a8e20b21e74c4"
  },
  {
    "url": "assets/js/94.843fcc9b.js",
    "revision": "81138a4d9d2c8c3b7d3f0bc18526ddb0"
  },
  {
    "url": "assets/js/95.260364e8.js",
    "revision": "b5232e19ff7b7f8e5e22b9eb985e66a4"
  },
  {
    "url": "assets/js/96.65762376.js",
    "revision": "0f27b5b065a0031426fe595f46022fad"
  },
  {
    "url": "assets/js/97.b571959d.js",
    "revision": "b15a3c81f52fc32edaca4b5dcb81f365"
  },
  {
    "url": "assets/js/98.b9969f81.js",
    "revision": "fbdf310b59e115cdb40c268909fc89d1"
  },
  {
    "url": "assets/js/99.459775c6.js",
    "revision": "33329aae938f1d8cb48225144f87da67"
  },
  {
    "url": "assets/js/app.c685ebdd.js",
    "revision": "9dff7e4cd004774108bef562e4fa62c9"
  },
  {
    "url": "blog/2018.html",
    "revision": "a27faa6297a4bf0a74ee38c1d114fbd6"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "f6e51428ca186f9b6100532bb2abb709"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "7e7a1e8c7404427b612b503a321f8045"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "fe7371f216303b3c0267474a17ccc9a7"
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
    "revision": "b18c1291df33d8dc8a2667acb4ec4bff"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "9426f9cd743e2947885a60c5ab4218de"
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
    "revision": "2d904ad5e43f7a4e94a15b06be33114b"
  },
  {
    "url": "blog/base-function.html",
    "revision": "a8911acbcc8b9668940c1c382de647e2"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "5279913327c1ce5b36a42579adc6836e"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "de21f18c748d98f5028635e63350d9d1"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "08cce767ed98bdefe87fc5a1a2edfc25"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "38daa8259687524e03f483b1d39cdd28"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "be4779d461841969fc47d72995a67248"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "d77649970467850b3ec12ce64e9450f9"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "73fc8b490610c056d59e543c5c77685e"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "8e95188dab2c81aa50acb38af9012d67"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "896e68123057c5af42ebaac047a39b96"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "c9044014d387a6068fc2afe12e14bb25"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "67928f7685726e9b55e0bf6fdad9d393"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "3a7f39c3f271f6dad84602242df771f4"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "c495116cc6bcf659c2e85263cd7ed9b5"
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
    "revision": "6dc92c961482f6598f1ef5fb2f60e08f"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "e4920adf4ffc1160069836037eca5c39"
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
    "revision": "95f10aa43d3a91488f201ea9dfa091ce"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "47dde04ad207347230a7cbcf276d1b89"
  },
  {
    "url": "blog/css-next.html",
    "revision": "35da1ccfff7d913d58600d150077e02f"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "df76466a9ca8a14eb9e6b5aa7f739c4f"
  },
  {
    "url": "blog/css.html",
    "revision": "cdc2214881e3e5c4ba62231c322a95ea"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "b46fa0dcd7a39b9e1de464cf4f34c675"
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
    "revision": "27f7964297e9f55ffb50002dc7034a47"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "be1353ca0856989f334b060e38640dce"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "cd859011d6e70e63b10beed74b0b54d7"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "eed00b9b69e269522346eb1e1a6d775f"
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
    "revision": "9ede675ac7ae8d89f4004657017ea13b"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "25f30d530d38433443781b18bce79c84"
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
    "revision": "51c85d236f723601291f93b972d4263b"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "e9895afa84be6dd160fc3c79d51d4c35"
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
    "revision": "b3d60548f3e4ec1c63025ed3fe6d20f8"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "92ca77523a4c09e0d5f8fbd5b96b6b11"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "6323580b0c6d43f631ce318af99b89ae"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "80c14a173d0dc9f4502af86ecf8e2951"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "8d506a95eace2866611d74793cbc8382"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "bf6187588fda0df0c3868925f7257f33"
  },
  {
    "url": "blog/index.html",
    "revision": "f82348fa65054b3cd93a62b1bb605c5d"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "86d5bdda184fe6675fc40888517bea92"
  },
  {
    "url": "blog/js-event.html",
    "revision": "e3ed78019727a16c6a6d9927cb217895"
  },
  {
    "url": "blog/js-form.html",
    "revision": "b53fe1f7d4ec7609070b51f2ddafcff0"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "05c9b6c87cc7b2c4993da0d4167c7515"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "48671cf442331f316855c162bb024e27"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "e92af55601fb9ae9fe06a39507035962"
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
    "revision": "62305195a83517cc0ec81dcc0973c49c"
  },
  {
    "url": "blog/js-module.html",
    "revision": "73d40f64e9397e52e8673bbd904e2d8a"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "f80cf6b202feee591cd6ff8974aa1993"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "2a6622d64f12470a383010d998f350ef"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "0c4aa983215b63761c8e6fe80914be34"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "f9bbc084793ea8e692fa23dad9eeead3"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "3f1b2e3ba8f2cabf502aef8e9f9c5fee"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "3a0fccc3eecb94ce37e3153f9df276b8"
  },
  {
    "url": "blog/js-this.html",
    "revision": "5715e702e0bd3cc0d83ec34ca92856fd"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "dcccb9e12ee24587c0b3c740157caf89"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "0ce760786777ca67adbe68e41da2114e"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "12f2518e1c643674bc67742982e3879a"
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
    "revision": "28b2764525340124fc0066810c677c0f"
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
    "revision": "d8d00a55825f86036099ccbfc7c26243"
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
    "revision": "35a56d38e391d6dbbcd6a04e92996b2b"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "97d5faa31f07e63c6b8a7e050556d300"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "cb9ea4618dcfe12747f087c6adb14d58"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "b30cb6a0c7100ab46bd00e6e756b5aee"
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
    "revision": "ec4ac220949dd9f94f02e2b36fcf5682"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "2e0d6098461c46b33670cedf619e47a6"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "a5092d3b84bf59cd963f09e9debe87a8"
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
    "revision": "51bd591a7ac7ba19cbee39216ac39f13"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "5b781f354415a631d97034f258d8dd68"
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
    "revision": "9674551489f65590cf140e8f0f6da29b"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "a9f285f6a16efd2e214596b0f0d12213"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "2797e415592e6d604e2ccac1c27450da"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "c3bbaae66fc3805abb8442797bf47c42"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "f014c7e8f86e3441f7539516dd8fa69e"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "2b71c82ad52dc168517794551873f956"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "f799c23c4679888ba8ee11f9ebf4e078"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "f5b1bee1fa9e82ae3a74ee672fa78e18"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "d0a26e2069166947c7a24152363254b2"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "27f2b8c47dc2c3d21d681d7fe80422f2"
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
    "revision": "a2b5a3f5f3bbc25866b183db23dbbc4e"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "9eb84bfba5305bc0d4d714aaa5028398"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "1cf95b62d131fae68adc881af9b22218"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "c0a2ff60b50fd8962dab6dd3d3dacb45"
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
    "revision": "b067c51124386e76a937a148af5040b2"
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
    "revision": "60f9839f2909c1dbf475fc15ae10f15a"
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
    "revision": "369e258a9c7478f727e3b0b3ec03ae72"
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
    "revision": "c8eabf4b4f6150b7a61cdaf5082549c9"
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
    "revision": "5161171baac8b73dabec31c31bcc1b93"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "d7e094134879e53ebdc103357f55f66f"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "70799135e71ffaba6ce0c4afe3c6c4b3"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "8746a31b4d7f7b221590e71b05eccd5e"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "d184016c3ceebf7756582e07ff093fba"
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
    "revision": "4408423e406e627564c26e58ad38cfd4"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "adfcc94fe75536596ee10c08a0b479bd"
  },
  {
    "url": "book/book-code.html",
    "revision": "e3443987030af37e9e414beee6039086"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "d0d93f9ddbbccc8e4ea19230d54a886d"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "55d8f06846fe0f615fda0cbd4fcd8919"
  },
  {
    "url": "book/book-http2.html",
    "revision": "1219775b5398e810ac2019b8b1ac8f1a"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "52ce9a289c39e6235442c1c56a2ee30f"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "a20b83ee07ae653b7ce493c9a7bf1156"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "561f64aaa1a09f99da8b8d7c9944f749"
  },
  {
    "url": "book/book-regular.html",
    "revision": "47e41b37dd058777fc6c8349ff69dbb6"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "8bbbfed5c382de80dbc49b6142ae1952"
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
    "revision": "71fc527d8c06c184e8a3c4b2c9d00198"
  },
  {
    "url": "book/index.html",
    "revision": "7ca7c82ff6dfbb6321d25fd3de1f21ee"
  },
  {
    "url": "index.html",
    "revision": "690f48cea2085f21e42b0ea8891f6403"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "f85623f57eff1d283bed2457181f03af"
  },
  {
    "url": "interview/base.html",
    "revision": "3818a0eb3723167af8a1681843cadd59"
  },
  {
    "url": "interview/css.html",
    "revision": "257f678d25911c632940eab89964c256"
  },
  {
    "url": "interview/framework.html",
    "revision": "660cc87ecfc5dd06c799669dac36f10f"
  },
  {
    "url": "interview/html.html",
    "revision": "9d8e6e3ca07be243281ac773af17968d"
  },
  {
    "url": "interview/index.html",
    "revision": "b61d98dbc7cc1b151aed1435e5763059"
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
    "revision": "4ca3fac15ec2147b6e76d5b5afcfb8be"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "698a2c9cdf6d74cf0b7b67d511f6900b"
  },
  {
    "url": "interview/structure.html",
    "revision": "19892e559c1bd9fa4da82e557934af64"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "1974c981a42b7e7ed64ab464c9c4ba94"
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
    "revision": "de831950ba3992d3e0e3cd414822eec9"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "41d9c6f480ef46f994c07f1afa437355"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "c5f7462d6ebbf16ae1f115ee7d8592cb"
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
