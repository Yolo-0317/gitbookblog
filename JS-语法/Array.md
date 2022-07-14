# Array

## 不改变原来数组的

concat  join  slice  map,filter,forEach,some,every,reduce

### concat

 concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

 ```js
 var new_array = old_array.concat(value1, value2, ..., valueN)
 // valueN  数组和/或值，将被合并到一个新的数组中 
 // 如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝
 ```

 返回值：新的 Array 实例

## 会改变原数组的方法

shift  unshift  pop push  reverse  sort  splice  copyWithin  fill

shift unshift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上

### shift

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

返回值：从数组中删除的元素; 如果数组为空则返回undefined

### unshift

```js
arr.unshift(element1, ..., elementN)
```

unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度

### splice

[CodeSandbox https://codesandbox.io/s/modest-fire-ofxebf?file=/src/splice.js](https://codesandbox.io/s/modest-fire-ofxebf?file=/src/splice.js)

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容

返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

```js
array.splice(start, deleteCount, item1, item2)
// start  指定修改的开始位置（从 0 计数）。如果是负值，则表示从数组末位开始的第几位；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位
//  deleteCount 整数，表示要移除的数组元素的个数
// item1, item2  如果不指定，则 splice() 将只删除数组元素

arr.splice(1); // 删除从索引1开始的元素，获取从索引1开始的所有元素
```

### copyWithin

copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度，但是改变数组元素原来的顺序

```js
arr.copyWithin(target, start, end)  // 参数 target、start 和 end 必须为整数。
// target 0 为基底的索引，复制序列到该位置  如果是负数，target 将从末尾开始计算
// 如果 target 大于等于 arr.length，将不会发生拷贝
// 如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。

// start  0 为基底的索引，开始复制元素的起始位置
// 如果是负数，start 将从末尾开始计算。
// 如果 start 被忽略，copyWithin 将会从 0 开始复制。

// end  0 为基底的索引，开始复制元素的结束位置
// copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素
// 如果是负数， end 将从末尾开始计算
// 如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。
```

返回值：改变后的数组。

### fill
