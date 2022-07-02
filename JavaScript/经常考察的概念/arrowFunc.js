// 普通函数
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
