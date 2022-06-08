// 私有方法和属性加 _ 用以标识，仅在类内部使用
// 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问,但 ES6 不提供，只能通过变通方法模拟实现

/**
 * 核心是：创建任务管理队列，_createTask
 * 通过call方法将 异步任务传入 类的实例，每放入一个，_count + 1
 * 在传入数量小于_max时，直接执行任务
 * 大于或者等于_max时，将异步任务放入任务队列
 * 每次执行完异步任务，通过finally方法，获取队列中的下一个异步任务，_count - 1
 */
class LimitPromise {
  constructor(max) {
    // 允许的最大并发数
    this._max = max;
    // 当前正在执行的任务数量
    this._count = 0;
    // 等待执行的任务队列
    this._taskQueue = [];
  }

  /**
   * 调用器，将异步任务函数和它的参数传入
   * @param caller 异步任务函数，它必须是async函数或者返回Promise的函数
   * @returns
   */
  call(caller) {
    return new Promise((resolve, reject) => {
      const task = this._createTask(caller, resolve, reject);
      if (this._count >= this._max) {
        // 当前执行数量大于或者等于最大并发数
        // 先把任务放入任务队列
        this._taskQueue.push(task);
      }else {
        // 当前执行数量小于最大并发数
        // 直接执行任务
        task();
      }
    });
  }

  /**
   * 创建一个任务
   * @param caller 实际执行的函数
   * @returns {Function} 返回一个任务函数
   * @private 
   */
  _createTask(caller, resolve, reject) {
    return () => {
      // 实际上是在这里调用了异步任务，并将异步任务的返回（resolve和reject）抛给了上层
      caller()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          // 任务队列的消费区，利用Promise的finally方法，在异步任务结束后，取出下一个任务执行
          this._count -= 1;
          if (this._taskQueue.length) {
            const task = this._taskQueue.shift();
            task();
          }
        });
      // 每创建一个任务，this._count+1
      this._count += 1;
    };
  }
}
