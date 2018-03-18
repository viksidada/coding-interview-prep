function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = S.toLowerCase();

    let mymap = new Map();
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let maxOcc = 0;
    let maxV = null;
    let maxVowel = [];
    let finalAnswer = "";

    for (let char of str) {
        let value = mymap.get(char);
        // console.log(char);

        if(value === undefined) {
            value = 1;
        } else value++;

        mymap.set(char, value);
    }

    // console.log(mymap);

    for (let elem of vowel) {
        let value = mymap.get(elem);

        if (maxOcc < value) {
            maxOcc = value;
        }
    }

    for(let elem of vowel) {
        let value = mymap.get(elem);

        if(maxOcc === value) {
            maxVowel.push(elem);
        }
    }

    maxVowel.sort();

    for(let char of maxVowel) {
        finalAnswer += `${char} appears ${maxOcc} time `
    }
    return (finalAnswer);
}

console.log(solution('The quick brown fox jumps over the lazy dog'));
console.log(solution('SAMPLE'));
console.log(solution('lexicon'));


