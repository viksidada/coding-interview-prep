const valid = (s) => {

    let myArray = [];

    for(let char of s) {
        if(char === '(') myArray.push(')');
        else if(char === '{') myArray.push('}');
        else if(char === '[') myArray.push(']');
        else if((myArray.length === 0) || myArray.pop() !== char) return false;
    }

    return (myArray.length === 0);
}