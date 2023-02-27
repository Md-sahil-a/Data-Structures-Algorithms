/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let ts = 0;
    
    for(let i=0; i<nums.length; i++)
        {
            ts+=nums[i];
        }
    
    let ls = 0;
    for(let i=0; i<nums.length ; i++)
        {
            let rs = ts - nums[i] - ls;
            if(rs == ls)
                {
                    return i;
                }
            ls += nums[i]
        }
    return -1;
    
};