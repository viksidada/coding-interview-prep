const reverse = (num) => {

    if(num === null) return null;
    let sign = Math.sign(num);

    let number = ("" + num).split("").reverse().join("");


    return (sign * parseInt(number));

}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-120));

