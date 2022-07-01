# BFC

BFC 全称：Block Formatting Context， 名为 "块级格式化上下文"。

> W3C 官方解释为：BFC 它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，Block Formatting Context 提供了一个环境，HTML 在这个环境中按照一定的规则进行布局。

BFC 是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。  
布局规则有内部 box 垂直放置，计算 BFC 的高度的时候，浮动元素也参与计算。

## 满足下列 CSS 声明之一的元素便会生成 BFC

- 根元素
- float 的值 left right
- overflow 的值为 scroll overlay hidden auto
- display 的值为 inline-block、table-cell、table-caption
- position 的值为 absolute 或 fixed

```css
.container {
  /* 生效的属性 */
  /* display: inline-block; */
  /* float: left; */
  /* float: right; */
  /* position: absolute; */
  background: #000;

  /* block是无效的 */
  /* display: block;   */
}
```

## BFC 的规则

- BFC 就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- BFC 就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由 margin 决定， 属于同一个 BFC 的两个相邻的标签外边距会发生重叠
- 计算 BFC 的高度时，浮动元素也参与计算
- BFC 的区域不会与 float 的元素区域重叠

## BFC 解决的问题

- 使用 Float 脱离文档流，高度塌陷
- Margin 边距重叠
- 两栏布局
