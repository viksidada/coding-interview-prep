const climbingStairs = (n) => {
    if(n <= 0) return 0;
    if(n ===1) return 1;
    if(n === 2) return 2;

    let totalWays = 0;
    let oneBefore = 1;
    let twoBefore = 2;

    for(let i = 2; i < n; i++) {
        totalWays = oneBefore + twoBefore;
        twoBefore = oneBefore;
        oneBefore = totalWays;
    }

    return totalWays;
}

console.log(climbingStairs(3));

