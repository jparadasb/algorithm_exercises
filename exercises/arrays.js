// This is a demo task.

// Write a function:

//     function solution(A);

// that, given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range[1..100, 000];
// each element of array A is an integer within the range[−1, 000, 000..1, 000, 000].
// Copyright 2009–2021 by Codility Limited.All Rights Reserved.Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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

function solution(A) {
    const set = new Set();
    const size = A.length;
    for (n of A) {
        if (n > 0) {
            set.add(n)
        }
    }


    for (let i = 1; i <= size + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}

function range(size, startAt) {
    return [...Array(size).keys()].map(i => i + startAt);
}

module.exports = solution;