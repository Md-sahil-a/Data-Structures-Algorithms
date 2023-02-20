/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {};
  for(n of nums)
      {
          if(obj[n])
              {
                  return n;
              }
          else{
              obj[n] = 1
          }
         
      }
};