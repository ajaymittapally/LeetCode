/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l =0
    let r = nums.length-1

    while(l <= r){
        mid = Math.floor((l+r)/2)
        if(target === nums[mid]){
            return mid
        }        
        if(target > nums[mid]){
            l = mid +1
        }
        else{
            r = mid-1
        }
    }
    return l
};