const { testArr, swap } = require("./swap");

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    console.log(minIndex);
    swap(arr, i, minIndex);
  }

  return arr;
}

console.log(selectSort(testArr));
