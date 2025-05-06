function debounce(fn, delay, immediate = false) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    const runNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(context, args);
      }
      timer = null;
    }, delay);

    if (runNow) {
      fn.apply(context, args);
    }
  };
}

function throttle(fn, delay) {
  let curTime = Date.now();

  return function () {
    const nowTime = Date.now();
    if (nowTime - curTime >= delay) {
      fn.call(this, arguments);
      curTime = nowTime;
    }
  };
}

Array.prototype.myFlat = function (depth = 1) {
  if (depth < 1) {
    return this.slice();
  }

  return this.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(val.myFlat(depth - 1));
    } else {
      return acc.concat(val);
    }
  }, []);
};

Array.prototype.myFlat1 = function (depth = 1) {
  const stack = this.map((item) => [item, depth]);
  const res = [];

  while (stack.length) {
    const [val, depth] = stack.shift();
    if (Array.isArray(val) && depth > 1) {
      stack.unshift(val.map((item) => [item, depth - 1]));
      continue;
    }
    res.push(val);
  }

  return res;
};

console.log([1, [2, [3, [4]], 5]].myFlat(2));
console.log([1, [2, [3, [4]], 5]].myFlat(1));
console.log([1, [2, [3, [4]], 5]].myFlat(3));
console.log([1, [2, [3, [4]], 5]].myFlat(0));
