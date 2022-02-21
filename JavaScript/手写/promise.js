/**
 * 解决异步嵌套的问题
 * https://juejin.cn/post/6850037281206566919#heading-2
 */

// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class Promise_Simple {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 调用此方法就是成功
    const resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    // 调用此方法就是失败
    const reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error);
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === this.REJECTED) {
      onRejected(this.reason);
    }
  }
}

const promise = new Promise_Simple((resolve, reject) => {
  // 传入一个异步操作
  setTimeout(() => {
    resolve("成功");
  }, 1000);
}).then(
  (data) => {
    // 不能执行 因为调用 then 方法时，当前的 promise 并没有成功，一直处于 pending 状态
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);

class Promise_Advance {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

    // 调用此方法就是成功
    const resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    // 调用此方法就是失败
    const reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error);
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === this.REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

new Promise_Advance((resolve, reject) => {
  // 传入一个异步操作
  setTimeout(() => {
    resolve("成功");
  }, 1000);
}).then(
  (data) => {
    // 可以执行
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);

const resolvePromise = (newPromise, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
  if (newPromise === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }

  // Promise/A+ 2.3.3.3.3 只能调用一次
  let called;
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  if ((typeof x === "object" && x != null) || typeof x === "function") {
    try {
      // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
      let then = x.then;
      if (typeof then === "function") {
        // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
        then.call(
          x,
          (y) => {
            // y是x的then的返回值
            // 根据 promise 的状态决定是成功还是失败
            if (called) {
              return;
            }
            called = true;
            // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
            resolvePromise(newPromise, y, resolve, reject);
          },
          (r) => {
            // 只要失败就失败 Promise/A+ 2.3.3.3.2
            if (called) {
              return;
            }
            called = true;
            reject(r);
          }
        );
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
        resolve(x);
      }
    } catch (error) {
      // Promise/A+ 2.3.3.2
      if (called) {
        return;
      }
      called = true;
      reject(error);
    }
  } else {
    // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
    resolve(x);
  }
};

/**
 * 增加 then 的链式调用和值的穿透
 */
class Promise_Final {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

    // 调用此方法就是成功
    const resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    // 调用此方法就是失败
    const reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error);
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    //解决 onFufilled，onRejected 没有传值的问题
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后 then 的 resolve 中捕获
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // 每次调用 then 都返回一个新的 promise  Promise/A+ 2.2.7
    const newPromise = new Promise_Final((resolve, reject) => {
      console.log('object')
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // x可能是一个proimise
            resolvePromise(newPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
    });

    if (this.status === this.REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

new Promise_Final((resolve, reject) => {
  reject('失败');
}).then()