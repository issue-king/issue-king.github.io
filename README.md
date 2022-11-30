# 此项目如何搭建
### 1、设置ssh

> 设置ssh的目的是为了提交代码方便

#### 1.1、本地设置ssh

```shell
################ windows 系统  邮箱写自己的 ################
ssh-keygen -t rsa -C “123@email.com”  
#为了省事回车之后弹出的信息可以全部跳过，直接全部回车，自动生成
#生成的目录是 C:\Users\Administrator\.ssh 
# 打开id_rsa.pub文件，复制里面的所有内容
# 打开github，找到自己的ssh设置页面

################ mac 或者linux系统  ################
ssh-keygen -t rsa -C “123@email.com” 
目录是/home/[用户名]/.ssh/id_rsa
```

**1、生成的目录是 C:\Users\Administrator\.ssh** ，打开`id_rsa.pub`文件，复制里面的所有内容

![image-20221130104520722](https://s2.loli.net/2022/11/30/I5Ae9MpkiTdoxSg.png)



**2、打开github，找到自己的ssh设置页面**

![image-20221130104715376](https://s2.loli.net/2022/11/30/LVBQEzeM7atsWS6.png)

**3、新增ssh**

![image-20221130104808157](https://s2.loli.net/2022/11/30/YMeNK8nswSxRhB4.png)

### 2、使用ssh下载项目

```shell
git clone git@github.com:issue-king/issue-king.github.io.git
```

### 3、如何使用

![image-20221130105441661](https://s2.loli.net/2022/11/30/q2kJsSxpWvMeBw3.png)

其中source_code目录可以自己增加博客内容，source_code/docs目录下面可以随意增加文件，编写自己的博客内容

### 4、部署

为了方便，在根目录下增加了自动部署的脚本，适用于windows的bat脚本和mac/linux的sh脚本，每次增加博客之后，可以一键打包构建部署到github

```
使用示例，后面的参数是git提交本次记录的注释信息
deploy.bat 'first commit to github'
```

脚本截图

![image-20221130110057494](https://s2.loli.net/2022/11/30/PrMXRDoqbUmd5KQ.png)

### 5、查看

https://issue-king.github.io/



本项目参考自https://doc.xugaoyi.com/