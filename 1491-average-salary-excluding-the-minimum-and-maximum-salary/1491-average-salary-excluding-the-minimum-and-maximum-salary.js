/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let totalsum =0;
let min = salary[0];
let max = salary[0];
for(let i=0; i< salary.length; i++)
  {
    if(salary[i] > max)
    {
      max = salary[i];      
    }
    if(salary[i] < min)
    {
      min = salary[i];
    }
  }

for(let i=0; i<salary.length; i++)
  {
    totalsum += salary[i];
    
  }
let minMax = min + max;
let average = totalsum-minMax;
    let d = salary.length -2;
return average/d;
    
};