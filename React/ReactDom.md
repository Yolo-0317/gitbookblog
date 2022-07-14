# ReactDom

## createPortal()

创建 portal。Portal 提供了一种将子节点渲染到已有 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。

```js
createPortal(child, container)
```

## flushSync

强制 React 同步刷新提供的回调函数中的任何更新。这确保了 DOM 会被立即 更新

```js
flushSync(callback)
```

```js
// Force this state update to be synchronous.
flushSync(() => {
  setCount(count + 1);
});
// By this point, DOM is updated.
```

- flushSync 会对性能产生很大影响。尽量少用。

## render

```js
render(element, container[, callback])
```

> 在 React 18 中，render 函数已被 createRoot 函数所取代。具体请参阅 createRoot 以了解更多。

- 在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）
- 如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。
- 提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

## findDOMNode

使用ref替代
