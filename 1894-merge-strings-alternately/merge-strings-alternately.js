/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = []
  let i = 0
  while(i<word1.length || i<word2.length){
    if(i<word1.length){
        res.push(word1[i])
    }
    if(i<word2.length){
        res.push(word2[i])
    }
    i++
  }
  return res.join('')
};