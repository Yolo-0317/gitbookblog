const { swap, testArr } = require("./swap");

function bubbleSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort(testArr));
