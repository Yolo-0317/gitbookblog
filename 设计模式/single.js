function CreateSingle(name) {
  this.name = name;
}

CreateSingle.prototype.getName = function () {
  console.log(this.name);
};

const Single = (function (name) {
  let instance;
  return function () {
    if (!instance) {
      instance = new CreateSingle(name);
    }
    return instance;
  };
})();

const a = new Single("a");
const b = new Single("b");

console.log(a === b); // true
