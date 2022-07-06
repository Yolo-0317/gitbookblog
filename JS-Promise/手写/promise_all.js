/**
 * - 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
 * - 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved）(pending状态) Promise
 *
 * - 其它情况下返回一个处理中（pending）的Promise。
 * 这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败；
 * 返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。
 * @param {*} iterator
 */

const isPromise = (instance) =>
  Object.prototype.toString.call(instance).includes("Promise");

Promise.myAll = function (iterator) {
  // 获取传入参数的类型
  const type = Object.prototype.toString
    .call(iterator)
    .slice(8, -1)
    .toLocaleLowerCase();
  // String、Array、TypedArray、Map 和 Set 都是内置可迭代对象，因为它们的原型对象都拥有一个 Symbol.iterator 方法。
  const iterable = typeof iterator[Symbol.iterator] === "function";

  if (!iterable) {
    throw new TypeError(`${type} ${iterator} is not iterable`);
  }

  let resolveCount = 0;
  const promiseResult = [];
  const newIterator = Array.from(iterator);
  let promiseCount = newIterator.length;

  if (promiseCount === 0) {
    // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
    return Promise.resolve([]);
  }

  const noPromise = newIterator.every((item) => !isPromise(item));
  if (noPromise) {
    // 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved）(pending状态) Promise
    return new Promise((resolve) => {
      Promise.resolve().then(() => {
        resolve(newIterator);
      });
    });
  }

  return new Promise((resolve, reject) => {
    newIterator.forEach((item, index) => {
      Promise.resolve(item).then(
        (res) => {
          resolveCount += 1;
          promiseResult[index] = res;
          if (promiseCount === resolveCount) {
            resolve(promiseResult);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

// Promise.myAll([]).then((res) => console.log(res));
// console.log(Promise.myAll(["test"]));
// Promise.myAll("test").then((res) => {
//   console.log("res", res);
// });

const task1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("过关！"), 1000)
);
const task1_1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("过关！"), 1000)
);
const task2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("在第一关失败了"), 2000)
);
const task3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("在第二关失败了"), 3000)
);

Promise.myAll([task1, task1_1, task2, task3]).then((res) => {
  console.log(res)
}, (r) => console.log(r)); // 在第一关失败了
