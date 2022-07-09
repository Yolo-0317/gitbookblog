/**
 * 快速排序
 * 
 * 基本思想就是分治法
 *
 * 在数据集之中，选择一个元素作为"基准"（pivot）。
 * 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边
 * 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 *
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0]; // 将基准值剔除

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([2, 3, 34, 5, 56, 4, 3]));
