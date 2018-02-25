const best = (prices) => {
    let max = 0;
    let low = prices[0];

    for(let i = 0; i < prices.length; i++) {

        let profit = prices[i+1] - low;

       if(profit < 0) {
           low = prices[i+1];
       }

        if (max < profit) {
            max = profit;
        }
    }
    return max;
}

console.log(best([7, 1, 5, 3, 6, 4]));
console.log(best([7, 6, 4, 3, 1]));
console.log(best([2,1,4]));