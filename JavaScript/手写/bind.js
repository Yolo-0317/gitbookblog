/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，
 * 这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 * 1、指定 this
 * 2、传入参数
 * 3、返回一个函数
 * 4、柯里化
 * bind 方法与 call / apply 最大的不同就是前者返回一个绑定上下文的函数，而后两者是直接执行了函数。
 */

// 只能给bind传递一个参数
Function.prototype.bind_1 = (context) => {
  var fn = this;
  return function () {
    return fn.apply(context);
  };
};

Function.prototype.bind_es6 = (context, ...args) => {
  var fn = this;
  return function (...rest) {
    return fn.apply(context, [...args, ...rest]);
  };
};

Function.prototype.bind_es5 = function () {
  var args = Array.prototype.slice.call(arguments);
  var context = args.pop();

  var fn = this;
  return function () {
    let rest = Array.prototype.slice.call(arguments);

    return fn.apply(context, args.concat(rest));
  };
};

Function.prototype.newBind = function (context, ...args) {
  //  判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 保存当前函数的引用
  const fn = this;
  // 创建一个函数返回
  return function Fn() {
    // 函数内部使用 apply 来绑定函数调用
    // 需要判断Fn函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象
    console.log(this instanceof Fn, Object.prototype.toString.call(this));
    return fn.apply(this instanceof Fn ? this : context, [
      ...args,
      ...arguments,
    ]);
  };
};

function Person() {
  return { a: 1 };
}

const p = new Person();
// console.log(p.b) // 如果Person返回 {a: 1}，p.b就是undefined

const bindDemoFunc = function () {
  return { b: 2 };
};
const bindDemo = bindDemoFunc.newBind(p);
bindDemo();

const newBindIns = new bindDemo();
console.log(newBindIns.b); // 2
