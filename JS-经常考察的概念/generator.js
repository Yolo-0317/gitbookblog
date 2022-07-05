function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}
var hw = helloWorldGenerator();

// 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值
console.log(hw.next()); // { value: 'hello', done: false }

hw.next(); // { value: 'world', done: false }

console.log(hw.next()); // { value: 'ending', done: true }

hw.next(); // { value: undefined, done: true }
