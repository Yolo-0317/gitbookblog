# Promise常用的API

[Promise In MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise.prototype.finally()

finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。避免了同样的语句需要在then()和catch()中各写一次。  
finally方法的回调函数不接受任何参数，所以我们没办法知道前面promise的状态。

```js
  promise
    .then(result => {···})
    .catch(error => {···})
    .finally(() => {···});
```

## Promise.prototype.catch()

Promise的catch()方法用于指定发生错误时的回调函数

- 如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数处理错误
- then方法指定的回调函数如果运行中抛出错误也会被catch方法捕获。

> 虽然then方法的第二个参数也可以定义失败的回调函数，但是建议总是使用catch方法，因为catch还可以捕获到then第一个方法执行中的错误。

## Promise.resolve

制造一个成功或者失败，在一个 Promise.resolve() 中，再嵌套一层 promise，并返回错误结果，那么最终结果就是失败的

## Promise.reject

制造一个失败

## Promise.all

- 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
- 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise
- 其它情况下返回一个处理中（pending）的Promise。这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败；返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。

> 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

```js
// Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例.
const p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定，分成两种情况。

1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

### Promise.all 的异步和同步

> 当且仅当传入的可迭代对象为空时为同步：

```js
var p = Promise.all([]); // will be immediately resolved
console.log(p);  // Promise { <state>: "fulfilled", <value>: Array[0] }
```

## Promise.allSettled

返回一个在所有给定的 promise 都已经fulfilled或rejected后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

> 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。

```js
Promise.allSettled(iterable);
```

iterable: 一个可迭代的对象，例如Array，其中每个成员都是Promise。

对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise resolved（或rejected）的值

## Promise.any

行为与Promise.all相反，只要其中的一个 promise 成功，就返回那个已经成功的 promise；

```js
Promise.any(iterable);
```

如果所有传入的 promises 都失败，Promise.any 将返回异步失败，和一个 AggregateError 对象，它继承自 Error，有一个 errors 属性，属性值是由所有失败值填充的数组

```js
  const pErr = new Promise((resolve, reject) => {
    reject('总是失败');
  });

  Promise.any([pErr]).catch((err) => {
    console.log(err);
  })
  // 期望输出: "AggregateError: No Promise in Promise.any was resolved"
```

## Promise.race

方法返回一个 promise，一旦迭代器中的某个 promise resolved或rejected，返回的 promise 就会解决或拒绝。

```js
Promise.race(iterable);

const p = Promise.race([p1, p2, p3]);
```
