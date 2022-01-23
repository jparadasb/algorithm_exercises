const solution = (N) => {
  const binary = N.toString(2);
  let gap = 0;
  let lastGap = 0;
  let gapCounter = 0;

  for (bin of binary) {
    if (bin == '0') {
      gapCounter++;
    } else if (bin == '1') {
      if (gap > lastGap) {
        lastGap = gap;
      }
      gap = gapCounter;
      gapCounter = 0;
    }
  }

  if (gap > lastGap) {
    return gap;
  }

  return lastGap;
};

module.exports = solution;
