# TypeScript基础

来源：[TypeScript TS「面试题及答案」不断更新](https://juejin.cn/post/6999985372440559624)

## 什么是TypeScript

Typescript 是一个强类型的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

## 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？

增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。
优势:

1. 杜绝手误导致的变量名写错;
2. 类型可以一定程度上充当文档;
3. IDE自动填充，自动联想;

## TypeScript 访问修饰符

- public，任何地方
- private，只能在类的内部访问
- protected，能在类的内部访问和子类中访问
- readonly，属性设置为只读

## TypeScript 中 const 和 readonly 的区别

- const用于变量，readonly用于属性
- const在运行时检查，readonly在编译时检查
- 使用const变量保存的数组，可以使用push，pop等方法
- 但是如果使用ReadonlyArray<type>声明的数组不能使用push，pop等方法。

## 枚举和常量枚举的区别

- 枚举会被编译时会编译成一个对象，可以被当作对象使用

- 常量枚举通过在枚举上使用 const修饰符来定义，常量枚举不允许包含计算成员

> const 枚举会在 typescript 编译期间被删除，const 枚举成员在使用的地方会被内联进来，避免额外的性能开销

```ts
  // 常量枚举 
  const enum Color { 
    Red, 
    Green, 
    Blue 
  } 
  
  var sisterAn = Color.Red 
  // 会被编译成 JavaScript 中的 var sisterAn = 0 
  // 在运行时已经没有 Color 变量 
```

## 接口interface和类型别名type

相同点：

1. 都可以描述 '对象' 或者 '函数'
2. 都允许拓展(extends)

不同点：

1. type 可以声明基本类型，联合类型，元组
2. type 可以使用 typeof 获取实例的类型进行赋值
3. 多个相同的 interface 声明可以自动合并

## 是否使用 strictNullChecks（严格空值检查模式）

[TypeScript配置严格null类型检查strictNullChecks](https://juejin.cn/post/7081624988423290888)

空指针是最常见的bug之一，而通过 strictNullChecks，TypeScript编译器标志可以在很大程度上避免空指针；默认不开启；
如果设置了 strictNullChecks，可以使用 联合类型和接口中的?提供undefined

## TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明嘛？

```ts
  /* 可以 */
  // 函数声明
  interface Say {
  (name: string): viod;
  }
  let say: Say = (name: string):viod => {}
  // Array 声明
  interface NumberArray { 
  [index: number]: number; 
  } 
  let fibonacci: NumberArray = [1, 1, 2, 3, 5];
  // Class 声明
  interface PersonalIntl {
  name: string
  sayHi (name: string): string
  }
```

## TypeScript 中的 this 和 JavaScript 中的 this 有什么差异

noImplicitThis：没有隐含的this

- TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用this
- Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。

## TypeScript 中使用联合类型（Union Types）时有哪些注意事项？

属性或方法访问: 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。

```ts
  function getLength(something: string | number): number {
    return something.length;
  }
  // index.ts(2,22): error TS2339: Property 'length' does not exist on type >'string | number'.
  //   Property 'length' does not exist on type 'number'.

  function getString(something: string | number): string {
    return something.toString();
  }
  // 公共方法和属性可以访问
```

## TypeScript 中如何联合枚举类型的 Key?

```ts
  enum str {
    A,
    B,
    C
  }
  type strUnion =  keyof typeof str; // 'A' | 'B' | 'C'
```

## 数组定义的两种方式

```ts
type Foo= Array<string>;
interface Bar { 
     baz: Array<{ name: string, age: number}>
}

type Foo = string[];
interface Bar { 
     baz : { name: string, age: number }[] 
}

```
