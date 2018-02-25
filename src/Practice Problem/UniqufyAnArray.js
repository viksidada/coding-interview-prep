const uniqfy = (array) => {

    let myset = new Set();
    let result = [];

    for (let element of array) {
        myset.add(element);
    }

    let iterator = myset.values();
    let i = 0;

    while( i < myset.size) {
        result.push(iterator.next().value);
        i++;
    }

    console.log(result);
}

uniqfy([1,3,5,7,9,2,4,6,1,3,5,2,4,6]);