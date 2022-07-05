# JSBridge

<https://juejin.cn/post/6844903585268891662>

## 实现方式

- JavaScript 调用 Native 的方式，主要有两种：注入 API 和 拦截 URL 参数。

- Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上

## JSBridge 的用途

JSBridge 简单来讲，主要是 给 JavaScript 提供调用 Native 功能的接口，让混合开发中的『前端部分』可以方便地使用地址位置、摄像头甚至支付等 Native 功能  
它的核心是 构建 Native 和非 Native 间消息通信的通道，而且是 双向通信的通道。  
