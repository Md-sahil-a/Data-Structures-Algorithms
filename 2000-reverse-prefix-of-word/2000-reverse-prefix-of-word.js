/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
let n = 0;
for(let i=0; i<word.length; i++)
  {
    if(word[i] == ch)
    {
      n = i;
      break;
    }
    
  }



let l = 0;
let r = n;
word = word.split("");
while(l<r)
  {
    let temp = word[l];
    word[l] = word[r];
    word[r] = temp;
    l++;
    r--;
  }
return word.join("");    
};