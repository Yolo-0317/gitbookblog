# webpack 打包原理

## 构建流程

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数
2. 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译
3. 确定入口：根据配置中的 entry 找出所有的入口文件。
4. 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
7. 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

中文文档：<https://webpack.docschina.org/concepts/>

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)

> 当 webpack 处理应用程序时,它会递归地构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块,然后将所有这些模块打包成一个或多个 bundle

webpack 核心概念

从 v4.0.0 开始，webpack 可以不用再引入一个配置文件来打包项目，然而，它仍然有着 高度可配置性

## entry

入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

- 用法：entry: string | [string]
- 用法：entry: { <entryChunkName> string | [string] } | {} 对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。

``` js
  module.exports = {
    entry: {
      app: './src/app.js',
      adminApp: './src/adminApp.js',
    },
  };

```

## output

告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件

主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。

1. 最简单用法，对应一个 entry 的配置：

``` js
 // 此配置将一个单独的 bundle.js 文件输出到 dist 目录中。
  module.exports = {
    output: {
      filename: 'bundle.js',
    },
  };
```

2. 对于多入口配置

``` js
// 会输出 ./dist/app.js, ./dist/search.js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
};
```

## loader

loader 用于对模块的源代码进行转换

loader 可以使你在 import 或 "load(加载)" 模块时预处理文件

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript），比如less，css，png，svg，字体文件等。

有两种使用 loader 的方式:

- 配置方式（推荐）：在 webpack.config.js 文件中指定 loader。

module.rules 允许你在 webpack 配置中指定多个 loader。 这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护

> loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)

- 内联方式：在每个 import 语句中显式指定 loader。

``` js
// 内联方式
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

通过为内联 import 语句添加前缀，可以覆盖 配置 中的所有 loader, preLoader 和 postLoader：

- 使用 ! 前缀，将禁用所有已配置的 normal loader(普通 loader)

``` js
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

- 使用 !! 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）

``` js
import Styles from '!!style-loader!css-loader?modules!./styles.css';
```

- 使用 -! 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders

``` js
import Styles from '-!style-loader!css-loader?modules!./styles.css';
```

### loader 特性

- loader 支持链式调用
- loader 可以是同步的，也可以是异步的
- loader 运行在 Node.js 中，并且能够执行任何操作
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。

### plugin

插件 是 webpack 的 支柱 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 相同的插件系统 之上！

插件目的在于解决 loader 无法实现的其他事。Webpack 提供很多开箱即用的 插件。

- 用法：
由于插件可以携带参数/选项，必须在 webpack 配置中，向 plugins 属性传入一个 new 实例

1. 配置方式

``` js
plugins: [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({ template: './src/index.html' }),
]
```

2. Node API 方式

通过配置中的 plugins 属性传入插件

``` js
const webpack = require('webpack'); // 访问 webpack 运行时(runtime)
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  // ...
});

```

#### 常用plugin

[https://www.html.cn/web/javascript/19320.html](https://www.html.cn/web/javascript/19320.html)

##### html-webpack-plugin

生成html文件，负责将webpack打包的chunk文件和css样式插入到指定的template中

##### min-css-extract-plugin

将css抽离成独立的文件，这个插件应只用于生产环境配置，loaders链中不使用style-loader

##### DefinePlugin

webpack自带插件，定义一些全局变量

### loader与插件的区别

loader：webpack自身只支持js和json这两种格式的文件，对于其他文件需要通过loader将其转换后，webpack才能解析到

plugins：

- 能够被用于执行更广泛的任务比如打包优化、文件管理、环境注入等
- 是用于在webpack打包编译过程里，在对应的事件节点里执行自定义操作，比如资源管理、bundle文件优化等操作

### polyfill

https://juejin.cn/post/6844904063402770439