const funny = (s) => {
    let reverse = s.split('').reverse().join('');
    let result = true;

    for (let i = 0; i < s.length/2; i++) {
        let diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
        let diff2 = Math.abs(reverse.charCodeAt(i) - reverse.charCodeAt(i+1));
        if (diff1 !== diff2) {
            result = false;
            break;
        }

     }
    if (result) {
        console.log('Funny');
    } else console.log('Not Funny');
}

funny('acxz');
funny('bcxz');