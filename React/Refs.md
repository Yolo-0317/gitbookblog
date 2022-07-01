# Refs

## refs的作用

用于访问在 render 方法中创建的 React 元素或 DOM 节点

- 处理焦点、文本选择或者媒体的控制
- 触发必要的动画
- 集成第三方 DOM 库

> 函数组件没有实例，因此不能在函数组件上直接使用 ref，如果要在函数组件上使用 ref，你可以使用 forwardRef（可与 useImperativeHandle 结合使用），或者可以将该组件转化为 class 组件

- 不应该过度的使用 Refs
- ref 的返回值取决于节点的类型

## 创建Refs

- React 16.3 版本引入的 React.createRef() API

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

- 回调形式的 refs，

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
      </div>
    );
  }
```

## React如何获取组件对应的DOM元素

- 字符串格式

```jsx
<p ref="info">span</p>
```

- 函数格式
ref对应一个方法，该方法有一个参数，也就是对应的节点实例

```jsx
<p ref={ele => this.info = ele}></p>
```

- createRef方法
React 16提供的一个API，使用React.createRef()来实现

## 访问Refs

```js
  const node = this.myRef.current;
```

- 当 ref 属性用于 HTML 元素时，ref 接收底层 DOM 元素作为其 current 属性
- 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性

## React中可以在render访问refs吗？为什么？

不可以，render 阶段 DOM 还没有生成，无法获取 DOM。
DOM 的获取需要在 pre-commit 阶段和commit 阶段：

- pre-commit阶段，可以读取DOM  getSnapshotBeforeUpdate
- Commit接口，可以使用DOM，运行副作用，安排更新   componentDidMount  componentDidUpdate
