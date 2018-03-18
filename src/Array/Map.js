const array1 = [1,2,3,4,5];
const kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];
const test = ['test', 'aba', 'ppapp'];

const map1 = array1.map( x => x * 2 );
const map2 = array1.map(Math.sqrt);

const map3 = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});


const map4 = test.map(x => {
    let z = x.split("").reverse().join("");

    if (z === x) return true;
    else return false;
});


console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4);

