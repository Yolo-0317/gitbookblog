# gitlab CICD

## 配置gitlab的Runner

1. 如果没有需要安装并注册

## .gitlab-ci.yml

包括：
1.stages-定义阶段：install，build，deploy
2.Cache设置缓存，缓存node_modules加快CICD速度
3.variables设置环境变量
4.before-script 全局前置脚本
5.artifacts 存储前端出包目录dist
6.通过scp将dist传输到服务器指定目录
7.根据缓存的key来共享不同环境的node_modules
