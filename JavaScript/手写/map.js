/**
 * Array.prototype.map
 *
 * let new_array = arr.map(function callback( currentValue, index, array) {
 * // return element for new_array
 * }[, thisArg])
 * @param {*} fn
 * @returns
 */

Array.prototype.newMap = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

const a = [1, 2, 3];

b = a.newMap((item) => (item += 1));
a.newMap('test')
console.log(b);
