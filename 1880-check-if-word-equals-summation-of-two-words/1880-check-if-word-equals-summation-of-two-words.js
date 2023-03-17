/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    
let alpha = 'abcdefghij';

let w1 = "";
let w2 = "";
let w3 = "";
for(let i=0; i<firstWord.length; i++)
  {
    for(let j=0; j<alpha.length; j++)
      {
        if(firstWord[i] == alpha[j])
        {
          w1 += j;
        }
      }
  }



for(let i=0; i<secondWord.length; i++)
  {
    for(let j=0; j<alpha.length; j++)
      {
        if(secondWord[i] == alpha[j])
        {
          w2 += j;
        }
      }
  }



for(let i=0; i<targetWord.length; i++)
  {
    for(let j=0; j<alpha.length; j++)
      {
        if(targetWord[i] == alpha[j])
        {
          w3 += j;
        }
      }
  }

let sum = Number(w1) + Number(w2);

let n = Number(w3);
if(sum == n)
{
  return true;
}else{
    return false;
}
    
};