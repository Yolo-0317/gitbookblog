# redux

## 为什么需要Redux

React作为一个组件化开发框架，组件之间存在大量通信，有时这些通信跨越多个组件，或者多个组件之间共享一套数据，简单的父子组件间传值不能满足我们的需求，自然而然地，我们需要有一个地方存取和操作这些公共状态

redux就为我们提供了一种管理公共状态的方案

## react-redux

react-redux提供Provider和connect两个API

- Provider将store放进this.context里
- connect将getState、dispatch合并进了this.props，并自动订阅更新

redux三大原则：

- 单一数据源
- state是只读的
- 使用纯函数reducer来修改
