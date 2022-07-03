# Generator 函数

> Generator 函数是 ES6 提供的一种异步编程解决方案,语法行为与传统函数完全不同，最大特点则是将异步操作同步化表达出来
> Generator并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署Interator接口...）
> 利用Generator函数，在对象上实现Iterator接口

- Generator 函数是一个状态机，封装了多个内部状态。
- 执行 Generator 函数会返回一个遍历器对象
返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

形式上，Generator函数是一个普通函数，但是有两个特征：

- function关键字与函数名之间有一个星号
- 函数体内部使用yield表达式，定义不同的内部状态

通过next方法才会遍历到下一个内部状态，其运行逻辑如下：

1. 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
2. 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式
3. 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
4. 如果该函数没有return语句，则返回的对象的value属性值为undefined

next返回 { value: '', done: true }；value值由yield后面的表达式提供的状态值，done用来判断是否存在下个状态

## Generator函数返回Iterator对象，因此我们还可以通过for...of进行遍历

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
