// The name says it all

const fibonacchi = (number) => {
    if (number < 2) {
        return number;
    };

    return (fibonacchi(number-1) + fibonacchi(number-2));
};

console.log(fibonacchi(10));

// const fib = (num) => {
//
//     const result = [0,1];
//
//
//     for(let i = 2; i <= num; i++) {
//        let a = result[i-1];
//        let b = result[i-2];
//
//        result.push(a+b);
//
//     };
//
//     // return result[result.length-1];
//     return result;
// };
//
// // console.log(fib(1));
// // console.log(fib(2));
// // console.log(fib(3));
// // console.log(fib(4));
//
// console.log(fib(10));
