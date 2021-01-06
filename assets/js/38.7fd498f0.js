(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{388:function(s,t,e){"use strict";e.r(t);var a=e(27),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"实战-手搭一个-react-typescript-koa-graphql-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战-手搭一个-react-typescript-koa-graphql-环境"}},[s._v("#")]),s._v(" 实战：手搭一个 React，Typescript，Koa，GraphQL 环境")]),s._v(" "),e("blockquote",[e("p",[s._v("本文系原创，转载请附带作者信息：mengsixing")]),s._v(" "),e("p",[s._v("项目地址："),e("a",{attrs:{href:"https://github.com/mengsixing/cdfang-spider",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/mengsixing/cdfang-spider"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("在实际的开发过程中，从零开始初始化一个项目往往很麻烦，所以各种各样的脚手架工具应运而生。crea-react-app，vue-cli，@angular/cli 等脚手架工具，只需要执行一个命令，项目结构以及开发环境就搭建好了。")]),s._v(" "),e("p",[s._v("脚手架工具确实方便了我们使用，开发者可以专注于业务，而不需要考虑太多的环境搭建。但作者认为，学习脚手架工具背后的搭建过程也是很重要的，以防脚手架挂了之后，我们还能正常搭建项目。基于这个目的，作者从零搭建了"),e("a",{attrs:{href:"https://github.com/mengsixing/cdfang-spider",target:"_blank",rel:"noopener noreferrer"}},[s._v("cdfang-spider"),e("OutboundLink")],1),s._v("项目。")]),s._v(" "),e("p",[s._v("现在让我们就以这个项目为例，从零开始搭建项目吧。")]),s._v(" "),e("h2",{attrs:{id:"项目选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目选型"}},[s._v("#")]),s._v(" 项目选型")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("三大框架里选哪个？")]),s._v(" "),e("ul",[e("li",[s._v("react 个人爱好。")]),s._v(" "),e("li",[s._v("react-router 定义路由。")]),s._v(" "),e("li",[s._v("react context 状态管理。")]),s._v(" "),e("li",[s._v("react hooks 组件化。")])])]),s._v(" "),e("li",[e("p",[s._v("引入强类型语言？")]),s._v(" "),e("ul",[e("li",[s._v("typescript。为 js 提供类型支持，编辑器友好，增加代码可维护性，使用起来心里踏实。")]),s._v(" "),e("li",[s._v("在使用第三方库时，可以写出更加符合规范的代码，避免 api 乱用等。")]),s._v(" "),e("li",[s._v("项目中依赖了大量 @types/xxx 包，无形中增加了项目体积。")]),s._v(" "),e("li",[s._v("编辑器对 ts 文件进行类型检查，需要遍历 node_modules 目录下所有的 @types 文件，会造成编辑器卡顿现象。")]),s._v(" "),e("li",[s._v("目前仍然存在很多库没有 @types 支持，使用起来并不方便。")])])]),s._v(" "),e("li",[e("p",[s._v("css 选型？")]),s._v(" "),e("ul",[e("li",[s._v("预编译器 less。项目中使用了变量定义，选择器嵌套，选择器复用等，less 够用了。")]),s._v(" "),e("li",[s._v("解决命名冲突可以使用 css modules，暂未考虑 css in js。")]),s._v(" "),e("li",[s._v("使用 bem 命名规范。")]),s._v(" "),e("li",[s._v("使用 postcss 插件 autoprefixer，增加 css 兼容性。")])])]),s._v(" "),e("li",[e("p",[s._v("构建工具选哪个？")]),s._v(" "),e("ul",[e("li",[s._v("webpack。内置 tree shaking，scope hosting 等，打包效率高，社区活跃。")]),s._v(" "),e("li",[s._v("webpack-merge 合并不同环境配置文件。")]),s._v(" "),e("li",[s._v("配置 externals。引入 cdn 代替 node_modules 中体积较大的包。")]),s._v(" "),e("li",[s._v("gulp。用来打包 node 端代码。")])])]),s._v(" "),e("li",[e("p",[s._v("代码规范检查？")]),s._v(" "),e("ul",[e("li",[s._v("eslint。辅助编码规范执行，有效控制代码质量。同时也支持校验 typescript 语法。")]),s._v(" "),e("li",[s._v("配置 eslint-config-airbnb 规则。")]),s._v(" "),e("li",[s._v("配置 eslint-config-prettier 关闭和 prettier 冲突的规则。")])])]),s._v(" "),e("li",[e("p",[s._v("测试框架选型？")]),s._v(" "),e("ul",[e("li",[s._v("jest。大而全，包含：测试框架，断言库，mock 数据，覆盖率等。")]),s._v(" "),e("li",[s._v("enzyme。测试 react 组件。")])])]),s._v(" "),e("li",[e("p",[s._v("后端框架选型？")]),s._v(" "),e("ul",[e("li",[s._v("koa。精简好用，中间件机制强大。")]),s._v(" "),e("li",[s._v("apollo-server。帮助搭建 graphQL 后端环境。")])])]),s._v(" "),e("li",[e("p",[s._v("数据库选型？")]),s._v(" "),e("ul",[e("li",[s._v("mongodb。类 json 的存错格式，方便存储，前端友好。")]),s._v(" "),e("li",[s._v("配置 mongoose，方便给 mongodb 数据库建模。")])])]),s._v(" "),e("li",[e("p",[s._v("接口方式选型？")]),s._v(" "),e("ul",[e("li",[s._v("graphql。可以根据需要格式获取对应数据，减少接口冗余数据。")]),s._v(" "),e("li",[s._v("graphql schema 定义了后端接口的参数，操作和返回类型，从此不需要提供接口文档。")]),s._v(" "),e("li",[s._v("前端可以在 schema 定义后开始开发，数据格式自己掌握。")]),s._v(" "),e("li",[s._v("schema 可拼接。可以组合和连接多个 graphql api，进行级联查询等。")]),s._v(" "),e("li",[s._v("社区友好，有很多优秀的库可以直接使用： apollo，relay 等。")])])])]),s._v(" "),e("p",[s._v("基本框架选型完毕，接下来就开始搭建项目环境。")]),s._v(" "),e("h2",{attrs:{id:"搭建-typescript-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-typescript-环境"}},[s._v("#")]),s._v(" 搭建 TypeScript 环境")]),s._v(" "),e("p",[s._v("TypeScript 是 JavaScript 的超集，意味着可以完全兼容 JavaScript 文件，但 TypeScript 文件却并不能直接在浏览器中运行，需要经过编译生成 JavaScript 文件后才能运行。")]),s._v(" "),e("p",[s._v("1、 新建 tsconfig.json 文件。")]),s._v(" "),e("ul",[e("li",[s._v("tsc -init 生成初始化 tsconfig.json 文件。")]),s._v(" "),e("li",[s._v("vscode 会根据 tsconfig.json 文件，进行动态类型检查，语法错误提示等。")]),s._v(" "),e("li",[s._v("tsc 命令会根据 tsconfig.json 文件配置的规则，将 ts 代码转换为 js 代码。")]),s._v(" "),e("li",[s._v("tslint 会读取 tsconfig.json 文件中的规则，辅助编码规范校验。\n"),e("ul",[e("li",[s._v("tslint 官宣会被废弃，后将被 eslint 代替。")]),s._v(" "),e("li",[s._v("eslint 同样会用到 tsconfig.json 文件中的内容。")])])])]),s._v(" "),e("p",[s._v("2、 配置 eslint。")]),s._v(" "),e("p",[s._v("根据 "),e("a",{attrs:{href:"https://github.com/typescript-eslint/typescript-eslint",target:"_blank",rel:"noopener noreferrer"}},[s._v("typescript-eslint"),e("OutboundLink")],1),s._v(" 引导，配置 eslint 对 typescript 的支持。")]),s._v(" "),e("ul",[e("li",[s._v("@typescript-eslint/parser 解析 ts 语法。")]),s._v(" "),e("li",[s._v("@typescript-eslint/eslint-plugin 为 ts 文件应用 eslint 和 tslint 规则。")])]),s._v(" "),e("p",[s._v("3、 选择一个 typescript 编译器，tsc 还是 babel？")]),s._v(" "),e("p",[s._v("使用 babel。好处如下：")]),s._v(" "),e("ul",[e("li",[s._v("babel 社区有许多非常好的插件，babel-preset-env 可以支持到具体兼容浏览器的版本号，而 tsc 编译器没这个功能。")]),s._v(" "),e("li",[s._v("babel 可以同时支持编译 js 和 ts，所以没必要在引入 tsc 编译 ts 文件，只管理一个编译器，可维护性更高。")]),s._v(" "),e("li",[s._v("babel 编译速度更快。tsc 编译器需要遍历所有类型定义文件（*.d.ts），包括 node_modules 里的，以确保代码中正确地使用，type 太多会造成卡顿。")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("babel 流程分析")])]),s._v(" "),e("p",[s._v("babel 是一个 js 语法编译器，在编译时分为 3 个阶段：解析、转换、输出。")]),s._v(" "),e("ul",[e("li",[s._v("解析阶段：将 js 代码解析为抽象语法树（ast）。")]),s._v(" "),e("li",[s._v("转换阶段：对 ast 进行修改，产生一个转换后的 ast。")]),s._v(" "),e("li",[s._v("输出阶段：将转换后的 ast 输出成 js 文件。")])]),s._v(" "),e("p",[e("strong",[s._v("plugin 和 preset")])]),s._v(" "),e("ul",[e("li",[s._v("plugin: 解析，转换，并输出转换后的 js 文件。例如：@babel/plugin-proposal-object-rest-spread 会输出支持"),e("code",[s._v("{...}")]),s._v("解构语法的 js 文件。")]),s._v(" "),e("li",[s._v("preset: 是一组组合好的 plugin 集合。例如：@babel/preset-env 让代码支持最新的 es 语法，自动引入需要支持新特性的 plugin。")])])]),s._v(" "),e("p",[s._v("4、搜集所有的 ts，tsx 页面（前端环境使用 webpack，node 项目使用 gulp），然后通过 babel 编译成 js 文件。")]),s._v(" "),e("h2",{attrs:{id:"搭建-react-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-react-环境"}},[s._v("#")]),s._v(" 搭建 React 环境")]),s._v(" "),e("p",[s._v("React 是一个库，基于组件式开发，开发时常常需要用到以下语法：")]),s._v(" "),e("ul",[e("li",[s._v("es6 模块化。")]),s._v(" "),e("li",[s._v("jsx 语法。")]),s._v(" "),e("li",[s._v("typescript 语法。")]),s._v(" "),e("li",[s._v("css 预处理器。")])]),s._v(" "),e("p",[s._v("这些语法在目前浏览器中并不能直接执行，需要进行打包编译，这也是搭建 React 环境的主要工作。")]),s._v(" "),e("h3",{attrs:{id:"具体步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[s._v("#")]),s._v(" 具体步骤")]),s._v(" "),e("p",[s._v("1、新建一个 html 文件，并在 body 中创建一个根节点，用于挂载 react 最后生成的 dom。")]),s._v(" "),e("p",[s._v("2、新建一个 index.tsx 文件，用于将项目中的所有组件，引入进来，并调用 render 方法，将组件渲染到根节点中。")]),s._v(" "),e("p",[s._v("3、React 项目分层。")]),s._v(" "),e("ul",[e("li",[s._v("containers 目录，存放单独的页面")]),s._v(" "),e("li",[s._v("components 目录，存放的是组件，一个组件包含 jsx 和 css 两个部分。")]),s._v(" "),e("li",[s._v("context 目录，存放公用的 react context。")]),s._v(" "),e("li",[s._v("config 目录，存放公共配置文件。")]),s._v(" "),e("li",[s._v("utils 目录，公用的函数组件库。")]),s._v(" "),e("li",[s._v("constants 目录，存放静态变量。")])]),s._v(" "),e("p",[s._v("4、配置 webpack，以 index.tsx 为入口文件，进行打包编译。")]),s._v(" "),e("ul",[e("li",[s._v("由于不同环境的打包方式并不相同，这里抽象出开发环境、上线环境、优化环境的配置文件，使用 webpack-merge 合并配置文件。")]),s._v(" "),e("li",[s._v("配置 css 预处理器，使用 less-loader。")]),s._v(" "),e("li",[s._v("配置 ts 编译器，使用 babel-loader。\n"),e("ul",[e("li",[s._v("@babel/preset-env：编译最新的 es 语法。")]),s._v(" "),e("li",[s._v("@babel/preset-react：编译 react 语法。")]),s._v(" "),e("li",[s._v("@babel/preset-typescript：转换 typescript 语法。")])])]),s._v(" "),e("li",[s._v("配置 url-loader，打包项目中的图片资源。")]),s._v(" "),e("li",[s._v("配置 html-webpack-plugin 将最后生成的 js，css，注入第 1 步的 html 中。\n"),e("ul",[e("li",[s._v("使用 ejs 模板配置开发环境和线上环境引入的 cdn。")])])]),s._v(" "),e("li",[s._v("开发环境配置，使用开箱即用的 webpack-dev-server。\n"),e("ul",[e("li",[s._v("webpack-dev-server 可以自动监听文件修改，自动刷新页面，以及默认 source-map 等功能。")]),s._v(" "),e("li",[s._v("配置热模块替换，react-hot-loader。")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("webpack 打包原理")]),s._v(" "),e("p",[s._v("webpack 打包过程就像是一条流水线，从入口文件开始，搜集项目中所有文件的依赖关系，如果遇到不能够识别的模块，就使用对应的 loader 转换成能够识别的模块。webpack 还能使用 plugin 在流水线生命周期中挂载自定义事件，来控制 webpack 输出结果。")])]),s._v(" "),e("p",[s._v("5、编写 npm script，一键开启开发模式。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cross-env 用来跨环境设置环境变量")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev:client"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=development webpack-dev-server --open"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("6、现在运行 "),e("code",[s._v("npm run dev:client")]),s._v(" 就可以愉快地编写客户端代码了。")]),s._v(" "),e("h2",{attrs:{id:"搭建-nodejs-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-nodejs-环境"}},[s._v("#")]),s._v(" 搭建 NodeJs 环境")]),s._v(" "),e("p",[s._v("由于 node 端使用了 typescript 和最新的 es 语法，所以需要进行打包编译。")]),s._v(" "),e("ul",[e("li",[s._v("配置 gulp，遍历每一个 ts 文件，调用 gulp-babel，将 ts 代码转换成 js 代码。")]),s._v(" "),e("li",[s._v("配置 supervisor 自动重启 node 服务（nodemon 对于不存在的目录不能进行监控）。")]),s._v(" "),e("li",[s._v("编写 npm script 一键启动 node 端开发环境。")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev:server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=development gulp & cross-env NODE_ENV=development supervisor -i ./dist/client/ -w ./dist/ ./dist/app.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("配置好 gulp 后，就可以运行 "),e("code",[s._v("npm run dev:server")]),s._v(" 一键启动服务器端开发环境。")]),s._v(" "),e("h3",{attrs:{id:"层次结构划分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层次结构划分"}},[s._v("#")]),s._v(" 层次结构划分")]),s._v(" "),e("p",[s._v("项目采用传统的 mvc 模式进行层次划分。")]),s._v(" "),e("h4",{attrs:{id:"model-层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-层"}},[s._v("#")]),s._v(" Model 层")]),s._v(" "),e("p",[s._v("Model 层的主要工作：连接数据库，封装数据库操作，例如：新增数据、删除数据、查询数据、更新数据等。")]),s._v(" "),e("ul",[e("li",[s._v("新建 model 文件夹，目录下的每一个文件对应数据库的一个表。")]),s._v(" "),e("li",[s._v("model 文件中包含对一个数据表的增删改查操作。\n"),e("ul",[e("li",[s._v("使用 mongoose 更方便地对 mongodb 数据库进行读写操作。")])])]),s._v(" "),e("li",[s._v("model 文件返回封装好的对象，提供给 controller 层使用。")])]),s._v(" "),e("h4",{attrs:{id:"controller-层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#controller-层"}},[s._v("#")]),s._v(" Controller 层")]),s._v(" "),e("p",[s._v("Controller 层的主要工作：接收和发送 http 请求。根据前端请求，调用 model 层获取数据，再返回给前端。")]),s._v(" "),e("blockquote",[e("p",[s._v("传统的后端一般还包含 service 层，专门用来处理业务逻辑。")])]),s._v(" "),e("ul",[e("li",[s._v("根据前端请求，找到对应的 model 层获取数据，经过加工处理后，返回给前端。")]),s._v(" "),e("li",[s._v("编写中间件，记录系统日志，错误处理，404 页面等。")]),s._v(" "),e("li",[s._v("支持前端 react-router 中的 BrowserRouter。根据前端路由，后端配置对应的路由，匹配结果为 index.html 文件。")]),s._v(" "),e("li",[s._v("项目中使用的 graphql 比较基础，也直接放在了 controller 层进行处理。")])]),s._v(" "),e("h4",{attrs:{id:"view-层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-层"}},[s._v("#")]),s._v(" View 层")]),s._v(" "),e("p",[s._v("View 层的主要工作：提供前端页面模板。如果是服务器端渲染，是将 model 层的数据注入到 view 层中，最后通过 controller 层返回给客户端。由于本项目前端使用 react 渲染，所以 view 层直接是经过 webpack 打包后的页面。")]),s._v(" "),e("ul",[e("li",[s._v("使用 koa-static 提供一个静态文件服务器，用来访问前端打包后生成的 html 文件。")])]),s._v(" "),e("h3",{attrs:{id:"搭建-graphql-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-graphql-环境"}},[s._v("#")]),s._v(" 搭建 GraphQL 环境")]),s._v(" "),e("p",[s._v("GraphQL 是一种用于 api 的查询语言，需要服务器端配置 graphql 支持，同时也需要客户端使用 graphql 语法的格式进行请求。")]),s._v(" "),e("p",[s._v("使用 apollo 更快的搭建 graphql 环境。")]),s._v(" "),e("ul",[e("li",[s._v("服务器端配置 apollo-server。\n"),e("ul",[e("li",[s._v("使用 schema，定义请求的类型，返回的格式。")]),s._v(" "),e("li",[s._v("使用 resolvers 来处理对应的 schema。")])])]),s._v(" "),e("li",[s._v("客户端配置 apollo-client。\n"),e("ul",[e("li",[s._v("按照 apollo-server 定义的 schema，来请求数据。")])])])]),s._v(" "),e("h3",{attrs:{id:"搭建-mongodb-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-mongodb-环境"}},[s._v("#")]),s._v(" 搭建 MongoDB 环境")]),s._v(" "),e("p",[s._v("MongoDB 是一个面向文档存储的数据库，操作起来十分简单。")]),s._v(" "),e("p",[s._v("Mongoose 为 mongodb 提供了一种直接的，基于 scheme 结构去定义你的数据模型。它内置数据验证，查询构建，业务逻辑钩子等，开箱即用。")]),s._v(" "),e("ul",[e("li",[s._v("使用 mongoose 建立和本地 mongodb 的连接。")]),s._v(" "),e("li",[s._v("创建 model 模型，一个模型对应 mongodb 里的一张表。")]),s._v(" "),e("li",[s._v("根据 model 封装增删改查功能，并返回给 controller 层使用。")])]),s._v(" "),e("p",[s._v("接下来的步骤就是安装 mongodb，启动服务，就可以了。")]),s._v(" "),e("h2",{attrs:{id:"搭建测试环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建测试环境"}},[s._v("#")]),s._v(" 搭建测试环境")]),s._v(" "),e("p",[s._v("本项目使用 jest 作为测试框架，jest 包含了断言库、测试框架、mock 数据等功能，是一个大而全的测试库。由于前端使用了 react 项目，这里引入了专门用来测试 react 的 enzyme 库。")]),s._v(" "),e("p",[s._v("1、新建 jest.config.js 文件。")]),s._v(" "),e("ul",[e("li",[s._v("配置初始化 setup.ts 文件。\n"),e("ul",[e("li",[s._v("根据 react 版本配置对应的 enzyme-adapter。")]),s._v(" "),e("li",[s._v("mock 全局变量，如 fech，canvas 等。")])])]),s._v(" "),e("li",[s._v("配置需要测试的文件。")]),s._v(" "),e("li",[s._v("配置 mock 数据文件。")]),s._v(" "),e("li",[s._v("配置测试文件的编译方式。\n"),e("ul",[e("li",[s._v("ts 代码使用 ts-jest 编译。")])])]),s._v(" "),e("li",[s._v("配置代码覆盖率文件。")])]),s._v(" "),e("p",[s._v("2、编写测试文件。")]),s._v(" "),e("ul",[e("li",[s._v("新建__mocks__，__tests__目录，存放测试文件和 mock 数据文件。")]),s._v(" "),e("li",[s._v("按照 src 中的目录，建立相应的测试文件目录。")])]),s._v(" "),e("p",[s._v("3、编写测试脚本和上传覆盖率脚本。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jest --no-cache --colors --coverage --forceExit --detectOpenHandles"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"coverage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"codecov"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"配置上线环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置上线环境"}},[s._v("#")]),s._v(" 配置上线环境")]),s._v(" "),e("p",[s._v("安装好各种环境之后，接下来就要考虑项目上线了。")]),s._v(" "),e("h3",{attrs:{id:"配置服务器环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器环境"}},[s._v("#")]),s._v(" 配置服务器环境")]),s._v(" "),e("ul",[e("li",[s._v("安装 nodejs 环境。"),e("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm 安装 node"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("安装 pm2 进程守护。"),e("code",[s._v("npm i pm2 -g")])]),s._v(" "),e("li",[s._v("安装 mongodb。"),e("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mongodb 官方文档"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("安装免费 https 证书。"),e("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("letsencrypt 官网"),e("OutboundLink")],1),s._v(" "),e("ul",[e("li",[s._v("域名需要先进行备案（使用阿里云备案，资料准备齐全的话 10 天左右就可以批下来）。")])])])]),s._v(" "),e("h3",{attrs:{id:"代码发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码发布"}},[s._v("#")]),s._v(" 代码发布")]),s._v(" "),e("p",[s._v("本项目发布非常简单，只需要一步操作就搞定了，这些都是经过持续集成配置后的结果。")]),s._v(" "),e("div",{staticClass:"language-zsh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# clone with Git Bash\ngit clone https://github.com/mengsixing/cdfang-spider.git\n\n# change directory\ncd cdfang-spider\n\n# install dependencies\nnpm i\n\n# build for production with minification\nnpm run build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("所有的事情都在 build 命令下完成了，我们分析一下 npm run build 命令做的事情。")]),s._v(" "),e("ul",[e("li",[s._v("eslint 语法错误检查。")]),s._v(" "),e("li",[s._v("单元测试。\n"),e("ul",[e("li",[s._v("上传测试覆盖率。")])])]),s._v(" "),e("li",[s._v("打包客户端代码。\n"),e("ul",[e("li",[s._v("打包后生成 html 文件作为 node 端的 view 层，和后端绑定在一起。")]),s._v(" "),e("li",[s._v("其他静态资源，在 webpack 打包后自动上传到七牛 cdn，使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/qiniu-upload-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("qiniu-upload-plugin"),e("OutboundLink")],1),s._v(" 来进行一键上传。")])])]),s._v(" "),e("li",[s._v("打包服务器端代码。")])]),s._v(" "),e("p",[s._v("上述事情通过创建 npm script 就可以了完成需求了，但这些命令也不应该每次都由手工敲一遍，通过配置 travisCI，每一次 master 分支提交代码时，自动运行上述命令就行了。")]),s._v(" "),e("h4",{attrs:{id:"travisci-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travisci-配置"}},[s._v("#")]),s._v(" travisCI 配置")]),s._v(" "),e("p",[s._v("travisCI 是一个持续集成平台，每当 github 提交代码时，travisCI 就会得到通知，然后根据 travisCI 中的配置信息执行相应的操作，并及时把运行结果反馈给用户。travisCI 配置文件可以参考项目根目录下的 "),e("code",[s._v(".travis.yml")]),s._v(" 文件。配置文件核心在于 script 的配置。")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run build\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run test\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("after_success")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm run coverage\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("可以看到，每一次 github 提交后，travisCI 就会执行 名称为 build 的任务，任务分为 2 个步骤，首先执行 build 命令，然后执行 test 命令，当命令都执行完成后，执行 coverage 命令。如果执行命令期间出现任何错误，travisCI 会通过邮件及时通知我们。真正要上线时，先查看 ci 状态，如果已通过所有的步骤，那就不用担心发布的代码有问题了。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("至此，整个项目选型与搭建流程已经介绍完毕了，当然还有一些很细节的地方没有写进去，如果有不太明白的地方，可以提 issue，或者加我微信 yhl2016226。")]),s._v(" "),e("p",[s._v("接下来对以下 4 个方面写个小总结。")]),s._v(" "),e("ul",[e("li",[s._v("开发方面：项目将前端、后端、数据库端连通起来，组合成了一个小全栈的项目，加深了我对整个开发环节的理解。")]),s._v(" "),e("li",[s._v("测试方面：通过编写单元测试，ui 测试，api 测试，积累了自动化测试方面的经验。")]),s._v(" "),e("li",[s._v("运维方面：通过配置持续集成，守护进程，nginx，https 等，让我有能力实现小型项目的部署。")]),s._v(" "),e("li",[s._v("技术方面：项目中使用了一些比较新的技术，如：hooks api，graphql 等，但用的都很基础，主要是为了练手，后续还得深入学习。")])]),s._v(" "),e("p",[s._v("对于项目后期更新，主要是基于以下几个方面：graphql，docker，k8s，微服务，serverless 等，东西太多，还得加油学习啊，😂")]),s._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c822e426fb9a04a0a5ffb49",target:"_blank",rel:"noopener noreferrer"}},[s._v("TypeScript 和 Babel"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/sorrycc/f2e-decision-tree",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端决策树"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);