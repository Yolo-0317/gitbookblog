# Webpack5 新特性

- 通过持久化硬盘缓存能力来提升构建性能
- 通过更好的算法来改进长期缓存
- 通过更好的 Tree Shaking 能力和代码的生成逻辑来优化产物的大小
- 改善 web 平台的兼容性能力
- 清除了之前版本遗留下来的一些问题
- 通过引入一些重大的变更为未来的一些特性做准备，使得能够长期的稳定在 Webpack5 版本上

- webpack4是根据代码的结构生成chunkhash，添加了空白行或注释，会引起chunkhash的变化
- webpack5是根据内容生成chunkhash，改了注释或者变量不会引起chunkhash的变化，浏览器可以继续使用缓存