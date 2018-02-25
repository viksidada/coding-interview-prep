// incomplete, need to revisit

const palendrome = (lines) => {

    let range = lines[0];
    let myArray = range.split(" ");
    let left = myArray[0];
    let right = myArray[myArray.length-1];

    if(myArray.length === 2) console.log(1);

    let sub1 = 0;

    if(((right - left) % 2) === 0) sub1 = 1;
    else sub1 = 2;

    let sub2 = Math.floor((right+left)/2);

    let sub3 = Math.ceil((right-left)/2);

    console.log(sub1+sub2+sub3);

}

palendrome(['1 7']);