# postMessage

PostMessage 是 html5 新引进的一个可跨源通信 api，让主页面和任意 frame 类页面或 window.open 打开的页面进行双向通信

## JSBridge

主要是 给 JavaScript 提供调用 Native 功能的接口，让混合开发中的『前端部分』可以方便地使用地址位置、摄像头甚至支付等 Native 功能。

它的核心是 构建 Native 和非 Native 间消息通信的通道，而且是 双向通信的通道。

