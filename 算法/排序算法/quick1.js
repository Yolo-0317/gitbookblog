/**
 *
 */
const { swap, testArr } = require("./swap");

function partition(arr, left, right) {
  /*
   * 这部分是具体实现排序的部分；
   * 将left赋值给pivot，作为参照物，因为left在最左边，只需要从左到右比较一遍即可判断整个数组；
   * index索引是arr中待交换位置；
   */
  let pivot = left,
    index = pivot + 1;

  // 循环中如果有任何小于参照物的，就将他交换到index的位置，然后index向右移动到下一个位置；
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  /*
   * 因为每次都是交换完后index移动到下一个位置，所以在循环结束时，index仍为待交换的位置；
   * 此时索引pivot + 1到index - 1的元素都小于参照物arr[pivot]；
   */
  // 交换pivot和index-1索引的值之后index - 1索引左边全都是小于arr[index-1]的元素；
  console.log(arr, pivot, index);
  swap(arr, pivot, index - 1);
  // 返回index-1作为拆分子数组的分界线；
  return index - 1;
}

function quickSort(arr, leftIndex, rightIndex) {
  /*
   * len为数组的长度;
   * left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
   * left如果有传数字那么就为left，没有传参则为0；
   * right如果有传参那么就为right，没有传参则为len-1;
   * 有传参可能会部分排序可能不会排序，没传参默认排序整个数组;
   * partitionIndex为分组界限;
   */
  let len = arr.length,
    partitionIndex,
    left = typeof leftIndex !== "number" ? 0 : leftIndex,
    right = typeof rightIndex !== "number" ? len - 1 : rightIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

console.log(quickSort(testArr));
