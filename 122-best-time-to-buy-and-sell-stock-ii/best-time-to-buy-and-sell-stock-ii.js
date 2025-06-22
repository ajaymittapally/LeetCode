/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i =0
    let hi = prices[0]
    let lo = prices[0]
    let n = prices.length
    let profit = 0

    while (i<n-1){
        while (i < n-1 && prices[i] >=prices[i+1]){
            i+=1
        }    
        lo=prices[i]

        while (i < n-1 && prices[i] <=prices[i+1]){
            i+=1
        }  
        hi=prices[i]

        profit += hi-lo


    }
        
    return profit
};