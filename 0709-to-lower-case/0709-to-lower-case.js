/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {

let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";

s = s.split("");


for(let i=0; i<s.length; i++)
  {
    for(let j=0; j<small.length; j++)
      {
        if(s[i] == big[j])
        {
          s[i] =  small[j];
        }
      }
  }

return s.join("");
    
};