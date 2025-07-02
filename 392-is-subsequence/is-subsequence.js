/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i =0
    let j =0

    while(i<s.length && j <t.length){
        if(s[i] === t[j]){
            i+=1
            j+=1
        }else{
            j +=1
        }
    }
    if(i === s.length ){
        return true
    }else{
        return false
    }

};