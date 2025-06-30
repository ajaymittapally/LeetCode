/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //moores algorithm 
    let candidate = null;
    let count = 0
    for(let num of nums){
        if( count == 0){
            candidate = num
        }
        if ( candidate  === num){
            count +=1
        }
        else{
            count -=1
        }
    }
    return candidate 
};