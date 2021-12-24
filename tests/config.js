const config = [
    {
        "name": "Arrays",
        "func": require("../exercises/arrays.js"),
        "cases": [
            {
                "input": [1, 3, 6, 4, 1, 2],
                "expected": 5
            },
            {
                "input": [1, 2, 3],
                "expected": 4
            },
            {
                "input": [-1, -3],
                "expected": 1
            },
            {
                "input": [860108, 591722, -969778, -439377, -511718, -207087, -457298, 908118, 311622, 519103, -975605, -157567, -318617, -634176, 264219, -82032, -277682, -364746, -788141, 584287],
                "expected": 264220
            },
            {
                "input": range(200000, -100000).filter((n) => n != 60000),
                "expected": 60000
            },
            {
                "input": range(200000, 100000).filter((n) => n != 105000),
                "expected": 105000
            }
        ],
    },
    {
        "name": "BinaryGap",
        "func": require("../exercises/binaryGap.js"),
        "cases": [
            {
                "input": 1041,
                "expected": 5
            },
            {
                "input": 561892,
                "expected": 3
            },
            {
                "input": 1376796946,
                "expected": 5
            }
        ]
    },
    {
        "name": "SparseBinaryDecomposition",
        "func": require("../exercises/sparseBinaryDecomposition.js"),
        "cases": [
            {
                "input": 26,
                "expected": [8, 9, 17, 18, 5, 10, 16, 21]
            },
            {
                "input": 1166,
                "expected": getSparses(1166)
            },
            {
                "input": 0,
                "expected": 0
            },
            {
                "input": 74901729,
                "expected": getSparses(74901729)
            },
            {
                "input": 216188401,
                "expected": getSparses(216188401)
            },
            {
                "input": 536870912,
                "expected": getSparses(536870912)
            },
            {
                "input": 1000000000,
                "expected": getSparses(1000000000)
            }
        ]
    }
]

function range(size, startAt) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function getSparses(N) {
    let i = 1;
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

function isSparse(N) {
    if ((N & (N >> 1)) > 0) {
        return false;
    }

    return true;
}

module.exports = config;