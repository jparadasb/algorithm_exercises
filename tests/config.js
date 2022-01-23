const config = [
  {
    'name': 'Weight Calculation',
    'func': require('../exercises/weight.js'),
    'cases': [
      {
        'input': '2000 10003 1234000 44444444 9999 11 11 22 123',
        'expected': '11 11 2000 10003 22 123 1234000 44444444 9999',
      },
      {
        'input': '103 123 4444 99 2000',
        'expected': '2000 103 123 4444 99',
      },
    ],
  },
  {
    'name': 'Flight Routes',
    'func': require('../exercises/flightRoutes.js'),
    'cases': [
      {
        'input': [
          ['MNL', 'TAG'],
          ['CEB', 'TAC'],
          ['TAG', 'CEB'],
          ['TAC', 'BOR'],
        ],
        'expected': 'MNL, TAG, CEB, TAC, BOR',
      },
      {
        'input': [
          ['Chicago', 'Winnipeg'],
          ['Halifax', 'Montreal'],
          ['Montreal', 'Toronto'],
          ['Toronto', 'Chicago'],
          ['Winnipeg', 'Seattle'],
        ],
        'expected': 'Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle',
      },
    ],
  },
  {
    'name': 'Arrays',
    'func': require('../exercises/arrays.js'),
    'cases': [
      {
        'input': [1, 3, 6, 4, 1, 2],
        'expected': 5,
      },
      {
        'input': [1, 2, 3],
        'expected': 4,
      },
      {
        'input': [-1, -3],
        'expected': 1,
      },
      {
        'input': [
          860108,
          591722,
          -969778,
          -439377,
          -511718,
          -207087,
          -457298,
          908118,
          311622,
          519103,
          -975605,
          -157567,
          -318617,
          -634176,
          264219,
          -82032,
          -277682,
          -364746,
          -788141,
          584287,
        ],
        'expected': 264220,
      },
      {
        'input': range(200000, -100000).filter((n) => n != 60000),
        'expected': 60000,
      },
      {
        'input': range(200000, 100000).filter((n) => n != 105000),
        'expected': 105000,
      },
    ],
  },
  {
    'name': 'BinaryGap',
    'func': require('../exercises/binaryGap.js'),
    'cases': [
      {
        'input': 1041,
        'expected': 5,
      },
      {
        'input': 561892,
        'expected': 3,
      },
      {
        'input': 1376796946,
        'expected': 5,
      },
    ],
  },
  {
    'name': 'SparseBinaryDecomposition',
    'func': require('../exercises/sparseBinaryDecomposition.js'),
    'cases': [
      {
        'input': 26,
        'expected': [8, 9, 17, 18, 5, 10, 16, 21],
      },
      {
        'input': 1166,
        'expected': getSparses(1166),
      },
      {
        'input': 0,
        'expected': 0,
      },
      {
        'input': 74901729,
        'expected': getSparses(74901729),
      },
      {
        'input': 216188401,
        'expected': getSparses(216188401),
      },
      {
        'input': 536870912,
        'expected': getSparses(536870912),
      },
      {
        'input': 1000000000,
        'expected': getSparses(1000000000),
      },
    ],
  },
  {
    'name': 'maximumThreeDigit',
    'func': require('../exercises/maximumThreeDigit.js'),
    'cases': [
      {
        'inputs': [512, 10],
        'expected': 972,
      },
      {
        'inputs': [191, 4],
        'expected': 591,
      },
      {
        'inputs': [285, 20],
        'expected': 999,
      },
    ],
  },
];

/**
 * Given a defined size and a point to start; return an array of numbers
 * @param {int} size The first number.
 * @param {int} startAt The second number.
 * @return {Array} Array of numbers with size and start in startAt.
 */
function range(size, startAt) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

/**
 *
 * @param {*} N
 * @return {Array}
 */
function getSparses(N) {
  let i = 0;
  let sparses = [];
  while (i < N) {
    const a = i;
    const b = N - a;

    if (isSparse(a) && isSparse(b)) {
      sparses = [a, b, ...sparses];
    }

    i++;
  }

  return sparses;
}

/**
 *
 * @param {*} N
 * @return {boolean}
 */
function isSparse(N) {
  if ((N & (N >> 1)) > 0) {
    return false;
  }

  return true;
}

module.exports = config;
