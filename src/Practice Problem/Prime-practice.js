const primes = (n) => {

    let isPrime = [];
    let result = [];

    for(let i = 0; i < n; i++) {
        isPrime[i] = true;
    }

    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2; i <= Math.sqrt(n); i++) {
        for(let j = 2; i*j < n; j++) {
            isPrime[i*j] = false;
        }
    }

    for(let i = 0; i < n; i++) {
        if(isPrime[i] === true) result.push(i);
    }
    
    console.log(result);
}

primes(50);