const singleNumber = function(nums) {

    if(nums.length === 0) return;

    let result = 0;

    for(let i = 0; i < nums.length; i++) {

        result ^= nums[i];
    }

    return(result);

};

console.log(singleNumber([2,2,1]));