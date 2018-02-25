const quicksort = (arr) => {

    if(arr.length <= 1) return arr;

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }
        else right.push(arr[i]);
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([2,1]));


const kth = (nums, k) => {
    console.log(`initial nums: ${nums}`);
    nums = quicksort(nums);
    console.log(`sorted nums: ${quicksort(nums)}`);

    return (nums[nums.length-k])
}

console.log(kth([2,1], 1))