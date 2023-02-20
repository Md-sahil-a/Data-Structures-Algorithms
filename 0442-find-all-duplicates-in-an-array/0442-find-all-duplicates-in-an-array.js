/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {};
    let res = [];
    
    for(n of nums)
        {
            if(obj[n])
                {
                    res.push(n);
                }else
                    {
                        obj[n] = 1;
                    }
        }
    return res;
};