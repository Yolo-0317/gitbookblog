# Object

## Object.is

- ===的缺点
  - NaN不等于自身
  - +0等于-0

JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题

```js
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```
