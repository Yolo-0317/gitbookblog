// func.apply(thisArg, [argsArray])

// argsArray 是可选的


Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Target is not function type");
  }

  // 首先 context 为可选参数，如果不传的话默认上下文为 window
  let newContext = context || window;
  // 给 newContext 创建一个 fn 属性，并将值设置为需要调用的函数
  newContext.fn = this; //此时this指向需要调用的函数
  let result = null;
  if (arguments[1]) {
    result = newContext.fn([...args]);
  } else {
    result = newContext.fn();
  }
  delete newContext.fn; // 将对象上的函数删除
  return result; // 返回需要调用的函数执行结果
};
