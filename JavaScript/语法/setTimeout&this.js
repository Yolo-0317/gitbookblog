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
