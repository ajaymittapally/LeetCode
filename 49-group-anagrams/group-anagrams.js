/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let s of strs){
        let count = new Array(26).fill(0)

        for(let c of s){
            count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        let key = count.join(',')
        if(!map[key]){
            map[key]=[]
        }
        map[key].push(s)
    }
    return Object.values(map)

    
};