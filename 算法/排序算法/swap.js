function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const testArr = [20, 10, 30, 11, 22, 12];

module.exports = { testArr, swap };
