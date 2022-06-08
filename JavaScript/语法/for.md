# for循环

## for of (ES6)

- 不适用于对象
- 可用于Map和Set
- for of和forEach一样,是直接得到值
- Iterator 接口主要供for...of消费

```js
const array = [1, 2];
for (let v of array) {
  console.log(v); // 1 2
}

const str = '34'
for (let s of str) {
  console.log(s); // 3,4
}

const set = new Set();
set.add("a").add("b").add("d").add("c");
const map = new Map();
map.set("a", 1).set("b", 2).set(999, 3);
for (let v of set) {
  console.log(v); // a b d c 
}
console.log("--------------------");
for (let [k, v] of map) {
  console.log(k, v); // a 1  b 2 999 3
}

const obj = {
  a: 1,
  1: 2,
}
// TypeError: obj is not iterable
for (let o of obj) {
  console.log(o); // 3,4
}
```

## for in

- for in总是得到对象的key
- 数组、字符串的下标

```js
for(let index in array) {  
  console.log(index, array[index]);  // index为数组的索引
};  
```

## 普通for循环和forEach不做赘述
