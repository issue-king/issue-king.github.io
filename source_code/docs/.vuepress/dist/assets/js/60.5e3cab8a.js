(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{374:function(_,t,v){"use strict";v.r(t);var i=v(7),r=Object(i.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_1、final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、final"}},[_._v("#")]),_._v(" 1、final")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("修饰类：表示类不可被继承")])]),_._v(" "),t("li",[t("p",[_._v("修饰方法：表示方法不可被子类覆盖，但是可以重载")])]),_._v(" "),t("li",[t("p",[_._v("修饰变量：表示变量被赋值之后不可改变它的值")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("修饰成员变量")]),_._v(" "),t("ul",[t("li",[_._v("如果final修饰的类变量，只能在静态初始化块中指定初始值或者声明改类变量时指定初始值")]),_._v(" "),t("li",[_._v("如果final修饰的是成员变量，可以在非静态初始化块、声明该变量或者构造器中指定初始值")])])]),_._v(" "),t("li",[t("p",[_._v("修饰局部变量")]),_._v(" "),t("p",[_._v("系统不会对局部变量进行初始化，局部变量必须由开发人员赋值初始值，也就是说可以在定义式指定默认值，也可以不指定，在后面的代码中对final变量赋值初始值（仅一次）")])]),_._v(" "),t("li",[t("p",[_._v("修饰基本数据类型或者引用数据类型")]),_._v(" "),t("ul",[t("li",[_._v("如果是基本数据类型，则数值一旦在初始化之后就不能更改")]),_._v(" "),t("li",[_._v("如果是引用数据类型，则在初始化之后就不能让其指向另一个对象，但是引用的值是可以改变的")])])])])])]),_._v(" "),t("p",[t("strong",[_._v("为什么局部内部类和匿名内部类只能访问局部的final变量？")])]),_._v(" "),t("blockquote",[t("p",[_._v("内部类和外部类是处于同一个级别的，内部类不会因为定义在方法中就会随着方法的执行完毕而销毁")]),_._v(" "),t("p",[_._v("这里产生的问题是：当外部类的方法结束时，局部变量就会销毁，但是内部类对象可能还存在，只有没有地方在引用它了，才会死亡，这里就出现了一个矛盾：内部对象访问了一个不存在的变量，为了解决这个问题，就将局部变量复制一份作为内部类的成员变量，这样当局部变量死亡后，内部类依然可以访问它，实际访问的是局部变量的copy，这样就延长了局部变量的生命周期。")]),_._v(" "),t("p",[_._v("将局部变量复制为内部类的成员变量时，必须保证这两个变量是一样的，也就是如果我们在内部类中修改了成员变量，方法中的局部变量也得跟着改变，怎么解决这个问题？")]),_._v(" "),t("p",[_._v("就将局部变量设置为final，对它初始化，不允许在修改这个变量值，就保证了局部变量和承压u你变量的一致性，这实际上是一种妥协，使得局部变量和内部类的成员变量保持了一致")])]),_._v(" "),t("h1",{attrs:{id:"_2、string、stringbuilder、stringbuffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、string、stringbuilder、stringbuffer"}},[_._v("#")]),_._v(" 2、String、StringBuilder、StringBuffer")]),_._v(" "),t("h1",{attrs:{id:"_3、tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、tcp"}},[_._v("#")]),_._v(" 3、TCP")]),_._v(" "),t("h2",{attrs:{id:"_1、tcp-协议如何保证可靠传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、tcp-协议如何保证可靠传输"}},[_._v("#")]),_._v(" 1、TCP 协议如何保证可靠传输？")]),_._v(" "),t("ul",[t("li",[_._v("应用数据被分割成 TCP 认为最适合发送的数据块")]),_._v(" "),t("li",[_._v("TCP 给发送的每一个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层")]),_._v(" "),t("li",[_._v("校验和： TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段")]),_._v(" "),t("li",[_._v("TCP 的接收端会丢弃重复的数据")]),_._v(" "),t("li",[_._v("流量控制： TCP 连接的每一方都有固定大小的缓冲空间，TCP的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议。 （TCP 利用滑动窗口实现流量控制）")]),_._v(" "),t("li",[_._v("拥塞控制： 当网络拥塞时，减少数据的发送")]),_._v(" "),t("li",[_._v("ARQ协议： 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组;超时重传： 当 TCP 发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。")])]),_._v(" "),t("h1",{attrs:{id:"_111"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_111"}},[_._v("#")]),_._v(" 111")])])}),[],!1,null,null,null);t.default=r.exports}}]);