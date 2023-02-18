/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let op = [];
    for(let i=0; i<nums.length; i++)
        {
            let res = 0;
            for(let j=0; j<nums.length; j++)
                {
                    if(nums[j] < nums[i])
                        {
                            res++;
                        }
                }
            op.push(res);
        }
    return op;
};