/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum =0;
let pro = 1;

let a = n.toString().split("").map(Number);

for(let i =0; i<a.length; i++)
  {
    sum += a[i];
    pro *= a[i];
  }
    return pro - sum;
    
};