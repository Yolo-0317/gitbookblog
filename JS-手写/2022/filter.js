/**
 * Array.prototype.filter
 *
 * et new_array = arr.filter(function callback( currentValue, index, array) {
 * // return element for new_array
 * }[, thisArg])
 * @param {*} fn
 * @returns
 */

Array.prototype.newFilter = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    const r = fn(this[i]);
    if (typeof r === "boolean" && r) {
      res.push(this[i]);
    }
  }
  return res;
};

const a = [2, 3, 4];
const b = a.newFilter((item) => item % 2 === 0);
console.log(b);
