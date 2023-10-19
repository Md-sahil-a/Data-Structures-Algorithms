/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
let c = 0;






let fun = (a) =>{
let b = '';
  b += a;
  return b;
}

let splitc = (b) =>{
  let arr = [];
  for(let i=0;i<b.length; i++)
    {
      arr.push(b[i]);
    }
  return arr;
}

for(let i =0; i<nums.length; i++)
  {
    let str = fun(nums[i]);
    console.log(str)
    let len = splitc(str);
    console.log(len);
    if(len.length%2==0)
    {
      c++;
    }

  }
return c; 
    
};