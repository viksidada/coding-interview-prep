const compressFunction = (lines) => {

    if(lines.length === 0) return;

    if(lines.length === 1) return ("1 " + lines);

    let myArray = lines.split(" ");
    let mySet = new Set();
    let result = "";

    for(let num of myArray) {
        mySet.add(num);
    }

    let entries = mySet.values();
    let i = 0;

    while(i < mySet.size) {
        let count = 0;
        let element = entries.next().value;

        let first = myArray.indexOf(element);
        let last = myArray.lastIndexOf(element);

        if(first !== last) {
            count = last-first+1;
            result += count + " " + element + " ";
        } else result += "1" + " " + element;

        i++;
    }

    return result.trim();

}

console.log(compressFunction('40 40 40 40 29 29 29 29 29 29 29 29 57 57 92 92 92 92 92 86 86 86 86 86 86 86 86 86 86'));