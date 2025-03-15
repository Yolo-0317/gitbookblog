Array.prototype.myReduce = function (fn, initialValue) {
  let accumulator, currentValue, currentIndex;
  if (initialValue) {
    accumulator = initialValue;
    currentIndex = 0;
  } else {
    accumulator = arr[0];
    currentIndex = 1;
  }

  while (currentIndex < this.length) {
    currentValue = this[currentIndex];
    accumulator = fn(accumulator, currentValue, currentIndex, this);
    currentIndex++;
  }
  return accumulator;
};

[2, 3, 4].myReduce(function (preValue, curValue, curIndex) {
  console.log(preValue, curIndex);
});

[2, 3, 4].myReduce(function (preValue, curValue, curIndex) {
  console.log("has init", preValue, curIndex);
}, 1);
