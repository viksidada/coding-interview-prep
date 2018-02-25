const twoNums = (nums, target) => {

    if(nums.length === 0) return;

    let myMap = new Map();
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(myMap.get(target-nums[i]) !== undefined) {
            result.push(i);
            result.push(myMap.get(target-nums[i]));
        } else myMap.set(nums[i], i);
    }

    return result.reverse();
}

console.log(twoNums([2,7,11,15], 9));