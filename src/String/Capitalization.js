// Capitalize every word in a sentence

const capital = (str) => {

    let mystr = str.split('');

    for (let i = 0; i < mystr.length; i++) {

        if (i === 0) {
            mystr[i] = mystr[i].toLocaleUpperCase();
        }

        if (mystr[i] === ' ') {
            mystr[i+1] = mystr[i+1].toLocaleUpperCase();
        }

    }

    mystr = mystr.join('');

    return mystr;
}

console.log(capital('this is my day'));

