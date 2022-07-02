https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0

箭头函数有几个使用注意点。

（1）箭头函数没有自己的this对象。 
> 对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立。
> 它没有自己的this对象，内部的this就是定义时上层作用域中的this

```js
/// 普通函数
function foo_common() {
  setTimeout(function () {
    console.log(this); // node中this指向Timeout  浏览器中指向window
    console.log("id:", this.id);
  }, 100);
}

var id = 21;
const obj42 = { id: 42 };

foo_common.call(obj42);
// 浏览器执行 id: 21  node执行 undefined

// 箭头函数
function foo_arrow() {
  console.log(this);
  setTimeout(() => {
    console.log(this); // 创建setTimeout时，this指向obj42
    console.log("arrowfunc-id:", this.id);
  }, 100);
}

var id = 21;

foo_arrow.call(obj42); // 42
```

（2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。


（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。