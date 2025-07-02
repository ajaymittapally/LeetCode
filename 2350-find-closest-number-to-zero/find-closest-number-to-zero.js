/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0]

    for(let i =0;i<nums.length;i++){
        let abscurr = Math.abs(nums[i])
        let absclose = Math.abs(closest)
        if( abscurr < absclose || abscurr === absclose && nums[i]> closest){
            closest = nums[i]
        }
    }
    return closest
    
};