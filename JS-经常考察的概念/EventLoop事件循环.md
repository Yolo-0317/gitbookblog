# 事件循环 EventLoop

## 执行顺序

运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，
先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

1、JavaScript 引擎总是先执行同步代码，然后再执行异步代码。
2、微任务的优先级高于宏任务。
3、微任务可以在 Event Loop 中插队。

- 首先执行所有微任务
- 执行宏任务
- 再次执行所有（新添加的）微任务
- 执行下一个宏任务
- 绕圈穿过

代码题一：

```JavaScript
function app() {
  setTimeout(() => {
    console.log("1-1");
    Promise.resolve().then(() => {
      console.log("2-1");
    });
  });
  console.log("1-2");
  Promise.resolve().then(() => {
    console.log("1-3");
    setTimeout(() => {
      console.log("3-1");
    });
  });
}
app();
```

结果

```text
1-2
1-3
1-1
2-1
3-1
```

代码题二：

```js
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');
```

```js
// start  end  promise1  timer1  promise2  timer2
```

1. 先执行同步
2. 同一层级下(不理解层级，可以先不管，后面会讲)，微任务永远比宏任务先执行
3. 每个宏任务,都单独关联了一个微任务队列

宏任务包括
 宿主环境提供的，比如浏览器\ ajax、setTimeout、setInterval、setTmmediate(只兼容ie)、script、requestAnimationFrame、messageChannel、UI渲染、一些浏览器api
![宏任务](http://www.yoloworld.site:3000/blogpng/%E5%AE%8F%E4%BB%BB%E5%8A%A1.png)
微任务包括
语言本身提供的，比如promise.then API、queueMicrotask(基于then)、mutationObserver(浏览器提供)、messageChannel 、mutationObersve
![微任务](http://www.yoloworld.site:3000/blogpng/%E5%BE%AE%E4%BB%BB%E5%8A%A1.png)

## EventLoop事件循环

JS在单线程中实现异步机制依靠浏览器的任务队列  
任务队列分为同步任务队列与异步任务队列，异步任务又可以分为宏任务与微任务

在同步任务自上而下执行时，如果遇到一个异步任务，不会立即执行，而是把它放到异步任务队列中去排队  
当同步任务执行完成后，才会到异步任务队列进行查找等待任务队列中的内容
>（同步任务队列完不成，不管异步任务是否达到时间，都不执行），等达到条件后执行，然后再接着去异步任务队列中查找。  
这就是因为js是单线程的，一次只能处理一件事情

## 执行栈与任务队列

_执行栈_：从名字可以看出，执行栈使用到的是数据结构中的栈结构， 它是一个存储函数调用的栈结构，遵循先进后出的原则。
> 它主要负责跟踪所有要执行的代码。 每当一个函数执行完成时，就会从堆栈中弹出（pop）该执行完成函数；如果有代码需要进去执行的话，就进行 push 操作。

_任务队列_： 从名字中可以看出，任务队列使用到的是数据结构中的队列结构，它用来保存异步任务，遵循先进先出的原则。它主要负责将新的任务发送到队列中进行处理。

![EventLoop](http://www.yoloworld.site:3000/blogpng/EventLoop.jpeg)

```JavaScript
console.log("script start");

async function async1() {
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 end");
}

async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

```

```js
 script start => async2 end => Promise => script end => async1 end=> promise1 => promise2 => setTimeout
```

```js
async function async1(){
  await async2()
  console.log('async1 end')
}

// 等价于
async function async1() {
  return new Promise(resolve => {
    resolve(async2())
  }).then(() => {
    console.log('async1 end')
  })
}
```
