# react hook

## 为什么会出现react hook

1. 在组件之间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的class，class创建组件会遇到this指向的问题

hooks使函数组件具有了一些类组件的能力

hook 的使用规则:

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
- 只能在React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）
