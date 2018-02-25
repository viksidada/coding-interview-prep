// 1. fina all prime numbers till n
// 2. find if n is a prime number or not
//3. find the count of prime numbers n amd m

const prime = (n) => {

    let isPrime = [];
    let result = [];

    for(let i = 0; i < n; i++) {
        isPrime[i] = true;
    }

    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2; i < Math.sqrt(n); i++) {
        for(let j = 2; i*j <= n; j++) {
            isPrime[i*j] = false;
        }
    }

    for(let i = 0; i < n; i++) {
        if(isPrime[i] === true) result.push(i);
    }

    console.log(`Prime numbers between 0 and ${n} are: ${result}`);
    console.log(`number of prime numbers between 0 and ${n} are: ${result.length}`);

}

prime(50);