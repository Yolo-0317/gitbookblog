# setState

- 不要直接修改 State，构造函数是唯一可以给 this.state 赋值的地方
- State 的更新可能是异步的，出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用

```jsx
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  // Correct 
  //  setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
```

- State 的更新会被合并

- this.state通常是用来初始化state的
- this.setState是用来修改state值的

直接修改state之后页面是不会更新的  

一个组件的显示形态可以由内部数据状态和外部参数所决定，而数据状态就是state

当需要修改组件的值的状态需要通过调用setState来改变，从而达到更新组件内部数据的作用

setState的更新类型分成：

- 异步更新：组件生命周期或React合成事件
- 同步更新：setTimeout中调用和原生DOM事件中调用

## 调用原理

[](http://yoloworld.site:3000/blogpng/setState.png)
[](http://192.168.2.209:3000/blogpng/setState.png)

- 首先调用了setState 入口函数，入口函数在这里就是充当一个分发器的角色，根据入参的不同，将其分
发到不同的功能函数中去；

- enqueueSetState 方法将新的 state 放进组件的状态队列里，并调用 enqueueUpdate 来处理将要更
新的实例对象

- 在 enqueueUpdate 方法中引出了一个关键的对象——batchingStrategy，该对象所具备
的isBatchingUpdates 属性直接决定了当下是要走更新流程，还是应该排队等待；如果轮到执行，就调
用 batchedUpdates 方法来直接发起更新流程。由此可以推测，batchingStrategy 或许正是 React
内部专门用于管控批量更新的对象。

## React setState 调用之后发生了什么？

- 代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，
- 触发调和过程(Reconciliation)
- 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树
- 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异
- 根据差异对界面进行最小化重渲染

> 在短时间内频繁setState。React会将state的改变压入栈中，在合适的时机，批量更新state和视图，达到提高性能的效果。

## 生命周期的调用

- 在 componentWillMount 中执行 setState 是无意义的，应该将这里的 setState 放到初始化 this.state 的地方去（如 constructor）直接作为 state 的初始值

- 在 componentDidMount 中执行 setState 会导致组件在初始化的时候就触发了更新，渲染了两遍，应该尽量避免

- 在 componentWillUnmount 中执行 setState 不会更新 state，是不生效而且无意义的

- 禁止在 shouldComponentUpdate 和 componentWillUpdate 中调用 setState，这会造成循环调用，直至耗光浏览器内存后崩溃。
因为调用 setState 会再次触发这两个函数，如果在componentWillUpdate中调用，需要增加条件判断

- 在 componentWillReceiveProps 中可以 setState，不会造成二次渲染。由于只有 props 的变化才会触发 componentWillReceiveProps 事件

## React多个setState会调用几次

- React 内部将同一事件响应函数中的多个setState进行合并，减少setState的调用次数，也就能减少渲染的次数，提高性能。
- React 在合并多个setState时，若出现同名属性，会将后面的同名属性覆盖掉前面的同名属性
- 在 React 的合成事件和生命周期函数中直接调用setState，会交由 React 的性能优化机制管理，合并多个setState
- 在原生事件、setTimeout中调用setState，是不受 React 管理的，故并不会合并多个setState，写了几次setState，就会调用几次setState。
