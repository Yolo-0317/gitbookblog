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
}

Function.prototype.bind_es5 = () => {
  var args = Array.prototype.slice.call(arguments);
  var context = args.pop();

  var fn = this;
  return function () {
    let rest = Array.prototype.slice.call(arguments);

    return fn.apply(context, args.concat(rest));
  };
}
