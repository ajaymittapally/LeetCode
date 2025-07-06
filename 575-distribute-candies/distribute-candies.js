/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
   let s = new Set()
   for(let num of candyType){
    s.add(num)
   }
   return Math.min(candyType.length/2,s.size)
};