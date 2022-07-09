# react hook

## 为什么会出现react hook

1. 在组件之间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的class，class创建组件会遇到this指向的问题

hooks使函数组件具有了一些类组件的能力

hook 的使用规则:

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
- 只能在React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

## useState

React 使用 Object.is 比较算法 来比较 state

### state值更新

可以使用值更新和函数式更新两种形式

[两种更新形式的使用场景：https://codesandbox.io/s/vigilant-orla-6zxqld](https://codesandbox.io/s/vigilant-orla-6zxqld)

### 惰性初始 state

initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### `const [count, setCount] = useState(0)`, click事件中，`setTimeout(()=>setCount(count++),1)`, 持续点击，count值是多少？如果想让他更新怎么办？

count++ 相当于 count = count + 1；在react中，不能直接修改state变量，而且对于count++，会先返回++之前的count，然后才执行++，
所以setCount(count++)相当于执行setCount(count)，而++执行后也不会更新count，所以count值一直为0；

如果要让count更新，使用 setCount(count + 1);

```js
  function App() {
    const [count, setCount] = useState(0);
    const onClick = () => {
      setTimeout(() => setCount(count++), 1);
    };

    return (
      <div className="App">
        <button onClick={onClick}>点击</button>
        <div>{count}</div>
      </div>
    );
  }
```

## useEffect

> 默认情况下，effect 将在每轮渲染结束后执行
> 传给 useEffect 的函数会在浏览器完成布局与绘制之后，在一个延迟事件中被调用

useLayoutEffect 会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重新渲染

### effect 的条件执行

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数

除此之外，要确保依赖数组中包含了所有外部作用域中会发生变化且在 effect 中使用的变量

### 清除 effect

```js
// 组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源
// 如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除

useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

## React.memo

function React.memo<object>(Component: React.FunctionComponent<object>, propsAreEqual?: ((prevProps: Readonly<React.PropsWithChildren<object>>, nextProps: Readonly<React.PropsWithChildren<object>>) => boolean) | undefined)

### 第一个参数 Component

React.memo 仅检查 props 变更，组件必须从父组件接收props，第二个参数：propsAreEqual函数才会触发

默认情况下其只会对复杂对象做浅层对比

### 第二个参数 propsAreEqual

接收两个参数：prevProps和nextProps
返回：boolean。如果返回true则组件不会触发rerender，返回false，组件触发rerender。

>此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。

```js
import React, { useState } from 'react';

const Child = (props = {}) => {
  console.log(`--- re-render ---`);
  return (
    <div>
      <p>number is : {props.number.number}</p>
    </div>
  );
};

const isEqual = (prevProps, nextProps) => prevProps.number.number === nextProps.number.number;

const ChildMemo = React.memo((props = {}) => {
  console.log(`--- memo re-render ---`);
  return (
    <div>
      <p>number is : {props.number.number}</p>
    </div>
  );
}, isEqual);

export default (props = {}) => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleSetStep = () => {
    setStep(step + 1);
  };

  const handleSetCount = () => {
    setCount(count + 1);
  };

  const handleCalNumber = () => {
    setNumber(count + step);
  };

  return (
    <div>
      <button onClick={handleSetStep}>step is : {step} </button>
      <button onClick={handleSetCount}>count is : {count} </button>
      <button onClick={handleCalNumber}>numberis : {number} </button>
      <hr />
      <Child number={{ number }} /> <hr />
      <ChildMemo number={{ number }} />
    </div>
  );
};

```
