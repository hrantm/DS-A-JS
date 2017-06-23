const fibs = num => {
    if(num === 1) {
        return 0;
    }else if (num === 2) {
        return 1;
    }
    return fibs(num - 1) + fibs(num - 2);
};

// console.log(fibs(100));

const fibsMemo = (num, memo = {}) => {
    if(num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }
    if(memo[num]) {
        return memo[num];
    } 
    memo[num] = fibsMemo(num - 1, memo) + fibs(num - 2, memo);
    return memo[num];
};

console.log(fibsMemo(3));