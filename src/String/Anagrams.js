// Find out if two strings are Anagrams of each other

const word = 'hi there!!!';
let newWord = word.replace(/[^\w]/g, '');
console.log(newWord);


const anagrams = (word1, word2) => {
    let newWord1 = word1.replace(/[^\w]/g, '');
    let newWord2 = word2.replace(/[^\w]/g, '');
    let answer = 'true';

    if (newWord1.length !== newWord2.length) {
        return false;
    }

    const map1 = mapfunc(newWord1);
    const map2 = mapfunc(newWord2);

    for (let a of map1) {
        if (map1.get(a) !== map2.get(a)) {
            answer = false;
        };
    };

    return answer;
}

const mapfunc = (str) => {

    let myMap = new Map();

    for (let char of str) {
        let value = myMap.get(char);

        if (value) {
            myMap.set(char, value++);
        } else {
            value = 1;
            myMap.set(char, value);
        }
    }

    return myMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('hi there!', 'bye! there!'));