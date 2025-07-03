/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    min_length = Infinity

    for(let s of strs){
        if(s.length < min_length){
            min_length = s.length
        }
    }
    let i =0
    while( i< min_length){
        for(let s of strs){
            if(s[i] !== strs[0][i]){
                return strs[0].slice(0,i)
            }
            
        }i+=1
    }
    return strs[0].slice(0,i)
    
};