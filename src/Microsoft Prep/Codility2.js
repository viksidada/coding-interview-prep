function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = S.toLowerCase();
    let max = 0;
    let valueA = 0;
    let valueE = 0;
    let valueI = 0;
    let valueO = 0;
    let valueU = 0;
    let maxVowel = null;
    let finalAnswer = "";

    for(let char of str) {
        // console.log(char);
        switch(char) {
            case "a":
                ++valueA;
                if(max < valueA) {
                    max = valueA;
                    maxVowel = "a";
                }
                break;
            case "e":
                ++valueE;
                if(max < valueE) {
                    max = valueE;
                    maxVowel = "e";
                }
                break;
            case "i":
                ++valueI;
                if(max < valueI) {
                    max = valueI;
                    maxVowel = "i";
                }
                break;
            case "o":
                ++valueO;
                if(max < valueO) {
                    max = valueO;
                    maxVowel = "o";
                }
                break;
            case "u":
                ++valueU;
                if(max < valueU) {
                    max = valueU;
                    maxVowel = "u";
                }
                break;
            default:
                let text = "No Vowel Found";
        }

    }

     finalAnswer = `${maxVowel} appears ${max} time `


    if (!finalAnswer) return null;
    return (finalAnswer);
}

console.log(solution('The quick brown fox jumps over the lazy dog'));
console.log(solution('SAMPLE'));
console.log(solution('lexicon'));
console.log(solution('lll'));

