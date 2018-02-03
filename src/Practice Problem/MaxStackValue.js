// Find the maximum value in a stack

let myArray = [1,2,3,4,5,6,7];
let newArray = [];
const length = myArray.length;

let max = 0;

for (let i = 0; i < length; i++) {
    let value = myArray.shift();
    console.log(myArray);
    newArray.unshift(value);

    max = (max < value) ? value : max;
}

console.log('max value: ' + max);
