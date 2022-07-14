# redux

redux 实现了对React组件状态集中管理的容器

遵循三大原则：

- 单一数据源
- state是只读的
- 使用纯函数reducer来修改state

## 为什么需要Redux

React作为一个组件化开发框架，组件之间存在大量通信，有时这些通信跨越多个组件，或者多个组件之间共享一套数据，简单的父子组件间传值不能满足我们的需求，自然而然地，我们需要有一个地方存取和操作这些公共状态

redux就为我们提供了一种管理公共状态的方案

## react-redux

react-redux提供Provider和connect两个API

- Provider将store放进this.context里
- connect将getState、dispatch合并进了this.props，并自动订阅更新

## 工作原理

redux要求我们把数据都放在 store公共存储空间  

一个组件改变了 store 里的数据内容，其他组件就能感知到 store的变化，再来取数据，从而间接的实现了这些数据传递的功能

## 中间件

Redux中，中间件就是放在就是在dispatch过程，在分发action进行拦截处理，其本质上一个函数，对store.dispatch方法进行了改造，在发出 Action和执行 Reducer这两步之间，添加了其他功能

## 常用中间件

- redux-thunk：用于异步操作
- redux-logger：用于日志记录
