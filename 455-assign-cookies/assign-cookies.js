/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let n = g.lenght
    let m = s.length
    let l = 0;
    let r = 0;
    while (l<m){
        if(g[r]<=s[l]){
            r+=1
        }
        l+=1
    }
    return r

    
    
};