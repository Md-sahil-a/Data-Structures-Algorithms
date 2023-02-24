/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ");
    for(let i=0; i<s.length; i++)
        {
          s[i] = s[i].split("").reverse().join(""); 
        }
    return s.join(" ");   
};