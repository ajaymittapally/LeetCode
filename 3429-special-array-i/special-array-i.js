/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    function parity(nums){
        return nums%2 ==1?'odd':'even';        
    }
    
    for(let i=1;i<nums.length;i++){
        if(parity(nums[i]) === parity(nums[i-1])){
            return false
        }
    }return true
};