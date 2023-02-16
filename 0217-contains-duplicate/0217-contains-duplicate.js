/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for( n of nums)
        {
            if(obj[n])
                {
                    return true;
                }
            else{
                obj[n] = 1;
            }
        }
    return false;
};