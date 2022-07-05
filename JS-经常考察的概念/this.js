// node中执行
global.a = 3;

function foo() {
  console.log(this.a);
}

const obj = { a: 2 };

foo(); // 3 this指向 global
foo.call(obj); // 2
// 如果将第一个参数传为一个基本类型2 此时this指向Number引用类型
// 例如 Boolean，String，Number，这个将基本类型转为引用类型的操作成为“装箱”
foo.call(2);
foo.call(null); // 如果把undefined和null作为绑定对象传给call或者apply，此时应用的是默认绑定规则，this指向global
