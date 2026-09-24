/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

    let maxProfit = 0;
    let temp = 0; // Index of the lowest buying price

    for (let i = 0; i < prices.length; i++) {

        // Update buying price if we find a lower price
        if (prices[i] < prices[temp]) {
            temp = i;
        }

        // Calculate profit by selling at the current price
        let diff = prices[i] - prices[temp];

        // Update maximum profit if current profit is higher
        if (maxProfit < diff) {
            maxProfit = diff;
        }
    }
    return maxProfit; 
};