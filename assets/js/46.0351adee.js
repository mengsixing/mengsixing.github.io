(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{415:function(_,v,i){"use strict";i.r(v);var l=i(27),t=Object(l.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"微前端自检清单"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#微前端自检清单"}},[_._v("#")]),_._v(" 微前端自检清单")]),_._v(" "),i("p",[_._v("最近在做公司微前端，整理了一份微前端搭建清单，如果你正在考虑是否要做微前端，不妨做个参考。")]),_._v(" "),i("ul",[i("li",[_._v("需求分析")]),_._v(" "),i("li",[_._v("技术方案分析")]),_._v(" "),i("li",[_._v("拆分方案分析")]),_._v(" "),i("li",[_._v("部署流程分析")])]),_._v(" "),i("h2",{attrs:{id:"需求分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[_._v("#")]),_._v(" 需求分析")]),_._v(" "),i("p",[_._v("第一步，我们需要进行需求分析，以便真正清楚我们需要解决的问题是什么。")]),_._v(" "),i("p",[_._v("例如：")]),_._v(" "),i("ul",[i("li",[_._v("产品要新增一个业务模块")]),_._v(" "),i("li",[_._v("产品要修改项目样式")]),_._v(" "),i("li",[_._v("产品反馈项目启动太慢了")]),_._v(" "),i("li",[_._v("产品反馈页面跳转刷新很不友好")])]),_._v(" "),i("p",[_._v("前两个需求是典型的业务需求，它的核心在于解决公司的业务问题，对于这一类需求，通常技术难度都不大，开发者只需要按照原型图，编写出对应的页面就可以了。")]),_._v(" "),i("p",[_._v("后两个需求是典型的技术需求，它的核心在于解决技术问题。通常来说，技术需求和用户体验有关，但不会影响项目功能，所以一般产品很少会提技术需求，都是由开发同学主导。")]),_._v(" "),i("p",[_._v("目前很多公司都不太重视技术需求，主要是因为和公司业务无关，不能带来真实可见的收益。其实不然，一些技术需求往往能产生巨大的成本收益，所以我们在做技术需求时，"),i("strong",[_._v("首先需要得到公司的支持")]),_._v("。")]),_._v(" "),i("h3",{attrs:{id:"为什么选择微前端"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择微前端"}},[_._v("#")]),_._v(" 为什么选择微前端")]),_._v(" "),i("p",[_._v("解决一个技术需求，有很多种方法，为什么选微前端？")]),_._v(" "),i("p",[_._v("我们看过微前端的发展史就会明白，它并不是凭空出现的，而是项目在不断发展过程中形成的，解决项目臃肿的技术方案。")]),_._v(" "),i("p",[_._v("一个项目在刚成立时，体量很小，但随着项目不断做大，可能会出现以下问题：")]),_._v(" "),i("ul",[i("li",[_._v("工程膨胀")]),_._v(" "),i("li",[_._v("分支混乱")]),_._v(" "),i("li",[_._v("代码冲突")]),_._v(" "),i("li",[_._v("打包麻烦")]),_._v(" "),i("li",[_._v("维护困难")])]),_._v(" "),i("p",[_._v("对于这些问题，很难找到一个完美的解决方案，于是就诞生了微前端。")]),_._v(" "),i("p",[_._v("有了微前端之后，我们能将一个大项目拆分成多个小项目，这样一来，每一个小项目就非常好优化了。在优化了所有的小项目后，我们再将这些小项目组合起来，就能形成一个完美的大项目了。")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/weiqianduan_demo.png",alt:""}})]),_._v(" "),i("p",[_._v("在实际项目中，如果遇到以下问题，可以考虑使用微前端：")]),_._v(" "),i("ul",[i("li",[i("p",[_._v("项目太大，成为了典型的巨石应用，打包很慢。")])]),_._v(" "),i("li",[i("p",[_._v("项目开发者太多，多个同学开发同一套代码，经常出现代码冲突、或修改公共组件引发的 Bug。")])]),_._v(" "),i("li",[i("p",[_._v("项目太老，存在遗留模块，为了兼容它，限制了整个项目的发展。")])]),_._v(" "),i("li",[i("p",[_._v("项目技术栈不统一，使用了多种不同框架，每一种框架又有多个版本共存的情况。")])]),_._v(" "),i("li",[i("p",[_._v("项目由多个团队协同开发，一个功能需要等其他团队开发好之后，才能接着开发。")])]),_._v(" "),i("li",[i("p",[_._v("项目每次发布都是全量发布，即使是上线一个小模块，也可能导致整个项目挂掉。")])]),_._v(" "),i("li",[i("p",[_._v("项目由多个系统组成，完成一个功能需要不断地跳转多个系统页。")])]),_._v(" "),i("li",[i("p",[_._v("项目开发人员流动大，存在一些祖传代码难以维护，一般人都不好改。")])]),_._v(" "),i("li",[i("p",[_._v("项目需要一些试验田方案，即需要在某些模块做一些新技术尝试、框架升级等。")])]),_._v(" "),i("li",[i("p",[_._v("...")])])]),_._v(" "),i("p",[_._v("除此之外，还有很多实际情况没有列举完毕，不过没关系，只要我们明白了微前端的特点，就能判断任何情况。")]),_._v(" "),i("h3",{attrs:{id:"微前端特点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#微前端特点"}},[_._v("#")]),_._v(" 微前端特点")]),_._v(" "),i("p",[_._v("微前端的核心是解决巨石应用，它都有这些特点：")]),_._v(" "),i("ul",[i("li",[i("p",[_._v("简单、松耦合的代码库")]),_._v(" "),i("ul",[i("li",[_._v("微前端架构倾向于编写和维护更小、更简单、更容易开发的项目。")]),_._v(" "),i("li",[_._v("技术栈无关，各项目可以使用不同的技术栈。")])])]),_._v(" "),i("li",[i("p",[_._v("增量升级")]),_._v(" "),i("ul",[i("li",[_._v("支持渐进式重构，先让新旧代码和谐共存，再逐步转化旧代码，直到整个重构完成。")])])]),_._v(" "),i("li",[i("p",[_._v("独立部署")]),_._v(" "),i("ul",[i("li",[_._v("每一个子应用都具备独立开发，持续部署，独立运行的能力。")])])]),_._v(" "),i("li",[i("p",[_._v("团队自治")]),_._v(" "),i("ul",[i("li",[_._v("各子项目之间不存在依赖关系，保持隔离。")]),_._v(" "),i("li",[_._v("单一职责，每个子项目只做和自己相关的业务工作。")])])])]),_._v(" "),i("blockquote",[i("p",[_._v("除此之外，微前端提供了一套新的生态系统。它通过拆分小项目，产生了大量的微应用。试想一下，如果大家都将微应用上传到云，那么就会构建一个非常强大的微应用云生态。我们在以后做需求时，也许就是选择各种适合的微应用，然后拼接起来，就完事了。")]),_._v(" "),i("p",[_._v("对此保持期待。")])]),_._v(" "),i("h3",{attrs:{id:"微前端的缺点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#微前端的缺点"}},[_._v("#")]),_._v(" 微前端的缺点")]),_._v(" "),i("p",[_._v("当然，微前端也不是万能的，它也存在以下问题：")]),_._v(" "),i("ul",[i("li",[_._v("拆分的粒度越小，便意味着架构变得复杂、维护成本变高。")]),_._v(" "),i("li",[_._v("技术栈一旦多样化，便意味着技术栈混乱。")]),_._v(" "),i("li",[_._v("管理版本复杂、依赖复杂。")]),_._v(" "),i("li",[_._v("开发体验不太友好，开发时可能需要同时启动多个项目。")])]),_._v(" "),i("p",[_._v("这些问题大多是因为项目拆分成多个项目之后，引发的沟通协作问题。")]),_._v(" "),i("h2",{attrs:{id:"技术方案调研"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#技术方案调研"}},[_._v("#")]),_._v(" 技术方案调研")]),_._v(" "),i("p",[_._v("第二步，我们需要确定具体的微前端实现方式。")]),_._v(" "),i("p",[_._v("实现微前端有很多种方式：")]),_._v(" "),i("ul",[i("li",[_._v("路由分发式\n"),i("ul",[i("li",[_._v("通过 http 服务器的反向代理功能，来将请求路由到对应的应用上。")]),_._v(" "),i("li",[_._v("这种方式只是在路由层面看起来是一个项目，但实际上只是通过 a 标签连接了多个项目。")])])]),_._v(" "),i("li",[_._v("前端容器化\n"),i("ul",[i("li",[_._v("使用 iframe 作为容器。")]),_._v(" "),i("li",[_._v("seo 不友好。")]),_._v(" "),i("li",[_._v("需要考虑同源策略 cookie 管理。")]),_._v(" "),i("li",[_._v("需要自建一套应用管理、应用通信机制。")]),_._v(" "),i("li",[_._v("弹窗不友好。")]),_._v(" "),i("li",[_._v("浏览器后退按钮不友好。")])])]),_._v(" "),i("li",[_._v("前端微服务化\n"),i("ul",[i("li",[_._v("在不同的框架之上设计通讯、加载机制，以在一个页面内加载对应的应用。")]),_._v(" "),i("li",[_._v("常用的框架：qiankun，single-spa 都是这样做的。")]),_._v(" "),i("li",[_._v("最常用的方案，适合于快速上手。")])])]),_._v(" "),i("li",[_._v("微件化\n"),i("ul",[i("li",[_._v("打包出可以直接嵌入在页面上运行的代码，可能是一段 js，使用时直接引入即可。")]),_._v(" "),i("li",[_._v("需要实现一套微件管理机制，成本太高。")])])]),_._v(" "),i("li",[_._v("微应用化\n"),i("ul",[i("li",[_._v("通过软件工程的方式，在部署构建环境中通过 webpack 打包，组合多个独立应用成一个单体应用。")]),_._v(" "),i("li",[_._v("需要将多个项目打包成一个，所以技术栈需要保持统一。")])])]),_._v(" "),i("li",[_._v("应用组件化\n"),i("ul",[i("li",[_._v("将子项目都打包成 webComponent，在主项目中组合。")]),_._v(" "),i("li",[_._v("需要考虑 webComponent 兼容性。")])])])]),_._v(" "),i("p",[_._v("下图是各种方案的优缺点：")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200716174954391.png",alt:""}})]),_._v(" "),i("p",[_._v("这么多方案，各有利弊，我们应该如何选择呢？")]),_._v(" "),i("ul",[i("li",[i("p",[_._v("如果只是想简单快速的做分离，不考虑 seo，可以用 iframe。")])]),_._v(" "),i("li",[i("p",[_._v("如果想做分离的同时，保持良好的单页体验，可以考虑 single-spa、qiankun 框架。")])]),_._v(" "),i("li",[i("p",[_._v("如果公司有很强的技术能力，再考虑自研或其他方案。")])])]),_._v(" "),i("p",[_._v("有了技术方案之后，微前端这条路就可以走通了，除此之外，还需考虑过渡方案。")]),_._v(" "),i("h3",{attrs:{id:"过渡方案"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡方案"}},[_._v("#")]),_._v(" 过渡方案")]),_._v(" "),i("p",[_._v("过渡方案指的是如何让微前端平滑上线。试想一下，如果在微前端改造时，项目来了新需求，这时应该怎么办？")]),_._v(" "),i("p",[_._v("对于这个问题，建议在做微前端改造时，最好快速上线：")]),_._v(" "),i("ol",[i("li",[_._v("首先将整个原项目当成一个大的子项目，进行微前端改造。")]),_._v(" "),i("li",[_._v("主项目快速搭建好路由、子应用管理，然后立即上线。\n"),i("ol",[i("li",[_._v("路由管理在处理子项目时，如果是原页面，先通过 a 标签跳转，如果是新页面，则使用前端 router 控制跳转。")]),_._v(" "),i("li",[_._v("后续逐渐拆分子项目，如果有新的子项目拆分完毕，只需要将 a 标签跳转改为前端 router 控制即可。")])])]),_._v(" "),i("li",[_._v("做完前两步之后，我们的架构就已经变成了微前端架构。")])]),_._v(" "),i("h2",{attrs:{id:"拆分方案调研"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#拆分方案调研"}},[_._v("#")]),_._v(" 拆分方案调研")]),_._v(" "),i("p",[_._v("第三步，我们需要想想，我们要怎么拆分我们的项目呢？")]),_._v(" "),i("p",[_._v("常见的拆分方案如下：")]),_._v(" "),i("ul",[i("li",[_._v("按照业务拆分\n"),i("ul",[i("li",[_._v("如：一个电商后台，包括商品管理、商家管理、物流管理等。")]),_._v(" "),i("li",[_._v("独立出每个业务项目，可以让整个项目结构清晰。")])])]),_._v(" "),i("li",[_._v("按照权限拆分\n"),i("ul",[i("li",[_._v("如：一个运营后台，管理员和普通运营看到的页面是不一样的。")]),_._v(" "),i("li",[_._v("独立出不同的权限项目，可以突出每个项目的使用范围。")])])]),_._v(" "),i("li",[_._v("按照变更的频率拆分\n"),i("ul",[i("li",[_._v("如：一个项目中，包含很少改动的祖传项目和经常改动的业务项目。")]),_._v(" "),i("li",[_._v("独立出变更频繁的项目，可以避免频繁更新可能导致整体项目挂掉的风险。")]),_._v(" "),i("li",[_._v("独立出很少改动的项目，可以让我们在核心业务上大展拳脚。")])])]),_._v(" "),i("li",[_._v("按照组织结构拆分\n"),i("ul",[i("li",[_._v("如：一个功能复杂的项目后台，由多个团队共同开发而成。")]),_._v(" "),i("li",[_._v("独立出不同团队的项目，可以避免开发冲突，部署冲突等问题。")])])]),_._v(" "),i("li",[_._v("跟随后端微服务拆分\n"),i("ul",[i("li",[_._v("如：后端已经做了不同模块的微服务划分，前端可以直接按照后端来就行了。")]),_._v(" "),i("li",[_._v("这种方式有利于前后端保持统一。")])])])]),_._v(" "),i("p",[_._v("到了这里，我们已经完成了微前端的拆分，但并不是拆完了就结束了，我们还考虑一些拆分后的问题。")]),_._v(" "),i("p",[_._v("例如：")]),_._v(" "),i("ul",[i("li",[_._v("主项目和子项目的样式是否需要复用？")]),_._v(" "),i("li",[_._v("项目权限，是分开还是在统一管理？")]),_._v(" "),i("li",[_._v("应用之间如何进行通信？")])]),_._v(" "),i("p",[_._v("这些问题往往和业务相关，我们在改造时自行判断即可。")]),_._v(" "),i("h2",{attrs:{id:"部署流程检查"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#部署流程检查"}},[_._v("#")]),_._v(" 部署流程检查")]),_._v(" "),i("p",[_._v("最后一步，我们需要考虑部署流程。")]),_._v(" "),i("p",[_._v("当微前端开发完成之后，我们的项目由 1 个变成了 1 + n(子项目) 个，部署方式势必会发生变化。")]),_._v(" "),i("p",[_._v("传统的部署方式如下：")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200718113048802.png",alt:""}})]),_._v(" "),i("p",[_._v("微前端项目部署方式如下：")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200715172059236.png",alt:""}})]),_._v(" "),i("p",[_._v("可以看到，项目最终的结构已经完全不同了，开发，测试，部署的流程也都需要进行变化。")]),_._v(" "),i("ul",[i("li",[_._v("开发环境的部署")]),_._v(" "),i("li",[_._v("测试环境的部署")]),_._v(" "),i("li",[_._v("线上环境的部署")])]),_._v(" "),i("h3",{attrs:{id:"开发环境的部署"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开发环境的部署"}},[_._v("#")]),_._v(" 开发环境的部署")]),_._v(" "),i("p",[_._v("开发环境其实不需要部署，通常是前端启动一个 localhost 页面，去调后端的接口进行开发。")]),_._v(" "),i("p",[_._v("需要注意的是：")]),_._v(" "),i("ul",[i("li",[_._v("子项目需支持独立启动，而不是在开发时启动所有项目，只需启动与业务相关的子项目即可。")]),_._v(" "),i("li",[_._v("子项目需支持独立部署，开发完成之后，只需要部署与业务相关的子项目即可。")])]),_._v(" "),i("h3",{attrs:{id:"测试环境的部署"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#测试环境的部署"}},[_._v("#")]),_._v(" 测试环境的部署")]),_._v(" "),i("p",[_._v("测试环境部署变化挺大的，而且涉及到了跨部门沟通，所以应该谨慎对待。")]),_._v(" "),i("p",[_._v("以前测试部署流程是：前端只需要提供一个打包文件，测试将文件解压后，放入指定的静态资源目录即可。")]),_._v(" "),i("p",[_._v("微前端之后的部署流程：前端需要提供主项目和相关子项目的打包文件，测试需要分别发布多个项目，才能进行测试。")]),_._v(" "),i("p",[_._v("这样改动之后，测试的工作量变大了，对于手动部署的测试来说，确实有很大的影响。为了减少测试的工作量，我们可以协助测试来搭建一套自动化部署工具。")]),_._v(" "),i("p",[_._v("很多大厂都有自己内部的云服务平台，就像阿里云的 k8s 控制台一样，测试可以在控制台上选择需要部署的前端、后端的分支，然后点击一键部署，就搞定了。")]),_._v(" "),i("h3",{attrs:{id:"上线环境部署"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#上线环境部署"}},[_._v("#")]),_._v(" 上线环境部署")]),_._v(" "),i("p",[_._v("对于线上环境来说，运行的是 1 个主项目和 n 个子项目，每个项目都是独立部署且相互独立的，非常适合容器化部署，即：每一个项目都被部署到一个 docker 中，彼此通过主项目进行关联。")]),_._v(" "),i("p",[_._v("如图，所有的子项目都交由主项目管理。")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200718110609087.png",alt:""}})]),_._v(" "),i("p",[_._v("如果公司内部做了持续部署，部署就会更加简单。")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200715175358240.png",alt:""}})]),_._v(" "),i("h2",{attrs:{id:"思考与总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#思考与总结"}},[_._v("#")]),_._v(" 思考与总结")]),_._v(" "),i("p",[_._v("本文从需求分析开始，一步一步理清了微前端需要注意的各种问题，以及一些解决方案，希望能对微前端感兴趣的你有所收获。")]),_._v(" "),i("p",[_._v("其实，微前端没有想象中的那么难，如果是用 qiankun、single-spa 等现成框架，学习成本都非常低，关键是要真正动手去做，只要开了头，后面的问题也就不是什么问题了。")]),_._v(" "),i("p",[_._v("最后，如果你对此有任何想法，欢迎留言评论！")]),_._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.yinhengli.com/qianduanrizhi_guanzhu.png",alt:""}})])])}),[],!1,null,null,null);v.default=t.exports}}]);