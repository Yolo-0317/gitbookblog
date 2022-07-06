# Iterator迭代器原理

JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set

Iterator 的作用有三个:

- 为各种数据结构，提供一个统一的、简便的访问接口
- 使得数据结构的成员能够按某种次序排列
- ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

for...of循环可以使用的范围包括

- 数组、Set 和 Map 结构、
- 某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、
- Generator 对象，
- 字符串

- 不适用于对象
- 可用于Map和Set
- for of和forEach一样,是直接得到值
- Iterator 接口主要供for...of消费

> String、Array、TypedArray、Map 和 Set 都是内置可迭代对象，因为它们的原型对象都拥有一个 Symbol.iterator 方法。

原生具备 Iterator 接口的数据结构:

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

Iterator 的遍历过程:
-（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
-（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
-（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
-（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
