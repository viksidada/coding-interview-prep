const anagram = (s) => {



    if (s.length%2 !== 0) {
        return -1;
    }

    let count = 0;

    let s1 = (Array.from(new Set(s.slice(0, s.length/2)))).join('');
    let s2 = (Array.from(new Set(s.slice(s.length/2)))).join('');

    console.log(s1);
    console.log(s2);

    for (let char of s1) {
        if (!(s2.includes(char))) {
            count++;
            console.log('char: ' + char);
        }
    }

    return count;
}

console.log(anagram('hhpddlnnsjfoyxpciioigvjqzfbpllssuj'));
// console.log(anagram('xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj'));
// console.log(anagram('dnqaurlplofnrtmh'));
// console.log(anagram('aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb'));
// console.log(anagram('lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad'));
// console.log(anagram('drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe'));