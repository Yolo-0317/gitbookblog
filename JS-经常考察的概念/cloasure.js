var tasks = [];
const objs = [];

var tasks1 = [];
var objs1 = [];

const obj = {};

for (var i = 0; i < 3; i++) {
  obj.i = i; // 如果obj定义在循环外，会导致最后obj.i都是2
  objs.push(obj);
  tasks.push(function () {
    console.log("tasks>>> " + i);
  });
}

console.log(JSON.stringify(objs)); // [{"i":2},{"i":2},{"i":2}]
tasks.forEach((fn) => fn());

for (var i = 0; i < 3; i++) {
  objs1.push({ i });
  ((index) => {
    tasks1.push(function () {
      console.log("tasks1>>> " + index);
    });
  })(i);
}

console.log(JSON.stringify(objs1)); // [{"i":0},{"i":1},{"i":2}]
tasks1.forEach((fn) => fn());

const arr = [];
const object = {};

for (var i = 0; i < 3; i++) {
  object.i = i;
  arr.push(obj);
}

console.log(`arr -> ${JSON.stringify(arr)}`);
