const instance = Symbol("instance");

class Single {
  constructor(name) {
    this.name = name;
  }

  static getInstance(name) {
    if (!this[instance]) {
      this[instance] = new Single(name);
    }
    return this[instance];
  }
}

const a = Single.getInstance("a");
const b = Single.getInstance("b");

console.log(a === b); // true
console.log(a.name, b.name);
