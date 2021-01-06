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
    "revision": "dfc33242427a1ce608e2547e89f734fe"
  },
  {
    "url": "assets/css/0.styles.4e5fc4ef.css",
    "revision": "4966e63330d4be22d57b4a47f5c64602"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3ce4ed6e.js",
    "revision": "d14f06eb08db3811113c2b462a4cace8"
  },
  {
    "url": "assets/js/100.213d1d14.js",
    "revision": "86a379c3a309ece56d93fd05931ae4bf"
  },
  {
    "url": "assets/js/101.a41a0b55.js",
    "revision": "ed4552aa05ada3a7ef72c2dc46d1a77f"
  },
  {
    "url": "assets/js/102.a4210065.js",
    "revision": "05dbcc5a9a56e5651c48a53eb011cc75"
  },
  {
    "url": "assets/js/103.02a3eef6.js",
    "revision": "e40bc7a6f966cbd46ae16ad13244c3cc"
  },
  {
    "url": "assets/js/104.251e10ae.js",
    "revision": "ed619925194c1e9292d4c7654c7e2e5c"
  },
  {
    "url": "assets/js/105.e9ccba0c.js",
    "revision": "a66f10dd7aa3d654edb69b364890ebdb"
  },
  {
    "url": "assets/js/106.864b16b3.js",
    "revision": "89c65d1b3290823357a15ce6b0b28e56"
  },
  {
    "url": "assets/js/107.191e5c58.js",
    "revision": "c6590913dfdb6ace3cd09256ebf146a0"
  },
  {
    "url": "assets/js/108.a08fb010.js",
    "revision": "47f90faa134b79a02de34fcf49e396de"
  },
  {
    "url": "assets/js/109.e7bae42d.js",
    "revision": "4cda243952f357cac6fdbd87dd6f5492"
  },
  {
    "url": "assets/js/11.3aca9ec0.js",
    "revision": "33d3c70542afa61c24f699d2cf89be86"
  },
  {
    "url": "assets/js/110.87a26308.js",
    "revision": "8ce00f115d24dce9865cf169dd65d9e8"
  },
  {
    "url": "assets/js/111.174e490d.js",
    "revision": "566d9a9db0efe02ea0e0f0d6ba680310"
  },
  {
    "url": "assets/js/112.83015292.js",
    "revision": "468da74da216763da690a1a42ee2f7c9"
  },
  {
    "url": "assets/js/113.82706b03.js",
    "revision": "09a29e4ee4480b57a9efd2bf93ad85ee"
  },
  {
    "url": "assets/js/114.0629fe1e.js",
    "revision": "90749d80d35815d2cb3e535331b70756"
  },
  {
    "url": "assets/js/115.3d0887ab.js",
    "revision": "63708c60334506206814e9cece492ef5"
  },
  {
    "url": "assets/js/116.4362fc5b.js",
    "revision": "d9f5d81d183f26faa32837f6f5fe68d5"
  },
  {
    "url": "assets/js/117.12bf8f78.js",
    "revision": "562cfbc32c8faed606b65058085be75d"
  },
  {
    "url": "assets/js/118.ef5c23c8.js",
    "revision": "ed0e281213e6652e2f07bcd7e1dbeaf5"
  },
  {
    "url": "assets/js/119.ebda728f.js",
    "revision": "d18813dd594d2f3ab9f535ca96ff37c1"
  },
  {
    "url": "assets/js/12.80544f1e.js",
    "revision": "dde45483eda093d77a113eec62ec5a69"
  },
  {
    "url": "assets/js/120.9639ed39.js",
    "revision": "812034f401d7e646a9a5fafefd1e31b2"
  },
  {
    "url": "assets/js/121.e299fd71.js",
    "revision": "da9b1d0ed0aecc448e497ac55b180998"
  },
  {
    "url": "assets/js/122.0ad86029.js",
    "revision": "477ab94b05d5f43a874d268b14949a41"
  },
  {
    "url": "assets/js/123.b3cacbee.js",
    "revision": "53c91d867478a5380fd279c5a831a390"
  },
  {
    "url": "assets/js/124.a50fd7c7.js",
    "revision": "3002a09ad1452a657cb0f8fbe9dbf63f"
  },
  {
    "url": "assets/js/125.1a2bebb5.js",
    "revision": "25aa0ce5604947a114df73b6c59b8ff2"
  },
  {
    "url": "assets/js/126.68a80065.js",
    "revision": "7dfeead74c9b956309481415dbfe022f"
  },
  {
    "url": "assets/js/127.9ca54b62.js",
    "revision": "5ddf15f452335e2fc8befeaeb441dd02"
  },
  {
    "url": "assets/js/128.545449c5.js",
    "revision": "7597a3a51813c46a5462ee6d55245e47"
  },
  {
    "url": "assets/js/129.d9a5268d.js",
    "revision": "c24be567d7ce636ed2ccd328fc94d437"
  },
  {
    "url": "assets/js/13.963c5e13.js",
    "revision": "ebe1343d508a4e68eb6c5c90d02d7f3c"
  },
  {
    "url": "assets/js/130.819bdc49.js",
    "revision": "fc7e74b15578df47163baeb30073fddd"
  },
  {
    "url": "assets/js/131.6308fa0b.js",
    "revision": "76b80f35292fa705e67fdec3ee720a47"
  },
  {
    "url": "assets/js/14.f8e99d15.js",
    "revision": "d0287cc2287d91a993729528ac77d1f2"
  },
  {
    "url": "assets/js/15.f1ebdfcf.js",
    "revision": "da53f4a31b2bb6b7ea2a6345be88252b"
  },
  {
    "url": "assets/js/16.cb3d7efe.js",
    "revision": "aec216626d15c58f75edd3edfe84cb4d"
  },
  {
    "url": "assets/js/17.36815632.js",
    "revision": "4a7b6eabd220fb201e6745a09dd2f83b"
  },
  {
    "url": "assets/js/18.a60591da.js",
    "revision": "3f546620e80019104cb26d691e16fc59"
  },
  {
    "url": "assets/js/19.632fbba3.js",
    "revision": "1feca42fade1fd5cab14046b04f58033"
  },
  {
    "url": "assets/js/2.807b3b4f.js",
    "revision": "3bc8f4e99555d8d1c0189fe6ad0cd23d"
  },
  {
    "url": "assets/js/20.d376a645.js",
    "revision": "0a163df42708070cc0bd9bc883ed3279"
  },
  {
    "url": "assets/js/21.f1fe6bb2.js",
    "revision": "c2b8754e6cdd7e52683e75a7719c6b76"
  },
  {
    "url": "assets/js/22.f838ba2f.js",
    "revision": "3f3c583bf59588e7cba57ce58f271981"
  },
  {
    "url": "assets/js/23.8787d59d.js",
    "revision": "b49239293fc005a85209859f0c8fce5a"
  },
  {
    "url": "assets/js/24.bd0fe6bf.js",
    "revision": "2445e13475df463ef96c8c3c1935b832"
  },
  {
    "url": "assets/js/25.0f1530ce.js",
    "revision": "51629eb7b40f4ca75252766cb4a1751e"
  },
  {
    "url": "assets/js/26.0b6460e3.js",
    "revision": "6bd0033f3f85e9a8a9bc13abe1a91b13"
  },
  {
    "url": "assets/js/27.435fbc3a.js",
    "revision": "da4be4743977c2c8d7c0c3aafde6f2da"
  },
  {
    "url": "assets/js/28.4bde2a9e.js",
    "revision": "3fef89d74512b146a270bd27a0f5943c"
  },
  {
    "url": "assets/js/29.ba709676.js",
    "revision": "0399efebea33f219d44bf9910b2e0566"
  },
  {
    "url": "assets/js/3.f6a35f03.js",
    "revision": "58cc8fe2486c9a52bfa250914f5bba46"
  },
  {
    "url": "assets/js/30.59719103.js",
    "revision": "edb6c5b125fc8d7a04899edecf55e178"
  },
  {
    "url": "assets/js/31.7581938d.js",
    "revision": "8d28dceacb3f92b97ec3e70459c75a49"
  },
  {
    "url": "assets/js/32.853c2fde.js",
    "revision": "854fc7f353f5ac3b64786ea6a2ff84a2"
  },
  {
    "url": "assets/js/33.82f02556.js",
    "revision": "450b5e60451ff59287d3268ea0099584"
  },
  {
    "url": "assets/js/34.a5aacc11.js",
    "revision": "0aa8d336b7774e5848b064f6b96110c3"
  },
  {
    "url": "assets/js/35.d1aae6ec.js",
    "revision": "eb962fd714e66fceebb5120948898fc8"
  },
  {
    "url": "assets/js/36.3430d872.js",
    "revision": "14b7dea2ee32491e55f92b4171e76e74"
  },
  {
    "url": "assets/js/37.dafd9f60.js",
    "revision": "f08d832b162883d53ad3fb7226cc7376"
  },
  {
    "url": "assets/js/38.7fd498f0.js",
    "revision": "d3c096f3fe9848bf45fc162b849d9424"
  },
  {
    "url": "assets/js/39.cff1216d.js",
    "revision": "6307090267498488d332d28183c6aa16"
  },
  {
    "url": "assets/js/4.a272648d.js",
    "revision": "6d0cb3b746ffec7991d65778ca5972f0"
  },
  {
    "url": "assets/js/40.5d8259f1.js",
    "revision": "7791e8aac5a91e264bf59352a1923dbe"
  },
  {
    "url": "assets/js/41.8e386310.js",
    "revision": "8f36d52a15587a5a274c176a8443ae50"
  },
  {
    "url": "assets/js/42.e5128a2c.js",
    "revision": "2cf1487fa966c417acd9817ec3c767a6"
  },
  {
    "url": "assets/js/43.0b50a9e5.js",
    "revision": "77065ae978488b818a8c882892c20fcf"
  },
  {
    "url": "assets/js/44.d66d0aee.js",
    "revision": "72baaa858d365bdf51de882905a5778c"
  },
  {
    "url": "assets/js/45.cc18cecd.js",
    "revision": "4c62cd078b044166b22cc2e704786232"
  },
  {
    "url": "assets/js/46.999d0bea.js",
    "revision": "5d223bef06da9991f82c0ecafe5e15e5"
  },
  {
    "url": "assets/js/47.e8f8f1af.js",
    "revision": "4228dbc3eaa37062ce6e74b1d316e29b"
  },
  {
    "url": "assets/js/48.07664083.js",
    "revision": "13e91e134b676b51aa05f7fd2803573a"
  },
  {
    "url": "assets/js/49.40e10f1b.js",
    "revision": "fd82765d91862e8e89434f2d2bbf4fba"
  },
  {
    "url": "assets/js/5.4daa9c3b.js",
    "revision": "4351724c65e45902e4957c288a843d9d"
  },
  {
    "url": "assets/js/50.46d02a5c.js",
    "revision": "247870ab6ca401593fccaf82f5c1f26c"
  },
  {
    "url": "assets/js/51.1fd958cd.js",
    "revision": "a5d3091febf3a858850e2193ebe01df4"
  },
  {
    "url": "assets/js/52.d41d142f.js",
    "revision": "7cf4a23b6b5a6bc32b512ae3fd48fe00"
  },
  {
    "url": "assets/js/53.033f7145.js",
    "revision": "01f3d3f97fd30c0c14e98196a92c5aa1"
  },
  {
    "url": "assets/js/54.28cd2780.js",
    "revision": "0d6bd704c0d9df8a4d50384ed0ff86a8"
  },
  {
    "url": "assets/js/55.4501ddbd.js",
    "revision": "a153a1b29032c6346eafbdb08e0d4e1d"
  },
  {
    "url": "assets/js/56.c449f230.js",
    "revision": "55693f7ee91dea28cfe940e371db0ccd"
  },
  {
    "url": "assets/js/57.abd79690.js",
    "revision": "3873930b5621184a7ef6fa035be2f7ab"
  },
  {
    "url": "assets/js/58.1ff491e6.js",
    "revision": "ba0ecaaabcee8caf5addfe7e72ea6d5d"
  },
  {
    "url": "assets/js/59.5efb25ac.js",
    "revision": "fb5296e6cdaa545bd039f1079e402950"
  },
  {
    "url": "assets/js/6.95e5989f.js",
    "revision": "6b017b97c6be2da5dd8eee16a356fdcd"
  },
  {
    "url": "assets/js/60.1a2043e1.js",
    "revision": "4291a6920a85f8e17953d5a11677a7a6"
  },
  {
    "url": "assets/js/61.aec701bc.js",
    "revision": "f4a14b0a77f9115b94739599204d6f8c"
  },
  {
    "url": "assets/js/62.e512974e.js",
    "revision": "acecc5a4317e729e41070abd13df6d8f"
  },
  {
    "url": "assets/js/63.2fa65ba9.js",
    "revision": "bf506759a80c88336f6ccd4c8fc8635f"
  },
  {
    "url": "assets/js/64.a8a5bed9.js",
    "revision": "c72bc8520e7c63349786ef0075f41c1d"
  },
  {
    "url": "assets/js/65.ab52b4cf.js",
    "revision": "a3afb39bc1d16de487b68d62d187fc62"
  },
  {
    "url": "assets/js/66.ad32128d.js",
    "revision": "3887570112c8665a35c4eaf303b11350"
  },
  {
    "url": "assets/js/67.bb1e2f6f.js",
    "revision": "364d05c21de68b4271b4a50514555330"
  },
  {
    "url": "assets/js/68.3aa288ec.js",
    "revision": "7bfd513189a709261e76961e9cd14632"
  },
  {
    "url": "assets/js/69.322946a3.js",
    "revision": "acb39df839e239747aaa64f6ee4f7896"
  },
  {
    "url": "assets/js/7.51086548.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/70.cfcea821.js",
    "revision": "a34f2b10f9f0adde1da216656a09eb25"
  },
  {
    "url": "assets/js/71.f324ea96.js",
    "revision": "7eca4c278ca7905747dd9e7c21af7bca"
  },
  {
    "url": "assets/js/72.ffbd3b38.js",
    "revision": "5adf6f12a7ec9b0b5c26873cad10fed9"
  },
  {
    "url": "assets/js/73.a755b1dd.js",
    "revision": "f2c49e18a8ef3464e855987f40f9603e"
  },
  {
    "url": "assets/js/74.15b18753.js",
    "revision": "ba00ee863a207512a5abacd1aeee6e02"
  },
  {
    "url": "assets/js/75.b541a019.js",
    "revision": "00ec3e7150ad5bc0b219257117d61356"
  },
  {
    "url": "assets/js/76.76a73540.js",
    "revision": "5b0011c1a13e9c171ef8454dfbd89eac"
  },
  {
    "url": "assets/js/77.7fd2819e.js",
    "revision": "f70211b02a1e97c4765720a543920ee7"
  },
  {
    "url": "assets/js/78.4eae81ab.js",
    "revision": "7a08ec0268135716967cc698ac170073"
  },
  {
    "url": "assets/js/79.3023d267.js",
    "revision": "b0b85e357b05870da8d546826cc06f1a"
  },
  {
    "url": "assets/js/8.990f157b.js",
    "revision": "9d39b67c15792127334a27da266383ff"
  },
  {
    "url": "assets/js/80.f930e272.js",
    "revision": "e345a66e97bdde0138203046d2385688"
  },
  {
    "url": "assets/js/81.23507d26.js",
    "revision": "8b6ee402f20552b81d74c5f3b9be9879"
  },
  {
    "url": "assets/js/82.41ef517f.js",
    "revision": "eb0f0c4eb55409e98603b6552b5f1f19"
  },
  {
    "url": "assets/js/83.2b93fe27.js",
    "revision": "4a581fec459ee2970c3c1e547895a854"
  },
  {
    "url": "assets/js/84.0c61425f.js",
    "revision": "a6eb3e93b55b64cd2bd52fdb79b9d0c4"
  },
  {
    "url": "assets/js/85.afb4e337.js",
    "revision": "017c093eec8139cd812c3d03b9f4dcc7"
  },
  {
    "url": "assets/js/86.3a8fafcd.js",
    "revision": "7a07a696a33cefef6a2d6ee74566cc9e"
  },
  {
    "url": "assets/js/87.83b33e53.js",
    "revision": "ec9ef3b44ba89c82f5d5ab4225d1ea25"
  },
  {
    "url": "assets/js/88.d8e9d64f.js",
    "revision": "c9a9c79bfdf7bb732caea6749852a2bc"
  },
  {
    "url": "assets/js/89.3be59f79.js",
    "revision": "f591ee93cf0650154358b29d89de4527"
  },
  {
    "url": "assets/js/9.86a04a48.js",
    "revision": "5b5371a17f08b79087bac30cc7885265"
  },
  {
    "url": "assets/js/90.0c32fefe.js",
    "revision": "3e736205c7a67bc33122d343d41b95bd"
  },
  {
    "url": "assets/js/91.53bd1012.js",
    "revision": "f262037f1c519ca2b5a8143256d6d5c4"
  },
  {
    "url": "assets/js/92.760201f4.js",
    "revision": "6d796428b62f99c713ff5a78441610e3"
  },
  {
    "url": "assets/js/93.310e22ad.js",
    "revision": "9b28a12da4d3fba23ce6e9569f17249d"
  },
  {
    "url": "assets/js/94.d15e101c.js",
    "revision": "6e526b1f2f21d3b30d0b842d7afb2a41"
  },
  {
    "url": "assets/js/95.5f5be55b.js",
    "revision": "0b73471d2a4c2a1a1dfd704b14c4e150"
  },
  {
    "url": "assets/js/96.2e626ec7.js",
    "revision": "ef4b2cb1aea3bb408dc7f6915002195c"
  },
  {
    "url": "assets/js/97.3cfcd553.js",
    "revision": "4ea235b4ac0d56fb0d67b7d28e21205d"
  },
  {
    "url": "assets/js/98.3f7399b0.js",
    "revision": "4aabedee816303a5d1ea55fd10e165f5"
  },
  {
    "url": "assets/js/99.caf3e512.js",
    "revision": "55400700a55a1ffd2415ca4f69a34b83"
  },
  {
    "url": "assets/js/app.92548152.js",
    "revision": "705826a2758bfdeaf8f92bced96ed8d6"
  },
  {
    "url": "blog/2018.html",
    "revision": "3c06c03266514cd7c8e65a37352b0c9a"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "a5719050d6aacd7fe53ad138cc85e34b"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "ac9cca3aa9b3b567c41aaded94df9429"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "58b3d371ad529561cd40a6c991cd2f20"
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
    "revision": "d7f40c4767cd81d70af81b090f8b683d"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "ee8ad9100c9f93d81c9d51577369c773"
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
    "revision": "04358ce88f3d49ae1f44c58479d44dda"
  },
  {
    "url": "blog/base-function.html",
    "revision": "c72a4eee322f2413cb3f1a75cd02a8ac"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "ee97679a4f5b81e2bf7cc31175ee096b"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "ac4c939681b6a51d3c37709836feaf4a"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "de9fcb960501a32e4ee9fb4f6da3dfb1"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "73127788b6e403aa5ae359165fdf9b62"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "dc9b3fcc1f7fc5c09f53eee5de802855"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "d1f70a4eb8217a76625b8b019d60afc4"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "07aa4a469daf9d9069a2e3c72b03854b"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "3a85b1d2b79b2febdbde78bbd3d363c1"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "f8291a3d3fa7a8fc53f3ce258d06c64a"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "a9497c71e37c7dc160652111c7903d8c"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "ef8e249f0a8c2f2732df58372363c9bd"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "42d31792d0ec324f510b134cad4a1405"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "657ddeade2c806abefd9579f50fadb0f"
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
    "revision": "a58556e193e6642e609388c218663c4a"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "83e1613c3940f5a88e15167ac4fc8938"
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
    "revision": "661193661fb70c24eea706be4facf8fc"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "651d119bc83ca26987e901f8a68929b2"
  },
  {
    "url": "blog/css-next.html",
    "revision": "130bb3b004f212b6b929be7c93ce1747"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "ad17579ab060bd1655bf1fc4685348d6"
  },
  {
    "url": "blog/css.html",
    "revision": "6eafdbfaeb37f33c76fce43ab531270c"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "b4d0749935d00f7a3a006e6e178df431"
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
    "revision": "b03aa8c20cc1ae57facf3f71f2aed258"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "3c297060f80da36623ca9fe1c806a043"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "da1ef6682968001c86599e721174701c"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "bac2c9f1eab0d73d063351e99cdcdcbe"
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
    "revision": "324783ebc066926416625892145417d6"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "225405a928d471d724e4ee46537da801"
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
    "revision": "cd86147353ca84e048c8ee56b0867a91"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "89fcffb7511aaf67cef3b04fbadcf3cf"
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
    "revision": "99def72aa4f4d4937fb9e138a73218f7"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "71eb1e28754106a19aa5914969947891"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "a799bd53fa32b42f7fca30263b5eff44"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "f6549036c97a3096222a411728a08580"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "b6355e05391e6774727d8e8561bcba94"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "d6244a283d6d00b9a6eb8c28551887b0"
  },
  {
    "url": "blog/index.html",
    "revision": "8f178e4fffd1269bc8fdfc9bfffe11be"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "e6f53216eabb4b88e83505b89b143de6"
  },
  {
    "url": "blog/js-event.html",
    "revision": "f78af0356feb7567eda840bb8211326f"
  },
  {
    "url": "blog/js-form.html",
    "revision": "0740f7390f0260c7f0f31ce8d4fef545"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "71d66d6c1705d96423b4a0a86b694093"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "80a039bd24b0051440fc3e3997818837"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "ed9ba81a6425fa67b8af52011b80edcf"
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
    "revision": "3c99a4db4b0792de78b9950a4646c990"
  },
  {
    "url": "blog/js-module.html",
    "revision": "7ef611a9a701b6bd4324ebcd017750f6"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "8dedb2b68038d0d70c415de0d7ccc7eb"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "97d5c17027932e123ea054ba7abd550b"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "b31ea1dec62ef7afd4e107a4303fb2fb"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "43fca4184f2c1bbd644ee9a03857cce8"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "f0f1e54d6c8334e57ab706325fac951c"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "f1481316b0f5c84db89084dc6c1ccf2a"
  },
  {
    "url": "blog/js-this.html",
    "revision": "ea6f48c4657f26c6b0b2d5e719f5939d"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "33f2ed301c6fd847cc7ca9957bf8e801"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "234712ffede565ff27bca5977c993cc1"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "93de5b7f1ca5ca8a26423a708f2a42b2"
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
    "revision": "86a0bd26673b17e1f40a9ed9526f844f"
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
    "revision": "6001c15fcfff4990e27e4e0cec767236"
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
    "revision": "1efed9e5a48c55dca833a82b10db5c8f"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "3c2a34299f6dc908dc9841a9d63632c6"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "a5efe92dbd50b801e73346fe3372d3a2"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "57d5914786a83f7dea693a8dcaf4b201"
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
    "revision": "0fbc06949b692171c3c32584a47b2cf6"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "1e4f1928561d6eff2d54afc6d0f2f0c9"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "627846589ca4d47acbe30608a19a955f"
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
    "revision": "127f633c4c70dc9aaed11cad4a6692e2"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "80e298a69ab1814daca89cb95d3f1912"
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
    "revision": "312ce278d018218f247b32b0f96e9008"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "803946344647ade54eb6402f1a95869e"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "eaaf3df76474107b51c8bf7d07bc81ad"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "57d9b40d674fd0c1825b065f6598562f"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "fd32fc9e7c24e1bfef674dad9320c814"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "caed438683384bb8e9e99c2091e64bb6"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "357e28786102edc72b22f49c09cd4ba5"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "2c7aa4dd1d14a2d2e7f78cde268f617a"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "752a9f7965a95b8d29be4fdad6d582b1"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "4ef207bcf7dcbc62e93198267c2cb9c5"
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
    "revision": "41c8b7cf96227acfb1accd713cea6bdb"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "5fe9595bb57f87d04eae9f83d25fa8a7"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "613408fb0830ff723b31f098f245c011"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "419233d5ecfa5e240da39920ebaeea31"
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
    "revision": "b75362ac7fabf62ea2ccfb1ee9ecfdf2"
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
    "revision": "16af0a0782d1425e449b3d83a8bf18d3"
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
    "revision": "06b41ba2d6426de454880fb8feb56f96"
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
    "revision": "f1a863dfeabc29fc35fae27e350aafb9"
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
    "revision": "d911ceb6153d756a801750e9b24dc612"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "06cb8546207e4e061a16cb2b83dcdb1b"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "345356f348010dda70ac08c8e34c09b9"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "14766c667f69deb7b16423220b0fa5da"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "c15a8ffa0bc3632aeaa717ee9270bf24"
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
    "revision": "a3c5faa1e8961bf344b8e58cc74e5bf0"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "de6c19547f4b5c287e7ed7dd627ddb70"
  },
  {
    "url": "book/book-code.html",
    "revision": "1b00a0fd186a0a65bd0ff68b882a815d"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "9bd155e52fee41c296610fe93246ff04"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "16c675ef7eaa0869efe484eccb57a66c"
  },
  {
    "url": "book/book-http2.html",
    "revision": "07c22c1d0bfca2053020dead6123eaf5"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "edce21422f0d88ce3c54f9730a23a650"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "ce1488ccca9b0b7f12842cd54db7aab7"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "14214a12e5f9a348fc0c8d0f13e15fb4"
  },
  {
    "url": "book/book-regular.html",
    "revision": "c4dbae9b8e4116d67f9996192bd98ee6"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "1a9a95d421895938325438283eeb759e"
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
    "revision": "4ddb581c454089ec0951798bfe4cdd1b"
  },
  {
    "url": "book/index.html",
    "revision": "d9869b43cb8c7b9d5cc7142b5206c9e3"
  },
  {
    "url": "index.html",
    "revision": "7ddde579e3792b246658b8cf6d6f1ed9"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "ea50a754a5c09df03fd48d47664b57e5"
  },
  {
    "url": "interview/base.html",
    "revision": "fbf512dae8a194b3c888995c56b6cbde"
  },
  {
    "url": "interview/css.html",
    "revision": "8ea0ab162fc7d5a453edb898c2ef116c"
  },
  {
    "url": "interview/framework.html",
    "revision": "f71c5a7747443bc62487f1efc8a6152d"
  },
  {
    "url": "interview/html.html",
    "revision": "9b993c6c0b86d0ebd6d581fa36d56df8"
  },
  {
    "url": "interview/index.html",
    "revision": "e9985187eb4230fac0c1c1a9cf470436"
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
    "revision": "869f93b414c8e9ebddd42fc1374c9668"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "57c9bd93fc884d15b41a1d090889289f"
  },
  {
    "url": "interview/structure.html",
    "revision": "397d5f22878964fa6d91f365304a5bec"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "58815893e84860ac63f8eac13a9158d9"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "translate/index.html",
    "revision": "b9f58749dfc5b6911124d76559c0b168"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "48a3403db4036fd954847b8dc8759e28"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "2c31ec35777553f7d2efcebfa1a43e88"
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
