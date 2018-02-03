// Balance a given string of Brackets

const balance = (str) => {

    let open = 0;
    let closed = 0;

    for (let char of str) {
        if (char === '{') {
            open++;
        } else closed --;
    }

    if (open+closed === 0) {
        return 'Balanced';
    } else return 'Unbalanced';

}

console.log(balance('{{{}}'));
console.log(balance('{{{}}}'));