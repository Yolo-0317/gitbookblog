# React类组件的生命周期

## 生命周期有哪些

### 挂载阶段Mount

- constructor
- getDerivedStateFromProps

> 静态方法，不能在这个函数中使用this，会在Mount阶段、setState和forceUpdate时被调用

- render

> 返回  React元素、数组和Fragment片段、字符串、数字、boolean和null

- componentDidMount

### 更新过程 Update

- getDerivedStateFromProps
- shouldComponentsUpdate

> setState在任何情况下都会导致组件的重新渲染

> 如果没有调用setState，props值也没有变化，是不是组件就不会重新渲染；如果是父组件重新渲染，不管传入的props有没有变化，都会引起子组件的重新渲染

- render
- getSnapshotBeforeUpdate
- componentDidUpdate

### 卸载阶段

componentWillUnmount

### 错误处理阶段

componentDidCatch

## 类组件常见生命周期过程

- 挂载阶段，首先执行constructor构造方法，创建组件
- 创建完成，执行render方法，返回需要渲染的内容
- React将需要渲染的内容挂载到DOM树
- 挂载完成之后执行componentDidMount
- 如果给组件创建一个props（用于组件通信）、调用setState（更改state中的数据）、调用forceUpdate（强制更新组件）时，都会重新调用render函数
- render函数执行完成后，重新进行DOM树挂载
- 挂载完成之后执行 componentDidUpdate
- 移除组件时，执行componentWillUmount
