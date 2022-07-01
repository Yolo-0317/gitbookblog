const task1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("过关！"), 1000)
);
const task1_1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("过关！"), 1000)
);
const task2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("在第一关失败了"), 2000)
);
const task3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("在第二关失败了"), 3000)
);

Promise.all([task1, task2, task3, task1_1]).then(null, (r) => console.log(r)); // 在第一关失败了
