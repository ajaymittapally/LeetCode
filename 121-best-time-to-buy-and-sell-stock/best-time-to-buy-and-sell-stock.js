/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0
  let r =1
  let max_p = 0
  while(r<prices.length){
    if(prices[l]<prices[r]){
        let profit = prices[r]-prices[l]
        max_p = Math.max(max_p,profit)

    }else{
        l=r
    }
    r+=1
  }
    return max_p
};