/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    word1 = word1.join("");
    word2 = word2.join("");
    if(word1.length !== word2.length) return false

for(let i=0; i<word1.length; i++)
  {
    if(word1[i] !== word2[i])
    {
      return false;
    }
  }
    return true;
    
};