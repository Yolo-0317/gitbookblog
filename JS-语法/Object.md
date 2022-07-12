# Object

## Object.create

创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）

## Object.getPrototypeOf

回指定对象的原型（内部[[Prototype]]属性的值）

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1); // true
```

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

## Object.prototype有七个方法

### constructor

特定的函数，用于创建一个对象。指向Object本身，即Object.prototype.constructor === Object

### hasOwnProperty

返回一个布尔值，表明一个属性或方法是否是对象自有的，而非通过原型链继承的。

```js
const a = { test:21 };
Object.prototype.hasOwnProperty.call(a, 'test');  // true
a.hasOwnProperty('test'); // true
Object.hasOwn(a, 'test'); // true
```

### isPrototypeOf

isPrototypeOf() 方法允许你检查一个对象是否存在于另一个对象的原型链上。

返回一个布尔值，表明当前对象是否在某对象的原型链上

```js
function Person() {
  this.name = "yolo";
}

const yolo = new Person();

// 语法 prototypeObj.isPrototypeOf(object)
console.log(Person.prototype.isPrototypeOf(yolo));
```

### propertyIsEnumerable

返回一个布尔值，表明当前属性或方法是否是对象自有的且可枚举的。

### valueOf

返回对象的原始值

### toString

返回对象的字符串描述

### toLocalString

返回对象的本地化字符串
