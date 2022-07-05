function CodingMan(name) {
  this.name = name;

  this.sleep = (timer) => {
    setTimeout(() => {
      console.log(`Wake up after ${timer}`);
    }, timer * 1000);
    return this;
  };

  this.eat = (food) => {
    console.log(`Eat ${food}~`);
    return this;
  };

  console.log(`Hi！This is ${name}!`);
}

// new CodingMan("Hank").eat("dinner").sleep(10).eat("supper");

class ChainCal {
  constructor(num) {
    console.log(num);
    this.num = num;
  }

  multi(num) {
    this.num = this.num * num;
    console.log(this.num);
    return this;
  }

  add(num) {
    this.num = this.num + num;
    console.log(this.num);
    return this;
  }

  sin() {
    this.num = Math.sin(this.num);
    console.log(this.num);
    return this;
  }
}

new ChainCal(2).multi(5).add(1).sin();
