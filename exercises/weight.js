const calculateWeight = (numbers) => {
  let total = 0;
  for (n of numbers) {
    total = total + parseInt(n);
  }

  return total;
};

function orderWeight(strng) {
  const numbers = strng.split(' ');
  const mapStruct = numbers.map((n) => {
    const weight = calculateWeight(n);
    return {
      value: n,
      weight,
    };
  });

  return mapStruct.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1;
    }

    if (a.weight < b.weight) {
      return -1;
    }

    if (a.value > b.value) {
      return 1;
    }

    if (a.value < b.value) {
      return -1;
    }

    return 0;
  })
      .map((struct) => {
        return struct.value;
      })
      .join(' ');
}

const solution = orderWeight;

module.exports = solution;
