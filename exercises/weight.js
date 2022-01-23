const calculateWeight = (numbers) => {
  let total = 0;
  for (n of numbers) {
    total = total + parseInt(n);
  }

  return total;
};

/*
Time Complexity: O(n)
*/
const orderWeight = (strng) => {
  const numbers = strng.split(' ');
  return numbers.sort((a, b) => {
    const weightA = calculateWeight(a);
    const weightB = calculateWeight(b);
    const distance = weightA - weightB;
    if (distance !== 0) {
      return distance;
    }

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }).join(' ');
};

const solution = orderWeight;

module.exports = solution;
