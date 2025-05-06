/*
  请实现一个通用的 Array 解构赋值方法 destructuringArray，

  可将目标数组（targetArray）通过 ES6 的解构格式（formater），
  输出解构结果对象。

  - 函数名为 destructuringArray（解构数组）功能是将目标数组通过以下解构格式解构为最终对象。
  - 入参 1 是目标数组：targetArray{array}
  - 入参 2 是解构格式：formater{string}

  Example:
    destructuringArray( [1,[2,4],3], "[a,[b,c],d]" );
    输出：{a:1, b:2, c:4, d:3}
*/

function destructuringArray(arr, str) {
  const newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((i) => {
        newArr.push(i);
      });
    } else {
      newArr.push(item);
    }
  });
  const newStr = str.replace(/\[|\]|,/g, '');
  // console.log(newArr, newStr);
  const obj = {};
  for (let i = 0; i < newStr.length; i += 1) {
    obj[`${newStr[i]}`] = newArr[i];
  }
  // console.log(obj);
  return obj;
}

destructuringArray([1, [2, 4], 3], '[a,[b,c],d]');
