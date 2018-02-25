const beauty = (s) => {
    if (!(s.includes('010'))) {
        return 0;
    }

    let count = 0;

    let arr= s.split('');

     for (let i = 0; i < arr.length; i++) {
         // console.log((arr.slice(i, i+3)));
        if ((arr.slice(i, i+3)).join('') === '010') {
            count++;
            arr[i+2] = '1';
        }
     }

     return count;
}

console.log(beauty('0101010'));
console.log(beauty('01100'));
console.log(beauty('0100101010'));