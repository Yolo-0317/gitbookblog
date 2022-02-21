class SingleList {
  constructor() {
    this.size = 0; // 单链表的长度
    this.head = new Node("head"); // 表头节点
    this.currNode = ""; // 当前节点的指向
  }

  /**
   * 在单链表中寻找item元素
   * @param {*} item
   * @returns
   */
  find(item) {
    let currNode = this.head;

    while (currNode && currNode.data !== item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  /**
   * 获取单链表的最后一个节点
   * @returns
   */
  findLast() {
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }

  /**
   * 从当前位置向前移动 n 个节点。
   * @param {*} n
   * @param {*} currNode
   * @returns
   */
  advance(n, currNode = this.head) {
    this.currNode = currNode;

    while (n-- && this.currNode.next) {
      this.currNode = this.currNode.next;
    }

    return this.currNode;
  }

  /**
   * 在尾部添加元素
   * @param {*} element
   */
  append(element) {
    let newNode = new Node(element);
    let currNode = this.findLast();

    currNode.next = newNode;
    this.size++;
  }
}
