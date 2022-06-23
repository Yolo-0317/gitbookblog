# Babel的运行原理

https://segmentfault.com/a/1190000017879365

> Babel 是一个 JavaScript 编译器。把最新版的javascript编译成当下可以执行的版本，

> 简言之，利用babel就可以让我们在当前的项目中随意的使用这些新最新的es语法。


> babel运行机制：

1. 经过词法分析
2. 经过语法分析
3. 得到AST抽象语法树
4. 经过babel插件实现递归转换
5. 最终得到转换之后的AST抽象语法树
6. 通过generate重新将新AST转换成代码输出

## 解析（parse）

解析步骤接收代码并输出 AST。 这个步骤分为两个阶段：词法分析（Lexical Analysis） 和 语法分析（Syntactic Analysis）。

> code(字符串形式代码) -> tokens(令牌流) -> AST（抽象语法树）

1. 词法分析

词法分析阶段把字符串形式的代码转换为 令牌（tokens） 流

2. 语法分析
将词法分析的结果转换成AST形式

## 转换（transform）

转换步骤接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作

## 生成（generate）
