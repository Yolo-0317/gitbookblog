HTML <base> 元素 指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 <base> 元素。

一个文档的基本 URL, 可以通过使用 document.baseURI 查询。如果文档不包含 <base> 元素，baseURI 默认为 document.location.href

href用于文档中相对 URL 地址的基础 URL。允许绝对和相对URL。

> 如果指定了多个 <base> 元素，只会使用第一个 href 和 target 值, 其余都会被忽略。

​页内锚​
指向文档中某个片段的链接，例如 <a href="#some-id"> 用 <base> 解析，触发对带有附加片段的基本 URL 的 HTTP 请求。

```
例如：给定 <base href="https://example.com">
以及此链接 <a href="#anchor">Anker</a>
链接指向 https://example.com/#anchor
```
> 简单理解：base标签的作用就是，当页面中的A超链接标签没有设置href属性的值和没有设置target属性的值时，默认使用base标签中的href属 性的值和target属性的值

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>base标签</title>
<link rel="stylesheet" type="text/css" href="css/body.css" media="all">
<link rel="stylesheet" type="text/css" href="css/mark.css">
<base href="https://www.google.com.hk">
<base target="_blank">
</head>
<body>
    <div align="center">
        <a href="">测试1</a><br/><br/> 
        <a href="">测试2</a><br/><br/> 
        <a href="">测试3</a><br/><br/>
        <a href="">测试4</a><br/><br/>
        <a href="http://www.baidu.com" target="_self">测试5</a>
    </div>
</body>
</html>
​```
