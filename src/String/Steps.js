// program to create steps

const steps = (number) => {

    let i = 1;

    while ( i < number) {

        let result = '';

        for (let j = 0; j < i; j++) {
            result += '#';
        };

        for (let j = 0; j < number - i; j++) {
            result += ' ';
        };

        i++;

        console.log(result);
    };
};

steps(5);