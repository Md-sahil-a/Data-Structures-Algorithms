/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let ans1 = 0;
    let ans2 =0;
    let nums1 = nums.toString().split("").map(Number);
    
    for(let i=0; i<nums.length; i++)
        {
            ans1 += nums[i];
        }
    for(let j=0; j<nums1.length; j++)
        {
            if(nums1[j])
                {
                    ans2+= nums1[j];
                    
                }
        }
    return ans1 - ans2
    
};