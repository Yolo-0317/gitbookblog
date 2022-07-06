function Person() {
  this.name = "yolo";
}

const yolo = new Person();

console.log(Object.prototype.isPrototypeOf(Person, yolo));
console.log(Person.prototype.isPrototypeOf(yolo));
