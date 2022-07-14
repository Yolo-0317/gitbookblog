/**
 * 实现数组去重（要求最佳时间复杂度）
 */

function unique(arr) {
  const map = new Map();
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], false);
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(unique([1, 2, 3, 3, 4, 4]));
