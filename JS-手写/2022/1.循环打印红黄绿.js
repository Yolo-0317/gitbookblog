function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const lightMap = {
  red,
  green,
  yellow,
};

function callbackFunc(timer, light, callback) {
  setTimeout(() => {
    lightMap[light]();
    callback();
  }, timer);
}

function step() {
  callbackFunc(3000, "red", () => {
    callbackFunc(1000, "green", () => {
      callbackFunc(2000, "yellow", () => {
        step();
      });
    });
  });
}
// step();

const promiseFunc = (timer, light) => {
  new Promise((resolve, reject) => {
    callbackFunc(timer, light, resolve);
  });
};

// const lightRed = new Promise((resolve, reject) => {
//   callbackFunc(3000, "red", resolve);
// });
// const lightGreen = new Promise((resolve, reject) => {
//   callbackFunc(1000, "green", resolve);
// });
// const lightYellow = new Promise((resolve, reject) => {
//   callbackFunc(2000, "yellow", resolve);
// });

const promiseStep = () => {
  promiseFunc(3000, "red");
};

promiseStep();
