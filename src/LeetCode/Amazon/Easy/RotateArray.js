const rotate = (nums, k) => {

    for(let i = 0; i < k; i++) {
        // let value = nums.pop();
        nums.unshift(nums.pop());
    }

    return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));