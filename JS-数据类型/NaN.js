// NaN是唯一一个和自身不相等的  值

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log("------------");
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true
console.log(isNaN(10)); // false

console.log("------------  Number.isNaN  与 isNaN 不一样");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("ABc"));
console.log(Number.isNaN(10));

console.log("------------");
console.log(typeof NaN); // number

function isValueNaN(value) {
  return typeof value === "number" && isNaN(value);
}
