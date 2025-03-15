/**
 *
 * @param {Array<Promise>} arr
 */
function promiseAllSettle(arr) {
  const promiseCount = arr.length;
  let currentCount = 0;
  let errorCount = 0;
  const result = [];

  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      Promise.resolve(item).then(
        (res) => {
          result[index] = { res };
          currentCount += 1;
          if (currentCount === promiseCount) {
            resolve(result);
          }
        },
        (error) => {
          result[index] = { error };
          currentCount += 1;
          errorCount += 1;
          if (errorCount === promiseCount) {
            reject(result);
          }
          if (currentCount === promiseCount) {
            resolve(result);
          }
        }
      );
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise3");
  }, 3000);
});

promiseAllSettle([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("error", error);
  });
