# promise面试题

## 题目一

```js
  const promise1 = new Promise((resolve, reject) => {
    console.log('promise1')
  })
  console.log('1', promise1);
```

```js
promise1
'1' Promise{<pending>}
```

## 题目二

```js
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
```

```js
1 2 4 3
```

## 题目三

```js
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);

// 124
```
