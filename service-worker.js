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
    "revision": "67ba55689fa16a982c2331622e1ae271"
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
    "url": "assets/js/104.fb2d86b6.js",
    "revision": "2bab0a731a9dcf2ec2b0bcdb3df48e14"
  },
  {
    "url": "assets/js/105.bb260b3a.js",
    "revision": "eb13022184740a8cc0d025d807193447"
  },
  {
    "url": "assets/js/106.f1c7dd76.js",
    "revision": "0dc16856d378e901fecc950789af5e3a"
  },
  {
    "url": "assets/js/107.aa40ca15.js",
    "revision": "e66c7b8f3c6d483f5283783f78e6bb7c"
  },
  {
    "url": "assets/js/108.e52c3a4e.js",
    "revision": "e2da3c8f15badd9356b5c82f612c55e6"
  },
  {
    "url": "assets/js/109.88cb9377.js",
    "revision": "465deed6f7377cfec611f27e58ccebe4"
  },
  {
    "url": "assets/js/11.f3bf506b.js",
    "revision": "a8e0f973e0529134252de99a32c93a14"
  },
  {
    "url": "assets/js/110.94a68427.js",
    "revision": "58a9f4efb3cc45ec6b665b9edecd2044"
  },
  {
    "url": "assets/js/111.9a8dd9aa.js",
    "revision": "add3600de06383f2e64487bed536c5f9"
  },
  {
    "url": "assets/js/112.4166036a.js",
    "revision": "1c33f20889ce161fe74fd49be09d942b"
  },
  {
    "url": "assets/js/113.2939fa58.js",
    "revision": "d1d4c549d22ac2093845343c98ab5875"
  },
  {
    "url": "assets/js/114.e8df4111.js",
    "revision": "fad0fc1264832d25283b6d5cb3dff3c7"
  },
  {
    "url": "assets/js/115.22a95236.js",
    "revision": "a48a3c950df97dc58934be3ec71edd77"
  },
  {
    "url": "assets/js/116.9ff82308.js",
    "revision": "d0bd1ed2141ab84f5091e86be463a04e"
  },
  {
    "url": "assets/js/117.c7dc4205.js",
    "revision": "41f2b9d446eb3fe6b3e19e0618613f2e"
  },
  {
    "url": "assets/js/118.4ffe37e2.js",
    "revision": "f4d54959ea2e36a1c655e6c0ca0b89fe"
  },
  {
    "url": "assets/js/119.4e9ef028.js",
    "revision": "26437d042ca84a2f72b04762e4a56739"
  },
  {
    "url": "assets/js/12.5bc2eeb2.js",
    "revision": "a037533c47d14f26923b1e3f66d6bd60"
  },
  {
    "url": "assets/js/120.3c6d356f.js",
    "revision": "1fc3dfa584064fda0233fde2f9a43222"
  },
  {
    "url": "assets/js/121.c3c09ef1.js",
    "revision": "bbdd3d4b2c04faad8e05b482215b2cd8"
  },
  {
    "url": "assets/js/122.39a7fe95.js",
    "revision": "65d2ccbc02f6309115acd0dff9796c6b"
  },
  {
    "url": "assets/js/123.6a48bdd5.js",
    "revision": "19dd64fa9ede8992a975cf39be15d455"
  },
  {
    "url": "assets/js/124.f9ab6f5d.js",
    "revision": "3b088d981a0887b3650a6deda4585626"
  },
  {
    "url": "assets/js/125.ad89e622.js",
    "revision": "f29e8062dee09d86d9c8e0f6b920c208"
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
    "url": "assets/js/128.70201f67.js",
    "revision": "d9a21c41c347111713d986e2ced192c8"
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
    "url": "assets/js/36.06d8fa9b.js",
    "revision": "20dad8c5ff43b834408865ea18722a49"
  },
  {
    "url": "assets/js/37.b55c3a1b.js",
    "revision": "846eb55e840f2d2f06ab2650ce6f5620"
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
    "url": "assets/js/41.83683207.js",
    "revision": "ce43828bee442278e7fffe49b37675ba"
  },
  {
    "url": "assets/js/42.f0e09bd9.js",
    "revision": "3b056bbf644673d46dda794d0c21c52d"
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
    "url": "assets/js/50.28e2b6a7.js",
    "revision": "d486087fea454d2889e2b8094965dc94"
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
    "url": "assets/js/57.10200283.js",
    "revision": "57d5c8084ce9251a5bf6d1850ab02834"
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
    "url": "assets/js/71.e0d8348f.js",
    "revision": "da5e0a76f075382683e325094f158cb8"
  },
  {
    "url": "assets/js/72.ceabd5d6.js",
    "revision": "91184fad1f36f87d9ea9188890ce125f"
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
    "url": "assets/js/82.d2570422.js",
    "revision": "694e4396304b53acae6b3c10c6c43ee2"
  },
  {
    "url": "assets/js/83.dadd3e54.js",
    "revision": "fd9362cf844c76dc1644565efab64189"
  },
  {
    "url": "assets/js/84.ffc6f7af.js",
    "revision": "d3fd9fc2b28f25eab85137918daffd3c"
  },
  {
    "url": "assets/js/85.8210cf28.js",
    "revision": "7aadffec517b8d054cd1c0b6b59bf2eb"
  },
  {
    "url": "assets/js/86.4c72f9e3.js",
    "revision": "7464104c70ede75fd8d45521f74a0529"
  },
  {
    "url": "assets/js/87.33efd1ba.js",
    "revision": "c3bef1c09d7954b11b0d9afca37d87be"
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
    "url": "assets/js/94.bb6cfe90.js",
    "revision": "2537eee14acead9cb36b6891b27c16ad"
  },
  {
    "url": "assets/js/95.f264011c.js",
    "revision": "ec604c913456dc27cd5f83855fbb2469"
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
    "url": "assets/js/app.f52a01de.js",
    "revision": "922e0aa56ec3d01870f191d7c551a1a6"
  },
  {
    "url": "blog/2018.html",
    "revision": "4630c91366cbc84869a7d27f07080075"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "dd9ba4a8f82a7d4d9d31acb221da5af2"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "ee29c91ffcd876b23bb25f09329ee8ad"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "24e8675b82dd7ec6c5edbd16e5438815"
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
    "revision": "0aa7538edf0f80d7f71ce518f0e05a20"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "929d2654a3ccf7fb068fe2000f42a9dd"
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
    "revision": "6c257997d27e363cfd2c5ad7c0015d6f"
  },
  {
    "url": "blog/base-function.html",
    "revision": "cd7b091ea12c1746675e0c22ada4ffdf"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "75aa2627c65b09fc8d2b6593edfee5ce"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "1bcd488a24e2eb181cdffaf012e576a7"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "67e7fb7b13c16af60aedf0049b8e059c"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "f7c28fe8988fd225ce9c69ec644d9a1d"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "a8fb28d627c37e796db674858445e67a"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "f148c6dd4a47852a3e49faf207ceb80c"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "1c1f73b0add5f63209f216ff38403b15"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "4afe467b976f710c23c7a3862fcd8c0a"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "c4082f4ae8d6bb5e9cb6b519db0a993a"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "4aaa28c7d1c2266c900b210226061a20"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "5f7c8f54a934ae98a8d4d760db342356"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "4ddb83e17f1939b519f6b450da96864e"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "247bda5692734200ceffa81c739f3c19"
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
    "revision": "28f7efeb89f1b430a279d3e0cf431592"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "a1b1341873014de32a67c4817139f982"
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
    "revision": "ee888a1a40e421dbded2326f9b50213f"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "30e8e2b8fd9a70a8ccdcea65194a2c09"
  },
  {
    "url": "blog/css-next.html",
    "revision": "c0393519c2e2d2dd69920c4b281ff590"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "7c8f7ee590c47fc6a6fc8f8b4df46f4e"
  },
  {
    "url": "blog/css.html",
    "revision": "0092e142adcfa2250b983929a212bda3"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "55fd1bd92660010dd9efe2ad263b7104"
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
    "revision": "0fadcb6f31c54093cf5a9d0bd1ef8e33"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "604357c964de4fe090e9a1b8cc05fa1e"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "3882b3c3827a1230e1de1dd3eb3aa72e"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "93ee0477f42f784e5f27534b6dcfa960"
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
    "revision": "205f05ee2aea3716fdae9495acf4b179"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "5c9dca437b88d0edf581a4f86572f899"
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
    "revision": "87546578c37497cbd2d94c3cd7f874e4"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "53e880a9829f14dcdfbe6e3b189a339f"
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
    "revision": "38151b36884465d8875c80e12466ccfc"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "dfc9c0b8ebafeb1d0cda5684b1389421"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "24cb4ecca48b47422dc627f11ffa2296"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "614dd9639162dcf09796cea7b231806b"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "cbdb95ceb8d52ffbed58a80aa6cff9f2"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "b813a9e5f061f00a1b94764d82bdd8bc"
  },
  {
    "url": "blog/index.html",
    "revision": "77afb4b3085939d0679fc44aced40054"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "02f37ba966ebe8d9f981c2aab81beb73"
  },
  {
    "url": "blog/js-event.html",
    "revision": "c3305fe0a286891973230aae1ec66c92"
  },
  {
    "url": "blog/js-form.html",
    "revision": "c60ac1a205d288ecd870dbe32039a72f"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "5f8d3af00201a5cde83d2cb0a4deac9a"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "74713f36041cee34154366bfcc2408f5"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "c2af57a1070f7ac99cfc0c7e5264ac5a"
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
    "revision": "cf780be61c4f19f8f3a1fb7ab56d921b"
  },
  {
    "url": "blog/js-module.html",
    "revision": "6739a630f48a1a24c3b2f3ef761857f0"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "93cbd18cf8330e6b684ca28e91e6abc5"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "566255f783dce5e969262c5881f3bf0b"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "088de98017c4d59ce31ace7c13ca1901"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "45de81f55dc8d2a887c68e488c9c6d51"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "46b31a5d7439a9c88a0d8904f5e56771"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "99b5ab41e2bddfcddb7b64ca7a25fc12"
  },
  {
    "url": "blog/js-this.html",
    "revision": "56274447d288f251afb60e9d68023786"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "2bf7b49738d8da8b1d8520affde853bd"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "7646cf6653f74468ec779cf5f1765bbc"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "13600e2ef8da738224d746e751e70063"
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
    "revision": "6a1bc2336275cc979947c10af6d30d9e"
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
    "revision": "74d305a719cf7d615ebd49448fb0276b"
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
    "revision": "1f3d327f1fa6cb739503a3c569bd0dc3"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "cb6929c3723576f2d3b136620d266965"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "f3dc33d2e56313d363c854e94d41c6d3"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "e33865a6f3496fc2bf83eed76cd5cd92"
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
    "revision": "d98446bccaa605dd81c98ceb3d2a8062"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "53d1a0e4f244bcc281cebc85b9c32c06"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "61a094ef2b2d120f3a7c035fe2b96e3d"
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
    "revision": "d042f8914e9dc997d3d87a636edb2503"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "85c9435fe254db3afa6115940e4420c5"
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
    "revision": "0324e3cd1a626e87ab118312adb6c99d"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "64cc5cf6c70f5af1b9a835c4307dfa2d"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "b0c434e8566ec38915bfda1582194b33"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "07675ac84f3df60074702f756c5984ec"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "c97a9b01ca691d1671d808cc10b0ea94"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "576db1a7226ef8e1d328826e4e8a5247"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "3752e28cb81b9b2ff4edbd651eb85ace"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "5cb54dcc632ec7755f5bdd078c2c2030"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "bda3d0b2535f110c76a6f3bacbbf796b"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "5837c4ec643c62fe4d04509b3c276ffc"
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
    "revision": "cf6b7e9a3d8bf881d0f07175f8757119"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "c5de95f244ef3799d5cf92c58485837d"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "efbc60bd1bd22656ba49cbbc4a183af9"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "56f93dc2f601b07fdd44a6038614700e"
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
    "revision": "12c0ee12be156f1e08a0e144defab471"
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
    "revision": "d478984a95525342150fa3b69429edf1"
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
    "revision": "df6b709807a8199ffeff3505accb7f45"
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
    "revision": "29de1373315d8a24ac4a61157d4c53b5"
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
    "revision": "2e3f69ee7660da407bebb0841987364c"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "11b51e2a5795ac7d21fc3f1247d922e4"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "b3ae84b7cde6b93fdcdc2a67e04146b5"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "050a013adaf583d0ac642030a7f9980c"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "83d6b164a5a7406f1014de2b68b171bb"
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
    "revision": "151dc38877e6dc9ce9f899e0485a3ca0"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "f33bb42c804bd52b626394943fc7a100"
  },
  {
    "url": "book/book-code.html",
    "revision": "d1e72d0f792e391e342ef5b0e2f4c033"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "a3d5dbecb53d9ff7d147ba806109c2fc"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "0b225be31553b7f2a1a0e09aaa865cc6"
  },
  {
    "url": "book/book-http2.html",
    "revision": "b3ef82a2e6948a7b28edf0e3b688c0e7"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "aee3fe990781ac35139078b8b52ff3f9"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "4c996f211a64606fc095cc0bda189b93"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "7504d620725d9274eb064abf5b637bf2"
  },
  {
    "url": "book/book-regular.html",
    "revision": "f785883ed96627186af46ce13e7978bf"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "ca58fb965980fc8ed89dfaa4ae5365c5"
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
    "revision": "e4dac3c47127b2a0562ef5e68a1e15e6"
  },
  {
    "url": "book/index.html",
    "revision": "35f29a70abdce12fa1458fb360bb71b7"
  },
  {
    "url": "index.html",
    "revision": "84b77a42f8bd8e894b4a23f1fbab0237"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "89696a311d9552ac6841d7c13eca4365"
  },
  {
    "url": "interview/base.html",
    "revision": "4f1fca3e6f7bd527c0303a0901c45e40"
  },
  {
    "url": "interview/css.html",
    "revision": "fed653d9a783756741457fab775f8866"
  },
  {
    "url": "interview/framework.html",
    "revision": "0a5553e8d052945dcae399df97f7718d"
  },
  {
    "url": "interview/html.html",
    "revision": "70e7ec3923b7c68a2be1e183955c2c42"
  },
  {
    "url": "interview/index.html",
    "revision": "76be94ba5893385645d40f5a88bee180"
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
    "revision": "7682f5533d37a58f8068187169d3f3ca"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "703ccf7bb371d3d1f08129b9b22fc691"
  },
  {
    "url": "interview/structure.html",
    "revision": "1cee6a88acd3fe999027168d629821e2"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "6e6e8c5e97b315fbeafba56bf61dd8e1"
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
    "revision": "01f2dc93d74154b131ad8ac3bdf300f0"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "d6586bf858966d66404ba5f14718a1aa"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "c135ce9a1865b67f8f2292b032989b00"
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
