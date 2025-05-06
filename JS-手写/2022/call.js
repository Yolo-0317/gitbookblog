// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Target is not function type");
  }

  // 首先 context 为可选参数，如果不传的话默认上下文为 window
  let newContext = context || window;
  // 给 newContext 创建一个 fn 属性，并将值设置为需要调用的函数
  newContext.fn = this; //此时this指向需要调用的函数
  // 将参数剥离出来
  const args = [...arguments].slice(1);
  // 调用函数
  const result = newContext.fn(...args);
  delete newContext.fn; // 将对象上的函数删除
  return result; // 返回需要调用的函数执行结果
};

const Person = {
  name: "Tom",
  say(text, text2) {
    console.log(this);
    console.log(`我叫${this.name}`);
    console.log(text, text2);
    return "say";
  },
};

const Person1 = {
  name: "Tom1",
};

const sayRes = Person.say.myCall(Person1, "test", "test1"); // 我叫Tom1
console.log(sayRes);
// const sayResCall = Person.say.call(Person1, 'test', 'test1'); // 我叫Tom1
// console.log(sayResCall);
