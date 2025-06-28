/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    let currSum = 0

    for(let i =0;i<nums.length;i++){
        currSum += nums[i]
        result.push(currSum)
    }
    return result

    
};