const maximumSubarray = (nums) => {
    if (nums.length === 0) return;

    if (nums.length === 1) return nums[0];

        let max = nums[0];
        let currentMax = nums[0];

        for(let i = 0; i < nums.length; i++) {

            currentMax = Math.max(currentMax += nums[i], nums[i]);

            // if(currentMax < 0) currentMax = 0;

            if(max < currentMax) max = currentMax;
        }

        return max;
}

console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]));