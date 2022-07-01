# div居中

## 水平居中

- 水平居中:给 div 设置一个宽度，然后添加 margin:0 auto 属性

```css
div {
  width: 200px;
  margin: 0 auto; 
}
```

- 水平居中，利用 text-align:center 实现

```css
  .container {
    background: rgba(0, 0, 0, 0.5); 
    text-align: center;
    font-size: 0;
  }
  .box {
    display: inline-block;
    width: 500px;
    height: 400px;
    background-color: pink;
  }
```

- 让绝对定位的 div 居中，在整个容器内水平垂直居中

```css
  div {
    position: absolute;
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: pink; /*方便看效果*/
  }
```

- 水平垂直居中一

已知容器的宽高宽，根据高宽设置负的外边距

```css
div{
  /*绝对定位 */
  position: absolute;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  /*外边距为自身宽高的 一半*/
  margin: -150px 0 0 -250px;
  /*方便看效果*/
  background-color: pink;
}
```

5. 水平垂直居中二

未知容器的宽高，利用`transform`属性

```css
div {
  /*相对定位或绝对定位均可*/
  position: absolute;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*方便看效果*/
  background-color: pink;
}
```

6. 使用flex