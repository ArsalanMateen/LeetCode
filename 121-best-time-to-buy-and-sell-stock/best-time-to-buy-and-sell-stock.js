/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0; // if array has less than 2 elements
    }

    let min = prices[0];
    let max_profit = 0;
    
    for(let i=0; i<prices.length; i++){
        if(prices[i]-min > max_profit){
            max_profit = prices[i]-min;
        }
        if(min > prices[i]){
            min = prices[i]
        }
    }
    return max_profit;
};