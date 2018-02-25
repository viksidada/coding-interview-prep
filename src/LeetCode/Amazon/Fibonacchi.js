const fibonacchi = (n) => {

    if ( n <= 1) return n;

    return (fibonacchi(n-1) + fibonacchi(n-2));
}

const iterativeFibo = (n) => {

    let result = [0,1];

    for (let i = 2; i <= n; i++) {
        let sum = result[i-1] + result[i-2];
        result.push(sum);
    }
    console.log(`${n}th Fibonacchi number is ${result[n]}`);
}

// console.log(fibonacchi(1));
// console.log(fibonacchi(2));
// console.log(fibonacchi(3));
// console.log(fibonacchi(4));
// console.log(fibonacchi(5));

(iterativeFibo(5));