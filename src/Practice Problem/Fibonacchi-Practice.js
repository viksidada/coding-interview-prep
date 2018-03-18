const fib = (n) => {

    if(n <= 1) return n;

    return(fib(n-1) + fib(n-2));
}

const iterFib = (n) => {

    let result = [0,1];

    for(let i = 2; i <= n; i++) {
        let sum = result[i-1] + result[i-2];
        result.push(sum);
    }

    // console.log('result: ' + result);
    let total = result.reduce((a,b) => {
        return a+b;
    },0);
    console.log(`total sum is ${total}`);
    return `Fibonacchi number at the ${n}th position is ${result[n]}`;
}
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));

console.log(iterFib(1));
console.log(iterFib(2));
console.log(iterFib(3));
console.log(iterFib(4));
console.log(iterFib(5));
console.log(iterFib(6));
console.log(iterFib(7));