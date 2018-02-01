// Reverse an Int

const reverseInt = (int) => {

    return (Math.sign(int) * parseInt(int.toString().split('').reverse().join('')));
};

console.log(reverseInt(153));
console.log(reverseInt(-852));
console.log(reverseInt(-900));