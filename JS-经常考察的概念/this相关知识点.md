# this 相关知识点

> new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定
> this 是在调用时绑定的

如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象。——你不知道的 JavaScript（上卷）

> 1. 由 new 调用？绑定到新创建的对象。
> 2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。
> 3. 由上下文对象调用？绑定到那个上下文对象。
> 4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。

```javascript
/**
 * 优先级
 * new绑定和隐式绑定的优先级
 */

function foo(something) {
  this.a = something;
}
const obj1 = { foo };
const obj2 = {};

obj1.foo(2); // 此时foo的this指向obj1，所以foo执行时，this.a=2相当于执行了obj1.a=2
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3); // 此时foo的this指向obj2，所以foo执行时，this.a=2相当于执行了obj1.a=2
console.log(obj2.a); // 3

const bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
```

## new 绑定

- 构造函数 new 一个对象实例的过程

1. 创建一个新对象实例, 设置原型，将对象的原型设置为函数的prototype对象。
2. 让函数的 this 指向这个对象
3. 执行构造函数中的代码，为新对象实例添加属性
4. 返回新对象实例

## 默认绑定

> 在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用。

```javascript
function sayHi() {
  console.log("Hello,", this.name);
}
var name = "YvetteLau";
sayHi();
// 在调用 Hi() 时，应用了默认绑定，this 指向全局对象（非严格模式下），
// 严格模式下，this 指向 undefined，undefined 上没有 this 对象，会抛出错误。
```

### 隐式绑定

> 函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的形式为 XXX.fun().
> 对象属性链中只有最后一层会影响到调用位置。
> eg :person1.friend.sayHi();

## 显式绑定

> 就是通过 call、apply、bind 的方式

call 和 apply 的功能相同，都是在调用函数，并修改 this 指向第一个参数；区别在于传参的方式不一样:

> - fn.call(obj, arg1, arg2, ...),调用一个函数, 具有一个指定的 this 值和分别地提供的参数(参数的列表)。
> - fn.apply(obj, [argsArray]),调用一个函数，具有一个指定的 this 值，以及作为一个数组（或类数组对象）提供的参数。

```javascript
// node中执行
global.a = 3;

function foo() {
  console.log(this.a);
}

const obj = { a: 2 };

foo.call(obj); // 2
// 如果将第一个参数传为一个基本类型2 此时this指向Number引用类型
// 例如 Boolean，String，Number，这个将基本类型转为引用类型的操作成为“装箱”
foo.call(2);
foo.call(null); // 如果把undefined和null作为绑定对象传给call或者apply，此时应用的是默认绑定规则
```

> 如果把 undefined 和 null 作为绑定对象传给 call 或者 apply，此时应用的是默认绑定规则；

## bind

bind(..)会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。——你不知道的 JavaScript（上卷）

```js
const newFun = fun.bind(null); // 绑定null
// 严格模式下，fun的this变成null
// 非严格模式下，this指向window
```

## 硬绑定

应用场景：创建一个包裹函数，传入所有的参数并返回接收到的所有值；这就是 ES5 中 bind 的由来

```javascript
/**
 * 硬绑定
 * 应用场景：创建一个包裹函数，传入所有的参数并返回接收到的所有值
 */

function foo() {
  console.log(`foo: ${this.a}`);
}
global.a = 3; // node
window.a = 3; // 浏览器

const obj = { a: 2 };
function bar() {
  // 强制将foo的this绑定到obj，对于bar函数的调用方式不会影响foo函数this的指向，
  // 这种显式的强制绑定，成为硬绑定
  foo.call(obj);
  console.log(`bar: ${this.a}`);
}
bar(); // foo: 2 bar: 3
setTimeout(bar, 100); // foo: 2  bar: node环境中是undefined，浏览器中是3
// 硬绑定的bar不可能再修改它的this
bar.call(global); // foo: 2 bar: 3
bar.call(window); // foo: 2 bar: 3
```

## 箭头函数

> - 箭头函数体内的 this 对象，就是定义时所在的对象，编译时进行绑定，而不是使用时所在的对象，this 的指向是不可变的;
> - 函数体内的 this 对象，继承的是外层代码块的 this。
> - 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
> - 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。
> - 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。
