# CSS创建三角形

采用的是相邻边框连接处的均分原理

将元素的宽高设为 0，只设置border ，把任意三条边隐藏掉(颜色设为 transparent)，剩下的就是一个三角形。

```css
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```
