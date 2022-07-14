/**
 * 携程
 * 实现获取数组第二大的数（
 * @param {Array} arr
 */

function getSecond(arr) {
  if (arr.length < 2) {
    return null;
  }

  let max = arr[0],
    second = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(getSecond([3, 6, 5, 4.5, 8, 7]));
