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
    "revision": "c19eb92f4642f9ae58b4475c69686dec"
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
    "url": "assets/js/105.0e1990e6.js",
    "revision": "8584bd96ce4b5499182447aacc9681c8"
  },
  {
    "url": "assets/js/106.4e40e578.js",
    "revision": "e31e19a1240f5faea2bd99d1d36e810c"
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
    "url": "assets/js/110.f5f36a64.js",
    "revision": "c2238a430bdbd94cf5b754b35be40815"
  },
  {
    "url": "assets/js/111.62eb8639.js",
    "revision": "9cde76788a42667d26dc690be6516451"
  },
  {
    "url": "assets/js/112.ac143e8c.js",
    "revision": "d84feac49f265523ed787ec516d1e2e9"
  },
  {
    "url": "assets/js/113.c93f6a88.js",
    "revision": "f9edb68026652fb2f7f5540e61ed12e3"
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
    "url": "assets/js/118.7d0e6dc5.js",
    "revision": "d04127be052b0e35194b3ff996686961"
  },
  {
    "url": "assets/js/119.a2cb3faf.js",
    "revision": "21bed2d860b561be91963de9bdf96636"
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
    "url": "assets/js/121.6dd39bcb.js",
    "revision": "a8d437161abfd41f06a27cc75c954bcf"
  },
  {
    "url": "assets/js/122.0ad86029.js",
    "revision": "477ab94b05d5f43a874d268b14949a41"
  },
  {
    "url": "assets/js/123.fdf72da4.js",
    "revision": "bd3d0294d2c535b40e96099f425a3add"
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
    "url": "assets/js/128.d4c4c1c1.js",
    "revision": "24f1644a90d4e31bbdd840cd55f23397"
  },
  {
    "url": "assets/js/129.d9a5268d.js",
    "revision": "c24be567d7ce636ed2ccd328fc94d437"
  },
  {
    "url": "assets/js/13.f7a84599.js",
    "revision": "95a7c7d696e42d72156838eff9a37c0c"
  },
  {
    "url": "assets/js/130.030a6a20.js",
    "revision": "d99f8ee044ceda71036190226799caed"
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
    "url": "assets/js/16.4ba2d602.js",
    "revision": "d8167d3f377d9fcd18d4ed4e7e5d2e24"
  },
  {
    "url": "assets/js/17.08ee64ac.js",
    "revision": "0181063966fef24ff0f0ae4fc3942886"
  },
  {
    "url": "assets/js/18.162a3bc9.js",
    "revision": "92ba020698ce8f9a38e6f7c5eb004582"
  },
  {
    "url": "assets/js/19.f2b1ae1c.js",
    "revision": "eac0bbe82384aef143b7f0aa6f4548c4"
  },
  {
    "url": "assets/js/2.807b3b4f.js",
    "revision": "3bc8f4e99555d8d1c0189fe6ad0cd23d"
  },
  {
    "url": "assets/js/20.d9381c36.js",
    "revision": "8c6933612ba743c68ea363b0ea6c7347"
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
    "url": "assets/js/29.a1685872.js",
    "revision": "d050b4ef49776f63cae53877b13f78c3"
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
    "url": "assets/js/32.18ef6ef1.js",
    "revision": "1406233699a2966f6032e5c495c10cab"
  },
  {
    "url": "assets/js/33.82f02556.js",
    "revision": "450b5e60451ff59287d3268ea0099584"
  },
  {
    "url": "assets/js/34.1db34424.js",
    "revision": "b2a9c955d1322ef7f92a8be6bf29604e"
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
    "url": "assets/js/42.0b5ca750.js",
    "revision": "f0f190b1a8a237e4ed6f0b9de65de7f1"
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
    "url": "assets/js/46.558bc2ea.js",
    "revision": "3fe0f9dbe3a17981ea81017cd2660afe"
  },
  {
    "url": "assets/js/47.e3ccb9c2.js",
    "revision": "940409fc604e09e023394e3fca6e398c"
  },
  {
    "url": "assets/js/48.e6851a8f.js",
    "revision": "0d9e9864cf36ef811355ecf996db4bde"
  },
  {
    "url": "assets/js/49.042bf315.js",
    "revision": "7365781e05ac90940b6a550e4a213f6c"
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
    "url": "assets/js/51.5607cf5f.js",
    "revision": "dc55b8c36c4296d67ea2d86df36bade5"
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
    "url": "assets/js/56.2f76ad70.js",
    "revision": "8c55d41346e6468057d8c5e1fce21d88"
  },
  {
    "url": "assets/js/57.abd79690.js",
    "revision": "3873930b5621184a7ef6fa035be2f7ab"
  },
  {
    "url": "assets/js/58.30164e51.js",
    "revision": "f7eec905c40dacd0ee64bfc771be25e6"
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
    "url": "assets/js/60.638b88c2.js",
    "revision": "4c258ec680cdffbfa0a6b0ded1b43bfb"
  },
  {
    "url": "assets/js/61.30150765.js",
    "revision": "a5d7ec0fc8f469f92603ed7c4b966835"
  },
  {
    "url": "assets/js/62.882b80b2.js",
    "revision": "ef89c21afa3bbd2ad712bb441b514bcb"
  },
  {
    "url": "assets/js/63.dfb49f1a.js",
    "revision": "3e4c10ab17b678aea859606c5eee7754"
  },
  {
    "url": "assets/js/64.ce22430e.js",
    "revision": "8fe3012375b2900dd7e125486acac54c"
  },
  {
    "url": "assets/js/65.aecffd2b.js",
    "revision": "167ec944e6077925db3d11cb4c953709"
  },
  {
    "url": "assets/js/66.5c15a198.js",
    "revision": "334922039a00c7485f74cc182e85da50"
  },
  {
    "url": "assets/js/67.a5ad6918.js",
    "revision": "97c1f9ca258e124d2d43db0d3c5adfed"
  },
  {
    "url": "assets/js/68.c748ea7d.js",
    "revision": "445878d4c2a82f597f0839713bc72364"
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
    "url": "assets/js/71.c9724b85.js",
    "revision": "15d8c4c106015734efd0825bf866e55a"
  },
  {
    "url": "assets/js/72.1666839a.js",
    "revision": "788e07a31d09b96429238c60e19a8a6b"
  },
  {
    "url": "assets/js/73.fbb826a1.js",
    "revision": "4bd9cbcdc37d5bbfe981e9083a953553"
  },
  {
    "url": "assets/js/74.2a8b4bec.js",
    "revision": "39199ad9fa67d708233dbe0ffb1c1b74"
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
    "url": "assets/js/78.1eec1af1.js",
    "revision": "7c60fed5c21cb1d1edb5984aa2eb9788"
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
    "url": "assets/js/82.27a90c00.js",
    "revision": "192675792853183530b3b13515643c3c"
  },
  {
    "url": "assets/js/83.2b93fe27.js",
    "revision": "4a581fec459ee2970c3c1e547895a854"
  },
  {
    "url": "assets/js/84.100d5e98.js",
    "revision": "2ee0b7272e439cff5ca9e8a022d091d8"
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
    "url": "assets/js/88.ebfc3a2c.js",
    "revision": "c9be1e0993e39788ef88289e4eb3dbbe"
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
    "url": "assets/js/95.87de5d5a.js",
    "revision": "d48a36a236b8c3a90dba311fdaee46a9"
  },
  {
    "url": "assets/js/96.2e626ec7.js",
    "revision": "ef4b2cb1aea3bb408dc7f6915002195c"
  },
  {
    "url": "assets/js/97.23d137d5.js",
    "revision": "0da6a105fc74149af8f43bf048a3a371"
  },
  {
    "url": "assets/js/98.2a500096.js",
    "revision": "5263aa84fb43f177c5bf05a58a993f99"
  },
  {
    "url": "assets/js/99.58e29084.js",
    "revision": "918bb60177cd75d94866caf832e860f8"
  },
  {
    "url": "assets/js/app.ac522be6.js",
    "revision": "e6734b764f249d896bfdc8be06adf01e"
  },
  {
    "url": "blog/2018.html",
    "revision": "2cfc5a68d591846f98a28103c4d4828e"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "49bc3be7779ed197ce882570194277ab"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "698996f363701647b886c2849e1c55ab"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "661ed616fe6c66b0cf4df26f7b130a9a"
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
    "revision": "fc741d7c0a3e8c0038d8a371728cb068"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "c51190df583aa5a70dcf36558bc0459a"
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
    "revision": "a2d25eda2f88207d6e3d380a5c1a39d8"
  },
  {
    "url": "blog/base-function.html",
    "revision": "3ebc0cbb77dc162ee67a8260be4c8021"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "644f31f2e4e1f708ddc2aec99dab3067"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "3970e8120dbc38cf429557f7e75c5060"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "b40e582fd032224e19aa8f66eefc151c"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "c3ab61fea7126fca01c8b492ef15cb4c"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "22fa9eccb812a3778ff60958d9429549"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "218f3ee37b1e7fe8c7d78eb70dab61cf"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "4ec9e525fcfa838607f3578eeb0d8f0e"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "0a569ae63ae7d03b33653273705c0805"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "088b69fb26c2ed850bcb14f05b7fd41b"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "68b4e32255fcb27fb840abef744278ed"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "0b4c3d40341bc2211ad049ccb6175dba"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "5569f33980b1b6b97a1eedb643708cea"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "af0cf77efbb3918b23023a5285f5f06b"
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
    "revision": "b645c4619cdce951a4ac71ddd2cce3e3"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "22d121da7366f1d9c2c4128d717c4bb4"
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
    "revision": "f5cb9981cdbb76ced858c1653c884121"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "4f6967419b0e53ae817bc29d1e4eca8d"
  },
  {
    "url": "blog/css-next.html",
    "revision": "2dbf57b61c49fa2e1f77b3ab46614726"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "2692acc5c1fcf2f8743dd98e421cda3d"
  },
  {
    "url": "blog/css.html",
    "revision": "ded497fa37585fadf144172f1a7a9690"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "d9eb12972b35256e133aa274a6b44fd8"
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
    "revision": "c52481be2e16629b1fc66bc7f328707e"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "992ceac274c73eb262b7d193fae69990"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "c5bd3a20095580c494bcf756619208e9"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "17a8f709c1530850fbf0f1e5ee384342"
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
    "revision": "0c9f49d2a48acad9714d43b6eb601b7c"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "9f9c50b8879a8c8292d196c11e287b97"
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
    "revision": "53b91b1bb3c171ecbe611e91c402ac02"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "dd86eea1802db42189331b29c207e347"
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
    "revision": "6e9fe4c8a347df3b9e6e849740df311d"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "0bd0456c0545bb2aa3a7bcec41c05d34"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "f59d8fa47aaea824879b13e81efcb200"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "45bcff851debde274008e2f8108f449d"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "ca034cdb4a6e6c70e41427bf8576b39b"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "8838fd2811f67fb62efdbaecd854b5a8"
  },
  {
    "url": "blog/index.html",
    "revision": "42fb90ae8f2d1c2689f0be2600132dcc"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "e15d0f75418200e31b441183467c0a45"
  },
  {
    "url": "blog/js-event.html",
    "revision": "3c1e714d6cb9e98fc3125339fea315bd"
  },
  {
    "url": "blog/js-form.html",
    "revision": "3154f90f04abd788cfd3ddf1489a93e7"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "b05fac4a5c28f444bd01c7be76aa7cb8"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "9b3e18fe51a186255461d93197e363be"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "203741cda8252801be7a61d8d9e734c4"
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
    "revision": "ae3bb1e7e7aa131b169bbcbd91ecd36c"
  },
  {
    "url": "blog/js-module.html",
    "revision": "346e5760536b6a483b65ac828c9b37db"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "f94385fca3de3ad124350fdc2395eda8"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "67116cbd9006f16ea0755f5fca39222b"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "c4162ccfe8945cf3dc3afaae31aa6065"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "e5e380e28afb102e2eca64faee36dc75"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "752abc8d207e5ccbc523f34501114059"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "b813c5064df32fe4aec982f12f0d2b99"
  },
  {
    "url": "blog/js-this.html",
    "revision": "4622d8c475f37eaa59ad1c01938c9d51"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "50575cb424208ef42833b190a15392c8"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "c0dab849ca2258d62786ebd977da8938"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "20bccdc78dbd94fce6111b32cd6dcb6e"
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
    "revision": "482ec39bd92cf73fa1da81246c3453b8"
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
    "revision": "76384c4defe60626387785bcb63860a5"
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
    "revision": "c5c5bca7b93e52a725d4abad836d8559"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "1b20c25663c5fbf0978a57cc5716fe09"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "86cf973cf057d807c40a5d36bc560abc"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "85a8166e0424c24e870d167e7fa1eddc"
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
    "revision": "269a34aaa25d426f80922dff22d208d2"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "eb0f65aae314abdc29d361c638b23645"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "ceb3377301a32863bbd317f01271ce57"
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
    "revision": "381ef239ce0741ed39bc356c92fc1dd3"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "81e8fa9485d376adba1a764758bcd85b"
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
    "revision": "fb893b3d5f0dda28aaf5465aaeb6fcb6"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "95bd34f989e8025e72858ff1becc26f1"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "ff3776cd62c4e3432ad403b55f08301d"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "6380ffb1ccce2fae2b721dc1cee8b960"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "f9a3793ca65e33d2df159cd2fe72fb45"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "cb9e99d8e0b0f29c6e5f1c6644c15dca"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "515ec9a54c1126035731e12d7243a4b0"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "0c122279d6c437c051464ec393f1b50c"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "0b4fa0eb17e4b11c6d003757becfe558"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "adf063530438d950c59a89c3b3cf6758"
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
    "revision": "ed6e12f9bd21bd46eb3a9a8ae485aec0"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "522c649759cdbf9d19c88cc8b03f8054"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "678bae1188c9ca7b72252a35e1ab088e"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "7eb25e896177089fd84b27432ad0aedd"
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
    "revision": "f364a768ae094888712836c1941ad400"
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
    "revision": "19a7a7d848fa7ae9c82d1b4a62339ff7"
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
    "revision": "c487bdc3225d9f2edfd034491abbece2"
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
    "revision": "bca2ae2954f42a82a9f04d6bef08e032"
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
    "revision": "4380878e5070411f101121c1f231b6ce"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "03f575931f5c5cec5292c35fb4548b89"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "bef1e8723bd5357f3c136d6ca15756b7"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "53c6f5bd2152b1f3063a64d09df88fe8"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "f82731dfd421afd6cd11d1b8a26b5cec"
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
    "revision": "bdcf32e8ff109cfd1874ac4c9b6596f6"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "fdcd5ffe59cd7c76955ba215decf7aa7"
  },
  {
    "url": "book/book-code.html",
    "revision": "c8b11d4ec9356363ea186ecd6ba27532"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "3ebfba69b0082640fa64412363e52036"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "93369800dc16b74ef4ba25d20655bbc9"
  },
  {
    "url": "book/book-http2.html",
    "revision": "b559723be3bedc0f3160aaeb832a79dc"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "a9a3099ed903bdbda37b73e3952a9684"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "305a7a8f894fbeb8bc02d9ce3342368a"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "365cf97a98fd0414595095cbf0fce0e3"
  },
  {
    "url": "book/book-regular.html",
    "revision": "31e3d2d4aad2a48b494c6bbbde03cead"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "4f32fa2c889b4bb238d70a3b13cf4379"
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
    "revision": "b759e503a280fedab6ebf8118bef4068"
  },
  {
    "url": "book/index.html",
    "revision": "3740d9825ce0208123522249b0d19141"
  },
  {
    "url": "index.html",
    "revision": "8220192d5bc4c28b3e2fbf3d1ac513ea"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "148bfcff884efffd665a17008599f1fe"
  },
  {
    "url": "interview/base.html",
    "revision": "da4761f98c0587f415ec755a7ce4163b"
  },
  {
    "url": "interview/css.html",
    "revision": "6564047175d2213ae240e5aede0f7594"
  },
  {
    "url": "interview/framework.html",
    "revision": "24c048ac1f260dd94d148a8cff587484"
  },
  {
    "url": "interview/html.html",
    "revision": "89fdbc1ae139e52d07e0abf349477f54"
  },
  {
    "url": "interview/index.html",
    "revision": "87bd127e472123934e8a33f4a8a0f477"
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
    "revision": "eb8c7bac7eb8fe9d72a88b15e39b808d"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "acc249ad6d3ac118c888c0046ad126ba"
  },
  {
    "url": "interview/structure.html",
    "revision": "5c5b8718fa6792bc7c0926656a54deeb"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "d47630e800007ea047f14a7ed033d543"
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
    "revision": "faca0bc075750086339d5cb0c81078ed"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "3aa7159101a8a0baacc29d40bdefbb85"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "62f417fbbc8636df07b31fb37b780334"
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
