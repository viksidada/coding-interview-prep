const cowbulls = (num1, num2) => {

    let result = [];

    let s1 = num1 + '';
    let s2 = num2 + '';

    let cows = 0;
    let bulls = 0;

    for(let j = 0; j < s1.length; j++) {
        for(let i = 0; i < s2.length; i++) {
            if(s1.charAt(j) === s2.charAt(i)) {
                if (i === j) bulls++;
                else cows++;
            }
        }
    }

    return (`cows = ${cows} and Bulls = ${bulls}`);
}

console.log(cowbulls(1234, 4271));