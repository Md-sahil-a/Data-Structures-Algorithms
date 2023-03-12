/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let res = [];

for(let i=1; i<=a; i++)
  {
    if(a%i ==0)
    {
      res.push(i);
    }
  }





let res1 = [];

for(let i=1; i<=b; i++)
  {
    if(b%i ==0)
    {
      res1.push(i);
    }
  }


let count = 0;

for(let i=0; i<res.length; i++)
  {
    for(let j =0; j<res1.length; j++)
      {
        if(res[i] == res1[j])
        {
          count++;
        }
      }
    
  }
return count;
    
    
};