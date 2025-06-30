var majorityElement = function(nums) {
    let can1 = 0;
    let can2 = 0;
    let count1 = 0;
    let count2 = 0;

    for(let num of nums){
        if(num === can1){
            count1 +=1
        }
        else if(num === can2){
            count2 +=1
        }else if(count1 === 0){
            can1 = num 
            count1 = 1
        }
        else if( count2 === 0){
            can2 = num
            count2 = 1
        }
        else{
            count1 -=1
            count2 -=1
        }
    }

    let res = []
    let threshold = Math.floor(nums.length/3)
    if( nums.filter(n=>n === can1).length > threshold){
        res.push(can1)
    }
    if( can2 !== can1 && nums.filter(n=>n === can2).length > threshold){
        res.push(can2)
    }
    return res
};
