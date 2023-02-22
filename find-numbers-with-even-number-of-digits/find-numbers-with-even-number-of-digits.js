/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;

for(let i=0; i<nums.length; i++)
  {
    let count = 0;
    while(nums[i] !==0)
      {
        nums[i] = Math.floor(nums[i]/10);
        count++;
      }
    if(count%2==0)
    {
      res++;
    }
    
  }
    return res;
    
};