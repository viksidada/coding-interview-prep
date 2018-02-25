const twoSum = function(numbers, target) {

    if(numbers.length === 0) return;
    let myMap = new Map();

    for(let i = 0; i < numbers.length; i++) {
        let value = target - numbers[i];
        let index = myMap.get(value);

        if(index === undefined) {
            myMap.set(numbers[i], i+1);
        } else return [index, i+1];

      }
};

console.log(twoSum([2,3,4], 6));