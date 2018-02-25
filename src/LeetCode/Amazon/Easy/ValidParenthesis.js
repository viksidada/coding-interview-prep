const valid = (str) => {
    let myArray = [];

    for(let char of str) {
        if(char === '(') {
            myArray.push(')');
        } else if(char === '[') {
            myArray.push(']');
        } else if(char === '{') {
            myArray.push('}');
        } else if ((myArray.length === 0)  || (myArray.pop() !== char)) {
            return false;
        }
    }

    return (myArray.length === 0);
}

console.log(valid('(())'));