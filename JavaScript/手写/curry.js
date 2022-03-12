/**
 * 一道面试题：
 * 如何实现 multi(2)(3)(4)=24?
 */

// 不优雅的实现
function multi(a) {
  return function(b) {
      return function(c) {
          return a * b * c;
      }
  }
}

// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

// 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。

function curry(fn, args) {
  var length = fn.length; // 该函数期望传入的参数数量，即形参的个数
  var args = args || [];
  return function() {
		const newArgs = args.concat(Array.prototype.slice.call(arguments)); // 强制转化arguments为数组格式
    if (newArgs.length < length) { // 在闭包中缓存了fn的形参个数
      // 如果传入的参数少于形参个数，继续执行 curry 函数，收集参数
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this,newArgs);
    }
  }
}

function multiFn(a, b, c) {
  return a * b * c;
}
console.log(multiFn.length);
var multi = curry(multiFn);
multi(2)(3)(4); // 24
multi(2,3,4); // 24
multi(2)(3,4); // 24
multi(2,3)(4); // 24



