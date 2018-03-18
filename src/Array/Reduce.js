const array1 = [1,2,3,4,5];
const array2 = [[1,2], [3,4], [5,6]];

const x1 = array1.reduce(((a,b) => {
    return a+b;
}), 0);
// const x2 = array2.reduce(((a,b) => {
//     return (a.concat(b));
// }), []);


console.log(x1);
console.log(x2);