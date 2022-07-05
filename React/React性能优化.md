# React性能优化

- 避免使用内联函数

如果我们使用内联函数，则每次调用render函数时都会创建一个新的函数实例

- 使用React.Fragment避免额外的包裹标签
- 使用immutable数据

Immutable可以给 React 应用带来性能的优化，主要体现在减少渲染的次数
Immutable通过is方法在shouldComponentUpdate中完成对比，而无需通过深度比较的方式

- 对组件进行懒加载

react提供了Suspense和 lazy组件实现代码拆分功能

- 优化事件绑定的方式

不要在render函数中使用bind或者箭头函数对事件进行this绑定，应该在constructor中使用bind或者在组件定义阶段使用箭头函数

- 使用服务器端渲染

