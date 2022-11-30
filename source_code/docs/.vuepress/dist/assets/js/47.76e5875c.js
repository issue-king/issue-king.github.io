(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{361:function(s,e,a){"use strict";a.r(e);var t=a(7),v=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),e("h2",{attrs:{id:"_1、redis-集群配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、redis-集群配置"}},[s._v("#")]),s._v(" 1、Redis 集群配置")]),s._v(" "),e("blockquote",[e("p",[s._v("Redis集群是一个由多个节点组成的分布式服务器集群，具有复制、高可用、分片特性")]),s._v(" "),e("p",[s._v("Redis集群没有中心节点，并且带有复制和故障转移特性，这可以避免单个节点成为性能瓶颈，或者因为某个节点下线导致整个集群下线")]),s._v(" "),e("p",[s._v("集群中的主节点负责处理存储数据，从节点是主节点的复制品")]),s._v(" "),e("p",[s._v("复制原理：")]),s._v(" "),e("p",[s._v("Slave从机启动成功连接到Master主机后，会向Master发送一个sync同步命令")]),s._v(" "),e("p",[s._v("Master接收到命令后，启动后台的存盘进程， 同时收集所有接受到的用于修改数据集指令 ，在后台进程执行完毕之后，Master将传送整个数据文件（全量复制）到Slave，完成一次性同步")]),s._v(" "),e("ul",[e("li",[s._v("全量复制：Slave服务在接收数据文件后，将其存盘并加载到内存中")]),s._v(" "),e("li",[s._v("增量复制：Master继续将新的所有修改命令一次传给Slave，完成同步")])]),s._v(" "),e("p",[s._v("哨兵模式")]),s._v(" "),e("p",[s._v("哨兵是一个单独的进程，作为进程会独立运行\n原理：哨兵通过发送命令，等待redis服务器响应，从而监控运行的多个redis实例，当哨兵检测到Master宕机，会自动将Slave切换到Master，然后通过发布订阅模式通知其他的从服务器，修改配置文件，切换到主机")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一主多从 ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#准备工作：准备4台redis，端口分别是6380、6381、6382、6383")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分别启动四台redis")]),s._v("\nredis-server redis.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#四台机器分别进行连接：")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" xxxx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" xxxxxx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# info replication 查看redis信息，可以看到 当前节点时主节点开始从节点，还有当前连接的从节点的个数等信息")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6381节点使用slaveof命令找寻主节点6380")]),s._v("\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置为从节点之后是不能再写入数据的，会提示READONLY")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果停止主节点6380，则需要把其中一个redis替换为主服务器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6381 停止复制，并把自己改为主服务器")]),s._v("\nsalveof no one\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6382 和 6383 更改主服务器")]),s._v("\nsalveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#哨兵模式 自动更改主服务器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1、新建哨兵的配置文件 sentinel.conf  ")]),s._v("\nsentinel monitor redis6380 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6382")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsentinel monitor "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("master-group-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("quorum"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当这些quorum个数sentinel哨兵认为master主节点失联 那么这时 客观上认为主节点失联了")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为了正常选举，哨兵数量应该是基数，并且最少启动三个")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动哨兵的命令  默认端口26379")]),s._v("\nredis-sentinel sentinel.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/08/17/q4vMwR5PS9ZxHKB.png",alt:"image-20220817112500871"}})]),s._v(" "),e("blockquote",[e("p",[s._v("集群")]),s._v(" "),e("p",[s._v("四个节点，主从节点会自动分配")]),s._v(" "),e("p",[s._v("主节点故障后，从节点会自动替换主节点")]),s._v(" "),e("p",[s._v("步骤：")]),s._v(" "),e("p",[s._v("1、修改配置文件，增加集群配置")]),s._v(" "),e("p",[s._v("cluster-enabled yes\ncluster-config-file node-6380.conf  #启动会自动生成的文件")]),s._v(" "),e("p",[s._v("2、启动各个节点")]),s._v(" "),e("p",[s._v("3、客户端创建集群")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),s._v(" create "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.50")]),s._v(".182.147:6380  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.182")]),s._v(".147:6381  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.50")]),s._v(".182.147:6382  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.50")]),s._v(".182.147:6383  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.50")]),s._v(".182.147:6384  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.50")]),s._v(".182.147:6385 --cluster-replicas "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、连接集群")]),s._v(" "),e("p",[s._v("redis-cli -c -p 6380 -h 127.0.0.1  主要是加-c的参数")]),s._v(" "),e("p",[s._v("注意：创建集群的redis不能含有数据，否则会报错[ERR] Node xxx is not empty.")]),s._v(" "),e("p",[s._v("注意：如果集群启动之后，查询状态为fail或者无法set数据，插槽报错，需要重新分配插槽，命令如下")]),s._v(" "),e("p",[s._v("redis-cli --cluster fix ip:port")]),s._v(" "),e("p",[s._v("集群的常用命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("cluster info \ncluster "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("h2",{attrs:{id:"_2、redis-过期键删除策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、redis-过期键删除策略"}},[s._v("#")]),s._v(" 2、Redis 过期键删除策略")]),s._v(" "),e("blockquote",[e("p",[s._v("常见的有三种删除策略")]),s._v(" "),e("p",[s._v("1、定时删除：在创建带有过期时间的key时，同时创建一个定时器，定时器到时间之后直接删除已经过期的key")]),s._v(" "),e("p",[s._v("2、惰性删除：key过期之后并不会在内存中删除，而是改变这个key或者使用这个key时才进行删除")]),s._v(" "),e("p",[s._v("3、定期删除：每隔一段时间从内存中取出部分key，判断是否过期，如果过期则删除")])]),s._v(" "),e("p",[e("strong",[s._v("Redis使用的是惰性删除+定期删除的策略")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("惰性删除的实现")]),s._v("：由expireIfNeeded函数实现，所有读写数据库的Redis命令在执行之前都会调用expireIfNeeded函数对输入键进行检查，如果键过期，则删除并返回空，如果键不过期，则不操作")]),s._v(" "),e("p",[e("strong",[s._v("定期删除的实现")]),s._v("：由activeExpireCycle函数实现，被调用时，它在规定的时间内，分多次遍历服务器的各个数据库，从数据库的expires字典表中随机检查一部分键的过期时间，并删除其中的过期键。")]),s._v(" "),e("ul",[e("li",[s._v("函数每次运行时，都是从一定数量的数据库键中随机取一定数量的键进行检查，并删除其中的过期键")]),s._v(" "),e("li",[s._v("有一个全局变量current_db会记录当前activeExpireCycle函数检查的进度，并在下一次函数执行时，接着上一次的进度进行处理。如：当前activeExpireCycle函数执行到了10，将current_db=10；下一次执行函数时，从10开始继续执行。")]),s._v(" "),e("li",[s._v("当所有数据库的键都被检查完时，current_db置为0")])]),s._v(" "),e("p",[e("strong",[s._v("定期删除的具体代码实现")]),s._v("：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Redis读取配置文件hz的值，也就是每10s执行一次搜索，"),e("strong",[s._v("serverCron()->databaseCron()->activeExpireCycle()")])])]),s._v(" "),e("li",[e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/08/23/FGyWUYqm6klO9aK.png",alt:"image-20220819162752973"}})])]),s._v(" "),e("li",[e("p",[s._v("activeExpireCycle方法对每个expire[*]进行检查，每次检查时间为250ms/hz  (默认25ms)")])]),s._v(" "),e("li",[e("p",[s._v("对某个expire[*]进行检查时，随机挑选出"),e("strong",[s._v("W")]),s._v("个key检查，W取值ACTIVE_EXPIRE_CYCLE_LOOKUPS_PRE_LOOP默认值为20")])]),s._v(" "),e("li",[e("p",[s._v("检查时，如果key过期则删除，如果删除的个数 25%,则循环该过程，如果删除的小与25%，则检查下一个expire[*],0-15循环，直到本次检查时间超过25ms（默认）")])])])]),s._v(" "),e("p",[e("strong",[s._v("AOF、RDB、复制功能对过期键的处理")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("AOF")]),s._v(" "),e("ul",[e("li",[s._v("写入：当服务器开启AOF模式运行时，如果某个键过期了，但没有被惰性删除或者定期删除，那么AOF不会理会这个key，如果被惰性删除或者定期删除了，则会在AOF文件末尾追加一个DEL语句")]),s._v(" "),e("li",[s._v("重写：当AOF重写时，过期的键不会被载入到redis内存中")])])]),s._v(" "),e("li",[e("p",[s._v("RDB")]),s._v(" "),e("ul",[e("li",[s._v("生成RDB：过期的键不会载入到RDB文件中")]),s._v(" "),e("li",[s._v("加载RDB：如果服务器是主服务器，加载RDB时，过期的键会被过滤掉，不会被载入内存中；如果是从服务器运行，任何数据都会被载入内存，但是由于服务器会进行主从同步，所以同步时过期键会被清空。")])])]),s._v(" "),e("li",[e("p",[s._v("复制：在复制模式下，删除过期键的操作都是主服务器完成的")]),s._v(" "),e("ul",[e("li",[s._v("主服务器在删除一个过期键后，会向所有从服务器发送一个DEL命令，告知从服务器删除这个过期键")]),s._v(" "),e("li",[s._v("从服务器在执行客户端发送的命令时，即使碰到过期的键也不会删除，而是正常的继续操作")]),s._v(" "),e("li",[s._v("从服务器只有在接到主服务器发来的DEL命令之后，才会删除过期键")])]),s._v(" "),e("blockquote",[e("p",[s._v("Q&A :从服务器不会主动删除过期键，那如果查询从服务器的过期键怎么办？")]),s._v(" "),e("p",[s._v("大致操作：从节点使用逻辑时钟记录一下本该过期的Key，等待着master的del命令，被缓存的本该过期的key即使被查询也不会返回。")])])])]),s._v(" "),e("h2",{attrs:{id:"_3、redis内存淘汰策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、redis内存淘汰策略"}},[s._v("#")]),s._v(" 3、Redis内存淘汰策略")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("noeviction( "),e("strong",[s._v("Redis 的默认策略")]),s._v(")")]),s._v(" "),e("blockquote",[e("p",[s._v("不会淘汰任何数据，当使用的内存空间超过 "),e("code",[s._v("maxmemory")]),s._v(" 值时，返回错误；")])])]),s._v(" "),e("li",[e("p",[s._v("volatile-ttl")]),s._v(" "),e("blockquote",[e("p",[s._v("筛选设置了过期时间的键值对，越早过期的越先被删除；")])])]),s._v(" "),e("li",[e("p",[s._v("volatile-random")]),s._v(" "),e("blockquote",[e("p",[s._v("筛选设置了过期时间的键值对，随机删除；")])])]),s._v(" "),e("li",[e("p",[s._v("volatile-lru")]),s._v(" "),e("blockquote",[e("p",[s._v("使用 "),e("code",[s._v("LRU")]),s._v(" 算法筛选设置了过期时间的键值对;")]),s._v(" "),e("p",[e("code",[s._v("LRU")]),s._v(" 算法全称 "),e("code",[s._v("Least Recently Used")]),s._v("，一种常见的页面置换算法。按照「"),e("strong",[s._v("最近最少使用")]),s._v("」的原则来筛选数据，筛选出最不常用的数据，而最近频繁使用的数据会留在缓存中")]),s._v(" "),e("p",[e("strong",[s._v("LRU算法思想：基于链表实现")])]),s._v(" "),e("p",[s._v("把所有数据组织为一个链表，链表的表头（MRU）和表尾（LRU），代表【最近常用】和【最近不常用】")]),s._v(" "),e("p",[s._v("新加入的数据和被访问的数据都移动到表头（MRU）端，如果新加入数据时，内存空间不够，则把表尾的数据删除，并把新加入的数据放入表头")]),s._v(" "),e("p",[e("strong",[s._v("Redis对于LRU的实现")]),s._v("：")]),s._v(" "),e("p",[s._v("redis会记录每个数据的最近一次访问的时间戳，(由键值对数据结构RedisObject中的lru字段记录)")]),s._v(" "),e("p",[s._v("然后redis在决定淘汰数据的时候，第一次随机选出N个数据，把它们作为一个候选合集，接下来，redis在比较N个数据的lru字段，把lru字段值最小的数据从缓存中淘汰出去")]),s._v(" "),e("p",[s._v("redis有一个配置参数"),e("code",[s._v("maxmemory-samples")]),s._v("就是备选数据个数")]),s._v(" "),e("p",[s._v("当再次需要淘汰数据时，redis需要挑选数据进入【第一次淘汰时创建的候选集合】")]),s._v(" "),e("p",[s._v("挑选的标准是："),e("code",[s._v("能进入候选集合的数据的lru字段值必须小于候选集合中的最小lru值")])])])]),s._v(" "),e("li",[e("p",[s._v("volatile-lfu")]),s._v(" "),e("blockquote",[e("p",[s._v("使用 "),e("code",[s._v("LFU")]),s._v(" 算法选择设置了过期时间的键值对；")]),s._v(" "),e("p",[s._v("LFU缓存策略是在LRU的基础上，为每个数据增加一个计时器，来统计这个数据被访问的次数。")]),s._v(" "),e("p",[s._v("筛选规则：")]),s._v(" "),e("ul",[e("li",[s._v("首先根据数据的访问次数进行筛选，把访问次数最低的淘汰出内存")]),s._v(" "),e("li",[s._v("再比较数据的访问时效性（LRU），把距离上一次访问时间更久的数据淘汰出内存")])]),s._v(" "),e("p",[s._v("LFU的具体实现：")]),s._v(" "),e("ul",[e("li",[s._v("redis在RedisObject结构中设置了lru字段，记录数据访问的时间戳")]),s._v(" "),e("li",[s._v("LFU把原先的24bit的lru字段分成了两部分，ldt（16bit）表示访问的时间戳和counter（8bit）表示数据的访问次数")])]),s._v(" "),e("p",[s._v("举例：假设数据A的累计访问次数是256，访问的时间戳是202208201104，count是255")]),s._v(" "),e("p",[e("code",[s._v("8bit的数据记录访问次数，所以最大值只能是255")])]),s._v(" "),e("p",[s._v("由于最大值的限制，所以redis在这一方面进行了优化：")]),s._v(" "),e("p",[s._v("并不是在访问一次的时候就直接counter加1，而是采用了一个配置项的规则：")]),s._v(" "),e("ul",[e("li",[s._v("每当数据被访问时，先用【计数器当时的值】乘以【配置项】("),e("code",[s._v("lfu_log_factor")]),s._v(")，再加1，取其倒数，得到一个P值，")]),s._v(" "),e("li",[s._v("然后把P和一个取值范围再(0，1)之间的随机数r比大小，只有P大于1时，计数器才加1")])]),s._v(" "),e("p",[s._v("redis的部分源码")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" r "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RAND_MAX")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseval"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lfu_log_factor"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" counter"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("其中，baseval是计数器当时的值，（"),e("code",[s._v("计数器初始值为5，而不是0，这样可以避免数据刚被写入缓存就因为访问次数少而被立即淘汰")]),s._v("）")]),s._v(" "),e("p",[s._v("使用了这种规则后，可以设置不同的lfu_log_factor值，来避免counter很快的到达255")]),s._v(" "),e("p",[s._v("redis官网提供了一张表，来展示lfu_log_factor再不同值时，countor到达255的时间")]),s._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220820111419346.png",alt:"image-20220820111419346"}})]),s._v(" "),e("p",[s._v("从刚才的表中，我们可以看到，当 "),e("code",[s._v("lfu_log_factor")]),s._v(" 取值为 10 时，百、千、十万级别的访问次数对应的 counter 值已经有明显的区分了。所以，我们在应用 "),e("code",[s._v("LFU")]),s._v(" 策略时，一般可以将 "),e("code",[s._v("lfu_log_factor")]),s._v(" 取值为 10。")]),s._v(" "),e("p",[s._v("但是还有很多的业务场景：有些数据再短时间内被大量访问后，就不会再被访问了，这种如果再次按照访问次数来筛选的话，这些数据就会被留在缓存中，但是不会提高缓存命中率，为此：LFU还设计了一个"),e("code",[s._v("counter的衰减机制")])]),s._v(" "),e("p",[s._v("LFU使用衰减因子配置项【lfu_decay_time】来控制访问次数的衰减")]),s._v(" "),e("ul",[e("li",[s._v("LFU策略会计算"),e("code",[s._v("当前时间和数据最近一次访问时间的差值，并把这个差值换算成以分钟为单位")])]),s._v(" "),e("li",[s._v("LFU策略再把这个差值除以"),e("code",[s._v("lfu_decay_time")]),s._v("值，所得的结果就是counter衰减的值")])]),s._v(" "),e("p",[s._v("举例：lfu_decay_time设置为1，如果数据A在N分钟内没有被访问，那么A的访问次数就要被减少N，如果lfu_decay_time的值设置的更大，那么相应的衰减值就会被减少，衰减效果减弱，所以如果业务中有短时高频访问的数据，建议把lfu_decay_time设置为1.")])])]),s._v(" "),e("li",[e("p",[s._v("allkeys-random")]),s._v(" "),e("blockquote",[e("p",[s._v("在所有键值对中，随机选择并删除数据；")])])]),s._v(" "),e("li",[e("p",[s._v("allkeys-lru")]),s._v(" "),e("blockquote",[e("p",[s._v("使用 "),e("code",[s._v("LRU")]),s._v(" 算法在所有数据中进行筛选；")])])]),s._v(" "),e("li",[e("p",[s._v("allkeys-lfu")]),s._v(" "),e("blockquote",[e("p",[s._v("使用 "),e("code",[s._v("LFU")]),s._v(" 算法在所有数据中进行筛选。")])])])]),s._v(" "),e("h2",{attrs:{id:"_4、redis持久化策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、redis持久化策略"}},[s._v("#")]),s._v(" 4、Redis持久化策略")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("RDB")]),s._v(" "),e("blockquote",[e("p",[s._v("Redis DataBase")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("如何备份？")]),s._v(" "),e("blockquote",[e("p",[s._v("1、redis会单独创建一个子进程（fork主进程）进行持久化，会先将数据临时写道临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化的文件。整个过程中，主进程不进行任何的IO操作，确保了极高的性能")]),s._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220820141428434.png",alt:"image-20220820141428434"}})])])]),s._v(" "),e("li",[e("p",[s._v("触发方式")]),s._v(" "),e("blockquote",[e("p",[s._v("1、自动触发")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#save 负责触发redis的rdb持久化条件，表示20秒内数据集存在3次修改，自动触发bgsave指令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#save "" 表示不使用rdb持久化')]),s._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认值为yes，表示：当启动了RDB之后且最后一次后台保存数据失败，redis是否停止接收数据，这会让用户意识到数据没有正确持久化到磁盘上，否则没人意识到这个情况。如果redis重启了，那么又可以重新开始接收数据了")]),s._v("\nstop-writes-on-bgsave-error:yes\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认值为yes，表示：对于存储到磁盘中的快照，可以设置是否进行压缩存储，如果是，则会采用LZF算法进行压缩（会消耗CPU资源），否则不进行压缩，磁盘文件会比较大")]),s._v("\nrdbcompression:yes\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认值yes，从RDB快照功能的version 5 版本开始，一个64位的CRC冗余校验编码会被放置在RDB文件的末尾，以便对整个RDB文件的完整性进行验证。这个功能大概会多损失10%左右的性能，但获得了更高的数据可靠性。所以如果您的Redis服务需要追求极致的性能，就可以将这个选项设置为no")]),s._v("\nrdbchecksum：yes\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#快照的文件名，默认dump.rdb")]),s._v("\ndbfilename：dump.rdb\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#快照的存放路径，这个配置项一定是一个目录，默认设置为“./”，也就是Redis服务的主目录。")]),s._v("\ndir：\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("2、手动触发")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("save")]),s._v(" "),e("blockquote",[e("p",[s._v("会阻塞当前的redis服务器，执行save命令期间，redis不能执行别的命令，直到rdb过程完成为止")])])]),s._v(" "),e("li",[e("p",[s._v("bgsave")]),s._v(" "),e("blockquote",[e("p",[s._v("执行bgsave，redis会在后台异步进行快照操作，快照同时还可以响应客户端请求。具体操作是redis进程执行fork操作创建子进程，rdb持久化过程由子进程负责，完成后自动结束。阻塞只发生在fork阶段，一般时间很短。")])])])])])]),s._v(" "),e("li",[e("p",[s._v("数据恢复")]),s._v(" "),e("blockquote",[e("p",[s._v("将备份文件dump.rdb移动到redis的安装目录，并启动服务即可，redis会自动加载文件数据到内存，在加载rdb文件过程中，redis服务会一直处于阻塞状态，直到载入工作完成为止")])])]),s._v(" "),e("li",[e("p",[s._v("优缺点")]),s._v(" "),e("blockquote",[e("p",[s._v("优点：\n1、RDB生成的文件是一个非常紧凑的文件，保存了redis某个时间点上的数据集，这种文件非常试合进行备份和灾难恢复")]),s._v(" "),e("p",[s._v("2、RDB的持久化过程是fork子进程的方式进行，主进程不需要IO操作")]),s._v(" "),e("p",[s._v("3、RDB恢复大数据集时的速度高于AOF")]),s._v(" "),e("p",[s._v("缺点：")]),s._v(" "),e("p",[s._v("1、RDB无法做到实时持久化，在一定间隔进行备份的话，有可能会丢失间隔时间内的数据")]),s._v(" "),e("p",[s._v("2、RDB文件使用特定的二进制格式保存，Redis版本演进过程中会有多个格式的RDB版本，存在老版本的RDB文件无法兼容新版本的RDB格式问题")])])]),s._v(" "),e("li",[e("p",[s._v("深入理解")]),s._v(" "),e("blockquote",[e("p",[s._v("RDB中的核心思路是Copy-on-Write，来保证在进行快照操作的这段时间，需要压缩写入磁盘上的数据在内存中不会发生变化。在正常的快照操作中，一方面Redis主进程会fork一个新的快照进程专门来做这个事情，这样保证了Redis服务不会停止对客户端包括写请求在内的任何响应。另一方面这段时间发生的数据变化会以副本的方式存放在另一个新的内存区域，待快照操作结束后才会同步到原来的内存区域。")])])])])])]),s._v(" "),e("li",[e("p",[s._v("AOF")]),s._v(" "),e("blockquote",[e("p",[s._v("Append of File")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("如何备份？")]),s._v(" "),e("blockquote",[e("p",[s._v("以日志的形式来记录每个写操作（增量操作），将Redis执行过的所有写指令保存下来，只追加文件，不改写文件。redis启动之初会读取该文件重新构造数据。")]),s._v(" "),e("p",[s._v("同步策略：")]),s._v(" "),e("p",[e("code",[s._v("为了提高文件写入效率，在现代操作系统中，当用户调用write函数，将一些数据写入文件时，操作系统通常会将数据暂存到一个内存缓冲区里，当缓冲区的空间被填满或超过了指定时限后，才真正将缓冲区的数据写入到磁盘里。")])]),s._v(" "),e("p",[e("code",[s._v("这样的操作虽然提高了效率，但也为数据写入带来了安全问题：如果计算机停机，内存缓冲区中的数据会丢失。为此，系统提供了fsync、fdatasync同步函数，可以强制操作系统立刻将缓冲区中的数据写入到硬盘里，从而确保写入数据的安全性。")])])])]),s._v(" "),e("li",[e("p",[s._v("持久化过程\n"),e("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220820150446431.png",alt:"image-20220820150446431"}})]),s._v(" "),e("blockquote",[e("p",[s._v("1、客户端的请求写命令会被append追加到AOF缓冲区内")]),s._v(" "),e("p",[s._v("2、AOF缓冲区根据AOF持久化策略[always、everysec、no]将操作sync同步到磁盘的AOF文件中")]),s._v(" "),e("p",[s._v("3、AOF文件大小超过重写策略或者手动重写时，会对AOF文件rewrite重写，压缩AOF文件容量")]),s._v(" "),e("p",[s._v("4、Redis服务重启时，会重新load加载AOF文件中的写操作达到数据恢复的目的")])])]),s._v(" "),e("li",[e("p",[s._v("相关命令")]),s._v(" "),e("blockquote",[e("p",[s._v("#AOF默认不开启")]),s._v(" "),e("p",[s._v("appendonly yes")]),s._v(" "),e("p",[s._v("#AOF文件名 \\aof文件的保存路径同RDB路径一致")]),s._v(" "),e("p",[s._v('appendfilename "appendonly.aof"')]),s._v(" "),e("p",[s._v("#RDB和AOF同时开启，系统默认获取AOF文件的内容")]),s._v(" "),e("p",[s._v("#AOF同步频率 always 每次的写入都会立即写入日志 | everysec 每秒同步一次  | no redis不主动同步,只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘\nappendfsync  everysec")]),s._v(" "),e("p",[s._v("#aof重写期间是否同步")]),s._v(" "),e("p",[s._v("no-appendfsync-on-rewrite no")]),s._v(" "),e("p",[s._v("#重写触发配置")]),s._v(" "),e("p",[s._v("auto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb")]),s._v(" "),e("p",[s._v("#加载aof出错如何处理")]),s._v(" "),e("p",[s._v("aof-load-truncated yes")]),s._v(" "),e("p",[s._v("#文件重写策略")]),s._v(" "),e("p",[s._v("aof-rewrite-incremental-fsync yes")])])]),s._v(" "),e("li",[e("p",[s._v("AOF启动、恢复、修复")]),s._v(" "),e("blockquote",[e("p",[s._v("1、启动：启动系统加载AOF文件")]),s._v(" "),e("p",[s._v("2、异常恢复：如果遇到AOF文件损坏，通过/usr/lcoal/bin/redis-check-aof-fix appendonly.aof进行恢复，然后备份被写坏的AOF文件，重启redis进行加载数据")])])])])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);