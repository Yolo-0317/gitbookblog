# ReactRouter

## 两种模式

- hash 模式（HashRouter）：在url后面加上#，如http://127.0.0.1:5500/home/#/page1；
- history 模式（BrowserRouter）：允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录

## 实现原理

监听url变化，来进行DOM操作模拟跳转