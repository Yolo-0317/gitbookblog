# 从 Class 迁移到 Hook

## 生命周期方法要如何对应到 Hook

- constructor  函数组件不需要构造函数  通过调用 useState 来初始化 state

> 如果计算的代价比较昂贵，可以传一个函数给 useState。

- getDerivedStateFromProps   在渲染时 安排一次更新

- shouldComponentUpdate  React.memo

- render 这是函数组件体本身。

- componentDidMount componentDidUpdate  componentWillUnmount : useEffect Hook 可以表达所有这些

- getSnapshotBeforeUpdate  componentDidCatch  getDerivedStateFromError : 目前还没有这些方法的 Hook 等价写法

## 类似实例变量

useRef() Hook 不仅可以用于 DOM refs。「ref」 对象是一个 current 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性

> 推荐把 state 切分成多个 state 变量，每个变量包含的不同值会在同时发生变化。

> 把独立的 state 变量拆分开还有另外的好处。这使得后期把一些相关的逻辑抽取到一个自定义 Hook 变得容易

## 如何获取上一轮的 props 或 state

1. 可以 通过 ref 来手动实现

```js
function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    // 没有依赖项的 effect 将在每轮渲染结束后执行
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return <h1>Now: {count}, before: {prevCount}</h1>;
}
```
