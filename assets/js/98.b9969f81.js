(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{676:function(v,_,s){"use strict";s.r(_);var a=s(69),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"一文读懂-web-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一文读懂-web-安全"}},[v._v("#")]),v._v(" 一文读懂 Web 安全")]),v._v(" "),s("p",[v._v("Web 安全是互联网中不可或缺的一个领域，这个领域中诞生了大量的黑帽子与白帽子，他们都是安全领域的王者，在平时里，他们利用各种巧妙的技术互相博弈，时不时就会掀起一场 Web 安全浪潮，真可谓神仙打架，各显神通。")]),v._v(" "),s("p",[v._v("本文从一个吃瓜群众的角度，聊一聊 Web 安全的一些有趣故事。")]),v._v(" "),s("ul",[s("li",[v._v("安全世界观")]),v._v(" "),s("li",[v._v("安全攻防案例")]),v._v(" "),s("li",[v._v("总结与思考")])]),v._v(" "),s("h2",{attrs:{id:"安全世界观"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全世界观"}},[v._v("#")]),v._v(" 安全世界观")]),v._v(" "),s("p",[v._v("在互联网发展之初，IE 浏览器垄断的时期，大家上网的目的都很单纯，主要通过浏览器分享信息，获取新闻。但随着互联网的不断发展发展，一个网页能做的事情越来越多，除了看新闻，我们还可以看视频、玩游戏、购物、聊天等，这些功能都大大丰富了我们的生活。")]),v._v(" "),s("p",[v._v("随着网页功能的逐渐增多，就开始出现了一些黑帽子，他们试图通过一些技术手段来牟取利益。在我小的时候，印象最深的就是木马病毒，它可以监控你的键盘，将你在键盘上敲打的内容发送到黑客的机器上，黑客通过分析这些内容，很容易就能得到你的游戏账号和密码。")]),v._v(" "),s("p",[v._v("在这之后，就诞生出了一些杀毒软件，致力于解决网络上的各种病毒，随着不断地发展，杀毒软件已经成为一台电脑必不可少的软件。")]),v._v(" "),s("blockquote",[s("p",[v._v("为什么会出现这样的安全问题？")]),v._v(" "),s("p",[s("strong",[v._v("安全归根到底是信任的问题")]),v._v("，如果所有人都按照正常的流程去上网，不去谋取私利，也就没有安全问题可谈了。")])]),v._v(" "),s("p",[v._v("安全的根本在于信任，但要让所有人互相信任谈何容易。在当前阶段，我们可以做到：持续做好安全防护，让漏洞越来越少，非法攻击越来越困难，这样就能逐渐减少黑帽子的数量，让病毒制造者越来越少。")]),v._v(" "),s("h3",{attrs:{id:"如何做好安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何做好安全"}},[v._v("#")]),v._v(" 如何做好安全")]),v._v(" "),s("p",[v._v("要做好安全，首先得理解安全问题的属性，前人通过无数实践，最后将安全的属性总结为安全三要素，分别为：机密性、完整性、可用性。")]),v._v(" "),s("ul",[s("li",[v._v("机密性\n"),s("ul",[s("li",[v._v("保护数据内容不被泄露。")]),v._v(" "),s("li",[v._v("通常使用加密的方法。")])])]),v._v(" "),s("li",[v._v("完整性\n"),s("ul",[s("li",[v._v("保护数据内容是完整的、没有被篡改。")]),v._v(" "),s("li",[v._v("通常使用数字签名的方法。")])])]),v._v(" "),s("li",[v._v("可用性\n"),s("ul",[s("li",[v._v("数据随时都能够使用。")]),v._v(" "),s("li",[v._v("通常是在防御 DOS。")])])])]),v._v(" "),s("p",[v._v("有了安全 3 要素之后，我们就可以对安全问题进行评估了。")]),v._v(" "),s("ul",[s("li",[v._v("资产等级划分\n"),s("ul",[s("li",[v._v("找出最重要的数据。")]),v._v(" "),s("li",[v._v("找出最重要数据的宿主空间，如：在数据库里，那么数据库就得重点防御。")]),v._v(" "),s("li",[v._v("找出数据库的宿主空间，如：在一台服务器上，那么这台服务器就得做次等防御。")]),v._v(" "),s("li",[v._v("找出服务器的宿主空间，如：在 OSI 网络层级上，那么在网络层面就得做一般防御。")])])]),v._v(" "),s("li",[v._v("威胁分析\n"),s("ul",[s("li",[v._v("找出威胁（可能造成危害的来源）。")]),v._v(" "),s("li",[v._v("找出风险（可能出现的损失叫做风险）。")])])]),v._v(" "),s("li",[v._v("风险分析\n"),s("ul",[s("li",[v._v("采取多标准决策分析，即：风险 = 威胁等级 * 威胁可行性。")]),v._v(" "),s("li",[v._v("计算所有的威胁，将最终的风险进行排序，优先解决风险大的问题。")])])]),v._v(" "),s("li",[v._v("确认解决方案\n"),s("ul",[s("li",[v._v("找出不安全的实现方式，并确定解决方案。")]),v._v(" "),s("li",[v._v("解决方案不要改变商业需求的初衷。")]),v._v(" "),s("li",[v._v("解决方案需对用户透明，不要改变用户的习惯。")])])])]),v._v(" "),s("p",[v._v("做好安全评估之后，我们就有了一份安全解决方案，后续的安全工作只需按照这个方案去做，就没有任何问题。")]),v._v(" "),s("h3",{attrs:{id:"安全的原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全的原则"}},[v._v("#")]),v._v(" 安全的原则")]),v._v(" "),s("p",[v._v("有了安全解决方案之后，我们还可以制定一些安全原则，遵守原则做事，可以让我们事半功倍。")]),v._v(" "),s("ul",[s("li",[v._v("黑名单、白名单原则\n"),s("ul",[s("li",[v._v("白名单方案指的是给安全的资源授权。")]),v._v(" "),s("li",[v._v("黑名单方案指的是禁用不安全的资源。")]),v._v(" "),s("li",[v._v("我们应该优先使用白名单方案，因为黑名单通常统计不完所有的不安全资源。")]),v._v(" "),s("li",[v._v("如：XSS 攻击的方式非常多，可以通过 script、css、image 标签等，尽管你将这些标签都加入黑名单，也不能保证其他的标签都没有 XSS 的攻击隐患。")])])]),v._v(" "),s("li",[v._v("最小权限原则\n"),s("ul",[s("li",[v._v("只授予必要的权限，不要过度授权，减少出错机会。")]),v._v(" "),s("li",[v._v("如：普通权限的 Linux 用户只能操作 "),s("code",[v._v("~")]),v._v(" 文件夹下的目录，如果有人想删库跑路，在执行 "),s("code",[v._v("rm -rf /")]),v._v(" 时，就会提示无权限。")])])]),v._v(" "),s("li",[v._v("纵深防御原则\n"),s("ul",[s("li",[v._v("这条原则类似 "),s("code",[v._v("木桶理论")]),v._v("，安全水平往往取决于最短的那块板。")]),v._v(" "),s("li",[v._v("即：不要留下短板，黑帽子们往往可以利用短板为突破口，挖掘更大的漏洞。")])])]),v._v(" "),s("li",[v._v("数据与代码分离原则\n"),s("ul",[s("li",[v._v("当用户数据被当成代码执行时，混淆了数据和代码的边界，从而导致安全问题。")]),v._v(" "),s("li",[v._v("如：XSS 就是利用这一点去攻击的。")])])]),v._v(" "),s("li",[v._v("不可预测性原则\n"),s("ul",[s("li",[v._v("这条原则是为了提高攻击门槛，有效防止基于篡改、伪造的攻击。")]),v._v(" "),s("li",[v._v("如：数据库中使用 uuid 代替 number 型的自增主键，可以避免 id 被攻击者猜到，从而进行批量操作。")]),v._v(" "),s("li",[v._v("token 也是利用不可预测性，攻击者无法构造 token 也就无法进行攻击。")])])])]),v._v(" "),s("p",[v._v("有了这些安全原则，我们就可以开干了，接下来介绍几个常见的攻防案例。")]),v._v(" "),s("h2",{attrs:{id:"安全攻防案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全攻防案例"}},[v._v("#")]),v._v(" 安全攻防案例")]),v._v(" "),s("p",[v._v("安全攻防的案例非常多，这里主要介绍几个出镜率比较高的安全问题。")]),v._v(" "),s("h3",{attrs:{id:"客户端攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端攻击"}},[v._v("#")]),v._v(" 客户端攻击")]),v._v(" "),s("ul",[s("li",[v._v("XSS 攻击")]),v._v(" "),s("li",[v._v("CSRF 攻击")]),v._v(" "),s("li",[v._v("点击劫持")])]),v._v(" "),s("h4",{attrs:{id:"xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[v._v("#")]),v._v(" XSS 攻击")]),v._v(" "),s("p",[v._v("XSS 攻击的本质是将用户数据当成了 HTML 代码一部分来执行，从而混淆原本的语义，产生新的语义。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200726164324964.png",alt:""}})]),v._v(" "),s("p",[v._v("如图所示，我们注册了一个 "),s("code",[v._v("<script>alert(document.cookie)<\/script>")]),v._v(" 的用户名，所有能看到此用户名字的页面，都会弹出当前浏览器的 Cookie，如果代码的逻辑是将 Cookie 发送到攻击者的网站，攻击者就能冒充当前用户进行登录了。")]),v._v(" "),s("p",[v._v("XSS 攻击方式有很多，所有和用户交互的地方，都有可能存在 XSS 攻击。")]),v._v(" "),s("p",[v._v("例如：")]),v._v(" "),s("ul",[s("li",[v._v("所有 input 框。")]),v._v(" "),s("li",[v._v("window.location。")]),v._v(" "),s("li",[v._v("window.name。")]),v._v(" "),s("li",[v._v("document.referrer。")]),v._v(" "),s("li",[v._v("document.cookie。")]),v._v(" "),s("li",[v._v("localstorage。")]),v._v(" "),s("li",[v._v("...")])]),v._v(" "),s("p",[v._v("由于页面中与用户交互的地方非常多，肯定还有一些 XSS 的攻击方式没有被发现，而一旦被黑帽子发现，就可能造成严重的影响，所以我们务必引起重视。")]),v._v(" "),s("h5",{attrs:{id:"xss-攻击影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击影响"}},[v._v("#")]),v._v(" XSS 攻击影响")]),v._v(" "),s("p",[v._v("被 XSS 攻击成功后，攻击者就可以获取大量的用户信息，例如：")]),v._v(" "),s("ul",[s("li",[v._v("识别用户 UA。")]),v._v(" "),s("li",[v._v("识别用户浏览器扩展。")]),v._v(" "),s("li",[v._v("识别用户浏览过的网站。\n"),s("ul",[s("li",[v._v("通过 CSS 的 Visited 属性。")])])]),v._v(" "),s("li",[v._v("获取用户真实的 IP。\n"),s("ul",[s("li",[v._v("通过 WebRTC 等。")])])]),v._v(" "),s("li",[v._v("盗取 Cookie\n"),s("ul",[s("li",[v._v("伪造用户登录，窃取用户资料。")])])]),v._v(" "),s("li",[v._v("XSS 钓鱼。\n"),s("ul",[s("li",[v._v("向页面注入一个登录弹窗，让用户认为是网站内的登录弹窗（其实是钓鱼网站的），一旦用户登录，账号密码就泄露给了钓鱼网站。")])])])]),v._v(" "),s("h5",{attrs:{id:"xss-攻击防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击防御"}},[v._v("#")]),v._v(" XSS 攻击防御")]),v._v(" "),s("p",[v._v("目前来说，XSS 已经得到了互联网行业的重视，许多开发框架都内置了安全的 HTML 渲染方法。")]),v._v(" "),s("p",[v._v("我们也可以自定义进行一些安全配置。")]),v._v(" "),s("ul",[s("li",[v._v("配置 HTTP 中的 http-only 头，让前端 JS 不能操作 Cookie。")]),v._v(" "),s("li",[v._v("输入检查，在用户提交数据时，使用 XssFilter 过滤掉不安全的数据。")]),v._v(" "),s("li",[v._v("输出检查，在页面渲染的时候，过滤掉危险的数据。")])]),v._v(" "),s("h4",{attrs:{id:"csrf-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[v._v("#")]),v._v(" CSRF 攻击")]),v._v(" "),s("p",[v._v("CSRF（Cross-site request forgery）跨站请求伪造，是一种利用用户身份，执行一些用户非本意的操作。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595764461065&di=52af20dbe637a55ada2bf2770f647109&imgtype=0&src=http%3A%2F%2Fimg.kanzhun.com%2Fimages%2Fseo%2Fmianshiti%2F20191125%2F2d9456cb9057a1973c48f333e884f8fa.png",alt:""}})]),v._v(" "),s("p",[v._v("如图所示：")]),v._v(" "),s("ol",[s("li",[v._v("用户先登录了服务器 B，然后去访问服务器 C。")]),v._v(" "),s("li",[v._v("服务器 C 通过恶意脚本，冒充 A 去调用服务器 B 上的某个功能，")]),v._v(" "),s("li",[v._v("对于服务器 B 来说，还以为这是 A 发起的请求，就当作正常请求处理了。")])]),v._v(" "),s("p",[v._v("试想一下，如果 C 冒充 A 进行了一次转账，必定会造成大量的经济损失。")]),v._v(" "),s("h5",{attrs:{id:"csrf-防御方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-防御方式"}},[v._v("#")]),v._v(" CSRF 防御方式")]),v._v(" "),s("p",[v._v("防御 CSRF 主要有以下几种方式：")]),v._v(" "),s("ul",[s("li",[v._v("验证码\n"),s("ul",[s("li",[v._v("每一次请求都要求用户验证，以确保请求真实可靠。")]),v._v(" "),s("li",[v._v("即：利用恶意脚本不能识别复杂的验证码的特点，保证每次请求都是合法的。")])])]),v._v(" "),s("li",[v._v("Referer 检查\n"),s("ul",[s("li",[v._v("检查发起请求的服务器，是否为目标服务器。")]),v._v(" "),s("li",[v._v("即：HTTP 请求中的 Referer 头传递了当前请求的域名，如果此域名是非法服务器的域名，则需要禁止访问。")])])]),v._v(" "),s("li",[v._v("Token\n"),s("ul",[s("li",[v._v("利用不可预测性原则，每一请求必须带上一段随机码，这段随机码由正常用户保存，黑帽子不知道随机码，也就无法冒充用户进行请求了。")])])])]),v._v(" "),s("h4",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[v._v("#")]),v._v(" 点击劫持")]),v._v(" "),s("p",[v._v("点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。")]),v._v(" "),s("p",[v._v("就像一张图片上面铺了一层透明的纸一样，你看到的是攻击者的页面，但是其实这个页面只是在底部，而你真正点击的是被攻击者透明化的另一个网页。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdn.net/20180319164653726",alt:""}})]),v._v(" "),s("p",[v._v("如果所示，当你点击了页面上的按钮之后，本以为会。。。而真正执行的操作是关注了某人的博客。")]),v._v(" "),s("h5",{attrs:{id:"点击劫持防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持防御"}},[v._v("#")]),v._v(" 点击劫持防御")]),v._v(" "),s("p",[v._v("由于点击劫持主要通过 iframe，所以在防御时，主要基于 iframe 去做。")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("方案一：frame busting")]),v._v(" "),s("ul",[s("li",[v._v("正常网站使用 JS 脚本判断是否被恶意网站嵌入，如：博客网站监测到被一个 iframe 打开，自动跳转到正常的页面即可。")])]),v._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("self "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("!==")]),v._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 跳回原页面")]),v._v("\n  top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br"),s("span",{staticClass:"line-number"},[v._v("4")]),s("br")])])]),v._v(" "),s("li",[s("p",[v._v("方案二：使用 HTTP 中的 x-frame-options 头，控制 iframe 的加载，它有 3 个值可选：")]),v._v(" "),s("ul",[s("li",[v._v("DENY，表示页面不允许通过 iframe 的方式展示。")]),v._v(" "),s("li",[v._v("SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示。")]),v._v(" "),s("li",[v._v("ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示。")])])]),v._v(" "),s("li",[s("p",[v._v("配置 iframe 的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe",target:"_blank",rel:"noopener noreferrer"}},[v._v("sandbox"),s("OutboundLink")],1),v._v(" 属性")]),v._v(" "),s("ul",[s("li",[v._v('sandbox = "allow-same-origin" 则只能加载与主站同域的资源。')])])])]),v._v(" "),s("h3",{attrs:{id:"服务器端攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器端攻击"}},[v._v("#")]),v._v(" 服务器端攻击")]),v._v(" "),s("p",[v._v("服务器端的攻击的方式也非常多，这里列举几个常见的。")]),v._v(" "),s("ul",[s("li",[v._v("SQL 注入攻击")]),v._v(" "),s("li",[v._v("文件上传漏洞")]),v._v(" "),s("li",[v._v("登录认证攻击")]),v._v(" "),s("li",[v._v("应用层拒绝服务攻击")]),v._v(" "),s("li",[v._v("webServer 配置安全")])]),v._v(" "),s("h4",{attrs:{id:"sql-注入攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入攻击"}},[v._v("#")]),v._v(" SQL 注入攻击")]),v._v(" "),s("p",[v._v("SQL 注入和 XSS 一样，都是违背了数据和代码分离原则导致的攻击方式。")]),v._v(" "),s("p",[v._v("如图所示，我们利用 SQL 注入，就能在不需要密码的情况下，直接登录管理员的账号。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200726174642846.png",alt:""}})]),v._v(" "),s("p",[v._v("攻击的前提是：后端只用了简单的拼接 SQL 的方式去查询数据。")]),v._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 拼接出来的 sql 如下：")]),v._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("select")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("*")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("user")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("where")]),v._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[v._v("'admin'")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("or")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("and")]),v._v(" password "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[v._v("'xxx'")]),v._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 无论密码输入什么，这条 sql 语句都能查询到管理员的信息")]),v._v("\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br")])]),s("p",[v._v("除此之外，SQL 注入还有以下几种方式：")]),v._v(" "),s("ul",[s("li",[v._v("使用 SQL 探测，猜数据库表名，列名。\n"),s("ul",[s("li",[v._v("通过 MySQL 内置的 benchmark 探测数据库字段。")]),v._v(" "),s("li",[v._v("如：一段伪代码 "),s("code",[v._v("select database as current if current[0]==='a',benchmark（10000,'猜对了'）")]),v._v(" 如果表明猜对了，就延迟 10 s 并返回成功。")])])]),v._v(" "),s("li",[v._v("使用存储过程执行系统命令\n"),s("ul",[s("li",[v._v("通过内置的方法或存储过程执行 shell 脚本。")]),v._v(" "),s("li",[v._v("如：xp_cmdshell、sys_eval、sys_exec 等。")])])]),v._v(" "),s("li",[v._v("字符串截断\n"),s("ul",[s("li",[v._v("如：MySQL 在处理超长的字符串时，会显示警告，但会执行成功。")]),v._v(" "),s("li",[v._v("注册一个 admin + 50 个空格的用户，会触发截断，最终新增一个 admin 用户，这样就能拥有管理员权限了。")])])])]),v._v(" "),s("h5",{attrs:{id:"sql-注入防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入防御"}},[v._v("#")]),v._v(" SQL 注入防御")]),v._v(" "),s("p",[v._v("防止 SQL 注入的最好的办法就是，不要手动拼接 SQL 语句。")]),v._v(" "),s("ul",[s("li",[v._v("最佳方案，使用预编译语句绑定变量\n"),s("ul",[s("li",[v._v("通常是指框架提供的拼接 SQL 变量的方法。")]),v._v(" "),s("li",[v._v("这样的语义不会发生改变，变量始终被当成变量。")])])]),v._v(" "),s("li",[v._v("严格限制数据类型，如果注入了其他类型的数据，直接报错，不允许执行。")]),v._v(" "),s("li",[v._v("使用安全的存储过程和系统函数。")])]),v._v(" "),s("h5",{attrs:{id:"crlf-注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crlf-注入"}},[v._v("#")]),v._v(" CRLF 注入")]),v._v(" "),s("p",[v._v("在注入攻击中，换行符注入也是非常常见的一种攻击方式。")]),v._v(" "),s("ul",[s("li",[v._v("如果在 HTTP 请求头中注入 2 个换行符，会导致换行符后面的所有内容都被解析成请求实体部分。")]),v._v(" "),s("li",[v._v("攻击者通常在 Set-Cookie 时，注入换行符，控制请求传递的内容。")])]),v._v(" "),s("h4",{attrs:{id:"文件上传漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞"}},[v._v("#")]),v._v(" 文件上传漏洞")]),v._v(" "),s("p",[v._v("上传文件是网页开发中的一个常见功能，如果不加处理，很容易就会造成攻击。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595775753027&di=e2d6d0ae1470ade11e3471198502e87c&imgtype=0&src=http%3A%2F%2Fgz.web.tedu.cn%2Fupload%2F20151104%2F20151104095236_303.jpg",alt:""}})]),v._v(" "),s("p",[v._v("如图所示，攻击者上传了一个木马文件，并且通过返回的 URL 进行访问，就能控制服务器。")]),v._v(" "),s("p",[v._v("通常我们会控制上传文件的后缀名，但也不能完全解决问题，攻击者还可以通过以下方式进行攻击：")]),v._v(" "),s("ul",[s("li",[v._v("伪造正常文件\n"),s("ul",[s("li",[v._v("将木马文件伪装成正常的后缀名进行上传。")]),v._v(" "),s("li",[v._v("如果要避免这个问题，我们可以继续判断上传文件的文件头前 10 个字节。")])])]),v._v(" "),s("li",[v._v("Apache 解析方式是从后往前解析，直到找到一个认识的后缀名为止\n"),s("ul",[s("li",[v._v("如：上传一个 "),s("code",[v._v("abc.php.rar.rar.rar")]),v._v(" 能绕过后缀名检查，但在执行时，被当成一个 php 文件进行执行。")])])]),v._v(" "),s("li",[v._v("IIS 会截断分号进行解析\n"),s("ul",[s("li",[v._v("如："),s("code",[v._v("abc.asp;xx.png")]),v._v(" 能绕过后缀名检查，但在执行时，被当成一个 asp 文件进行执行。")])])]),v._v(" "),s("li",[v._v("HTTP PUT 方法允许将文件上传到指定位置\n"),s("ul",[s("li",[v._v("通过 HTTP MOVE 方法，还能修改上传的文件名。")]),v._v(" "),s("li",[v._v("通过二者配合，就能先上传一个正常的后缀名，然后改为一个恶意的后缀名。")])])]),v._v(" "),s("li",[v._v("PHP CGI 路径问题\n"),s("ul",[s("li",[v._v("执行 "),s("code",[v._v("http://abc.com/test.png/xxx.php")]),v._v(" 时，会把 test.png 当做 php 文件去解析。")]),v._v(" "),s("li",[v._v("如果用户正好是把一段恶意的 php 脚本当做一张图片进行上传，就会触发这个攻击。")])])])]),v._v(" "),s("h5",{attrs:{id:"文件上传漏洞防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞防御"}},[v._v("#")]),v._v(" 文件上传漏洞防御")]),v._v(" "),s("p",[v._v("防御文件上传漏洞，可以从以下几点考虑：")]),v._v(" "),s("ul",[s("li",[v._v("将文件上传的目录设置为不可执行。")]),v._v(" "),s("li",[v._v("判断文件类型\n"),s("ul",[s("li",[v._v("检查 MIME Type，配置白名单。")]),v._v(" "),s("li",[v._v("检查后缀名，配置白名单。")])])]),v._v(" "),s("li",[v._v("使用随机数改写文件名和文件路径\n"),s("ul",[s("li",[v._v("上传文件后，随机修改文件名，让攻击者无法执行攻击。")])])]),v._v(" "),s("li",[v._v("单独设置文件服务器的域名\n"),s("ul",[s("li",[v._v("单独做一个文件服务器，并使用单独的域名，利用同源策略，规避客户端攻击。")]),v._v(" "),s("li",[v._v("通常做法是将静态资源存放在 CDN 上。")])])])]),v._v(" "),s("h4",{attrs:{id:"登录认证攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录认证攻击"}},[v._v("#")]),v._v(" 登录认证攻击")]),v._v(" "),s("p",[v._v("登录认证攻击可以理解为一种破解登录的方法。攻击者通常采用以下几种方式进行破解：")]),v._v(" "),s("ul",[s("li",[v._v("彩虹表\n"),s("ul",[s("li",[v._v("攻击者通过搜集大量明文和 MD5 的对应关系，用于破解 MD5 密文找出原文。")]),v._v(" "),s("li",[v._v("对于彩虹表中的 MD5 密码，我们可以加盐，进行二次加密，避免被破解。")])])]),v._v(" "),s("li",[v._v("Session Fixation 攻击\n"),s("ul",[s("li",[v._v("利用应用系统在服务器的 SessionID 固定不变机制，借助他人用相同的 SessionID 获取认证和授权。")]),v._v(" "),s("li",[v._v("攻击者登录失败后，后端返回了 SessionID，攻击者将 SessionID 交给正常用户去登录，登录成功后，攻击者就能使用这个 SessionID 冒充正常用户登录了。")]),v._v(" "),s("li",[v._v("如果浏览器每一次登录都刷新 SessionID 可以避免这个问题。")])])]),v._v(" "),s("li",[v._v("Session 保持攻击\n"),s("ul",[s("li",[v._v("有些时候，后端出于用户体验考虑，只要这个用户还活着，就不会让这个用户的 Session 失效。")]),v._v(" "),s("li",[v._v("攻击者可以通过不停发起请求，可以让这个 Session 一直活下去。")])])])]),v._v(" "),s("h5",{attrs:{id:"登录认证防御方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录认证防御方式"}},[v._v("#")]),v._v(" 登录认证防御方式")]),v._v(" "),s("ul",[s("li",[v._v("多因素认证\n"),s("ul",[s("li",[v._v("密码作为第一道防御，但在密码验证成功后，我们还可以继续验证：动态口令，数字证书，短信验证码等，以保证用户安全。")]),v._v(" "),s("li",[v._v("由于短信和网页完全是 2 套独立的系统，攻击者很难获取到短信验证码，也就无法进行攻击。")])])])]),v._v(" "),s("p",[v._v("除此之外，前端登录认证还有多种方式，如果你对此感兴趣，可以参考我之前写的《前端登录，这一篇就够了》。")]),v._v(" "),s("h4",{attrs:{id:"应用层拒绝服务攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用层拒绝服务攻击"}},[v._v("#")]),v._v(" 应用层拒绝服务攻击")]),v._v(" "),s("p",[v._v("应用层拒绝服务攻击，又叫 DDOS 攻击，它指的是利用大量的请求造成资源过载，导致服务器不可用。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://www.cloudflare.com/img/learning/ddos/http-flood-ddos-attack/http-flood-attack.png",alt:""}})]),v._v(" "),s("p",[v._v("通常有以下几种 DDOS 攻击方式：")]),v._v(" "),s("ul",[s("li",[v._v("SYN Flood 洪水攻击\n"),s("ul",[s("li",[v._v("利用 HTTP 3 次握手机制，消耗服务器连接资源。")]),v._v(" "),s("li",[v._v("如：攻击者发起大量的 HTTP 请求，但并不完成 3 次握手，而是只握手 2 次，这时服务器端会继续等待直至超时。这时的服务器会一直忙于处理大量的垃圾请求，而无暇顾及正常请求。")])])]),v._v(" "),s("li",[v._v("Slowloris 攻击\n"),s("ul",[s("li",[v._v("以非常低的速度发送 HTTP 请求头，消耗服务器连接资源。")]),v._v(" "),s("li",[v._v("如：攻击者发送大量 HTTP 请求，但每个请求头都发的很慢，每隔 10s 发送一个字符，服务器为了等待数据，不得始终保持连接，这样一来，服务器连接数很快就被占光了。")])])]),v._v(" "),s("li",[v._v("HTTP POST DOS\n"),s("ul",[s("li",[v._v("发送 HTTP 时，指定一个非常大的 Content-Length 然后以很长的间隔发送，消耗服务器连接资源。")])])]),v._v(" "),s("li",[v._v("CC 攻击\n"),s("ul",[s("li",[v._v("针对一些非常消耗资源的页面，不断发起请求。")]),v._v(" "),s("li",[v._v("如：页面中的某些页面，需要后端做大量的运算，或者需要做非常耗时的数据库查询。在大量的请求下，服务器的 CPU、内存等资源可能就被占光了。")])])]),v._v(" "),s("li",[v._v("Server Limit DOS\n"),s("ul",[s("li",[v._v("通过 XSS 注入一段超长的 Cookie，导致超出 Web 服务器所能承受的 Request Header 长度，服务器端就会拒绝此服务。")])])]),v._v(" "),s("li",[v._v("ReDOS\n"),s("ul",[s("li",[v._v("针对一些缺陷的正则表达式，发起大量请求，耗光系统资源。")])])])]),v._v(" "),s("h5",{attrs:{id:"应用层拒绝服务攻击防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用层拒绝服务攻击防御"}},[v._v("#")]),v._v(" 应用层拒绝服务攻击防御")]),v._v(" "),s("p",[v._v("对于应用层拒绝服务攻击，目前也没有特别完美的解决方案，不过我们还是可以进行一些优化。")]),v._v(" "),s("ul",[s("li",[v._v("应用代码做好性能优化\n"),s("ul",[s("li",[v._v("合理使用 Redis、Memcache 等缓存方案，减少 CPU 资源使用率。")])])]),v._v(" "),s("li",[v._v("网络架构上做好优化\n"),s("ul",[s("li",[v._v("后端搭建负载均衡。")]),v._v(" "),s("li",[v._v("静态资源使用 CDN 进行管理。")])])]),v._v(" "),s("li",[v._v("限制请求频率\n"),s("ul",[s("li",[v._v("服务器计算所有 IP 地址的请求频率，筛选出异常的 IP 进行禁用。")]),v._v(" "),s("li",[v._v("可以使用 LRU 算法，缓存前 1000 条请求的 IP，如果有 IP 请求频率过高，就进行禁用。")])])])]),v._v(" "),s("p",[v._v("其实，处理 DDOS 核心思路就是禁用不可信任的用户，确保资源都是被正常的用户所使用。")]),v._v(" "),s("h4",{attrs:{id:"webserver-配置安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webserver-配置安全"}},[v._v("#")]),v._v(" WebServer 配置安全")]),v._v(" "),s("p",[v._v("我们在部署 web 应用的时候，经常会用到 Nginx、Apache、IIS、Tomcat、Jboss 等 Web 服务器，这些服务器本身也存在一些安全隐患，如果配置不当，很容易收到攻击。")]),v._v(" "),s("p",[v._v("在配置 Web 服务器时，可以参考以下几点：")]),v._v(" "),s("ul",[s("li",[v._v("以用户权限运行 Web 服务器\n"),s("ul",[s("li",[v._v("遵守最小权限原则，以最小权限身份运行 Web 服务器，限制被入侵后的权限。")])])]),v._v(" "),s("li",[v._v("删除可视化后台\n"),s("ul",[s("li",[v._v("运行 Tomcat、Jboss 等 Web 服务器时，默认会开启一个可视化的运营后台，运行在 8080 端口，并且第一次访问是没有认证的。")]),v._v(" "),s("li",[v._v("攻击者可以利用可视化后台，远程加载一段 war 包或者上传木马文件，进行控制。")])])]),v._v(" "),s("li",[v._v("及时更新版本\n"),s("ul",[s("li",[v._v("主流的 Web 服务器，每隔一段时间就会修复一些漏洞，所以记得及时更新版本。")])])])]),v._v(" "),s("h2",{attrs:{id:"总结与思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结与思考"}},[v._v("#")]),v._v(" 总结与思考")]),v._v(" "),s("p",[v._v("本文介绍了 Web 安全的基本概念，以及大量的攻防技巧，其实这只是 Web 安全中的冰山一角，如果你对此感兴趣，不妨在安全领域继续深耕学习，一定能看到更广阔一片天。")]),v._v(" "),s("p",[v._v("对于一个开发者来说，我们应该在写代码时就将安全考虑其中，形成自己的一套安全开发体系，做到心中有安全，时时考虑安全，就能无形之中化解不法分子的攻击。")]),v._v(" "),s("p",[v._v("最后，如果你对此有任何想法，欢迎留言评论！")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.yinhengli.com/shequ-fenxiang.png",alt:""}})])])}),[],!1,null,null,null);_.default=t.exports}}]);