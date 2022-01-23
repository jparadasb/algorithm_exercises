const PerformaceLogger = require('../utils/performace.logger');

/*
Time Complexity: O(N)
*/
const solution1 = (N) => {
  let i = 0;
  if (N > 0) {
    while (i < N) {
      const a = i;
      const b = N - a;

      if (isSparse(a) && isSparse(b)) {
        return b;
      }

      i++;
    }
  }

  if (N == 0) {
    return 0;
  }


  return -1;
};

/*
Time Complexity: O(N)
*/
const solution2 = (N) => {
  let i = 0;
  const invalid = new Set();
  if (N > 0) {
    while (i < N) {
      const random = Math.floor(Math.random() * N);
      if (!invalid.has(random)) {
        const a = random;
        const b = N - a;

        if (isSparse(a) && isSparse(b)) {
          i = N;
          return b;
        }

        invalid.add(random);

        i++;
      }
    }
  }

  if (N == 0) {
    return 0;
  }


  return -1;
};

/*
Time Complexity: O(N)
*/
const solution3 = (N) => {
  let i = 0;
  const invalid = new Set();
  if (N > 0) {
    while (i < N) {
      if (N % 2 == 0 && !invalid.has(N / 2)) {
        if (isSparse(N / 2)) {
          i = N;
          return N / 2;
        } else {
          invalid.add(N / 2);
        }
      } else {
        const random = Math.floor(Math.random() * N);
        if (!invalid.has(random)) {
          const a = random;
          const b = N - a;

          if (isSparse(a) && isSparse(b)) {
            i = N;
            return b;
          }

          invalid.add(random);

          i++;
        }
      }
    }
  }

  if (N == 0) {
    return 0;
  }


  return -1;
};

/*
Time Complexity: O(N)
*/
const solution = (N) => {
  let i = 0;
  const remainder = N % 2;
  const half = N / 2;

  if (remainder == 0 && isSparse(half)) {
    return half;
  }

  if (N > 0) {
    while (i < N) {
      if (isSparse(i)) {
        const b = N - i;
        if (isSparse(b)) {
          return i;
        }
      }
      i++;
    }
  }

  return -1;
};

const isSparse = (N) => {
  if ((N & (N >> 1)) > 0) {
    return false;
  }

  return true;
};

const _isSparse = (N) => {
  const binary = N.toString(2);
  let lastBitIsOn = null;
  let current = 0;
  let counter = 0;
  const size = binary.length;

  if (size < 2) {
    return true;
  }

  for (const n of binary) {
    current++;

    if (counter > 1) {
      return false;
    }

    if (size == current && !lastBitIsOn) {
      return true;
    } else if (size == current) {
      if (n == '0') {
        return true;
      } else {
        return false;
      }
    }

    if (n == '1') {
      counter++;
      lastBitIsOn = true;
    } else {
      counter = 0;
      lastBitIsOn = false;
    }
  }
};

module.exports = solution;
