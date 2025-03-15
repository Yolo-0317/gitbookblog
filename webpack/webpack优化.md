# webpack优化

## 优化前端性能

- 压缩代码 删除多余代码、注释、log等
- 利用CDN加速  在构建过程中，用CDN路径对静态资源的引用路径进行替换
- Tree Shaking  剔除多余代码
- Code Splitting 代码切块  将代码按照路由或者组件维度进行分块，获取更小的chunk，充分利用浏览器缓存进行按需加载
- 提取第三方公共库  对公共模块进行抽取，利用浏览器缓存来处理无需频繁变动的公共代码

## CND加速

[CDN知识](https://juejin.cn/post/6913704568325046279)

> CDN的全称是Content Delivery Network，即内容分发网络。由于CDN是为加快网络访问速度而被优化的网络覆盖层，因此被形象地称为“网络加速器”。

CDN可以加快用户访问网络资源的速度和稳定性，减轻源服务器的访问压力。

使用户可就近取得所需内容，解决Internet网络拥挤的状况，提高用户访问网站的响应速度

- CDN节点解决了跨运营商和跨地域访问的问题，访问延时大大降低；
- 大部分请求在CDN边缘节点完成，CDN起到了分流作用，减轻了源站的负载。

## 提高构建速度

- 通过externals配置来提取常用库
- 利用DLL预编译：把复用性较高的第三方模块打包到动态链接库中，在不升级这些库的情况下，动态库不需要重新打包，每次构建只重新打包业务代码
- 使用Happypack实现多线程加速编译
- include、exclude配置项来缩⼩loader的处理范围

在整个 Webpack 构建流程中，最耗时的流程可能就是 Loader 对文件的转换操作, HappyPack 的核心原理就是把这部分任务分解到多个进程去并行处理，从而减少了总的构建时间。

- 提升代码压缩速度
- 使用 Tree-Shaking来剔除多余代码

## Tree shaking

一种通过清除多余代码方式来优化项目打包体积的技术

### 原理

- 基于ES6 Module的静态分析，在模块编译时可以清楚的判断哪些模块被加载到
- 然后对没有用到的模块和变量进行统计，完成对应代码的删除

## DLL

把复用性较高的第三方模块打包到动态链接库中，在不升级这些库的情况下，动态库不需要重新打包，每次构建只重新打包业务代码

## Happypack

```js
new HappyPack({
    id: 'js',
    use: [{
        test: /\.js$/,
        exclude: /node_modules/, // 告诉webpack不处理哪一个文件夹
        loader: 'babel-loader',
        options: {
            presets: [['@babel/preset-env', {
                targets: {
                    // "chrome": "58",
                }
                // useBuiltIns: "usage"
            }]],
            plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                [
                    '@babel/plugin-transform-runtime',
                    {
                        absoluteRuntime: false,
                        corejs: 2,
                        helpers: true,
                        regenerator: true,
                        useESModules: false
                    }
                ]
            ]
        }
    }]
})

{
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'happypack/loader?id=js'
},
```
