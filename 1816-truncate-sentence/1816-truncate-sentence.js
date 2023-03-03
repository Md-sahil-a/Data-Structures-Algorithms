/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(" ");


let res = [];

for(let i=0; i<k; i++)
  {
    res.push(s[i]);
  }

return res.join(" ");

    
};