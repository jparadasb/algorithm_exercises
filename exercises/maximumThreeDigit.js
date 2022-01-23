const solution = (N, K) => {
  if (K != 0) {
    const str = N.toString();
    let times = 0;
    let strArray = str.split('').map((n) => parseInt(n));

    for (let i = 0; i < str.length; i++) {
      for (let j = times; j < K; j++) {
        const copyStr = strArray.slice();
        copyStr[i] = copyStr[i] + 1;
        if (parseInt(copyStr.join('')) < 1000) {
          strArray = copyStr.slice();
          times++;
        }
      }
    }

    return parseInt(strArray.join(''));
  }
};


module.exports = solution;
