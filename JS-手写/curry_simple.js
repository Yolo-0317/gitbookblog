function curry(fn) {
  const curryArgs = [...arguments].splice(1) || [];
  return function () {
    const newArgs = curryArgs.concat(...arguments);
    if (newArgs.length < fn.length) {
      return curry.call(this, fn, ...newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}

function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);
console.log(multi(2)(3)(4)); // 24