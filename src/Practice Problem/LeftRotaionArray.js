// Program to rotate an array of 'n' elements 'd' times

const leftRotation = (n, d) => {

    let myArray = [];
    let resultArray =[];

    for(let i =0; i < n; i++) {
        myArray.push(i);
    }

    let x = 0;


    while(x < d) {
        let value = myArray[0];

       resultArray = myArray.slice(1);
       resultArray.push(value);

        x++;
        myArray = resultArray;
    }

    return (myArray);
}

console.log(...leftRotation(10,3));