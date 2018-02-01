// Divide an Array into sub-arrays of given chunk size

const chunkArray = (array, chunkSize) => {

    let resultArray = [];
    let size = array.length;
    console.log(size);


    for(let i = 0; i < size; i = i+chunkSize) {

        resultArray.push(array.slice(i, i+chunkSize));
    }

    return resultArray;
};

let array = [1,2,3,4,5,6,7,8,9, 10];
console.log(chunkArray(array, 9));