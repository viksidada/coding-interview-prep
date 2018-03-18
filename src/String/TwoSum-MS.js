const twoSums = (nums, target) => {
    let result = [];

    for(let elem of nums) {
        let diff = target - elem;
        let index = nums.lastIndexOf(diff);
        if(index !== -1) {
            if(nums.indexOf(elem) !== index) {
                result.push(nums.indexOf(elem));
                result.push(index);
                return (result);
            }
        }
    }
}

const validPalendrome = (s) => {
    if(s.length === 0) return true;

    let str = s.toLowerCase();
    let newStr = str.replace(/[^a-z0-9]/gi,'');
    console.log(newStr);

    let reverse = newStr.split("").reverse().join("");

    if(newStr === reverse) return true;
    else return false;
}

const reverse = (str) => {
    if(str.length === 0) return str;

    let reverse = str.split(" ").reverse().join(" ");

    return reverse;

}



console.log(reverse("the sky is blue"));
// console.log(validPalendrome("A man, a plan, a canal: Panama"));
// console.log(twoSums([2,7,11,15], 9));