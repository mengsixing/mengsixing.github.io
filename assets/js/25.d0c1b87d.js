(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{595:function(t,e,a){"use strict";a.r(e);var r=a(73),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"专业术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专业术语"}},[t._v("#")]),t._v(" 专业术语")]),t._v(" "),a("h2",{attrs:{id:"bigpipe-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigpipe-是什么"}},[t._v("#")]),t._v(" bigpipe 是什么")]),t._v(" "),a("p",[t._v("答：bigpipe 常用于服务器端渲染，当后端在渲染一个非常耗时的页面时，可以一边渲染，一边输出 html 给前端，此时前端也会根据接收到的 html 片段同步进行渲染。")]),t._v(" "),a("p",[t._v("原理：http1.1 中引入了一个 http 首部，Transfer-Encoding:chunked。这个首部标识了实体采用 chunked 编码传输，chunked 编码可以将实体分割成多个 PageLet 的小块进行传输，并且 chunked 编码的每一块内容都会自标识长度。")]),t._v(" "),a("h2",{attrs:{id:"fp-fcp-fmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fp-fcp-fmp"}},[t._v("#")]),t._v(" FP FCP FMP")]),t._v(" "),a("p",[t._v("FP：初次渲染")]),t._v(" "),a("p",[t._v("初次有内容的渲染 FCP")]),t._v(" "),a("p",[t._v("初次有意义的渲染 FMP")]),t._v(" "),a("h2",{attrs:{id:"客户端渲染-预渲染-服务器端渲染-同构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染-预渲染-服务器端渲染-同构"}},[t._v("#")]),t._v(" 客户端渲染，预渲染，服务器端渲染，同构")]),t._v(" "),a("p",[t._v("客户端渲染：直接加载一个空壳，然后通过 js 去加载页面，常见的有 react，vue。")]),t._v(" "),a("ul",[a("li",[t._v("fp 快")]),t._v(" "),a("li",[t._v("fcp 慢")]),t._v(" "),a("li",[t._v("fmp 慢")])]),t._v(" "),a("p",[t._v("预渲染：在客户端渲染的基础上，通过审查元素，抓取到静态 HTML，交给客户端。")]),t._v(" "),a("ul",[a("li",[t._v("fp 中")]),t._v(" "),a("li",[t._v("fcp 快")]),t._v(" "),a("li",[t._v("fmp 中")])]),t._v(" "),a("p",[t._v("服务器端渲染：传统模式的渲染，服务器端将渲染好的 HTML 发给客户端。")]),t._v(" "),a("ul",[a("li",[t._v("fp 慢")]),t._v(" "),a("li",[t._v("fcp 慢")]),t._v(" "),a("li",[t._v("fmp 快")])]),t._v(" "),a("p",[t._v("服务器端同构：浏览器刷新时请求服务器端渲染，在页面跳转时，由客户端渲染接管。")]),t._v(" "),a("h2",{attrs:{id:"什么是-long-task-lcp-cls-ttfb-fid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-long-task-lcp-cls-ttfb-fid"}},[t._v("#")]),t._v(" 什么是 Long task LCP CLS TTFB FID")]),t._v(" "),a("p",[t._v("Long task 允许 Web 页面的开发者检测是否存在持续一段时间独占 UI 线程并阻塞其他关键任务执行（如对用户输入进行响应）的“长任务”，当一个任务执行时间超过 50ms 时，开发者为长任务注册的函数将会被自动调用。")]),t._v(" "),a("p",[t._v("LCP (Largest Contentful Paint) 是一个以用户为中心的性能指标，可以测试用户感知到的页面加载速度，因为当页面主要内容可能加载完成的时候，它记录下了这个时间点。一个快速的 LCP，可以让用户感受到这个页面的可用性。")]),t._v(" "),a("p",[t._v("CLS(Cumulative Layout Shift)  指的是页面在渲染时的稳定性，主要测量布局偏移的分数，当一个可见元素在两帧之间，改变了它的起始位置，这些元素被当成不稳定元素。")]),t._v(" "),a("p",[t._v("FID(First Input Delay)FID 衡量的是从用户第一次与页面进行交互（即当他们单击链接，点击按钮或使用自定义的 JavaScript 驱动的控件）到浏览器实际上能够开始处理事件处理程序的时间。")]),t._v(" "),a("p",[t._v("TTFB（time-to-first-byte）服务器端返回第一个字节数据的时间。")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://github.com/GoogleChrome/web-vitals",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-vitals"),a("OutboundLink")],1),t._v(" 库可以帮助我们轻松获取 FCP、LCP、CLS")]),t._v(" "),a("h2",{attrs:{id:"webrtc-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-是什么"}},[t._v("#")]),t._v(" WebRTC 是什么")]),t._v(" "),a("p",[t._v("WebRTC（Web Real-Time Communication）web 实时通信技术。简单地说就是在 web 浏览器里面引入实时通信，包括音视频通话等。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/vipzhou/p/7994927.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebRTC 介绍及简单应用"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"overlay-network-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overlay-network-是什么"}},[t._v("#")]),t._v(" Overlay network 是什么")]),t._v(" "),a("p",[t._v("覆盖网络是一种创建在另一网络之上的计算机网络。覆盖网络中的节点可以被认为是通过虚拟或逻辑链接相连，其中每个链接对应一条路径（Path）。节点之间也可能通过下层网络中的多个物理连接实现相连。 例如：VPN 可视为覆盖网络，因为它们的节点都运行在因特网之上。 因特网自身最初也是作为一个电话网络之上的覆盖网络构建，而当今，电话网络正越来越变成一个创建在因特网之上的覆盖网络。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%A6%86%E7%9B%96%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("wikipedia 覆盖网络"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);