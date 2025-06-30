/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = {}
    let res = []
    for (let num of nums){
        map[num] = (map[num]|| 0) +1
        
        if (map[num]>Math.floor(nums.length / 3) && !res.includes(num)){
            res.push(Number(num))
        }
    }
    return res
};