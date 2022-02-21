var a1 = { name: "a1", child: null, sibling: null, parent: null };
// var a1 = { name: 'a1', child: null, sibling: null, parent: null };
var b1 = { name: "b1", child: null, sibling: null, parent: null };
var b2 = { name: "b2", child: null, sibling: null, parent: null };
var b3 = { name: "b3", child: null, sibling: null, parent: null };
var c1 = { name: "c1", child: null, sibling: null, parent: null };
var c2 = { name: "c2", child: null, sibling: null, parent: null };
var d1 = { name: "d1", child: null, sibling: null, parent: null };
var d2 = { name: "d2", child: null, sibling: null, parent: null };

a1.child = b1;
b2.child = c1;
b3.child = c2;
c1.child = d1;

b1.sibling = b2;
b2.sibling = b3;
d1.sibling = d2;

b1.parent = a1;
b2.parent = a1;
b3.parent = a1;
c1.parent = b2;
c2.parent = b3;
d1.parent = c1;
d2.parent = c1;

console.log(a1);

function traverse(fiberNode) {
  console.log(fiberNode.name);
  if (fiberNode.child) {
    traverse(fiberNode.child);
  }
  if (fiberNode.sibling) {
    traverse(fiberNode.sibling);
  }
}

// 要求
traverse(a1); // 将依次打印出 a1 b1 b2 c1 d1 d2 b3 c2
