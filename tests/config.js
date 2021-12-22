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
            }
        ]
    }
]

module.exports = config;