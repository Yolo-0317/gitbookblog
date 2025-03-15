# 常见loader

loader 用于对模块的"源代码"进行转换，在 import 或"加载"模块时预处理文件

webpack只支持对js 和 json 文件打包，像css、sass、png等这些类型的文件的时候，这时候就需要配置对应的loader进行文件内容的解析

## css-loader

分析 css 模块之间的关系，并合成⼀个 css  
加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性

## style-loader

把 css-loader 生成的内容，用 style 标签挂载到页面的 head 中  

## babel-loader

把 ES6等新的语法 转换成 ES5

## postcss-loader

用postcss来处理CSS  单位换算

## autoprefixer-loader（弃用）

处理CSS3属性前缀，已被弃用，建议直接使用postcss

## file-loader

把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)
