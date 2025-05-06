function Person() {
  this.sayHello = function (params) {
    console.log("hello");
  };
}

Person.prototype.name = "person";
const person1 = new Person();

// Person.prototype === person1.__proto__
console.log(JSON.stringify(Person.prototype)); // {"name":"person"}
console.log(JSON.stringify(person1.__proto__)); // {"name":"person"}
console.log(JSON.stringify(person1.prototype)); // undefined
console.log(Person.prototype === person1.__proto__); // true
console.log(
  `getPrototypeOf:  ${Object.getPrototypeOf(person1) === Person.prototype}`
); // true
console.log(`constructor:  ${Person.prototype.constructor === Person}`); // true

console.log(person1.__proto__.constructor === Person.prototype.constructor); // true
console.log(person1.__proto__.constructor === Person); // true
console.log(person1.__proto__.constructor.prototype === Person.prototype); // true
console.log('person1.__proto__.__proto__ === Person.prototype.__proto__', person1.__proto__.__proto__ === Person.prototype.__proto__) // true

// 对象实例中有一个constructor属性，指向构造函数
console.log(JSON.stringify(person1.constructor === Person));
