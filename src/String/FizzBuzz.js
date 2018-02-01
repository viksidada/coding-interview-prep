
const fizzBuzz = (number) => {

    for (let i = 0; i < number; i++) {
        if ((i % 3 === 0) && (i % 5=== 0)) {
            console.log('fIZZbUZZ');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else console.log(i);

    };
};

fizzBuzz(25);
