/**
 * 一道面试题：
 * 如何实现 multi(2)(3)(4)=24?
 */

// 不优雅的实现
function multi(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

// 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。

// 增加cache后只计算一次
function curry(fn, args) {
  var length = fn.length; // 该函数期望传入的参数数量，即形参的个数，fn.length会返回形参个数
  var args = args || [];
  curry.cache = curry.cache || {};
  return function () {
    const newArgs = args.concat(Array.prototype.slice.call(arguments)); // 强制转化arguments为数组格式
    if (newArgs.length < length) {
      // 在闭包中缓存了fn的形参个数
      // 如果传入的参数少于形参个数，继续执行 curry 函数，收集参数
      return curry.call(this, fn, newArgs);
    } else {
      const _args = JSON.stringify(newArgs.sort()); // 将参数作为cache的key，将参数数组进行排序，防止参数顺序打乱影响缓存
      if (!curry.cache[_args]) {
        console.log("计算");
        curry.cache[_args] = fn.apply(this, newArgs);
      }
      return curry.cache[_args];
    }
  };
}

function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);
multi(2)(3)(4); // 24
multi(2, 3, 4); // 24
multi(2)(3, 4); // 24
multi(3, 2)(4); // 24
