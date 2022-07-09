const { testArr, swap } = require("./swap");

function insertSort(arr) {
  const len = arr.length;
  let preIndex, current;

  for (i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && current < arr[preIndex]) {
      swap(arr, preIndex, preIndex + 1);
      preIndex--;
    }
  }

  return arr;
}

console.log(insertSort(testArr));
