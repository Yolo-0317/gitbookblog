/**
 * 构造函数Obj new一个对象实例的过程
 * 1. 创建一个新对象实例 o={}；
 * 2. 绑定原型 o.__proto__ = Obj.prototype
 * 3. 让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 * 4.  判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
 */

// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

function simpleNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  console.log(res instanceof Object);
  return res instanceof Object ? res : obj;
}

function Person() {
  this.name = "person1";
  return {
    name: "00",
    sayHi: () => {
      console.log(`Hi--1, I am ${this.name}`);
    },
  };
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const person = simpleNew(Person);

// console.log(person.name)
person.sayHi();
