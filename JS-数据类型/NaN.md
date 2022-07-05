# NaN

## typeof NaN

```js
typeof NaN; // number
```

```js
NaN !== NaN // true
Object.is(NaN, NaN);  // true
```

## isNaN

- 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返 回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断

```js
  isNaN(NaN)  //true
  isNaN('this is a str')   //true，转换成数字是NaN
  isNaN(undefined)   //true, undefined转换成数字是NaN
  isNaN()// true

  isNaN('123')   //false，可转换成number
  isNaN(true)    //false，可转换成number
  isNaN(123) // false
  isNaN(null)   //false
```

## Number.isNaN

```js
Number.isNaN(NaN) // true
Number.isNaN(null) // false
```
