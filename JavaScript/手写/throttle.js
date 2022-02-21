/**
 * 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 */
function throttle_simple(fn, wait, immediate) {
  let flag = true;
  let timer = null;

  return function (...args) {
    if (immediate) {
      fn.call(this, ...args);
      return;
    }
    if (flag) {
      flag = false;
      timer = setTimeout(() => {
        fn.call(this, ...args);
        flag = true;
        clearTimeout(timer);
      }, wait);
    }
  };
}

/**
 * 利用时间戳简单版
 */
function throttle_timestamp(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("handle must be an function");
  }
  let last = 0;

  return function (...args) {
    const now = Date.now();
    const lastIsFinish = last + delay < now;
    if (lastIsFinish) {
      fn.call(this, ...args);
      last = now;
    } else {
      console.log(`执行间隔不足${delay}`);
    }
  };
}

/**
 * 利用时间差
 * @param {*} fn
 * @param {*} wait
 * @param {*} immediate
 * 当我们发现系统中有一个定时器了，就意味着我们不需要再开定时器
 * 说明这次的操作发生了在我们定义的频次时间范围内，那就不应该执行handle
 */

function handleFn(handle, timer, context, args) {
  clearTimeout(timer); //清除定时器
  timer = null;
  handle && handle.call(context, ...args);
  previous = new Date();
}

function throttle(handle, wait = 1000, immediate = false) {
  if (typeof handle !== "function") {
    throw new Error("handle must be an function");
  }
  let prev = 0;
  let timer = null;

  return function (...args) {
    //获取当前时间
    let now = new Date();
    if (!timer) {
      prev = now;
    }
    let interval = wait - (now - prev);

    if (interval <= 0) {
      // 上一个循环已经结束，清理掉timer
      handleFn(null, timer, this, args);
    } else if (!timer) {
      // 这个时候我们就可以自定义一个定时器，让handle在interval之后去执行
      timer = setTimeout(() => {
        handleFn(handle, timer, this, args);
      }, interval);
    }
  };
}

function fn() {
  console.log(new Date());
}
const newFn = throttle_timestamp(fn, 1000);

setInterval(() => {
  newFn();
}, 100);
