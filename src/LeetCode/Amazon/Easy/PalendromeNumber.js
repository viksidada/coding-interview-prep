const palendromeNumber = (x) => {

    let sign = Math.sign(x);
    let y  = x * sign;
    // console.log(x);

    let reverse = ("" + x).split("").reverse().join("");
    reverse = sign * parseInt(reverse);
    // console.log(reverse);


    return (x === reverse);

}

// console.log(palendromeNumber(121));
console.log(palendromeNumber(-2147447412));