/**
 * 一个目标者对象 Subject，拥有方法：添加 / 删除 / 通知 Observer
 * 多个观察者对象 Observer，拥有方法：接收 Subject 状态变更通知并处理；
 * 目标对象 Subject 状态变更时，通知所有 Observer
 */
class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removerObserver(observer) {
    const index = this.observerList.findIndex((o) => o.name === observer.name);
    this.observerList.splice(index, 1);
  }

  notifyObservers(message) {
    this.observerList.forEach((observer) => observer.notified(message));
  }
}

class Observer {
  /**
   *
   * @param {*} name
   * @param {Subject} subject
   */
  constructor(name, subject) {
    this.name = name;
    if (subject) {
      subject.addObserver(this);
    }
  }

  notified(message) {
    console.log(this.name, "got message", message);
  }
}

const subject = new Subject();

const observer1 = new Observer("observer1", subject);

subject.notifyObservers("下雨收衣服了");
