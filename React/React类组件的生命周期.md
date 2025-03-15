# React类组件的生命周期

## 生命周期有哪些

- constructor
- static getDerivedStateFromProps(props, state)
- render
- componentDidMount
- componentDidUpdate

### 不常用的生命周期方法

它们偶尔会很方便，但是大部分情况下组件可能都不需要它们

- shouldComponentUpdate(nextProps, nextState)
- static getDerivedStateFromProps(props, state)
- getSnapshotBeforeUpdate(prevProps, prevState)
- static getDerivedStateFromError()
- componentDidCatch()

### 挂载阶段Mount

- 1. constructor

如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数

在为 React.Component 子类实现构造函数时，应在其他语句之前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。

构造函数仅用于以下两种情况：

- 通过给 this.state 赋值对象来初始化内部 state，不要调用 setState() 方法
- 为事件处理函数绑定实例

> 避免将 props 的值复制给 state！这是一个常见的错误：

```jsx
  constructor(props) {
    super(props);
    // 不要这样做  更新 prop 中的 color 时，并不会影响 state，只有在你刻意忽略 prop 更新的情况下使用
    this.state = { color: props.color };
  }
```

- 2. static getDerivedStateFromProps(props, state)(不常用)

> 静态方法，不能在这个函数中使用this，会在Mount阶段、setState和forceUpdate时被调用

- 3. render

是 class 组件中唯一必须实现的方法，render() 函数应该为纯函数  

返回以下类型之一：

- React 元素。通常通过 JSX 创建。例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件，无论是 <div /> 还是 <MyComponent /> 均为 React 元素。
- 数组或 fragments。 使得 render 方法可以返回多个元素
- Portals。可以渲染子节点到不同的 DOM 子树中。
- 字符串或数值类型。它们在 DOM 中会被渲染为文本节点
- 布尔类型或 null。什么都不渲染

> 如果 shouldComponentUpdate() 返回 false，则不会调用 render()。

- 4. componentDidMount

  - 会在组件挂载后（插入 DOM 树中）立即调用  
  - 依赖于 DOM 节点的初始化应该放在这里  
  - 如需通过网络请求获取数据，此处是实例化请求的好地方
  - 这个方法是比较适合添加订阅的地方

可以在 componentDidMount() 里直接调用 setState()。但是将触发额外渲染，导致render() 两次调用

### 更新过程 Update

- 1. getDerivedStateFromProps

  - 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用
  - 应返回一个对象来更新 state，如果返回 null 则不更新任何内容

- 2. shouldComponentsUpdate

```js
shouldComponentUpdate(nextProps, nextState)
```

- 首次渲染或使用 forceUpdate() 时不会调用该方法
- 此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug
- 返回 false 并不会阻止子组件在 state 更改时重新渲染。
- 不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能

> setState在任何情况下都会导致组件的重新渲染
> 如果没有调用setState，props值也没有变化，是不是组件就不会重新渲染；如果是父组件重新渲染，不管传入的props有没有变化，都会引起子组件的重新渲染

- 3. render
- 4. getSnapshotBeforeUpdate

  - 返回 snapshot 的值（或 null）

- 5. componentDidUpdate(prevProps, prevState, snapshot)

  - 会在更新后会被立即调用
  - 当组件更新后，可以在此处对 DOM 进行操作
  - 可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，否则会导致死循

> 如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。

### 卸载阶段

componentWillUnmount

### 错误处理阶段

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法

- static getDerivedStateFromError(error)
  - 会在后代组件抛出错误后被调用
  - 抛出的错误作为参数，并返回一个值以更新 state
  
- componentDidCatch(error, info)
  - error：抛出的错误
  - info：带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息

## 类组件常见生命周期过程

- 挂载阶段，首先执行constructor构造方法，创建组件
- 创建完成，执行render方法，返回需要渲染的元素
- React将需要渲染的内容挂载到DOM树
- 挂载完成之后执行componentDidMount
- 如果给组件创建一个props（用于组件通信）、调用setState（更改state中的数据）、调用forceUpdate（强制更新组件）时，都会重新调用render函数
- render函数执行完成后，重新进行DOM树挂载
- 挂载完成之后执行 componentDidUpdate
- 移除组件时，执行componentWillUmount
