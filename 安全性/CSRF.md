# CSRF

[https://tech.meituan.com/2018/10/11/fe-security-csrf.html](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

CSRF（Cross-site request forgery）跨站请求伪造

攻击者诱导用户进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用用户在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

## CSRF类型

### GET类型的CSRF

```md
 ![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2018b/ff0cdbee.example/withdraw?amount=10000&for=hacker)
```

在用户访问含有这个img的页面后，浏览器会自动向 <http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker> 发出一次HTTP请求。bank.example就会收到包含受害者登录信息的一次跨域请求。

### POST类型的CSRF

通常使用的是一个自动提交的表单

```html
<form action="http://bank.example/withdraw" method=POST>
    <input type="hidden" name="account" value="xiaoming" />
    <input type="hidden" name="amount" value="10000" />
    <input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit(); </script> 
```

### 链接类型的CSRF

需要用户点击链接才会触发

```html
  <a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
  重磅消息！！
  <a/>
```

## CSRF 特点

- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用用户在被攻击网站的登录凭证，冒充用户提交操作；而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

## 防止 CSRF

- 阻止不明外域的访问
  - 同源检测
  - Samesite Cookie

- 提交时要求附加本域才能获取的信息
  - CSRF Token
  - 双重Cookie验证

- CSRF自动防御策略：同源检测（Origin 和 Referer 验证）。
- CSRF主动防御措施：Token验证 或者 双重Cookie验证 以及配合Samesite Cookie。

