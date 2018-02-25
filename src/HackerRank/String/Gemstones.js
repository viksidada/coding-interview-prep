//incomplete

const gemstones = (array) => {

    let resultArray = [];
    let myset = new Set();

    for (let entry of array) {
        resultArray.push(...entry);

        console.log(resultArray);

    }



}

gemstones(['abcd', 'bdbe', 'acda']);