(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{410:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"快速读懂-js-原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速读懂-js-原型链"}},[t._v("#")]),t._v(" 快速读懂 JS 原型链")]),t._v(" "),n("p",[t._v("最近参加了公司内部技术分享，分享同学提到了 Js 原型链的问题，并从 V8 的视角展开发散，刷新了我之前对原型链的认识，听完后决定重学一下原型链，巩固一下基础。")]),t._v(" "),n("ul",[n("li",[t._v("理解原型链")]),t._v(" "),n("li",[t._v("深入原型链")]),t._v(" "),n("li",[t._v("总结与思考")])]),t._v(" "),n("h2",{attrs:{id:"理解原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#理解原型链"}},[t._v("#")]),t._v(" 理解原型链")]),t._v(" "),n("p",[t._v("Js 中的原型链是一个比较有意思的话题，它采用了一套巧妙的方法，解决了 Js 中的继承问题。")]),t._v(" "),n("p",[t._v("按我的理解，原型链可以拆分成：")]),t._v(" "),n("ul",[n("li",[t._v("原型（prototype）")]),t._v(" "),n("li",[t._v("链（"),n("code",[t._v("__proto__")]),t._v("）")])]),t._v(" "),n("h3",{attrs:{id:"原型-prototype"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型-prototype"}},[t._v("#")]),t._v(" 原型（prototype）")]),t._v(" "),n("p",[t._v("原型（prototype）是一个普通的对象，它为构造函数的实例共享了属性和方法。在所有的实例中，引用到的原型都是同一个对象。")]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("study")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 2 个实例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaohong"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v('上面的代码中，我们创建了 2 个 Student 实例，每个实例都有一个 study 方法，用来打印 "study js"。')]),t._v(" "),n("p",[t._v("这样写会有个问题：2 个实例中的 study 方法都是独立的，虽然功能相同，但在系统中占用的是 2 份内存，如果我创建 100 个 Student 实例，就得占用 100 份内存，这样算下去，将会造成大量的内存浪费。")]),t._v(" "),n("p",[t._v("所以 Js 创造了 prototype。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("study")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 2 个实例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaohong"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("使用 prototype 之后， study 方法存放在 Student 的原型中，内存中只会存放一份，所有 Student 实例都会共享它，内存问题就迎刃而解了。")]),t._v(" "),n("p",[t._v("但这里还存在一个问题。")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么 student1 能够访问到 Student 原型上的属性和方法？")])]),t._v(" "),n("p",[t._v("答案在 "),n("code",[t._v("__proto__")]),t._v(" 中，我们接着往下看。")]),t._v(" "),n("h3",{attrs:{id:"链-proto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链-proto"}},[t._v("#")]),t._v(" 链（"),n("code",[t._v("__proto__")]),t._v("）")]),t._v(" "),n("p",[t._v("链（"),n("code",[t._v("__proto__")]),t._v("）可以理解为一个指针，它是实例对象中的一个属性，指向了构造函数的原型（prototype）。")]),t._v(" "),n("p",[t._v("我们来看一个案例：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("study")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// study js")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("从打印结果可以得出：函数实例的 "),n("code",[t._v("__proto__")]),t._v(" 指向了构造函数的 prototype，上文中遗留的问题也就解决了。")]),t._v(" "),n("p",[t._v("但很多同学可能有这个疑问。")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么调用 student.study 时，访问到的却是 Student.prototype.study 呢？")])]),t._v(" "),n("p",[t._v("答案在原型链中，我们接着往下看。")]),t._v(" "),n("h3",{attrs:{id:"原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),n("p",[t._v("原型链指的是：一个实例对象，在调用属性或方法时，会依次从实例本身、构造函数原型、构造函数原型的原型... 上去寻找，查看是否有对应的属性或方法。这样的寻找方式就好像一个链条一样，从实例对象，一直找到 Object.prototype ，专业上称之为原型链。")]),t._v(" "),n("p",[t._v("还是来看一个案例：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("study")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstudent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("study")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// study js。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在实例中没找到，在构造函数的原型上找到了。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际调用的是：student.__proto__.say 也就是 Student.prototype.say。")]),t._v("\n\nstudent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在实例中没找到。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在构造函数的原型上也没找到。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在构造函数的原型的原型上找到了。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际调用的是 student.__proto__.__proto__.toString 也就是 Object.prototype.toString。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("可以看到， "),n("code",[t._v("__proto__")]),t._v(" 就像一个链一样，串联起了实例对象和原型。")]),t._v(" "),n("p",[t._v("同样，上面代码中还会存在以下疑问。")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么 "),n("code",[t._v("Student.prototype.__proto__")]),t._v(" 是 Object.prototype？")])]),t._v(" "),n("p",[t._v("这里提供一个推导步骤：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("先找 "),n("code",[t._v("__proto__")]),t._v(" 前面的对象，也就是 Student.prototype 的构造函数。")]),t._v(" "),n("ol",[n("li",[t._v("判断 Student.prototype 类型， "),n("code",[t._v("typeof Student.prototype")]),t._v(" 是 "),n("code",[t._v("object")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("object")]),t._v(" 的构造函数是 Object。")]),t._v(" "),n("li",[t._v("得出 Student.prototype 的构造函数是 Object。")])])]),t._v(" "),n("li",[n("p",[t._v("所以 "),n("code",[t._v("Student.prototype.__proto__")]),t._v(" 是 Object.prototype。")])])]),t._v(" "),n("p",[t._v("这个推导方法很实用，除了自定义构造函数对象之外，其他对象都可以推导出正确答案。")]),t._v(" "),n("h3",{attrs:{id:"原型链常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链常见问题"}},[t._v("#")]),t._v(" 原型链常见问题")]),t._v(" "),n("p",[t._v("原型链中的问题很多，这里再列举几个常见的问题。")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("Function.__proto__")]),t._v(" 是什么？")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("找 Function 的构造函数。")]),t._v(" "),n("ol",[n("li",[t._v("判断 Function 类型，"),n("code",[t._v("typeof Function")]),t._v(" 是 "),n("code",[t._v("function")]),t._v("。")]),t._v(" "),n("li",[t._v("函数类型的构造函数就是 Function。")]),t._v(" "),n("li",[t._v("得出 Function 的构造函数是 Function。")])])]),t._v(" "),n("li",[n("p",[t._v("所以 "),n("code",[t._v("Function.__proto__")]),t._v(" = Function.prototype。")]),t._v(" "),n("hr")])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("Number.__proto__")]),t._v(" 是什么？")])]),t._v(" "),n("p",[t._v("这里只是稍微变了一下，很多同学就不知道了，其实和上面的问题是一样的。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("找 Number 的构造函数。")]),t._v(" "),n("ol",[n("li",[t._v("判断 Number 类型，"),n("code",[t._v("typeof Number")]),t._v(" 是 "),n("code",[t._v("function")]),t._v("。")]),t._v(" "),n("li",[t._v("函数类型的构造函数就是 Function。")]),t._v(" "),n("li",[t._v("得出 Number 的构造函数是 Function。")])])]),t._v(" "),n("li",[n("p",[t._v("所以 "),n("code",[t._v("Number.__proto__")]),t._v(" = Function.prototype。")]),t._v(" "),n("hr")])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("Object.prototype.__proto__")]),t._v(" 是什么？")])]),t._v(" "),n("p",[t._v("这是个特例，如果按照常理去推导，"),n("code",[t._v("Object.prototype.__proto__")]),t._v(" 是 Object.prototype，但这是不对的，这样下去原型链就在 Object 处无限循环了。")]),t._v(" "),n("p",[t._v("为了解决这个问题，Js 的造物主就直接在规定了 "),n("code",[t._v("Object.prototype.__proto__")]),t._v(" 为 null，打破了原型链的无线循环。")]),t._v(" "),n("p",[t._v("明白了这些问题之后，看一下这张经典的图，我们应该都能理解了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/24/1691fc878b9beefa?imageView2/0/w/1280/h/960/format/png/ignore-error/1",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"深入原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深入原型链"}},[t._v("#")]),t._v(" 深入原型链")]),t._v(" "),n("p",[t._v("介绍完传统的原型链判断，我们再从 V8 的层面理解一下。")]),t._v(" "),n("h3",{attrs:{id:"v8-是怎么创建对象的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v8-是怎么创建对象的"}},[t._v("#")]),t._v(" V8 是怎么创建对象的")]),t._v(" "),n("p",[t._v("Js 代码在执行时，会被 V8 引擎解析，这时 V8 会用不同的模板来处理 Js 中的对象和函数。")]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://v8docs.nodesource.com/node-0.10/db/d5f/classv8_1_1_object_template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ObjectTemplate"),n("OutboundLink")],1),t._v(" 用来创建对象")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://v8docs.nodesource.com/node-0.10/d8/d83/classv8_1_1_function_template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FunctionTemplate"),n("OutboundLink")],1),t._v(" 用来创建函数")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://v8docs.nodesource.com/node-0.10/d8/d83/classv8_1_1_function_template.html#ad7af75668b4eb793dcf3d80341eeb296",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrototypeTemplate"),n("OutboundLink")],1),t._v(" 用来创建函数原型")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200707191559701.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200707191709673.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200707191819115.png",alt:""}})]),t._v(" "),n("p",[t._v("细品一下 V8 中的定义，我们可以得到以下结论。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Js 中的函数")]),t._v("都是 FunctionTemplate 创建出来的，返回值的是 "),n("strong",[t._v("FunctionTemplate 实例")]),t._v("。")]),t._v(" "),n("li",[n("strong",[t._v("Js 中的对象")]),t._v("都是 ObjectTemplate 创建出来的，返回值的是 "),n("strong",[t._v("ObjectTemplate 实例")]),t._v("。")]),t._v(" "),n("li",[n("strong",[t._v("Js 中函数的原型")]),t._v("（prototype）都是通过 PrototypeTemplate 创建出来的，返回值是 "),n("strong",[t._v("ObjectTemplate 实例")]),t._v("。")])]),t._v(" "),n("p",[t._v("所以 Js 中的对象的原型可以这样判断：")]),t._v(" "),n("ul",[n("li",[t._v("所有的对象的原型都是 Object.prototype，自定义构造函数的实例除外。")]),t._v(" "),n("li",[t._v("自定义构造函数的实例，它的原型是对应的构造函数原型。")])]),t._v(" "),n("p",[t._v("在 Js 中的函数原型判断就更加简单了。")]),t._v(" "),n("ul",[n("li",[t._v("所有的函数原型，都是 Function.prototype。")])]),t._v(" "),n("p",[t._v("下图展示了所有的内置构造函数，他们的原型都是 Function.prototype。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.yinhengli.com/image-20200709114139808.png",alt:""}})]),t._v(" "),n("p",[t._v("看到这里，你是否也可以一看就看出任何对象的原型呢？")]),t._v(" "),n("h3",{attrs:{id:"附-v8-中的函数解析案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-v8-中的函数解析案例"}},[t._v("#")]),t._v(" 附：V8 中的函数解析案例")]),t._v(" "),n("p",[t._v("了解完原型链之后，我们看一下 V8 中的函数解析。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("study")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"study js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoming'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("这段代码在 V8 中会这样执行：")]),t._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 创建一个函数\nv8::Local<v8::FunctionTemplate> Student = v8::FunctionTemplate::New();\n// 获取函数原型\nv8::Local<v8::Template> proto_Student = Student->PrototypeTemplate();\n// 设置原型上的方法\nproto_Student->Set("study", v8::FunctionTemplate::New(InvokeCallback));\n// 获取函数实例\nv8::Local<v8::ObjectTemplate> instance_Student = Student->InstanceTemplate();\n// 设置实例的属性\ninstance_Student->Set("name", String::New(\'xiaoming\'));\n// 返回构造函数\nv8::Local<v8::Function> function = Student->GetFunction();\n// 返回构造函数实例\nv8::Local<v8::Object> instance = function->NewInstance();\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("以上代码可以分为 4 个步骤：")]),t._v(" "),n("ul",[n("li",[t._v("创建函数模板。")]),t._v(" "),n("li",[t._v("在函数模板中，拿到函数原型，并赋值。")]),t._v(" "),n("li",[t._v("在函数模板中，拿到函数实例，并赋值。")]),t._v(" "),n("li",[t._v("返回构造函数。")]),t._v(" "),n("li",[t._v("返回构造函数实例。")])]),t._v(" "),n("p",[t._v("V8 中的整体执行流程是符合正常预期的，这里了解一下即可。")]),t._v(" "),n("h2",{attrs:{id:"总结与思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结与思考"}},[t._v("#")]),t._v(" 总结与思考")]),t._v(" "),n("p",[t._v("本文分别从传统 Js 方面、V8 层面组件剖析了原型链的本质，希望大家都能有所收获。")]),t._v(" "),n("p",[t._v("最后，如果你对此有任何想法，欢迎留言评论！")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.yinhengli.com/qianduanrizhi_guanzhu.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);