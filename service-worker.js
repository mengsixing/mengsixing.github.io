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
    "revision": "72db0ca3294bc43cd541d1f98fdcb878"
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
    "url": "assets/js/101.266231b6.js",
    "revision": "fa1abbab09e61186b84c86b18ef6275f"
  },
  {
    "url": "assets/js/102.8cb279ef.js",
    "revision": "c60ffed5b2681742aa5714ab681cb052"
  },
  {
    "url": "assets/js/103.e960dc9c.js",
    "revision": "e2d50b468261365ef8ffa68dd4beba3a"
  },
  {
    "url": "assets/js/104.5180f1a2.js",
    "revision": "d5fd95791533ffbee4122c2beb416e73"
  },
  {
    "url": "assets/js/105.53022d2d.js",
    "revision": "c295542e31d4773e3573e6f313b30af8"
  },
  {
    "url": "assets/js/106.864b16b3.js",
    "revision": "89c65d1b3290823357a15ce6b0b28e56"
  },
  {
    "url": "assets/js/107.f794285a.js",
    "revision": "dc9dda211e4b445a363471c1ede35ab5"
  },
  {
    "url": "assets/js/108.18c7c766.js",
    "revision": "72e62b13a99a0e9d12ed51fdb4eb72d0"
  },
  {
    "url": "assets/js/109.3159fd68.js",
    "revision": "613e238d0a1d33ec2795be93c45cae69"
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
    "url": "assets/js/115.2b9231b6.js",
    "revision": "cfdef2b04e6f037d6a13547c0bffa799"
  },
  {
    "url": "assets/js/116.4362fc5b.js",
    "revision": "d9f5d81d183f26faa32837f6f5fe68d5"
  },
  {
    "url": "assets/js/117.2b16cffb.js",
    "revision": "28e33e36e9650163c3c147b8926a96f6"
  },
  {
    "url": "assets/js/118.ef5c23c8.js",
    "revision": "ed0e281213e6652e2f07bcd7e1dbeaf5"
  },
  {
    "url": "assets/js/119.b920904e.js",
    "revision": "4795b42669b30f8cc501d3faffea52ae"
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
    "url": "assets/js/121.67d5675e.js",
    "revision": "35fdebbf19a4f3e995a2b718de364cba"
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
    "url": "assets/js/124.cc145c2b.js",
    "revision": "0b7216049a6af4439e13d90e94723d48"
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
    "url": "assets/js/127.3226e10a.js",
    "revision": "23b2c6ecff6e4c5e7b390c1f8d6fd29a"
  },
  {
    "url": "assets/js/128.545449c5.js",
    "revision": "7597a3a51813c46a5462ee6d55245e47"
  },
  {
    "url": "assets/js/129.2a8b56f7.js",
    "revision": "8b4166a16f42f7728341d621e5990d6f"
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
    "url": "assets/js/54.fb0ea94a.js",
    "revision": "ea92bd2979f306144efed28051c460f7"
  },
  {
    "url": "assets/js/55.e7eef22d.js",
    "revision": "dcc4eaf561a0f1dc2c464b2b8e0b4ab3"
  },
  {
    "url": "assets/js/56.b03b8634.js",
    "revision": "66bf3c0b5825e06a5102a468d28e2b07"
  },
  {
    "url": "assets/js/57.56252027.js",
    "revision": "0d06f05bff03255516d338581f55f334"
  },
  {
    "url": "assets/js/58.3ca1f3cc.js",
    "revision": "ec0f675a94ad519f7ebd47cfb17999cc"
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
    "url": "assets/js/61.ae547dc4.js",
    "revision": "8232cef0dc7efd419498d56356bd1659"
  },
  {
    "url": "assets/js/62.882b80b2.js",
    "revision": "ef89c21afa3bbd2ad712bb441b514bcb"
  },
  {
    "url": "assets/js/63.45309d1b.js",
    "revision": "1cd3b1bd2707a296ab00a451ab815fcf"
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
    "url": "assets/js/66.5c15a198.js",
    "revision": "334922039a00c7485f74cc182e85da50"
  },
  {
    "url": "assets/js/67.a5ad6918.js",
    "revision": "97c1f9ca258e124d2d43db0d3c5adfed"
  },
  {
    "url": "assets/js/68.3aa288ec.js",
    "revision": "7bfd513189a709261e76961e9cd14632"
  },
  {
    "url": "assets/js/69.8f847cfc.js",
    "revision": "9599459e827d0be963f27cf15c578a5e"
  },
  {
    "url": "assets/js/7.51086548.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/70.df24fe0b.js",
    "revision": "d784d0c175c0b821ed061fcb8022b375"
  },
  {
    "url": "assets/js/71.192acc3d.js",
    "revision": "edc35ac1a0720fbe20eb46a15f33193f"
  },
  {
    "url": "assets/js/72.ffbd3b38.js",
    "revision": "5adf6f12a7ec9b0b5c26873cad10fed9"
  },
  {
    "url": "assets/js/73.fbb826a1.js",
    "revision": "4bd9cbcdc37d5bbfe981e9083a953553"
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
    "url": "assets/js/77.d3807268.js",
    "revision": "f056c700812e2bc6a43ee3fdcb2fe30a"
  },
  {
    "url": "assets/js/78.4eae81ab.js",
    "revision": "7a08ec0268135716967cc698ac170073"
  },
  {
    "url": "assets/js/79.12bb5737.js",
    "revision": "2c80c9b8649e3157fff7754458ed4ec1"
  },
  {
    "url": "assets/js/8.1aa70e43.js",
    "revision": "3aecdee0e151e25b275fc81b39bfd406"
  },
  {
    "url": "assets/js/80.8cc36dd5.js",
    "revision": "8ccbe3765b3e23c3659013d6a66d8209"
  },
  {
    "url": "assets/js/81.51778371.js",
    "revision": "611ea2feb204449a4f32fffdcb795492"
  },
  {
    "url": "assets/js/82.41ef517f.js",
    "revision": "eb0f0c4eb55409e98603b6552b5f1f19"
  },
  {
    "url": "assets/js/83.31d813fa.js",
    "revision": "abfafaf8bb4335b51de3684aea2115a2"
  },
  {
    "url": "assets/js/84.0c61425f.js",
    "revision": "a6eb3e93b55b64cd2bd52fdb79b9d0c4"
  },
  {
    "url": "assets/js/85.d2e7e279.js",
    "revision": "0be8b44f551c6249a92372031d070556"
  },
  {
    "url": "assets/js/86.f3de8160.js",
    "revision": "419512bba3c8210b4a5fef0b79ddcb32"
  },
  {
    "url": "assets/js/87.7cb18d80.js",
    "revision": "f7c9d8c93d68bca97034f388194a0dd1"
  },
  {
    "url": "assets/js/88.d8e9d64f.js",
    "revision": "c9a9c79bfdf7bb732caea6749852a2bc"
  },
  {
    "url": "assets/js/89.474273d1.js",
    "revision": "1d51a1456ab612f3e1856b5aec94c075"
  },
  {
    "url": "assets/js/9.b8b87c30.js",
    "revision": "9168602663757fd360e9840045247c9b"
  },
  {
    "url": "assets/js/90.91a033ba.js",
    "revision": "cd368d57584c3dbd668f0b7b2b023bfa"
  },
  {
    "url": "assets/js/91.f368cd88.js",
    "revision": "81d20c8d23205d46e6ceefde2f71125c"
  },
  {
    "url": "assets/js/92.111bb40b.js",
    "revision": "c0473b9d5105af2e15d2e29343591c02"
  },
  {
    "url": "assets/js/93.fb21f235.js",
    "revision": "23f82ba95bb95bbd75c6057eccfb2b53"
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
    "url": "assets/js/app.f57b0ba5.js",
    "revision": "8716a09ff453851938d9bfe8436ee4b4"
  },
  {
    "url": "blog/2018.html",
    "revision": "a11cb91fb99a31a693f7d35accdccbe7"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "56941cf367895efbe0180b7102120e47"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "af90aee7471baa4ec5c45a666e2e725d"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "55ad4b88d393787dca5edecd33fa5e96"
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
    "revision": "dc0ae8676334525d146a2094bf8a9f17"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "c0bc8e445da067fcc7f8795a1a7357ed"
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
    "revision": "330b3fbdd12ad157777203049b93f7a8"
  },
  {
    "url": "blog/base-function.html",
    "revision": "b81056d101f1d537a7fd3d3ee4c1c4b1"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "582ce9a0289f7e89d0459f15d3350054"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "66e8e95de050dea5248a51b000887895"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "addea4dcd0f7a33728493858ec6330f9"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "9f61a801038cd0b5cf6207cf5854ff35"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "8a176b4d110b0cca13c8f3ce5062e59d"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "fa7f072601b1cfb19d99822b7378315d"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "521d981bf1a451ec12b1343c368f0590"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "8e275503aa4c85562393795ed330e501"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "f2623c6a437d76b44feff6821c61598d"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "fc312cc68eed1977ec3478c68fce29e8"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "4aeb07ed23b2135c14c1a5493f02779f"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "783739741dc4655a294c6c152d97dc62"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "6ba37268dbf87d9a91bc69cb105fd2c3"
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
    "revision": "89aa6ea5eda738ebb4d3f5ae8313f5d1"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "442ddcb63bc4492612e445d62c2a7962"
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
    "revision": "de685054c610f58179290c8f457bfdc4"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "495e9e58adb910a78782f27e8da2fe86"
  },
  {
    "url": "blog/css-next.html",
    "revision": "4e91a7e4b65738d8b7570f6b8ae0f1a3"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "c1919dfb719d5fdcdf0b63eba012bf65"
  },
  {
    "url": "blog/css.html",
    "revision": "b0877b996a005f51f1717456973c2315"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "5c9f4001d79347b48af3ee91fba385d9"
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
    "revision": "55994dbc2cd22321ac105a60975da7fe"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "5f6e084fc821dff4f157525fd1002863"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "a5807dde4c475a58a772a7b912351024"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "89477e7f40e68f940bfe54222714b63f"
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
    "revision": "49f04685d6a53694fc2f2f7b5e4dbae1"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "ba30486ae3e691ad842ded44357ee4e0"
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
    "revision": "df85eafd041a061bc472efa6494315bc"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "b685464124e4e03438a2d246894b2580"
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
    "revision": "4c0577a124646bb91c708258f63e49a9"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "a9131ba6f4d516aa3fa37e46e2e947d8"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "024b757d081041f362c08b335be9ba89"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "be3310db834b9e2b7ed22bd5a25b41f3"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "216bea7927d3f332018be80ce613e903"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "3026354b0f82ead321d9855d2ca88dd8"
  },
  {
    "url": "blog/index.html",
    "revision": "348009129afe903ee06609fd2c71c6d2"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "c2852b8e721ba7047941484e057b1b64"
  },
  {
    "url": "blog/js-event.html",
    "revision": "d49300eab843e87b11dc608266b684cb"
  },
  {
    "url": "blog/js-form.html",
    "revision": "1818f72e1dcb2e98eab96023cf989c0a"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "d96932a9bd07deeb7ebc5094d8e3b781"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "0b1734912dae336fafd2e0dea9a7df01"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "b9ec4885091e68f45438c92db0c9ad4d"
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
    "revision": "b3bc7645b7088a20f587f41ab7185b66"
  },
  {
    "url": "blog/js-module.html",
    "revision": "fe26e9aad8cd8fda87363038703b35b7"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "abf05ac2d1203ac664b5181772151623"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "3e7331375e8a9ce90928cea71ae58c57"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "e14c72b7596e22982ad338299ac005f7"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "72d3dc5e867b049cb7b98501a9454594"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "d3daadcdb81f83eab17ff348db30e7a5"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "9938b7847fdb26e906a31b7fad3534e1"
  },
  {
    "url": "blog/js-this.html",
    "revision": "7169980e227d0edb8388f89ce146582f"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "76ccf352abf074ce893f404e86b35416"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "b2577bd2b245aaf71a3805b5cbc9f7e2"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "23a08ec5dcf07d80de95ddc74a49bfd7"
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
    "revision": "59f97ac7b12b2f1f6d65db4e5ac43c7d"
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
    "revision": "aae57f4095d12908e7a9c59b4b65c901"
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
    "revision": "a23ac460d70e597c2147ca8c154024bf"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "c903cd3580a8b93e714bde99cfd9481c"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "c0a6807afe93fc8f0ed350e56d82b2fc"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "3d556c97e5334e795ece1aa129d47697"
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
    "revision": "7af49a8180f76f2d65a5ef4f005a9e25"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "d1229ab01c2ba4c4e2e3b901f4a7b3b9"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "493b8810b2a3a3babd52ebfde5476ec3"
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
    "revision": "7df9df4afd0744c77cb18f85068b9cc7"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "02242b07b9ebd0de37c8efa6218a0203"
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
    "revision": "28558e45ed6142832a712858eb8f7535"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "ae32ee80ef49597c0cbf130cf0146f70"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "e4902c8490073a39e9c625fc0a055c46"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "738c27ab78686a689c3f831b2d5da929"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "09e7dd32061cd05150a406772a44fec3"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "de16b9c0d713482e75789051e1396e14"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "b7a48d994397f1988666be879e1b591b"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "40b4b8d3c3b05026107c977e2584022f"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "72141983ed34ea84d9f787ad03fccdf4"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "cbacd141215d62f7150e9f24c756a6c3"
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
    "revision": "45dd64704b7f1e7e2bf0ff79323734bb"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "cd4bf953872519d60670211d44d6dedb"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "d7bd115cd4c92e6e2471cca0a29cb474"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "2344a8b4cba5a9623182e15038ba9b52"
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
    "revision": "d10f682b67a574a2cf17abd394eadfb3"
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
    "revision": "fe708a80480bdb7ca1770ddcc08d9668"
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
    "revision": "d3d560d58addeee351a187b969612142"
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
    "revision": "112b6ce91f1eba1c07d8b65b1684cacb"
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
    "revision": "89da207d90f140fa815beda19781b44d"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "83669dc5ac9fd86f3b95d204277914ea"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "5f99f29a3f18150602b69c6cc5249f2c"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "8bd4d4d1bbcfe016fc7d961b30afe5a0"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "2a5c9a217f76492a5f67a9d6a79d3bd8"
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
    "revision": "cfa4bb2b78aca8053a07eb8b1edaa505"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "2cd1bbd71941d56b3c988fdc26bd5a33"
  },
  {
    "url": "book/book-code.html",
    "revision": "6b86f47c5f7d5ed66cc33a460f84ab31"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "f2cac946d38c4b6075108a41a04aca2e"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "989b2dc496e53412b1de49ce386fa60d"
  },
  {
    "url": "book/book-http2.html",
    "revision": "5a1a89d4155ae787dfb1f5f9c4d62b40"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "642da4747bf360734ed851208d138090"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "64474090bc05152eec055f46c6cc25c3"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "d254e3636b7552bee14380faf7406f3a"
  },
  {
    "url": "book/book-regular.html",
    "revision": "9bdf38504ed8f652cee0704e4cc8c7c7"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "8d43c61e027845d1b4a1340bc82a8e2c"
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
    "revision": "dd090d978bb9f65d11554c9d533ebbd4"
  },
  {
    "url": "book/index.html",
    "revision": "0f448de2d6840f2242f6ac50c9b9d005"
  },
  {
    "url": "index.html",
    "revision": "5e7e7cf9d4c6891661f42a7a9cb391e3"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "bcd5df90a4a6024e733e059898db5e41"
  },
  {
    "url": "interview/base.html",
    "revision": "92ef3598d7ec19cba3b9e69c98426e8e"
  },
  {
    "url": "interview/css.html",
    "revision": "7d5cd50775995092e507c6cc17257af1"
  },
  {
    "url": "interview/framework.html",
    "revision": "4bd2c52d2d71936988998fe38e130df8"
  },
  {
    "url": "interview/html.html",
    "revision": "52f6ba279244a21f2f145437bbc0678e"
  },
  {
    "url": "interview/index.html",
    "revision": "1b02f40ce90e56b2348755b38958ab67"
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
    "revision": "30976a8101b3136c5d4d3cd5413c30f2"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "03b8ec9f1027eb265f9fda94fb162f46"
  },
  {
    "url": "interview/structure.html",
    "revision": "68009647ab602d710356f8d2022528eb"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "21bfcc30e790d76c59b14d2f1c681d5f"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "translate/index.html",
    "revision": "626104f08aeb14e9c00dc02209c2174f"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "ac3c4e3798580c5d030239f89b7e7a83"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "0a58d836dbef234d1ba65465b6223083"
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
