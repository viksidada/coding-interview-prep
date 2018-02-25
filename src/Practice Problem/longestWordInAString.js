const longest = (str1, str2) => {

    for(let i = 0; i < str2.length; i++) {
        let found = false;
        for(let j = i; j < str1.length; j++) {
            if(str2.charAt(i) === str1.charAt(j)) {
                found = true;

            }
        }
        if(!found) return false;
    }

    return true;
}

const dictionary = (str, arr) => {

    let myMap = new Map();
    let max = 0;

    for(let element of arr) {
        let value = longest(str, element);

        if(value) {
            if(max < element.length) {
                max = element.length;
                myMap.set(max, element);
            }
        }
    }

    return myMap.get(max);
}

console.log(longest('abppplee', 'able'));
console.log(longest('abppplee', 'abled'));
console.log(dictionary('abppplee', ['apple', 'ale', 'able', 'bale', 'kangaroo']));