const maxSize = (nums, k) => {

    var id = {};
    id[0] = -1;
    var sum = 0, max = 0;
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (!(sum in id)) {
            id[sum] = i;
        }
        if(sum - k in id) {
            console.log(sum-k);
            max = Math.max(max, i - id[sum - k]);
        }
    }
    return max;
}

console.log(maxSize([1, -1, 5, -2, 3], 3));
// console.log(maxSize([-2, -1, 2, 1], 1));
// console.log(maxSize([1,-1,5,-2,3], 3));
    3