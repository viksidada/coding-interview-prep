// incomplete solution

const robber = (nums) => {
    if(nums.length === 0) return 0;

    if(nums.length === 1) return nums[0];
    let sum1 = 0;
    let sum2 = 0;

    for(let i =0; i < nums.length; i ++) {
        sum1 += nums[i];

    }

    if(nums.length !==2) {
        sum1 += nums[nums.length-2];
        sum2 += nums[nums.length-1];
    }

    if(sum1 > sum2) return sum1;
    else if(sum1 <= sum2) return sum2;

}