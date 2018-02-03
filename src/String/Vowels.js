//Program to find the number of vowels in a string

const vowelFinder = (str) => {

    let vowels = ['a','e','i','o','u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    };

    return count;
}

console.log(vowelFinder('Hi there!'));
console.log(vowelFinder('why!'));