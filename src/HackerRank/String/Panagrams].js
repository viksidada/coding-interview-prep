const panagrams = (s) => {

    s = s.toLowerCase();
    let myset = new Set();

    let s1 = s.split(' ').join('');

    for(let char of s1) {
        myset.add(char);
    }

    if (myset.size === 26) return 'pangram';
    else return 'not pangram';
}

console.log(panagrams('We promptly judged antique ivory buckles for the next prize '));
console.log(panagrams('We promptly judged antique ivory buckles for the prize'));