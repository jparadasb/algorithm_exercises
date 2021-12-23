function solution(N) {
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
}

function isSparse(N) {
    let binary = N.toString(2);
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
            if (n == "0") {
                return true;
            } else {
                return false;
            }
        }

        if (n == "1") {
            counter++;
            lastBitIsOn = true;
        } else {
            counter = 0;
            lastBitIsOn = false;
        }
    }
}

module.exports = solution;