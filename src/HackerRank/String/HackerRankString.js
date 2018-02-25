const hacker = (s) => {
    let pattern = 'hackerrank';

    if (s.length < pattern.length) return 'NO';

    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (j < pattern.length && s.charAt(i) === pattern.charAt(j)) {
            j++;
        }
    }

    return (j === pattern.length ? 'YES' : 'NO');

}

console.log(hacker('hereiamstackerrank'));
console.log(hacker('hackerworld'));
console.log(hacker('why'));