/**
 * 深拷贝
 * 解决循环引用
 * WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 */

function deepClone(obj, hash = new WeakMap()) {
  //先把特殊情况全部过滤掉 null undefined date reg
  if (obj === null || obj === undefined) {
    return obj;
  } //null 和 undefined 都不用处理
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (typeof obj !== "object") {
    return obj;
  } // 普通常量直接返回

  //  防止对象中的循环引用爆栈，把拷贝过的对象直接返还即可
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 不直接创建空对象的目的：克隆的结果和之前保持相同的所属类
  // 同时也兼容了数组的情况
  let newObj = new obj.constructor();

  hash.set(obj, newObj); // 制作一个映射表

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 不拷贝原型链上的属性
      newObj[key] = deepClone(obj[key], hash); // 递归赋值
    }
  }
  return newObj;
}

const testObj = {
  a: 123,
  c: [1, 2, 3, 4],
};

testObj.b = testObj;

const cloned = deepClone(testObj);
testObj.c.push(5);
console.log(cloned, testObj);
