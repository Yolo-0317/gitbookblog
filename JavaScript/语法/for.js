const array = [1, 2];
for (let v of array) {
  console.log(v); // 1 2
}

const str = "34";
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
  if (v === 2) {
    // return null;
    // continue;
    break;
  }
  console.log(k, v); // a 1  b 2 999 3
}

const obj = {
  a: 1,
  1: 2,
};

// TypeError: obj is not iterable
// for (let o of obj) {
//   console.log(o); // 3,4
// }
