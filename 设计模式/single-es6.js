class Single {
  constructor(name) {
    if (!Single.instance) {
      this.name = name;
      Single.instance = this;
    }
    return Single.instance;
  }
}

const a = new Single("a");
const b = new Single("b");

console.log((a === b)); // true

console.log(a.name, b.name);