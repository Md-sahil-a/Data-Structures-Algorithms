/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let res = 0;
    for(let i=0; i<nums.length ; i++)
        {
            for(let j = i+1; j<nums.length; j++ )
                {
                    if(Math.abs(nums[i] - nums[j]) === k)
                        {
                            res++;
                        }
                }
        }
    return res;
    
};