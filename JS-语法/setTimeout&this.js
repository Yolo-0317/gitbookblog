let obj = {
  a: 1,
  name: "A,l",
  init: function () {
    console.log("this in init", this);
  },
  initArrow: () => {
    console.log("this in init", this);
  }
};

obj.init(); // Node中指向obj 浏览器中指向obj
setTimeout(obj.init, 1000); // Node中指向 Timeout  浏览器中指向window
setTimeout(obj.initArrow, 1000); // Node中指向{} 浏览器中指向window
setTimeout(obj.init.bind(obj), 1000) // Node中指向obj 浏览器中指向obj
setTimeout(obj.initArrow.bind(obj), 1000) // Node中指向{} 浏览器中指向window

// 普通函数
function foo_common() {
  setTimeout(function () {
    console.log(this); // node中this指向Timeout  浏览器中指向window
    console.log("foo_common id:", this.id);
  }, 100);
}

var id = 21;
const obj42 = { id: 42 };

foo_common.call(obj42);
