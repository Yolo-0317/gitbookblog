function objectFactory(fn, ...args) {
  // 创建一个空对象并将对象的__proto__指向fn的prototype
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

Array.prototype.myFlat1 = function(depth = 1) {
  if (depth < 1) {
    return this.slice();
  }
  return this.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(val.myFlat1(depth - 1)) : acc.concat(val)
  }, [])

}


Array.prototype.myFlat2 = function(depth = 1) {
  const stack = this.map(item => [item, depth])
  const res = []

  while (stack.length) {
    const [item, d] = stack.shift()
    if (Array.isArray(item) && d > 0) {
      stack.unshift(...item.map(i => [i, d - 1]))
    } else {
      res.push(item)
    }
  }

  return res
}

function debounce(fn, wait) {
  let timer = null;

  return function() {
    const context = this;
    const args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

function debounce1(fn, delay, immediate = false) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;

    const runNow = immediate && !timer

    clearTimeout(timer)
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(context, args);
        timer = null;
      }
    })

    if (runNow) {
      fn.apply(context, args)
    }
  }
}

function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    const context = this;
    const args = arguments;

    const nowTime = Date.now();
    if (nowTime - curTime >= delay) {
      fn.apply(context, args)
      curTime = Date.now();
    }
  }
}

// 柯里化
function baseSum(...nums)  {
  return nums.reduce((acc, val) => acc + val, 0)
}

function curry(fn) {
  return curried(...args) {

  }
}

