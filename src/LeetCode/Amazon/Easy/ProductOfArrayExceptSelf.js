const productArray = (nums) => {
  let result = [];
  result[0] = nums.slice(1).reduce((a,b) => {return a*b});

      for(let i = 1; i < nums.length; i++) {
          let p1 = p2 = 1;
          p1 = nums.slice(0,i).reduce((a,b) => {return a*b});
          if(i !== nums.length-1) p2 = nums.slice(i+1, nums.length+1).reduce((a,b) => {return a*b});
          else p2 = 1;

          let p = p1 * p2;
          // console.log(p);
          result[i] = p;
    }

    return result;

}



console.log(productArray([1,2,3,4]));

// console.log(productArray([1,0]));