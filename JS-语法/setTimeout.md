# setTimeout

```js
setTimeout(function | code, delay, arg1, arg2, ...)
```

- function 是想要在到期时间 (delay毫秒) 之后执行的函数
- code 类似eval，不推荐
- delay 延迟的毫秒数 (一秒等于 1000 毫秒)；如果省略该参数，delay 取默认值 0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的 (delay 毫秒数) 值长
- arg1, ..., argN  作为参数传递给function

## this

具体看 setTimeout.js

由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。  
这会导致，这些代码中包含的 this 关键字

- 在非严格模式会指向 window (或全局) 对象
- 严格模式下为 undefined，这和所期望的this的值是不一样的。

setTimeout中的箭头函数中的this依然是指向setTimeout外层context的this，详见 arrowFunc.js

## 有很多因素会导致 setTimeout 的回调函数执行比设定的预期值更久

在浏览器中，setTimeout()/setInterval() 的每调用一次定时器的最小间隔是 4ms，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的

## 面试题

### 经典for循环

主要考察setTimeout与闭包的结合

```js
// setTimeout作为异步宏任务，会先被存入执行队列，等到for循环结束才执行，此时i=6；所以结果就是6个6
for(var i=0; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
```

要想打印 0 1 2 3 4 5，有三种方式

#### 第一种 闭包

```js
for(var i=0; i<=5; i++){
   (function(j) {
    setTimeout(function(){
      console.log(j);
    }, 1000);
   })(i);
}
```

#### 第二种 使用ES6的let

```js
for(let i=0; i<=5; i++){
  setTimeout(function(){
      console.log(i);
  }, 1000);
}
```

#### 第三种 使用setTimeout的第三个参数

```js
// setTimeout内部同样是用到了闭包传参给回调函数
for(var i=0; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000, i);
}
```

### setTimeout与React函数组件

> 函数式组件捕获了渲染所使用的值

lazy1里面的setTimeout异步执行，获取的是点击lazy1时的number值

从number = 0开始；先点击lazy1，然后点击+按钮将number加到2，在点击完lazy1三秒后，number又变成了1；

因为点击lazy1时，number=0；此时的setTimeout只能获取到这次渲染的number值也就是0；点击+按钮的渲染不会被其捕获，所以等到setTImeout执行时，执行的是 setNumber(0+1)

[CodeSandbox代码https://codesandbox.io/s/usestate-zhi-geng-xin-he-han-shu-geng-xin-6zxqld](https://codesandbox.io/s/usestate-zhi-geng-xin-he-han-shu-geng-xin-6zxqld)

```js
export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [number, setNumber] = useState(0);

  const lazy1 = () => {
    // setClickCount(clickCount + 1);
    setTimeout(() => {
      // 获取点击按钮时的 state
      setNumber(number + 1);
    }, 3000);
  };

  const lazy2 = () => {
    // setClickCount(clickCount + 1);
    setTimeout(() => {
      // 每次执行时都会再去获取新的 state，而不是使用点击触发时的 state
      setNumber((number) => number + 1);
    }, 3000);
  };

  return (
    <div className="App">
      <p>
        数字：{number} 点击次数：{clickCount}
      </p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <br />
      <p>n次点击下面这个按钮，只更新一次</p>
      <button onClick={lazy1}>lazy1:只能获取点击按钮时候的状态</button>
      <br />
      <p>n次点击下面这个按钮，更新n次</p>
      <button onClick={lazy2}>
        lazy2:每次执行都会重新获取state, 所以获取的都是最新的state
      </button>
    </div>
  );
}
```
