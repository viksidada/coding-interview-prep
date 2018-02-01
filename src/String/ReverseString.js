// Take a String, Reverse it and return it from the function

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str.charAt(i);
    };

    return reversed;
}

console.log(reverseString('vikas'));
console.log(reverseString('nagma'));

// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };
//
// console.log(reverseString('vikas'));
// console.log(reverseString('nagma'));