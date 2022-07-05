# Promise

- 通过链式操作减低了编码难度
- 增强代码可读性

promise对象仅有三种状态：pending（进行中）fulfilled（已成功）rejected（已失败）

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态改变（从pending变为fulfilled和从pending变为rejected），就不会再变，任何时候都可以得到这个结果

## Promise中的then第二个参数和catch有什么区别？

.then和.catch都会返回一个新的Promise

- 第一，reject是用来抛出异常的，catch是用来处理异常的；
- 第二：reject是Promise的方法，而then和catch是Promise实例的方法

> 主要区别就是，如果在then的第一个函数里抛出了异常，后面的catch能捕获到，而then的第二个参数捕获不到

then的第二个参数和catch捕获错误信息的时候会就近原则  
> 如果是promise内部报错，reject抛出错误后，

- then的第二个参数和catch方法都存在的情况下，只有then的第二个参数能捕获到
- 如果then的第二个参数不存在，则catch方法会捕获到。

因此，建议总是使用catch方法，而不使用then方法的第二个参数。

## Promise 规则

1. promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」

2. new promise时， 需要传递一个executor()执行器，执行器立即执行；

3. executor接受两个参数，分别是resolve和reject；

4. promise 的默认状态是 pending；

5. promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」

6. promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」

7. promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；

8. promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」

9. 如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；

10. 如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；

11. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；
