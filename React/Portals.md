[React中文Partals教程](https://zh-hans.reactjs.org/docs/portals.html)

> Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```javascript
ReactDOM.createPortal(child, container)
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。
```

一个 portal 的典型用例是当父组件有 `overflow: hidden` 或 `z-index` 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框

>当在使用 portal 时, 记住[管理键盘焦点](https://zh-hans.reactjs.org/docs/accessibility.html#programmatically-managing-focus)就变得尤为重要。
>
>对于模态对话框，通过遵循 [WAI-ARIA 模态开发实践](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)，来确保每个人都能够运用它。

**通过 Portal 进行事件冒泡**

尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致



