/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
let even = [];
let odd = [];
let res = [];

for(let i=0; i<nums.length; i++)
  {
    if(nums[i] %2==0)
    {
      even.push(nums[i]);
    }else{
      odd.push(nums[i]);
    }
  }



for(let i=0; i<even.length; i++)
  {
    res.push(even[i]);
  }

for(let i=0; i<odd.length; i++)
  {
    res.push(odd[i]);
  }

return res;
    
};