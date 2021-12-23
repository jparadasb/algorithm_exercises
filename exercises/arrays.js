const PerformaceLogger = require("../utils/performace.logger");

// first approach
function solution1(A) {
    const positives = A.filter(n => n > 0);

    if (positives.length < 1) {
        return 1;
    }

    const max = Math.max(...positives);
    const min = Math.min(...positives);

    const all = range(max, min);
    const differences = all.filter(x => !positives.includes(x));

    if (differences.length < 1) {
        return max + 1;
    }

    return Math.min(...differences);
}

// Second approach
// Its difficult to determinate here what is the order of this function because the sort could be a N^2 or logN
// O(n log n + n)
function solution2(A) {
    const set = new Set();

    A.sort().forEach((n) => {
        if (n > 0) {
            set.add(n)
        }
    })

    if (set.size < 1) {
        return 1;
    }
    list = Array.from(set);
    const max = list.pop()
    const min = list[0]

    for (let i = min; i <= max + 1; i++) {
        if (!set.has(i)) {
            logger.stop()
            return i;
        }
    }
}

// Third approach

function solution3(A) {

    const size = A.length;
    const map = A.reduce((prev, n) => {
        if (n > 0) {
            return [...prev, n];
        }

        return prev;
    }, [])

    if (map.length < 1) {
        return 1;
    }

    const max = Math.max(...map)
    const min = Math.min(...map)

    for (let i = min; i <= max + 1; i++) {
        if (!map.includes(i)) {
            return i;
        }
    }
}

// Fourth approach

// Here I remove the second iteration to have an O(n + n)

function solution(A) {
    const set = new Set();
    let max = -Infinity;
    let min = Infinity;

    A.forEach((n) => {
        if (n > 0) {
            set.add(n)
            if (n > max) {
                max = n;
            }

            if (n < min) {
                min = n;
            }
        }
    })

    if (set.size < 1) {
        return 1;
    }

    for (let i = min; i <= max + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}

function range(size, startAt) {
    return [...Array(size).keys()].map(i => i + startAt);
}

module.exports = solution;