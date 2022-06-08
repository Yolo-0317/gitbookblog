# 哪些方法会触发 react 重新渲染?

- setState（）方法被调用
当 setState 传入 null 时，并不会触发 render

- 父组件重新渲染

只要父组件重新渲染了，即使传入子组件的 props 未发生变化，那么子组件也会重新渲染，进而触发
render

## 减少不必要的render

- shouldComponentUpdate 和 PureComponent ,来减少因父组件更新而触发子组件的 render
- 利用高阶组件，封装一个类似PureComponent 的功能
- 使用 React.memo，用来缓存组件的渲染，避免不必要的更新；React.memo只能用于函数组件
