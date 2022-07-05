# Introduction

[git仓库地址：https://github.com/Yolo-0317/gitbookblog](https://github.com/Yolo-0317/gitbookblog)

[安装：npm install -g gitbook-cli](https://juejin.cn/post/6844903991814406158#1002)

 ```js
 //查看gitbook的版本
  gitbook -V

# 下载历史版本[下载3.0.0版本]
# 3.2.3版本为不可用版本, 推荐使用3.0.0
gitbook fetch 3.0.0

  //初始化一个项目
  gitbook init

  //列出所有的gitbook的命令
  gitbook help

  //显示gitbook-cli的帮助信息
  gitbook --help

  // 生成静态页面html
  gitbook build

  //生成静态网页并且启动本地的一个server
  gitbook serve --gitbook=3.0.0

  //列出本地所有gitbook的版本
  //列出远端可用的gitbook的最新版本
  gitbook ls
  gitbook ls-remote

  //更新到gitbook最新的版本
  gitbook update

  //卸载对应的gitbook版本
  gitbook uninstall 2.0.1

  //指定log的级别
  gitbook build --log=debug

  //输出错误信息
  gitbook build --debug

  //gitbook安装插件
  gitbook install ./
 ```
