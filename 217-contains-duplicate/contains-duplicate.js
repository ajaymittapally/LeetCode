/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let h = new Set()
     for(let num of nums){
        h.add(num)
     }
    return h.size !== nums.length;
     
};