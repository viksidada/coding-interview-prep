const majorityElement = (nums) => {

    if(nums.length === 0) return;

    let myMap = new Map();

    let result = 0;

    console.log("length: " + Math.floor(nums.length/2));

    for(let i = 0; i < nums.length; i++) {

        let value = myMap.get(nums[i]);
        console.log(`value is ${value} and element is ${nums[i]}`);

        if (value === undefined) value = 1;
        else value++;

        if(value >= Math.floor(nums.length/2)) return nums[i];

        myMap.set(nums[i], value);
    }

}

// console.log(majorityElement([2,1,1,2,2,3,2,2,4,5,6,2,2,2,2,2]));
console.log(majorityElement([2,2]));