# react hook

## 为什么会出现react hook

1. 在组件之间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的class，class创建组件会遇到this指向的问题

hooks使函数组件具有了一些类组件的能力

hook 的使用规则:

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
- 只能在React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

## useEffect

传给 useEffect 的函数会在浏览器完成布局与绘制之后，在一个延迟事件中被调用

useLayoutEffect 会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染

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
