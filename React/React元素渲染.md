# React元素渲染

> 元素是构成 React 应用的最小块。组件是由元素构成的。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

元素描述了在屏幕上想看到的内容。

```jsx
const element = <h1>Hello, world</h1>;
```

与浏览器的DOM不同，React元素是创建开销极小的普通对象。React DOM负责更新真实DOM来与React元素保持一致

## 将一个元素渲染为 DOM

```html
<!-- “根” DOM 节点，该节点内的所有内容都将由 React DOM 管理 -->
<div id="root"></div>
```

