/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let left = new Array(ratings.length).fill(1)
    let right = new Array(ratings.length).fill(1)
    left[0] =1
    right[0] = 1

    for(let i = 1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            left[i] = left[i-1] +1
        }else{
            left[i] = 1
        }
        
    } 
    for(let i = ratings.length -2; i >=0;i--){
        if(ratings[i]>ratings[i+1]){
            right[i] = right[i+1] + 1
        }else{
            right[i] = 1
        }
    }

    let sum = 0
    for(let i =0;i<ratings.length;i++){
        sum = sum + Math.max(left[i],right[i])
    }
    return sum
};