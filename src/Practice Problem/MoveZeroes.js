const moveZeroes = (nums) => {

    if(nums.length === 0) return;
    if(nums.length === 1) return nums[0];

    for(let i = 0; i < nums.length; i++) {

        if(nums[0] === 0) {
            nums.push(nums.shift());
            continue;
        }

        if(nums[i] === 0) {

            let a = nums.slice(0,i);
            let b = (nums.slice(i+1));
            // console.log(a, b);
            nums = [...a, ...b, 0];
            console.log(`nums is ${nums}`);
        }
    }
    console.log(nums);
}

(moveZeroes([0, 1, 0, 3, 0,12]));