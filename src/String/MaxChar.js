// Find the maximum characters in a string

const maxChar = (str) => {

    let myMap = new Map();

    let max = 0;
    let key = [];

    for (let char of str) {
        let value = myMap.get(char);
        if(value === undefined) {
            myMap.set(char, 1);
        } else {
            value++;
            if (value >= max) {
                max = value;
                key.push(char);
            };
            myMap.set(char, value);
        }
    };

    console.log('Mave char reapeated is: ' + key + ' and its frequency is: ' + max);

     return myMap;
};

console.log(maxChar('viksidada'));
console.log(maxChar('viksidada').values());