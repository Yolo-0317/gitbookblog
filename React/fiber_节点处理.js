/**
 * 我们使用fiber链表的数据结构来表达一个 N 叉树，fiber链表的节点结构如下：
 * `let fiberNode  = {
 *      child: A, // 指向该节点的第一个子节点
 *      return: B, // 指向该节点的父节点
 *      sibling: C // 指向该节点第一个临近的兄弟节点
 * }`
 *
 * 比如下面这颗树：
 * A -- B
 *   -- C -- E
 *   -- D
 *
 * 使用fiber链表来表达的话，应该是：
 *   A = { child: B }
 *   B = { return: A, sibling: C }
 *   C = { return: A, sibling: D, child: E }
 *   D = { return: A }
 *   E = { return: C }
 *
 * 请写一个函数实现基于fiber链表的树的深度优先遍历。
 * @param root fiber链表节点类型，一棵树的根节点
 * @param callback 遍历的回调函数，当一个节点被遍历到的时候，调用回调函数传入被遍历的节点
 * https://juejin.cn/post/6925665796106485767
 */

function fiberTreeDFS(root, callback) {
  const rootNode = root;
  let current = rootNode;

  while (current) {
    callback(current);
    const currentNode = { ...current };
    current = current.child;
    if (!current && currentNode.sibling) {
      current = currentNode.sibling;
    }
    if (!current && !currentNode.sibling && currentNode.return !== rootNode) {
      current = currentNode.return.sibling;
    }
  }
}

const A = { name: "a" };
const B = { name: "b" };
const C = { name: "c" };
const D = { name: "d" };
const E = { name: "e" };

A.child = B;
B.sibling = C;
B.return = A;
C.sibling = D;
C.return = A;
C.child = E;
D.return = A;
E.return = C;

function getNode(node) {
  console.log(node);
}

fiberTreeDFS(A, getNode);
