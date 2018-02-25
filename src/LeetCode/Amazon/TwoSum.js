const twoSum = (nums, target) => {
    // for (let num of nums) {
    //     let value = target - num;
    //
    //     let index = nums.indexOf(value);
    //     if(index !== -1 && index !== nums.indexOf(num)) {
    //         return ([nums.indexOf(num), index]);
    //     }
    // }

    const dict = {};

    for (let i = nums.length; i >= 0 ; i--) {
        const n = dict[nums[i]];

        if (n !== undefined) {
            return [n, i];
        }

        dict[target - nums[i]] = i;
    }
}

console.log(twoSum([3,2,4], 6));