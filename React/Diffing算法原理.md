# Diffing算法原理

通过对新旧虚拟DOM树的对比获取变更差异，将更新部分作用于真实DOM，以最小的改动完成视图的更新

具体流程：

- 将真实DOM映射为虚拟DOM
- 在虚拟DOM发生变化时，根据变化计算生成一个patch，是一个结构化数据，内容是 新增 更新 移除等具体内容
- 根据这个patch去更新用户界面

diff算法三个策略，从树、组件和元素三个层面进行复杂度优化

- 基于树的对比，对树进行分层，对新旧DOM树的节点进行比较，如果新增或者删除了某个节点，则不再关心子节点状态
- 基于组件的对比，如果组件是同一类型，则进行树级对比，否则直接放入patch中准备更新
- 基于同一层节点元素对比，通过标记key进行对比，可以直接操作具体节点，降低内耗

React key：在同级元素中要保证key的唯一性

## 官网解释

### 对比不同类型的DOM元素

当根节点为不同类型的元素时，React 会卸载原有的树并且建立起新的树

### 对比同一类型的DOM元素

当对比两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性

```html
<!-- 只需要修改 DOM 元素上的 className 属性 -->
<div className="before" title="stuff" />
<div className="after" title="stuff" />
```

```html
<!-- 只需要修改 DOM 元素上的 color 样式 -->
<div style={{color: 'red', fontWeight: 'bold'}} />
<div style={{color: 'green', fontWeight: 'bold'}} />
```

### 对比同类型的组件元素

