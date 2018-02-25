const version = (s1, s2) => {

    let num1 = (s1.split('.'));
    let num2 = (s2.split('.'));


    for(let i = 0; i < num1.length; i++) {
        num1[i] = parseInt(num1[i]);
    }

    console.log(num1);

    for(let i = 0; i < num2.length; i++) {
        num2[i] = parseInt(num2[i]);
    }

    console.log(num2);

    let length = (num1.length >= num2.length) ? num1.length : num2.length;

    let i = 0;

    while(i < length ) {
        if(num1[i] === undefined) num1[i] = 0;
        if(num2[i] === undefined) num2[i] = 0;

        console.log(num1[i]);
        console.log(num2[i]);

        if(num1[i] > num2[i]) return 1;
        else if (num1[i] < num2[i]) return -1;

        i++;
    }

    return 0;
}

console.log(version('1', '0'));