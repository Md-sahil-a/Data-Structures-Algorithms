/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) { 
    let obj = {};
    for(let n of nums)
        {
            if(obj[n])
                {
                    return n;
                }
            else{
                obj[n] = 1;
            }
        }
    
};