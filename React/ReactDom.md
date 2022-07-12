# ReactDom

## render

```js
render(element, container[, callback])
```

- 在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）
- 如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。
- 提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。
