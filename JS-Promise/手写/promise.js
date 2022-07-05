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
    return this;
  }

  catch(onError) {
    if (this.status === this.REJECTED) {
      onError(this.reason);
    }
  }
}

const promise = new Promise_Simple((resolve, reject) => {
  // 传入一个异步操作
  setTimeout(() => {
    // resolve("成功");
    reject("失败");
  }, 1000);
});
promise.then(
  (data) => {
    // 不能执行 因为调用 then 方法时，当前的 promise 并没有成功，一直处于 pending 状态
    console.log("success", data);
  },
  // (err) => {
  //   console.log("faild", err);
  // }
).catch((err) => {
  console.log(err);
});

