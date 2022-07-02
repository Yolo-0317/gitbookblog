# setTimeout

```js
setTimeout(function | code, delay, arg1, arg2, ...)
```

- function 是想要在到期时间 (delay毫秒) 之后执行的函数
- code 类似eval，不推荐
- delay 延迟的毫秒数 (一秒等于 1000 毫秒)；如果省略该参数，delay 取默认值 0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的 (delay 毫秒数) 值长
- arg1, ..., argN  作为参数传递给function

## this

具体看 setTimeout.js

由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。  
这会导致，这些代码中包含的 this 关键字

- 在非严格模式会指向 window (或全局) 对象
- 严格模式下为 undefined，这和所期望的this的值是不一样的。

setTimeout中的箭头函数中的this依然是指向setTimeout外层context的this，详见 arrowFunc.js

@import 

## 有很多因素会导致 setTimeout 的回调函数执行比设定的预期值更久

在浏览器中，setTimeout()/setInterval() 的每调用一次定时器的最小间隔是 4ms，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的
