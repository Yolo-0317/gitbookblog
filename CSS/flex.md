# flex

flex flex-grow flex-shrink flex-basis

剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小

- flex-grow: 定义项目的放大比例，默认为0；规定了 flex-grow 项在 flex 容器中分配剩余空间的相对比例
- flex-shrink: 定义项目的缩小比例，默认为1
- flex-basis: 定义了在分配多余空间之前，项目占据主轴的空间

```css
  flex: 1

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
```

```css
  /* 关键字值 */
  flex: auto;
  flex: initial;
  flex: none;

  /* 一个值, 无单位数字: flex-grow */
  flex: 2;

  /* 一个值, width/height: flex-basis */
  flex: 10em;
  flex: 30px;
  flex: min-content;

  /* 两个值: flex-grow | flex-basis */
  flex: 1 30px;

  /* 两个值: flex-grow | flex-shrink */
  flex: 2 2;

  /* 三个值: flex-grow | flex-shrink | flex-basis */
  flex: 2 2 10%;

  /*全局属性值 */
  flex: inherit;
  flex: initial;
  flex: unset;
```