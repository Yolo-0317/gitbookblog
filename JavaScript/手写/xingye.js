function maxLengthBetweenEqualCharacters(s) {
  // write code here
  const obj = {};
  for (let i = 0; i < s.length; i += 1) {
    const curEl = s[i];
    const curElIndexes = obj[`${curEl}`];
    if (Array.isArray(curElIndexes)) {
      curElIndexes.push(i);
      obj[`${curEl}`] = curElIndexes;
    } else {
      obj[`${curEl}`] = [i];
    }
  }
  let res = -1;

  Object.values(obj).forEach((value) => {
    const len = value.length;
    if (value.length > 1) {
      const diff = value[len - 1] - value[0];
      res = diff > res ? diff - 1 : res;
    }
  });

  console.log(res)
}

maxLengthBetweenEqualCharacters("fdeg");
