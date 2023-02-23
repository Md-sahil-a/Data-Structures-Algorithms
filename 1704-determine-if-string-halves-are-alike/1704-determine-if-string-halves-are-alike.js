/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toLowerCase();
    
let f = Math.floor(s.length/2);
let se = s.length -1;



let a = "";
let b = "";

for(let i=0; i<f; i++)
  {
    a += s[i];
  }
for(let i=f; i<=se; i++)
  {
    b +=s[i];
  }


let vowel =  "aeiou";
let res1 = 0;
let res2 = 0;
for(let i=0; i<a.length; i++)
  {
    for(let j=0; j<vowel.length; j++)
      {
        if(a[i] == vowel[j])
        {
          res1++;
        }
      }
    
  }


for(let i=0; i<b.length; i++)
  {
    for(let j=0; j<vowel.length; j++)
      {
        if(b[i] == vowel[j])
        {
          res2++;
        }
      }
    
  }
    return res1 == res2;
    
};