const stocks = (prices) => {

    if(prices.length === 0) return;

    let min = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
         let diff = prices[i] - min;

         if(profit < diff) profit = diff;
         else if(diff < 0) min = prices[i];
    }

    return profit;
}

console.log(stocks([7, 1, 5, 3, 6, 4]));