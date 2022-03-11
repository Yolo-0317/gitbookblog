# setState

一个组件的显示形态可以由内部数据状态和外部参数所决定，而数据状态就是state

当需要修改组件的值的状态需要通过调用setState来改变，从而达到更新组件内部数据的作用

setState的更新类型分成：

- 异步更新：组件生命周期或React合成事件
- 同步更新：setTimeout中调用和原生DOM事件中调用

## 生命周期的调用

- 在 componentWillMount 中执行 setState 是无意义的，应该将这里的 setState 放到初始化 this.state 的地方去（如 constructor）直接作为 state 的初始值

- 在 componentDidMount 中执行 setState 会导致组件在初始化的时候就触发了更新，渲染了两遍，应该尽量避免

- 在 componentWillUnmount 中执行 setState 不会更新 state，是不生效而且无意义的

- 禁止在 shouldComponentUpdate 和 componentWillUpdate 中调用 setState，这会造成循环调用，直至耗光浏览器内存后崩溃。
因为调用 setState 会再次触发这两个函数

- 在 componentWillReceiveProps 中可以 setState，不会造成二次渲染。由于只有 props 的变化才会触发 componentWillReceiveProps 事件
