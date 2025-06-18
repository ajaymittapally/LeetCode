/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map ={}
    let res =0
    let majority = null
    for(i =0;i<nums.length;i++){
        map[nums[i]] = (map[nums[i]] || 0)+1

        if(map[nums[i]] > res ){
            res = map[nums[i]]
            majority = nums[i];
        }
    }

   return majority
    
};