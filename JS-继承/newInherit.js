/**
 * 构造函数继承
 */
function SuperType(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

// 子类也不能访问父类原型上定义的方法 子类的实例不能继承getName
SuperType.prototype.getName = function () {
  console.log(this.name);
};

function SubType(name) {
  // 继承 SuperType 并传参
  SuperType.call(this, name);
  // 实例属性
  this.age = 29;
}

let instance1 = new SubType("Nicholas1");
let instance2 = new SubType("Nicholas2");

console.log(instance2.getName());
