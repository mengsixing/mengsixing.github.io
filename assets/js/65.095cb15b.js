(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{347:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-理解-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-理解-this"}},[t._v("#")]),t._v(" JS 理解 This")]),t._v(" "),a("p",[t._v("本以为对 js 中的 this 已经很熟练了，再看完冴羽的博客后，才发现自己对 es 规范知之甚少，原来我都是根据经验在判断 this，这篇文章会从最底层的 es 规范上去介绍 this 的判断。")]),t._v(" "),a("h2",{attrs:{id:"一道测试题引发的思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一道测试题引发的思考"}},[t._v("#")]),t._v(" 一道测试题引发的思考")]),t._v(" "),a("p",[t._v("第一次做这道题时，只对了第一题。。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例3")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例4")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例5")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("先想一想这道题的答案，然后解释一下原因。")]),t._v(" "),a("h2",{attrs:{id:"规范文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范文档"}},[t._v("#")]),t._v(" 规范文档")]),t._v(" "),a("p",[t._v("要彻底弄明白上面的测试题，还得看规范文档 😂")]),t._v(" "),a("p",[t._v("常见的几种规范：")]),t._v(" "),a("ul",[a("li",[t._v("Reference 类型")]),t._v(" "),a("li",[t._v("函数调用规范")]),t._v(" "),a("li",[t._v("属性读取规范")]),t._v(" "),a("li",[t._v("括号运算规范")]),t._v(" "),a("li",[t._v("赋值运算规范")]),t._v(" "),a("li",[t._v("逻辑与算法规范")]),t._v(" "),a("li",[t._v("逗号运算规范")])]),t._v(" "),a("h3",{attrs:{id:"reference-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-类型"}},[t._v("#")]),t._v(" Reference 类型")]),t._v(" "),a("p",[t._v("在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://es5.github.io/#x8.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 8.7 The Reference Specification Type"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Reference 类型实例大致长这样：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fooReference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fooReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnvironmentRecord;")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" barReference "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("GetBase(V)")]),t._v(". Returns the base value component of the reference V.")]),t._v(" "),a("li",[a("code",[t._v("HasPrimitiveBase(V)")]),t._v(". Returns true if the base value is a Boolean, String, or Number.")]),t._v(" "),a("li",[a("code",[t._v("IsPropertyReference(V)")]),t._v(". Returns true if either the base value is an object or HasPrimitiveBase(V) is true; otherwise returns false.")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://es5.github.io/#x8.7.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("8.7.1 GetValue (V)"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("If Type(V) is not Reference, return V.")]),t._v(" "),a("li",[t._v("Let base be the result of calling GetBase(V).")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://es5.github.io/#x10.2.1.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 10.2.1.1.6 ImplicitThisValue()"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Return "),a("code",[t._v("undefined")]),t._v(".")])])])]),t._v(" "),a("h3",{attrs:{id:"函数调用规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数调用规范"}},[t._v("#")]),t._v(" 函数调用规范")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://es5.github.io/#x11.2.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.2.3 Function Calls"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v("将 ref 赋值为 MemberExpression（简单理解 MemberExpression 其实就是()左边的部分）")]),t._v(" "),a("li",[a("code",[t._v("步骤2")]),t._v("判断 ref 的类型\n"),a("ul",[a("li",[a("code",[t._v("步骤3")]),t._v("如果 ref 是 Reference 类型\n"),a("ul",[a("li",[a("code",[t._v("步骤4")]),t._v("如果 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)")]),t._v(" "),a("li",[a("code",[t._v("步骤5")]),t._v("如果 base value 值是 Environment Record, 那么 this 的值为 ImplicitThisValue(ref)")])])]),t._v(" "),a("li",[a("code",[t._v("步骤6")]),t._v("如果 ref 不是 Reference 类型，那么 this 的值为 undefined")])])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。")])]),t._v(" "),a("h3",{attrs:{id:"示例-1-解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1-解答"}},[t._v("#")]),t._v(" 示例 1 解答")]),t._v(" "),a("p",[t._v("1、使用"),a("code",[t._v("属性读取")]),t._v("规范：获取 "),a("code",[t._v("foo.bar")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://es5.github.io/#x11.2.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.2.1 Property Accessors"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Return a value of type Reference")]),t._v(" whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.")]),t._v(" "),a("li",[t._v("由此可见，属性读取，默认返回一个 Reference 类型")])])]),t._v(" "),a("li",[a("p",[t._v("函数调用规范")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤3")]),t._v(" -> "),a("code",[t._v("步骤4")])])])])]),t._v(" "),a("h3",{attrs:{id:"示例-2-解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2-解答"}},[t._v("#")]),t._v(" 示例 2 解答")]),t._v(" "),a("p",[t._v("1、使用"),a("code",[t._v("属性读取")]),t._v("规范：获取 "),a("code",[t._v("foo.bar")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、使用"),a("code",[t._v("括号运算符")]),t._v("规范：获取 "),a("code",[t._v("(foo.bar)")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es5.github.io/#x11.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看规范 11.1.6 The Grouping Operator"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Return the result of evaluating Expression. "),a("code",[t._v("This may be of type Reference")]),t._v(".")]),t._v(" "),a("li",[t._v("实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的。")])])]),t._v(" "),a("li",[t._v("函数调用规范\n"),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤3")]),t._v(" -> "),a("code",[t._v("步骤4")])])])])]),t._v(" "),a("h3",{attrs:{id:"示例-3-解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-3-解答"}},[t._v("#")]),t._v(" 示例 3 解答")]),t._v(" "),a("p",[t._v("1、使用"),a("code",[t._v("赋值运算符")]),t._v("规范：获取 "),a("code",[t._v("foo.bar = foo.bar")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、使用"),a("code",[t._v("括号运算符")]),t._v("规范：获取 "),a("code",[t._v("(foo.bar = foo.bar)")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es5.github.io/#x11.13.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.13.1 Simple Assignment ( = )"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Let rval be "),a("code",[t._v("GetValue(rref)")]),t._v(".")]),t._v(" "),a("li",[t._v("Return rval. 返回的是 GetValue 后的值，不是一个 Refernce。")])])]),t._v(" "),a("li",[t._v("函数调用规范\n"),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤6")])])])])]),t._v(" "),a("h3",{attrs:{id:"示例-4-解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-4-解答"}},[t._v("#")]),t._v(" 示例 4 解答")]),t._v(" "),a("p",[t._v("1、使用"),a("code",[t._v("逻辑与算法")]),t._v("规范：获取 "),a("code",[t._v("false || foo.bar")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、使用"),a("code",[t._v("括号运算符")]),t._v("规范：获取 "),a("code",[t._v("(false || foo.bar)")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es5.github.io/#x11.11",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.11 Binary Logical Operators"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Let rval be "),a("code",[t._v("GetValue(rref)")]),t._v(".")]),t._v(" "),a("li",[t._v("Return rval. 返回的是 GetValue 后的值，不是一个 Refernce。")])])]),t._v(" "),a("li",[t._v("函数调用规范\n"),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤6")])])])])]),t._v(" "),a("h3",{attrs:{id:"示例-5-解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-5-解答"}},[t._v("#")]),t._v(" 示例 5 解答")]),t._v(" "),a("p",[t._v("1、使用"),a("code",[t._v("逗号操作符")]),t._v("规范：获取 "),a("code",[t._v("foo.bar, foo.bar")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、使用"),a("code",[t._v("括号运算符")]),t._v("规范：获取 "),a("code",[t._v("(foo.bar, foo.bar)")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("3、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es5.github.io/#x11.14",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 11.14 Comma Operator ( , )"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Return "),a("code",[t._v("GetValue(rref)")]),t._v(". 返回的是 GetValue 后的值，不是一个 Refernce。")])])]),t._v(" "),a("li",[t._v("函数调用规范\n"),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤6")])])])])]),t._v(" "),a("h2",{attrs:{id:"一个最普通的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个最普通的情况"}},[t._v("#")]),t._v(" 一个最普通的情况")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fooReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnvironmentRecord;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("1、使用"),a("code",[t._v("标识符解析")]),t._v("规范：获取 "),a("code",[t._v("foo")]),t._v(" 的返回类型。")]),t._v(" "),a("p",[t._v("2、交给函数调用规范，去解析 this。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es5.github.io/#x10.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范 10.3.1 Identifier Resolution"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("The result of evaluating an identifier "),a("code",[t._v("is always a value of type Reference")]),t._v(" with its referenced name component equal to the Identifier String.")])])]),t._v(" "),a("li",[t._v("函数调用规范\n"),a("ul",[a("li",[a("code",[t._v("步骤1")]),t._v(" -> "),a("code",[t._v("步骤2")]),t._v(" -> "),a("code",[t._v("步骤3")]),t._v(" -> "),a("code",[t._v("步骤5")])])])])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("遇到问题时，尽量从原理的角度看待问题，不要凭经验办事情，不妨多研究研究底层规范。")]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 深入之从 ECMAScript 规范解读 this"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://es5.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES5 规范文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);