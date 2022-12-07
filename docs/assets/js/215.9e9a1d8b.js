(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{529:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"列表渲染之数组、对象更新检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染之数组、对象更新检测"}},[s._v("#")]),s._v(" 列表渲染之数组、对象更新检测")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B",target:"_blank",rel:"noopener noreferrer"}},[s._v("数组更新检测API"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"}},[s._v("对象更新检测API"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"数组更新检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组更新检测"}},[s._v("#")]),s._v(" 数组更新检测")]),s._v(" "),t("h4",{attrs:{id:"变异方法-mutation-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变异方法-mutation-method"}},[s._v("#")]),s._v(" 变异方法 (mutation method)")]),s._v(" "),t("p",[s._v("Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：\n")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("push()")]),s._v("末尾添加")]),s._v(" "),t("li",[t("code",[s._v("pop()")]),s._v("末尾删除")]),s._v(" "),t("li",[t("code",[s._v("shift()")]),s._v(" 首位删除")]),s._v(" "),t("li",[t("code",[s._v("unshift()")]),s._v(" 首位添加")]),s._v(" "),t("li",[t("code",[s._v("splice()")]),s._v(" 拼合")]),s._v(" "),t("li",[t("code",[s._v("sort()")]),s._v(" 排序")]),s._v(" "),t("li",[t("code",[s._v("reverse()")]),s._v(" 反转")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://Coder.com/pages/74d2ab3fbfeaaa68/#_3%E3%80%81%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[s._v("数组实例方法"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"替换数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换数组"}},[s._v("#")]),s._v(" 替换数组")]),s._v(" "),t("p",[s._v("变异方法，顾名思义，会改变调用了这些方法的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如 "),t("code",[s._v("filter()")]),s._v("、"),t("code",[s._v("concat()")]),s._v(" 和 "),t("code",[s._v("slice()")]),s._v(" 。它们不会改变原始数组，而"),t("strong",[s._v("总是返回一个新数组")]),s._v("。当使用非变异方法时，可以用新数组替换旧数组：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("example1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" example1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("Foo")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。")]),s._v(" "),t("h4",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("p",[t("strong",[s._v("由于 JavaScript 的限制，Vue 不能检测以下数组的变动")])]),s._v(" "),t("ol",[t("li",[s._v("当你利用索引直接设置一个数组项时，例如："),t("code",[s._v("vm.items[indexOfItem] = newValue")])]),s._v(" "),t("li",[s._v("当你修改数组的长度时，例如："),t("code",[s._v("vm.items.length = newLength")])])]),s._v(" "),t("p",[s._v("为了解决第一类问题，以下两种方式都可以实现和 "),t("code",[s._v("vm.items[indexOfItem] = newValue")]),s._v(" 相同的效果，同时也将在响应式系统内触发状态更新：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.set")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indexOfItem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array.prototype.splice")]),s._v("\nvm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("indexOfItem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("你也可以使用 "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-set",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("vm.$set")]),t("OutboundLink")],1),s._v(" 实例方法，该方法是全局方法 "),t("code",[s._v("Vue.set")]),s._v(" 的一个别名：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indexOfItem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("为了解决第二类问题，你可以使用 "),t("code",[s._v("splice")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newLength"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"对象变更检测注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象变更检测注意事项"}},[s._v("#")]),s._v(" 对象变更检测注意事项")]),s._v(" "),t("blockquote",[t("p",[s._v("列表循环对象示例")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("(item, key, index) in obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("p",[s._v("还是由于 JavaScript 的限制，"),t("strong",[s._v("Vue 不能检测对象属性的添加或删除")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `vm.a` 现在是响应式的")]),s._v("\n\nvm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `vm.b` 不是响应式的")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。")]),s._v(" "),t("p",[s._v("但是，可以使用 "),t("code",[s._v("Vue.set(object, propertyName, value)")]),s._v(" 方法向嵌套对象添加响应式属性。例如，对于：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("userProfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Anika'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("你可以添加一个新的 "),t("code",[s._v("age")]),s._v(" 属性到嵌套的 "),t("code",[s._v("userProfile")]),s._v(" 对象：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userProfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'age'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你还可以使用 "),t("code",[s._v("vm.$set")]),s._v(" 实例方法，它只是全局 "),t("code",[s._v("Vue.set")]),s._v(" 的别名：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userProfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'age'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("有时你可能需要为已有对象赋值多个新属性，比如使用 "),t("code",[s._v("Object.assign()")]),s._v(" 或 "),t("code",[s._v("_.extend()")]),s._v("。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userProfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("favoriteColor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue Green'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("你应该这样做：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userProfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userProfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("favoriteColor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue Green'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("一、使数组更新具有响应式可使用的办法：")]),s._v(" "),t("ol",[t("li",[s._v("使用变异方法 （push、pop、unshift、shift、splice、sort、reverse）")]),s._v(" "),t("li",[s._v("替换数组引用  （对不改变原数组的方法可使用替换数组）")]),s._v(" "),t("li",[s._v("使用Vue.set()方法")])]),s._v(" "),t("p",[s._v("二、使对象属性的添加或删除具有响应式可使用的办法：")]),s._v(" "),t("ol",[t("li",[s._v("替换对象引用")]),s._v(" "),t("li",[s._v("使用Vue.set()方法")])]),s._v(" "),t("p",[s._v("三、Vue.set() 语法：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向数组更新数据")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indexOfItem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n即 Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("原数组"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 索引"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 新数据"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向对象更新数据")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propertyName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n即 Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("原对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 属性名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("blockquote",[t("p",[s._v("vm.$set() 实例方法是 Vue.set() 全局方法的别名")])])])}),[],!1,null,null,null);t.default=e.exports}}]);